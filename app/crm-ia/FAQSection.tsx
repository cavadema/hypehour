import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que é um CRM com IA e como funciona?",
        "a": "Um CRM com IA usa modelos de aprendizado de máquina para enriquecer automaticamente os dados de clientes, prever probabilidade de compra, sugerir próximas ações para vendedores e personalizar comunicações em escala."
    },
    {
        "q": "Qual CRM com IA é melhor para pequenas empresas brasileiras?",
        "a": "HubSpot CRM (plano gratuito robusto com IA), RD Station CRM e Pipedrive com add-ons de IA são os mais adotados no Brasil, com suporte em português e preços acessíveis para PMEs."
    },
    {
        "q": "Como a IA no CRM ajuda a aumentar as vendas?",
        "a": "A IA prioriza automaticamente os leads com maior chance de conversão, sugere o melhor momento para contato, identifica clientes em risco de churn e recomenda produtos ou serviços complementares com base no histórico."
    },
    {
        "q": "CRM com IA substitui a equipe de vendas?",
        "a": "Não. Ele potencializa a equipe ao eliminar tarefas manuais repetitivas como atualização de registros, qualificação inicial de leads e geração de relatórios, liberando os vendedores para focar nas conversas de maior valor."
    },
    {
        "q": "O que é lead scoring com IA?",
        "a": "É um sistema que atribui automaticamente uma pontuação a cada lead baseado em comportamento (páginas visitadas, e-mails abertos, demos solicitadas) e dados demográficos, indicando quais contatos merecem atenção prioritária."
    },
    {
        "q": "É possível integrar IA ao meu CRM atual?",
        "a": "Sim. Ferramentas como Clay, Amplemarket e até plugins específicos do ChatGPT se integram com Salesforce, HubSpot e Pipedrive via API, adicionando capacidades de IA sem trocar de sistema."
    },
    {
        "q": "Como a IA no CRM melhora o atendimento ao cliente?",
        "a": "Sugere respostas automáticas baseadas no histórico do cliente, identifica sentimento nas mensagens, alerta sobre clientes insatisfeitos antes que cancelem e personaliza o atendimento com base no perfil e histórico de cada pessoa."
    },
    {
        "q": "O Salesforce tem recursos de IA? O que é Einstein AI?",
        "a": "Sim. Einstein AI é a camada de inteligência artificial do Salesforce que oferece previsões de vendas, scoring de leads, recomendações de próximas ações e análise de sentimento em conversas de suporte."
    },
    {
        "q": "Como a IA ajuda na retenção de clientes (churn prevention)?",
        "a": "Modelos de IA analisam sinais de risco como queda no uso do produto, atrasos em pagamentos ou diminuição da abertura de e-mails para alertar a equipe antes que o cliente decida cancelar, permitindo intervenção proativa."
    },
    {
        "q": "CRM com IA serve para negócios B2C ou só B2B?",
        "a": "Serve para ambos. No B2B, foca em pipeline de vendas complexas e relacionamento com decisores. No B2C, é mais usado para segmentação, personalização de campanhas e retenção de clientes em escala."
    },
    {
        "q": "Quanto tempo leva para implementar um CRM com IA em uma empresa?",
        "a": "Depende da complexidade. CRMs como HubSpot podem ser configurados em dias. Implementações mais robustas com Salesforce Einstein e integração de sistemas legados podem levar de 2 a 6 meses com apoio de parceiros especializados."
    },
    {
        "q": "Como a IA gera relatórios automaticamente no CRM?",
        "a": "Ferramentas modernas permitem fazer perguntas em linguagem natural ao CRM — 'qual foi nossa taxa de conversão em maio por vendedor?' — e receber dashboards e análises gerados automaticamente sem montar relatórios manuais."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre CRM com IA</h2>
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
