import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const TOOLS_DIR = join(process.cwd(), "app/ferramentas");

// Matches the Organization + WebSite blocks that duplicate what's in layout.tsx
const DUPLICATE_SCHEMA_BLOCK = /\s*\{\s*"@type":\s*"Organization",\s*"@id":\s*"https:\/\/www\.hypehour\.com\.br\/#organization",\s*"name":\s*"Hypehour",\s*"url":\s*"https:\/\/www\.hypehour\.com\.br",\s*\},\s*\{\s*"@type":\s*"WebSite",\s*"@id":\s*"https:\/\/www\.hypehour\.com\.br\/#website",\s*"name":\s*"Hypehour",\s*"url":\s*"https:\/\/www\.hypehour\.com\.br",\s*"publisher":\s*\{\s*"@id":\s*"https:\/\/www\.hypehour\.com\.br\/#organization"\s*\},\s*\},/g;

let updated = 0;
let skipped = 0;

const tools = readdirSync(TOOLS_DIR);

for (const slug of tools) {
  const filePath = join(TOOLS_DIR, slug, "page.tsx");
  let content;
  try {
    content = readFileSync(filePath, "utf8");
  } catch {
    continue;
  }

  if (!content.includes('"@type": "Organization"')) {
    skipped++;
    continue;
  }

  const newContent = content.replace(DUPLICATE_SCHEMA_BLOCK, "");

  if (newContent !== content) {
    writeFileSync(filePath, newContent, "utf8");
    console.log(`UPDATED: ${slug}`);
    updated++;
  } else {
    console.log(`WARN: pattern not matched for ${slug}`);
  }
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped`);
