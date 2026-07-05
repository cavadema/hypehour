import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que são workflows de IA e como funcionam?",
        "a": "Workflows de IA são sequências automatizadas de tarefas onde modelos de linguagem e outros serviços de IA são encadeados para processar informações, tomar decisões e executar ações — como um pipeline que lê e-mails, resume, classifica e responde automaticamente."
    },
    {
        "q": "Qual a diferença entre workflow e agente de IA?",
        "a": "Workflows seguem um caminho pré-definido com etapas fixas. Agentes de IA tomam decisões dinâmicas sobre qual passo dar a seguir baseados no contexto. Workflows são mais previsíveis; agentes, mais flexíveis e autônomos."
    },
    {
        "q": "Quais ferramentas são melhores para criar workflows de IA sem código?",
        "a": "n8n, Make (Integromat) e Zapier são as mais populares para workflows visuais. Flowise e Langflow oferecem interfaces específicas para pipelines de LLM sem código. Cada uma tem pontos fortes para diferentes complexidades."
    },
    {
        "q": "Como criar um workflow de IA para processar e-mails automaticamente?",
        "a": "Configure um gatilho que monitora sua caixa de entrada, passe o conteúdo para um nó de LLM que classifica e resume, conecte a uma ação que responde, encaminha ou arquiva o e-mail conforme a classificação — tudo sem intervenção manual."
    },
    {
        "q": "Posso conectar ChatGPT ou Claude dentro de um workflow?",
        "a": "Sim. n8n, Make e Zapier têm integrações nativas com OpenAI e Anthropic. Você configura um nó de IA dentro do fluxo, passa o contexto via variáveis e usa a saída do modelo como input para os próximos passos."
    },
    {
        "q": "O que é um pipeline de RAG e como montar um?",
        "a": "RAG (Retrieval-Augmented Generation) é um workflow que primeiro busca documentos relevantes numa base vetorial e depois envia essas informações ao LLM para gerar uma resposta fundamentada. Ferramentas como Flowise e LangFlow facilitam a montagem visual desse pipeline."
    },
    {
        "q": "Workflows de IA funcionam 24 horas sem interrupção?",
        "a": "Sim. Uma vez configurados e hospedados, workflows podem ser disparados por gatilhos (novo e-mail, webhook, agendamento) e operar continuamente sem ação humana — desde que a infraestrutura e as APIs estejam disponíveis."
    },
    {
        "q": "Como monitorar erros em workflows de IA em produção?",
        "a": "Configure logs de execução, alertas por e-mail ou Slack em caso de falha, e use ferramentas como Langfuse ou LangSmith para rastrear chamadas de LLM. Monitore taxa de erro, latência e custo por execução regularmente."
    },
    {
        "q": "Workflows de IA podem processar grandes volumes de documentos?",
        "a": "Sim. Configure workflows em batch que processam fila de documentos em paralelo, respeitando os rate limits das APIs. Para volumes muito grandes, considere arquiteturas com filas (Redis, RabbitMQ) e workers paralelos."
    },
    {
        "q": "Qual o custo mensal para manter um workflow de IA em produção?",
        "a": "Depende do volume. Um workflow simples com n8n self-hosted e GPT-4o Mini pode custar menos de R$50/mês. Workflows com alto volume de processamento e modelos premium podem chegar a centenas de dólares por mês."
    },
    {
        "q": "Como testar um workflow de IA antes de colocar em produção?",
        "a": "Use ambientes de staging com dados simulados, defina casos de teste para cenários de sucesso e falha, implemente timeouts e fallbacks, e faça rollout gradual monitorando métricas antes de migrar todo o tráfego."
    },
    {
        "q": "Workflows de IA podem ser versionados e gerenciados como código?",
        "a": "Sim. n8n exporta workflows em JSON que podem ser versionados no Git. Plataformas como Langflow e Flowise também permitem exportação. Para times de desenvolvimento, tratar workflows como código facilita colaboração e rollback."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Fluxos e Workflows de IA</h2>
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
