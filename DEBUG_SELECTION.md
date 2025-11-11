# Debugging Selection Issues

## Current Problems

1. **Selection appears opaque** - Text is completely hidden under selection
2. **Selection doesn't clear** - Highlight remains after clicking elsewhere  
3. **Right-click shows "Copy Image"** - Canvas doesn't expose text selection

## Changes Made

### 1. Selection Rendering Order (lib/renderer.ts)
- Now forces re-render of lines that have selection
- Selection overlay drawn AFTER all text (so it appears on top)
- Added debug logging to track rendering

### 2. Right-Click Handler (lib/selection-manager.ts)
- Added contextmenu event listener
- Prevents default menu, copies selection to clipboard
- Only triggers if selection exists

### 3. Debug Logging
Added console.log statements to track:
- Selection coordinates (rows/cols)
- Selection color and alpha value
- Rectangle dimensions being drawn

## How to Debug

### Step 1: Open Test File

```bash
./run-demo.sh
```

Then open: http://localhost:8000/test-selection.html

This is a simpler test page with buttons to test the API.

### Step 2: Check Browser Console

1. Open DevTools (F12)
2. Go to Console tab
3. Look for these logs when you select text:

```
Rendering selection: rows 0-2, cols 5-25
Selection color: #264f78, alpha: 0.5
Drawing selection rect: x=45, y=0, w=180, h=16
Drawing selection rect: x=0, y=16, w=180, h=16
Drawing selection rect: x=0, y=32, w=180, h=16
Selection rendering complete
```

### Step 3: Verify Alpha Blending

The `alpha: 0.5` should make selection semi-transparent. If you see `alpha: 1.0`, that's the bug.

### Step 4: Test Alpha Blending Independently

Open `test-selection-alpha.html` in browser. This is a pure canvas test without the terminal.
- You should see semi-transparent blue overlay over white text
- If this works, the issue is in our terminal rendering
- If this doesn't work, it's a browser/canvas issue

## Potential Causes

### 1. ctx.globalAlpha Not Applied
**Symptom:** Selection is opaque  
**Check:** Look for `alpha: 0.5` in console logs  
**Fix:** Verify `ctx.save()` and `ctx.restore()` are balanced  

### 2. Selection Drawn Under Text
**Symptom:** No selection visible at all  
**Check:** Verify "Selection rendering complete" appears AFTER line renders  
**Fix:** Ensure selection drawn in correct order  

### 3. Canvas Composite Operation Wrong
**Symptom:** Selection replaces text instead of overlaying  
**Check:** Look for `ctx.globalCompositeOperation` in code  
**Fix:** Should be 'source-over' (default)  

### 4. Multiple Renders Clearing Selection
**Symptom:** Selection flickers or disappears  
**Check:** Count how many times "Rendering selection" appears per frame  
**Fix:** Should only render once per frame  

### 5. Alpha Reset Between Draws
**Symptom:** First line semi-transparent, others opaque  
**Check:** Look at multiple "Drawing selection rect" logs  
**Fix:** Ensure `ctx.save()` before loop, `ctx.restore()` after  

## Manual Tests

### Test 1: Basic Selection
1. Click and drag across "Welcome to the selection test!"
2. Should see blue highlight
3. Text should still be readable
4. Release mouse - text should copy to clipboard

**Expected:** Semi-transparent blue overlay, text visible  
**Actual:** [Fill in what you see]

### Test 2: Right-Click
1. Select some text
2. Right-click on selection
3. Should prevent default context menu
4. Should copy text to clipboard
5. Check console for "Copied selection to clipboard (via right-click)"

**Expected:** No context menu, text copied  
**Actual:** [Fill in what you see]

### Test 3: Clear Selection
1. Select some text
2. Click elsewhere in terminal (not on selected text)
3. Selection should clear

**Expected:** Selection disappears  
**Actual:** [Fill in what you see]

### Test 4: API Methods
Use browser console:

```javascript
// Select all
term.selectAll()
// Expected: Everything highlighted

// Get selection
console.log(term.getSelection())
// Expected: All terminal text

// Check has selection
console.log(term.hasSelection())
// Expected: true

// Clear
term.clearSelection()
// Expected: Highlight disappears

// Check again
console.log(term.hasSelection())
// Expected: false
```

## Next Steps

Based on test results:

### If alpha=0.5 but still opaque:
- Check if text is being redrawn after selection
- Verify z-order of canvas layers
- Check for CSS opacity/filters

### If alpha=1.0 in logs:
- ctx.save()/restore() not working
- globalAlpha being reset somewhere
- Check for other code setting globalAlpha

### If selection never appears:
- Check if renderSelection() is being called
- Verify selection coordinates are valid
- Check if canvas is being cleared after draw

### If selection doesn't clear:
- Check if clearSelection() is being called
- Verify requestRender() triggers re-render
- Check if dirty lines include selection area

## Code Locations

- Selection rendering: `lib/renderer.ts:541-592`
- Mouse handlers: `lib/selection-manager.ts:165-236`
- Clear logic: `lib/selection-manager.ts:114-123`
- Render loop: `lib/renderer.ts:221-300`

## Questions to Answer

1. What does browser console show when you select text?
2. Does `test-selection-alpha.html` show semi-transparent blue?
3. Does right-click prevent the default context menu?
4. Does selection ever clear, or is it permanent?
5. Can you paste the clipboard after selecting?

Please run these tests and report back the results!
