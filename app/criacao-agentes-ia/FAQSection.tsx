import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que é um agente de IA?",
        "a": "Um agente de IA é um sistema autônomo que usa um modelo de linguagem como cérebro para planejar, tomar decisões e executar ações em sequência — como pesquisar na web, escrever código, enviar e-mails ou consultar bancos de dados para atingir um objetivo."
    },
    {
        "q": "Qual a diferença entre um chatbot e um agente de IA?",
        "a": "Chatbots respondem perguntas em um turno de conversa. Agentes de IA executam tarefas multi-passo de forma autônoma, usando ferramentas externas, tomando decisões e ajustando o plano conforme os resultados intermediários."
    },
    {
        "q": "O que é CrewAI e para que serve?",
        "a": "CrewAI é um framework Python para criar times de agentes de IA que colaboram entre si. Você define diferentes agentes com papéis específicos (pesquisador, escritor, revisor) e eles trabalham juntos para completar tarefas complexas."
    },
    {
        "q": "LangChain ainda é relevante em 2026?",
        "a": "Sim, LangChain continua sendo amplamente usado como framework base para construir agentes e pipelines de LLM. Concorre com LlamaIndex para RAG e com CrewAI para agentes multi-agente, cada um com pontos fortes distintos."
    },
    {
        "q": "Preciso ser programador para criar agentes de IA?",
        "a": "Para frameworks como CrewAI e LangChain, é necessário Python básico a intermediário. Existem alternativas no-code como Flowise (interface visual para LangChain) e n8n com módulos de agentes que não exigem código."
    },
    {
        "q": "Quanto custa rodar um agente de IA em produção?",
        "a": "Depende do modelo e da frequência de execução. Com GPT-4o Mini ou Claude Haiku (modelos mais baratos), tarefas simples custam frações de centavo. Para agentes complexos com muitos passos e contexto longo, avalie o custo por execução antes de escalar."
    },
    {
        "q": "O que é RAG e por que é importante para agentes de IA?",
        "a": "RAG (Retrieval-Augmented Generation) permite que agentes consultem bases de conhecimento privadas — documentos, PDFs, wikis internas — antes de gerar respostas, tornando-os especializados no domínio da sua empresa."
    },
    {
        "q": "Agentes de IA podem ser usados em empresas brasileiras com segurança?",
        "a": "Sim, com as devidas precauções. Use modelos on-premise ou com acordos de privacidade enterprise, defina limites de permissões do agente e mantenha auditoria de todas as ações executadas automaticamente."
    },
    {
        "q": "O que é AutoGPT e como se compara ao CrewAI?",
        "a": "AutoGPT foi um dos primeiros agentes autônomos populares, mas pecava em confiabilidade. CrewAI é mais estruturado com orquestração explícita de múltiplos agentes especializados, sendo mais previsível para uso em produção."
    },
    {
        "q": "Como criar um agente de IA para meu negócio sem contratar um desenvolvedor?",
        "a": "Plataformas como Relevance AI, Lindy e Stack AI permitem criar agentes de IA via interface visual, definindo fluxos de decisão, integrações e bases de conhecimento sem escrever código."
    },
    {
        "q": "O que são ferramentas (tools) para agentes de IA?",
        "a": "Tools são funções que o agente pode chamar para interagir com o mundo externo — busca na web, leitura de arquivos, execução de código, chamadas de API, envio de e-mails. Quanto mais tools disponíveis, mais capaz é o agente."
    },
    {
        "q": "Como avaliar se um agente de IA está funcionando corretamente?",
        "a": "Monitore taxa de sucesso das tarefas, tempo de execução, custo por execução e acurácia das saídas. Ferramentas como LangSmith e Langfuse ajudam a rastrear e avaliar o comportamento dos agentes em produção."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Criação de Agentes de IA</h2>
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
