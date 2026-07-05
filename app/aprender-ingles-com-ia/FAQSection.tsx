import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA pode ajudar a aprender inglês mais rápido?",
        "a": "A IA oferece conversação ilimitada, correção instantânea de erros, explicações personalizadas de gramática e vocabulário adaptado ao seu nível — tudo disponível 24 horas por dia sem custos de professor particular."
    },
    {
        "q": "Qual o melhor app de IA para aprender inglês em 2026?",
        "a": "Duolingo Max (com IA generativa), Speak e Elsa Speak são líderes para prática de conversação. Para inglês profissional e técnico, o ChatGPT ou Claude funcionam excepcionalmente bem como professores personalizados."
    },
    {
        "q": "É possível aprender inglês do zero usando só IA?",
        "a": "Sim, especialmente com apps como Duolingo e Babbel que estruturam o aprendizado progressivamente. Para níveis intermediário e avançado, a prática de conversação com IA acelera muito o desenvolvimento da fluência."
    },
    {
        "q": "IA consegue corrigir meu sotaque em inglês?",
        "a": "Sim. Ferramentas como Elsa Speak e Speak usam reconhecimento de fala avançado para identificar erros de pronúncia fonema por fonema e sugerir exercícios específicos para corrigir o sotaque brasileiro."
    },
    {
        "q": "Como usar o ChatGPT para aprender inglês?",
        "a": "Peça para ele conversar contigo em inglês e corrigir seus erros, criar exercícios de vocabulário sobre temas do seu trabalho, explicar regras gramaticais com exemplos práticos ou simular entrevistas de emprego em inglês."
    },
    {
        "q": "Qual a diferença entre Duolingo normal e Duolingo Max?",
        "a": "O Duolingo Max inclui recursos de IA generativa como roleplay (simulação de conversas em cenários reais) e explicação de erros com contexto detalhado — funcionalidades exclusivas do plano premium com IA."
    },
    {
        "q": "Como aprender inglês para negócios com IA?",
        "a": "Use IA para praticar apresentações em inglês, simular reuniões, aprender jargões do seu setor e receber feedback em e-mails profissionais escritos em inglês — tudo adaptado à sua área de atuação."
    },
    {
        "q": "Quanto tempo leva para aprender inglês com IA?",
        "a": "Com prática diária de 30 minutos usando ferramentas de IA, é possível alcançar nível conversacional básico em 6 meses e intermediário em 12 a 18 meses, dependendo da dedicação e método."
    },
    {
        "q": "IA substitui um professor de inglês humano?",
        "a": "Para a maioria dos objetivos práticos como conversação, gramática e vocabulário, a IA é extremamente eficaz e mais acessível. Professores humanos ainda são valiosos para motivação, nuances culturais e objetivos específicos como exames de proficiência."
    },
    {
        "q": "Existe app de IA gratuito para aprender inglês?",
        "a": "Sim. Duolingo tem plano gratuito robusto, o ChatGPT gratuito funciona como professor de inglês, e o Google Gemini pode praticar conversação sem custo. O Elsa Speak também oferece teste gratuito."
    },
    {
        "q": "Como a IA personaliza o aprendizado de inglês para cada aluno?",
        "a": "A IA analisa seus erros mais frequentes, vocabulário já dominado e áreas de dificuldade para criar um plano de estudos adaptado — focando exatamente no que você precisa melhorar em vez de um currículo genérico."
    },
    {
        "q": "É possível se preparar para o TOEFL ou IELTS usando IA?",
        "a": "Sim. A IA pode simular redações do exame, praticar a seção de speaking, criar questões de reading e listening similares ao formato dos testes e dar feedback detalhado sobre cada parte."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Aprender Inglês com IA</h2>
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
