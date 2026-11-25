import { mkdirSync, writeFileSync } from 'node:fs';

const ENTRY = "My Roomba filed for custody of the dog, claiming I never vacuum under the couch and the dog agrees.";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', ENTRY);
