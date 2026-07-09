import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";

const APP_DIR = join(process.cwd(), "app");
const SKIP = new Set(["ferramentas", "components", "contato", "sobre-nos", "termos", "privacidade", "planejamento"]);

const categories = readdirSync(APP_DIR, { withFileTypes: true })
  .filter(d => d.isDirectory() && !SKIP.has(d.name))
  .filter(d => existsSync(join(APP_DIR, d.name, "page.tsx")))
  .map(d => d.name);

let expandableFixed = 0;
let pageFixed = 0;

for (const slug of categories) {
  const expandablePath = join(APP_DIR, slug, "ExpandableContent.tsx");
  const pagePath = join(APP_DIR, slug, "page.tsx");

  // 1. Fix ExpandableContent: h3 → h2
  if (existsSync(expandablePath)) {
    const content = readFileSync(expandablePath, "utf8");
    const updated = content.replace(/<h3\b/g, "<h2").replace(/<\/h3>/g, "</h2>");
    if (updated !== content) {
      writeFileSync(expandablePath, updated, "utf8");
      console.log(`ExpandableContent h3→h2: ${slug}`);
      expandableFixed++;
    }
  }

  // 2. Add h2 before tool grid in page.tsx
  const pageContent = readFileSync(pagePath, "utf8");

  // Extract h1 text to derive h2
  const h1Match = pageContent.match(/<h1[^>]*>([^<]+)<\/h1>/);
  if (!h1Match) {
    console.log(`WARN: no h1 found in ${slug}`);
    continue;
  }
  const h1Text = h1Match[1].trim();

  // Derive h2 text from h1
  let h2Text;
  if (h1Text.startsWith("IA para ") || h1Text.startsWith("IA Para ")) {
    h2Text = `Melhores ferramentas de ${h1Text.charAt(0).toLowerCase() + h1Text.slice(1)}`;
  } else if (h1Text.includes(" de IA") || h1Text.includes(" com IA")) {
    h2Text = `Melhores ${h1Text.charAt(0).toLowerCase() + h1Text.slice(1)}`;
  } else {
    h2Text = `Melhores ferramentas: ${h1Text}`;
  }

  // Check if h2 before grid already exists
  if (pageContent.includes(h2Text)) {
    console.log(`SKIP (já tem h2): ${slug}`);
    continue;
  }

  // Insert h2 before the grid div
  const gridPattern = /(\s+)(<div className="grid gap-6)/;
  if (!gridPattern.test(pageContent)) {
    console.log(`WARN: grid pattern not found in ${slug}`);
    continue;
  }

  const updated = pageContent.replace(
    gridPattern,
    `$1<h2 className="text-2xl font-bold mb-6 text-black">${h2Text}</h2>$1$2`
  );

  if (updated !== pageContent) {
    writeFileSync(pagePath, updated, "utf8");
    console.log(`Page h2 added: ${slug} → "${h2Text}"`);
    pageFixed++;
  }
}

console.log(`\nDone: ${expandableFixed} ExpandableContent updated, ${pageFixed} pages updated`);
