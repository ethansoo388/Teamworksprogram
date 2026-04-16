#!/bin/tcsh

setenv PATH "/opt/homebrew/opt/node/bin:$PATH"

set SCRIPT_NAME = `basename $0`

echo ""
echo "================================================"
echo "  buildClaude"
echo "================================================"
echo ""

# ── 1. Clean current directory ────────────────────────────────────────────
echo "[1/3] Cleaning `pwd` (keeping node_modules + all hidden items + script) ..."

find . -maxdepth 1 -mindepth 1 \
    ! -name '.*' \
    ! -name 'node_modules' \
    ! -name "$SCRIPT_NAME" \
    -exec rm -rf {} +

echo "  => Done"
echo ""

# ── 2. Find the latest Claude<NNN>_*.zip in ~/Downloads ─────────────────────
echo "[2/3] Scanning ~/Downloads for latest Claude<NNN>_*.zip ..."

set LATEST_ZIP = ""

foreach zipfile ( ~/Downloads/Claude[0-9]*_*.zip )
    if ( -f "$zipfile" ) then
        set num = `echo "$zipfile" | sed -E 's/.*Claude([0-9]+)_.*\.zip$/\1/'`
        if ( "$num" != "$zipfile" ) then
            if ( "$LATEST_ZIP" == "" ) then
                set LATEST_ZIP = "$zipfile"
                set MAX_NUM = "$num"
            else if ( "$num" > "$MAX_NUM" ) then
                set LATEST_ZIP = "$zipfile"
                set MAX_NUM = "$num"
            endif
        endif
    endif
end

if ( "$LATEST_ZIP" == "" ) then
    echo "  ERROR: No Claude<NNN>_*.zip files found in ~/Downloads"
    exit 1
endif

echo "  => $LATEST_ZIP"
echo ""

# ── 3. Unzip into current directory (overwrite everything silently) ───────
echo "[3/3] Extracting and overwriting files silently ..."

unzip -qo "$LATEST_ZIP" -d .

echo "  => Done"
echo ""

# ── 4. Build ──────────────────────────────────────────────────────────────
tcsh build.tcsh