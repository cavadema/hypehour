import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O Visily é gratuito?",
        answer: "Existe o plano Starter, gratuito, com 300 créditos de IA por mês, 2 boards editáveis por workspace e exportações em 1x com marca d'água."
    },
    {
        question: "Quanto custa o Visily Pro?",
        answer: "US$ 14 por editor por mês, com 3.000 créditos de IA, boards e elementos ilimitados, importação e exportação com o Figma e exportação de código."
    },
    {
        question: "O Visily funciona com o Figma?",
        answer: "Há um plugin do Figma. Nos planos pagos, é possível importar e exportar com o Figma."
    },
    {
        question: "Quais pontos de partida o Visily aceita?",
        answer: "Prompts de texto, screenshots, diagramas e templates."
    },
    {
        question: "O Visily é para designers?",
        answer: "O site o apresenta como uma ferramenta para não designers, embora equipes de design também possam usá-lo para colaborar."
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
