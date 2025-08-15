// Optional: ensure 404.html exists for GitHub Pages single-page routing fallback
import { writeFileSync } from "node:fs";
import { readFileSync } from "node:fs";
import { copyFileSync } from "node:fs";

try {
  // Create a 404.html mirroring index.html so deep links resolve
  const index = readFileSync(".next/out/index.html", "utf-8");
  writeFileSync(".next/out/404.html", index);
  // Copy to ./out for clarity if using default export dir
  copyFileSync(".next/out/404.html", "out/404.html");
} catch (e) {
  // no-op
}
