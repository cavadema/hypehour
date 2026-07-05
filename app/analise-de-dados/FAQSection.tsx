import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que são ferramentas de IA para análise de dados?",
        "a": "São plataformas que utilizam inteligência artificial para processar, visualizar e interpretar grandes volumes de dados automaticamente, gerando insights sem necessidade de programação avançada."
    },
    {
        "q": "Qual a diferença entre BI tradicional e análise de dados com IA?",
        "a": "O BI tradicional exibe dados históricos em dashboards estáticos. A IA vai além: identifica padrões ocultos, faz previsões e gera recomendações acionáveis de forma automática."
    },
    {
        "q": "Preciso saber Python ou SQL para usar IA na análise de dados?",
        "a": "Não necessariamente. Ferramentas como Julius AI e ChatCSV permitem fazer perguntas em linguagem natural e receber análises completas sem escrever uma linha de código."
    },
    {
        "q": "Quais tipos de dados essas ferramentas conseguem analisar?",
        "a": "A maioria suporta planilhas Excel/CSV, bancos de dados SQL, dados de APIs, PDFs com tabelas e até imagens com informações numéricas."
    },
    {
        "q": "Como a IA detecta anomalias em conjuntos de dados?",
        "a": "Ela usa algoritmos de detecção de outliers para identificar valores atípicos automaticamente, alertando sobre fraudes, falhas de equipamento ou comportamentos incomuns de clientes."
    },
    {
        "q": "Ferramentas de análise de dados com IA funcionam em tempo real?",
        "a": "Algumas sim, como as integradas ao Grafana ou Apache Kafka, que analisam streams de dados ao vivo e disparam alertas instantâneos quando detectam padrões relevantes."
    },
    {
        "q": "É possível criar previsões de vendas com IA?",
        "a": "Sim. Modelos de machine learning como regressão e séries temporais conseguem prever tendências de vendas, demanda e receita com base em dados históricos."
    },
    {
        "q": "Qual o melhor assistente de IA para análise de dados em 2026?",
        "a": "Julius AI, ChatGPT com Code Interpreter e Noteable são opções líderes para análise conversacional de dados, cada uma com pontos fortes para diferentes casos de uso."
    },
    {
        "q": "As ferramentas de IA para dados são seguras para informações sensíveis?",
        "a": "Depende da plataforma. Para dados corporativos sensíveis, prefira soluções on-premise ou com criptografia ponta a ponta e conformidade com LGPD/GDPR."
    },
    {
        "q": "Quanto custa uma ferramenta de IA para análise de dados?",
        "a": "Há opções gratuitas como Google Colab com bibliotecas Python, planos intermediários de R$100 a R$500/mês e soluções enterprise com preços sob demanda."
    },
    {
        "q": "É possível integrar essas ferramentas com Google Sheets ou Excel?",
        "a": "Sim, a maioria oferece integração nativa ou via plugins com Google Sheets, Excel e Power BI, tornando a análise acessível dentro das ferramentas já usadas pela equipe."
    },
    {
        "q": "Como a IA pode ajudar analistas de dados a serem mais produtivos?",
        "a": "Automatizando a limpeza de dados, geração de relatórios e criação de visualizações, o analista pode focar em interpretar e agir sobre os insights gerados."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Análise de Dados com IA</h2>
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
