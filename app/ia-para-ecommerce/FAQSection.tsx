import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA pode ajudar uma loja virtual?",
        "a": "A IA atua em várias frentes: criação da loja a partir de uma descrição (Genstore, Native Commerce), busca e recomendação de produtos (Luigi's Box, Salesforce Commerce AI), atendimento no WhatsApp e no Instagram (Nuvem Chat) e análise de vendas, estoque e clientes (Prax, Toca)."
    },
    {
        "q": "Existe IA brasileira para ecommerce?",
        "a": "Sim. Toca, Prax, Estoca e Selia são iniciativas brasileiras listadas nesta página. O Nuvem Chat e o Eupresa IA também são voltados ao mercado brasileiro e funcionam em português."
    },
    {
        "q": "Dá para usar IA sem trocar de plataforma de ecommerce?",
        "a": "Em muitos casos, sim. O Nuvem Chat funciona dentro da Nuvemshop, a Toca se integra a VTEX, Mercado Livre e Google Ads e a Prax se integra a Shopify, VTEX e outras ferramentas. Confirme as integrações no site de cada ferramenta antes de contratar."
    },
    {
        "q": "O que é orquestração de pagamentos?",
        "a": "É conectar a loja a vários gateways, processadores e provedores antifraude por uma única integração. O Spreedly oferece essa camada, com cofre de tokens e roteamento de transações, o que permite trocar ou combinar provedores sem refazer a integração."
    },
    {
        "q": "Como a IA melhora a busca dentro da loja?",
        "a": "Soluções como o Luigi's Box combinam busca, recomendações, listagem de produtos, assistente de compras e agente conversacional, ajudando o cliente a encontrar produtos mesmo quando não sabe o nome exato do que procura."
    },
    {
        "q": "Preciso de conhecimento técnico para começar uma loja com IA?",
        "a": "Construtores como Genstore e Native Commerce partem de uma descrição do negócio e entregam uma loja editável. Mesmo assim, é importante revisar produtos, preços, prazos e políticas antes de publicar."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Ecommerce</h2>
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
