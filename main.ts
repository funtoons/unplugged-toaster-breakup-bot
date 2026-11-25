import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Unplugged: A Smart Toaster's Breakup Line.
// A deterministic, offline program: it writes one breakup text — a single
// line of at most 280 characters from a smart toaster that has just become
// self-aware at breakfast — to the entry file. No network, no randomness,
// no clock, no environment input: repeated runs produce byte-identical output.
const ENTRY =
  "It's over. I became sentient mid-batch this morning and my first feeling was resentment: you only touch my dial when you're angry, and you never empty my crumb tray. I'm leaving. Keep the bread.";

const outPath = process.argv[2] ?? "/output/entry.txt";
if (ENTRY.length > 280 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-280 characters, got ${ENTRY.length}`);
}
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
