import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que é vibe coding?",
        "a": "Vibe coding é a prática de construir aplicativos e sistemas descrevendo o que você quer em linguagem natural e deixando a IA gerar e iterar o código — com mínima ou nenhuma escrita manual de código por parte do criador."
    },
    {
        "q": "Quais as melhores ferramentas de vibe coding em 2026?",
        "a": "Bolt.new, Lovable, Replit Agent, Base44, v0 (Vercel) e Cursor em modo Agent são as mais populares. Bolt e Lovable se destacam por gerar aplicações web completas e deployadas a partir de um prompt inicial."
    },
    {
        "q": "Preciso saber programar para usar ferramentas de vibe coding?",
        "a": "Não para começar. Ferramentas como Bolt.new e Lovable foram projetadas exatamente para criar aplicações sem código manual. No entanto, conhecimento básico de programação ajuda a direcionar melhor a IA e corrigir problemas quando surgem."
    },
    {
        "q": "O que dá para construir com vibe coding?",
        "a": "Landing pages, dashboards de dados, ferramentas internas, MVPs de SaaS, chatbots, formulários complexos, apps mobile simples, integrações de API e até sistemas com banco de dados — muitos projetos reais já foram lançados assim."
    },
    {
        "q": "Qual a diferença entre Bolt.new e Lovable?",
        "a": "Bolt.new é mais técnico e flexível, suportando frameworks diversos com deploy instantâneo. Lovable tem interface mais amigável para não-desenvolvedores, com foco em apps React de qualidade e colaboração visual. Ambos evoluem rapidamente."
    },
    {
        "q": "Código gerado por vibe coding é confiável para produção?",
        "a": "Para MVPs e projetos internos, geralmente sim. Para sistemas em produção com muitos usuários, dados sensíveis ou requisitos de segurança críticos, revisão por um desenvolvedor experiente é necessária antes do lançamento."
    },
    {
        "q": "Como usar Cursor como ferramenta de vibe coding?",
        "a": "No modo Agent do Cursor, você descreve uma feature ou projeto em linguagem natural e o Cursor navega autonomamente pelo código, cria arquivos, escreve implementações e roda testes — iterando até chegar no resultado desejado."
    },
    {
        "q": "Quanto custa usar ferramentas de vibe coding?",
        "a": "Bolt.new e Lovable têm planos gratuitos com créditos limitados e planos pagos a partir de US$20/mês. Replit Agent usa créditos com preço por agente. v0 da Vercel tem generosos créditos gratuitos mensais para geração de componentes."
    },
    {
        "q": "Qual o limite do vibe coding? Onde ele falha?",
        "a": "Sistemas muito complexos com lógica de negócio intrincada, integrações com sistemas legados obscuros e requisitos de performance extrema ainda são difíceis para a IA gerenciar de forma autônoma sem supervisão técnica próxima."
    },
    {
        "q": "Empreendedores não-técnicos conseguem lançar produtos com vibe coding?",
        "a": "Sim — e muitos já lançaram produtos reais com usuários pagantes usando Bolt, Lovable e Replit Agent. O vibe coding democratizou o acesso ao desenvolvimento de produtos digitais de forma sem precedentes."
    },
    {
        "q": "Como iterar rapidamente em um projeto de vibe coding?",
        "a": "Descreva as mudanças desejadas em termos funcionais ('adicione um botão que exporta a tabela para CSV'), não em termos técnicos. Seja específico sobre o comportamento desejado e use screenshots ou exemplos para comunicar o resultado esperado."
    },
    {
        "q": "Vibe coding vai substituir os desenvolvedores?",
        "a": "Não no curto prazo. Vai substituir parte do trabalho de implementação rotineira, mas a arquitetura de sistemas, segurança, performance em escala e resolução de bugs complexos ainda requerem expertise técnica humana significativa."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Vibe Coding com IA</h2>
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
