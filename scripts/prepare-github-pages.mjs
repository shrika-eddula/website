import { cpSync, copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = resolve(root, "dist");
const legacyContentDir = resolve(root, "content");
const distContentDir = resolve(distDir, "content");
const indexFile = resolve(distDir, "index.html");
const fallbackFile = resolve(distDir, "404.html");
const appRoutes = ["projects", "resume"];

if (!existsSync(distDir)) {
  throw new Error("dist directory is missing. Run this after vite build.");
}

if (existsSync(legacyContentDir)) {
  mkdirSync(distContentDir, { recursive: true });
  cpSync(legacyContentDir, distContentDir, {
    recursive: true,
    force: true,
  });
}

if (existsSync(indexFile)) {
  copyFileSync(indexFile, fallbackFile);

  for (const route of appRoutes) {
    const routeDir = resolve(distDir, route);
    mkdirSync(routeDir, { recursive: true });
    copyFileSync(indexFile, resolve(routeDir, "index.html"));
  }
}
