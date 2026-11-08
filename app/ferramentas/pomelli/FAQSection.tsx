import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Pomelli?",
        answer: "É uma ferramenta do Google Labs que cria conteúdo e campanhas de marketing alinhados à identidade da sua marca."
    },
    {
        question: "O que é o Business DNA?",
        answer: "É o perfil de marca que o Pomelli monta a partir do site e das imagens da empresa, com cores, fontes, valores e tom de voz."
    },
    {
        question: "O Pomelli é gratuito?",
        answer: "Fontes públicas indicam uso gratuito na fase beta. O site oficial consultado não apresenta planos ou preços."
    },
    {
        question: "Está disponível no Brasil?",
        answer: "A disponibilidade por país pode variar. Confirme no site oficial."
    },
    {
        question: "Que tipo de conteúdo ele gera?",
        answer: "Peças editáveis para site, redes sociais e anúncios, e, segundo as fontes consultadas, também catálogo de produtos, ensaio fotográfico, animações e sites."
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
