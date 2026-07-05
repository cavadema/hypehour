import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA melhora o atendimento ao cliente?",
        "a": "A IA automatiza respostas a dúvidas frequentes, triagem de tickets, roteamento inteligente para o agente certo e personalização das interações com base no histórico do cliente — reduzindo tempo de espera e aumentando satisfação."
    },
    {
        "q": "O que é um chatbot com IA e como difere de um chatbot tradicional?",
        "a": "Chatbots tradicionais seguem fluxos fixos de perguntas e respostas pré-programadas. Chatbots com IA (baseados em LLMs) entendem linguagem natural, lidam com variações de pergunta e mantêm contexto ao longo da conversa."
    },
    {
        "q": "Quais ferramentas de IA são melhores para atendimento ao cliente?",
        "a": "Intercom com Fin AI, Zendesk AI, Freshdesk com Freddy AI e soluções customizadas com Chatbase ou Voiceflow são as mais adotadas por empresas que buscam automação inteligente no suporte ao cliente."
    },
    {
        "q": "É possível criar um chatbot de IA para WhatsApp Business?",
        "a": "Sim. Integrando a API oficial do WhatsApp Business com ferramentas como ManyChat, Typebot, n8n ou soluções customizadas com LangChain, é possível criar assistentes que respondem clientes no WhatsApp com qualidade profissional."
    },
    {
        "q": "IA de atendimento funciona em português do Brasil?",
        "a": "Sim. Os principais modelos LLM (GPT-4o, Claude, Gemini) têm excelente desempenho em português brasileiro. A maior parte das plataformas de chatbot permite configurar o assistente para responder exclusivamente em português."
    },
    {
        "q": "Como a IA ajuda no suporte técnico de nível 1?",
        "a": "A IA resolve automaticamente as dúvidas mais comuns (senha, status de pedido, procedimentos padrão), escalando apenas os casos complexos para agentes humanos — reduzindo em 40 a 70% o volume de tickets que chegam ao time técnico."
    },
    {
        "q": "Quanto custa implementar IA no atendimento ao cliente?",
        "a": "Soluções prontas como Intercom Fin custam a partir de US$0,99 por resolução. Chatbots customizados com Chatbase partem de US$19/mês. Soluções enterprise com Salesforce Service Cloud têm custo sob demanda com contratos anuais."
    },
    {
        "q": "Como treinar um chatbot de IA com o conteúdo da minha empresa?",
        "a": "Ferramentas como Chatbase, Botpress e Voiceflow permitem fazer upload de documentos, FAQs, bases de conhecimento e URLs do seu site para criar um assistente especializado no seu negócio, sem programação."
    },
    {
        "q": "IA no atendimento pode lidar com reclamações e clientes insatisfeitos?",
        "a": "Sim, com configurações adequadas. A IA identifica sentimento negativo nas mensagens e pode acionar protocolos específicos — como escalar para atendente humano sênior ou oferecer compensação pré-aprovada automaticamente."
    },
    {
        "q": "Como medir a eficácia de um chatbot de IA no atendimento?",
        "a": "Monitore taxa de resolução automática (sem escalada humana), CSAT (satisfação pós-atendimento), tempo médio de resposta e taxa de abandono. Compare com o baseline pré-IA para calcular o ROI da implementação."
    },
    {
        "q": "IA de atendimento funciona em múltiplos canais simultaneamente?",
        "a": "Sim. Plataformas como Intercom, Zendesk e soluções customizadas podem ser configuradas para atender simultaneamente no site (widget), WhatsApp, Instagram Direct, Telegram e e-mail com o mesmo assistente."
    },
    {
        "q": "Quando é necessário manter atendentes humanos no suporte com IA?",
        "a": "Para situações emocionais complexas, problemas críticos de conta, negociações comerciais, casos legais e clientes VIP que preferem atendimento humano. A IA não substitui — ela filtra e qualifica para que humanos foquem no que mais importa."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Atendimento ao Cliente</h2>
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
