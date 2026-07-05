import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O Opus Clip é gratuito?",
        answer: "Sim, o Opus Clip oferece um plano gratuito com 60 minutos de processamento por mês. No entanto, os vídeos gerados no plano gratuito possuem marca d'água. Para remover a marca d'água e acessar recursos avançados, é necessário um plano pago."
    },
    {
        question: "Quais redes sociais são suportadas?",
        answer: "O Opus Clip otimiza vídeos para TikTok, YouTube Shorts, Instagram Reels, LinkedIn e Twitter. Ele ajusta automaticamente o aspecto da tela e adiciona legendas ideais para cada plataforma."
    },
    {
        question: "Como funciona o Virality Score?",
        answer: "O Virality Score é uma pontuação gerada pela IA que analisa o potencial de engajamento de um clipe. Ele considera fatores como ganchos (hooks), estrutura da fala e tendências das redes sociais para recomendar os melhores clipes."
    },
    {
        question: "O Opus Clip suporta português?",
        answer: "Sim, o Opus Clip suporta português e mais de 20 outros idiomas para transcrição automática, legendagem e detecção de palavras-chave."
    },
    {
        question: "Posso editar os clipes gerados?",
        answer: "Sim! Você pode usar a edição baseada em texto para remover partes do vídeo, alterar as legendas, trocar B-rolls e personalizar o estilo visual dos clipes diretamente no navegador."
    },
    {
        question: "O que é o ClipAnything?",
        answer: "É um recurso avançado que permite criar clipes de qualquer tipo de vídeo, mesmo aqueles sem fala, usando prompts de linguagem natural para descrever o que você deseja extrair."
    },
    {
        question: "O Opus Clip adiciona legendas automáticas?",
        answer: "Sim, ele gera legendas animadas automaticamente, com emojis integrados e destaque de palavras-chave para aumentar a retenção do espectador."
    },
    {
        question: "Posso baixar os vídeos em alta resolução?",
        answer: "Sim, nos planos pagos você pode baixar os vídeos em até 1080p sem marca d'água. O plano gratuito também suporta 1080p, mas com a marca d'água da ferramenta."
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
        <section className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre o Opus Clip</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        index={index}
                    />
                ))}
            
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
            /></div>
        </section>
    );
}
