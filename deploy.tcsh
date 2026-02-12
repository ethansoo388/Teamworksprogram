#!/bin/tcsh

# deploy - push main, sync public -> hostinger branch, push hostinger, return to main

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

# MAIN branch commit + push
echo "➡️  Committing & pushing on main..."
git add .
git commit -m "$msg"
if ( $status != 0 ) then
  echo "❌ Error: git commit failed on main (maybe nothing to commit?)."
  exit 1
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

# Switch to hostinger branch
echo "➡️  Switching to hostinger branch..."
git checkout hostinger
if ( $status != 0 ) then
  echo "❌ Error: Failed to checkout branch 'hostinger'."
  exit 1
endif

# Wipe hostinger branch contents (careful!) and copy new build
echo "⚠️  Clearing branch contents..."
rm -rf *

echo "➡️  Copying ../public/* -> repo root..."
cp -R ../public/* .
if ( $status != 0 ) then
  echo "❌ Error: Failed copying ../public/* into repo root."
  git checkout main
  exit 1
endif

# Hostinger branch commit + push
echo "➡️  Committing & pushing on hostinger..."
git add .
git commit -m "$msg"
if ( $status != 0 ) then
  echo "❌ Error: git commit failed on hostinger (maybe nothing to commit?)."
  git checkout main
  exit 1
endif

git push
if ( $status != 0 ) then
  echo "❌ Error: git push failed on hostinger."
  git checkout main
  exit 1
endif

# Back to main
echo "➡️  Switching back to main..."
git checkout main
if ( $status != 0 ) then
  echo "❌ Error: Failed to checkout branch 'main'."
  exit 1
endif

echo "✅ Deploy done."
exit 0

