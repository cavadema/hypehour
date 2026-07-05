import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA está sendo usada em arquitetura?",
        "a": "A IA auxilia arquitetos na geração de conceitos visuais, renderizações fotorrealistas, otimização de plantas baixas, análise de eficiência energética, detecção de conflitos em modelos BIM e até geração de alternativas de fachadas em segundos."
    },
    {
        "q": "Quais ferramentas de IA são mais usadas por arquitetos em 2026?",
        "a": "Midjourney e Stable Diffusion para visualização conceitual, Autodesk Forma para design generativo, Collov AI para renders de interiores, RoomGPT para redesign rápido e Finch para otimização de plantas com IA."
    },
    {
        "q": "IA pode gerar plantas baixas funcionais automaticamente?",
        "a": "Ferramentas como Finch e Autodesk Forma conseguem gerar plantas otimizadas com base em parâmetros de área, programa de necessidades e restrições do terreno. O arquiteto ainda revisa e refina, mas o ponto de partida é gerado pela IA."
    },
    {
        "q": "Como usar IA para gerar renders e visualizações de projetos?",
        "a": "Com ferramentas como Stable Diffusion com ControlNet, o arquiteto importa a planta ou croqui e a IA gera renders fotorrealistas em diferentes estilos. Também é possível usar Midjourney para mood boards e conceitos iniciais."
    },
    {
        "q": "A IA pode substituir o arquiteto?",
        "a": "Não. A IA acelera etapas de conceituação, visualização e otimização técnica, mas o juízo estético, o entendimento das necessidades do cliente, a responsabilidade técnica e a criatividade humana continuam sendo insubstituíveis no processo arquitetônico."
    },
    {
        "q": "Como a IA ajuda na análise de eficiência energética de edifícios?",
        "a": "Ferramentas integradas ao Revit e ao Autodesk Forma simulam automaticamente insolação, ventilação natural, consumo de energia e pegada de carbono de um projeto, fornecendo dados para decisões de design sustentável em fases iniciais."
    },
    {
        "q": "É possível usar IA para redesign de interiores de imóveis?",
        "a": "Sim. Ferramentas como Collov AI, Interior AI e RoomGPT permitem fotografar um ambiente existente e gerar visualizações instantâneas do mesmo espaço reformado em diferentes estilos — útil para construtoras, imobiliárias e decoradores."
    },
    {
        "q": "Como a IA está mudando o processo de concorrência em arquitetura?",
        "a": "A IA permite explorar dezenas de alternativas conceituais em horas, em vez de dias — ampliando a capacidade de experimentação antes de definir o partido arquitetônico e aumentando a chance de proposta vencedora em concursos."
    },
    {
        "q": "O que é design generativo em arquitetura?",
        "a": "Design generativo usa algoritmos e IA para gerar e avaliar automaticamente milhares de variações de um projeto com base em critérios definidos (custo, área, luminosidade, estrutura), selecionando as melhores soluções para refinamento humano."
    },
    {
        "q": "Ferramentas de IA para arquitetura funcionam com Revit e AutoCAD?",
        "a": "Algumas sim. Autodesk Forma integra nativamente com Revit. Existem plugins de IA para AutoCAD. Para ferramentas como Midjourney, o fluxo é paralelo: gera visual com IA, depois desenvolve tecnicamente no CAD."
    },
    {
        "q": "Quanto custa usar IA para visualização de projetos arquitetônicos?",
        "a": "Midjourney custa US$10 a US$60/mês. Collov AI tem planos a partir de US$9,99/mês. Ferramentas enterprise como Autodesk Forma fazem parte do pacote AEC da Autodesk. Muitos escritórios amortizam o custo em poucos projetos."
    },
    {
        "q": "IA pode ajudar na documentação técnica de projetos de arquitetura?",
        "a": "Sim. Assistentes de IA como Claude e ChatGPT ajudam a redigir memórias descritivas, especificações técnicas, relatórios de visita e comunicações com clientes, acelerando a parte administrativa do trabalho do arquiteto."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Arquitetura</h2>
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
