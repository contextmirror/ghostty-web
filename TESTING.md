# Testing `npx ghostty-web` Before Merge

This document explains how to test the new `npx ghostty-web` demo launcher before merging to main.

## Quick Tests

### 1. Direct Test (Fastest)

Just run the bin script directly:

```bash
node bin/ghostty-web.js
```

Open your browser to `http://localhost:8080` and verify:
- ✅ Terminal loads and renders correctly
- ✅ Can type and see output
- ✅ Colors and styling work
- ✅ Connection status shows "Connected"
- ✅ Ctrl+C stops the server cleanly

### 2. Package Tarball Test (Most Realistic)

This simulates what users will experience with `npx ghostty-web`:

```bash
# Create the tarball (like npm publish would)
npm pack

# Install in a temp directory
TEST_DIR=$(mktemp -d)
cd $TEST_DIR
npm install /path/to/ghostty-web-0.2.1.tgz

# Test it
npx ghostty-web

# Clean up when done
rm -rf $TEST_DIR
```

### 3. Global Install Test

```bash
# Pack the tarball
npm pack

# Install globally
npm install -g ./ghostty-web-0.2.1.tgz

# Run from anywhere
cd ~
ghostty-web

# Clean up
npm uninstall -g ghostty-web
```

## Automated Test Script

We've created a comprehensive test script:

```bash
/tmp/test-ghostty-web.sh
```

This script:
1. ✅ Verifies tarball exists
2. ✅ Creates temp directory
3. ✅ Installs package from tarball
4. ✅ Checks bin script is executable
5. ✅ Starts server and verifies it runs
6. ✅ Cleans up after itself

## What to Verify

When testing, check these things:

### Server Startup
- [x] Server starts without errors
- [x] Prints clean startup banner
- [x] Shows correct URL (http://localhost:8080)
- [x] Browser opens automatically (or prints URL)
- [x] No npm dependency warnings

### Browser Experience
- [x] Page loads without 404 errors
- [x] Terminal renders with proper styling
- [x] Connection status shows "Connected"
- [x] Can type in terminal
- [x] Shell commands execute (ls, pwd, etc.)
- [x] ANSI colors display correctly
- [x] Terminal fits the window properly

### Edge Cases
- [x] Port conflict: What if 8080 is in use?
  - Server shows error: "Port 8080 is already in use"
- [x] Missing files: What if dist/ doesn't exist?
  - Server shows error: "Make sure you have run: npm run build"
- [x] Ctrl+C: Clean shutdown
  - Shows "Shutting down..." and exits cleanly

### Package Contents

Verify the tarball includes the right files:

```bash
tar -tzf ghostty-web-0.2.1.tgz | grep -E "(bin/|dist/|wasm)"
```

Should show:
- ✅ `package/bin/ghostty-web.js`
- ✅ `package/dist/ghostty-web.js`
- ✅ `package/dist/ghostty-web.umd.cjs`
- ✅ `package/dist/index.d.ts`
- ✅ `package/ghostty-vt.wasm`
- ✅ `package/dist/ghostty-vt.wasm`

### Package Size

Check the package size is reasonable:

```bash
npm pack --dry-run 2>&1 | grep "package size"
```

Should be around **942 KB** (less than 1 MB) ✅

## Testing in Different Environments

### macOS
```bash
npm pack
npm install -g ./ghostty-web-0.2.1.tgz
ghostty-web
# Browser should auto-open with 'open' command
```

### Linux
```bash
npm pack
npm install -g ./ghostty-web-0.2.1.tgz
ghostty-web
# Browser should auto-open with 'xdg-open' command
```

### Windows (WSL)
```bash
npm pack
npm install -g ./ghostty-web-0.2.1.tgz
ghostty-web
# May need to manually open browser
```

## Limitations to Verify

The demo should clearly show this message:

```
📝 Note: This demo uses basic shell I/O (not full PTY).
   For full features, see: https://github.com/coder/ghostty-web
```

Known limitations (expected):
- Terminal resize doesn't update shell
- Some TUI apps (vim, htop) may not work perfectly
- No true PTY support (using basic spawn)

These are **intentional tradeoffs** to maintain zero dependencies.

## Troubleshooting

### "Cannot find module" errors
Make sure you ran `npm pack` from the correct directory and the tarball exists.

### Server won't start
- Check if port 8080 is already in use
- Make sure dist/ directory exists (should be in the tarball)

### WebSocket connection fails
- Check browser console for errors
- Verify the server is running
- Try refreshing the page

## Success Criteria

Before merging, verify:
- ✅ `npm pack` creates tarball without errors
- ✅ Tarball is < 1 MB
- ✅ Install from tarball works
- ✅ `npx ghostty-web` starts server
- ✅ Browser shows working terminal
- ✅ Can type and execute commands
- ✅ No runtime dependencies required
- ✅ Clean shutdown with Ctrl+C

## Next Steps

After testing passes:
1. Merge to main
2. Run `npm run build` on main (if WASM needs rebuilding)
3. Run `npm publish`
4. Test with `npx ghostty-web` from npm registry
5. Update README with `npx ghostty-web` quick start
