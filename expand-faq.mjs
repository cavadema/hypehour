import fs from 'fs';
import path from 'path';

const appDir = './app';
const foldersToSkip = ['api', 'components', 'ferramentas', 'termos', 'privacidade', 'sobre-nos'];

function capitalize(s) {
    return s.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function getFAQItems(title) {
    const t = title.toLowerCase();
    return [
        { q: `O que é IA para ${t}?`, a: `IA para ${t} são ferramentas que utilizam inteligência artificial para automatizar, otimizar e escalar tarefas relacionadas a ${t}.` },
        { q: `Para que serve a inteligência artificial em ${t}?`, a: `Ela serve para aumentar a produtividade, reduzir erros humanos e oferecer insights baseados em dados para profissionais de ${t}.` },
        { q: `Como funciona uma IA voltada para ${t}?`, a: `Ela funciona processando grandes volumes de dados através de algoritmos de aprendizado de máquina adaptados para as necessidades específicas de ${t}.` },
        { q: `Qual a melhor IA para ${t} em 2026?`, a: `Existem diversas opções líderes no mercado, variando conforme a necessidade específica de cada projeto de ${t}.` },
        { q: `IA para ${t} é gratuita?`, a: `Muitas ferramentas oferecem versões gratuitas (freemium) com limites de uso, além de planos premium para uso profissional.` },
        { q: `Funciona em português?`, a: `Sim, a maioria das ferramentas modernas de IA para ${t} já oferece suporte completo ou parcial ao idioma português.` },
        { q: `É seguro usar IA para ${t}?`, a: `Sim, desde que você escolha ferramentas confiáveis que sigam protocolos de segurança e privacidade de dados.` },
        { q: `Inteligência artificial substitui profissionais de ${t}?`, a: `Não. Ela atua como um copiloto que potencializa o trabalho humano, automatizando tarefas repetitivas.` },
        { q: `Preciso saber programar para usar essas ferramentas?`, a: `Na maioria das vezes não. O foco das novas IAs para ${t} é a facilidade de uso via interface intuitiva.` },
        { q: `Vale a pena investir em ferramentas de IA para ${t}?`, a: `Sim, o ganho de tempo e a melhoria na qualidade das entregas compensam o investimento na tecnologia.` },
        { q: `Principais vantagens da IA em ${t}`, a: `As vantagens incluem economia de tempo, redução de custos operacionais e maior capacidade analítica em projetos de ${t}.` },
        { q: `Desvantagens de usar IA para ${t}`, a: `As principais limitações podem incluir a necessidade de revisão humana e a dependência de conexão com a internet.` },
        { q: `Como escolher a ferramenta ideal de ${t}?`, a: `Avalie o custo-benefício, a integração com sua rotina atual e se os recursos atendem às suas metas em ${t}.` },
        { q: `IA para ${t} para iniciantes`, a: `Existem plataformas com interface simplificada ideais para quem está começando a explorar IA em ${t}.` },
        { q: `Ferramentas de ${t} para empresas`, a: `Soluções corporativas focam em segurança, colaboração em equipe e integração com sistemas existentes.` },
        { q: `Tendências de IA para ${t} para o futuro`, a: `O futuro reserva maior autonomia, personalização extrema e integração nativa entre diferentes IAs de ${t}.` },
        { q: `Diferença entre IA tradicional e IA Generativa para ${t}`, a: `A IA tradicional analisa dados existentes, enquanto a IA Generativa pode criar novos conteúdos e soluções para ${t}.` },
        { q: `Como aprender a usar IA para ${t}?`, a: `Acompanhe portais como o Hypehour, faça cursos práticos e pratique o uso das ferramentas listadas na nossa curadoria.` },
        { q: `Melhor custo-benefício em ferramentas de ${t}`, a: `Avaliamos diversas opções para que você encontre a ferramenta de ${t} que cabe no seu bolso sem sacrificar a qualidade.` },
        { q: `Onde encontrar novidades sobre IA para ${t}?`, a: `O Hypehour é atualizado diariamente com os lançamentos mais relevantes do mundo da inteligência artificial para ${t}.` },
        { q: `Existe IA gratuita para ${t}?`, a: `Sim, existem várias opções de código aberto e planos gratuitos excelentes disponíveis hoje.` },
        { q: `Qual o impacto da IA no mercado de ${t}?`, a: `A IA está democratizando o acesso a recursos avançados, permitindo que pequenos times realizem grandes feitos em ${t}.` },
        { q: `Como automatizar processos de ${t} com IA?`, a: `Você pode usar fluxos de trabalho que conectam diferentes ferramentas de IA para criar automações completas.` },
        { q: `IA para ${t} funciona no celular?`, a: `Muitas ferramentas possuem aplicativos dedicados ou interfaces web totalmente responsivas.` },
        { q: `Melhores prompts para IA de ${t}`, a: `A qualidade do resultado depende da clareza do prompt. Oferecemos guias para ajudar você a dominar essa arte.` },
        { q: `IA para ${t} é uma moda passageira?`, a: `Pelo contrário, é uma mudança estrutural na forma como o trabalho de ${t} é realizado globalmente.` },
        { q: `Quais dados as ferramentas de ${t} coletam?`, a: `Geralmente coletam dados de uso para melhoria do modelo. Sempre leia a política de privacidade da ferramenta selecionada.` },
        { q: `Dá para ganhar dinheiro usando IA para ${t}?`, a: `Sim, ao aumentar sua produtividade e oferecer serviços melhores e mais rápidos em ${t}.` },
        { q: `Existe suporte em português para essas ferramentas?`, a: `Algumas ferramentas já possuem comunidades e suporte oficiais em português.` },
        { q: `Como o Hypehour seleciona as IAs de ${t}?`, a: `Nossa equipe testa e avalia as ferramentas com base em utilidade, acessibilidade e inovação técnica.` }
    ];
}

function getFAQTemplate(title, faqs) {
    const lines = [
        '"use client";',
        '',
        'import { useState } from "react";',
        'import { ChevronDownIcon } from "@heroicons/react/24/solid";',
        '',
        `const faqs = ${JSON.stringify(faqs, null, 4)};`,
        '',
        'function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {',
        '    const [isOpen, setIsOpen] = useState(index < 5);',
        '',
        '    return (',
        '        <div className="border-b border-gray-200 last:border-0">',
        '            <button',
        '                className="flex w-full items-center justify-between py-4 text-left focus:outline-none"',
        '                onClick={() => setIsOpen(!isOpen)}',
        '            >',
        '                <span className="font-medium text-gray-900">{question}</span>',
        '                <ChevronDownIcon',
        '                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}',
        '                />',
        '            </button>',
        '            <div',
        '                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}',
        '            >',
        '                <p className="text-gray-600 leading-relaxed">{answer}</p>',
        '            </div>',
        '        </div>',
        '    );',
        '}',
        '',
        'export default function FAQSection() {',
        '    const faqSchema = {',
        '        "@context": "https://schema.org",',
        '        "@type": "FAQPage",',
        '        "mainEntity": faqs.map(faq => ({',
        '            "@type": "Question",',
        '            "name": faq.q,',
        '            "acceptedAnswer": {',
        '                "@type": "Answer",',
        '                "text": faq.a',
        '            }',
        '        }))',
        '    };',
        '',
        '    return (',
        '        <div className="mt-12 mb-8">',
        '            <script',
        '                type="application/ld+json"',
        '                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}',
        '            />',
        `            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre ${title}</h2>`,
        '            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">',
        '                {faqs.map((faq, index) => (',
        '                    <FAQItem',
        '                        key={index}',
        '                        question={faq.q}',
        '                        answer={faq.a}',
        '                        index={index}',
        '                    />',
        '                ))}',
        '            </div>',
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
        const faqPath = path.join(dirPath, 'FAQSection.tsx');

        if (!fs.existsSync(pagePath)) return;

        const title = capitalize(dirName.replace(/-/g, ' '));
        const faqs = getFAQItems(title);

        // 1. Create/Overwrite FAQSection.tsx
        fs.writeFileSync(faqPath, getFAQTemplate(title, faqs));
        console.log(`Created FAQSection for: ${dirName}`);

        // 2. Clean up and update page.tsx
        let content = fs.readFileSync(pagePath, 'utf8');

        // Remove manual JSON-LD FAQ schema
        const schemaRegex = /<script\s+type="application\/ld\+json"\s+dangerouslySetInnerHTML={{[\s\S]*?"@type":\s*"FAQPage"[\s\S]*?}}\s*\/>/g;
        if (schemaRegex.test(content)) {
            content = content.replace(schemaRegex, '');
            console.log(`Removed manual schema from: ${dirName}`);
        }

        // Add import if missing
        if (!content.includes('import FAQSection')) {
            content = "import FAQSection from \"./FAQSection\";\n" + content;
        }

        // Add <FAQSection /> if missing, before </main>
        if (!content.includes('<FAQSection />')) {
            content = content.replace('</main>', '      <FAQSection />\n    </main>');
            console.log(`Injected FAQSection component into: ${dirName}`);
        }

        fs.writeFileSync(pagePath, content);
    });
}

process();
