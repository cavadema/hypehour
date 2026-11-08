import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O Cutout.Pro é gratuito?",
        answer: "A página de preços informa 5 créditos gratuitos e pré-visualização sem pagar. O download em alta resolução usa créditos."
    },
    {
        question: "O que o Cutout.Pro faz?",
        answer: "Remove fundos, melhora e amplia fotos, remove objetos, gera retratos e vídeos, entre outros recursos."
    },
    {
        question: "Funciona para fotos de produtos?",
        answer: "Sim. A plataforma tem recursos voltados a e-commerce, como imagens de produtos e modelos virtuais, além de plugin para Shopify."
    },
    {
        question: "Tem API?",
        answer: "Sim. A API usa o mesmo saldo de créditos da versão web."
    },
    {
        question: "Funciona no celular?",
        answer: "O site informa aplicativos para desktop e celular, além da versão web."
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
