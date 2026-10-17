import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Quais são as melhores ferramentas de IA para UX?",
        "a": "UX Pilot, Banani, Uizard, Visily, Relume e Locofy estão entre as opções listadas nesta página. Elas diferem no foco: telas e fluxos, protótipos, sites de marketing ou conversão de design em código."
    },
    {
        "q": "A IA substitui o designer de UX?",
        "a": "Não. A IA acelera a geração de telas e wireframes, mas pesquisa com usuários, definição de problemas, decisões de produto e avaliação da experiência continuam dependendo de pessoas."
    },
    {
        "q": "Dá para exportar o resultado para o Figma?",
        "a": "Sim, em várias ferramentas. O UX Pilot importa e exporta para Figma, o Banani exporta para Figma ou HTML e CSS, o Visily tem plugin do Figma e o Relume exporta para Figma, Webflow ou React."
    },
    {
        "q": "Qual ferramenta é melhor para quem não é designer?",
        "a": "O Visily se apresenta como uma ferramenta para quem não é designer, gerando wireframes a partir de texto e convertendo diagramas em telas. Vale testar também o Uizard e o Banani, que partem de texto ou screenshots."
    },
    {
        "q": "Como gerar uma interface a partir de uma screenshot?",
        "a": "O Uizard tem o Screenshot Scanner e o Banani gera designs a partir de texto ou screenshots. O resultado é editável, então você ajusta o que for necessário depois."
    },
    {
        "q": "A IA consegue converter design em código?",
        "a": "Algumas ferramentas fazem isso. O Locofy é voltado a design to code, e UX Pilot e Banani oferecem exportação de código ou de HTML e CSS. Revise o código gerado antes de usar em produção."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    return (
        <details className="border-b border-gray-200 last:border-0 group" open={index < 5}>
            <summary className="flex w-full items-center justify-between py-4 text-left cursor-pointer list-none focus:outline-none">
                <span className="font-medium text-gray-900">{question}</span>
                <ChevronDownIcon
                    className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                />
            </summary>
            <p className="text-gray-600 leading-relaxed mb-4">{answer}</p>
        </details>
    );
}


export default function FAQSection() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="mt-12 mb-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para UX</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.q}
                        answer={faq.a}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
