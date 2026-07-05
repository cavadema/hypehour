import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que é um gerador de voz com IA?",
        "a": "É uma tecnologia de Text-to-Speech (TTS) avançada que converte texto em áudio com vozes sintéticas de qualidade próxima à humana, ou clona vozes reais para narrar conteúdo com a voz de uma pessoa específica."
    },
    {
        "q": "Qual a diferença entre TTS tradicional e gerador de voz com IA?",
        "a": "TTS tradicional soa robótico e monótono. Geradores de voz com IA como ElevenLabs capturam entonação, emoção, pausas naturais e sotaques, produzindo áudio indistinguível de locutores humanos profissionais."
    },
    {
        "q": "Como funciona a clonagem de voz com IA?",
        "a": "A clonagem de voz analisa uma amostra de áudio de 1 a 10 minutos de uma pessoa e cria um modelo que replica as características únicas de sua voz — timbre, ritmo, dicção — para gerar novos áudios com esse perfil vocal."
    },
    {
        "q": "Quais os melhores geradores de voz com IA em português brasileiro?",
        "a": "ElevenLabs tem excelente qualidade em português com vozes brasileiras nativas. Luvvoice, Speechify e Azure Neural TTS da Microsoft também oferecem opções de qualidade para português do Brasil."
    },
    {
        "q": "É legal clonar a voz de alguém com IA?",
        "a": "Clonar sua própria voz ou vozes com permissão explícita é legal. Clonar a voz de terceiros sem consentimento para criar conteúdo falso configura violação de direito de imagem e pode ser crime em muitas jurisdições."
    },
    {
        "q": "Geradores de voz com IA substituem locutores profissionais?",
        "a": "Para volumes altos de conteúdo como audiobooks, e-learnings e narração de vídeos, a IA já é muito mais econômica. Locutores humanos mantêm vantagem em campanhas publicitárias premium, podcasts com personalidade e conteúdo emocional de alto impacto."
    },
    {
        "q": "Quanto custa usar o ElevenLabs para gerar voz em português?",
        "a": "O plano gratuito inclui 10.000 caracteres por mês. O plano Starter custa US$5/mês com 30.000 caracteres. Para produção profissional com clonagem de voz, os planos Creator (US$22/mês) e acima são mais adequados."
    },
    {
        "q": "Dá para usar voz gerada por IA em vídeos do YouTube sem ser penalizado?",
        "a": "O YouTube não penaliza o uso de TTS por IA, mas exige que você marque conteúdos realistas gerados por IA. Vozes sintéticas claramente identificáveis geralmente não precisam de marcação especial."
    },
    {
        "q": "Como usar IA para criar audiobooks em português?",
        "a": "Ferramentas como ElevenLabs e Speechify permitem enviar o texto completo do livro, escolher ou clonar uma voz narradora e gerar o áudio em segmentos. O processo que levaria dias de gravação profissional é feito em horas."
    },
    {
        "q": "Geradores de voz com IA conseguem expressar emoções?",
        "a": "Os mais avançados, sim. ElevenLabs permite configurar estabilidade, similaridade e exagero de estilo vocal, resultando em narrações que transmitem alegria, seriedade, entusiasmo ou urgência de forma convincente."
    },
    {
        "q": "É possível criar um podcast com vozes totalmente geradas por IA?",
        "a": "Sim, e muitos criadores já fazem isso. Você escreve o roteiro, gera o áudio com IA para cada locutor, edita no Descript ou Audacity e distribui normalmente. O custo é uma fração de um estúdio de gravação."
    },
    {
        "q": "Como evitar que minha voz clonada seja usada indevidamente?",
        "a": "Guarde suas amostras de áudio com segurança, use apenas plataformas confiáveis com políticas rígidas de uso e esteja ciente de que, uma vez no mercado, é difícil controlar completamente como modelos de voz são usados."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Geradores de Voz com IA</h2>
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
