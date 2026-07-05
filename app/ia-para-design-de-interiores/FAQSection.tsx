import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA pode ajudar no design de interiores?",
        "a": "A IA gera visualizações fotorrealistas de ambientes decorados a partir de fotos de cômodos vazios ou já mobiliados, simula diferentes estilos decorativos, sugere combinações de cores e layouts de mobiliário sem necessidade de renders manuais."
    },
    {
        "q": "Quais as melhores ferramentas de IA para design de interiores?",
        "a": "Collov AI, Interior AI, RoomGPT, Dzine e Planner 5D com IA são as mais populares. Collov AI se destaca por renders altamente realistas. RoomGPT é excelente para transformar rapidamente um cômodo em diferentes estilos."
    },
    {
        "q": "É possível ver como ficaria meu apartamento decorado antes de comprar os móveis?",
        "a": "Sim, exatamente para isso servem essas ferramentas. Fotografe seu cômodo, faça upload na plataforma, escolha o estilo desejado (moderno, escandinavo, industrial) e a IA mostra como ficaria com nova decoração em segundos."
    },
    {
        "q": "IA para design de interiores substitui um arquiteto de interiores?",
        "a": "Para uma visão rápida de possibilidades e exploração de estilos, a IA é excelente. Projetos completos com especificação técnica, compatibilidade estrutural, medições precisas e acompanhamento de obra ainda requerem um profissional habilitado."
    },
    {
        "q": "Ferramentas de IA para interiores funcionam com plantas baixas?",
        "a": "Algumas sim. Planner 5D e RoomSketcher com IA permitem criar ou importar plantas baixas e gerar visualizações 3D e renders automáticos do ambiente decorado com diferentes configurações de móveis."
    },
    {
        "q": "Como usar IA para escolher paleta de cores para um ambiente?",
        "a": "Descreva o ambiente, o estilo desejado e a iluminação disponível para ferramentas como ColorMind ou Adobe Color com IA, que sugerem paletas harmônicas. Também é possível pedir ao ChatGPT recomendações com justificativas de design."
    },
    {
        "q": "IA pode ajudar a decorar ambientes pequenos com aproveitamento inteligente do espaço?",
        "a": "Sim. Ferramentas de design de interiores com IA sugerem layouts que maximizam o aproveitamento de espaços pequenos, indicam móveis multifuncionais adequados e mostram visualizações de como o espaço parecerá mais amplo."
    },
    {
        "q": "Quanto custa usar ferramentas de IA para design de interiores?",
        "a": "RoomGPT tem plano gratuito com limitações. Collov AI cobra por renderizações a partir de US$9,99/mês. Interior AI oferece trial gratuito. Para uso profissional com alta resolução e múltiplos renders, planos de US$19 a US$49/mês são comuns."
    },
    {
        "q": "Imobiliárias e construtoras usam IA para design de interiores?",
        "a": "Crescentemente sim. Imobiliárias usam IA para mostrar o potencial de imóveis vazios com diferentes decorações para diferentes perfis de comprador. Construtoras usam para personalizar opções de acabamento em plantas virtuais."
    },
    {
        "q": "É possível criar projeto de decoração completo usando só IA?",
        "a": "Para ambientes residenciais simples, é possível criar uma visão geral convincente. A IA gera o visual, mas a especificação de materiais, compatibilidade com estrutura existente e orçamento real ainda precisam de avaliação presencial."
    },
    {
        "q": "Como a IA ajuda decoradores de interiores profissionais?",
        "a": "Acelera dramaticamente a fase de apresentação ao cliente: em vez de renders manuais que levam horas, a IA gera dezenas de variações em minutos para aprovação. Isso libera o decorador para focar na curadoria e no relacionamento com o cliente."
    },
    {
        "q": "IA pode sugerir quais móveis comprar baseado no meu estilo de vida?",
        "a": "Sim. Plataformas integradas com catálogos de lojas de móveis usam IA para recomendar peças específicas compatíveis com o espaço fotografado e o estilo escolhido, com links diretos para compra."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Design de Interiores</h2>
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
