var N = /* @__PURE__ */ ((e) => (e[e.CURSOR_KEY_APPLICATION = 0] = "CURSOR_KEY_APPLICATION", e[e.KEYPAD_KEY_APPLICATION = 1] = "KEYPAD_KEY_APPLICATION", e[e.IGNORE_KEYPAD_WITH_NUMLOCK = 2] = "IGNORE_KEYPAD_WITH_NUMLOCK", e[e.ALT_ESC_PREFIX = 3] = "ALT_ESC_PREFIX", e[e.MODIFY_OTHER_KEYS_STATE_2 = 4] = "MODIFY_OTHER_KEYS_STATE_2", e[e.KITTY_KEYBOARD_FLAGS = 5] = "KITTY_KEYBOARD_FLAGS", e))(N || {}), V = /* @__PURE__ */ ((e) => (e[e.RELEASE = 0] = "RELEASE", e[e.PRESS = 1] = "PRESS", e[e.REPEAT = 2] = "REPEAT", e))(V || {}), l = /* @__PURE__ */ ((e) => (e[e.UNIDENTIFIED = 0] = "UNIDENTIFIED", e[e.GRAVE = 1] = "GRAVE", e[e.BACKSLASH = 2] = "BACKSLASH", e[e.BRACKET_LEFT = 3] = "BRACKET_LEFT", e[e.BRACKET_RIGHT = 4] = "BRACKET_RIGHT", e[e.COMMA = 5] = "COMMA", e[e.ZERO = 6] = "ZERO", e[e.ONE = 7] = "ONE", e[e.TWO = 8] = "TWO", e[e.THREE = 9] = "THREE", e[e.FOUR = 10] = "FOUR", e[e.FIVE = 11] = "FIVE", e[e.SIX = 12] = "SIX", e[e.SEVEN = 13] = "SEVEN", e[e.EIGHT = 14] = "EIGHT", e[e.NINE = 15] = "NINE", e[e.EQUAL = 16] = "EQUAL", e[e.INTL_BACKSLASH = 17] = "INTL_BACKSLASH", e[e.INTL_RO = 18] = "INTL_RO", e[e.INTL_YEN = 19] = "INTL_YEN", e[e.A = 20] = "A", e[e.B = 21] = "B", e[e.C = 22] = "C", e[e.D = 23] = "D", e[e.E = 24] = "E", e[e.F = 25] = "F", e[e.G = 26] = "G", e[e.H = 27] = "H", e[e.I = 28] = "I", e[e.J = 29] = "J", e[e.K = 30] = "K", e[e.L = 31] = "L", e[e.M = 32] = "M", e[e.N = 33] = "N", e[e.O = 34] = "O", e[e.P = 35] = "P", e[e.Q = 36] = "Q", e[e.R = 37] = "R", e[e.S = 38] = "S", e[e.T = 39] = "T", e[e.U = 40] = "U", e[e.V = 41] = "V", e[e.W = 42] = "W", e[e.X = 43] = "X", e[e.Y = 44] = "Y", e[e.Z = 45] = "Z", e[e.MINUS = 46] = "MINUS", e[e.PERIOD = 47] = "PERIOD", e[e.QUOTE = 48] = "QUOTE", e[e.SEMICOLON = 49] = "SEMICOLON", e[e.SLASH = 50] = "SLASH", e[e.ALT_LEFT = 51] = "ALT_LEFT", e[e.ALT_RIGHT = 52] = "ALT_RIGHT", e[e.BACKSPACE = 53] = "BACKSPACE", e[e.CAPS_LOCK = 54] = "CAPS_LOCK", e[e.CONTEXT_MENU = 55] = "CONTEXT_MENU", e[e.CONTROL_LEFT = 56] = "CONTROL_LEFT", e[e.CONTROL_RIGHT = 57] = "CONTROL_RIGHT", e[e.ENTER = 58] = "ENTER", e[e.META_LEFT = 59] = "META_LEFT", e[e.META_RIGHT = 60] = "META_RIGHT", e[e.SHIFT_LEFT = 61] = "SHIFT_LEFT", e[e.SHIFT_RIGHT = 62] = "SHIFT_RIGHT", e[e.SPACE = 63] = "SPACE", e[e.TAB = 64] = "TAB", e[e.CONVERT = 65] = "CONVERT", e[e.KANA_MODE = 66] = "KANA_MODE", e[e.NON_CONVERT = 67] = "NON_CONVERT", e[e.DELETE = 68] = "DELETE", e[e.END = 69] = "END", e[e.HELP = 70] = "HELP", e[e.HOME = 71] = "HOME", e[e.INSERT = 72] = "INSERT", e[e.PAGE_DOWN = 73] = "PAGE_DOWN", e[e.PAGE_UP = 74] = "PAGE_UP", e[e.DOWN = 75] = "DOWN", e[e.LEFT = 76] = "LEFT", e[e.RIGHT = 77] = "RIGHT", e[e.UP = 78] = "UP", e[e.NUM_LOCK = 79] = "NUM_LOCK", e[e.KP_0 = 80] = "KP_0", e[e.KP_1 = 81] = "KP_1", e[e.KP_2 = 82] = "KP_2", e[e.KP_3 = 83] = "KP_3", e[e.KP_4 = 84] = "KP_4", e[e.KP_5 = 85] = "KP_5", e[e.KP_6 = 86] = "KP_6", e[e.KP_7 = 87] = "KP_7", e[e.KP_8 = 88] = "KP_8", e[e.KP_9 = 89] = "KP_9", e[e.KP_PLUS = 90] = "KP_PLUS", e[e.KP_BACKSPACE = 91] = "KP_BACKSPACE", e[e.KP_CLEAR = 92] = "KP_CLEAR", e[e.KP_CLEAR_ENTRY = 93] = "KP_CLEAR_ENTRY", e[e.KP_COMMA = 94] = "KP_COMMA", e[e.KP_PERIOD = 95] = "KP_PERIOD", e[e.KP_DIVIDE = 96] = "KP_DIVIDE", e[e.KP_ENTER = 97] = "KP_ENTER", e[e.KP_EQUAL = 98] = "KP_EQUAL", e[e.KP_MEMORY_ADD = 99] = "KP_MEMORY_ADD", e[e.KP_MEMORY_CLEAR = 100] = "KP_MEMORY_CLEAR", e[e.KP_MEMORY_RECALL = 101] = "KP_MEMORY_RECALL", e[e.KP_MEMORY_STORE = 102] = "KP_MEMORY_STORE", e[e.KP_MEMORY_SUBTRACT = 103] = "KP_MEMORY_SUBTRACT", e[e.KP_MULTIPLY = 104] = "KP_MULTIPLY", e[e.KP_PAREN_LEFT = 105] = "KP_PAREN_LEFT", e[e.KP_PAREN_RIGHT = 106] = "KP_PAREN_RIGHT", e[e.KP_MINUS = 107] = "KP_MINUS", e[e.KP_SEPARATOR = 108] = "KP_SEPARATOR", e[e.NUMPAD_UP = 109] = "NUMPAD_UP", e[e.NUMPAD_DOWN = 110] = "NUMPAD_DOWN", e[e.NUMPAD_RIGHT = 111] = "NUMPAD_RIGHT", e[e.NUMPAD_LEFT = 112] = "NUMPAD_LEFT", e[e.NUMPAD_BEGIN = 113] = "NUMPAD_BEGIN", e[e.NUMPAD_HOME = 114] = "NUMPAD_HOME", e[e.NUMPAD_END = 115] = "NUMPAD_END", e[e.NUMPAD_INSERT = 116] = "NUMPAD_INSERT", e[e.NUMPAD_DELETE = 117] = "NUMPAD_DELETE", e[e.NUMPAD_PAGE_UP = 118] = "NUMPAD_PAGE_UP", e[e.NUMPAD_PAGE_DOWN = 119] = "NUMPAD_PAGE_DOWN", e[e.ESCAPE = 120] = "ESCAPE", e[e.F1 = 121] = "F1", e[e.F2 = 122] = "F2", e[e.F3 = 123] = "F3", e[e.F4 = 124] = "F4", e[e.F5 = 125] = "F5", e[e.F6 = 126] = "F6", e[e.F7 = 127] = "F7", e[e.F8 = 128] = "F8", e[e.F9 = 129] = "F9", e[e.F10 = 130] = "F10", e[e.F11 = 131] = "F11", e[e.F12 = 132] = "F12", e[e.F13 = 133] = "F13", e[e.F14 = 134] = "F14", e[e.F15 = 135] = "F15", e[e.F16 = 136] = "F16", e[e.F17 = 137] = "F17", e[e.F18 = 138] = "F18", e[e.F19 = 139] = "F19", e[e.F20 = 140] = "F20", e[e.F21 = 141] = "F21", e[e.F22 = 142] = "F22", e[e.F23 = 143] = "F23", e[e.F24 = 144] = "F24", e[e.F25 = 145] = "F25", e[e.FN_LOCK = 146] = "FN_LOCK", e[e.PRINT_SCREEN = 147] = "PRINT_SCREEN", e[e.SCROLL_LOCK = 148] = "SCROLL_LOCK", e[e.PAUSE = 149] = "PAUSE", e[e.BROWSER_BACK = 150] = "BROWSER_BACK", e[e.BROWSER_FAVORITES = 151] = "BROWSER_FAVORITES", e[e.BROWSER_FORWARD = 152] = "BROWSER_FORWARD", e[e.BROWSER_HOME = 153] = "BROWSER_HOME", e[e.BROWSER_REFRESH = 154] = "BROWSER_REFRESH", e[e.BROWSER_SEARCH = 155] = "BROWSER_SEARCH", e[e.BROWSER_STOP = 156] = "BROWSER_STOP", e[e.EJECT = 157] = "EJECT", e[e.LAUNCH_APP_1 = 158] = "LAUNCH_APP_1", e[e.LAUNCH_APP_2 = 159] = "LAUNCH_APP_2", e[e.LAUNCH_MAIL = 160] = "LAUNCH_MAIL", e[e.MEDIA_PLAY_PAUSE = 161] = "MEDIA_PLAY_PAUSE", e[e.MEDIA_SELECT = 162] = "MEDIA_SELECT", e[e.MEDIA_STOP = 163] = "MEDIA_STOP", e[e.MEDIA_TRACK_NEXT = 164] = "MEDIA_TRACK_NEXT", e[e.MEDIA_TRACK_PREVIOUS = 165] = "MEDIA_TRACK_PREVIOUS", e[e.POWER = 166] = "POWER", e[e.SLEEP = 167] = "SLEEP", e[e.AUDIO_VOLUME_DOWN = 168] = "AUDIO_VOLUME_DOWN", e[e.AUDIO_VOLUME_MUTE = 169] = "AUDIO_VOLUME_MUTE", e[e.AUDIO_VOLUME_UP = 170] = "AUDIO_VOLUME_UP", e[e.WAKE_UP = 171] = "WAKE_UP", e[e.COPY = 172] = "COPY", e[e.CUT = 173] = "CUT", e[e.PASTE = 174] = "PASTE", e))(l || {}), L = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.SHIFT = 1] = "SHIFT", e[e.CTRL = 2] = "CTRL", e[e.ALT = 4] = "ALT", e[e.SUPER = 8] = "SUPER", e[e.CAPSLOCK = 16] = "CAPSLOCK", e[e.NUMLOCK = 32] = "NUMLOCK", e))(L || {}), O = /* @__PURE__ */ ((e) => (e[e.NONE = 0] = "NONE", e[e.PARTIAL = 1] = "PARTIAL", e[e.FULL = 2] = "FULL", e))(O || {});
const U = 80;
var b = /* @__PURE__ */ ((e) => (e[e.BOLD = 1] = "BOLD", e[e.ITALIC = 2] = "ITALIC", e[e.UNDERLINE = 4] = "UNDERLINE", e[e.STRIKETHROUGH = 8] = "STRIKETHROUGH", e[e.INVERSE = 16] = "INVERSE", e[e.INVISIBLE = 32] = "INVISIBLE", e[e.BLINK = 64] = "BLINK", e[e.FAINT = 128] = "FAINT", e))(b || {});
class M {
  constructor(t) {
    this.exports = t.exports, this.memory = this.exports.memory;
  }
  createKeyEncoder() {
    return new X(this.exports);
  }
  createTerminal(t = 80, s = 24, i) {
    return new $(this.exports, this.memory, t, s, i);
  }
  static async load(t) {
    if (t)
      return M.loadFromPath(t);
    const s = new URL("../ghostty-vt.wasm", self.location), i = [];
    if (s.protocol === "file:") {
      let o = s.pathname;
      o.match(/^\/[A-Za-z]:\//) && (o = o.slice(1)), i.push(o);
    }
    i.push(s.href, "./ghostty-vt.wasm", "/ghostty-vt.wasm");
    let r = null;
    for (const o of i)
      try {
        return await M.loadFromPath(o);
      } catch (n) {
        r = n instanceof Error ? n : new Error(String(n));
      }
    throw r || new Error("Failed to load Ghostty WASM");
  }
  static async loadFromPath(t) {
    let s;
    if (typeof Bun < "u" && typeof Bun.file == "function")
      try {
        const o = Bun.file(t);
        await o.exists() && (s = await o.arrayBuffer());
      } catch {
      }
    if (!s)
      try {
        const n = await (await import("./__vite-browser-external-2447137e.js")).readFile(t);
        s = n.buffer.slice(n.byteOffset, n.byteOffset + n.byteLength);
      } catch {
      }
    if (!s) {
      const o = await fetch(t);
      if (!o.ok)
        throw new Error(`Failed to fetch WASM: ${o.status} ${o.statusText}`);
      if (s = await o.arrayBuffer(), s.byteLength === 0)
        throw new Error(`WASM file is empty (0 bytes). Check path: ${t}`);
    }
    if (!s)
      throw new Error(`Could not load WASM from path: ${t}`);
    const i = await WebAssembly.compile(s), r = await WebAssembly.instantiate(i, {
      env: {
        log: (o, n) => {
          const a = new Uint8Array(
            r.exports.memory.buffer,
            o,
            n
          );
          console.log("[ghostty-vt]", new TextDecoder().decode(a));
        }
      }
    });
    return new M(r);
  }
}
class X {
  constructor(t) {
    this.encoder = 0, this.exports = t;
    const s = this.exports.ghostty_wasm_alloc_opaque(), i = this.exports.ghostty_key_encoder_new(0, s);
    if (i !== 0)
      throw new Error(`Failed to create key encoder: ${i}`);
    const r = new DataView(this.exports.memory.buffer);
    this.encoder = r.getUint32(s, !0), this.exports.ghostty_wasm_free_opaque(s);
  }
  setOption(t, s) {
    const i = this.exports.ghostty_wasm_alloc_u8();
    new DataView(this.exports.memory.buffer).setUint8(i, typeof s == "boolean" ? s ? 1 : 0 : s), this.exports.ghostty_key_encoder_setopt(this.encoder, t, i), this.exports.ghostty_wasm_free_u8(i);
  }
  setKittyFlags(t) {
    this.setOption(N.KITTY_KEYBOARD_FLAGS, t);
  }
  encode(t) {
    const s = this.exports.ghostty_wasm_alloc_opaque(), i = this.exports.ghostty_key_event_new(0, s);
    if (i !== 0)
      throw new Error(`Failed to create key event: ${i}`);
    const r = new DataView(this.exports.memory.buffer), o = r.getUint32(s, !0);
    if (this.exports.ghostty_wasm_free_opaque(s), this.exports.ghostty_key_event_set_action(o, t.action), this.exports.ghostty_key_event_set_key(o, t.key), this.exports.ghostty_key_event_set_mods(o, t.mods), t.utf8) {
      const f = new TextEncoder().encode(t.utf8), w = this.exports.ghostty_wasm_alloc_u8_array(f.length);
      new Uint8Array(this.exports.memory.buffer).set(f, w), this.exports.ghostty_key_event_set_utf8(o, w, f.length), this.exports.ghostty_wasm_free_u8_array(w, f.length);
    }
    const n = 32, a = this.exports.ghostty_wasm_alloc_u8_array(n), h = this.exports.ghostty_wasm_alloc_usize(), c = this.exports.ghostty_key_encoder_encode(
      this.encoder,
      o,
      a,
      n,
      h
    );
    if (c !== 0)
      throw this.exports.ghostty_wasm_free_u8_array(a, n), this.exports.ghostty_wasm_free_usize(h), this.exports.ghostty_key_event_free(o), new Error(`Failed to encode key: ${c}`);
    const u = r.getUint32(h, !0), m = new Uint8Array(this.exports.memory.buffer, a, u).slice();
    return this.exports.ghostty_wasm_free_u8_array(a, n), this.exports.ghostty_wasm_free_usize(h), this.exports.ghostty_key_event_free(o), m;
  }
  dispose() {
    this.encoder && (this.exports.ghostty_key_encoder_free(this.encoder), this.encoder = 0);
  }
}
const G = class C {
  constructor(t, s, i = 80, r = 24, o) {
    var n;
    if (this.viewportBufferPtr = 0, this.viewportBufferSize = 0, this.cellPool = [], this.graphemeBuffer = null, this.graphemeBufferPtr = 0, this.exports = t, this.memory = s, this._cols = i, this._rows = r, o) {
      const a = this.exports.ghostty_wasm_alloc_u8_array(U);
      if (a === 0)
        throw new Error("Failed to allocate config (out of memory)");
      try {
        const h = new DataView(this.memory.buffer);
        let c = a;
        h.setUint32(c, o.scrollbackLimit ?? 1e4, !0), c += 4, h.setUint32(c, o.fgColor ?? 0, !0), c += 4, h.setUint32(c, o.bgColor ?? 0, !0), c += 4, h.setUint32(c, o.cursorColor ?? 0, !0), c += 4;
        for (let u = 0; u < 16; u++)
          h.setUint32(c, ((n = o.palette) == null ? void 0 : n[u]) ?? 0, !0), c += 4;
        this.handle = this.exports.ghostty_terminal_new_with_config(i, r, a);
      } finally {
        this.exports.ghostty_wasm_free_u8_array(a, U);
      }
    } else
      this.handle = this.exports.ghostty_terminal_new(i, r);
    if (!this.handle)
      throw new Error("Failed to create terminal");
    this.initCellPool();
  }
  get cols() {
    return this._cols;
  }
  get rows() {
    return this._rows;
  }
  // ==========================================================================
  // Lifecycle
  // ==========================================================================
  write(t) {
    const s = typeof t == "string" ? new TextEncoder().encode(t) : t, i = this.exports.ghostty_wasm_alloc_u8_array(s.length);
    new Uint8Array(this.memory.buffer).set(s, i), this.exports.ghostty_terminal_write(this.handle, i, s.length), this.exports.ghostty_wasm_free_u8_array(i, s.length);
  }
  resize(t, s) {
    t === this._cols && s === this._rows || (this._cols = t, this._rows = s, this.exports.ghostty_terminal_resize(this.handle, t, s), this.invalidateBuffers(), this.initCellPool());
  }
  free() {
    this.viewportBufferPtr && (this.exports.ghostty_wasm_free_u8_array(this.viewportBufferPtr, this.viewportBufferSize), this.viewportBufferPtr = 0), this.exports.ghostty_terminal_free(this.handle);
  }
  // ==========================================================================
  // RenderState API - The key performance optimization
  // ==========================================================================
  /**
   * Update render state from terminal.
   *
   * This syncs the RenderState with the current Terminal state.
   * The dirty state (full/partial/none) is stored in the WASM RenderState
   * and can be queried via isRowDirty(). When dirty==full, isRowDirty()
   * returns true for ALL rows.
   *
   * The WASM layer automatically detects screen switches (normal <-> alternate)
   * and returns FULL dirty state when switching screens (e.g., vim exit).
   *
   * Safe to call multiple times - dirty state persists until markClean().
   */
  update() {
    return this.exports.ghostty_render_state_update(this.handle);
  }
  /**
   * Get cursor state from render state.
   * Ensures render state is fresh by calling update().
   */
  getCursor() {
    return this.update(), {
      x: this.exports.ghostty_render_state_get_cursor_x(this.handle),
      y: this.exports.ghostty_render_state_get_cursor_y(this.handle),
      viewportX: this.exports.ghostty_render_state_get_cursor_x(this.handle),
      viewportY: this.exports.ghostty_render_state_get_cursor_y(this.handle),
      visible: this.exports.ghostty_render_state_get_cursor_visible(this.handle),
      blinking: !1,
      // TODO: Add blinking support
      style: "block"
      // TODO: Add style support
    };
  }
  /**
   * Get default colors from render state
   */
  getColors() {
    const t = this.exports.ghostty_render_state_get_bg_color(this.handle), s = this.exports.ghostty_render_state_get_fg_color(this.handle);
    return {
      background: {
        r: t >> 16 & 255,
        g: t >> 8 & 255,
        b: t & 255
      },
      foreground: {
        r: s >> 16 & 255,
        g: s >> 8 & 255,
        b: s & 255
      },
      cursor: null
      // TODO: Add cursor color support
    };
  }
  /**
   * Check if a specific row is dirty
   */
  isRowDirty(t) {
    return this.exports.ghostty_render_state_is_row_dirty(this.handle, t);
  }
  /**
   * Mark render state as clean (call after rendering)
   */
  markClean() {
    this.exports.ghostty_render_state_mark_clean(this.handle);
  }
  /**
   * Get ALL viewport cells in ONE WASM call - the key performance optimization!
   * Returns a reusable cell array (zero allocation after warmup).
   */
  getViewport() {
    const t = this._cols * this._rows, s = t * C.CELL_SIZE;
    return (!this.viewportBufferPtr || this.viewportBufferSize < s) && (this.viewportBufferPtr && this.exports.ghostty_wasm_free_u8_array(this.viewportBufferPtr, this.viewportBufferSize), this.viewportBufferPtr = this.exports.ghostty_wasm_alloc_u8_array(s), this.viewportBufferSize = s), this.exports.ghostty_render_state_get_viewport(
      this.handle,
      this.viewportBufferPtr,
      t
    ) < 0 ? this.cellPool : (this.parseCellsIntoPool(this.viewportBufferPtr, t), this.cellPool);
  }
  // ==========================================================================
  // Compatibility methods (delegate to render state)
  // ==========================================================================
  /**
   * Get line - for compatibility, extracts from viewport.
   * Ensures render state is fresh by calling update().
   * Returns a COPY of the cells to avoid pool reference issues.
   */
  getLine(t) {
    if (t < 0 || t >= this._rows)
      return null;
    this.update();
    const s = this.getViewport(), i = t * this._cols;
    return s.slice(i, i + this._cols).map((r) => ({ ...r }));
  }
  /** For compatibility with old API */
  isDirty() {
    return this.update() !== O.NONE;
  }
  /**
   * Check if a full redraw is needed (screen change, resize, etc.)
   * Note: This calls update() to ensure fresh state. Safe to call multiple times.
   */
  needsFullRedraw() {
    return this.update() === O.FULL;
  }
  /** Mark render state as clean after rendering */
  clearDirty() {
    this.markClean();
  }
  // ==========================================================================
  // Terminal modes
  // ==========================================================================
  isAlternateScreen() {
    return !!this.exports.ghostty_terminal_is_alternate_screen(this.handle);
  }
  hasBracketedPaste() {
    return this.getMode(2004, !1);
  }
  hasFocusEvents() {
    return this.getMode(1004, !1);
  }
  hasMouseTracking() {
    return this.exports.ghostty_terminal_has_mouse_tracking(this.handle) !== 0;
  }
  // ==========================================================================
  // Extended API (scrollback, modes, etc.)
  // ==========================================================================
  /** Get dimensions - for compatibility */
  getDimensions() {
    return { cols: this._cols, rows: this._rows };
  }
  /** Get number of scrollback lines (history, not including active screen) */
  getScrollbackLength() {
    return this.exports.ghostty_terminal_get_scrollback_length(this.handle);
  }
  /**
   * Get a line from the scrollback buffer.
   * Ensures render state is fresh by calling update().
   * @param offset 0 = oldest line, (length-1) = most recent scrollback line
   */
  getScrollbackLine(t) {
    const s = this._cols * C.CELL_SIZE;
    (!this.viewportBufferPtr || this.viewportBufferSize < s) && (this.viewportBufferPtr && this.exports.ghostty_wasm_free_u8_array(this.viewportBufferPtr, this.viewportBufferSize), this.viewportBufferPtr = this.exports.ghostty_wasm_alloc_u8_array(s), this.viewportBufferSize = s), this.update();
    const i = this.exports.ghostty_terminal_get_scrollback_line(
      this.handle,
      t,
      this.viewportBufferPtr,
      this._cols
    );
    if (i < 0)
      return null;
    const r = [], o = this.memory.buffer, n = new Uint8Array(o, this.viewportBufferPtr, i * C.CELL_SIZE), a = new DataView(o, this.viewportBufferPtr, i * C.CELL_SIZE);
    for (let h = 0; h < i; h++) {
      const c = h * C.CELL_SIZE;
      r.push({
        codepoint: a.getUint32(c, !0),
        fg_r: n[c + 4],
        fg_g: n[c + 5],
        fg_b: n[c + 6],
        bg_r: n[c + 7],
        bg_g: n[c + 8],
        bg_b: n[c + 9],
        flags: n[c + 10],
        width: n[c + 11],
        hyperlink_id: a.getUint16(c + 12, !0),
        grapheme_len: n[c + 14]
      });
    }
    return r;
  }
  /** Check if a row in the active screen is wrapped (soft-wrapped to next line) */
  isRowWrapped(t) {
    return this.exports.ghostty_terminal_is_row_wrapped(this.handle, t) !== 0;
  }
  /** Hyperlink URI not yet exposed in simplified API */
  getHyperlinkUri(t) {
    return null;
  }
  /**
   * Check if there are pending responses from the terminal.
   * Responses are generated by escape sequences like DSR (Device Status Report).
   */
  hasResponse() {
    return this.exports.ghostty_terminal_has_response(this.handle);
  }
  /**
   * Read pending responses from the terminal.
   * Returns the response string, or null if no responses pending.
   *
   * Responses are generated by escape sequences that require replies:
   * - DSR 6 (cursor position): Returns \x1b[row;colR
   * - DSR 5 (operating status): Returns \x1b[0n
   */
  readResponse() {
    if (!this.hasResponse())
      return null;
    const t = 256, s = this.exports.ghostty_wasm_alloc_u8_array(t);
    try {
      const i = this.exports.ghostty_terminal_read_response(this.handle, s, t);
      if (i <= 0)
        return null;
      const r = new Uint8Array(this.memory.buffer, s, i);
      return new TextDecoder().decode(r.slice());
    } finally {
      this.exports.ghostty_wasm_free_u8_array(s, t);
    }
  }
  /**
   * Query arbitrary terminal mode by number
   * @param mode Mode number (e.g., 25 for cursor visibility, 2004 for bracketed paste)
   * @param isAnsi True for ANSI modes, false for DEC modes (default: false)
   */
  getMode(t, s = !1) {
    return this.exports.ghostty_terminal_get_mode(this.handle, t, s) !== 0;
  }
  // ==========================================================================
  // Private helpers
  // ==========================================================================
  initCellPool() {
    const t = this._cols * this._rows;
    if (this.cellPool.length < t)
      for (let s = this.cellPool.length; s < t; s++)
        this.cellPool.push({
          codepoint: 0,
          fg_r: 204,
          fg_g: 204,
          fg_b: 204,
          bg_r: 0,
          bg_g: 0,
          bg_b: 0,
          flags: 0,
          width: 1,
          hyperlink_id: 0,
          grapheme_len: 0
        });
  }
  parseCellsIntoPool(t, s) {
    const i = this.memory.buffer, r = new Uint8Array(i, t, s * C.CELL_SIZE), o = new DataView(i, t, s * C.CELL_SIZE);
    for (let n = 0; n < s; n++) {
      const a = n * C.CELL_SIZE, h = this.cellPool[n];
      h.codepoint = o.getUint32(a, !0), h.fg_r = r[a + 4], h.fg_g = r[a + 5], h.fg_b = r[a + 6], h.bg_r = r[a + 7], h.bg_g = r[a + 8], h.bg_b = r[a + 9], h.flags = r[a + 10], h.width = r[a + 11], h.hyperlink_id = o.getUint16(a + 12, !0), h.grapheme_len = r[a + 14];
    }
  }
  /**
   * Get all codepoints for a grapheme cluster at the given position.
   * For most cells this returns a single codepoint, but for complex scripts
   * (Hindi, emoji with ZWJ, etc.) it returns multiple codepoints.
   * @returns Array of codepoints, or null on error
   */
  getGrapheme(t, s) {
    this.graphemeBuffer || (this.graphemeBufferPtr = this.exports.ghostty_wasm_alloc_u8_array(16 * 4), this.graphemeBuffer = new Uint32Array(this.memory.buffer, this.graphemeBufferPtr, 16));
    const i = this.exports.ghostty_render_state_get_grapheme(
      this.handle,
      t,
      s,
      this.graphemeBufferPtr,
      16
    );
    if (i < 0)
      return null;
    const r = new Uint32Array(this.memory.buffer, this.graphemeBufferPtr, i);
    return Array.from(r);
  }
  /**
   * Get a string representation of the grapheme at the given position.
   * This properly handles complex scripts like Hindi, emoji with ZWJ, etc.
   */
  getGraphemeString(t, s) {
    const i = this.getGrapheme(t, s);
    return !i || i.length === 0 ? " " : String.fromCodePoint(...i);
  }
  /**
   * Get all codepoints for a grapheme cluster in the scrollback buffer.
   * @param offset Scrollback line offset (0 = oldest)
   * @param col Column index
   * @returns Array of codepoints, or null on error
   */
  getScrollbackGrapheme(t, s) {
    this.graphemeBuffer || (this.graphemeBufferPtr = this.exports.ghostty_wasm_alloc_u8_array(16 * 4), this.graphemeBuffer = new Uint32Array(this.memory.buffer, this.graphemeBufferPtr, 16));
    const i = this.exports.ghostty_terminal_get_scrollback_grapheme(
      this.handle,
      t,
      s,
      this.graphemeBufferPtr,
      16
    );
    if (i < 0)
      return null;
    const r = new Uint32Array(this.memory.buffer, this.graphemeBufferPtr, i);
    return Array.from(r);
  }
  /**
   * Get a string representation of a grapheme in the scrollback buffer.
   */
  getScrollbackGraphemeString(t, s) {
    const i = this.getScrollbackGrapheme(t, s);
    return !i || i.length === 0 ? " " : String.fromCodePoint(...i);
  }
  invalidateBuffers() {
    this.viewportBufferPtr && (this.exports.ghostty_wasm_free_u8_array(this.viewportBufferPtr, this.viewportBufferSize), this.viewportBufferPtr = 0, this.viewportBufferSize = 0);
  }
};
G.CELL_SIZE = 16;
let $ = G;
class v {
  constructor() {
    this.listeners = [], this.event = (t) => (this.listeners.push(t), {
      dispose: () => {
        const s = this.listeners.indexOf(t);
        s >= 0 && this.listeners.splice(s, 1);
      }
    });
  }
  fire(t) {
    for (const s of this.listeners)
      s(t);
  }
  dispose() {
    this.listeners = [];
  }
}
class Z {
  constructor(t) {
    this.bufferChangeEmitter = new v(), this.terminal = t;
  }
  get active() {
    const t = this.terminal.wasmTerm;
    return t ? t.isAlternateScreen() ? this.alternate : this.normal : this.normal;
  }
  get normal() {
    return this._normalBuffer || (this._normalBuffer = new Y(this.terminal, "normal")), this._normalBuffer;
  }
  get alternate() {
    return this._alternateBuffer || (this._alternateBuffer = new Y(this.terminal, "alternate")), this._alternateBuffer;
  }
  get onBufferChange() {
    return this.bufferChangeEmitter.event;
  }
  /**
   * Internal: Fire buffer change event when screen switches
   * Should be called by Terminal when detecting screen change
   */
  _fireBufferChange(t) {
    this.bufferChangeEmitter.fire(t);
  }
}
class Y {
  constructor(t, s) {
    this.terminal = t, this.bufferType = s;
    const i = {
      codepoint: 0,
      fg_r: 204,
      fg_g: 204,
      fg_b: 204,
      bg_r: 0,
      bg_g: 0,
      bg_b: 0,
      flags: 0,
      width: 1,
      hyperlink_id: 0,
      grapheme_len: 0
    };
    this.nullCell = new B(i, 0);
  }
  get type() {
    return this.bufferType;
  }
  get cursorX() {
    const t = this.getWasmTerm();
    return t ? t.getCursor().x : 0;
  }
  get cursorY() {
    const t = this.getWasmTerm();
    return t ? t.getCursor().y : 0;
  }
  get viewportY() {
    return 0;
  }
  get baseY() {
    return 0;
  }
  get length() {
    const t = this.getWasmTerm();
    return t ? this.bufferType === "alternate" ? t.rows : t.getScrollbackLength() + t.rows : 0;
  }
  getLine(t) {
    const s = this.getWasmTerm();
    if (!s || t < 0 || t >= this.length)
      return;
    const i = s.getScrollbackLength();
    let r, o, n;
    if (this.bufferType === "normal" && t < i) {
      const a = t;
      r = s.getScrollbackLine(a), n = !1;
    } else
      o = this.bufferType === "normal" ? t - i : t, r = s.getLine(o), n = s.isRowWrapped(o);
    if (r)
      return new q(r, n, s.cols);
  }
  getNullCell() {
    return this.nullCell;
  }
  getWasmTerm() {
    return this.terminal.wasmTerm;
  }
}
class q {
  constructor(t, s, i) {
    this.cells = t, this._isWrapped = s, this._length = i;
  }
  get length() {
    return this._length;
  }
  get isWrapped() {
    return this._isWrapped;
  }
  getCell(t) {
    if (!(t < 0 || t >= this._length))
      return t >= this.cells.length ? new B(
        {
          codepoint: 0,
          fg_r: 204,
          fg_g: 204,
          fg_b: 204,
          bg_r: 0,
          bg_g: 0,
          bg_b: 0,
          flags: 0,
          width: 1,
          hyperlink_id: 0,
          grapheme_len: 0
        },
        t
      ) : new B(this.cells[t], t);
  }
  translateToString(t = !1, s = 0, i = this._length) {
    const r = Math.max(0, Math.min(s, this._length)), o = Math.max(r, Math.min(i, this._length));
    let n = "";
    for (let a = r; a < o; a++) {
      const h = this.getCell(a);
      if (h) {
        const c = h.getChars();
        n += c;
      }
    }
    return t && (n = n.trimEnd()), n;
  }
}
class B {
  constructor(t, s) {
    this.cell = t, this.x = s;
  }
  getChars() {
    const t = this.cell.codepoint;
    return t === 0 ? "" : t < 0 || t > 1114111 || t >= 55296 && t <= 57343 ? "�" : String.fromCodePoint(t);
  }
  getCode() {
    return this.cell.codepoint;
  }
  getWidth() {
    return this.cell.width;
  }
  getFgColorMode() {
    return -1;
  }
  getBgColorMode() {
    return -1;
  }
  getFgColor() {
    return this.cell.fg_r << 16 | this.cell.fg_g << 8 | this.cell.fg_b;
  }
  getBgColor() {
    return this.cell.bg_r << 16 | this.cell.bg_g << 8 | this.cell.bg_b;
  }
  isBold() {
    return this.cell.flags & b.BOLD ? 1 : 0;
  }
  isItalic() {
    return this.cell.flags & b.ITALIC ? 1 : 0;
  }
  isUnderline() {
    return this.cell.flags & b.UNDERLINE ? 1 : 0;
  }
  isStrikethrough() {
    return this.cell.flags & b.STRIKETHROUGH ? 1 : 0;
  }
  isBlink() {
    return this.cell.flags & b.BLINK ? 1 : 0;
  }
  isInverse() {
    return this.cell.flags & b.INVERSE ? 1 : 0;
  }
  isInvisible() {
    return this.cell.flags & b.INVISIBLE ? 1 : 0;
  }
  isFaint() {
    return this.cell.flags & b.FAINT ? 1 : 0;
  }
  /**
   * Get hyperlink ID for this cell (0 = no link)
   * Used by link detection system
   */
  getHyperlinkId() {
    return this.cell.hyperlink_id;
  }
  /**
   * Get the Unicode codepoint for this cell
   * Used by link detection system
   */
  getCodepoint() {
    return this.cell.codepoint;
  }
  /**
   * Check if cell has dim/faint attribute
   * Added for IBufferCell compatibility
   */
  isDim() {
    return (this.cell.flags & b.FAINT) !== 0;
  }
}
const Q = {
  // Letters
  KeyA: l.A,
  KeyB: l.B,
  KeyC: l.C,
  KeyD: l.D,
  KeyE: l.E,
  KeyF: l.F,
  KeyG: l.G,
  KeyH: l.H,
  KeyI: l.I,
  KeyJ: l.J,
  KeyK: l.K,
  KeyL: l.L,
  KeyM: l.M,
  KeyN: l.N,
  KeyO: l.O,
  KeyP: l.P,
  KeyQ: l.Q,
  KeyR: l.R,
  KeyS: l.S,
  KeyT: l.T,
  KeyU: l.U,
  KeyV: l.V,
  KeyW: l.W,
  KeyX: l.X,
  KeyY: l.Y,
  KeyZ: l.Z,
  // Numbers
  Digit1: l.ONE,
  Digit2: l.TWO,
  Digit3: l.THREE,
  Digit4: l.FOUR,
  Digit5: l.FIVE,
  Digit6: l.SIX,
  Digit7: l.SEVEN,
  Digit8: l.EIGHT,
  Digit9: l.NINE,
  Digit0: l.ZERO,
  // Special keys
  Enter: l.ENTER,
  Escape: l.ESCAPE,
  Backspace: l.BACKSPACE,
  Tab: l.TAB,
  Space: l.SPACE,
  // Punctuation
  Minus: l.MINUS,
  Equal: l.EQUAL,
  BracketLeft: l.BRACKET_LEFT,
  BracketRight: l.BRACKET_RIGHT,
  Backslash: l.BACKSLASH,
  Semicolon: l.SEMICOLON,
  Quote: l.QUOTE,
  Backquote: l.GRAVE,
  Comma: l.COMMA,
  Period: l.PERIOD,
  Slash: l.SLASH,
  // Function keys
  CapsLock: l.CAPS_LOCK,
  F1: l.F1,
  F2: l.F2,
  F3: l.F3,
  F4: l.F4,
  F5: l.F5,
  F6: l.F6,
  F7: l.F7,
  F8: l.F8,
  F9: l.F9,
  F10: l.F10,
  F11: l.F11,
  F12: l.F12,
  // Special function keys
  PrintScreen: l.PRINT_SCREEN,
  ScrollLock: l.SCROLL_LOCK,
  Pause: l.PAUSE,
  Insert: l.INSERT,
  Home: l.HOME,
  PageUp: l.PAGE_UP,
  Delete: l.DELETE,
  End: l.END,
  PageDown: l.PAGE_DOWN,
  // Arrow keys
  ArrowRight: l.RIGHT,
  ArrowLeft: l.LEFT,
  ArrowDown: l.DOWN,
  ArrowUp: l.UP,
  // Keypad
  NumLock: l.NUM_LOCK,
  NumpadDivide: l.KP_DIVIDE,
  NumpadMultiply: l.KP_MULTIPLY,
  NumpadSubtract: l.KP_MINUS,
  NumpadAdd: l.KP_PLUS,
  NumpadEnter: l.KP_ENTER,
  Numpad1: l.KP_1,
  Numpad2: l.KP_2,
  Numpad3: l.KP_3,
  Numpad4: l.KP_4,
  Numpad5: l.KP_5,
  Numpad6: l.KP_6,
  Numpad7: l.KP_7,
  Numpad8: l.KP_8,
  Numpad9: l.KP_9,
  Numpad0: l.KP_0,
  NumpadDecimal: l.KP_PERIOD,
  // International
  IntlBackslash: l.INTL_BACKSLASH,
  ContextMenu: l.CONTEXT_MENU,
  // Additional function keys
  F13: l.F13,
  F14: l.F14,
  F15: l.F15,
  F16: l.F16,
  F17: l.F17,
  F18: l.F18,
  F19: l.F19,
  F20: l.F20,
  F21: l.F21,
  F22: l.F22,
  F23: l.F23,
  F24: l.F24
}, z = class k {
  /**
   * Create a new InputHandler
   * @param ghostty - Ghostty instance (for creating KeyEncoder)
   * @param container - DOM element to attach listeners to
   * @param onData - Callback for terminal data (escape sequences to send to PTY)
   * @param onBell - Callback for bell/beep event
   * @param onKey - Optional callback for raw key events
   * @param customKeyEventHandler - Optional custom key event handler
   * @param getMode - Optional callback to query terminal mode state (for application cursor mode)
   * @param onCopy - Optional callback to handle copy (Cmd+C/Ctrl+C with selection)
   * @param inputElement - Optional input element for beforeinput events
   * @param mouseConfig - Optional mouse tracking configuration
   */
  constructor(t, s, i, r, o, n, a, h, c, u) {
    this.keydownListener = null, this.keypressListener = null, this.pasteListener = null, this.beforeInputListener = null, this.compositionStartListener = null, this.compositionUpdateListener = null, this.compositionEndListener = null, this.mousedownListener = null, this.mouseupListener = null, this.mousemoveListener = null, this.wheelListener = null, this.isComposing = !1, this.isDisposed = !1, this.mouseButtonsPressed = 0, this.lastKeyDownData = null, this.lastKeyDownTime = 0, this.lastPasteData = null, this.lastPasteTime = 0, this.lastPasteSource = null, this.lastCompositionData = null, this.lastCompositionTime = 0, this.lastBeforeInputData = null, this.lastBeforeInputTime = 0, this.encoder = t.createKeyEncoder(), this.container = s, this.inputElement = c, this.onDataCallback = i, this.onBellCallback = r, this.onKeyCallback = o, this.customKeyEventHandler = n, this.getModeCallback = a, this.onCopyCallback = h, this.mouseConfig = u, this.attach();
  }
  /**
   * Set custom key event handler (for runtime updates)
   */
  setCustomKeyEventHandler(t) {
    this.customKeyEventHandler = t;
  }
  /**
   * Attach keyboard event listeners to container
   */
  attach() {
    typeof this.container.hasAttribute == "function" && typeof this.container.setAttribute == "function" && (this.container.hasAttribute("tabindex") || this.container.setAttribute("tabindex", "0"), this.container.style && (this.container.style.outline = "none")), this.keydownListener = this.handleKeyDown.bind(this), this.container.addEventListener("keydown", this.keydownListener), this.pasteListener = this.handlePaste.bind(this), this.container.addEventListener("paste", this.pasteListener), this.inputElement && this.inputElement !== this.container && this.inputElement.addEventListener("paste", this.pasteListener), this.inputElement && (this.beforeInputListener = this.handleBeforeInput.bind(this), this.inputElement.addEventListener("beforeinput", this.beforeInputListener)), this.compositionStartListener = this.handleCompositionStart.bind(this), this.container.addEventListener("compositionstart", this.compositionStartListener), this.compositionUpdateListener = this.handleCompositionUpdate.bind(this), this.container.addEventListener("compositionupdate", this.compositionUpdateListener), this.compositionEndListener = this.handleCompositionEnd.bind(this), this.container.addEventListener("compositionend", this.compositionEndListener), this.mousedownListener = this.handleMouseDown.bind(this), this.container.addEventListener("mousedown", this.mousedownListener), this.mouseupListener = this.handleMouseUp.bind(this), this.container.addEventListener("mouseup", this.mouseupListener), this.mousemoveListener = this.handleMouseMove.bind(this), this.container.addEventListener("mousemove", this.mousemoveListener), this.wheelListener = this.handleWheel.bind(this), this.container.addEventListener("wheel", this.wheelListener, { passive: !1 });
  }
  /**
   * Map KeyboardEvent.code to USB HID Key enum value
   * @param code - KeyboardEvent.code value
   * @returns Key enum value or null if unmapped
   */
  mapKeyCode(t) {
    return Q[t] ?? null;
  }
  /**
   * Extract modifier flags from KeyboardEvent
   * @param event - KeyboardEvent
   * @returns Mods flags
   */
  extractModifiers(t) {
    let s = L.NONE;
    return t.shiftKey && (s |= L.SHIFT), t.ctrlKey && (s |= L.CTRL), t.altKey && (s |= L.ALT), t.metaKey && (s |= L.SUPER), s;
  }
  /**
   * Check if this is a printable character with no special modifiers
   * @param event - KeyboardEvent
   * @returns true if printable character
   */
  isPrintableCharacter(t) {
    return t.ctrlKey && !t.altKey || t.altKey && !t.ctrlKey || t.metaKey ? !1 : t.key.length === 1;
  }
  /**
   * Handle keydown event
   * @param event - KeyboardEvent
   */
  handleKeyDown(t) {
    if (this.isDisposed || this.isComposing || t.isComposing || t.keyCode === 229)
      return;
    if (this.onKeyCallback && this.onKeyCallback({ key: t.key, domEvent: t }), this.customKeyEventHandler && this.customKeyEventHandler(t)) {
      t.preventDefault();
      return;
    }
    if ((t.ctrlKey || t.metaKey) && t.code === "KeyV")
      return;
    if (t.metaKey && t.code === "KeyC") {
      this.onCopyCallback && this.onCopyCallback() && t.preventDefault();
      return;
    }
    if (this.isPrintableCharacter(t)) {
      t.preventDefault(), this.onDataCallback(t.key), this.recordKeyDownData(t.key);
      return;
    }
    const s = this.mapKeyCode(t.code);
    if (s === null)
      return;
    const i = this.extractModifiers(t);
    if (i === L.NONE || i === L.SHIFT) {
      let o = null;
      switch (s) {
        case l.ENTER:
          o = "\r";
          break;
        case l.TAB:
          i === L.SHIFT ? o = "\x1B[Z" : o = "	";
          break;
        case l.BACKSPACE:
          o = "";
          break;
        case l.ESCAPE:
          o = "\x1B";
          break;
        case l.HOME:
          o = "\x1B[H";
          break;
        case l.END:
          o = "\x1B[F";
          break;
        case l.INSERT:
          o = "\x1B[2~";
          break;
        case l.DELETE:
          o = "\x1B[3~";
          break;
        case l.PAGE_UP:
          o = "\x1B[5~";
          break;
        case l.PAGE_DOWN:
          o = "\x1B[6~";
          break;
        case l.F1:
          o = "\x1BOP";
          break;
        case l.F2:
          o = "\x1BOQ";
          break;
        case l.F3:
          o = "\x1BOR";
          break;
        case l.F4:
          o = "\x1BOS";
          break;
        case l.F5:
          o = "\x1B[15~";
          break;
        case l.F6:
          o = "\x1B[17~";
          break;
        case l.F7:
          o = "\x1B[18~";
          break;
        case l.F8:
          o = "\x1B[19~";
          break;
        case l.F9:
          o = "\x1B[20~";
          break;
        case l.F10:
          o = "\x1B[21~";
          break;
        case l.F11:
          o = "\x1B[23~";
          break;
        case l.F12:
          o = "\x1B[24~";
          break;
      }
      if (o !== null) {
        t.preventDefault(), this.onDataCallback(o), this.recordKeyDownData(o);
        return;
      }
    }
    const r = V.PRESS;
    try {
      if (this.getModeCallback) {
        const c = this.getModeCallback(1);
        this.encoder.setOption(N.CURSOR_KEY_APPLICATION, c);
      }
      const o = t.key.length === 1 && t.key.charCodeAt(0) < 128 ? t.key.toLowerCase() : void 0, n = this.encoder.encode({
        action: r,
        key: s,
        mods: i,
        utf8: o
      }), h = new TextDecoder().decode(n);
      t.preventDefault(), t.stopPropagation(), h.length > 0 && (this.onDataCallback(h), this.recordKeyDownData(h));
    } catch (o) {
      console.warn("Failed to encode key:", t.code, o);
    }
  }
  /**
   * Handle paste event from clipboard
   * @param event - ClipboardEvent
   */
  handlePaste(t) {
    if (this.isDisposed)
      return;
    t.preventDefault(), t.stopPropagation();
    const s = t.clipboardData;
    if (!s) {
      console.warn("No clipboard data available");
      return;
    }
    const i = s.getData("text/plain");
    if (!i) {
      console.warn("No text in clipboard");
      return;
    }
    this.shouldIgnorePasteEvent(i, "paste") || (this.emitPasteData(i), this.recordPasteData(i, "paste"));
  }
  /**
   * Handle beforeinput event (mobile/IME input)
   * @param event - InputEvent
   */
  handleBeforeInput(t) {
    if (this.isDisposed || this.isComposing || t.isComposing)
      return;
    const s = t.inputType, i = t.data ?? "";
    let r = null;
    switch (s) {
      case "insertText":
      case "insertReplacementText":
        r = i.length > 0 ? i.replace(/\n/g, "\r") : null;
        break;
      case "insertLineBreak":
      case "insertParagraph":
        r = "\r";
        break;
      case "deleteContentBackward":
        r = "";
        break;
      case "deleteContentForward":
        r = "\x1B[3~";
        break;
      case "insertFromPaste":
        if (!i)
          return;
        if (this.shouldIgnorePasteEvent(i, "beforeinput")) {
          t.preventDefault(), t.stopPropagation();
          return;
        }
        t.preventDefault(), t.stopPropagation(), this.emitPasteData(i), this.recordPasteData(i, "beforeinput");
        return;
      default:
        return;
    }
    if (r) {
      if (this.shouldIgnoreBeforeInput(r)) {
        t.preventDefault(), t.stopPropagation();
        return;
      }
      if (i && this.shouldIgnoreBeforeInputFromComposition(i)) {
        t.preventDefault(), t.stopPropagation();
        return;
      }
      t.preventDefault(), t.stopPropagation(), this.onDataCallback(r), i && this.recordBeforeInputData(i);
    }
  }
  /**
   * Handle compositionstart event
   */
  handleCompositionStart(t) {
    this.isDisposed || (this.isComposing = !0);
  }
  /**
   * Handle compositionupdate event
   */
  handleCompositionUpdate(t) {
    this.isDisposed;
  }
  /**
   * Handle compositionend event
   */
  handleCompositionEnd(t) {
    if (this.isDisposed)
      return;
    this.isComposing = !1;
    const s = t.data;
    if (s && s.length > 0) {
      if (this.shouldIgnoreCompositionEnd(s)) {
        this.cleanupCompositionTextNodes();
        return;
      }
      this.onDataCallback(s), this.recordCompositionData(s);
    }
    this.cleanupCompositionTextNodes();
  }
  /**
   * Cleanup text nodes in container after composition
   */
  cleanupCompositionTextNodes() {
    if (this.container && this.container.childNodes)
      for (let t = this.container.childNodes.length - 1; t >= 0; t--) {
        const s = this.container.childNodes[t];
        s.nodeType === 3 && this.container.removeChild(s);
      }
  }
  // ==========================================================================
  // Mouse Event Handling (for terminal mouse tracking)
  // ==========================================================================
  /**
   * Convert pixel coordinates to terminal cell coordinates
   */
  pixelToCell(t) {
    if (!this.mouseConfig)
      return null;
    const s = this.mouseConfig.getCellDimensions(), i = this.mouseConfig.getCanvasOffset();
    if (s.width <= 0 || s.height <= 0)
      return null;
    const r = t.clientX - i.left, o = t.clientY - i.top, n = Math.floor(r / s.width) + 1, a = Math.floor(o / s.height) + 1;
    return {
      col: Math.max(1, n),
      row: Math.max(1, a)
    };
  }
  /**
   * Get modifier flags for mouse event
   */
  getMouseModifiers(t) {
    let s = 0;
    return t.shiftKey && (s |= 4), t.metaKey && (s |= 8), t.ctrlKey && (s |= 16), s;
  }
  /**
   * Encode mouse event as SGR sequence
   * SGR format: \x1b[<Btn;Col;RowM (press/motion) or \x1b[<Btn;Col;Rowm (release)
   */
  encodeMouseSGR(t, s, i, r, o) {
    return `\x1B[<${t + o};${s};${i}${r ? "m" : "M"}`;
  }
  /**
   * Encode mouse event as X10/normal sequence (legacy format)
   * Format: \x1b[M<Btn+32><Col+32><Row+32>
   */
  encodeMouseX10(t, s, i, r) {
    const o = t + r + 32, n = String.fromCharCode(Math.min(s + 32, 255)), a = String.fromCharCode(Math.min(i + 32, 255));
    return `\x1B[M${String.fromCharCode(o)}${n}${a}`;
  }
  /**
   * Send mouse event to terminal
   */
  sendMouseEvent(t, s, i, r, o) {
    var c, u;
    const n = this.getMouseModifiers(o), a = ((u = (c = this.mouseConfig) == null ? void 0 : c.hasSgrMouseMode) == null ? void 0 : u.call(c)) ?? !0;
    let h;
    if (a)
      h = this.encodeMouseSGR(t, s, i, r, n);
    else {
      const m = r ? 3 : t;
      h = this.encodeMouseX10(m, s, i, n);
    }
    this.onDataCallback(h);
  }
  /**
   * Handle mousedown event
   */
  handleMouseDown(t) {
    var r;
    if (this.isDisposed || !((r = this.mouseConfig) != null && r.hasMouseTracking()))
      return;
    const s = this.pixelToCell(t);
    if (!s)
      return;
    const i = t.button;
    this.mouseButtonsPressed |= 1 << i, this.sendMouseEvent(i, s.col, s.row, !1, t);
  }
  /**
   * Handle mouseup event
   */
  handleMouseUp(t) {
    var r;
    if (this.isDisposed || !((r = this.mouseConfig) != null && r.hasMouseTracking()))
      return;
    const s = this.pixelToCell(t);
    if (!s)
      return;
    const i = t.button;
    this.mouseButtonsPressed &= ~(1 << i), this.sendMouseEvent(i, s.col, s.row, !0, t);
  }
  /**
   * Handle mousemove event
   */
  handleMouseMove(t) {
    var n, a, h;
    if (this.isDisposed || !((n = this.mouseConfig) != null && n.hasMouseTracking()))
      return;
    const s = ((a = this.getModeCallback) == null ? void 0 : a.call(this, 1002)) ?? !1, i = ((h = this.getModeCallback) == null ? void 0 : h.call(this, 1003)) ?? !1;
    if (!s && !i || s && !i && this.mouseButtonsPressed === 0)
      return;
    const r = this.pixelToCell(t);
    if (!r)
      return;
    let o = 32;
    this.mouseButtonsPressed & 1 ? o += 0 : this.mouseButtonsPressed & 2 ? o += 1 : this.mouseButtonsPressed & 4 && (o += 2), this.sendMouseEvent(o, r.col, r.row, !1, t);
  }
  /**
   * Handle wheel event (scroll)
   */
  handleWheel(t) {
    var r;
    if (this.isDisposed || !((r = this.mouseConfig) != null && r.hasMouseTracking()))
      return;
    const s = this.pixelToCell(t);
    if (!s)
      return;
    const i = t.deltaY < 0 ? 64 : 65;
    this.sendMouseEvent(i, s.col, s.row, !1, t), t.preventDefault();
  }
  /**
   * Emit paste data with bracketed paste support
   */
  emitPasteData(t) {
    var i;
    ((i = this.getModeCallback) == null ? void 0 : i.call(this, 2004)) ?? !1 ? this.onDataCallback("\x1B[200~" + t + "\x1B[201~") : this.onDataCallback(t);
  }
  /**
   * Record keydown data for beforeinput de-duplication
   */
  recordKeyDownData(t) {
    this.lastKeyDownData = t, this.lastKeyDownTime = this.getNow();
  }
  /**
   * Record paste data for beforeinput de-duplication
   */
  recordPasteData(t, s) {
    this.lastPasteData = t, this.lastPasteTime = this.getNow(), this.lastPasteSource = s;
  }
  /**
   * Check if beforeinput should be ignored due to a recent keydown
   */
  shouldIgnoreBeforeInput(t) {
    if (!this.lastKeyDownData)
      return !1;
    const i = this.getNow() - this.lastKeyDownTime < k.BEFORE_INPUT_IGNORE_MS && this.lastKeyDownData === t;
    return this.lastKeyDownData = null, i;
  }
  /**
   * Check if beforeinput text should be ignored due to a recent composition end
   */
  shouldIgnoreBeforeInputFromComposition(t) {
    if (!this.lastCompositionData)
      return !1;
    const i = this.getNow() - this.lastCompositionTime < k.BEFORE_INPUT_IGNORE_MS && this.lastCompositionData === t;
    return i && (this.lastCompositionData = null), i;
  }
  /**
   * Check if composition end should be ignored due to a recent beforeinput text
   */
  shouldIgnoreCompositionEnd(t) {
    if (!this.lastBeforeInputData)
      return !1;
    const i = this.getNow() - this.lastBeforeInputTime < k.BEFORE_INPUT_IGNORE_MS && this.lastBeforeInputData === t;
    return i && (this.lastBeforeInputData = null), i;
  }
  /**
   * Record beforeinput text for composition de-duplication
   */
  recordBeforeInputData(t) {
    this.lastBeforeInputData = t, this.lastBeforeInputTime = this.getNow();
  }
  /**
   * Record composition end data for beforeinput de-duplication
   */
  recordCompositionData(t) {
    this.lastCompositionData = t, this.lastCompositionTime = this.getNow();
  }
  /**
   * Check if paste should be ignored due to a recent paste event from another source
   */
  shouldIgnorePasteEvent(t, s) {
    if (!this.lastPasteData || this.lastPasteSource === s)
      return !1;
    const r = this.getNow() - this.lastPasteTime < k.BEFORE_INPUT_IGNORE_MS && this.lastPasteData === t;
    return r && (this.lastPasteData = null, this.lastPasteSource = null), r;
  }
  /**
   * Get current time in milliseconds
   */
  getNow() {
    return typeof performance < "u" && typeof performance.now == "function" ? performance.now() : Date.now();
  }
  /**
   * Dispose the InputHandler and remove event listeners
   */
  dispose() {
    this.isDisposed || (this.keydownListener && (this.container.removeEventListener("keydown", this.keydownListener), this.keydownListener = null), this.keypressListener && (this.container.removeEventListener("keypress", this.keypressListener), this.keypressListener = null), this.pasteListener && (this.container.removeEventListener("paste", this.pasteListener), this.inputElement && this.inputElement !== this.container && this.inputElement.removeEventListener("paste", this.pasteListener), this.pasteListener = null), this.beforeInputListener && this.inputElement && (this.inputElement.removeEventListener("beforeinput", this.beforeInputListener), this.beforeInputListener = null), this.compositionStartListener && (this.container.removeEventListener("compositionstart", this.compositionStartListener), this.compositionStartListener = null), this.compositionUpdateListener && (this.container.removeEventListener("compositionupdate", this.compositionUpdateListener), this.compositionUpdateListener = null), this.compositionEndListener && (this.container.removeEventListener("compositionend", this.compositionEndListener), this.compositionEndListener = null), this.mousedownListener && (this.container.removeEventListener("mousedown", this.mousedownListener), this.mousedownListener = null), this.mouseupListener && (this.container.removeEventListener("mouseup", this.mouseupListener), this.mouseupListener = null), this.mousemoveListener && (this.container.removeEventListener("mousemove", this.mousemoveListener), this.mousemoveListener = null), this.wheelListener && (this.container.removeEventListener("wheel", this.wheelListener), this.wheelListener = null), this.isDisposed = !0);
  }
  /**
   * Check if handler is disposed
   */
  isActive() {
    return !this.isDisposed;
  }
};
z.BEFORE_INPUT_IGNORE_MS = 100;
let J = z;
class j {
  // Terminal instance for buffer access
  constructor(t) {
    this.terminal = t, this.providers = [], this.linkCache = /* @__PURE__ */ new Map(), this.scannedRows = /* @__PURE__ */ new Set();
  }
  /**
   * Register a link provider
   */
  registerProvider(t) {
    this.providers.push(t), this.invalidateCache();
  }
  /**
   * Get link at the specified buffer position
   * @param col Column (0-based)
   * @param row Absolute row in buffer (0-based)
   * @returns Link at position, or undefined if none
   */
  async getLinkAt(t, s) {
    const i = this.terminal.buffer.active.getLine(s);
    if (!i || t < 0 || t >= i.length)
      return;
    const r = i.getCell(t);
    if (!r)
      return;
    const o = r.getHyperlinkId();
    if (o > 0) {
      const n = `h${o}`;
      if (this.linkCache.has(n))
        return this.linkCache.get(n);
    }
    if (this.scannedRows.has(s) || await this.scanRow(s), o > 0) {
      const n = `h${o}`, a = this.linkCache.get(n);
      if (a)
        return a;
    }
    for (const n of this.linkCache.values())
      if (this.isPositionInLink(t, s, n))
        return n;
  }
  /**
   * Scan a row for links using all registered providers
   */
  async scanRow(t) {
    this.scannedRows.add(t);
    const s = [];
    for (const i of this.providers) {
      const r = await new Promise((o) => {
        i.provideLinks(t, o);
      });
      r && s.push(...r);
    }
    for (const i of s)
      this.cacheLink(i);
  }
  /**
   * Cache a link for fast lookup
   */
  cacheLink(t) {
    const { start: s } = t.range, i = this.terminal.buffer.active.getLine(s.y);
    if (i) {
      const a = i.getCell(s.x);
      if (!a) {
        const { start: c, end: u } = t.range, m = `r${c.y}:${c.x}-${u.x}`;
        this.linkCache.set(m, t);
        return;
      }
      const h = a.getHyperlinkId();
      if (h > 0) {
        this.linkCache.set(`h${h}`, t);
        return;
      }
    }
    const { start: r, end: o } = t.range, n = `r${r.y}:${r.x}-${o.x}`;
    this.linkCache.set(n, t);
  }
  /**
   * Check if a position is within a link's range
   */
  isPositionInLink(t, s, i) {
    const { start: r, end: o } = i.range;
    return s < r.y || s > o.y ? !1 : r.y === o.y ? t >= r.x && t <= o.x : s === r.y ? t >= r.x : s === o.y ? t <= o.x : !0;
  }
  /**
   * Invalidate cache when terminal content changes
   * Should be called on terminal write, resize, or clear
   */
  invalidateCache() {
    this.linkCache.clear(), this.scannedRows.clear();
  }
  /**
   * Invalidate cache for specific rows
   * Used when only part of the terminal changed
   */
  invalidateRows(t, s) {
    for (let r = t; r <= s; r++)
      this.scannedRows.delete(r);
    const i = [];
    for (const [r, o] of this.linkCache.entries()) {
      const { start: n, end: a } = o.range;
      (n.y >= t && n.y <= s || a.y >= t && a.y <= s || n.y < t && a.y > s) && i.push(r);
    }
    for (const r of i)
      this.linkCache.delete(r);
  }
  /**
   * Dispose and cleanup
   */
  dispose() {
    var t;
    this.linkCache.clear(), this.scannedRows.clear();
    for (const s of this.providers)
      (t = s.dispose) == null || t.call(s);
    this.providers = [];
  }
}
class K {
  constructor(t) {
    this.terminal = t;
  }
  /**
   * Provide all OSC 8 links on the given row
   * Note: This may return links that span multiple rows
   */
  provideLinks(t, s) {
    const i = [], r = /* @__PURE__ */ new Set(), o = this.terminal.buffer.active.getLine(t);
    if (!o) {
      s(void 0);
      return;
    }
    for (let n = 0; n < o.length; n++) {
      const a = o.getCell(n);
      if (!a)
        continue;
      const h = a.getHyperlinkId();
      if (h === 0 || r.has(h))
        continue;
      r.add(h);
      const c = this.findLinkRange(h, t, n);
      if (!this.terminal.wasmTerm)
        continue;
      const u = this.terminal.wasmTerm.getHyperlinkUri(h);
      u && i.push({
        text: u,
        range: c,
        activate: (m) => {
          (m.ctrlKey || m.metaKey) && window.open(u, "_blank", "noopener,noreferrer");
        }
      });
    }
    s(i.length > 0 ? i : void 0);
  }
  /**
   * Find the full extent of a link by scanning for contiguous cells
   * with the same hyperlink_id. Handles multi-line links.
   */
  findLinkRange(t, s, i) {
    const r = this.terminal.buffer.active;
    let o = s, n = i;
    for (; n > 0; ) {
      const u = r.getLine(o);
      if (!u)
        break;
      const m = u.getCell(n - 1);
      if (!m || m.getHyperlinkId() !== t)
        break;
      n--;
    }
    if (n === 0 && o > 0) {
      let u = o - 1;
      for (; u >= 0; ) {
        const m = r.getLine(u);
        if (!m || m.length === 0)
          break;
        const p = m.getCell(m.length - 1);
        if (!p || p.getHyperlinkId() !== t)
          break;
        o = u, n = 0;
        for (let f = m.length - 1; f >= 0; f--) {
          const w = m.getCell(f);
          if (!w || w.getHyperlinkId() !== t) {
            n = f + 1;
            break;
          }
        }
        if (n === 0)
          u--;
        else
          break;
      }
    }
    let a = s, h = i;
    const c = r.getLine(a);
    if (c) {
      for (; h < c.length - 1; ) {
        const u = c.getCell(h + 1);
        if (!u || u.getHyperlinkId() !== t)
          break;
        h++;
      }
      if (h === c.length - 1) {
        let u = a + 1;
        const m = r.length;
        for (; u < m; ) {
          const p = r.getLine(u);
          if (!p || p.length === 0)
            break;
          const f = p.getCell(0);
          if (!f || f.getHyperlinkId() !== t)
            break;
          a = u, h = 0;
          for (let w = 0; w < p.length; w++) {
            const g = p.getCell(w);
            if (!g)
              break;
            if (g.getHyperlinkId() !== t) {
              h = w - 1;
              break;
            }
            h = w;
          }
          if (h === p.length - 1)
            u++;
          else
            break;
        }
      }
    }
    return {
      start: { x: n, y: o },
      end: { x: h, y: a }
    };
  }
  dispose() {
  }
}
const F = class P {
  constructor(t) {
    this.terminal = t;
  }
  /**
   * Provide all regex-detected URLs on the given row
   */
  provideLinks(t, s) {
    const i = [], r = this.terminal.buffer.active.getLine(t);
    if (!r) {
      s(void 0);
      return;
    }
    const o = this.lineToText(r);
    P.URL_REGEX.lastIndex = 0;
    let n = P.URL_REGEX.exec(o);
    for (; n !== null; ) {
      let a = n[0];
      const h = n.index;
      let c = n.index + a.length - 1;
      const u = a.replace(P.TRAILING_PUNCTUATION, "");
      u.length < a.length && (a = u, c = h + a.length - 1), a.length > 8 && i.push({
        text: a,
        range: {
          start: { x: h, y: t },
          end: { x: c, y: t }
        },
        activate: (m) => {
          (m.ctrlKey || m.metaKey) && window.open(a, "_blank", "noopener,noreferrer");
        }
      }), n = P.URL_REGEX.exec(o);
    }
    s(i.length > 0 ? i : void 0);
  }
  /**
   * Convert a buffer line to plain text string
   */
  lineToText(t) {
    const s = [];
    for (let i = 0; i < t.length; i++) {
      const r = t.getCell(i);
      if (!r) {
        s.push(" ");
        continue;
      }
      const o = r.getCodepoint();
      o === 0 || o < 32 ? s.push(" ") : s.push(String.fromCodePoint(o));
    }
    return s.join("");
  }
  dispose() {
  }
};
F.URL_REGEX = /(?:https?:\/\/|mailto:|ftp:\/\/|ssh:\/\/|git:\/\/|tel:|magnet:|gemini:\/\/|gopher:\/\/|news:)[\w\-.~:\/?#@!$&*+,;=%]+/gi;
F.TRAILING_PUNCTUATION = /[.,;!?)\]]+$/;
let tt = F;
const W = {
  foreground: "#d4d4d4",
  background: "#1e1e1e",
  cursor: "#ffffff",
  cursorAccent: "#1e1e1e",
  // Selection colors: solid colors that replace cell bg/fg when selected
  // Using Ghostty's approach: selection bg = default fg, selection fg = default bg
  selectionBackground: "#d4d4d4",
  selectionForeground: "#1e1e1e",
  black: "#000000",
  red: "#cd3131",
  green: "#0dbc79",
  yellow: "#e5e510",
  blue: "#2472c8",
  magenta: "#bc3fbc",
  cyan: "#11a8cd",
  white: "#e5e5e5",
  brightBlack: "#666666",
  brightRed: "#f14c4c",
  brightGreen: "#23d18b",
  brightYellow: "#f5f543",
  brightBlue: "#3b8eea",
  brightMagenta: "#d670d6",
  brightCyan: "#29b8db",
  brightWhite: "#ffffff"
};
class et {
  constructor(t, s = {}) {
    this.cursorVisible = !0, this.lastCursorPosition = { x: 0, y: 0 }, this.cursorStableFrames = 2, this.lastViewportY = 0, this.currentBuffer = null, this.currentSelectionCoords = null, this.hoveredHyperlinkId = 0, this.previousHoveredHyperlinkId = 0, this.hoveredLinkRange = null, this.previousHoveredLinkRange = null, this.canvas = t;
    const i = t.getContext("2d", { alpha: !0 });
    if (!i)
      throw new Error("Failed to get 2D rendering context");
    this.ctx = i, this.fontSize = s.fontSize ?? 15, this.fontFamily = s.fontFamily ?? "monospace", this.cursorStyle = s.cursorStyle ?? "block", this.cursorBlink = s.cursorBlink ?? !1, this.theme = { ...W, ...s.theme }, this.devicePixelRatio = s.devicePixelRatio ?? window.devicePixelRatio ?? 1, this.palette = [
      this.theme.black,
      this.theme.red,
      this.theme.green,
      this.theme.yellow,
      this.theme.blue,
      this.theme.magenta,
      this.theme.cyan,
      this.theme.white,
      this.theme.brightBlack,
      this.theme.brightRed,
      this.theme.brightGreen,
      this.theme.brightYellow,
      this.theme.brightBlue,
      this.theme.brightMagenta,
      this.theme.brightCyan,
      this.theme.brightWhite
    ], this.metrics = this.measureFont(), this.cursorBlink && this.startCursorBlink();
  }
  // ==========================================================================
  // Font Metrics Measurement
  // ==========================================================================
  measureFont() {
    const s = document.createElement("canvas").getContext("2d");
    s.font = `${this.fontSize}px ${this.fontFamily}`;
    const i = s.measureText("M"), r = Math.ceil(i.width), o = i.actualBoundingBoxAscent || this.fontSize * 0.8, n = i.actualBoundingBoxDescent || this.fontSize * 0.2, a = Math.ceil(o + n) + 2, h = Math.ceil(o) + 1;
    return { width: r, height: a, baseline: h };
  }
  /**
   * Remeasure font metrics (call after font loads or changes)
   */
  remeasureFont() {
    this.metrics = this.measureFont();
  }
  // ==========================================================================
  // Color Conversion
  // ==========================================================================
  rgbToCSS(t, s, i) {
    return `rgb(${t}, ${s}, ${i})`;
  }
  // ==========================================================================
  // Canvas Sizing
  // ==========================================================================
  /**
   * Resize canvas to fit terminal dimensions
   */
  resize(t, s) {
    const i = t * this.metrics.width, r = s * this.metrics.height;
    this.canvas.style.width = `${i}px`, this.canvas.style.height = `${r}px`, this.canvas.width = i * this.devicePixelRatio, this.canvas.height = r * this.devicePixelRatio, this.ctx.scale(this.devicePixelRatio, this.devicePixelRatio), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left", this.ctx.fillStyle = this.theme.background, this.ctx.fillRect(0, 0, i, r);
  }
  // ==========================================================================
  // Main Rendering
  // ==========================================================================
  /**
   * Render the terminal buffer to canvas
   */
  render(t, s = !1, i = 0, r, o = 1) {
    var x;
    this.currentBuffer = t;
    const n = t.getCursor(), a = t.getDimensions(), h = r ? r.getScrollbackLength() : 0;
    (x = t.needsFullRedraw) != null && x.call(t) && (s = !0), (this.canvas.width !== a.cols * this.metrics.width * this.devicePixelRatio || this.canvas.height !== a.rows * this.metrics.height * this.devicePixelRatio) && (this.resize(a.cols, a.rows), s = !0);
    const u = a.cols * this.metrics.width, m = a.rows * this.metrics.height;
    this.ctx.save(), this.ctx.beginPath(), this.ctx.rect(0, 0, u, m), this.ctx.clip(), i !== this.lastViewportY && (s = !0, this.lastViewportY = i);
    const p = n.x !== this.lastCursorPosition.x || n.y !== this.lastCursorPosition.y;
    if (p) {
      if (this.cursorStableFrames = 0, !s && !t.isRowDirty(n.y)) {
        const d = t.getLine(n.y);
        d && this.renderLine(d, n.y, a.cols);
      }
      if (this.lastCursorPosition.y !== n.y && !s && !t.isRowDirty(this.lastCursorPosition.y)) {
        const d = t.getLine(this.lastCursorPosition.y);
        d && this.renderLine(d, this.lastCursorPosition.y, a.cols);
      }
    } else if (this.cursorStableFrames++, this.cursorStableFrames === 1 && !s && !t.isRowDirty(n.y)) {
      const d = t.getLine(n.y);
      d && this.renderLine(d, n.y, a.cols);
    }
    if (this.cursorBlink && !p && !s && !t.isRowDirty(n.y)) {
      const d = t.getLine(n.y);
      d && this.renderLine(d, n.y, a.cols);
    }
    const f = this.selectionManager && this.selectionManager.hasSelection(), w = /* @__PURE__ */ new Set();
    if (this.currentSelectionCoords = f ? this.selectionManager.getSelectionCoords() : null, this.currentSelectionCoords) {
      const d = this.currentSelectionCoords;
      for (let _ = d.startRow; _ <= d.endRow; _++)
        w.add(_);
    }
    if (this.selectionManager) {
      const d = this.selectionManager.getDirtySelectionRows();
      if (d.size > 0) {
        for (const _ of d)
          w.add(_);
        this.selectionManager.clearDirtySelectionRows();
      }
    }
    const g = /* @__PURE__ */ new Set(), E = this.hoveredHyperlinkId !== this.previousHoveredHyperlinkId, R = JSON.stringify(this.hoveredLinkRange) !== JSON.stringify(this.previousHoveredLinkRange);
    if (E) {
      for (let d = 0; d < a.rows; d++) {
        let _ = null;
        if (i > 0)
          if (d < i && r) {
            const S = h - Math.floor(i) + d;
            _ = r.getScrollbackLine(S);
          } else {
            const S = d - Math.floor(i);
            _ = t.getLine(S);
          }
        else
          _ = t.getLine(d);
        if (_) {
          for (const S of _)
            if (S.hyperlink_id === this.hoveredHyperlinkId || S.hyperlink_id === this.previousHoveredHyperlinkId) {
              g.add(d);
              break;
            }
        }
      }
      this.previousHoveredHyperlinkId = this.hoveredHyperlinkId;
    }
    if (R) {
      if (this.previousHoveredLinkRange)
        for (let d = this.previousHoveredLinkRange.startY; d <= this.previousHoveredLinkRange.endY; d++)
          g.add(d);
      if (this.hoveredLinkRange)
        for (let d = this.hoveredLinkRange.startY; d <= this.hoveredLinkRange.endY; d++)
          g.add(d);
      this.previousHoveredLinkRange = this.hoveredLinkRange;
    }
    const T = /* @__PURE__ */ new Set();
    for (let d = 0; d < a.rows; d++)
      (i > 0 ? !0 : s || t.isRowDirty(d) || w.has(d) || g.has(d)) && (T.add(d), d > 0 && T.add(d - 1), d < a.rows - 1 && T.add(d + 1));
    for (let d = 0; d < a.rows; d++) {
      if (!T.has(d))
        continue;
      let _ = null;
      if (i > 0)
        if (d < i && r) {
          const S = h - Math.floor(i) + d;
          _ = r.getScrollbackLine(S);
        } else {
          const S = i > 0 ? d - Math.floor(i) : d;
          _ = t.getLine(S);
        }
      else
        _ = t.getLine(d);
      _ && this.renderLine(_, d, a.cols);
    }
    i === 0 && n.visible && this.cursorVisible && this.cursorStableFrames >= 1 && this.renderCursor(n.x, n.y), r && o > 0 && this.renderScrollbar(i, h, a.rows, o), this.ctx.restore(), this.lastCursorPosition = { x: n.x, y: n.y }, t.clearDirty();
  }
  /**
   * Render a single line using two-pass approach:
   * 1. First pass: Draw all cell backgrounds
   * 2. Second pass: Draw all cell text and decorations
   *
   * This two-pass approach is necessary for proper rendering of complex scripts
   * like Devanagari where diacritics (like vowel sign ि) can extend LEFT of the
   * base character into the previous cell's visual area. If we draw backgrounds
   * and text in a single pass (cell by cell), the background of cell N would
   * cover any left-extending portions of graphemes from cell N-1.
   */
  renderLine(t, s, i) {
    const r = s * this.metrics.height, o = i * this.metrics.width;
    this.ctx.clearRect(0, r, o, this.metrics.height), this.ctx.fillStyle = this.theme.background, this.ctx.fillRect(0, r, o, this.metrics.height);
    for (let n = 0; n < t.length; n++) {
      const a = t[n];
      a.width !== 0 && this.renderCellBackground(a, n, s);
    }
    for (let n = 0; n < t.length; n++) {
      const a = t[n];
      a.width !== 0 && this.renderCellText(a, n, s);
    }
  }
  /**
   * Render a cell's background only (Pass 1 of two-pass rendering)
   * Selection highlighting is integrated here to avoid z-order issues with
   * complex glyphs (like Devanagari) that extend outside their cell bounds.
   */
  renderCellBackground(t, s, i) {
    const r = s * this.metrics.width, o = i * this.metrics.height, n = this.metrics.width * t.width;
    if (this.isInSelection(s, i)) {
      this.ctx.fillStyle = this.theme.selectionBackground, this.ctx.fillRect(r, o, n, this.metrics.height);
      return;
    }
    let h = t.bg_r, c = t.bg_g, u = t.bg_b;
    t.flags & b.INVERSE && (h = t.fg_r, c = t.fg_g, u = t.fg_b), h === 0 && c === 0 && u === 0 || (this.ctx.fillStyle = this.rgbToCSS(h, c, u), this.ctx.fillRect(r, o, n, this.metrics.height));
  }
  /**
   * Render a cell's text and decorations (Pass 2 of two-pass rendering)
   * Selection foreground color is applied here to match the selection background.
   */
  renderCellText(t, s, i) {
    var p;
    const r = s * this.metrics.width, o = i * this.metrics.height, n = this.metrics.width * t.width;
    if (t.flags & b.INVISIBLE)
      return;
    const a = this.isInSelection(s, i);
    let h = "";
    if (t.flags & b.ITALIC && (h += "italic "), t.flags & b.BOLD && (h += "bold "), this.ctx.font = `${h}${this.fontSize}px ${this.fontFamily}`, a)
      this.ctx.fillStyle = this.theme.selectionForeground;
    else {
      let f = t.fg_r, w = t.fg_g, g = t.fg_b;
      t.flags & b.INVERSE && (f = t.bg_r, w = t.bg_g, g = t.bg_b), this.ctx.fillStyle = this.rgbToCSS(f, w, g);
    }
    t.flags & b.FAINT && (this.ctx.globalAlpha = 0.5);
    const c = r, u = o + this.metrics.baseline;
    let m;
    if (t.grapheme_len > 0 && ((p = this.currentBuffer) != null && p.getGraphemeString) ? m = this.currentBuffer.getGraphemeString(i, s) : m = String.fromCodePoint(t.codepoint || 32), this.ctx.fillText(m, c, u), t.flags & b.FAINT && (this.ctx.globalAlpha = 1), t.flags & b.UNDERLINE) {
      const f = o + this.metrics.baseline + 2;
      this.ctx.strokeStyle = this.ctx.fillStyle, this.ctx.lineWidth = 1, this.ctx.beginPath(), this.ctx.moveTo(r, f), this.ctx.lineTo(r + n, f), this.ctx.stroke();
    }
    if (t.flags & b.STRIKETHROUGH) {
      const f = o + this.metrics.height / 2;
      this.ctx.strokeStyle = this.ctx.fillStyle, this.ctx.lineWidth = 1, this.ctx.beginPath(), this.ctx.moveTo(r, f), this.ctx.lineTo(r + n, f), this.ctx.stroke();
    }
    if (t.hyperlink_id > 0 && t.hyperlink_id === this.hoveredHyperlinkId) {
      const w = o + this.metrics.baseline + 2;
      this.ctx.strokeStyle = "#4A90E2", this.ctx.lineWidth = 1, this.ctx.beginPath(), this.ctx.moveTo(r, w), this.ctx.lineTo(r + n, w), this.ctx.stroke();
    }
    if (this.hoveredLinkRange) {
      const f = this.hoveredLinkRange;
      if (i === f.startY && s >= f.startX && (i < f.endY || s <= f.endX) || i > f.startY && i < f.endY || i === f.endY && s <= f.endX && (i > f.startY || s >= f.startX)) {
        const g = o + this.metrics.baseline + 2;
        this.ctx.strokeStyle = "#4A90E2", this.ctx.lineWidth = 1, this.ctx.beginPath(), this.ctx.moveTo(r, g), this.ctx.lineTo(r + n, g), this.ctx.stroke();
      }
    }
  }
  /**
   * Render cursor
   */
  renderCursor(t, s) {
    const i = t * this.metrics.width, r = s * this.metrics.height;
    switch (this.ctx.fillStyle = this.theme.cursor, this.cursorStyle) {
      case "block":
        this.ctx.fillRect(i, r, this.metrics.width, this.metrics.height);
        break;
      case "underline":
        const o = Math.max(2, Math.floor(this.metrics.height * 0.15));
        this.ctx.fillRect(
          i,
          r + this.metrics.height - o,
          this.metrics.width,
          o
        );
        break;
      case "bar":
        const n = Math.max(2, Math.floor(this.metrics.width * 0.15));
        this.ctx.fillRect(i, r, n, this.metrics.height);
        break;
    }
  }
  // ==========================================================================
  // Cursor Blinking
  // ==========================================================================
  startCursorBlink() {
    this.cursorBlinkInterval = window.setInterval(() => {
      this.cursorVisible = !this.cursorVisible;
    }, 530);
  }
  stopCursorBlink() {
    this.cursorBlinkInterval !== void 0 && (clearInterval(this.cursorBlinkInterval), this.cursorBlinkInterval = void 0), this.cursorVisible = !0;
  }
  // ==========================================================================
  // Public API
  // ==========================================================================
  /**
   * Update theme colors
   */
  setTheme(t) {
    this.theme = { ...W, ...t }, this.palette = [
      this.theme.black,
      this.theme.red,
      this.theme.green,
      this.theme.yellow,
      this.theme.blue,
      this.theme.magenta,
      this.theme.cyan,
      this.theme.white,
      this.theme.brightBlack,
      this.theme.brightRed,
      this.theme.brightGreen,
      this.theme.brightYellow,
      this.theme.brightBlue,
      this.theme.brightMagenta,
      this.theme.brightCyan,
      this.theme.brightWhite
    ];
  }
  /**
   * Update font size
   */
  setFontSize(t) {
    this.fontSize = t, this.metrics = this.measureFont();
  }
  /**
   * Update font family
   */
  setFontFamily(t) {
    this.fontFamily = t, this.metrics = this.measureFont();
  }
  /**
   * Update cursor style
   */
  setCursorStyle(t) {
    this.cursorStyle = t;
  }
  /**
   * Enable/disable cursor blinking
   */
  setCursorBlink(t) {
    t && !this.cursorBlink ? (this.cursorBlink = !0, this.startCursorBlink()) : !t && this.cursorBlink && (this.cursorBlink = !1, this.stopCursorBlink());
  }
  /**
   * Get current font metrics
   */
  /**
   * Render scrollbar (Phase 2)
   * Shows scroll position and allows click/drag interaction
   * @param opacity Opacity level (0-1) for fade in/out effect
   */
  renderScrollbar(t, s, i, r = 1) {
    const o = this.ctx, n = this.canvas.height / this.devicePixelRatio, a = this.canvas.width / this.devicePixelRatio, h = 8, c = a - h - 4, u = 4, m = n - u * 2;
    if (o.clearRect(c - 2, 0, h + 6, n), o.fillStyle = this.theme.background, o.fillRect(c - 2, 0, h + 6, n), r <= 0 || s === 0)
      return;
    const p = s + i, f = Math.max(20, i / p * m), w = t / s, g = u + (m - f) * (1 - w);
    o.fillStyle = `rgba(128, 128, 128, ${0.1 * r})`, o.fillRect(c, u, h, m);
    const R = t > 0 ? 0.5 : 0.3;
    o.fillStyle = `rgba(128, 128, 128, ${R * r})`, o.fillRect(c, g, h, f);
  }
  getMetrics() {
    return { ...this.metrics };
  }
  /**
   * Get canvas element (needed by SelectionManager)
   */
  getCanvas() {
    return this.canvas;
  }
  /**
   * Set selection manager (for rendering selection)
   */
  setSelectionManager(t) {
    this.selectionManager = t;
  }
  /**
   * Check if a cell at (x, y) is within the current selection.
   * Uses cached selection coordinates for performance.
   */
  isInSelection(t, s) {
    const i = this.currentSelectionCoords;
    if (!i)
      return !1;
    const { startCol: r, startRow: o, endCol: n, endRow: a } = i;
    return o === a ? s === o && t >= r && t <= n : s === o ? t >= r : s === a ? t <= n : s > o && s < a;
  }
  /**
   * Set the currently hovered hyperlink ID for rendering underlines
   */
  setHoveredHyperlinkId(t) {
    this.hoveredHyperlinkId = t;
  }
  /**
   * Set the currently hovered link range for rendering underlines (for regex-detected URLs)
   * Pass null to clear the hover state
   */
  setHoveredLinkRange(t) {
    this.hoveredLinkRange = t;
  }
  /**
   * Get character cell width (for coordinate conversion)
   */
  get charWidth() {
    return this.metrics.width;
  }
  /**
   * Get character cell height (for coordinate conversion)
   */
  get charHeight() {
    return this.metrics.height;
  }
  /**
   * Clear entire canvas
   */
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = this.theme.background, this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  /**
   * Cleanup resources
   */
  dispose() {
    this.stopCursorBlink();
  }
}
const I = class A {
  // ms between scroll steps
  constructor(t, s, i, r) {
    this.selectionStart = null, this.selectionEnd = null, this.isSelecting = !1, this.mouseDownTarget = null, this.dirtySelectionRows = /* @__PURE__ */ new Set(), this.selectionChangedEmitter = new v(), this.boundMouseUpHandler = null, this.boundContextMenuHandler = null, this.boundClickHandler = null, this.boundDocumentMouseMoveHandler = null, this.autoScrollInterval = null, this.autoScrollDirection = 0, this.terminal = t, this.renderer = s, this.wasmTerm = i, this.textarea = r, this.attachEventListeners();
  }
  // pixels from edge to trigger scroll
  /**
   * Get current viewport Y position (how many lines scrolled into history)
   */
  getViewportY() {
    const t = typeof this.terminal.getViewportY == "function" ? this.terminal.getViewportY() : this.terminal.viewportY || 0;
    return Math.max(0, Math.floor(t));
  }
  /**
   * Convert viewport row to absolute buffer row
   * Absolute row is an index into combined buffer: scrollback (0 to len-1) + screen (len to len+rows-1)
   */
  viewportRowToAbsolute(t) {
    const s = this.wasmTerm.getScrollbackLength(), i = this.getViewportY();
    return s + t - i;
  }
  /**
   * Convert absolute buffer row to viewport row (may be outside visible range)
   */
  absoluteRowToViewport(t) {
    const s = this.wasmTerm.getScrollbackLength(), i = this.getViewportY();
    return t - s + i;
  }
  // ==========================================================================
  // Public API
  // ==========================================================================
  /**
   * Get the selected text as a string
   */
  getSelection() {
    if (!this.selectionStart || !this.selectionEnd)
      return "";
    let { col: t, absoluteRow: s } = this.selectionStart, { col: i, absoluteRow: r } = this.selectionEnd;
    (s > r || s === r && t > i) && ([t, i] = [i, t], [s, r] = [r, s]);
    const o = this.wasmTerm.getScrollbackLength();
    let n = "";
    for (let a = s; a <= r; a++) {
      let h = null;
      if (a < o)
        h = this.wasmTerm.getScrollbackLine(a);
      else {
        const f = a - o;
        h = this.wasmTerm.getLine(f);
      }
      if (!h)
        continue;
      let c = -1;
      const u = a === s ? t : 0, m = a === r ? i : h.length - 1;
      let p = "";
      for (let f = u; f <= m; f++) {
        const w = h[f];
        if (w && w.codepoint !== 0) {
          let g;
          if (w.grapheme_len > 0)
            if (a < o)
              g = this.wasmTerm.getScrollbackGraphemeString(a, f);
            else {
              const E = a - o;
              g = this.wasmTerm.getGraphemeString(E, f);
            }
          else
            g = String.fromCodePoint(w.codepoint);
          p += g, g.trim() && (c = p.length);
        } else
          p += " ";
      }
      c >= 0 ? p = p.substring(0, c) : p = "", n += p, a < r && (n += `
`);
    }
    return n;
  }
  /**
   * Check if there's an active selection
   */
  hasSelection() {
    return !this.selectionStart || !this.selectionEnd ? !1 : !(this.selectionStart.col === this.selectionEnd.col && this.selectionStart.absoluteRow === this.selectionEnd.absoluteRow);
  }
  /**
   * Copy the current selection to clipboard
   * @returns true if there was text to copy, false otherwise
   */
  copySelection() {
    if (!this.hasSelection())
      return !1;
    const t = this.getSelection();
    return t ? (this.copyToClipboard(t), !0) : !1;
  }
  /**
   * Clear the selection
   */
  clearSelection() {
    if (!this.hasSelection())
      return;
    const t = this.normalizeSelection();
    if (t)
      for (let s = t.startRow; s <= t.endRow; s++)
        this.dirtySelectionRows.add(s);
    this.selectionStart = null, this.selectionEnd = null, this.isSelecting = !1, this.requestRender();
  }
  /**
   * Select all text in the terminal
   */
  selectAll() {
    const t = this.wasmTerm.getDimensions(), s = this.getViewportY();
    this.selectionStart = { col: 0, absoluteRow: s }, this.selectionEnd = { col: t.cols - 1, absoluteRow: s + t.rows - 1 }, this.requestRender(), this.selectionChangedEmitter.fire();
  }
  /**
   * Select text at specific column and row with length
   * xterm.js compatible API
   */
  select(t, s, i) {
    const r = this.wasmTerm.getDimensions();
    s = Math.max(0, Math.min(s, r.rows - 1)), t = Math.max(0, Math.min(t, r.cols - 1));
    let o = s, n = t + i - 1;
    for (; n >= r.cols; )
      n -= r.cols, o++;
    o = Math.min(o, r.rows - 1);
    const a = this.getViewportY();
    this.selectionStart = { col: t, absoluteRow: a + s }, this.selectionEnd = { col: n, absoluteRow: a + o }, this.requestRender(), this.selectionChangedEmitter.fire();
  }
  /**
   * Select entire lines from start to end
   * xterm.js compatible API
   */
  selectLines(t, s) {
    const i = this.wasmTerm.getDimensions();
    t = Math.max(0, Math.min(t, i.rows - 1)), s = Math.max(0, Math.min(s, i.rows - 1)), t > s && ([t, s] = [s, t]);
    const r = this.getViewportY();
    this.selectionStart = { col: 0, absoluteRow: r + t }, this.selectionEnd = { col: i.cols - 1, absoluteRow: r + s }, this.requestRender(), this.selectionChangedEmitter.fire();
  }
  /**
   * Get selection position as buffer range
   * xterm.js compatible API
   */
  getSelectionPosition() {
    const t = this.normalizeSelection();
    if (t)
      return {
        start: { x: t.startCol, y: t.startRow },
        end: { x: t.endCol, y: t.endRow }
      };
  }
  /**
   * Deselect all text
   * xterm.js compatible API
   */
  deselect() {
    this.clearSelection(), this.selectionChangedEmitter.fire();
  }
  /**
   * Focus the terminal (make it receive keyboard input)
   */
  focus() {
    const t = this.renderer.getCanvas();
    t.parentElement && t.parentElement.focus();
  }
  /**
   * Get current selection coordinates (for rendering)
   */
  getSelectionCoords() {
    return this.normalizeSelection();
  }
  /**
   * Get dirty selection rows that need redraw (for clearing old highlight)
   */
  getDirtySelectionRows() {
    return this.dirtySelectionRows;
  }
  /**
   * Clear the dirty selection rows tracking (after redraw)
   */
  clearDirtySelectionRows() {
    this.dirtySelectionRows.clear();
  }
  /**
   * Get selection change event accessor
   */
  get onSelectionChange() {
    return this.selectionChangedEmitter.event;
  }
  /**
   * Cleanup resources
   */
  dispose() {
    this.selectionChangedEmitter.dispose(), this.stopAutoScroll(), this.boundMouseUpHandler && (document.removeEventListener("mouseup", this.boundMouseUpHandler), this.boundMouseUpHandler = null), this.boundDocumentMouseMoveHandler && (document.removeEventListener("mousemove", this.boundDocumentMouseMoveHandler), this.boundDocumentMouseMoveHandler = null), this.boundContextMenuHandler && (this.renderer.getCanvas().removeEventListener("contextmenu", this.boundContextMenuHandler), this.boundContextMenuHandler = null), this.boundClickHandler && (document.removeEventListener("click", this.boundClickHandler), this.boundClickHandler = null);
  }
  // ==========================================================================
  // Private Methods
  // ==========================================================================
  /**
   * Attach mouse event listeners to canvas
   */
  attachEventListeners() {
    const t = this.renderer.getCanvas();
    t.addEventListener("mousedown", (s) => {
      if (s.button === 0) {
        t.parentElement && t.parentElement.focus();
        const i = this.pixelToCell(s.offsetX, s.offsetY);
        this.hasSelection() && this.clearSelection();
        const o = this.viewportRowToAbsolute(i.row);
        this.selectionStart = { col: i.col, absoluteRow: o }, this.selectionEnd = { col: i.col, absoluteRow: o }, this.isSelecting = !0;
      }
    }), t.addEventListener("mousemove", (s) => {
      if (this.isSelecting) {
        this.markCurrentSelectionDirty();
        const i = this.pixelToCell(s.offsetX, s.offsetY), r = this.viewportRowToAbsolute(i.row);
        this.selectionEnd = { col: i.col, absoluteRow: r }, this.requestRender(), this.updateAutoScroll(s.offsetY, t.clientHeight);
      }
    }), t.addEventListener("mouseleave", (s) => {
      if (this.isSelecting) {
        const i = t.getBoundingClientRect();
        s.clientY < i.top ? this.startAutoScroll(-1) : s.clientY > i.bottom && this.startAutoScroll(1);
      }
    }), t.addEventListener("mouseenter", () => {
      this.isSelecting && this.stopAutoScroll();
    }), this.boundDocumentMouseMoveHandler = (s) => {
      if (this.isSelecting) {
        const i = t.getBoundingClientRect(), r = Math.max(i.left, Math.min(s.clientX, i.right)), o = Math.max(i.top, Math.min(s.clientY, i.bottom)), n = r - i.left, a = o - i.top;
        if ((s.clientX < i.left || s.clientX > i.right || s.clientY < i.top || s.clientY > i.bottom) && (s.clientY < i.top ? this.startAutoScroll(-1) : s.clientY > i.bottom ? this.startAutoScroll(1) : this.stopAutoScroll(), this.autoScrollDirection === 0)) {
          this.markCurrentSelectionDirty();
          const h = this.pixelToCell(n, a), c = this.viewportRowToAbsolute(h.row);
          this.selectionEnd = { col: h.col, absoluteRow: c }, this.requestRender();
        }
      }
    }, document.addEventListener("mousemove", this.boundDocumentMouseMoveHandler), document.addEventListener("mousedown", (s) => {
      this.mouseDownTarget = s.target;
    }), this.boundMouseUpHandler = (s) => {
      if (this.isSelecting && (this.isSelecting = !1, this.stopAutoScroll(), this.hasSelection())) {
        const i = this.getSelection();
        i && (this.copyToClipboard(i), this.selectionChangedEmitter.fire());
      }
    }, document.addEventListener("mouseup", this.boundMouseUpHandler), t.addEventListener("dblclick", (s) => {
      const i = this.pixelToCell(s.offsetX, s.offsetY), r = this.getWordAtCell(i.col, i.row);
      if (r) {
        const o = this.viewportRowToAbsolute(i.row);
        this.selectionStart = { col: r.startCol, absoluteRow: o }, this.selectionEnd = { col: r.endCol, absoluteRow: o }, this.requestRender();
        const n = this.getSelection();
        n && (this.copyToClipboard(n), this.selectionChangedEmitter.fire());
      }
    }), this.boundContextMenuHandler = (s) => {
      if (this.renderer.getCanvas().getBoundingClientRect(), this.textarea.style.position = "fixed", this.textarea.style.left = `${s.clientX}px`, this.textarea.style.top = `${s.clientY}px`, this.textarea.style.width = "1px", this.textarea.style.height = "1px", this.textarea.style.zIndex = "1000", this.textarea.style.opacity = "0", this.textarea.style.pointerEvents = "auto", this.hasSelection()) {
        const r = this.getSelection();
        this.textarea.value = r, this.textarea.select(), this.textarea.setSelectionRange(0, r.length);
      } else
        this.textarea.value = "";
      this.textarea.focus(), setTimeout(() => {
        const r = () => {
          this.textarea.style.pointerEvents = "none", this.textarea.style.zIndex = "-10", this.textarea.style.width = "0", this.textarea.style.height = "0", this.textarea.style.left = "0", this.textarea.style.top = "0", this.textarea.value = "", document.removeEventListener("click", r), document.removeEventListener("contextmenu", r), this.textarea.removeEventListener("blur", r);
        };
        document.addEventListener("click", r, { once: !0 }), document.addEventListener("contextmenu", r, { once: !0 }), this.textarea.addEventListener("blur", r, { once: !0 });
      }, 10);
    }, t.addEventListener("contextmenu", this.boundContextMenuHandler), this.boundClickHandler = (s) => {
      if (this.isSelecting || this.mouseDownTarget && t.contains(this.mouseDownTarget))
        return;
      const r = s.target;
      t.contains(r) || this.hasSelection() && this.clearSelection();
    }, document.addEventListener("click", this.boundClickHandler);
  }
  /**
   * Mark current selection rows as dirty for redraw
   */
  markCurrentSelectionDirty() {
    const t = this.normalizeSelection();
    if (t)
      for (let s = t.startRow; s <= t.endRow; s++)
        this.dirtySelectionRows.add(s);
  }
  /**
   * Update auto-scroll based on mouse Y position within canvas
   */
  updateAutoScroll(t, s) {
    const i = A.AUTO_SCROLL_EDGE_SIZE;
    t < i ? this.startAutoScroll(-1) : t > s - i ? this.startAutoScroll(1) : this.stopAutoScroll();
  }
  /**
   * Start auto-scrolling in the given direction
   */
  startAutoScroll(t) {
    this.autoScrollInterval !== null && this.autoScrollDirection === t || (this.stopAutoScroll(), this.autoScrollDirection = t, this.autoScrollInterval = setInterval(() => {
      if (!this.isSelecting) {
        this.stopAutoScroll();
        return;
      }
      const s = A.AUTO_SCROLL_SPEED * this.autoScrollDirection;
      if (this.terminal.scrollLines(s), this.selectionEnd) {
        const i = this.wasmTerm.getDimensions();
        if (this.autoScrollDirection < 0) {
          const r = this.viewportRowToAbsolute(0);
          r < this.selectionEnd.absoluteRow && (this.selectionEnd = { col: 0, absoluteRow: r });
        } else {
          const r = this.viewportRowToAbsolute(i.rows - 1);
          r > this.selectionEnd.absoluteRow && (this.selectionEnd = { col: i.cols - 1, absoluteRow: r });
        }
      }
      this.requestRender();
    }, A.AUTO_SCROLL_INTERVAL));
  }
  /**
   * Stop auto-scrolling
   */
  stopAutoScroll() {
    this.autoScrollInterval !== null && (clearInterval(this.autoScrollInterval), this.autoScrollInterval = null), this.autoScrollDirection = 0;
  }
  /**
   * Convert pixel coordinates to terminal cell coordinates
   */
  pixelToCell(t, s) {
    const i = this.renderer.getMetrics(), r = Math.floor(t / i.width), o = Math.floor(s / i.height);
    return {
      col: Math.max(0, Math.min(r, this.terminal.cols - 1)),
      row: Math.max(0, Math.min(o, this.terminal.rows - 1))
    };
  }
  /**
   * Normalize selection coordinates (handle backward selection)
   * Returns coordinates in VIEWPORT space for rendering, clamped to visible area
   */
  normalizeSelection() {
    if (!this.selectionStart || !this.selectionEnd)
      return null;
    let { col: t, absoluteRow: s } = this.selectionStart, { col: i, absoluteRow: r } = this.selectionEnd;
    (s > r || s === r && t > i) && ([t, i] = [i, t], [s, r] = [r, s]);
    let o = this.absoluteRowToViewport(s), n = this.absoluteRowToViewport(r);
    const a = this.wasmTerm.getDimensions(), h = a.rows - 1;
    return n < 0 || o > h ? null : (o < 0 && (o = 0, t = 0), n > h && (n = h, i = a.cols - 1), { startCol: t, startRow: o, endCol: i, endRow: n });
  }
  /**
   * Get word boundaries at a cell position
   */
  getWordAtCell(t, s) {
    const i = this.wasmTerm.getLine(s);
    if (!i)
      return null;
    const r = (a) => {
      if (!a || a.codepoint === 0)
        return !1;
      const h = String.fromCodePoint(a.codepoint);
      return /[\w-]/.test(h);
    };
    if (!r(i[t]))
      return null;
    let o = t;
    for (; o > 0 && r(i[o - 1]); )
      o--;
    let n = t;
    for (; n < i.length - 1 && r(i[n + 1]); )
      n++;
    return { startCol: o, endCol: n };
  }
  /**
   * Copy text to clipboard
   *
   * Strategy (modern APIs first):
   * 1. Try ClipboardItem API (works in Safari and modern browsers)
   *    - Safari requires the ClipboardItem to be created synchronously within user gesture
   * 2. Try navigator.clipboard.writeText (modern async API, may fail in Safari)
   * 3. Fall back to execCommand (legacy, for older browsers)
   */
  copyToClipboard(t) {
    if (navigator.clipboard && typeof ClipboardItem < "u")
      try {
        const s = new Blob([t], { type: "text/plain" }), i = new ClipboardItem({
          "text/plain": s
        });
        navigator.clipboard.write([i]).catch((r) => {
          console.warn("ClipboardItem write failed, trying writeText:", r), this.copyWithWriteText(t);
        });
        return;
      } catch {
      }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(t).catch((s) => {
        console.warn("Clipboard writeText failed, trying execCommand:", s), this.copyWithExecCommand(t);
      });
      return;
    }
    this.copyWithExecCommand(t);
  }
  /**
   * Copy using navigator.clipboard.writeText
   */
  copyWithWriteText(t) {
    navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(t).catch((s) => {
      console.warn("Clipboard writeText failed, trying execCommand:", s), this.copyWithExecCommand(t);
    }) : this.copyWithExecCommand(t);
  }
  /**
   * Copy using legacy execCommand (fallback for older browsers)
   */
  copyWithExecCommand(t) {
    const s = document.activeElement;
    try {
      const i = this.textarea;
      i.value = t, i.style.position = "fixed", i.style.left = "-9999px", i.style.top = "0", i.style.width = "1px", i.style.height = "1px", i.style.opacity = "0", i.focus(), i.select(), i.setSelectionRange(0, t.length);
      const r = document.execCommand("copy");
      s && s.focus(), r || console.warn("execCommand copy failed");
    } catch (i) {
      console.warn("execCommand copy threw:", i), s && s.focus();
    }
  }
  /**
   * Request a render update (triggers selection overlay redraw)
   */
  requestRender() {
  }
};
I.AUTO_SCROLL_EDGE_SIZE = 30;
I.AUTO_SCROLL_SPEED = 3;
I.AUTO_SCROLL_INTERVAL = 50;
let st = I;
class ht {
  // 200ms fade animation
  constructor(t = {}) {
    this.unicode = {
      get activeVersion() {
        return "15.1";
      }
    }, this.dataEmitter = new v(), this.resizeEmitter = new v(), this.bellEmitter = new v(), this.selectionChangeEmitter = new v(), this.keyEmitter = new v(), this.titleChangeEmitter = new v(), this.scrollEmitter = new v(), this.renderEmitter = new v(), this.cursorMoveEmitter = new v(), this.onData = this.dataEmitter.event, this.onResize = this.resizeEmitter.event, this.onBell = this.bellEmitter.event, this.onSelectionChange = this.selectionChangeEmitter.event, this.onKey = this.keyEmitter.event, this.onTitleChange = this.titleChangeEmitter.event, this.onScroll = this.scrollEmitter.event, this.onRender = this.renderEmitter.event, this.onCursorMove = this.cursorMoveEmitter.event, this.isOpen = !1, this.isDisposed = !1, this.addons = [], this.currentTitle = "", this.viewportY = 0, this.targetViewportY = 0, this.lastCursorY = 0, this.isDraggingScrollbar = !1, this.scrollbarDragStart = null, this.scrollbarDragStartViewportY = 0, this.scrollbarVisible = !1, this.scrollbarOpacity = 0, this.SCROLLBAR_HIDE_DELAY_MS = 1500, this.SCROLLBAR_FADE_DURATION_MS = 200, this.animateScroll = () => {
      if (!this.wasmTerm || this.scrollAnimationStartTime === void 0)
        return;
      const i = this.options.smoothScrollDuration ?? 100, r = this.targetViewportY - this.viewportY;
      if (Math.abs(r) < 0.01) {
        this.viewportY = this.targetViewportY, this.scrollEmitter.fire(Math.floor(this.viewportY)), this.getScrollbackLength() > 0 && this.showScrollbar(), this.scrollAnimationFrame = void 0, this.scrollAnimationStartTime = void 0, this.scrollAnimationStartY = void 0;
        return;
      }
      const a = 1 - (1 / (i / 1e3 * 60)) ** 2;
      this.viewportY += r * a;
      const h = Math.floor(this.viewportY);
      this.scrollEmitter.fire(h), this.getScrollbackLength() > 0 && this.showScrollbar(), this.scrollAnimationFrame = requestAnimationFrame(this.animateScroll);
    }, this.handleMouseMove = (i) => {
      if (!(!this.canvas || !this.renderer || !this.wasmTerm)) {
        if (this.isDraggingScrollbar) {
          this.processScrollbarDrag(i);
          return;
        }
        if (this.linkDetector) {
          if (this.mouseMoveThrottleTimeout) {
            this.pendingMouseMove = i;
            return;
          }
          this.processMouseMove(i), this.mouseMoveThrottleTimeout = window.setTimeout(() => {
            if (this.mouseMoveThrottleTimeout = void 0, this.pendingMouseMove) {
              const r = this.pendingMouseMove;
              this.pendingMouseMove = void 0, this.processMouseMove(r);
            }
          }, 16);
        }
      }
    }, this.handleMouseLeave = () => {
      var i, r;
      this.renderer && this.wasmTerm && ((this.renderer.hoveredHyperlinkId || 0) > 0 && this.renderer.setHoveredHyperlinkId(0), this.renderer.setHoveredLinkRange(null)), this.currentHoveredLink && ((r = (i = this.currentHoveredLink).hover) == null || r.call(i, !1), this.currentHoveredLink = void 0, this.element && (this.element.style.cursor = "text"));
    }, this.handleClick = async (i) => {
      if (!this.canvas || !this.renderer || !this.linkDetector || !this.wasmTerm)
        return;
      const r = this.canvas.getBoundingClientRect(), o = Math.floor((i.clientX - r.left) / this.renderer.charWidth), a = Math.floor((i.clientY - r.top) / this.renderer.charHeight), h = this.wasmTerm.getScrollbackLength();
      let c;
      const u = this.getViewportY(), m = Math.max(0, Math.floor(u));
      if (m > 0)
        if (a < m)
          c = h - m + a;
        else {
          const f = a - m;
          c = h + f;
        }
      else
        c = h + a;
      const p = await this.linkDetector.getLinkAt(o, c);
      p && (p.activate(i), (i.ctrlKey || i.metaKey) && i.preventDefault());
    }, this.handleWheel = (i) => {
      var o, n, a;
      if (i.preventDefault(), i.stopPropagation(), this.customWheelEventHandler && this.customWheelEventHandler(i))
        return;
      if (((o = this.wasmTerm) == null ? void 0 : o.isAlternateScreen()) ?? !1) {
        const h = i.deltaY > 0 ? "down" : "up", c = Math.min(Math.abs(Math.round(i.deltaY / 33)), 5);
        for (let u = 0; u < c; u++)
          h === "up" ? this.dataEmitter.fire("\x1B[A") : this.dataEmitter.fire("\x1B[B");
      } else {
        let h;
        if (i.deltaMode === WheelEvent.DOM_DELTA_PIXEL) {
          const c = ((a = (n = this.renderer) == null ? void 0 : n.getMetrics()) == null ? void 0 : a.height) ?? 20;
          h = i.deltaY / c;
        } else
          i.deltaMode === WheelEvent.DOM_DELTA_LINE ? h = i.deltaY : i.deltaMode === WheelEvent.DOM_DELTA_PAGE ? h = i.deltaY * this.rows : h = i.deltaY / 33;
        if (h !== 0) {
          const c = this.viewportY - h;
          this.smoothScrollTo(c);
        }
      }
    }, this.handleMouseDown = (i) => {
      if (!this.canvas || !this.renderer || !this.wasmTerm)
        return;
      const r = this.wasmTerm.getScrollbackLength();
      if (r === 0)
        return;
      const o = this.canvas.getBoundingClientRect(), n = i.clientX - o.left, a = i.clientY - o.top, h = o.width, c = o.height, u = 8, m = h - u - 4, p = 4;
      if (n >= m && n <= m + u) {
        i.preventDefault(), i.stopPropagation(), i.stopImmediatePropagation();
        const f = c - p * 2, w = this.rows, g = r + w, E = Math.max(20, w / g * f), R = this.viewportY / r, T = p + (f - E) * (1 - R);
        if (a >= T && a <= T + E)
          this.isDraggingScrollbar = !0, this.scrollbarDragStart = a, this.scrollbarDragStartViewportY = this.viewportY, this.canvas && (this.canvas.style.userSelect = "none", this.canvas.style.webkitUserSelect = "none");
        else {
          const d = 1 - (a - p) / f, _ = Math.round(d * r);
          this.scrollToLine(Math.max(0, Math.min(r, _)));
        }
      }
    }, this.handleMouseUp = () => {
      this.isDraggingScrollbar && (this.isDraggingScrollbar = !1, this.scrollbarDragStart = null, this.canvas && (this.canvas.style.userSelect = "", this.canvas.style.webkitUserSelect = ""), this.scrollbarVisible && this.getScrollbackLength() > 0 && this.showScrollbar());
    }, this.ghostty = t.ghostty ?? at();
    const s = {
      cols: t.cols ?? 80,
      rows: t.rows ?? 24,
      cursorBlink: t.cursorBlink ?? !1,
      cursorStyle: t.cursorStyle ?? "block",
      theme: t.theme ?? {},
      scrollback: t.scrollback ?? 1e4,
      fontSize: t.fontSize ?? 15,
      fontFamily: t.fontFamily ?? "monospace",
      allowTransparency: t.allowTransparency ?? !1,
      convertEol: t.convertEol ?? !1,
      disableStdin: t.disableStdin ?? !1,
      smoothScrollDuration: t.smoothScrollDuration ?? 100
      // Default: 100ms smooth scroll
    };
    this.options = new Proxy(s, {
      set: (i, r, o) => {
        const n = i[r];
        return i[r] = o, this.isOpen && this.handleOptionChange(r, o, n), !0;
      }
    }), this.cols = this.options.cols, this.rows = this.options.rows, this.buffer = new Z(this);
  }
  // ==========================================================================
  // Option Change Handling (for mutable options)
  // ==========================================================================
  /**
   * Handle runtime option changes (called when options are modified after terminal is open)
   * This enables xterm.js compatibility where options can be changed at runtime
   */
  handleOptionChange(t, s, i) {
    if (s !== i)
      switch (t) {
        case "disableStdin":
          break;
        case "cursorBlink":
        case "cursorStyle":
          this.renderer && (this.renderer.setCursorStyle(this.options.cursorStyle), this.renderer.setCursorBlink(this.options.cursorBlink));
          break;
        case "theme":
          this.renderer && console.warn("ghostty-web: theme changes after open() are not yet fully supported");
          break;
        case "fontSize":
          this.renderer && (this.renderer.setFontSize(this.options.fontSize), this.handleFontChange());
          break;
        case "fontFamily":
          this.renderer && (this.renderer.setFontFamily(this.options.fontFamily), this.handleFontChange());
          break;
        case "cols":
        case "rows":
          this.resize(this.options.cols, this.options.rows);
          break;
      }
  }
  /**
   * Handle font changes (fontSize or fontFamily)
   * Updates canvas size to match new font metrics and forces a full re-render
   */
  handleFontChange() {
    if (!this.renderer || !this.wasmTerm || !this.canvas)
      return;
    this.selectionManager && this.selectionManager.clearSelection(), this.renderer.resize(this.cols, this.rows);
    const t = this.renderer.getMetrics();
    this.canvas.width = t.width * this.cols, this.canvas.height = t.height * this.rows, this.canvas.style.width = `${t.width * this.cols}px`, this.canvas.style.height = `${t.height * this.rows}px`, this.renderer.render(this.wasmTerm, !0, this.viewportY, this);
  }
  /**
   * Parse a CSS color string to 0xRRGGBB format.
   * Returns 0 if the color is undefined or invalid.
   */
  parseColorToHex(t) {
    if (!t)
      return 0;
    if (t.startsWith("#")) {
      let i = t.slice(1);
      i.length === 3 && (i = i[0] + i[0] + i[1] + i[1] + i[2] + i[2]);
      const r = Number.parseInt(i, 16);
      return Number.isNaN(r) ? 0 : r;
    }
    const s = t.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
    if (s) {
      const i = Number.parseInt(s[1], 10), r = Number.parseInt(s[2], 10), o = Number.parseInt(s[3], 10);
      return i << 16 | r << 8 | o;
    }
    return 0;
  }
  /**
   * Convert terminal options to WASM terminal config.
   */
  buildWasmConfig() {
    const t = this.options.theme, s = this.options.scrollback;
    if (!t && s === 1e4)
      return;
    const i = [
      this.parseColorToHex(t == null ? void 0 : t.black),
      this.parseColorToHex(t == null ? void 0 : t.red),
      this.parseColorToHex(t == null ? void 0 : t.green),
      this.parseColorToHex(t == null ? void 0 : t.yellow),
      this.parseColorToHex(t == null ? void 0 : t.blue),
      this.parseColorToHex(t == null ? void 0 : t.magenta),
      this.parseColorToHex(t == null ? void 0 : t.cyan),
      this.parseColorToHex(t == null ? void 0 : t.white),
      this.parseColorToHex(t == null ? void 0 : t.brightBlack),
      this.parseColorToHex(t == null ? void 0 : t.brightRed),
      this.parseColorToHex(t == null ? void 0 : t.brightGreen),
      this.parseColorToHex(t == null ? void 0 : t.brightYellow),
      this.parseColorToHex(t == null ? void 0 : t.brightBlue),
      this.parseColorToHex(t == null ? void 0 : t.brightMagenta),
      this.parseColorToHex(t == null ? void 0 : t.brightCyan),
      this.parseColorToHex(t == null ? void 0 : t.brightWhite)
    ];
    return {
      scrollbackLimit: s,
      fgColor: this.parseColorToHex(t == null ? void 0 : t.foreground),
      bgColor: this.parseColorToHex(t == null ? void 0 : t.background),
      cursorColor: this.parseColorToHex(t == null ? void 0 : t.cursor),
      palette: i
    };
  }
  // ==========================================================================
  // Lifecycle Methods
  // ==========================================================================
  /**
   * Open terminal in a parent element
   *
   * Initializes all components and starts rendering.
   * Requires a pre-loaded Ghostty instance passed to the constructor.
   */
  open(t) {
    if (this.isOpen)
      throw new Error("Terminal is already open");
    if (this.isDisposed)
      throw new Error("Terminal has been disposed");
    this.element = t, this.isOpen = !0;
    try {
      t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"), t.setAttribute("contenteditable", "true"), t.addEventListener("beforeinput", (h) => {
        h.target === t && h.preventDefault();
      }), t.setAttribute("role", "textbox"), t.setAttribute("aria-label", "Terminal input"), t.setAttribute("aria-multiline", "true");
      const s = this.buildWasmConfig();
      this.wasmTerm = this.ghostty.createTerminal(this.cols, this.rows, s), this.canvas = document.createElement("canvas"), this.canvas.style.display = "block", t.appendChild(this.canvas), this.textarea = document.createElement("textarea"), this.textarea.setAttribute("autocorrect", "off"), this.textarea.setAttribute("autocapitalize", "off"), this.textarea.setAttribute("spellcheck", "false"), this.textarea.setAttribute("tabindex", "0"), this.textarea.setAttribute("aria-label", "Terminal input"), this.textarea.style.position = "absolute", this.textarea.style.left = "0", this.textarea.style.top = "0", this.textarea.style.width = "1px", this.textarea.style.height = "1px", this.textarea.style.padding = "0", this.textarea.style.border = "none", this.textarea.style.margin = "0", this.textarea.style.opacity = "0", this.textarea.style.clipPath = "inset(50%)", this.textarea.style.overflow = "hidden", this.textarea.style.whiteSpace = "nowrap", this.textarea.style.resize = "none", t.appendChild(this.textarea);
      const i = this.textarea;
      this.canvas.addEventListener("mousedown", (h) => {
        h.preventDefault(), i.focus();
      }), this.canvas.addEventListener("touchend", (h) => {
        h.preventDefault(), i.focus();
      }), this.renderer = new et(this.canvas, {
        fontSize: this.options.fontSize,
        fontFamily: this.options.fontFamily,
        cursorStyle: this.options.cursorStyle,
        cursorBlink: this.options.cursorBlink,
        theme: this.options.theme
      }), this.renderer.resize(this.cols, this.rows);
      const r = this.canvas, o = this.renderer, n = this.wasmTerm, a = {
        hasMouseTracking: () => (n == null ? void 0 : n.hasMouseTracking()) ?? !1,
        hasSgrMouseMode: () => (n == null ? void 0 : n.getMode(1006, !1)) ?? !0,
        // SGR extended mode
        getCellDimensions: () => ({
          width: o.charWidth,
          height: o.charHeight
        }),
        getCanvasOffset: () => {
          const h = r.getBoundingClientRect();
          return { left: h.left, top: h.top };
        }
      };
      this.inputHandler = new J(
        this.ghostty,
        t,
        (h) => {
          this.options.disableStdin || this.dataEmitter.fire(h);
        },
        () => {
          this.bellEmitter.fire();
        },
        (h) => {
          this.keyEmitter.fire(h);
        },
        this.customKeyEventHandler,
        (h) => {
          var c;
          return ((c = this.wasmTerm) == null ? void 0 : c.getMode(h, !1)) ?? !1;
        },
        () => this.copySelection(),
        this.textarea,
        a
      ), this.selectionManager = new st(
        this,
        this.renderer,
        this.wasmTerm,
        this.textarea
      ), this.renderer.setSelectionManager(this.selectionManager), this.selectionManager.onSelectionChange(() => {
        this.selectionChangeEmitter.fire();
      }), this.linkDetector = new j(this), this.linkDetector.registerProvider(new K(this)), this.linkDetector.registerProvider(new tt(this)), t.addEventListener("mousedown", this.handleMouseDown, { capture: !0 }), t.addEventListener("mousemove", this.handleMouseMove), t.addEventListener("mouseleave", this.handleMouseLeave), t.addEventListener("click", this.handleClick), document.addEventListener("mouseup", this.handleMouseUp), t.addEventListener("wheel", this.handleWheel, { passive: !1, capture: !0 }), this.renderer.render(this.wasmTerm, !0, this.viewportY, this, this.scrollbarOpacity), this.startRenderLoop(), this.focus();
    } catch (s) {
      throw this.isOpen = !1, this.cleanupComponents(), new Error(`Failed to open terminal: ${s}`);
    }
  }
  /**
   * Write data to terminal
   */
  write(t, s) {
    this.assertOpen(), this.options.convertEol && typeof t == "string" && (t = t.replace(/\n/g, `\r
`)), this.writeInternal(t, s);
  }
  /**
   * Internal write implementation (extracted from write())
   */
  writeInternal(t, s) {
    var i;
    this.wasmTerm.write(t), this.processTerminalResponses(), typeof t == "string" && t.includes("\x07") ? this.bellEmitter.fire() : t instanceof Uint8Array && t.includes(7) && this.bellEmitter.fire(), (i = this.linkDetector) == null || i.invalidateCache(), this.viewportY !== 0 && this.scrollToBottom(), typeof t == "string" && t.includes("\x1B]") && this.checkForTitleChange(t), s && requestAnimationFrame(s);
  }
  /**
   * Write data with newline
   */
  writeln(t, s) {
    if (typeof t == "string")
      this.write(t + `\r
`, s);
    else {
      const i = new Uint8Array(t.length + 2);
      i.set(t), i[t.length] = 13, i[t.length + 1] = 10, this.write(i, s);
    }
  }
  /**
   * Paste text into terminal (triggers bracketed paste if supported)
   */
  paste(t) {
    this.assertOpen(), !this.options.disableStdin && (this.wasmTerm.hasBracketedPaste() ? this.dataEmitter.fire("\x1B[200~" + t + "\x1B[201~") : this.dataEmitter.fire(t));
  }
  /**
   * Input data into terminal (as if typed by user)
   *
   * @param data - Data to input
   * @param wasUserInput - If true, triggers onData event (default: false for compat with some apps)
   */
  input(t, s = !1) {
    this.assertOpen(), !this.options.disableStdin && (s ? this.dataEmitter.fire(t) : this.write(t));
  }
  /**
   * Resize terminal
   */
  resize(t, s) {
    if (this.assertOpen(), t === this.cols && s === this.rows)
      return;
    this.cols = t, this.rows = s, this.wasmTerm.resize(t, s), this.renderer.resize(t, s);
    const i = this.renderer.getMetrics();
    this.canvas.width = i.width * t, this.canvas.height = i.height * s, this.canvas.style.width = `${i.width * t}px`, this.canvas.style.height = `${i.height * s}px`, this.resizeEmitter.fire({ cols: t, rows: s }), this.renderer.render(this.wasmTerm, !0, this.viewportY, this);
  }
  /**
   * Clear terminal screen
   */
  clear() {
    this.assertOpen(), this.wasmTerm.write("\x1B[2J\x1B[H");
  }
  /**
   * Reset terminal state
   */
  reset() {
    this.assertOpen(), this.wasmTerm && this.wasmTerm.free();
    const t = this.buildWasmConfig();
    this.wasmTerm = this.ghostty.createTerminal(this.cols, this.rows, t), this.renderer.clear(), this.currentTitle = "";
  }
  /**
   * Focus terminal input
   */
  focus() {
    this.isOpen && this.element && (this.element.focus(), setTimeout(() => {
      var t;
      (t = this.element) == null || t.focus();
    }, 0));
  }
  /**
   * Blur terminal (remove focus)
   */
  blur() {
    this.isOpen && this.element && this.element.blur();
  }
  /**
   * Load an addon
   */
  loadAddon(t) {
    t.activate(this), this.addons.push(t);
  }
  // ==========================================================================
  // Selection API (xterm.js compatible)
  // ==========================================================================
  /**
   * Get the selected text as a string
   */
  getSelection() {
    var t;
    return ((t = this.selectionManager) == null ? void 0 : t.getSelection()) || "";
  }
  /**
   * Check if there's an active selection
   */
  hasSelection() {
    var t;
    return ((t = this.selectionManager) == null ? void 0 : t.hasSelection()) || !1;
  }
  /**
   * Clear the current selection
   */
  clearSelection() {
    var t;
    (t = this.selectionManager) == null || t.clearSelection();
  }
  /**
   * Copy the current selection to clipboard
   * @returns true if there was text to copy, false otherwise
   */
  copySelection() {
    var t;
    return ((t = this.selectionManager) == null ? void 0 : t.copySelection()) || !1;
  }
  /**
   * Select all text in the terminal
   */
  selectAll() {
    var t;
    (t = this.selectionManager) == null || t.selectAll();
  }
  /**
   * Select text at specific column and row with length
   */
  select(t, s, i) {
    var r;
    (r = this.selectionManager) == null || r.select(t, s, i);
  }
  /**
   * Select entire lines from start to end
   */
  selectLines(t, s) {
    var i;
    (i = this.selectionManager) == null || i.selectLines(t, s);
  }
  /**
   * Get selection position as buffer range
   */
  /**
   * Get the current viewport Y position.
   *
   * This is the number of lines scrolled back from the bottom of the
   * scrollback buffer. It may be fractional during smooth scrolling.
   */
  getViewportY() {
    return this.viewportY;
  }
  getSelectionPosition() {
    var t;
    return (t = this.selectionManager) == null ? void 0 : t.getSelectionPosition();
  }
  // ==========================================================================
  // Phase 1: Custom Event Handlers
  // ==========================================================================
  /**
   * Attach a custom keyboard event handler
   * Returns true to prevent default handling
   */
  attachCustomKeyEventHandler(t) {
    this.customKeyEventHandler = t, this.inputHandler && this.inputHandler.setCustomKeyEventHandler(t);
  }
  /**
   * Attach a custom wheel event handler (Phase 2)
   * Returns true to prevent default handling
   */
  attachCustomWheelEventHandler(t) {
    this.customWheelEventHandler = t;
  }
  // ==========================================================================
  // Link Detection Methods
  // ==========================================================================
  /**
   * Register a custom link provider
   * Multiple providers can be registered to detect different types of links
   *
   * @example
   * ```typescript
   * term.registerLinkProvider({
   *   provideLinks(y, callback) {
   *     // Detect URLs, file paths, etc.
   *     callback(detectedLinks);
   *   }
   * });
   * ```
   */
  registerLinkProvider(t) {
    if (!this.linkDetector)
      throw new Error("Terminal must be opened before registering link providers");
    this.linkDetector.registerProvider(t);
  }
  // ==========================================================================
  // Phase 2: Scrolling Methods
  // ==========================================================================
  /**
   * Scroll viewport by a number of lines
   * @param amount Number of lines to scroll (positive = down, negative = up)
   */
  scrollLines(t) {
    if (!this.wasmTerm)
      throw new Error("Terminal not open");
    const s = this.getScrollbackLength(), r = Math.max(0, Math.min(s, this.viewportY - t));
    r !== this.viewportY && (this.viewportY = r, this.scrollEmitter.fire(this.viewportY), s > 0 && this.showScrollbar());
  }
  /**
   * Scroll viewport by a number of pages
   * @param amount Number of pages to scroll (positive = down, negative = up)
   */
  scrollPages(t) {
    this.scrollLines(t * this.rows);
  }
  /**
   * Scroll viewport to the top of the scrollback buffer
   */
  scrollToTop() {
    const t = this.getScrollbackLength();
    t > 0 && this.viewportY !== t && (this.viewportY = t, this.scrollEmitter.fire(this.viewportY), this.showScrollbar());
  }
  /**
   * Scroll viewport to the bottom (current output)
   */
  scrollToBottom() {
    this.viewportY !== 0 && (this.viewportY = 0, this.scrollEmitter.fire(this.viewportY), this.getScrollbackLength() > 0 && this.showScrollbar());
  }
  /**
   * Scroll viewport to a specific line in the buffer
   * @param line Line number (0 = top of scrollback, scrollbackLength = bottom)
   */
  scrollToLine(t) {
    const s = this.getScrollbackLength(), i = Math.max(0, Math.min(s, t));
    i !== this.viewportY && (this.viewportY = i, this.scrollEmitter.fire(this.viewportY), s > 0 && this.showScrollbar());
  }
  /**
   * Smoothly scroll to a target viewport position
   * @param targetY Target viewport Y position (in lines, can be fractional)
   */
  smoothScrollTo(t) {
    if (!this.wasmTerm)
      return;
    const s = this.getScrollbackLength(), r = Math.max(0, Math.min(s, t));
    if ((this.options.smoothScrollDuration ?? 100) === 0) {
      this.viewportY = r, this.targetViewportY = r, this.scrollEmitter.fire(Math.floor(this.viewportY)), s > 0 && this.showScrollbar();
      return;
    }
    this.targetViewportY = r, !this.scrollAnimationFrame && (this.scrollAnimationStartTime = Date.now(), this.scrollAnimationStartY = this.viewportY, this.animateScroll());
  }
  // ==========================================================================
  // Lifecycle
  // ==========================================================================
  /**
   * Dispose terminal and clean up resources
   */
  dispose() {
    if (!this.isDisposed) {
      this.isDisposed = !0, this.isOpen = !1, this.animationFrameId && (cancelAnimationFrame(this.animationFrameId), this.animationFrameId = void 0), this.scrollAnimationFrame && (cancelAnimationFrame(this.scrollAnimationFrame), this.scrollAnimationFrame = void 0), this.mouseMoveThrottleTimeout && (clearTimeout(this.mouseMoveThrottleTimeout), this.mouseMoveThrottleTimeout = void 0), this.pendingMouseMove = void 0;
      for (const t of this.addons)
        t.dispose();
      this.addons = [], this.cleanupComponents(), this.dataEmitter.dispose(), this.resizeEmitter.dispose(), this.bellEmitter.dispose(), this.selectionChangeEmitter.dispose(), this.keyEmitter.dispose(), this.titleChangeEmitter.dispose(), this.scrollEmitter.dispose(), this.renderEmitter.dispose(), this.cursorMoveEmitter.dispose();
    }
  }
  // ==========================================================================
  // Private Methods
  // ==========================================================================
  /**
   * Start the render loop
   */
  startRenderLoop() {
    const t = () => {
      if (!this.isDisposed && this.isOpen) {
        this.renderer.render(this.wasmTerm, !1, this.viewportY, this, this.scrollbarOpacity);
        const s = this.wasmTerm.getCursor();
        s.y !== this.lastCursorY && (this.lastCursorY = s.y, this.cursorMoveEmitter.fire()), this.animationFrameId = requestAnimationFrame(t);
      }
    };
    t();
  }
  /**
   * Get a line from native WASM scrollback buffer
   * Implements IScrollbackProvider
   */
  getScrollbackLine(t) {
    return this.wasmTerm ? this.wasmTerm.getScrollbackLine(t) : null;
  }
  /**
   * Get scrollback length from native WASM
   * Implements IScrollbackProvider
   */
  getScrollbackLength() {
    return this.wasmTerm ? this.wasmTerm.getScrollbackLength() : 0;
  }
  /**
   * Clean up components (called on dispose or error)
   */
  cleanupComponents() {
    this.selectionManager && (this.selectionManager.dispose(), this.selectionManager = void 0), this.inputHandler && (this.inputHandler.dispose(), this.inputHandler = void 0), this.renderer && (this.renderer.dispose(), this.renderer = void 0), this.canvas && this.canvas.parentNode && (this.canvas.parentNode.removeChild(this.canvas), this.canvas = void 0), this.textarea && this.textarea.parentNode && (this.textarea.parentNode.removeChild(this.textarea), this.textarea = void 0), this.element && (this.element.removeEventListener("wheel", this.handleWheel), this.element.removeEventListener("mousedown", this.handleMouseDown, { capture: !0 }), this.element.removeEventListener("mousemove", this.handleMouseMove), this.element.removeEventListener("mouseleave", this.handleMouseLeave), this.element.removeEventListener("click", this.handleClick), this.element.removeAttribute("contenteditable"), this.element.removeAttribute("role"), this.element.removeAttribute("aria-label"), this.element.removeAttribute("aria-multiline")), this.isOpen && typeof document < "u" && document.removeEventListener("mouseup", this.handleMouseUp), this.scrollbarHideTimeout && (window.clearTimeout(this.scrollbarHideTimeout), this.scrollbarHideTimeout = void 0), this.linkDetector && (this.linkDetector.dispose(), this.linkDetector = void 0), this.wasmTerm && (this.wasmTerm.free(), this.wasmTerm = void 0), this.ghostty = void 0, this.element = void 0, this.textarea = void 0;
  }
  /**
   * Assert terminal is open (throw if not)
   */
  assertOpen() {
    if (this.isDisposed)
      throw new Error("Terminal has been disposed");
    if (!this.isOpen)
      throw new Error("Terminal must be opened before use. Call terminal.open(parent) first.");
  }
  /**
   * Process mouse move for link detection (internal, called by throttled handler)
   */
  processMouseMove(t) {
    if (!this.canvas || !this.renderer || !this.linkDetector || !this.wasmTerm)
      return;
    const s = this.canvas.getBoundingClientRect(), i = Math.floor((t.clientX - s.left) / this.renderer.charWidth), o = Math.floor((t.clientY - s.top) / this.renderer.charHeight);
    let n = 0, a = null;
    const h = this.getViewportY(), c = Math.max(0, Math.floor(h));
    if (c > 0) {
      const g = this.wasmTerm.getScrollbackLength();
      if (o < c) {
        const E = g - c + o;
        a = this.wasmTerm.getScrollbackLine(E);
      } else {
        const E = o - c;
        a = this.wasmTerm.getLine(E);
      }
    } else
      a = this.wasmTerm.getLine(o);
    a && i >= 0 && i < a.length && (n = a[i].hyperlink_id);
    const u = this.renderer.hoveredHyperlinkId || 0;
    n !== u && this.renderer.setHoveredHyperlinkId(n);
    const m = this.wasmTerm.getScrollbackLength();
    let p;
    const f = this.getViewportY(), w = Math.max(0, Math.floor(f));
    if (w > 0)
      if (o < w)
        p = m - w + o;
      else {
        const g = o - w;
        p = m + g;
      }
    else
      p = m + o;
    this.linkDetector.getLinkAt(i, p).then((g) => {
      var E, R, T, x;
      if (g !== this.currentHoveredLink && ((R = (E = this.currentHoveredLink) == null ? void 0 : E.hover) == null || R.call(E, !1), this.currentHoveredLink = g, (T = g == null ? void 0 : g.hover) == null || T.call(g, !0), this.element && (this.element.style.cursor = g ? "pointer" : "text"), this.renderer))
        if (g) {
          const d = ((x = this.wasmTerm) == null ? void 0 : x.getScrollbackLength()) || 0, _ = this.getViewportY(), S = Math.max(0, Math.floor(_)), H = g.range.start.y - d + S, y = g.range.end.y - d + S;
          H < this.rows && y >= 0 ? this.renderer.setHoveredLinkRange({
            startX: g.range.start.x,
            startY: Math.max(0, H),
            endX: g.range.end.x,
            endY: Math.min(this.rows - 1, y)
          }) : this.renderer.setHoveredLinkRange(null);
        } else
          this.renderer.setHoveredLinkRange(null);
    }).catch((g) => {
      console.warn("Link detection error:", g);
    });
  }
  /**
   * Process scrollbar drag movement
   */
  processScrollbarDrag(t) {
    if (!this.canvas || !this.renderer || !this.wasmTerm || this.scrollbarDragStart === null)
      return;
    const s = this.wasmTerm.getScrollbackLength();
    if (s === 0)
      return;
    const i = this.canvas.getBoundingClientRect(), o = t.clientY - i.top - this.scrollbarDragStart, h = i.height - 4 * 2, c = this.rows, u = s + c, m = Math.max(20, c / u * h), p = -o / (h - m), f = Math.round(p * s), w = this.scrollbarDragStartViewportY + f;
    this.scrollToLine(Math.max(0, Math.min(s, w)));
  }
  /**
   * Show scrollbar with fade-in and schedule auto-hide
   */
  showScrollbar() {
    this.scrollbarHideTimeout && (window.clearTimeout(this.scrollbarHideTimeout), this.scrollbarHideTimeout = void 0), this.scrollbarVisible ? this.scrollbarOpacity = 1 : (this.scrollbarVisible = !0, this.scrollbarOpacity = 0, this.fadeInScrollbar()), this.isDraggingScrollbar || (this.scrollbarHideTimeout = window.setTimeout(() => {
      this.hideScrollbar();
    }, this.SCROLLBAR_HIDE_DELAY_MS));
  }
  /**
   * Hide scrollbar with fade-out
   */
  hideScrollbar() {
    this.scrollbarHideTimeout && (window.clearTimeout(this.scrollbarHideTimeout), this.scrollbarHideTimeout = void 0), this.scrollbarVisible && this.fadeOutScrollbar();
  }
  /**
   * Fade in scrollbar
   */
  fadeInScrollbar() {
    const t = Date.now(), s = () => {
      const i = Date.now() - t, r = Math.min(i / this.SCROLLBAR_FADE_DURATION_MS, 1);
      this.scrollbarOpacity = r, this.renderer && this.wasmTerm && this.renderer.render(this.wasmTerm, !1, this.viewportY, this, this.scrollbarOpacity), r < 1 && requestAnimationFrame(s);
    };
    s();
  }
  /**
   * Fade out scrollbar
   */
  fadeOutScrollbar() {
    const t = Date.now(), s = this.scrollbarOpacity, i = () => {
      const r = Date.now() - t, o = Math.min(r / this.SCROLLBAR_FADE_DURATION_MS, 1);
      this.scrollbarOpacity = s * (1 - o), this.renderer && this.wasmTerm && this.renderer.render(this.wasmTerm, !1, this.viewportY, this, this.scrollbarOpacity), o < 1 ? requestAnimationFrame(i) : (this.scrollbarVisible = !1, this.scrollbarOpacity = 0, this.renderer && this.wasmTerm && this.renderer.render(this.wasmTerm, !1, this.viewportY, this, 0));
    };
    i();
  }
  /**
   * Process any pending terminal responses and emit them via onData.
   *
   * This handles escape sequences that require the terminal to send a response
   * back to the PTY, such as:
   * - DSR 6 (cursor position): Shell sends \x1b[6n, terminal responds with \x1b[row;colR
   * - DSR 5 (operating status): Shell sends \x1b[5n, terminal responds with \x1b[0n
   *
   * Without this, shells like nushell that rely on cursor position queries
   * will hang waiting for a response that never comes.
   *
   * Note: We loop to read all pending responses, not just one. This is important
   * when multiple queries are processed in a single write() call (e.g., when
   * buffered data is written all at once during terminal initialization).
   */
  processTerminalResponses() {
    if (this.wasmTerm)
      for (; ; ) {
        const t = this.wasmTerm.readResponse();
        if (t === null)
          break;
        this.dataEmitter.fire(t);
      }
  }
  /**
   * Check for title changes in written data (OSC sequences)
   * Simplified implementation - looks for OSC 0, 1, 2
   */
  checkForTitleChange(t) {
    const s = /\x1b\]([012]);([^\x07\x1b]*?)(?:\x07|\x1b\\)/g;
    let i = null;
    for (; (i = s.exec(t)) !== null; ) {
      const r = i[1], o = i[2];
      (r === "0" || r === "2") && o !== this.currentTitle && (this.currentTitle = o, this.titleChangeEmitter.fire(o));
    }
  }
  // ============================================================================
  // Terminal Modes
  // ============================================================================
  /**
   * Query terminal mode state
   *
   * @param mode Mode number (e.g., 2004 for bracketed paste)
   * @param isAnsi True for ANSI modes, false for DEC modes (default: false)
   * @returns true if mode is enabled
   */
  getMode(t, s = !1) {
    return this.assertOpen(), this.wasmTerm.getMode(t, s);
  }
  /**
   * Check if bracketed paste mode is enabled
   */
  hasBracketedPaste() {
    return this.assertOpen(), this.wasmTerm.hasBracketedPaste();
  }
  /**
   * Check if focus event reporting is enabled
   */
  hasFocusEvents() {
    return this.assertOpen(), this.wasmTerm.hasFocusEvents();
  }
  /**
   * Check if mouse tracking is enabled
   */
  hasMouseTracking() {
    return this.assertOpen(), this.wasmTerm.hasMouseTracking();
  }
}
const it = 2, rt = 1, ot = 15, nt = 100;
class lt {
  constructor() {
    this._isResizing = !1;
  }
  /**
   * Activate the addon (called by Terminal.loadAddon)
   */
  activate(t) {
    this._terminal = t;
  }
  /**
   * Dispose the addon and clean up resources
   */
  dispose() {
    this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = void 0), this._resizeDebounceTimer && (clearTimeout(this._resizeDebounceTimer), this._resizeDebounceTimer = void 0), this._lastCols = void 0, this._lastRows = void 0, this._terminal = void 0;
  }
  /**
   * Fit the terminal to its container
   *
   * Calculates optimal dimensions and resizes the terminal.
   * Does nothing if dimensions cannot be calculated or haven't changed.
   */
  fit() {
    if (this._isResizing)
      return;
    const t = this.proposeDimensions();
    if (!t || !this._terminal)
      return;
    const s = this._terminal, i = s.cols, r = s.rows;
    if (!(t.cols === this._lastCols && t.rows === this._lastRows || t.cols === i && t.rows === r)) {
      this._lastCols = t.cols, this._lastRows = t.rows, this._isResizing = !0;
      try {
        s.resize && typeof s.resize == "function" && s.resize(t.cols, t.rows);
      } finally {
        setTimeout(() => {
          this._isResizing = !1;
        }, 50);
      }
    }
  }
  /**
   * Propose dimensions to fit the terminal to its container
   *
   * Calculates cols and rows based on:
   * - Terminal container element dimensions (clientWidth/Height)
   * - Terminal element padding
   * - Font metrics (character cell size)
   * - Scrollbar width reservation
   *
   * @returns Proposed dimensions or undefined if cannot calculate
   */
  proposeDimensions() {
    var E;
    if (!((E = this._terminal) != null && E.element))
      return;
    const s = this._terminal.renderer;
    if (!s || typeof s.getMetrics != "function")
      return;
    const i = s.getMetrics();
    if (!i || i.width === 0 || i.height === 0)
      return;
    const r = this._terminal.element;
    if (typeof r.clientWidth > "u")
      return;
    const o = window.getComputedStyle(r), n = Number.parseInt(o.getPropertyValue("padding-top")) || 0, a = Number.parseInt(o.getPropertyValue("padding-bottom")) || 0, h = Number.parseInt(o.getPropertyValue("padding-left")) || 0, c = Number.parseInt(o.getPropertyValue("padding-right")) || 0, u = r.clientWidth, m = r.clientHeight;
    if (u === 0 || m === 0)
      return;
    const p = u - h - c - ot, f = m - n - a, w = Math.max(it, Math.floor(p / i.width)), g = Math.max(rt, Math.floor(f / i.height));
    return { cols: w, rows: g };
  }
  /**
   * Observe the terminal's container for resize events
   *
   * Sets up a ResizeObserver to automatically call fit() when the
   * container size changes. Resize events are debounced to avoid
   * excessive calls during window drag operations.
   *
   * Call dispose() to stop observing.
   */
  observeResize() {
    var t;
    (t = this._terminal) != null && t.element && (this._resizeObserver || (this._resizeObserver = new ResizeObserver((s) => {
      this._isResizing || !s[0] || (this._resizeDebounceTimer && clearTimeout(this._resizeDebounceTimer), this._resizeDebounceTimer = setTimeout(() => {
        this.fit();
      }, nt));
    }), this._resizeObserver.observe(this._terminal.element)));
  }
}
let D = null;
async function ct() {
  D || (D = await M.load());
}
function at() {
  if (!D)
    throw new Error(
      `ghostty-web not initialized. Call init() before creating Terminal instances.
Example:
  import { init, Terminal } from "ghostty-web";
  await init();
  const term = new Terminal();

For tests, pass a Ghostty instance directly:
  import { Ghostty, Terminal } from "ghostty-web";
  const ghostty = await Ghostty.load();
  const term = new Terminal({ ghostty });`
    );
  return D;
}
export {
  et as CanvasRenderer,
  b as CellFlags,
  v as EventEmitter,
  lt as FitAddon,
  M as Ghostty,
  $ as GhosttyTerminal,
  J as InputHandler,
  X as KeyEncoder,
  N as KeyEncoderOption,
  j as LinkDetector,
  K as OSC8LinkProvider,
  st as SelectionManager,
  ht as Terminal,
  tt as UrlRegexProvider,
  at as getGhostty,
  ct as init
};
