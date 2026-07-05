import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o QuillBot?",
        answer: "QuillBot é uma ferramenta de escrita com inteligência artificial que oferece paráfrase, verificação gramatical, sumarização, tradução e outros recursos para melhorar textos de forma rápida e precisa."
    },
    {
        question: "Para que serve o QuillBot?",
        answer: "O QuillBot serve para reformular frases e textos, corrigir gramática e ortografia, resumir conteúdos longos, traduzir textos e melhorar a qualidade geral da escrita em acadêmico, profissional ou criativo."
    },
    {
        question: "O QuillBot é gratuito?",
        answer: "O QuillBot oferece plano gratuito com acesso às ferramentas básicas de paráfrase e gramática com limites de uso. O plano Premium libera mais modos de paráfrase, sem limites de caracteres e recursos avançados."
    },
    {
        question: "O QuillBot funciona em português?",
        answer: "Sim. O QuillBot suporta português e outros idiomas tanto na paráfrase quanto na verificação gramatical e tradução."
    },
    {
        question: "O QuillBot detecta plágio?",
        answer: "O QuillBot Premium inclui verificador de plágio que compara textos com bilhões de páginas da web para identificar similaridades e originais."
    },
    {
        question: "O QuillBot é bom para trabalhos acadêmicos?",
        answer: "Sim. Muitos estudantes usam o QuillBot para reformular textos, melhorar a redação de trabalhos e resumir artigos acadêmicos, desde que respeitando as políticas de integridade acadêmica da instituição."
    },
    {
        question: "O QuillBot tem extensão para navegador?",
        answer: "Sim. O QuillBot possui extensões para Chrome e Edge que permitem usar as ferramentas diretamente no Google Docs, Word Online e outros editores de texto web."
    },
    {
        question: "O QuillBot tem integração com o Word?",
        answer: "Sim. O QuillBot possui add-in para Microsoft Word, permitindo paráfrase e verificação gramatical diretamente no documento."
    },
    {
        question: "Quais modos de paráfrase o QuillBot oferece?",
        answer: "O QuillBot oferece modos Padrão, Fluente, Formal, Simples, Criativo, Expansão e Encurtamento para adaptar o texto ao tom e estilo desejados."
    },
    {
        question: "O QuillBot resumidor é bom?",
        answer: "Sim. O Summarizer do QuillBot extrai os pontos principais de textos longos de forma eficiente, sendo muito usado para resumir artigos, relatórios e textos acadêmicos."
    },
    {
        question: "O QuillBot é seguro para uso profissional?",
        answer: "Sim. O QuillBot é usado por profissionais de comunicação, marketing, jornalismo e escritores para agilizar a produção de texto e manter qualidade."
    },
    {
        question: "O QuillBot aprende com meu estilo de escrita?",
        answer: "O QuillBot adapta as sugestões com base no contexto do texto, mas não cria um perfil personalizado de estilo como alguns outros assistentes de escrita."
    },
    {
        question: "O QuillBot é melhor que o Grammarly?",
        answer: "Depende da necessidade. O QuillBot se destaca na paráfrase e reformulação de texto, enquanto o Grammarly é mais focado em correção gramatical detalhada. Muitos usuários usam ambos de forma complementar."
    },
    {
        question: "O QuillBot funciona offline?",
        answer: "Não. O QuillBot é uma ferramenta baseada em nuvem e requer conexão com a internet para funcionar."
    },
    {
        question: "Como começar a usar o QuillBot?",
        answer: "Acesse quillbot.com, crie uma conta gratuita, cole o texto que deseja melhorar e escolha o modo de paráfrase ou a ferramenta desejada. O resultado aparece instantaneamente."
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
        <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre QuillBot</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        index={index}
                    />
                ))}
            </div>
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
    );
}
