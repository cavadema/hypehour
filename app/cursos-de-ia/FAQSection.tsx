import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Quais os melhores cursos de IA em português em 2026?",
        "a": "Deep Learning Brasil, cursos da Alura em IA, formações da DIO, conteúdos da FIAP e cursos no Udemy em português são referências sólidas para iniciantes e intermediários no Brasil."
    },
    {
        "q": "Preciso saber matemática avançada para aprender IA?",
        "a": "Para usar ferramentas de IA no dia a dia, não. Para criar e treinar modelos do zero, conceitos de álgebra linear, cálculo e estatística são necessários. Comece pela prática e aprenda a teoria conforme a necessidade."
    },
    {
        "q": "Qual linguagem de programação devo aprender primeiro para trabalhar com IA?",
        "a": "Python é a linguagem dominante em IA e machine learning, com bibliotecas como TensorFlow, PyTorch, scikit-learn e Hugging Face. Aprenda Python antes de avançar para frameworks específicos de IA."
    },
    {
        "q": "Existe certificação de IA reconhecida no mercado de trabalho brasileiro?",
        "a": "Sim. As certificações mais valorizadas são: AWS Machine Learning Specialty, Google Professional ML Engineer, DeepLearning.AI (Andrew Ng no Coursera) e certificações da Microsoft Azure AI."
    },
    {
        "q": "Quanto tempo leva para aprender IA do zero?",
        "a": "Para usar ferramentas de IA no trabalho: 1 a 3 meses. Para desenvolver modelos básicos de ML: 6 a 12 meses. Para especialização em deep learning ou LLMs: 1 a 2 anos de estudo dedicado."
    },
    {
        "q": "Cursos de IA gratuitos valem a pena?",
        "a": "Sim. O Coursera (com bolsas), fast.ai, Google Machine Learning Crash Course e os cursos da DeepLearning.AI no YouTube oferecem conteúdo de alta qualidade gratuitamente — o problema é a autodisciplina, não o conteúdo."
    },
    {
        "q": "Qual a diferença entre aprender IA, machine learning e deep learning?",
        "a": "IA é o campo geral. Machine learning é um subconjunto que aprende com dados. Deep learning é um subconjunto do ML que usa redes neurais profundas — a tecnologia por trás do ChatGPT, Midjourney e outros sistemas generativos."
    },
    {
        "q": "Quais cursos de IA são bons para profissionais não-técnicos?",
        "a": "AI for Everyone de Andrew Ng (Coursera), cursos de IA aplicada da FIA e Insper e formações de Prompt Engineering são excelentes para gestores, marketeers e profissionais que querem entender IA sem programar."
    },
    {
        "q": "Vale a pena pagar por um bootcamp de IA?",
        "a": "Depende do seu objetivo. Bootcamps são intensivos e eficientes para transição de carreira rápida, mas custam de R$5.000 a R$30.000. Para aprendizado incremental, combinações de cursos online são mais econômicas."
    },
    {
        "q": "Como praticar IA além dos cursos teóricos?",
        "a": "Participe de competições no Kaggle, construa projetos pessoais no GitHub, replique papers acadêmicos e contribua com projetos open source. A prática em projetos reais vale mais que qualquer certificado."
    },
    {
        "q": "Existe comunidade de aprendizado de IA em português no Brasil?",
        "a": "Sim. AI Brasil no Discord, comunidades no Reddit r/artificial_br, grupos no LinkedIn de Machine Learning Brasil e meetups presenciais nas capitais são boas opções para networking e aprendizado colaborativo."
    },
    {
        "q": "Qual o caminho para se tornar um engenheiro de IA generativa?",
        "a": "Domine Python, aprenda fundamentos de LLMs (tokenização, transformers, fine-tuning), pratique com a API da OpenAI ou Anthropic, estude RAG e frameworks como LangChain e construa projetos com agentes de IA."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Cursos de IA</h2>
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
