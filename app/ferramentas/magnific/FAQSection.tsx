import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que o Magnific faz?",
        answer: "Amplia e melhora imagens com IA, reconstruindo detalhes em alta resolução, e também gera imagens e vídeos."
    },
    {
        question: "O Magnific é a antiga Freepik?",
        answer: "Segundo reportagens, a Freepik passou a usar a marca Magnific em 2026, e o endereço antigo redireciona para o novo."
    },
    {
        question: "O Magnific é gratuito?",
        answer: "A plataforma é vendida por assinatura. Confirme no site se há alguma opção de teste disponível na sua região."
    },
    {
        question: "Quanto custa o Magnific?",
        answer: "Há planos Premium, Premium+, Pro, Business e Enterprise, com valores que variam por região e promoção. Veja os preços atuais no site."
    },
    {
        question: "Serve para imprimir fotos antigas?",
        answer: "Pode ajudar a aumentar a resolução e reconstruir detalhes, mas revise o resultado, pois a IA pode alterar partes da imagem."
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
