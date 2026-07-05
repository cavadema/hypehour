import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Quais são os repositórios de IA open source mais importantes no GitHub?",
        "a": "LLaMA (Meta), Mistral, Stable Diffusion, LangChain, Transformers (Hugging Face), AutoGPT, CrewAI, Ollama, Whisper (OpenAI) e Open Interpreter estão entre os mais populares e influentes do ecossistema de IA open source."
    },
    {
        "q": "Como encontrar repositórios de IA relevantes no GitHub?",
        "a": "Use os filtros de linguagem (Python), tópicos (machine-learning, llm, generative-ai), filtre por stars e atividade recente. A seção Trending do GitHub mostra projetos em alta. Awesome Lists compiladas pela comunidade também são referências excelentes."
    },
    {
        "q": "O que é Hugging Face e como se relaciona com o GitHub de IA?",
        "a": "Hugging Face é o principal hub de modelos open source de IA — similar a um GitHub especializado em ML, onde modelos, datasets e espaços de demo são compartilhados. A maioria dos projetos open source publica modelos no Hugging Face e código no GitHub."
    },
    {
        "q": "Como contribuir para projetos de IA open source no GitHub?",
        "a": "Comece com issues marcadas como 'good first issue' ou 'help wanted'. Contribuições de documentação em português também são muito valorizadas em projetos internacionais. Teste features, reporte bugs e participe das discussões nas issues."
    },
    {
        "q": "Quais repositórios de IA são mais fáceis para iniciantes?",
        "a": "Ollama (rodar LLMs localmente com poucos comandos), LM Studio (interface gráfica para modelos locais), GPT4All e ferramentas como Flowise (LangChain com interface visual) têm documentação mais acessível para iniciantes."
    },
    {
        "q": "Como rodar modelos de IA localmente usando repositórios do GitHub?",
        "a": "Ollama é a opção mais simples — instale e rode 'ollama run llama3' no terminal. Para mais controle, Automatic1111 e ComfyUI para imagens, ou LM Studio com interface gráfica para LLMs. A maioria tem documentação de instalação detalhada."
    },
    {
        "q": "Repositórios de IA open source são seguros para usar em produção?",
        "a": "Avalie maturidade (número de stars, commits recentes, issues abertas e resolvidas), atitude dos mantenedores com problemas de segurança e se tem licença compatível com uso comercial. Projetos com alta atividade e comunidade grande tendem a ser mais confiáveis."
    },
    {
        "q": "Qual a diferença entre Apache 2.0, MIT e GPL em licenças de repositórios de IA?",
        "a": "MIT e Apache 2.0 permitem uso comercial com poucas restrições — Apache 2.0 adiciona cláusula de patentes. GPL exige que obras derivadas sejam também open source, o que pode impedir uso em produtos comerciais fechados. Verifique antes de usar."
    },
    {
        "q": "Como acompanhar repositórios de IA sem ficar sobrecarregado?",
        "a": "Use a função Watch seletivamente para os projetos que você usa, assine newsletters como Import AI e TLDR AI para destaques semanais, e monitore apenas as tags de release em vez de todos os commits dos projetos mais ativos."
    },
    {
        "q": "Existe comunidade brasileira de IA open source no GitHub?",
        "a": "Sim. A organização Maritaca AI (criadora do Sabiá, primeiro LLM focado no português brasileiro) está no GitHub. Grupos como ML Brasil e iniciativas de pesquisa em universidades federais também mantêm repositórios relevantes."
    },
    {
        "q": "Como usar GitHub Copilot para contribuir mais facilmente com projetos de IA?",
        "a": "Copilot ajuda a entender bases de código grandes (clique num arquivo e peça explicação), gera testes para o código que você está adicionando e sugere implementações consistentes com o estilo do projeto — reduzindo a curva de entrada em novos repositórios."
    },
    {
        "q": "Quais awesome lists do GitHub são referências para IA?",
        "a": "Awesome Machine Learning, Awesome Deep Learning, Awesome LLM, Awesome ChatGPT Prompts e Awesome MLOps são listas curadas com centenas de recursos organizados por categoria — excelentes pontos de partida para explorar o ecossistema."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Repositórios de IA no GitHub</h2>
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
