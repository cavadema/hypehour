import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O UX Pilot é gratuito?",
        answer: "O site convida a começar a gerar gratuitamente, mas não detalha os limites do uso gratuito na página principal. Os planos pagos estão em uma página de planos separada."
    },
    {
        question: "O UX Pilot funciona com o Figma?",
        answer: "Sim. Há conexão bidirecional com o Figma, e é possível importar componentes do Figma para manter a consistência visual."
    },
    {
        question: "Dá para exportar código?",
        answer: "O site cita exportação de código limpo para desenvolvedores e sincronização de código com o GitHub."
    },
    {
        question: "Que tipos de arquivo posso usar como ponto de partida?",
        answer: "Esboços, PDFs e screenshots podem ser convertidos em layouts editáveis."
    },
    {
        question: "O UX Pilot tem site em português?",
        answer: "Sim, a página consultada está em português."
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
