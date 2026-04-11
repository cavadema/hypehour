import fs from 'fs';
import path from 'path';

const sitemapPath = './public/sitemap.xml';
const docsJsonPath = './public/docs.json';
const aiIndexJsonPath = './public/ai-index.json';

function generateFiles() {
  if (!fs.existsSync(sitemapPath)) {
    console.error('Sitemap not found!');
    return;
  }

  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const urls = sitemap.match(/<loc>(.*?)<\/loc>/g).map(match => match.replace(/<\/?loc>/g, ''));

  // Docs.json structure
  const docs = {
    version: "1.0",
    generated: new Date().toISOString(),
    site: {
      title: "Hypehour",
      description: "Agregador de ferramentas de IA para todos os segmentos",
      url: "https://www.hypehour.com.br"
    },
    documents: urls.map(url => {
      const pathName = url.replace('https://www.hypehour.com.br', '') || '/';
      let title = pathName === '/' ? 'Home' : pathName.split('/').pop().replace(/-/g, ' ');
      // Capitalize title
      title = title.split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
      
      return {
        url: url,
        title: title,
        description: `Encontre mais sobre ${title} no Hypehour.`
      };
    }),
    metadata: {
      totalDocuments: urls.length,
      generator: "Manual AI script",
      generatorUrl: "https://www.hypehour.com.br"
    }
  };

  // AI-index.json structure (Simplified version for LLMs)
  const aiIndex = {
    name: "Hypehour AI Index",
    description: "Detailed index of AI tools and categories for Discovery",
    lastUpdated: new Date().toISOString().split('T')[0],
    entries: urls.map(url => {
      const pathName = url.replace('https://www.hypehour.com.br', '') || '/';
      const id = pathName === '/' ? 'home' : pathName.split('/').pop();
      let title = id === 'home' ? 'Home' : id.replace(/-/g, ' ');
      title = title.split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');

      return {
        id: id,
        url: url,
        title: title,
        description: `Hypehour: Agregador de ferramentas de IA para ${title}.`,
        keywords: [title, "IA", "Artificial Intelligence", "Hypehour", "ferramentas"]
      };
    })
  };

  fs.writeFileSync(docsJsonPath, JSON.stringify(docs, null, 2));
  fs.writeFileSync(aiIndexJsonPath, JSON.stringify(aiIndex, null, 2));

  console.log(`Generated ${urls.length} entries in docs.json and ai-index.json`);
}

generateFiles();
