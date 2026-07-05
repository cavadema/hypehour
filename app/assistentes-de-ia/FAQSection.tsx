import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Qual a diferença entre ChatGPT, Claude e Gemini?",
        "a": "ChatGPT (OpenAI) tem o maior ecossistema de plugins e GPTs personalizados; Claude (Anthropic) se destaca em textos longos e raciocínio nuançado; Gemini (Google) tem integração nativa com Gmail, Docs e YouTube. Cada um tem pontos fortes distintos."
    },
    {
        "q": "O que é um assistente de IA e como funciona?",
        "a": "Um assistente de IA é um sistema baseado em grandes modelos de linguagem (LLMs) que processa texto em linguagem natural e gera respostas contextuais. Ele aprende padrões de bilhões de textos e simula uma conversa inteligente."
    },
    {
        "q": "Assistentes de IA funcionam bem em português do Brasil?",
        "a": "Sim. ChatGPT, Claude e Gemini têm excelente desempenho em português brasileiro, compreendendo gírias, contexto cultural e expressões regionais. O desempenho caiu apenas em dialetos muito específicos ou conteúdo muito técnico e recente."
    },
    {
        "q": "Vale a pena assinar o ChatGPT Plus em 2026?",
        "a": "Depende do uso. O plano Plus dá acesso ao GPT-4o com limites maiores, geração de imagens com DALL-E e acesso antecipado a novos recursos. Para uso profissional diário, o custo de R$100/mês costuma se pagar rapidamente em produtividade."
    },
    {
        "q": "O Claude é melhor que o ChatGPT para escrever textos?",
        "a": "Para textos longos, nuançados e com tom específico, o Claude 3.5 Sonnet é frequentemente preferido por escritores e criadores de conteúdo. Para tarefas mais diversas e integração com ferramentas externas, o ChatGPT tem vantagem."
    },
    {
        "q": "Posso usar assistentes de IA para trabalho com dados confidenciais?",
        "a": "Com cautela. Evite enviar dados pessoais de clientes, segredos comerciais ou informações estratégicas para versões web de assistentes de IA. Para uso corporativo seguro, explore versões enterprise com contratos de privacidade e sem uso de dados para treinamento."
    },
    {
        "q": "O que são GPTs personalizados e como criar um?",
        "a": "GPTs são versões customizadas do ChatGPT com instruções, personalidade e conhecimento base específicos. Qualquer usuário Plus pode criar um GPT sem código, definindo como o assistente deve se comportar e quais arquivos ele pode consultar."
    },
    {
        "q": "Assistentes de IA podem acessar a internet em tempo real?",
        "a": "Sim, com limitações. ChatGPT Plus com navegação ativada, Perplexity AI e Gemini com Google Search conseguem acessar informações atualizadas da web. O Claude 3.5 por padrão não acessa a internet, mas pode ser integrado via ferramentas."
    },
    {
        "q": "Qual assistente de IA é mais barato para uso profissional?",
        "a": "O Gemini Advanced (via Google One AI Premium) e o Copilot Pro (Microsoft) são opções competitivas. Para uso via API, o GPT-4o Mini e Claude Haiku oferecem excelente custo-benefício para automações de alto volume."
    },
    {
        "q": "Assistentes de IA podem substituir um assistente pessoal humano?",
        "a": "Para tarefas como redigir e-mails, pesquisar informações, resumir documentos, organizar ideias e criar conteúdo, a IA já supera em velocidade. Para tarefas que exigem ação no mundo real (reuniões presenciais, ligações), ainda precisam de humanos."
    },
    {
        "q": "O que é memória em assistentes de IA e como funciona?",
        "a": "Memória permite que o assistente lembre de informações de conversas anteriores, como seu nome, preferências de trabalho ou contexto de projetos em andamento. O ChatGPT e Gemini já oferecem esse recurso por padrão."
    },
    {
        "q": "Qual assistente de IA é melhor para programação?",
        "a": "Claude 3.5 Sonnet e GPT-4o lideram em tarefas de programação. Para integração diretamente no editor de código, o GitHub Copilot e Cursor (baseado em Claude/GPT) são escolhas mais práticas."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Assistentes de IA</h2>
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
