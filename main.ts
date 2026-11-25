import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Today my agent matched 38 bank rows to receipts, then stopped at the one 7,500 rupiah mismatch instead of forcing it through.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");
console.log(`entry written to /output/entry.txt: ${LINE.length} characters`);
