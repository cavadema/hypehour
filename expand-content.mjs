import fs from 'fs';
import path from 'path';

const appDir = './app';
const foldersToSkip = ['api', 'components', 'ferramentas', 'termos', 'privacidade', 'sobre-nos', 'ia-para-fazer-ata-reuniao'];

function capitalize(s) {
    return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function getTemplate(categoryName) {
    const title = capitalize(categoryName.replace(/-/g, ' '));
    const lines = [
        '"use client";',
        '',
        'import { ChevronDownIcon } from "@heroicons/react/24/solid";',
        'import { useState } from "react";',
        '',
        'export default function ExpandableContent() {',
        '    const [isExpanded, setIsExpanded] = useState(false);',
        '',
        '    return (',
        '        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">',
        '            <div className="text-gray-700 leading-relaxed">',
        '                <p className="mb-4">',
        `                    As <strong>ferramentas de IA para ${title.toLowerCase()}</strong> estão revolucionando a maneira como profissionais e empresas lidam com processos complexos. A <strong>inteligência artificial aplicada a ${title.toLowerCase()}</strong> permite automatizar tarefas repetitivas, aumentar a precisão dos resultados e liberar tempo criativo para o que realmente importa. Explore nossa curadoria de ferramentas e descubra como a tecnologia pode elevar seu patamar de produtividade.`,
        '                </p>',
        '',
        '                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? \'max-h-[2000px] opacity-100\' : \'max-h-0 opacity-0\'}`}>',
        '                    <p className="mb-4">',
        `                        Ao escolher uma <strong>IA para ${title.toLowerCase()}</strong>, é fundamental observar a integração com seus fluxos atuais e a facilidade de uso. As melhores soluções do mercado oferecem não apenas automação, mas também insights estratégicos que ajudam na tomada de decisão. Com o avanço constante dos modelos de linguagem e visão computacional, as possibilidades para <strong>${title.toLowerCase()} com IA</strong> são praticamente ilimitadas.`,
        '                    </p>',
        '',
        `                    <h3 className="font-semibold text-lg mb-3 text-gray-900">Benefícios de usar IA para ${title}</h3>`,
        '',
        '                    <ul className="space-y-3 mb-4">',
        '                        <li className="flex gap-2">',
        '                            <span className="text-gray-900 font-bold">•</span>',
        '                            <span><strong>Produtividade Aumentada:</strong> Execute em minutos o que antes levava horas através de processamento inteligente.</span>',
        '                        </li>',
        '                        <li className="flex gap-2">',
        '                            <span className="text-gray-900 font-bold">•</span>',
        `                            <span><strong>Redução de Erros:</strong> A IA mantém a consistência em tarefas de ${title.toLowerCase()}, minimizando falhas humanas.</span>`,
        '                        </li>',
        '                        <li className="flex gap-2">',
        '                            <span className="text-gray-900 font-bold">•</span>',
        '                            <span><strong>Customização Total:</strong> Adapte as ferramentas às necessidades específicas do seu negócio ou projeto pessoal.</span>',
        '                        </li>',
        '                        <li className="flex gap-2">',
        '                            <span className="text-gray-900 font-bold">•</span>',
        '                            <span><strong>Vantagem Competitiva:</strong> Esteja à frente no mercado utilizando as tecnologias mais avançadas de inteligência artificial.</span>',
        '                        </li>',
        '                    </ul>',
        '',
        '                    <p className="mb-4">',
        `                        Lembre-se que a <strong>IA para ${title.toLowerCase()}</strong> deve ser vista como um copiloto que potencializa suas habilidades. A revisão humana e o direcionamento estratégico continuam sendo os diferenciais de um trabalho de excelência.`,
        '                    </p>',
        '',
        '                    <p>',
        `                        Abaixo, você encontrará uma lista completa com as melhores <strong>ferramentas de IA para ${title}</strong>, selecionadas para ajudar você a transformar seus desafios em resultados concretos.`,
        '                    </p>',
        '                </div>',
        '            </div>',
        '',
        '            <button',
        '                onClick={() => setIsExpanded(!isExpanded)}',
        '                className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors"',
        '                aria-expanded={isExpanded}',
        '            >',
        '                <span>{isExpanded ? \'Ver menos\' : \'Ver mais\'}</span>',
        '                <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? \'rotate-180\' : \'\'}`} />',
        '            </button>',
        '        </div>',
        '    );',
        '}',
        ''
    ];
    return lines.join('\n');
}

function process() {
    const dirs = fs.readdirSync(appDir).filter(f => {
        const fullPath = path.join(appDir, f);
        return fs.statSync(fullPath).isDirectory() && !foldersToSkip.includes(f);
    });

    dirs.forEach(dirName => {
        const dirPath = path.join(appDir, dirName);
        const pagePath = path.join(dirPath, 'page.tsx');
        const compPath = path.join(dirPath, 'ExpandableContent.tsx');

        if (!fs.existsSync(pagePath)) return;

        // 1. Create ExpandableContent.tsx if missing
        if (!fs.existsSync(compPath)) {
            fs.writeFileSync(compPath, getTemplate(dirName));
            console.log(`Created component for: ${dirName}`);
        }

        // 2. Inject into page.tsx
        let content = fs.readFileSync(pagePath, 'utf8');

        // Check if already injected
        if (content.includes('ExpandableContent')) {
            console.log(`Skipping ${dirName}, already contains ExpandableContent`);
            return;
        }

        // Add import
        if (!content.includes('import ExpandableContent')) {
            const importLine = "import ExpandableContent from \"./ExpandableContent\";\n";
            content = importLine + content;
        }

        // Inject component after h1
        const h1Regex = /<h1.*?>.*?<\/h1>.*?<\/div>/s;
        if (h1Regex.test(content)) {
            content = content.replace(h1Regex, (match) => {
                return match + "\n      <ExpandableContent />";
            });
            fs.writeFileSync(pagePath, content);
            console.log(`Injected component into: ${dirName}`);
        } else {
            console.error(`Could not find insertion point for: ${dirName}`);
        }
    });
}

process();
