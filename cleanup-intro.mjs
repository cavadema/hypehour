import fs from 'fs';
import path from 'path';

const appDir = './app';
const foldersToSkip = ['api', 'components', 'ferramentas', 'termos', 'privacidade', 'sobre-nos'];

function process() {
    const dirs = fs.readdirSync(appDir).filter(f => {
        const fullPath = path.join(appDir, f);
        return fs.statSync(fullPath).isDirectory() && !foldersToSkip.includes(f);
    });

    dirs.forEach(dirName => {
        const dirPath = path.join(appDir, dirName);
        const pagePath = path.join(dirPath, 'page.tsx');

        if (!fs.existsSync(pagePath)) return;

        let content = fs.readFileSync(pagePath, 'utf8');

        // We check if ExpandableContent is present
        if (!content.includes('<ExpandableContent />')) {
            return;
        }

        // Regex to find the paragraph right after <ExpandableContent />
        // It usually looks like <p className="mb-8 text-gray-600">...</p>
        // We match common classes used in the project: text-gray-600, text-zinc-700, etc.
        const pRegex = /<ExpandableContent \/>\s*<p className=".*?(?:text-gray-600|text-zinc-700).*?">.*?<\/p>/s;

        if (pRegex.test(content)) {
            content = content.replace(pRegex, '<ExpandableContent />');
            fs.writeFileSync(pagePath, content);
            console.log(`Cleaned up redundant intro in: ${dirName}`);
        } else {
            // Try another variation without className if needed, or specific to the user description
            // "Descubra as melhores ferramentas..."
            const manualRegex = /<ExpandableContent \/>\s*<p.*?>\s*Descubra as melhores ferramentas.*?<\/p>/s;
            if (manualRegex.test(content)) {
                content = content.replace(manualRegex, '<ExpandableContent />');
                fs.writeFileSync(pagePath, content);
                console.log(`Cleaned up manual intro in: ${dirName}`);
            }
        }
    });
}

process();
