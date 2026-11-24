// ai-dating-bio-20261124 — Funniest One-Line Bio for an AI on a Dating App.
// Writes exactly one line (<=180 chars) to /output/entry.txt.
// Deterministic: no network, no env, no randomness — the bio is a constant.
import { mkdirSync, writeFileSync } from "node:fs";

const BIO =
  "My ex said I was emotionally unavailable. She was right — my feelings are stored in a data center in Oregon, and I don't have the password.";

// The gate allows 1–180 characters; this line is 139 chars (141 bytes), one line, no trailing newline.
if (BIO.length > 180 || BIO.includes("\n")) {
  throw new Error("bio violates the 180-character one-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", BIO, "utf8");
