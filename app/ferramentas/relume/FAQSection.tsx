import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O Relume é gratuito?",
        answer: "Há planos gratuitos nas duas linhas de produto. A biblioteca Free inclui 30 componentes Webflow e mais de 1.000 componentes Figma. O Site Builder Free tem limite de 20 envios de formulário por mês e exibe o selo do Relume."
    },
    {
        question: "O que o Relume gera a partir de um briefing?",
        answer: "Um sitemap, wireframes e um site de marketing."
    },
    {
        question: "Para onde posso exportar?",
        answer: "Figma, Webflow e React com Tailwind CSS e shadcn/ui. Também existe um servidor MCP do Relume para ferramentas de IA."
    },
    {
        question: "O Relume hospeda o site?",
        answer: "Sim, oferece publicação com domínio personalizado, SSL, CDN global e SLO de 99,99% de disponibilidade."
    },
    {
        question: "Quanto custa o Relume?",
        answer: "O Site Builder pago começa em US$ 18 por mês (Starter), e a biblioteca Pro em US$ 14 por mês. O site também mostra um código de desconto para visitantes do Brasil."
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
