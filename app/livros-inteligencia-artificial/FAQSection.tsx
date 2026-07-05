import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Quais os melhores livros sobre inteligência artificial para iniciantes?",
        "a": "Para começar: 'Inteligência Artificial: Uma Abordagem Moderna' (Russell e Norvig), 'AI Superpowers' de Kai-Fu Lee, 'Human Compatible' de Stuart Russell e 'The Alignment Problem' de Brian Christian são altamente recomendados."
    },
    {
        "q": "Existem bons livros sobre IA em português?",
        "a": "Sim. Livros como 'Inteligência Artificial para Iniciantes' e conteúdos traduzidos da O'Reilly estão disponíveis. A maioria das referências técnicas de ponta ainda está em inglês — investir no idioma abre um universo muito maior de material."
    },
    {
        "q": "Quais livros são melhores para aprender machine learning e deep learning?",
        "a": "'Deep Learning' de Goodfellow, Bengio e Courville é a referência técnica definitiva. 'Hands-On Machine Learning' de Aurélien Géron com scikit-learn e TensorFlow é excelente para aprendizado prático. Ambos estão disponíveis em PT-BR parcialmente."
    },
    {
        "q": "Há livros sobre o impacto da IA na sociedade e no trabalho?",
        "a": "Sim. 'A Era do Capitalismo de Vigilância' de Shoshana Zuboff, 'Weapons of Math Destruction' de Cathy O'Neil e 'The Age of Surveillance Capitalism' abordam os impactos sociais e éticos da IA com profundidade e rigor jornalístico."
    },
    {
        "q": "Quais livros sobre IA são bons para executivos e gestores?",
        "a": "'AI for People and Business' de Alexander Borek, 'Competing in the Age of AI' de Iansiti e Lakhani, e 'The Second Machine Age' de Brynjolfsson e McAfee são referencias para líderes de negócio que querem entender e explorar IA estrategicamente."
    },
    {
        "q": "Existem livros sobre prompt engineering e como usar LLMs?",
        "a": "É um campo tão novo que livros formais ainda são escassos — a maior parte do conhecimento está em papers, blogs e comunidades online. 'The Art of Prompt Engineering' e conteúdos do LearnPrompting.org são referências acessíveis."
    },
    {
        "q": "Quais livros abordam ética e segurança em IA?",
        "a": "'Superintelligence' de Nick Bostrom (mais alarmista), 'Human Compatible' de Stuart Russell (mais equilibrado) e 'AI Safety Gridworlds' de papers técnicos do DeepMind são referências sobre alinhamento de IA e riscos existenciais."
    },
    {
        "q": "Há livros sobre IA generativa especificamente?",
        "a": "O campo é tão recente que livros formais ainda chegam com atraso. 'Generative Deep Learning' de David Foster (O'Reilly) é a referência técnica mais estabelecida. Para LLMs especificamente, papers originais como 'Attention Is All You Need' são leitura essencial."
    },
    {
        "q": "Quais livros são indicados para quem quer trabalhar com IA como carreira?",
        "a": "'The Hundred-Page Machine Learning Book' de Andriy Burkov (também online e gratuito), 'Pattern Recognition and Machine Learning' de Bishop e 'Mathematics for Machine Learning' de Deisenroth são referências para solidificar a base teórica necessária."
    },
    {
        "q": "Existem audiobooks ou versões em áudio de livros sobre IA?",
        "a": "Sim. Audible tem versões em áudio de 'AI Superpowers', 'The Alignment Problem', 'Human Compatible' e outros. O Google NotebookLM pode criar audio overviews personalizados de qualquer PDF ou documento sobre IA que você importar."
    },
    {
        "q": "Livros de IA ficam desatualizados rapidamente?",
        "a": "Sim, especialmente os técnicos. Prefira livros sobre fundamentos (machine learning clássico, redes neurais) que envelhecem melhor, e complemente com papers, newsletters e podcasts para se manter atualizado sobre as inovações mais recentes."
    },
    {
        "q": "Como usar IA para ler e estudar livros sobre IA mais eficientemente?",
        "a": "Carregue o PDF no NotebookLM ou Claude, peça um guia de estudo estruturado, faça perguntas sobre seções específicas e gere questões de revisão por capítulo. A ironia de usar IA para estudar IA é que funciona extraordinariamente bem."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Livros de Inteligência Artificial</h2>
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
