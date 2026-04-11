import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const files = fs.readdirSync(publicDir);

const oldString = 'example.com';
const newString = 'www.hypehour.com.br';

let count = 0;
for (const file of files) {
  const filePath = path.join(publicDir, file);
  if (fs.statSync(filePath).isFile()) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(oldString)) {
      content = content.replace(new RegExp(oldString, 'g'), newString);
      fs.writeFileSync(filePath, content, 'utf8');
      count++;
      console.log(`Patched ${file}`);
    }
  }
}
console.log(`Patched ${count} files.`);
