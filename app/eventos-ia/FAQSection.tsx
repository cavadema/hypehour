import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Quais são os maiores eventos de IA no Brasil em 2026?",
        "a": "AI Summit São Paulo, CPBR (Campus Party Brasil), The Developer's Conference com trilha de IA, BrazilJS com conteúdo de IA e eventos regionais organizados por grupos de Machine Learning Brasil são os principais do calendário nacional."
    },
    {
        "q": "Quais eventos internacionais de IA são referência mundial?",
        "a": "NeurIPS, ICML e ICLR são as conferências acadêmicas de maior prestígio. Para o lado prático e de negócios, o AI Summit Global (Londres/Nova York), Davos Tech Summit e VivaTech Paris movimentam a indústria."
    },
    {
        "q": "Existem eventos de IA online e gratuitos para brasileiros?",
        "a": "Sim. Lives do MIT OpenCourseWare, eventos do AI Safety Institute, webinars da Anthropic e OpenAI, além de meetups virtuais da comunidade ML Brasil no Discord e YouTube são gratuitos e muito acessíveis."
    },
    {
        "q": "Vale a pena ir a conferências de IA presencialmente?",
        "a": "Para networking, exposição a pesquisas de ponta e conexão com empresas e investidores, o presencial é insubstituível. As sessões de corredor e as demos ao vivo criam oportunidades que vídeos gravados não oferecem."
    },
    {
        "q": "Como submeter um paper para conferências como NeurIPS ou ICLR?",
        "a": "Submeta um artigo original com experimentos reproduzíveis através dos sistemas de submissão de cada conferência. O processo inclui revisão por pares duplo-cego e as datas de submissão costumam ser 6 a 9 meses antes do evento."
    },
    {
        "q": "Existem eventos de IA focados em negócios e empreendedorismo?",
        "a": "Sim. AI for Business, eventos da ABII (Associação Brasileira de Inteligência Artificial Aplicada), encontros de corporate venture e tracks de IA em eventos de startups como CASE e Futurecom atendem esse público."
    },
    {
        "q": "Como se manter atualizado entre eventos de IA?",
        "a": "Assine newsletters como TLDR AI e The Batch (DeepLearning.AI), acompanhe os canais do YouTube das principais conferências, siga pesquisadores no Twitter/X e participe de reading groups online."
    },
    {
        "q": "Hackathons de IA são bons para quem está aprendendo?",
        "a": "Excelentes. Hackathons criam projetos reais sob pressão de tempo, conectam você a outros desenvolvedores e podem gerar portfólio relevante. Muitos projetos vencedores de hackathons de IA se tornam startups."
    },
    {
        "q": "Como conseguir ingressos gratuitos ou bolsas para conferências de IA?",
        "a": "NeurIPS, ICML e ICLR oferecem programas de bolsas para estudantes e pesquisadores de países em desenvolvimento. Empresas como Google, Microsoft e Hugging Face frequentemente patrocinam participação de comunidades sub-representadas."
    },
    {
        "q": "Onde encontrar eventos de IA perto de mim no Brasil?",
        "a": "Meetup.com, Sympla, grupos de ML Brasil no LinkedIn e Discord, e páginas de departamentos de ciência da computação das universidades federais são os melhores canais para encontrar eventos locais."
    },
    {
        "q": "Eventos de IA aceitam palestrantes iniciantes?",
        "a": "Muitos eventos menores e meetups buscam ativamente palestrantes locais para compartilhar experiências práticas. Não é necessário ser pesquisador sênior — casos de uso reais do mundo do trabalho são muito bem-vindos."
    },
    {
        "q": "Como um evento de IA pode ajudar minha empresa a adotar IA?",
        "a": "Eventos permitem conhecer fornecedores, ver demos ao vivo de tecnologias, aprender com cases de empresas similares e conectar com consultores especializados — comprimindo meses de pesquisa em dias."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Eventos de IA</h2>
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
