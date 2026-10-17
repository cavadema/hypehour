import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O Uizard é gratuito?",
        answer: "Existe um plano Free, com 2 projetos, 3 gerações de IA por mês, 10 templates e até 5 telas por projeto. Os planos pagos começam em US$ 12 por mês, cobrados anualmente (Pro)."
    },
    {
        question: "O que o Autodesigner faz?",
        answer: "Gera protótipos editáveis de várias telas a partir de um texto e permite modificar componentes descrevendo a alteração desejada."
    },
    {
        question: "Dá para transformar uma screenshot em design editável?",
        answer: "Sim. O Screenshot Scanner converte screenshots em mockups editáveis e o Wireframe Scanner transforma esboços feitos à mão em designs digitais."
    },
    {
        question: "O Uizard entrega código para desenvolvedores?",
        answer: "Os planos pagos, a partir do Pro, incluem handoff para desenvolvedores em React e CSS."
    },
    {
        question: "O Uizard funciona em português?",
        answer: "O site consultado não informa suporte a idiomas. Teste a interface no plano gratuito antes de adotar na equipe."
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
