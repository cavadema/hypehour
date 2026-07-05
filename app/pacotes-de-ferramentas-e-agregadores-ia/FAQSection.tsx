import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que são agregadores de ferramentas de IA e para que servem?",
        "a": "Agregadores de IA são plataformas que centralizam acesso a múltiplos modelos e ferramentas de inteligência artificial em uma única interface ou API. Exemplos como Poe, You.com e OpenRouter permitem usar GPT-4o, Claude, Gemini e outros modelos sem criar contas separadas em cada provedor — simplificando o fluxo de trabalho e reduzindo custos com múltiplas assinaturas."
    },
    {
        "q": "Qual a diferença entre Poe, Perplexity Pro e You.com para usuários finais?",
        "a": "Poe (Quora) foca em acesso a múltiplos chatbots com bots customizáveis e criados pela comunidade. Perplexity Pro é especializado em pesquisa com citações e acesso web em tempo real, usando múltiplos modelos como backend. You.com oferece pesquisa com IA e acesso a modelos variados. Para uso criativo e comparação de modelos, Poe é o mais versátil."
    },
    {
        "q": "O que é OpenRouter e como funciona para desenvolvedores?",
        "a": "OpenRouter é uma API unificada que fornece acesso a dezenas de LLMs (GPT-4o, Claude, Llama, Mistral, Gemini e outros) com um único endpoint e chave de API. Desenvolvedores integram uma vez e mudam de modelo com um parâmetro — sem gerenciar múltiplas chaves e contratos. Preços são no pay-per-token, geralmente com taxas competitivas e acesso a modelos gratuitos."
    },
    {
        "q": "Vale a pena assinar Poe em vez de ChatGPT Plus e Claude Pro separadamente?",
        "a": "Depende do uso. Poe dá acesso a múltiplos modelos por ~US$20/mês, com créditos para GPT-4o e Claude 3.5 Sonnet. Se você usa principalmente um modelo, a assinatura direta pode oferecer mais créditos. Se você quer comparar modelos para diferentes tarefas ou quer experimentar modelos diferentes, o Poe é mais econômico e conveniente."
    },
    {
        "q": "O que é Portkey e como ajuda empresas a gerenciar múltiplas APIs de IA?",
        "a": "Portkey é uma plataforma de AI gateway que centraliza chamadas para múltiplos LLMs com fallback automático, cache de respostas, load balancing, logging completo de cada chamada (prompt + resposta + custo + latência), controle de acesso por equipe e análise de uso. É como ter um proxy inteligente que torna o stack de IA gerenciável em escala empresarial."
    },
    {
        "q": "Como funcionam os créditos e limites nos agregadores de IA como Poe?",
        "a": "Modelos mais potentes como GPT-4o e Claude 3.5 Opus consomem mais créditos por mensagem. Modelos menores como Claude Haiku ou GPT-4o mini consomem menos. O Poe renova créditos mensalmente, e créditos excedentes podem ser comprados separadamente. Na prática, para uso moderado, o pacote mensal cobre a maioria das necessidades de um profissional."
    },
    {
        "q": "Existe algum agregador de IA gratuito para testar múltiplos modelos?",
        "a": "Hugging Face Spaces tem demos gratuitas de muitos modelos open source. Ora.ai e You.com têm tiers gratuitos com acesso a múltiplos modelos com limites diários. No Brasil, o Poe tem tier gratuito com alguns modelos disponíveis. Para APIs, OpenRouter oferece acesso gratuito a modelos open source como Llama e Mistral sem cobrança."
    },
    {
        "q": "Como agregadores de IA ajudam a controlar os gastos com APIs em empresas?",
        "a": "Ferramentas como Portkey e LangFuse registram o custo exato de cada chamada de API (prompt tokens + completion tokens × preço do modelo), permitem criar alertas de gasto, definir limites por equipe ou projeto e gerar relatórios de custo por feature ou cliente. Isso transforma gastos com IA de uma linha opaca no cartão corporativo em um custo auditável e previsível."
    },
    {
        "q": "O que é AI Gateway e como diferencia de uma simples API de LLM?",
        "a": "Um AI Gateway (como Vercel AI Gateway, Portkey ou Kong AI Gateway) adiciona uma camada entre a aplicação e os provedores de IA com: roteamento inteligente entre modelos, cache semântico (respostas idênticas não chamam a API novamente), fallback automático, observabilidade completa, rate limiting e moderação de conteúdo. É infraestrutura de produção para uso de IA em escala."
    },
    {
        "q": "Quais são os melhores agregadores de IA para uso empresarial no Brasil?",
        "a": "Para APIs: OpenRouter (mais modelos, preço competitivo), Portkey (observabilidade e controle) e Vercel AI Gateway (integração nativa com Next.js). Para usuários finais: Poe Business e You.com for Teams. Para governança e compliance (incluindo LGPD), ferramentas como PrivateGPT e Ollama para deployment on-premise eliminam o envio de dados sensíveis para APIs externas."
    },
    {
        "q": "Como o cache semântico em agregadores de IA reduz custos?",
        "a": "Cache semântico armazena respostas de chamadas anteriores e as reutiliza quando um novo prompt tem significado similar — mesmo que o texto não seja idêntico. Em aplicações com prompts repetitivos (FAQs, análise de documentos padrão, geração de templates), o cache pode reduzir chamadas à API em 40% a 70%, gerando economia proporcional no custo de tokens."
    },
    {
        "q": "Devo usar um agregador de IA ou integrar diretamente com a API de cada provedor?",
        "a": "Para produção com uso sério, agregadores valem o overhead. Integrar diretamente com cada API significa gerenciar múltiplas chaves, lidar com downtime de cada provedor individualmente, implementar retry logic manual e ter zero visibilidade centralizada de custos. Agregadores resolvem tudo isso out-of-the-box e o custo adicional (geralmente baixo) é compensado pela resiliência e observabilidade."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Pacotes e Agregadores de Ferramentas de IA</h2>
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
