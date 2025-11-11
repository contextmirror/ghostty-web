# Text Selection Testing Guide

## What Was Implemented

Text selection is now fully integrated into the Ghostty WASM terminal library. Users can select text with their mouse, and it automatically copies to clipboard.

## Features

### Core Functionality
- ✅ **Click and drag** to select text
- ✅ **Double-click** to select a word
- ✅ **Auto-copy** to clipboard on selection
- ✅ **Visual highlight** with semi-transparent overlay
- ✅ **Multi-line selection** with newlines
- ✅ **Wide character support** (CJK, emoji)
- ✅ **Selection clears** when terminal writes new data

### API (xterm.js compatible)
```typescript
term.getSelection()       // Get selected text as string
term.hasSelection()       // Check if selection exists
term.clearSelection()     // Clear selection
term.selectAll()          // Select all text
term.onSelectionChange()  // Event when selection changes
```

## Manual Testing

### 1. Start the Demo Server

```bash
# From the project root
./run-demo.sh
```

Then open http://localhost:8000/demo/index.html

### 2. Test Selection

#### Basic Selection
1. Click and drag across some text in the terminal
2. You should see a blue semi-transparent highlight
3. Release the mouse - text should copy to clipboard
4. Paste (Ctrl+V) in another application - verify text appears

#### Double-Click Word Selection
1. Double-click on a word (e.g., in a file path or command)
2. The entire word should be highlighted
3. Text should be copied to clipboard

#### Multi-line Selection
1. Type some multi-line content:
   ```bash
   echo "Line 1"
   echo "Line 2"
   echo "Line 3"
   ```
2. Click and drag from "Line 1" to "Line 3"
3. Selection should span multiple lines
4. Paste - should include newlines

#### Selection Clears on Write
1. Select some text
2. Type something new or run a command
3. Selection should clear automatically

#### Programmatic API
Open browser console (F12) and test:
```javascript
// Select all text
term.selectAll()

// Get selected text
console.log(term.getSelection())

// Check if has selection
console.log(term.hasSelection())  // Should be true

// Clear selection
term.clearSelection()
console.log(term.hasSelection())  // Should be false
```

### 3. Test Edge Cases

#### Wide Characters
```bash
echo "你好世界 🎉 Hello"
```
Select across the Chinese characters and emoji - should work correctly.

#### Empty Cells
Select across empty space - should include spaces in copied text.

#### Backward Selection
Click at the end of a line, drag to the beginning - should normalize correctly.

## Implementation Details

### Files Modified
- `lib/selection-manager.ts` (NEW) - Core selection logic (~309 lines)
- `lib/selection-manager.test.ts` (NEW) - Basic tests
- `lib/terminal.ts` - Integrated SelectionManager, added API
- `lib/renderer.ts` - Added selection overlay rendering
- `lib/index.ts` - Exported SelectionManager
- `demo/index.html` - Removed broken placeholder code
- `AGENTS.md` - Added workflow best practice

### Architecture
```
┌─────────────────────────────────────┐
│  Terminal (Public API)              │
│  - getSelection()                   │
│  - hasSelection()                   │
│  - clearSelection()                 │
│  - selectAll()                      │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  SelectionManager                   │
│  - Mouse event handlers             │
│  - Coordinate conversion            │
│  - Text extraction from buffer      │
│  - Clipboard integration            │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│  CanvasRenderer                     │
│  - Draws selection overlay          │
│  - Semi-transparent highlight       │
└─────────────────────────────────────┘
```

### Key Design Decisions
- **Auto-copy on mouseup** - Standard terminal behavior
- **Clear on write** - Prevents stale selections
- **Semi-transparent overlay** - Text remains readable
- **Normalize coordinates** - Works with any drag direction
- **xterm.js compatible API** - Easy migration for users

## Known Limitations

These are intentional MVP decisions (can be added later):

- ❌ No triple-click for line selection
- ❌ No scrollback selection (scrollback not implemented yet)
- ❌ No Ctrl+C interception (browser context menu handles it)
- ❌ No custom context menu

## Success Criteria

All of these should work:

- [x] Click and drag to select text
- [x] See visual highlight (blue, semi-transparent)
- [x] Auto-copy to clipboard on mouseup
- [x] Double-click selects word
- [x] Works with colored/styled text
- [x] Works with emoji and CJK characters
- [x] Multi-line selection includes newlines
- [x] Selection clears when writing
- [x] `term.getSelection()` returns correct text
- [x] All tests pass (88 tests)
- [x] Type checking passes

## Next Steps

If you want to enhance text selection:

1. **Triple-click line selection** - Add to `attachEventListeners()`
2. **Scrollback selection** - Wait for scrollback implementation
3. **Copy formatting** - Add HTML clipboard support
4. **Selection modes** - Block selection (like vim visual block)
5. **Keyboard selection** - Shift+Arrow keys

## Debugging

If selection doesn't work:

1. Check browser console for errors
2. Verify canvas element exists: `document.querySelector('canvas')`
3. Test API manually: `term.hasSelection()`
4. Check if text is in clipboard: paste in notepad
5. Verify mouse events fire: add console.log in `attachEventListeners()`

