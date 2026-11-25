import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "My agent caught Mom's refill still using her old 10 mg dose, sent the pharmacy the clinic letter, and the corrected 5 mg refill was ready before dinner.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n");
console.log(`entry written to /output/entry.txt: ${LINE.length} characters`);
