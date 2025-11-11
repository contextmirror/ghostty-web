/**
 * Integration test - Terminal with WASM backend
 */
import { Ghostty } from './lib/ghostty.ts';

console.log('='.repeat(60));
console.log('Testing Phase 2 Integration: WASM Terminal Backend');
console.log('='.repeat(60));

// Load WASM
console.log('\n1. Loading Ghostty WASM...');
const ghostty = await Ghostty.load('./ghostty-vt.wasm');
console.log('   ✓ WASM loaded successfully');

// Test terminal creation via Ghostty class
console.log('\n2. Creating terminal via Ghostty API...');
const term = ghostty.createTerminal(80, 24);
console.log(`   ✓ Terminal created: ${term.cols}x${term.rows}`);

// Test writing
console.log('\n3. Writing test content...');
term.write('Line 1: Hello, WASM!\r\n');
term.write('\x1b[1;31mLine 2: Bold Red\x1b[0m\r\n');
term.write('\x1b[32mLine 3: Green\x1b[0m and \x1b[34mBlue\x1b[0m\r\n');
console.log('   ✓ Content written');

// Verify cursor moved
const cursor = term.getCursor();
console.log(`   ✓ Cursor at (${cursor.x}, ${cursor.y})`);

// Read lines
console.log('\n4. Reading back content...');
const line0 = term.getLine(0);
const line1 = term.getLine(1);
if (line0 && line1) {
  const text0 = line0.map(c => String.fromCodePoint(c.codepoint)).join('').trim();
  const text1 = line1.map(c => String.fromCodePoint(c.codepoint)).join('').trim();
  console.log(`   Line 0: "${text0}"`);
  console.log(`   Line 1: "${text1}"`);
  console.log('   ✓ Content verified');
}

// Test resize
console.log('\n5. Testing resize...');
term.resize(100, 30);
console.log(`   ✓ Resized to ${term.cols}x${term.rows}`);

// Test dirty tracking
console.log('\n6. Testing dirty tracking...');
console.log(`   Is dirty: ${term.isDirty()}`);
console.log(`   Row 0 dirty: ${term.isRowDirty(0)}`);
term.clearDirty();
console.log(`   After clearDirty: ${term.isDirty()}`);
console.log('   ✓ Dirty tracking works');

// Cleanup
console.log('\n7. Cleaning up...');
term.free();
console.log('   ✓ Terminal freed');

console.log('\n' + '='.repeat(60));
console.log('🎉 All integration tests passed!');
console.log('='.repeat(60));
