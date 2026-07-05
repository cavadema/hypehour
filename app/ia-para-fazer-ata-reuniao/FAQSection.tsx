import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que são ferramentas de IA para fazer ata de reunião?",
        "a": "São aplicativos que gravam reuniões, transcrevem automaticamente o áudio em texto e geram atas estruturadas com participantes, decisões tomadas, itens de ação e prazos — eliminando a necessidade de alguém fazer anotações manualmente."
    },
    {
        "q": "Quais as melhores ferramentas de IA para transcrição e ata de reunião?",
        "a": "Granola AI, Fireflies.ai, Otter.ai, Tactiq (para Google Meet) e Notion AI são as mais usadas. Para reuniões em português, o Granola e o Fireflies têm boa performance com o idioma brasileiro."
    },
    {
        "q": "Essas ferramentas funcionam em reuniões no Google Meet, Zoom e Teams?",
        "a": "Sim. Fireflies, Otter.ai e Tactiq se integram nativamente ao Google Meet, Zoom e Microsoft Teams, entrando automaticamente como participante virtual para gravar e transcrever sem ação manual."
    },
    {
        "q": "IA para ata de reunião funciona bem em português brasileiro?",
        "a": "A performance em português melhorou muito. Granola AI e Fireflies têm boa acurácia para português, especialmente em falas claras. Em reuniões com muito ruído de fundo, sotaques fortes ou muitos participantes simultâneos, a precisão reduz."
    },
    {
        "q": "Como a IA organiza os itens de ação de uma reunião?",
        "a": "Modelos de linguagem identificam automaticamente frases que indicam comprometimento ('vou enviar', 'precisamos definir', 'João fica responsável por') e as transformam em itens de ação com responsável e prazo, estruturados na ata final."
    },
    {
        "q": "É ético gravar reuniões com IA sem informar os participantes?",
        "a": "Não. No Brasil, gravar conversas sem consentimento pode violar a LGPD e o Código Penal. Sempre informe os participantes no início da reunião que ela será gravada e transcrita por IA — a maioria das ferramentas exige isso nos termos de uso."
    },
    {
        "q": "IA para ata de reunião funciona em conversas no WhatsApp ou áudios gravados?",
        "a": "Sim. Ferramentas como Speak AI e alguns planos do Otter.ai permitem fazer upload de arquivos de áudio ou vídeo previamente gravados para transcrição e geração de resumo — não apenas gravações em tempo real."
    },
    {
        "q": "Como integrar as atas geradas por IA com o Notion, Slack ou Jira?",
        "a": "Fireflies e Otter.ai têm integrações nativas com Notion, Slack, HubSpot e Jira. A ata é enviada automaticamente para o canal ou projeto correto logo após o término da reunião, sem cópia manual."
    },
    {
        "q": "IA consegue distinguir quem está falando em uma reunião com múltiplos participantes?",
        "a": "Sim. Ferramentas como Fireflies e Otter.ai fazem diarização de falantes — identificam e atribuem falas a cada participante, seja pelo perfil de conta conectado ou por reconhecimento de padrões de voz únicos."
    },
    {
        "q": "Quanto custa uma ferramenta de IA para ata de reunião?",
        "a": "Otter.ai tem plano gratuito com 600 minutos/mês. Fireflies custa a partir de US$10/mês por usuário. Granola AI tem plano gratuito generoso para uso individual. Para times corporativos, os planos Business começam em US$19/usuário/mês."
    },
    {
        "q": "Dados das reuniões gravadas ficam armazenados em servidores seguros?",
        "a": "As principais ferramentas (Fireflies, Otter.ai) usam criptografia em trânsito e em repouso e têm planos Enterprise com contratos de privacidade. Para reuniões com informações altamente confidenciais, verifique as políticas de retenção de dados."
    },
    {
        "q": "É possível pesquisar em transcrições de reuniões antigas com IA?",
        "a": "Sim. Ferramentas como Fireflies e Otter.ai indexam todas as transcrições e permitem buscar por palavra-chave ou perguntar em linguagem natural 'em qual reunião discutimos o orçamento de Q3?' e encontrar o trecho relevante."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Ata de Reunião</h2>
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
