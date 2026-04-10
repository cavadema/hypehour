import fs from 'fs';
import path from 'path';

// Helper to recursively find tsx files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.next') continue;
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, fileList);
    } else if (filePath.endsWith('.tsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allFiles = findFiles(path.join(process.cwd(), 'app'));

// Replace mapping (simple string replaces for URLs)
const urlReplacements = {
  "https://praktika.ai/pt-br/": "https://praktika.ai/",
  "https://www.gladly.ai/hp1/": "https://www.gladly.com/",
  "https://www.letta.com/developer-platform": "https://www.letta.com/",
  "https://hyperlink.nexa.ai/": "https://nexa.ai/",
  "https://landing-staging.tome.app/": "https://tome.app/",
  "https://trugen.ai/home": "https://trugen.ai/",
  "https://autonomyai.io/products/fei-studio/": "https://autonomyai.io/",
  "https://www.actionstatelabs.com/": "https://github.com/actionstatelabs",
  "https://grafana.com/products/cloud/ai/": "https://grafana.com/solutions/machine-learning/",
  "https://www.graphisoft.com/solutions/innovation/archicad-ai-visualizer": "https://www.graphisoft.com/en-br/plans-and-products/ai-visualizer",
};

// Full line deletions (regex to remove the entire object line)
const linesToDelete = [
  /^\s*\{\s*nome:\s*"Olive",\s*url:\s*"https:\/\/fromolive\.com\/".*\n?/gm,
  /^\s*\{\s*nome:\s*"Beam Game",\s*url:\s*"https:\/\/site\.beam\.game\/".*\n?/gm,
  /^\s*\{\s*nome:\s*"Doco",\s*url:\s*"https:\/\/www\.trydoco\.com\/".*\n?/gm,
  /^\s*\{\s*nome:\s*"Library.fm",\s*url:\s*"https:\/\/library\.fm\/".*\n?/gm, // Might be split across lines based on grep
  /^\s*\{\s*nome:\s*"LLMs.txt Generator",\s*url:\s*"https:\/\/llmstxtgenerator\.cc\/".*\n?/gm,
];

// Additional manual cleanup based on grep output
const specificDeletions = [
  // from ia-para-musica (multiline)
  /\{\s*nome:\s*"Library.fm",\s*url:\s*"https:\/\/library\.fm\/",\s*descricao:[^}]+\},?/g,
  // LLMs.txt generator inline
  /\{\s*nome:[^,]+,\s*url:\s*"https:\/\/llmstxtgenerator\.cc\/",\s*descricao:[^}]+\},?/g,
   // Doco inline
  /\{\s*nome:\s*"Doco",\s*url:\s*"https:\/\/www\.trydoco\.com\/",\s*descricao:[^}]+\},?/g,
];

let filesModified = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // Replacements
  for (const [oldUrl, newUrl] of Object.entries(urlReplacements)) {
    // Escape string for simple global replace without regex matching issues
    newContent = newContent.split(oldUrl).join(newUrl);
  }

  // Deletions
  for (const regex of linesToDelete) {
    newContent = newContent.replace(regex, '');
  }
  
  for (const regex of specificDeletions) {
    newContent = newContent.replace(regex, '');
  }

  // Remove stray commas inside arrays if a line was deleted poorly in a list
  // Note: we can format later, or just remove trailing commas safely
  // For safety, not touching trailing commas automatically unless obvious.

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    filesModified++;
    console.log(`Updated: ${path.relative(process.cwd(), file)}`);
  }
}

console.log(`\nModified ${filesModified} files.`);
