import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Viggle AI?",
        answer: "Viggle AI é uma plataforma de geração de vídeos com inteligência artificial especializada em animar personagens com movimentos realistas, permitindo colocar qualquer personagem em qualquer vídeo de forma convincente."
    },
    {
        question: "Para que serve o Viggle AI?",
        answer: "O Viggle AI serve para animar personagens com movimentos específicos, criar vídeos de dança e coreografia com IA, inserir personagens em cenas de vídeo e gerar conteúdo criativo para redes sociais."
    },
    {
        question: "O Viggle AI é gratuito?",
        answer: "O Viggle AI oferece plano gratuito com acesso básico via Discord e planos pagos com mais créditos, maior resolução e recursos avançados na plataforma web."
    },
    {
        question: "Como o Viggle AI funciona?",
        answer: "Você envia uma imagem de personagem e um vídeo de referência de movimento, e o Viggle AI gera automaticamente o personagem realizando aquele movimento com física e animação realistas."
    },
    {
        question: "O Viggle AI funciona com qualquer personagem?",
        answer: "Sim. O Viggle AI funciona com fotos reais, personagens de desenho animado, avatares, mascotes e qualquer imagem com figura humana ou de personagem."
    },
    {
        question: "O Viggle AI é bom para criar vídeos de dança?",
        answer: "Sim. Uma das aplicações mais populares do Viggle AI é criar vídeos de personagens dançando, copiando os movimentos de referência com alta fidelidade."
    },
    {
        question: "O Viggle AI é para criar vídeos para TikTok?",
        answer: "Sim. Criadores de conteúdo usam amplamente o Viggle AI para gerar vídeos virais com personagens animados para TikTok, Instagram Reels e YouTube Shorts."
    },
    {
        question: "O Viggle AI mantém a identidade do personagem?",
        answer: "Sim. A tecnologia de consistência de personagem do Viggle AI preserva as características visuais originais do personagem ao longo de toda a animação."
    },
    {
        question: "O Viggle AI funciona pelo Discord?",
        answer: "Sim. O acesso inicial ao Viggle AI é feito via servidor Discord, onde é possível usar bots para gerar as animações de forma gratuita."
    },
    {
        question: "Que tipos de movimentos o Viggle AI consegue animar?",
        answer: "O Viggle AI consegue animar dança, caminhada, corrida, gestos, expressões faciais e qualquer movimento humano presente no vídeo de referência."
    },
    {
        question: "O Viggle AI é bom para marketing?",
        answer: "Sim. Marcas usam o Viggle AI para criar mascotes animados, personagens de campanhas e conteúdo visual dinâmico para redes sociais e publicidade digital."
    },
    {
        question: "O Viggle AI gera vídeos longos?",
        answer: "O Viggle AI é voltado para clipes curtos de animação de personagens, geralmente alguns segundos, ideal para conteúdo de redes sociais."
    },
    {
        question: "O Viggle AI é diferente do Runway ou Pika?",
        answer: "Sim. O Viggle AI é especializado em animação de personagens com movimentos específicos, enquanto Runway e Pika são mais voltados para geração geral de vídeos a partir de texto ou imagem."
    },
    {
        question: "O Viggle AI funciona no celular?",
        answer: "A plataforma web é acessível via navegador mobile, e o Discord também está disponível no celular para uso do bot."
    },
    {
        question: "Como começar a usar o Viggle AI?",
        answer: "Acesse o site viggle.ai, crie uma conta ou entre via Discord, envie uma imagem do personagem e o vídeo de referência de movimento, e aguarde a animação ser gerada."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    return (
        <details className="border-b border-zinc-200 last:border-0 group" open={index < 5}>
            <summary className="flex w-full items-center justify-between py-4 text-left cursor-pointer list-none focus:outline-none">
                <span className="font-medium text-black pr-8">{question}</span>
                <ChevronDownIcon
                    className="h-5 w-5 text-zinc-700 transition-transform duration-200 group-open:rotate-180"
                />
            </summary>
            <p className="text-zinc-700 leading-relaxed mb-4">{answer}</p>
        </details>
    );
}


export default function FAQSection() {
    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Viggle AI</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        index={index}
                    />
                ))}
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </div>
    );
}
