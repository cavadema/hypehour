import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O Banani é gratuito?",
        answer: "Sim, existe o plano Free, com 12 créditos mensais e 3 créditos diários, sem prazo de validade e sem exigir cartão de crédito."
    },
    {
        question: "Quanto custam os planos pagos?",
        answer: "O Plus custa US$ 12 por mês na cobrança anual (US$ 20 na mensal) e o Pro custa US$ 30 por mês na anual (US$ 50 na mensal). O Enterprise é sob consulta."
    },
    {
        question: "Posso exportar para o Figma?",
        answer: "Sim. É possível colar o design no Figma. A exportação ilimitada para o Figma faz parte do plano Plus."
    },
    {
        question: "O Banani exporta código?",
        answer: "O site cita exportação em HTML e CSS, e o plano Plus inclui exportação de código via MCP."
    },
    {
        question: "Dá para gerar a partir de uma screenshot?",
        answer: "Sim. A ferramenta cria interfaces a partir de um prompt de texto ou de uma imagem de referência."
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
