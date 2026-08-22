import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que são LLMs (Large Language Models)?",
        "a": "LLMs são modelos de inteligência artificial treinados em enormes volumes de texto para entender e gerar linguagem humana. São a tecnologia por trás do ChatGPT, Claude, Gemini e outros assistentes de IA modernos."
    },
    {
        "q": "Qual a diferença entre GPT-5.5, Claude Opus 5 e Gemini 3.5?",
        "a": "GPT-5.5 tem a maior versatilidade e ecossistema de integrações. Claude Opus 5 se destaca em raciocínio profundo, textos longos e contexto de 1M tokens. Gemini 3.5 tem forte integração com o Google Workspace e desempenho multimodal nativo."
    },
    {
        "q": "O que significa o número de parâmetros de um LLM?",
        "a": "Parâmetros são os valores ajustáveis do modelo durante o treinamento — quanto mais parâmetros, maior a capacidade de capturar padrões complexos. Um modelo de 70B parâmetros geralmente é mais capaz que um de 7B, mas também exige muito mais hardware."
    },
    {
        "q": "Quais os melhores LLMs open source disponíveis em 2026?",
        "a": "Llama 4 Maverick (Meta), Mistral Medium 3.5, Qwen 3.8 (Alibaba) e DeepSeek V4 são os líderes em código aberto. Muitos rivalizam com modelos proprietários em tarefas específicas, com a vantagem de poder rodar localmente ou on-premise."
    },
    {
        "q": "O que é a janela de contexto de um LLM e por que importa?",
        "a": "É a quantidade máxima de texto que o modelo processa em uma única interação. Uma janela de 128k tokens permite analisar documentos inteiros; 1M tokens (Gemini) permite processar livros completos ou grandes bases de código de uma vez."
    },
    {
        "q": "O que é fine-tuning de LLMs e quando faz sentido?",
        "a": "Fine-tuning é adaptar um modelo pré-treinado com seus próprios dados para melhorar performance em tarefas específicas do seu domínio. Faz sentido quando RAG não é suficiente e você precisa que o modelo internalize estilo, terminologia ou conhecimento proprietário."
    },
    {
        "q": "Como comparar o custo de diferentes APIs de LLM?",
        "a": "O custo é medido em dólares por milhão de tokens. Modelos compactos como GPT-4o Mini e Claude Haiku são os mais baratos para alto volume. Modelos flagship como GPT-5.5 e Claude Opus 5 custam mais mas entregam qualidade superior em tarefas complexas."
    },
    {
        "q": "O que é RLHF e por que é importante nos LLMs modernos?",
        "a": "RLHF (Reinforcement Learning from Human Feedback) é a técnica que alinha LLMs para serem úteis, inofensivos e honestos — humanos avaliam as respostas e esse feedback treina o modelo para preferir outputs mais alinhados às expectativas humanas."
    },
    {
        "q": "Como rodar LLMs localmente no meu computador?",
        "a": "Ollama é a ferramenta mais fácil para rodar LLMs como Llama 4, Mistral e Qwen localmente. Você precisa de uma GPU com pelo menos 8GB de VRAM para modelos menores. LM Studio oferece interface gráfica para quem prefere não usar terminal."
    },
    {
        "q": "O que são modelos multimodais e quais suportam imagens e áudio?",
        "a": "Modelos multimodais processam texto junto com imagens, áudio ou vídeo. GPT-5.5, Claude Opus 5 e Gemini 3.5 são multimodais — aceitam imagens como input. Gemini tem melhor suporte nativo a áudio e vídeo longo."
    },
    {
        "q": "Qual LLM tem melhor performance em português brasileiro?",
        "a": "GPT-5.5, Claude Opus 5 e Gemini 3.5 têm excelente desempenho em português. Entre os open source, Mistral Medium 3.5 e Qwen 3.8 performam bem em português. Sabiá (da Maritaca AI) é especificamente treinado para o contexto brasileiro."
    },
    {
        "q": "O que são modelos de raciocínio (reasoning models) como o1 da OpenAI?",
        "a": "São LLMs que 'pensam antes de responder' — executam uma cadeia de raciocínio interna antes de produzir o output. São mais lentos e caros, mas significativamente mais precisos em matemática, lógica, programação e problemas complexos de múltiplos passos."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Modelos de LLM</h2>
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
