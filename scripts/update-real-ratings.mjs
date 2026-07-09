import { readFileSync, writeFileSync } from "fs";
import { join } from "path";

const TOOLS_DIR = join(process.cwd(), "app/ferramentas");

// Real ratings from G2, Capterra, Trustpilot, Product Hunt
const REAL_RATINGS = {
  "base44":         { ratingValue: "3.1",  ratingCount: "775",   source: "Trustpilot" },
  "bolt-new":       { ratingValue: "4.4",  ratingCount: "44",    source: "Product Hunt" },
  "browse-ai":      { ratingValue: "4.8",  ratingCount: "59",    source: "G2" },
  "chatbase":       { ratingValue: "4.3",  ratingCount: "73",    source: "Capterra" },
  "chatgot":        { ratingValue: "4.6",  ratingCount: "8",     source: "Product Hunt" },
  "chatpdf":        { ratingValue: "5.0",  ratingCount: "11",    source: "Product Hunt" },
  "claude-for-excel":{ ratingValue: "2.6", ratingCount: "114",   source: "Microsoft AppSource" },
  "clipchamp":      { ratingValue: "4.3",  ratingCount: "89",    source: "Capterra" },
  "collov-ai":      { ratingValue: "3.3",  ratingCount: "47",    source: "Trustpilot" },
  "cursor":         { ratingValue: "4.5",  ratingCount: "54",    source: "G2" },
  "descript":       { ratingValue: "4.6",  ratingCount: "865",   source: "G2" },
  "dzine":          { ratingValue: "3.6",  ratingCount: "44",    source: "Trustpilot" },
  "firecrawl":      { ratingValue: "5.0",  ratingCount: "14",    source: "Product Hunt" },
  "flexclip":       { ratingValue: "4.5",  ratingCount: "2613",  source: "Trustpilot" },
  "fliki":          { ratingValue: "4.7",  ratingCount: "177",   source: "G2" },
  "flowgpt":        { ratingValue: "4.9",  ratingCount: "10",    source: "Product Hunt" },
  "gamma":          { ratingValue: "4.3",  ratingCount: "26",    source: "G2" },
  "gptzero":        { ratingValue: "4.3",  ratingCount: "101",   source: "G2" },
  "grafana":        { ratingValue: "4.5",  ratingCount: "159",   source: "G2" },
  "granola-ai":     { ratingValue: "4.8",  ratingCount: "32",    source: "G2" },
  "hedra":          { ratingValue: "2.1",  ratingCount: "39",    source: "Trustpilot" },
  "heygen":         { ratingValue: "4.8",  ratingCount: "1589",  source: "G2" },
  "higgsfield":     { ratingValue: "4.5",  ratingCount: "18",    source: "G2" },
  "ideogram":       { ratingValue: "4.0",  ratingCount: "159",   source: "Trustpilot" },
  "insmind":        { ratingValue: "4.6",  ratingCount: "21",    source: "Trustpilot" },
  "intercom":       { ratingValue: "4.5",  ratingCount: "3880",  source: "G2" },
  "invideo":        { ratingValue: "4.3",  ratingCount: "177",   source: "G2" },
  "janitor-ai":     { ratingValue: "2.6",  ratingCount: "26",    source: "Trustpilot" },
  "kapwing":        { ratingValue: "4.4",  ratingCount: "207",   source: "Capterra" },
  "klingai":        { ratingValue: "1.3",  ratingCount: "318",   source: "Trustpilot" },
  "krea":           { ratingValue: "2.7",  ratingCount: "117",   source: "Trustpilot" },
  "leonardo-ai":    { ratingValue: "4.6",  ratingCount: "1800",  source: "G2" },
  "lightpdf":       { ratingValue: "4.6",  ratingCount: "17",    source: "G2" },
  "lovable":        { ratingValue: "4.6",  ratingCount: "273",   source: "G2" },
  "luvvoice":       { ratingValue: "2.3",  ratingCount: "9",     source: "Trustpilot" },
  "macaron":        { ratingValue: "4.7",  ratingCount: "106",   source: "Product Hunt" },
  "midjourney":     { ratingValue: "4.4",  ratingCount: "88",    source: "G2" },
  "opusclip":       { ratingValue: "4.7",  ratingCount: "127",   source: "G2" },
  "otter-ai":       { ratingValue: "4.4",  ratingCount: "462",   source: "G2" },
  "piclumen":       { ratingValue: "4.8",  ratingCount: "4333",  source: "Trustpilot" },
  "pixverse":       { ratingValue: "2.7",  ratingCount: "105",   source: "Trustpilot" },
  "poly-ai":        { ratingValue: "5.0",  ratingCount: "12",    source: "G2" },
  "profound":       { ratingValue: "4.5",  ratingCount: "1037",  source: "G2" },
  "quilbot":        { ratingValue: "4.9",  ratingCount: "12962", source: "Trustpilot" },
  "recraft":        { ratingValue: "4.6",  ratingCount: "445",   source: "G2" },
  "replit":         { ratingValue: "4.5",  ratingCount: "329",   source: "G2" },
  "rytr":           { ratingValue: "4.7",  ratingCount: "819",   source: "G2" },
  "sanalabs":       { ratingValue: "4.8",  ratingCount: "105",   source: "G2" },
  "scispace":       { ratingValue: "4.3",  ratingCount: "73",    source: "Capterra" },
  "scraperapi":     { ratingValue: "4.4",  ratingCount: "16",    source: "G2" },
  "shadcn-create":  { ratingValue: "4.8",  ratingCount: "15",    source: "Product Hunt" },
  "sidekicker":     { ratingValue: "4.0",  ratingCount: "443",   source: "Trustpilot" },
  "smallppt":       { ratingValue: "2.8",  ratingCount: "8",     source: "Trustpilot" },
  "soloist":        { ratingValue: "4.0",  ratingCount: "67",    source: "Trustpilot" },
  "speechify":      { ratingValue: "4.6",  ratingCount: "4736",  source: "Trustpilot" },
  "synthesia":      { ratingValue: "4.7",  ratingCount: "2375",  source: "G2" },
  "tactiq":         { ratingValue: "4.2",  ratingCount: "17",    source: "G2" },
  "temso":          { ratingValue: "4.8",  ratingCount: "5",     source: "G2" },
  "turboscribe":    { ratingValue: "4.0",  ratingCount: "275",   source: "Trustpilot" },
  "undetectable":   { ratingValue: "3.4",  ratingCount: "890",   source: "Trustpilot" },
  "v0":             { ratingValue: "5.0",  ratingCount: "36",    source: "G2" },
  "veed":           { ratingValue: "4.6",  ratingCount: "2141",  source: "G2" },
  "vidnoz":         { ratingValue: "4.9",  ratingCount: "16",    source: "G2" },
  "visme":          { ratingValue: "4.5",  ratingCount: "718",   source: "Capterra" },
  "wisprflow":      { ratingValue: "4.5",  ratingCount: "6",     source: "G2" },
  "writesonic":     { ratingValue: "4.7",  ratingCount: "2214",  source: "G2" },
  "zerogpt":        { ratingValue: "4.1",  ratingCount: "50",    source: "G2" },
};

