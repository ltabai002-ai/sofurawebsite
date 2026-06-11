import { spawn } from "node:child_process";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const PORT = 4173;
const BASE = "http://localhost:" + PORT;
const DIST_CLIENT = new URL("../dist/client/", import.meta.url).pathname;

const ROUTES = ["/", "/exam", "/about", "/gallery", "/contact", "/press-release", "/prize"];

function waitForServer(url, maxRetries = 30, delayMs = 1000) {
  return new Promise((resolve, reject) => {
    const attempt = (n) => {
      fetch(url)
        .then(() => resolve())
        .catch((e) => {
          if (n <= 0) return reject(new Error(`Server did not start after ${maxRetries} retries`));
          setTimeout(() => attempt(n - 1), delayMs);
        });
    };
    attempt(maxRetries);
  });
}

async function generate() {
  console.log("Building...");
  const build = spawn("npx", ["vite", "build"], {
    stdio: "inherit",
    shell: true,
  });
  await new Promise((resolve, reject) => {
    build.on("exit", (code) => (code === 0 ? resolve() : reject(new Error(`Build failed with code ${code}`))));
  });

  console.log("Starting preview server...");
  const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], {
    stdio: "pipe",
    shell: true,
  });

  server.stderr.on("data", (d) => process.stderr.write(d));

  try {
    await waitForServer(BASE);
    console.log("Server is ready. Prerendering pages...");

    for (const route of ROUTES) {
      const url = BASE + route;
      console.log("  Fetching", route);
      const res = await fetch(url);
      if (!res.ok) {
        console.warn("    WARN:", route, "returned", res.status);
      }
      const html = await res.text();

      // Determine output path: "/exam" -> "exam/index.html", "/" -> "index.html"
      const cleanRoute = route.replace(/\/$/, "") || "";
      const outPath = cleanRoute
        ? path.join(DIST_CLIENT, cleanRoute, "index.html")
        : path.join(DIST_CLIENT, "index.html");

      const outDir = path.dirname(outPath);
      if (!existsSync(outDir)) {
        await mkdir(outDir, { recursive: true });
      }
      await writeFile(outPath, html, "utf-8");
      console.log("    -> saved", path.relative(DIST_CLIENT, outPath));
    }

    // Also copy index.html as 404.html for SPA fallback
    const idxPath = path.join(DIST_CLIENT, "index.html");
    const fallbackPath = path.join(DIST_CLIENT, "404.html");
    try {
      const idxHtml = await readFile(idxPath, "utf-8");
      await writeFile(fallbackPath, idxHtml, "utf-8");
      console.log("    -> saved 404.html (SPA fallback)");
    } catch {
      console.warn("    Skipped 404.html (no index.html found)");
    }

    console.log("\nDone! Static files are in dist/client/");
    console.log("Upload the CONTENTS of dist/client/ to your public_html folder.");
  } finally {
    server.kill("SIGTERM");
  }
}

generate().catch((e) => {
  console.error("Error:", e);
  process.exit(1);
});
