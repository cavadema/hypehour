import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O Google AI Studio é gratuito?",
        answer: "O uso básico é gratuito, com limites de taxa. O uso da API em produção é cobrado por tokens."
    },
    {
        question: "O que é o modo Build?",
        answer: "É o recurso de vibe coding do AI Studio: você descreve o app em linguagem natural, ajusta pelo chat e pode editar o código."
    },
    {
        question: "Preciso saber programar?",
        answer: "Não para começar, já que o Build gera o app a partir de texto. Para ajustes finos, saber ler código ajuda."
    },
    {
        question: "Meus dados são usados para treinar modelos?",
        answer: "A documentação do Google indica que no uso gratuito o conteúdo pode ser usado para melhorar os modelos. Evite dados sensíveis e leia os termos."
    },
    {
        question: "Qual a diferença para outras ferramentas de vibe coding?",
        answer: "O AI Studio é focado em prototipagem com os modelos Gemini; outras ferramentas oferecem hospedagem e fluxos próprios para publicar apps."
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
