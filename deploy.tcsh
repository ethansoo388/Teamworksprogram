#!/bin/tcsh

# deploy - push main, sync public -> hostinger branch, push hostinger, return to main
#
# Safety features:
#   - local hostinger is realigned to origin/hostinger before committing onto
#     it, so deploys from multiple machines never hit non-fast-forward pushes
#   - node_modules is parked outside the repo during the hostinger stage (the
#     branch wipe deletes untracked files, which used to nuke node_modules on
#     every deploy) and restored afterwards, even on failure

# Require exactly 1 argument (commit message)
if ( $#argv < 1 ) then
  echo "❌ Error: Missing commit message."
  echo "Usage: ./deploy \"your commit message\""
  exit 1
endif

set msg = "$argv[1]"

# Optional: ensure we're in a git repo
git rev-parse --is-inside-work-tree >& /dev/null
if ( $status != 0 ) then
  echo "❌ Error: This folder is not a git repository."
  exit 1
endif

echo "🚀 Deploy started. Commit message: $msg"

# Recover node_modules left parked by a previous crashed run
if ( ! -d node_modules && -d ../node_modules_deploy_tmp ) then
  echo "ℹ️  Restoring node_modules left over from a previous run..."
  mv ../node_modules_deploy_tmp node_modules
endif

# MAIN branch commit + push
echo "➡️  Committing & pushing on main..."
git add .

# Tolerate a clean main: skip the commit but still push and deploy.
git diff --cached --quiet
if ( $status == 0 ) then
  echo "ℹ️  Nothing to commit on main — skipping commit, continuing deploy."
else
  git commit -m "$msg"
  if ( $status != 0 ) then
    echo "❌ Error: git commit failed on main."
    exit 1
  endif
endif

git push
if ( $status != 0 ) then
  echo "❌ Error: git push failed on main."
  exit 1
endif

# Refresh ../public snapshot
echo "➡️  Refreshing ../public snapshot..."
rm -rf ../public
cp -R public ../.

if ( $status != 0 ) then
  echo "❌ Error: Failed copying public -> ../public. Check that ./public exists."
  exit 1
endif

# Realign local hostinger with the remote before building on it. Deploys
# from another machine advance origin/hostinger; without this, the push
# below is rejected as non-fast-forward. The branch is a generated snapshot,
# so the remote version is always the correct base.
echo "➡️  Syncing hostinger branch with origin..."
git fetch origin hostinger
if ( $status == 0 ) then
  git branch -f hostinger origin/hostinger
  if ( $status != 0 ) then
    echo "❌ Error: Could not realign local hostinger branch."
    exit 1
  endif
else
  echo "ℹ️  Could not fetch origin/hostinger — continuing with local branch."
endif

# Park node_modules outside the repo: the branch wipe below deletes
# untracked files, and reinstalling 400+ packages after every deploy hurts.
set nm_moved = 0
if ( -d node_modules ) then
  echo "➡️  Parking node_modules outside the repo..."
  rm -rf ../node_modules_deploy_tmp
  mv node_modules ../node_modules_deploy_tmp
  if ( $status != 0 ) then
    echo "❌ Error: Failed to move node_modules aside."
    exit 1
  endif
  set nm_moved = 1
endif

# Switch to hostinger branch
echo "➡️  Switching to hostinger branch..."
git checkout hostinger
if ( $status != 0 ) then
  echo "❌ Error: Failed to checkout branch 'hostinger'."
  goto restore_exit1
endif

# Wipe hostinger branch contents (careful!) and copy new build
# NOTE: shell globs (*) skip dotfiles, so .htaccess must be wiped and copied
# explicitly — otherwise the live site keeps a stale .htaccess forever.
# .git is untouched: rm -rf * skips dotfiles, and public/ contains no .git.
echo "⚠️  Clearing branch contents..."
rm -rf *
rm -f .htaccess

echo "➡️  Copying ../public contents (including .htaccess) -> repo root..."
cp -R ../public/. .
if ( $status != 0 ) then
  echo "❌ Error: Failed copying ../public contents into repo root."
  goto fail_back_to_main
endif

# Hostinger branch commit + push
echo "➡️  Committing & pushing on hostinger..."
git add .

# Tolerate an unchanged build: skip the commit but still push.
git diff --cached --quiet
if ( $status == 0 ) then
  echo "ℹ️  Build identical to last deploy — nothing to commit on hostinger."
else
  git commit -m "$msg"
  if ( $status != 0 ) then
    echo "❌ Error: git commit failed on hostinger."
    goto fail_back_to_main
  endif
endif

git push
if ( $status != 0 ) then
  echo "❌ Error: git push failed on hostinger."
  goto fail_back_to_main
endif

# Back to main
echo "➡️  Switching back to main..."
git checkout main
if ( $status != 0 ) then
  echo "❌ Error: Failed to checkout branch 'main'."
  goto restore_exit1
endif

if ( $nm_moved ) then
  echo "➡️  Restoring node_modules..."
  mv ../node_modules_deploy_tmp node_modules
endif

echo "✅ Deploy done."
exit 0

# ── Error handling ────────────────────────────────────────────────────────
fail_back_to_main:
git checkout main
goto restore_exit1

restore_exit1:
if ( $nm_moved ) then
  echo "➡️  Restoring node_modules..."
  mv ../node_modules_deploy_tmp node_modules
endif
exit 1
