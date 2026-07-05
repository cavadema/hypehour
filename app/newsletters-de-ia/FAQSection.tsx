import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Por que assinar newsletters de IA em vez de seguir redes sociais?",
        "a": "Newsletters curadas filtram o ruído das redes sociais: entregam o conteúdo mais relevante de IA na sua caixa de entrada, com contexto e análise que posts fragmentados não oferecem. São o formato ideal para se manter informado sem passar horas em scroll."
    },
    {
        "q": "Quais as melhores newsletters de IA em português?",
        "a": "O Hypehour é referência no Brasil para curadoria de ferramentas de IA. Outras newsletters brasileiras sobre IA incluem as do LinkedIn de criadores como Bruna Vasconcellos e Camilo Lucena, e boletins de veículos como MIT Technology Review Brasil."
    },
    {
        "q": "Quais newsletters de IA em inglês são mais recomendadas?",
        "a": "TLDR AI (diária, concisa), The Batch de Andrew Ng (DeepLearning.AI), AI Breakfast, The Neuron, Import AI de Jack Clark e Stratechery (com cobertura de IA) são as mais respeitadas por profissionais da área globalmente."
    },
    {
        "q": "Com que frequência chegam boas newsletters de IA?",
        "a": "Varia muito: TLDR AI é diária e ótima para quem quer um resumo rápido de 5 minutos. The Batch é semanal e mais aprofundada. Algumas são quinzenais ou mensais com análises mais estratégicas. Assine diferentes frequências para cobertura completa."
    },
    {
        "q": "Como evitar sobrecarga de informação ao assinar múltiplas newsletters de IA?",
        "a": "Crie uma pasta dedicada no e-mail para newsletters, assine no máximo 3 a 5 publicações de diferentes ângulos (técnico, negócios, aplicações práticas) e revise semanalmente no horário designado — evitando distração constante."
    },
    {
        "q": "Newsletters de IA são confiáveis como fonte de informação?",
        "a": "As melhores sim — especialmente as escritas por profissionais com credibilidade estabelecida como Andrew Ng, Jack Clark e Ethan Mollick. Para notícias de última hora, verifique sempre nas fontes primárias antes de compartilhar."
    },
    {
        "q": "Existe newsletter de IA focada em negócios e empreendedorismo?",
        "a": "Sim. Stratechery, Every (especialmente Dan Shipper sobre IA), The AI Business Brief e The Rundown AI focam em oportunidades de negócio, análise de mercado e impacto estratégico da IA para empreendedores e gestores."
    },
    {
        "q": "Como posso criar minha própria newsletter de IA usando IA?",
        "a": "Configure fluxos de automação com n8n ou Make que coletam artigos de RSS feeds relevantes, processam com GPT-4o para resumo e seleção dos mais relevantes, e formatam para envio pelo Beehiiv, Substack ou ConvertKit automaticamente."
    },
    {
        "q": "Newsletters de IA cobrem tanto aspectos técnicos quanto práticos?",
        "a": "Depende do foco de cada publicação. TLDR AI cobre ambos de forma concisa. The Batch tem mais equilíbrio técnico-prático. Para aspectos exclusivamente práticos e de ferramentas, newsletters como o Hypehour e The Rundown AI são mais indicadas."
    },
    {
        "q": "Qual newsletter de IA é melhor para acompanhar lançamentos de novas ferramentas?",
        "a": "The Rundown AI, There's An AI For That e TLDR AI são excelentes para descobrir novas ferramentas de IA. O Hypehour é a referência brasileira para curadoria de ferramentas relevantes para o público lusófono."
    },
    {
        "q": "Como newsletters de IA podem ajudar no aprendizado contínuo sobre a área?",
        "a": "Leitura regular de newsletters de qualidade cria um contexto acumulativo sobre tendências, terminologia e casos de uso — muito mais eficiente do que tentar estudar IA de forma sistemática sem uma âncora no que está acontecendo no mundo real."
    },
    {
        "q": "Vale a pena pagar por newsletters premium de IA?",
        "a": "Newsletters como Stratechery (US$14/mês) e Every (US$20/mês) oferecem análises profundas que justificam o custo para profissionais que dependem de entender o cenário de IA para decisões estratégicas. Para uso casual, as gratuitas cobrem bem."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Newsletters de IA</h2>
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
