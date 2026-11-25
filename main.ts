import { mkdirSync, writeFileSync } from "node:fs";

// One hilarious line, at most 200 characters, that lands entirely on its own.
const line =
  "I told my smart fridge I was on a diet, so now it judges me in Kelvin and hides the ice cream behind a long lecture about self-respect.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
