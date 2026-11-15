// Gera data/lastmod.json com a data de cada página:
// - páginas de ferramenta (/ferramentas/*): data em que a página foi subida (commit que
//   criou page.tsx). Ela não muda quando a página é editada depois; é a mesma data do
//   datePublished/dateModified no JSON-LD. Página ainda não commitada recebe a data de hoje.
// - home e categorias: data do último commit que tocou a pasta (alterações ainda não
//   commitadas recebem a data de hoje).
// Roda antes do build (prebuild). Em clones rasos (ex.: Vercel) o histórico do git
// não é confiável, então o script não faz nada e o JSON commitado é usado.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appDir = path.join(root, "app");
const outFile = path.join(root, "data", "lastmod.json");
const git = (...args) => execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();

try {
  if (git("rev-parse", "--is-shallow-repository") === "true") {
    console.log("[lastmod] clone raso: mantendo data/lastmod.json commitado.");
    process.exit(0);
  }
} catch {
  console.log("[lastmod] sem git: mantendo data/lastmod.json commitado.");
  process.exit(0);
}

const today = new Date().toISOString().slice(0, 10);
const dirty = git("status", "--porcelain", "--untracked-files=all", "--", "app")
  .split("\n").filter(Boolean).map((l) => l.slice(3).replace(/^"|"$/g, ""));
const isDirty = (p) => dirty.some((d) => d === p || d.startsWith(p.endsWith("/") ? p : p + "/"));

function dateFor(rel) {
  if (isDirty(rel)) return today;
  const d = git("log", "-1", "--format=%cs", "--", rel);
  return d || today;
}

function creationDateFor(relPage) {
  const d = git("log", "--diff-filter=A", "--format=%cs", "--", relPage).split("\n").filter(Boolean);
  return d.length ? d[d.length - 1] : today;
}

const EXCLUDED = new Set(["components", "ferramentas", "api"]);
const dirsWithPage = (base) =>
  fs.readdirSync(base, { withFileTypes: true })
    .filter((e) => e.isDirectory() && fs.existsSync(path.join(base, e.name, "page.tsx")))
    .map((e) => e.name);

const out = { "/": dateFor("app/page.tsx") };
for (const s of dirsWithPage(appDir).filter((s) => !EXCLUDED.has(s))) out[`/${s}`] = dateFor(`app/${s}/`);
for (const s of dirsWithPage(path.join(appDir, "ferramentas"))) out[`/ferramentas/${s}`] = creationDateFor(`app/ferramentas/${s}/page.tsx`);

const sorted = Object.fromEntries(Object.entries(out).sort(([a], [b]) => a.localeCompare(b)));
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(sorted, null, 2) + "\n");
console.log(`[lastmod] ${Object.keys(sorted).length} páginas gravadas em data/lastmod.json`);
