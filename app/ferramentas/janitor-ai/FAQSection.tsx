import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Janitor AI?",
        answer: "Janitor AI é uma plataforma de chat com personagens de inteligência artificial, permitindo criar e conversar com personagens personalizados para entretenimento, roleplay e escrita criativa."
    },
    {
        question: "Para que serve o Janitor AI?",
        answer: "O Janitor AI serve para conversar com personagens de IA, praticar roleplay, desenvolver histórias colaborativas, criar personagens personalizados e explorar interações criativas com inteligência artificial."
    },
    {
        question: "O Janitor AI é gratuito?",
        answer: "O Janitor AI oferece acesso gratuito com funcionalidades básicas. Planos pagos liberam mais recursos, menor tempo de resposta e acesso a modelos de linguagem mais avançados."
    },
    {
        question: "Como criar um personagem no Janitor AI?",
        answer: "Basta acessar a plataforma, clicar em criar personagem, definir nome, personalidade, descrição e backstory. O sistema usa essas informações para gerar respostas coerentes com o personagem criado."
    },
    {
        question: "O Janitor AI é seguro para menores de idade?",
        answer: "O Janitor AI possui conteúdo NSFW que é restrito por padrão. Menores de 18 anos não devem usar a plataforma, pois ela é voltada para adultos. Verifique os termos de uso antes de utilizar."
    },
    {
        question: "O Janitor AI funciona em português?",
        answer: "Sim. O Janitor AI suporta múltiplos idiomas, incluindo o português, tanto para criar personagens quanto para conversar com eles."
    },
    {
        question: "O Janitor AI é diferente do Character.AI?",
        answer: "Sim. O Janitor AI é focado em usuários adultos e permite conteúdo mais livre, enquanto o Character.AI é mais restritivo. As funcionalidades de roleplay são similares, mas as políticas de conteúdo diferem significativamente."
    },
    {
        question: "Posso usar o Janitor AI para escrita criativa?",
        answer: "Sim. Muitos escritores usam o Janitor AI para desenvolver personagens, explorar diálogos, testar interações narrativas e ganhar inspiração para histórias."
    },
    {
        question: "O Janitor AI salva as conversas?",
        answer: "Sim, as conversas ficam salvas na sua conta, permitindo retomar interações anteriores a qualquer momento."
    },
    {
        question: "Quais modelos de IA o Janitor AI usa?",
        answer: "O Janitor AI suporta múltiplos modelos de linguagem, incluindo opções gratuitas e pagas como GPT-4 e Claude, além de modelos alternativos que podem ser integrados via API."
    },
    {
        question: "Posso compartilhar personagens no Janitor AI?",
        answer: "Sim. A plataforma possui uma galeria pública onde os usuários podem compartilhar e descobrir personagens criados pela comunidade."
    },
    {
        question: "O Janitor AI funciona no celular?",
        answer: "Sim. A plataforma é acessível via navegador em dispositivos móveis, sem necessidade de instalação de aplicativo."
    },
    {
        question: "O Janitor AI é bom para roleplay?",
        answer: "Sim. É uma das plataformas mais usadas para roleplay com personagens de IA, com suporte a memória de longo prazo, fichas de personagem detalhadas e conversas imersivas."
    },
    {
        question: "Preciso criar conta para usar o Janitor AI?",
        answer: "Sim. É necessário criar uma conta para acessar os recursos da plataforma e salvar conversas e personagens."
    },
    {
        question: "O Janitor AI pode ser usado para criar chatbots?",
        answer: "Não é uma plataforma voltada para chatbots comerciais. É focada em entretenimento e interação criativa com personagens de IA."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Janitor AI</h2>
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
