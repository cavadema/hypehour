import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que são ferramentas de detecção de IA?",
        "a": "São sistemas que analisam textos, imagens ou áudios para identificar se foram gerados por inteligência artificial, como ChatGPT, Midjourney ou outros modelos, em vez de criados por humanos."
    },
    {
        "q": "Detecção de IA em textos funciona de forma confiável?",
        "a": "Com limitações. Ferramentas como GPTZero e Originality.AI atingem alta precisão em muitos casos, mas podem errar — especialmente com textos editados por humanos após geração ou escritos por não-nativos do inglês."
    },
    {
        "q": "Por que professores e empresas usam detectores de IA?",
        "a": "Professores usam para verificar plágio acadêmico via IA em trabalhos. Empresas usam para garantir que conteúdos publicados em seu nome foram revisados e personalizados por humanos, mantendo autenticidade."
    },
    {
        "q": "Qual a diferença entre GPTZero, Originality.AI e ZeroGPT?",
        "a": "GPTZero foi desenvolvido por estudante de Princeton e é focado no meio acadêmico. Originality.AI combina detecção de IA com verificação de plágio para uso profissional. ZeroGPT é gratuito mas menos preciso que as alternativas pagas."
    },
    {
        "q": "Textos gerados por IA e depois editados por humanos são detectáveis?",
        "a": "Quanto mais editados, mais difíceis de detectar. Uma revisão profunda que mantém apenas as ideias da IA mas reescreve completamente a linguagem e estilo torna a detecção praticamente impossível para as ferramentas atuais."
    },
    {
        "q": "É possível detectar imagens geradas por IA?",
        "a": "Sim, com ferramentas como Hive Moderation e ferramentas de detecção da Content Authenticity Initiative (CAI). Analisam artefatos digitais, padrões de ruído e inconsistências que modelos como Midjourney e DALL-E tendem a produzir."
    },
    {
        "q": "Como funciona a detecção de deepfake em vídeos?",
        "a": "Ferramentas de detecção de deepfake analisam inconsistências nos movimentos faciais, batimento de cílios, frequência cardíaca visível na pele e artefatos de compressão específicos de modelos de geração de vídeo."
    },
    {
        "q": "Ferramentas de detecção de IA funcionam em português?",
        "a": "A maioria foi treinada predominantemente em inglês, o que pode reduzir a precisão em textos portugueses. Originality.AI e algumas APIs de detecção oferecem suporte multilíngue, mas com performance inferior ao inglês."
    },
    {
        "q": "Posso usar detectores de IA para verificar meu próprio conteúdo antes de publicar?",
        "a": "Sim, é uma boa prática. Se você usa IA como base e edita, verificar antes de publicar garante que o resultado final não será flagrado como 100% artificial por plataformas ou clientes que exijam conteúdo humano."
    },
    {
        "q": "Plataformas como LinkedIn e Google penalizam conteúdo gerado por IA?",
        "a": "Google afirma que penaliza conteúdo de baixa qualidade e não útil, independentemente de ser feito por IA. LinkedIn não penaliza diretamente, mas conteúdos genéricos têm menor alcance orgânico independentemente da origem."
    },
    {
        "q": "Quanto custam as melhores ferramentas de detecção de IA?",
        "a": "ZeroGPT e Copyleaks têm planos gratuitos. Originality.AI cobra por crédito (cerca de US$0,01 por 100 palavras). GPTZero tem plano gratuito e Premium a partir de US$10/mês para uso profissional."
    },
    {
        "q": "Existe risco de falso positivo — texto humano sendo classificado como IA?",
        "a": "Sim, e é um problema real. Escritores com estilo muito objetivo e formal são frequentemente flagrados como IA. Por isso, as melhores ferramentas fornecem pontuação de probabilidade em vez de veredicto binário."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Detecção de Conteúdo Gerado por IA</h2>
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
