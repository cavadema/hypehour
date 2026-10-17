import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que o Pixwit faz?",
        answer: "Gera vídeos e imagens com IA: texto para vídeo, imagem para vídeo, avatares, Script to Video, Video Extend e Long Video, entre outros recursos."
    },
    {
        question: "Quais modelos o Pixwit oferece?",
        answer: "O site lista modelos como Seedance e Runway, entre outros. A lista muda com o tempo; confira a página atual."
    },
    {
        question: "O Pixwit é gratuito?",
        answer: "As páginas consultadas não informam créditos gratuitos nem preços. Confirme no site oficial."
    },
    {
        question: "Qual a duração dos vídeos?",
        answer: "Os exemplos mostram clipes de 5 a 8 segundos, e o Seedance 2.5 aparece com duração de até 30 segundos."
    },
    {
        question: "O Pixwit tem plano para equipes?",
        answer: "O site cita um plano Business para equipes de 2 a 9 pessoas, com créditos compartilhados e cobrança de equipe."
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
