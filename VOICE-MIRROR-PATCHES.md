# Voice Mirror Patches

This is a fork of [coder/ghostty-web](https://github.com/coder/ghostty-web) maintained by contextmirror for use in [Voice Mirror](https://github.com/contextmirror/voice-mirror).

Voice Mirror embeds ghostty-web as a terminal emulator inside a Tauri 2 desktop app. The terminal displays AI CLI providers (Claude Code, OpenCode, etc.) running in a PTY. These TUI apps rapidly reposition the cursor to update status bars, input fields, and content areas — which exposes rendering edge cases in the TypeScript layer.

## Bugs to Fix

### 1. Canvas content bleeding outside container bounds

**Symptom:** Text fragments (e.g. `o:`, `ec!`, `nd:`) render outside the left edge of the terminal container, visible behind the sidebar.

**Root cause:** `CanvasRenderer.resize()` (renderer.ts:236-258) sets canvas CSS dimensions to `cols * charWidth` x `rows * charHeight`, but doesn't enforce clipping. If the container is smaller than the computed canvas size (e.g. due to padding, flex layout, or DPI rounding), content renders outside bounds.

**Where to fix:** `renderer.ts` — `resize()` and `render()` methods.

**Approach:**
- Add a `ctx.save()` / `ctx.beginPath()` / `ctx.rect(0, 0, cssWidth, cssHeight)` / `ctx.clip()` at the start of each `render()` call, with `ctx.restore()` at the end
- Ensure `renderLine()` respects canvas bounds — `clearRect` and `fillRect` should not exceed `cols * metrics.width`
- Consider snapping canvas dimensions to whole cell multiples to prevent fractional pixel bleeding

### 2. Cursor ghost artifacts (flickering `|` at multiple positions)

**Symptom:** Phantom bar cursors (`|`) appear at position (0,0) and next to the TUI status bar, flickering rapidly. The real cursor is at the input prompt — ghosts appear at positions the cursor passes through during TUI updates.

**Root cause:** The render loop (terminal.ts:1118-1144) runs every `requestAnimationFrame` (~16ms). Each frame, `getCursor()` returns the WASM cursor position. When TUI apps update multiple screen regions per frame (status bar -> content -> input), the cursor may be at intermediate positions when the frame renders. The renderer (renderer.ts:305-325) redraws old+new cursor lines, but intermediate positions within a single WASM update batch can cause brief ghost renders.

**Where to fix:** `renderer.ts` — `renderCursor()` and cursor tracking in `render()`.

**Possible approaches:**
- **Debounce cursor rendering:** Only paint the cursor if the position has been stable for 1+ frames. Track `cursorStableFrames` — increment when position unchanged, reset on move. Only call `renderCursor()` when `cursorStableFrames >= 1`.
- **Skip cursor during heavy updates:** If more than N rows are dirty in a frame, skip cursor rendering (the TUI is in the middle of a bulk update).
- **Double-buffer cursor position:** Record cursor position at end of frame, only render it at the START of the next frame. This ensures we always render the "settled" position.

### 3. (Potential) DPI scaling edge cases

**Symptom:** On high-DPI displays (devicePixelRatio > 1), cell boundaries may not align perfectly, causing hairline gaps or overlap between cells.

**Where to fix:** `renderer.ts` — `measureFont()` and `resize()`.

**Approach:** Ensure all pixel calculations round to whole device pixels, not CSS pixels.

## Architecture Notes

- **WASM layer** (ghostty-vt.wasm): VT100 parser, terminal state, cell buffers. Compiled from Ghostty's Zig source. We do NOT modify this — it stays upstream-compatible.
- **TypeScript layer** (lib/): All rendering, input handling, selection, scrolling. This is where our patches live.
- **Build:** `npm run build` recompiles TypeScript and bundles with existing WASM. No Zig toolchain needed.

## Upstream Sync

To pull upstream changes from coder/ghostty-web:

```bash
git remote add upstream https://github.com/coder/ghostty-web.git
git fetch upstream
git merge upstream/main  # or cherry-pick specific commits
```

Our patches are scoped to the TypeScript rendering layer, so WASM updates from upstream should merge cleanly.
