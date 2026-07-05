import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Quais ferramentas de IA são essenciais para designers gráficos em 2026?",
        "a": "Adobe Firefly, Midjourney, Canva com Magic Studio, Recraft, Krea AI e Ideogram são as mais usadas. O Adobe Firefly tem a vantagem de estar integrado ao Photoshop e Illustrator e usar apenas imagens com direitos comerciais claros."
    },
    {
        "q": "IA vai substituir designers gráficos?",
        "a": "Não. A IA automatiza tarefas técnicas repetitivas (remoção de fundo, variações de cor, redimensionamento) e acelera a fase de ideação. O julgamento estético, a estratégia de marca e a comunicação com o cliente continuam sendo humanos."
    },
    {
        "q": "Como usar Midjourney para criar elementos visuais para projetos de design?",
        "a": "Use Midjourney para gerar conceitos visuais, moodboards, texturas e ilustrações. Depois refine no Photoshop ou Illustrator. O segredo está em criar prompts específicos com referências de estilo, paleta e composição que se alinhem ao briefing."
    },
    {
        "q": "Adobe Firefly é melhor que Midjourney para uso comercial?",
        "a": "Firefly tem vantagem clara em uso comercial: é treinado apenas em imagens licenciadas, eliminando riscos legais. Midjourney gera imagens de maior impacto visual e criativo, mas a questão dos direitos sobre conteúdo gerado ainda evolui juridicamente."
    },
    {
        "q": "IA pode criar variações de um logo ou identidade visual existente?",
        "a": "Sim. Com ferramentas como Adobe Firefly e referências do projeto original, é possível gerar variações de ícones, padrões e elementos gráficos coerentes com uma identidade visual estabelecida, acelerando muito a produção de assets."
    },
    {
        "q": "Como IA ajuda na criação de mockups?",
        "a": "Ferramentas como Smartmockups integradas à IA permitem aplicar automaticamente logos e designs em centenas de mockups fotorrealistas. O processo que levava horas no Photoshop é feito em minutos com geração automática de cenas."
    },
    {
        "q": "É possível usar IA para redimensionar e adaptar designs para diferentes formatos?",
        "a": "Sim. Canva com Magic Resize e Adobe Express adaptam automaticamente um design para todas as dimensões de redes sociais (Stories, Feed, Banner, LinkedIn, etc.) mantendo a hierarquia visual e composição."
    },
    {
        "q": "Como IA pode ajudar na remoção de fundo de imagens?",
        "a": "Remove.bg, Adobe Firefly e a função de remoção de fundo nativa do Canva Pro fazem isso com qualidade profissional em segundos — incluindo cabelos, objetos complexos e transparências que antes exigiam seleção manual demorada."
    },
    {
        "q": "Existe risco de plágio usando imagens geradas por IA em projetos de clientes?",
        "a": "O risco existe, especialmente com modelos treinados em obras protegidas por direitos autorais. Adobe Firefly minimiza isso com seu dataset de imagens licenciadas. Sempre verifique os termos de uso da plataforma antes de entregar para clientes."
    },
    {
        "q": "IA pode gerar fontes e tipografias customizadas?",
        "a": "Ferramentas especializadas como Fontjoy (harmonização de fontes com IA) e experimentos com modelos de imagem podem criar caracteres tipográficos únicos, mas a geração de famílias tipográficas funcionais ainda requer ferramentas tradicionais como Glyphs."
    },
    {
        "q": "Como usar IA para criar conteúdo visual para redes sociais em escala?",
        "a": "Configure templates no Canva ou Figma com slots variáveis, gere os textos com ChatGPT e as imagens de fundo com Firefly ou Midjourney, e use ferramentas de automação como Buffer AI para escalar a produção mantendo consistência de marca."
    },
    {
        "q": "Qual ferramenta de IA é melhor para criar ilustrações vetoriais?",
        "a": "Recraft se destaca na geração de ilustrações vetoriais com IA — output em SVG editável. Adobe Illustrator com IA generativa também permite criar e expandir ilustrações vetoriais diretamente no ambiente de trabalho."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    return (
        <details className="border-b border-gray-200 last:border-0 group" open={index < 5}>
            <summary className="flex w-full items-center justify-between py-4 text-left cursor-pointer list-none focus:outline-none">
                <span className="font-medium text-gray-900">{question}</span>
                <ChevronDownIcon
                    className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                />
            </summary>
            <p className="text-gray-600 leading-relaxed mb-4">{answer}</p>
        </details>
    );
}


export default function FAQSection() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="mt-12 mb-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Designers</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.q}
                        answer={faq.a}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
