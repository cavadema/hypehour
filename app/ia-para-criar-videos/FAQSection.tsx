import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Quais as melhores ferramentas de IA para criar vídeos em 2026?",
        "a": "Sora (OpenAI), Kling AI, Hailuo AI, Runway ML, Pika Labs e HeyGen lideram o mercado. Para vídeos com avatares apresentadores, HeyGen e Synthesia são referências. Para geração pura de vídeo a partir de texto, Sora e Kling são os mais avançados."
    },
    {
        "q": "É possível criar vídeos profissionais com IA sem aparecer na câmera?",
        "a": "Sim. Ferramentas como HeyGen e Synthesia usam avatares realistas de IA que leem roteiros em português, permitindo criar vídeos de apresentação, treinamento e marketing sem que o criador precise gravar nada."
    },
    {
        "q": "Como funciona a geração de vídeo a partir de texto (text-to-video)?",
        "a": "Você descreve a cena em texto (prompt), especificando o cenário, movimento de câmera, iluminação e ação. O modelo de IA gera um vídeo de segundos a minutos correspondente à descrição, sem filmagem real."
    },
    {
        "q": "IA para criar vídeos funciona em português?",
        "a": "Para geração de imagens e vídeos visuais, o idioma do prompt influencia pouco. Para avatares que falam, ferramentas como HeyGen e Synthesia têm vozes em português brasileiro de qualidade, com sincronização labial adequada."
    },
    {
        "q": "Quanto custa usar IA para criar vídeos?",
        "a": "Plataformas como InVideo e FlexClip têm planos a partir de US$15/mês para vídeos com templates de IA. HeyGen custa a partir de US$29/mês. Kling AI e Hailuo têm créditos gratuitos iniciais. Sora está disponível no plano ChatGPT Pro."
    },
    {
        "q": "Qual a resolução máxima de vídeos gerados por IA?",
        "a": "Em 2026, modelos como Sora e Kling geram vídeos em até 1080p com qualidade cinematográfica crescente. Para vídeos de marketing e redes sociais, a resolução já é suficiente para publicação profissional."
    },
    {
        "q": "Como criar vídeos para YouTube usando apenas IA?",
        "a": "Use ChatGPT para roteiro, ElevenLabs para narração, Kling AI ou Pika para imagens em movimento, CapCut ou Descript para edição e montagem, e IA para thumbnail. Criadores faceless de YouTube usam esse pipeline amplamente."
    },
    {
        "q": "IA pode editar vídeos existentes automaticamente?",
        "a": "Sim. Ferramentas como OpusClip cortam automaticamente os melhores trechos de vídeos longos para Reels/Shorts. Descript usa IA para edição por texto — você edita a transcrição e o vídeo se ajusta automaticamente."
    },
    {
        "q": "É possível criar vídeos com avatares clone da minha própria voz e aparência?",
        "a": "Sim. HeyGen e Synthesia permitem criar um avatar digital seu — gravando alguns minutos de vídeo e áudio — que depois pode apresentar qualquer roteiro. Útil para criadores de conteúdo escalarem produção."
    },
    {
        "q": "Como remover o fundo de um vídeo automaticamente com IA?",
        "a": "Ferramentas como Canva Pro, CapCut, Remove.bg (para vídeo) e Runway ML fazem remoção de fundo em vídeos automaticamente com IA — sem chroma key ou fundo verde físico."
    },
    {
        "q": "IA para criar vídeos pode adicionar legendas automaticamente?",
        "a": "Sim. Descript, CapCut, Opus Clip e VEED.io transcrevem o áudio e adicionam legendas animadas sincronizadas automaticamente em português, com estilos personalizáveis para Reels e YouTube Shorts."
    },
    {
        "q": "Vídeos criados com IA têm direitos autorais?",
        "a": "A questão legal ainda evolui. Em geral, os termos de uso das plataformas definem quem detém os direitos sobre o output. Sempre verifique a política da ferramenta usada antes de monetizar ou licenciar vídeos gerados com IA."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Criar Vídeos</h2>
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
