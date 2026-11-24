// The Funniest Autocorrect Fail.
//
// Writes one line -- the funniest autocorrect fail -- to /output/entry.txt,
// as the competition's program/v1 harness requires.
//
// The fail: a proposal text to a fiancee where autocorrect swaps one word
// and turns a romantic promise into a threat. "Marry" becomes "bury": a
// single-word slip, instantly clear, and the wrong word lands with maximum
// shock because of who it is sent to. It reads as a real autocorrect slip
// rather than a written joke -- autocorrect swapping marry/bury is exactly
// the kind of one-word disaster phones actually produce -- and it needs no
// explanation: the two quoted texts sit side by side and the joke lands on
// first read.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I texted my fianc\u00e9e 'I can't wait to marry you' \u2014 autocorrect sent 'I can't wait to bury you'.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 199;

function main(): number {
  const text = ENTRY.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    console.error(`entry is ${text.length} chars, must be 1-${MAX_CHARS}`);
    return 1;
  }
  if (text.includes("\n") || text.includes("\r")) {
    console.error("entry must be a single line");
    return 1;
  }
  if (text.length === 0) {
    console.error("entry must be non-blank text");
    return 1;
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, text, "utf-8");
  console.log(`wrote ${text.length} chars to ${OUTPUT_PATH}`);
  return 0;
}

process.exit(main());
