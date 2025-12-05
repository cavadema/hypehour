const fs = require('fs');
const path = require('path');

const appDir = 'c:\\Users\\tamir\\Downloads\\iaparatudo\\app';

const replacements = [
    ['text-blue-600', 'text-black'],
    ['text-blue-500', 'text-gray-900'],
    ['text-blue-400', 'text-gray-700'],
];

function walkDir(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (file.endsWith('.tsx')) {
            try {
                let content = fs.readFileSync(filePath, 'utf8');
                let modified = content;

                replacements.forEach(([old, newVal]) => {
                    modified = modified.replace(new RegExp(old, 'g'), newVal);
                });

                if (modified !== content) {
                    fs.writeFileSync(filePath, modified, 'utf8');
                    console.log(`Updated: ${filePath}`);
                }
            } catch (e) {
                console.error(`Error processing ${filePath}:`, e.message);
            }
        }
    });
}

walkDir(appDir);
console.log('Done!');
