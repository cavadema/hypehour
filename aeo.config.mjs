import { defineConfig } from 'aeo.js';

export default defineConfig({
  // Required
  title: 'Hypehour',
  url: 'https://www.hypehour.com.br',

  // Optional
  description: 'Otimizado para Inteligência Artificial',

  // Toggle individual generators
  generators: {
    robotsTxt: true,
    llmsTxt: false,
    llmsFullTxt: false,
    rawMarkdown: false,
    manifest: false,
    sitemap: false,
    aiIndex: true,
  },

  // Customize robots.txt
  robots: {
    allow: ['/'],
    disallow: ['/admin'],
    crawlDelay: 0,
  },

  // Schema configuration
  schema: {
    enabled: true,
    organization: {
      name: 'Hypehour',
      url: 'https://www.hypehour.com.br',
      logo: 'https://www.hypehour.com.br/logo.png',
    },
    defaultType: 'WebPage',
  },

  // Widget configuration
  widget: {
    enabled: false,
    position: 'bottom-right',
    humanLabel: 'Human',
    aiLabel: 'AI',
    showBadge: true,
    theme: {
      background: 'rgba(18, 18, 24, 0.9)',
      text: '#C0C0C5',
      accent: '#E8E8EA',
      badge: '#4ADE80',
    },
  },
});
