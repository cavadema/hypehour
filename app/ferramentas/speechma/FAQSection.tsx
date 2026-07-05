import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Speechma?",
        answer: "Speechma é uma ferramenta de IA para síntese e transcrição de voz, permitindo converter texto em áudio realista e áudio em texto com alta precisão."
    },
    {
        question: "Para que serve o Speechma?",
        answer: "Serve para criar narrações, dublar conteúdos, transcrever reuniões, gerar podcasts e produzir áudios profissionais de forma rápida com inteligência artificial."
    },
    {
        question: "O Speechma é gratuito?",
        answer: "Sim, oferece plano gratuito com recursos básicos, além de planos pagos com mais vozes, minutos e funcionalidades avançadas."
    },
    {
        question: "O Speechma funciona em português?",
        answer: "Sim. O Speechma suporta português brasileiro entre dezenas de idiomas disponíveis."
    },
    {
        question: "Quais idiomas o Speechma suporta?",
        answer: "Suporta mais de 50 idiomas, incluindo português, inglês, espanhol, francês, alemão e muitos outros."
    },
    {
        question: "O Speechma tem vozes naturais?",
        answer: "Sim. As vozes geradas por IA do Speechma são altamente naturais e expressivas, próximas de uma voz humana real."
    },
    {
        question: "Posso escolher diferentes vozes no Speechma?",
        answer: "Sim. O Speechma oferece uma biblioteca de vozes com diferentes estilos, gêneros e sotaques."
    },
    {
        question: "O Speechma faz transcrição de áudio?",
        answer: "Sim. Além de texto para voz, o Speechma também converte arquivos de áudio em texto com IA."
    },
    {
        question: "Quais formatos de áudio o Speechma suporta?",
        answer: "Suporta os principais formatos como MP3, WAV e outros formatos de áudio comuns."
    },
    {
        question: "O Speechma funciona para podcasts?",
        answer: "Sim. É muito usado para criar narrações de podcasts com vozes realistas sem necessidade de gravação."
    },
    {
        question: "Posso usar o Speechma para vídeos no YouTube?",
        answer: "Sim. As narrações geradas são ideais para vídeos, tutoriais e conteúdo educativo no YouTube."
    },
    {
        question: "O Speechma é indicado para e-learning?",
        answer: "Sim. Perfeito para criar conteúdo educacional narrado com qualidade profissional rapidamente."
    },
    {
        question: "O Speechma precisa de instalação?",
        answer: "Não. É uma ferramenta web que funciona diretamente no navegador, sem download."
    },
    {
        question: "O Speechma funciona offline?",
        answer: "Não. Requer conexão com internet para processar o áudio e a transcrição."
    },
    {
        question: "Posso baixar o áudio gerado no Speechma?",
        answer: "Sim. Os arquivos de áudio podem ser baixados após a geração."
    },
    {
        question: "O Speechma substitui dubladores profissionais?",
        answer: "Para conteúdos do dia a dia, sim. Para projetos premium que exigem emoção específica, ainda é recomendado profissional humano."
    },
    {
        question: "Quanto tempo leva para gerar áudio no Speechma?",
        answer: "Geralmente poucos segundos para textos curtos, podendo levar um pouco mais para textos longos."
    },
    {
        question: "O Speechma é bom para audiobooks?",
        answer: "Sim. Com vozes naturais e suporte a textos longos, é uma ótima opção para produzir audiobooks."
    },
    {
        question: "Posso controlar a velocidade e tom da voz no Speechma?",
        answer: "Sim. O Speechma permite ajustar velocidade, entonação e outros parâmetros da voz gerada."
    },
    {
        question: "O Speechma tem API para desenvolvedores?",
        answer: "Sim. Possui API para integrar as funcionalidades de voz em aplicativos e sistemas externos."
    },
    {
        question: "O Speechma é indicado para criar conteúdo em redes sociais?",
        answer: "Sim. Narrações para Reels, TikToks e Stories podem ser geradas rapidamente com o Speechma."
    },
    {
        question: "Preciso de conta para usar o Speechma?",
        answer: "Para recursos completos sim, mas alguns recursos básicos podem ser testados sem cadastro."
    },
    {
        question: "O Speechma tem boa precisão na transcrição?",
        answer: "Sim. A tecnologia de transcrição apresenta alta acurácia, especialmente para áudios claros e sem ruído."
    },
    {
        question: "O Speechma é seguro para dados sensíveis?",
        answer: "Verifique a política de privacidade antes de transcrever conteúdos confidenciais."
    },
    {
        question: "O Speechma funciona para legendas automáticas?",
        answer: "Sim. A transcrição pode ser usada para gerar legendas de vídeos automaticamente."
    },
    {
        question: "Vale a pena pagar pelo Speechma?",
        answer: "Sim, para uso profissional ou em volume. O plano pago oferece mais minutos, vozes premium e sem limites rígidos."
    },
    {
        question: "O Speechma funciona para transcrever reuniões?",
        answer: "Sim. É possível carregar gravações de reuniões e obter transcrições completas rapidamente."
    },
    {
        question: "O Speechma tem vozes em diferentes idiomas para o mesmo texto?",
        answer: "Sim. Você pode gerar o mesmo texto em múltiplos idiomas com vozes nativas de cada um."
    },
    {
        question: "Posso usar o Speechma para criar material de acessibilidade?",
        answer: "Sim. É ideal para criar áudios acessíveis de textos para pessoas com deficiência visual."
    },
    {
        question: "O Speechma é indicado para freelancers?",
        answer: "Sim. Acelera muito a produção de conteúdo narrado e reduz custos com gravação profissional."
    },
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Speechma</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
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
            /></div>
    );
}