// Tools where aggregateRating must be removed (no real data found)
const REMOVE_RATING = new Set([
  "adapta", "ai-ease", "browserless", "citable", "clipdrop", "conker",
  "crawl4ai", "excelmatic", "gobii", "hailuo-ai", "julius-ai", "ollama",
  "openclaw", "roomxai", "scaffold", "slidesgo", "speechma", "thumbfast",
  "tonkotsu", "upscayl", "vidwud", "viggle-ai", "wevoicer", "willow",
  "claw-syndicate", "first-answer",
]);

// Regex to match the full aggregateRating block
const AGGREGATE_RATING_BLOCK = /"aggregateRating":\s*\{[^}]+\},?\n/g;

let updated = 0;
let removed = 0;
let skipped = 0;

const { readdirSync } = await import("fs");
const tools = readdirSync(TOOLS_DIR);

for (const slug of tools) {
  const filePath = join(TOOLS_DIR, slug, "page.tsx");
  let content;
  try {
    content = readFileSync(filePath, "utf8");
  } catch {
    continue;
  }

  if (!content.includes('"aggregateRating"')) {
    skipped++;
    continue;
  }

  if (REMOVE_RATING.has(slug)) {
    const newContent = content.replace(AGGREGATE_RATING_BLOCK, "");
    if (newContent !== content) {
      writeFileSync(filePath, newContent, "utf8");
      console.log(`REMOVED: ${slug}`);
      removed++;
    }
    continue;
  }

  const rating = REAL_RATINGS[slug];
  if (!rating) {
    console.log(`WARN: ${slug} has aggregateRating in schema but no real data — removing`);
    const newContent = content.replace(AGGREGATE_RATING_BLOCK, "");
    if (newContent !== content) {
      writeFileSync(filePath, newContent, "utf8");
      removed++;
    }
    continue;
  }

  const newBlock = `"aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "${rating.ratingValue}",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "${rating.ratingCount}",
        },\n`;

  const newContent = content.replace(AGGREGATE_RATING_BLOCK, newBlock);
  if (newContent !== content) {
    writeFileSync(filePath, newContent, "utf8");
    console.log(`UPDATED: ${slug} → ${rating.ratingValue} (${rating.ratingCount} reviews, ${rating.source})`);
    updated++;
  } else {
    console.log(`WARN: Pattern not matched for ${slug}`);
  }
}

console.log(`\nDone: ${updated} updated, ${removed} removed, ${skipped} skipped (no rating block)`);
