#!/usr/bin/env node
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { collections } from "../src/research-data.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const client = path.join(dist, "client");
const index = path.join(client, "index.html");
const worker = path.join(root, "worker", "index.js");
const hosting = path.join(root, ".openai", "hosting.json");

for (const file of [index, worker, hosting]) {
  if (!existsSync(file)) throw new Error("Missing Sites build input: " + file);
}

mkdirSync(path.join(dist, "server"), { recursive: true });
mkdirSync(path.join(dist, ".openai"), { recursive: true });
copyFileSync(worker, path.join(dist, "server", "index.js"));
copyFileSync(hosting, path.join(dist, ".openai", "hosting.json"));

const routes = ["/data"];
for (const [collectionKey, collection] of Object.entries(collections)) {
  routes.push(`/data/${collectionKey}`);
  for (const item of collection.items) {
    routes.push(`/data/${collectionKey}/${encodeURIComponent(item.id)}`);
  }
}

for (const route of routes) {
  const routeDir = path.join(client, route.replace(/^\//, ""));
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(index, path.join(routeDir, "index.html"));
}

const origin = "https://biodiversitycredit.ir";
const sitemapUrls = ["/", ...routes]
  .map((route) => `  <url><loc>${origin}${route}</loc></url>`)
  .join("\n");
writeFileSync(
  path.join(client, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`,
);
writeFileSync(
  path.join(client, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
);

console.log(
  `Prepared Sites build with ${routes.length} first-party data routes, sitemap, and server packaging`,
);
