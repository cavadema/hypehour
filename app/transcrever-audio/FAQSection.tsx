import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que são ferramentas de IA para transcrição de áudio?",
        "a": "São sistemas que usam modelos de reconhecimento de fala (ASR) com inteligência artificial para converter automaticamente arquivos de áudio e vídeo em texto — com velocidade e precisão muito superiores à transcrição manual."
    },
    {
        "q": "Quais as melhores ferramentas de IA para transcrever áudio em português?",
        "a": "Whisper da OpenAI (open source) tem excelente qualidade em português brasileiro. TurboScribe, Otter.ai, Speechma e Descript oferecem versões pagas com recursos adicionais como identificação de falantes, resumo automático e edição por texto."
    },
    {
        "q": "O Whisper da OpenAI é gratuito para transcrição em português?",
        "a": "Sim. O Whisper é open source e pode ser rodado localmente de graça. Há interfaces como Whisper.cpp e aplicativos como MacWhisper que facilitam o uso sem linha de comando. Para uso via API OpenAI, o custo é de US$0,006 por minuto — muito acessível."
    },
    {
        "q": "Qual a precisão de ferramentas de IA para transcrição em português do Brasil?",
        "a": "Ferramentas modernas como Whisper large-v3 e modelos treinados especificamente para português atingem taxas de erro de palavra (WER) abaixo de 10% em áudios com boa qualidade de som. Em áudio com ruído intenso ou sotaques muito regionais, a precisão reduz."
    },
    {
        "q": "Como transcrever um podcast ou vídeo de YouTube automaticamente?",
        "a": "Use ferramentas como TurboScribe, Speechma ou a API do Whisper para fazer upload do arquivo ou link do vídeo. Em minutos você recebe a transcrição completa em texto, que pode ser editada, formatada e usada como base para legendas ou conteúdo escrito."
    },
    {
        "q": "Ferramentas de transcrição com IA conseguem identificar diferentes falantes?",
        "a": "Sim, por meio da tecnologia de diarização de falantes. Ferramentas como Fireflies.ai, Otter.ai e Descript identificam automaticamente diferentes vozes e atribuem cada trecho ao falante correspondente — especialmente útil para transcrição de entrevistas e podcasts."
    },
    {
        "q": "É possível transcrever áudios do WhatsApp com IA?",
        "a": "Sim. Ferramentas como Speechma e Transkriptor permitem fazer upload de áudios do WhatsApp. Para volume maior, é possível usar a API do Whisper em automações com n8n ou Make para transcrever automaticamente todos os áudios recebidos."
    },
    {
        "q": "Quanto tempo leva para transcrever 1 hora de áudio com IA?",
        "a": "Com ferramentas modernas, 1 hora de áudio é transcrita em 2 a 10 minutos, dependendo da ferramenta e do modelo usado. A API do Whisper transcreve em aproximadamente 1/6 do tempo de áudio original em servidores rápidos."
    },
    {
        "q": "IA pode gerar legendas (SRT, VTT) para vídeos automaticamente?",
        "a": "Sim. Descript, CapCut, VEED.io e ferramentas de transcrição como TurboScribe exportam automaticamente legendas em formato SRT ou VTT sincronizadas com o vídeo — prontas para importar no YouTube, Premiere ou DaVinci Resolve."
    },
    {
        "q": "Como usar transcrição de IA para criar conteúdo de texto a partir de vídeos?",
        "a": "Transcreva o vídeo, cole no ChatGPT ou Claude e peça para transformar em artigo, post de blog, thread do Twitter ou newsletter — mantendo as ideias principais mas adaptando o formato para o meio de texto. É um dos fluxos de repurposing mais eficientes."
    },
    {
        "q": "Ferramentas de transcrição de IA são seguras para áudios confidenciais?",
        "a": "Para entrevistas confidenciais, reuniões estratégicas ou dados sensíveis, use o Whisper rodando localmente — o áudio não sai do seu computador. Serviços online têm termos de uso variáveis sobre retenção de dados; leia antes de usar para conteúdo sensível."
    },
    {
        "q": "Como melhorar a qualidade da transcrição automática em português?",
        "a": "Grave com microfone de boa qualidade, ambiente silencioso, fale em velocidade normal e evite muitos falantes simultâneos. Para áudios existentes com ruído, use ferramentas de limpeza de áudio como Adobe Enhance Speech antes de transcrever."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Transcrição de Áudio com IA</h2>
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
