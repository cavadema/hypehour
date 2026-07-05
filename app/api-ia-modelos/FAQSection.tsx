import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que é uma API de IA e para que serve?",
        "a": "Uma API de IA é uma interface que permite integrar modelos de linguagem e outros serviços de inteligência artificial diretamente em seus próprios aplicativos, sites ou automações, sem precisar criar o modelo do zero."
    },
    {
        "q": "Qual a diferença entre a API da OpenAI, Anthropic e Google?",
        "a": "A OpenAI oferece os modelos GPT-4o e o1; a Anthropic oferece Claude com foco em segurança e textos longos; o Google oferece Gemini com integração nativa ao ecossistema Google. Cada uma tem preços, limites e pontos fortes distintos."
    },
    {
        "q": "Preciso saber programar para usar APIs de IA?",
        "a": "O conhecimento básico de programação (Python ou JavaScript) ajuda muito, mas ferramentas como n8n, Make e Zapier permitem consumir APIs de IA sem código através de interfaces visuais."
    },
    {
        "q": "Quanto custa usar a API do ChatGPT (OpenAI)?",
        "a": "O custo varia por modelo e volume de tokens. O GPT-4o Mini custa cerca de US$0,15 por 1 milhão de tokens de entrada — ideal para projetos com alto volume e orçamento limitado."
    },
    {
        "q": "O que são tokens em APIs de LLM?",
        "a": "Tokens são as unidades de texto processadas pelo modelo — aproximadamente 4 caracteres em inglês ou 3 em português. Tanto o input (prompt) quanto o output (resposta) são cobrados em tokens."
    },
    {
        "q": "Qual API de IA tem o maior contexto (janela de contexto)?",
        "a": "Em 2026, Gemini 1.5 Pro e Claude 3.5 Sonnet lideram com janelas de contexto de até 1 milhão e 200 mil tokens respectivamente, permitindo processar documentos inteiros em uma única chamada."
    },
    {
        "q": "É possível usar APIs de IA com dados privados da minha empresa?",
        "a": "Sim. Você pode enviar dados privados via prompt (RAG), mas verifique a política de privacidade de cada provedor. Para máxima segurança, considere modelos open source rodando on-premise como LLaMA ou Mistral."
    },
    {
        "q": "O que é rate limit em APIs de IA?",
        "a": "É o limite de requisições por minuto ou tokens por dia que o provedor permite. Para produção com alto volume, é necessário solicitar aumento de limites ou usar múltiplas chaves API."
    },
    {
        "q": "Quais são as melhores APIs de IA gratuitas ou com tier gratuito?",
        "a": "Google Gemini API, Groq (com modelos open source), Mistral AI e Cohere oferecem tiers gratuitos generosos para desenvolvimento e projetos de baixo volume."
    },
    {
        "q": "Como escolher a API de IA certa para meu projeto?",
        "a": "Avalie: tamanho do contexto necessário, custo por token, latência, suporte a idioma português, capacidade de multimodalidade (imagens, áudio) e conformidade com LGPD para dados sensíveis."
    },
    {
        "q": "O que é fine-tuning de modelos de IA via API?",
        "a": "É o processo de treinar o modelo com seus próprios exemplos para adaptá-lo a um domínio específico, melhorando precisão e reduzindo custo de tokens por necessitar de prompts menores."
    },
    {
        "q": "APIs de IA funcionam bem com o português brasileiro?",
        "a": "Sim. GPT-4o, Claude 3.5 e Gemini 1.5 têm excelente desempenho em português brasileiro, com compreensão de expressões idiomáticas, variações regionais e contexto cultural local."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre APIs de IA e Modelos de Linguagem</h2>
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
