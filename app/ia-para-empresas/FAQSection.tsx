import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como empresas estão usando IA para aumentar produtividade?",
        "a": "As aplicações mais comuns incluem automação de tarefas administrativas, atendimento ao cliente com chatbots, análise preditiva de dados, geração de conteúdo de marketing, triagem de currículos e assistentes para equipes de vendas e suporte."
    },
    {
        "q": "Por onde uma empresa deve começar ao adotar IA?",
        "a": "Identifique os processos com maior volume de tarefas repetitivas e menor necessidade de julgamento humano. Comece com um projeto piloto de baixo risco, meça os resultados e expanda gradualmente — evite tentar transformar tudo de uma vez."
    },
    {
        "q": "Qual o ROI médio de adotar IA em uma empresa?",
        "a": "Segundo estudos da McKinsey, empresas que adotam IA estrategicamente relatam ganhos de produtividade de 20 a 40% nas funções automatizadas. O ROI varia muito por setor e caso de uso — automação de atendimento e análise de dados tendem a ter retorno mais rápido."
    },
    {
        "q": "IA para empresas é acessível para PMEs brasileiras?",
        "a": "Sim. Ferramentas como ChatGPT Teams, Copilot para Microsoft 365 e soluções de automação como n8n têm preços acessíveis. Muitas PMEs brasileiras já usam IA pagando menos de R$200/mês com impacto significativo na produtividade."
    },
    {
        "q": "Como proteger dados corporativos ao usar ferramentas de IA?",
        "a": "Use planos enterprise com acordos de não uso de dados para treinamento (OpenAI Enterprise, Claude for Work). Para dados altamente sensíveis, avalie modelos open source rodando na própria infraestrutura da empresa."
    },
    {
        "q": "IA pode ajudar na tomada de decisão estratégica?",
        "a": "Sim. IA analisa grandes volumes de dados de mercado, tendências e métricas internas para gerar insights que suportam decisões — mas o julgamento final, a visão de longo prazo e a responsabilidade continuam sendo humanos."
    },
    {
        "q": "Como implementar IA no RH de uma empresa?",
        "a": "Triagem automática de currículos, chatbot de onboarding, análise de engajamento de colaboradores, previsão de turnover e personalização de treinamentos são as aplicações de IA mais adotadas por RHs corporativos."
    },
    {
        "q": "Existe regulamentação sobre uso de IA por empresas no Brasil?",
        "a": "O Brasil ainda debate o Marco Legal da IA. Já existem obrigações da LGPD que se aplicam ao uso de IA com dados pessoais. Setores regulados como saúde e financeiro têm regras adicionais sobre uso de sistemas automatizados de decisão."
    },
    {
        "q": "Como treinar a equipe de uma empresa para usar IA?",
        "a": "Comece com workshops práticos focados nas ferramentas mais relevantes para cada função. Identifique champions internos que aprendem rápido e disseminam o conhecimento. Crie biblioteca de prompts e cases internos de sucesso para motivar a adoção."
    },
    {
        "q": "IA pode ajudar na criação de contratos e documentos jurídicos empresariais?",
        "a": "Sim, como suporte. Ferramentas como Harvey AI e IA integrada ao Word geram rascunhos de contratos e identificam cláusulas problemáticas. A revisão e responsabilidade final continuam com o advogado da empresa."
    },
    {
        "q": "Como medir o sucesso da implementação de IA em uma empresa?",
        "a": "Defina KPIs claros antes de começar: tempo economizado por tarefa, taxa de resolução automática, redução de erros, custo por processo. Compare com baseline pré-IA e estabeleça revisões mensais para ajustar a estratégia."
    },
    {
        "q": "Quais erros as empresas cometem ao adotar IA?",
        "a": "Os mais comuns são: adotar IA sem problema claro para resolver, não envolver os colaboradores no processo, ignorar a qualidade dos dados de entrada e esperar resultados perfeitos sem ciclo de ajuste e melhoria contínua."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Empresas</h2>
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
