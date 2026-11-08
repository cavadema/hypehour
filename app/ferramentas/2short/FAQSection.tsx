import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O 2short.ai é gratuito?",
        answer: "Existe o plano Starter, grátis, com 30 minutos de análise de vídeo por mês. Os planos pagos começam em US$ 9,90 por mês (Lite)."
    },
    {
        question: "Como o 2short.ai escolhe os trechos?",
        answer: "A ferramenta identifica os momentos mais envolventes a partir da fala do vídeo."
    },
    {
        question: "Preciso que o vídeo tenha legendas?",
        answer: "Sim. O site informa que só processa vídeos com legendas, que o YouTube gera automaticamente para a maioria dos vídeos."
    },
    {
        question: "Os vídeos saem com marca d'água?",
        answer: "O site informa exportações em 1080p sem marca d'água."
    },
    {
        question: "Dá para usar para Reels e TikTok?",
        answer: "Sim. A ferramenta gera clipes para Shorts, TikTok e Reels, nos formatos vertical, quadrado e horizontal."
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
        <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes</h2>
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
                />
            </div>
        </section>
    );
}
