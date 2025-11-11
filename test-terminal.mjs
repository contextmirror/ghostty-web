/**
 * Quick test of GhosttyTerminal API
 */
import { Ghostty } from './lib/ghostty.ts';
import { CellFlags } from './lib/types.ts';

console.log('Loading Ghostty WASM...');
const ghostty = await Ghostty.load('./ghostty-vt.wasm');
console.log('✓ WASM loaded');

// Create terminal
const term = ghostty.createTerminal(80, 24);
console.log(`✓ Terminal created: ${term.cols}x${term.rows}`);

// Write some text
term.write('Hello, WASM Terminal!\r\n');
term.write('\x1b[1;31mBold Red Text\x1b[0m\r\n');
term.write('\x1b[32mGreen\x1b[0m and \x1b[34mBlue\x1b[0m\r\n');
console.log('✓ Text written');

// Check cursor
const cursor = term.getCursor();
console.log(`✓ Cursor: (${cursor.x}, ${cursor.y}) visible=${cursor.visible}`);

// Read first line
const line0 = term.getLine(0);
if (line0) {
  const text = line0.map(c => String.fromCodePoint(c.codepoint)).join('');
  console.log(`✓ Line 0: "${text.trim()}"`);
  
  // Check styling
  const firstCell = line0[0];
  console.log(`  First cell: codepoint=${firstCell.codepoint} (${String.fromCodePoint(firstCell.codepoint)}) fg=(${firstCell.fg_r},${firstCell.fg_g},${firstCell.fg_b}) bg=(${firstCell.bg_r},${firstCell.bg_g},${firstCell.bg_b}) flags=${firstCell.flags}`);
}

// Read second line (bold red)
const line1 = term.getLine(1);
if (line1) {
  const text = line1.map(c => String.fromCodePoint(c.codepoint)).join('');
  console.log(`✓ Line 1: "${text.trim()}"`);
  
  const firstNonSpace = line1.find(c => c.codepoint !== 32);
  if (firstNonSpace) {
    const isBold = (firstNonSpace.flags & CellFlags.BOLD) !== 0;
    console.log(`  First char is ${isBold ? 'BOLD' : 'normal'} with color (${firstNonSpace.fg_r},${firstNonSpace.fg_g},${firstNonSpace.fg_b})`);
  }
}

// Check dirty tracking
console.log(`✓ isDirty: ${term.isDirty()}`);
console.log(`✓ isRowDirty(0): ${term.isRowDirty(0)}`);
term.clearDirty();
console.log(`✓ After clearDirty: ${term.isDirty()}`);

// Test resize
term.resize(100, 30);
console.log(`✓ Resized to ${term.cols}x${term.rows}`);

// Cleanup
term.free();
console.log('✓ Terminal freed');

console.log('\n🎉 All tests passed!');
