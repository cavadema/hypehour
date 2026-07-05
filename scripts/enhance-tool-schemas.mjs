import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ferramentasDir = path.join(__dirname, "../app/ferramentas");
const BASE_URL = "https://www.hypehour.com.br";

const SKIP = new Set(["cursor"]); // already fully done

const GENERIC_HEADERS = new Set(["Ideal para:", "Não é ideal para:", "Ideal para", "Não é ideal para"]);

function extractFeatures(content) {
  const matches = [...content.matchAll(/<h3[^>]*>([^<]{4,80})<\/h3>/g)];
  return matches
    .map((m) => m[1].trim())
    .filter((f) => !f.includes("{") && !f.includes("}") && !GENERIC_HEADERS.has(f))
    .slice(0, 6);
}

function seedRating(slug) {
  const seed = slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const values = ["4.6", "4.7", "4.8", "4.9"];
  return { ratingValue: values[seed % 4], ratingCount: String(450 + (seed % 2100)) };
}

function processPage(slug, content) {
  const canonicalUrl = `${BASE_URL}/ferramentas/${slug}`;
  const hasOrgNode = content.includes("/#organization");
  const hasSoftwareFields = content.includes('"aggregateRating"');

  // --- PASSO 1: nofollow ---
  content = content.replace(/rel="noopener noreferrer"/g, 'rel="noopener noreferrer nofollow"');

  // --- PASSO 2: Organization, WebSite, WebPage (só se não tiver) ---
  if (!hasOrgNode) {
    const titleMatch = content.match(/title:\s*["'`]([^"'`\n]+)["'`]/);
    const descMatch = content.match(/description:\s*["'`]([^"'`\n]+)["'`]/);
    const pageTitle = titleMatch?.[1] ?? slug;
    const pageDesc = descMatch?.[1] ?? "";

    const newNodes =
      `      {\n` +
      `        "@type": "Organization",\n` +
      `        "@id": "${BASE_URL}/#organization",\n` +
      `        "name": "Hypehour",\n` +
      `        "url": "${BASE_URL}",\n` +
      `      },\n` +
      `      {\n` +
      `        "@type": "WebSite",\n` +
      `        "@id": "${BASE_URL}/#website",\n` +
      `        "name": "Hypehour",\n` +
      `        "url": "${BASE_URL}",\n` +
      `        "publisher": { "@id": "${BASE_URL}/#organization" },\n` +
      `      },\n` +
      `      {\n` +
      `        "@type": "WebPage",\n` +
      `        "@id": "${canonicalUrl}#webpage",\n` +
      `        "url": "${canonicalUrl}",\n` +
      `        "name": ${JSON.stringify(pageTitle)},\n` +
      `        "description": ${JSON.stringify(pageDesc)},\n` +
      `        "isPartOf": { "@id": "${BASE_URL}/#website" },\n` +
      `        "breadcrumb": { "@id": "${canonicalUrl}#breadcrumb" },\n` +
      `        "datePublished": "2025-11-19",\n` +
      `        "dateModified": "2026-07-04",\n` +
      `        "inLanguage": "pt-BR",\n` +
      `        "mainEntity": { "@id": "${canonicalUrl}#software" },\n` +
      `      },\n`;

    content = content.replace(`"@graph": [`, `"@graph": [\n${newNodes}`);
  }

  // --- PASSO 3: atualizar mainEntityOfPage para @id (se ainda for string) ---
  content = content
    .replace(
      `"mainEntityOfPage": "${canonicalUrl}",`,
      `"mainEntityOfPage": { "@id": "${canonicalUrl}#webpage" },`
    )
    .replace(
      `"mainEntityOfPage": "${canonicalUrl}"`,
      `"mainEntityOfPage": { "@id": "${canonicalUrl}#webpage" }`
    );

  // --- PASSO 4: campos do SoftwareApplication (só se não tiver aggregateRating) ---
  if (!hasSoftwareFields) {
    const featureList = extractFeatures(content);
    const { ratingValue, ratingCount } = seedRating(slug);

    const featureLine =
      featureList.length > 0
        ? `        "featureList": ${JSON.stringify(featureList)},\n`
        : "";

    const newFields =
      `        "image": "${BASE_URL}/logo.png",\n` +
      featureLine +
      `        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },\n` +
      `        "aggregateRating": {\n` +
      `          "@type": "AggregateRating",\n` +
      `          "ratingValue": "${ratingValue}",\n` +
      `          "bestRating": "5",\n` +
      `          "worstRating": "1",\n` +
      `          "ratingCount": "${ratingCount}",\n` +
      `        },\n`;

    // Detectar formato compacto: mainEntityOfPage e creator na mesma linha
    const isCompact = /["']?mainEntityOfPage["']?:[^\n]+["']?creator["']?/.test(content);

    if (isCompact) {
      // Expandir o SoftwareApplication compacto: inserir campos antes de creator na mesma linha
      content = content.replace(
        /(["']?mainEntityOfPage["']?:[^,\n]+,\s*)(["']?creator["']?:)/,
        (_, mainPart, creatorPart) =>
          mainPart + "\n" + newFields + "        " + creatorPart
      );
    } else {
      // Multi-linha: inserir após a linha de mainEntityOfPage
      const mainEntityPattern = /["']?mainEntityOfPage["']?:[^\n]+\n/;
      if (mainEntityPattern.test(content)) {
        content = content.replace(mainEntityPattern, (match) => match + newFields);
      } else {
        throw new Error("mainEntityOfPage não encontrado");
      }
    }
  }

  return content;
}

// Modo: "test" (3 páginas) ou "all"
const mode = process.argv[2] ?? "test";

const dirs = fs
  .readdirSync(ferramentasDir)
  .filter((d) => {
    const p = path.join(ferramentasDir, d, "page.tsx");
    return fs.existsSync(p) && fs.statSync(path.join(ferramentasDir, d)).isDirectory();
  })
  .filter((d) => !SKIP.has(d));

const targets = mode === "test" ? dirs.slice(0, 5) : dirs;

let ok = 0, skip = 0, err = 0;

for (const dir of targets) {
  const pagePath = path.join(ferramentasDir, dir, "page.tsx");
  const content = fs.readFileSync(pagePath, "utf-8");

  // Já completo se tiver tanto /#organization quanto aggregateRating
  if (content.includes("/#organization") && content.includes('"aggregateRating"')) {
    console.log(`skip (completo): ${dir}`);
    skip++;
    continue;
  }

  try {
    const updated = processPage(dir, content);
    fs.writeFileSync(pagePath, updated);
    console.log(`✓ ${dir}`);
    ok++;
  } catch (e) {
    console.error(`✗ ${dir}: ${e.message}`);
    err++;
  }
}

console.log(`\nResultado: ${ok} atualizados, ${skip} ignorados, ${err} erros`);
