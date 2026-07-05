import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA está transformando as vendas B2B e B2C?",
        "a": "A IA automatiza prospecção, qualificação de leads, personalização de e-mails, previsão de receita, coaching de vendedores e análise de chamadas — permitindo que equipes comerciais foquem em conversas de alto valor em vez de tarefas administrativas."
    },
    {
        "q": "Quais ferramentas de IA são mais úteis para times de vendas?",
        "a": "Clay para enriquecimento de leads, Gong para análise de chamadas de vendas, Outreach com IA para sequências, HubSpot AI para CRM inteligente, Apollo para prospecção, e ChatGPT para personalização de propostas em escala."
    },
    {
        "q": "Como usar IA para prospectar clientes de forma mais eficiente?",
        "a": "Ferramentas como Apollo e Clay combinam dados de empresas, cargos, tecnologias usadas e sinais de intenção de compra para identificar e priorizar automaticamente os prospects com maior fit e probabilidade de conversão."
    },
    {
        "q": "IA pode escrever e-mails de vendas personalizados em escala?",
        "a": "Sim. Ferramentas como Lemlist, Apollo e Instantly usam IA para personalizar cada e-mail com informações específicas do prospect (cargo, empresa, setor, notícia recente) — aumentando taxas de resposta sem trabalho manual por contato."
    },
    {
        "q": "O que é análise de chamada de vendas com IA?",
        "a": "Ferramentas como Gong, Chorus e Clari.io gravam e transcrevem chamadas de vendas, identificam objeções mais comuns, analisam o tempo de fala de cada pessoa, detectam palavras-gatilho e comparam padrões de conversas que converteram versus as que não converteram."
    },
    {
        "q": "Como IA ajuda na previsão de receita (sales forecast)?",
        "a": "Modelos de IA analisam o pipeline atual, histórico de conversão por etapa, sazonalidade e comportamento do vendedor para gerar previsões de fechamento muito mais precisas do que estimativas subjetivas — reduzindo surpresas no fechamento do mês."
    },
    {
        "q": "IA pode criar propostas comerciais personalizadas automaticamente?",
        "a": "Sim. Com Claude ou ChatGPT, defina um template base e automatize a geração de propostas customizadas para cada cliente — incorporando dados da empresa, dores específicas identificadas na prospecção e argumentos de valor alinhados ao contexto de cada negociação."
    },
    {
        "q": "Como usar IA para treinar novos vendedores mais rapidamente?",
        "a": "Ferramentas de role-play com IA simulam clientes com diferentes objeções para que novos vendedores pratiquem antes de falar com prospects reais. Análise de chamadas com IA fornece feedback específico sobre o que cada vendedor precisa melhorar."
    },
    {
        "q": "IA pode identificar o melhor momento para entrar em contato com um cliente?",
        "a": "Sim. Sistemas de sales intelligence rastreiam sinais de intenção como visitas ao site, abertura de e-mails, mudanças de cargo, novos financiamentos ou expansões de equipe — alertando o vendedor quando o prospect está mais propenso à conversa."
    },
    {
        "q": "Como usar IA para reduzir churn e aumentar retenção de clientes?",
        "a": "Modelos de IA analisam padrões de uso do produto, frequência de acesso, volume de chamados de suporte e outros sinais para identificar clientes em risco. O time de CS é alertado para agir proativamente antes que o cliente decida não renovar."
    },
    {
        "q": "IA no WhatsApp pode ajudar em vendas para pequenas empresas?",
        "a": "Sim. Chatbots de IA no WhatsApp Business qualificam leads automaticamente, tiram dúvidas de produto, enviam propostas e agendam reuniões — funcionando 24 horas e escalando o atendimento comercial sem contratar mais vendedores."
    },
    {
        "q": "Qual o ROI típico de implementar IA nas vendas?",
        "a": "Empresas que adotam IA em vendas reportam aumento de 10 a 30% na taxa de conversão, redução de 20 a 40% no ciclo de vendas e ganho de 2 a 5 horas semanais por vendedor em tarefas administrativas automatizadas — com retorno geralmente em 3 a 6 meses."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Vendas</h2>
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
