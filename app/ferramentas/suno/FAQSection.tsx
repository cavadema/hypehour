import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O Suno é gratuito?",
        answer: "Existe um plano gratuito com até 10 músicas por dia. Os planos pagos (Pro e Premier) liberam mais músicas por mês e direitos comerciais."
    },
    {
        question: "O Suno cria música com letra e voz?",
        answer: "Sim. A ferramenta gera músicas completas com vocais e instrumental a partir de uma descrição ou de uma letra que você escreve."
    },
    {
        question: "Posso usar músicas do Suno comercialmente?",
        answer: "Os planos Pro e Premier incluem direitos comerciais. Confirme os termos atuais no site antes de publicar."
    },
    {
        question: "O que é o Suno Studio?",
        answer: "É um estúdio digital no navegador, disponível no plano Premier, para editar e mixar as faixas geradas."
    },
    {
        question: "É possível usar minha própria voz?",
        answer: "O recurso Voices usa uma gravação curta da sua voz para cantar qualquer letra."
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
