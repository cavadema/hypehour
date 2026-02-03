import { MicrophoneIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "Inteligência Artificial para Transcrever áudio",
  description: "As melhores ferramentas de IA para transcrever áudio em texto com precisão e rapidez.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/transcrever-audio',
  },
};

const ferramentas = [
  {
    nome: "Hume AI",
    url: "https://www.hume.ai/",
    descricao: "IA com inteligência emocional que oferece vozes expressivas e entende o contexto emocional das conversas.",
  },
  {
    nome: "Voices.com",
    url: "https://www.voices.com/",
    descricao: "Mercado líder para encontrar e contratar dubladores profissionais e gerar vozes com IA eticamente licenciadas.",
  },
  {
    nome: "Inworld",
    url: "https://inworld.ai/",
    descricao: "Crie personagens de IA e NPCs inteligentes com personalidades profundas, vozes e inteligência narrativa.",
  },
  {
    nome: "Dibur2text",
    url: "https://dibur2text.app/",
    descricao: "Ferramenta de IA para transcrever áudios do WhatsApp e outras plataformas de forma rápida e privada.",
  },
  { nome: "SlideWhisper", url: "https://www.slidewhisper.com/", descricao: "Transforme conversas e áudios em apresentações completas e documentos estruturados com IA." },
  { nome: "Letterly", url: "https://letterly.app/", descricao: "Transforme fala em texto estruturado, notas, emails e posts sociais com IA." },
  { nome: "Speechmatics", url: "https://www.speechmatics.com/", descricao: "Tecnologia de fala IA líder para transcrição, tradução e TTS com precisão empresarial." },
  { nome: "Riverside", url: "https://riverside.com/", descricao: "Plataforma de gravação e transcrição com IA para podcasts e vídeos profissionais." },
  { nome: "Speechify", url: "/ferramentas/speechify", descricao: "Plataforma de IA para transcrição e conversão de texto em áudio com vozes naturais." },
  { nome: "Wisprflow", url: "/ferramentas/wisprflow", descricao: "Transcrição automática de áudio com IA para fluxos de trabalho profissionais." },
  { nome: "Willow", url: "/ferramentas/willow", descricao: "Ferramenta de transcrição de voz com IA para criar textos precisos." },
  { nome: "Aquavoice", url: "https://aquavoice.com/", descricao: "Solução de IA para transcrição e análise de áudio em tempo real." },
  { nome: "Talktastic", url: "https://talktastic.com/", descricao: "Transcrição inteligente de conversas e reuniões com IA." },
  { nome: "VibeVoice", url: "https://microsoft.github.io/VibeVoice/", descricao: "Projeto da Microsoft para transcrição e síntese de voz com IA." },
  { nome: "Superwhisper", url: "https://superwhisper.com/", descricao: "Transcrição rápida e precisa de áudio para texto com tecnologia avançada." },
  { nome: "Better Dictation", url: "https://betterdictation.com/", descricao: "Ditado e transcrição aprimorados com inteligência artificial." },
  { nome: "Monologue", url: "https://www.monologue.to/", descricao: "Ferramenta de IA para transcrever monólogos e apresentações." },
  { nome: "Liquid AI LFM2 Audio", url: "https://www.liquid.ai/blog/lfm2-audio-an-end-to-end-audio-foundation-model", descricao: "Modelo de fundação de áudio end-to-end da Liquid AI para transcrição e análise." },
  { nome: "Vidnoz Text to Speech", url: "https://pt.vidnoz.com/text-to-speech.html", descricao: "Conversor de texto em áudio com vozes realistas em português." },
  { nome: "Sonix", url: "https://sonix.ai/pt", descricao: "Transcrição automática de áudio e vídeo em português com alta precisão." },
  { nome: "Notta", url: "https://www.notta.ai/pl/landing-page/audio-to-text", descricao: "Converte áudio em texto rapidamente com IA avançada." },
  { nome: "ScreenApp", url: "https://screenapp.io/pt/features/meeting-minutes-generator", descricao: "Gerador de atas de reunião a partir de áudio com IA." },
];

export default function TranscreverAudio() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <MicrophoneIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Transcrever áudio</h1>
      </div>
      <p className="mb-8 text-gray-600">
        Ferramentas de IA para transcrever áudio em texto com precisão, rapidez e suporte a múltiplos idiomas.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <a
            key={f.nome}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >
            <h2 className="font-semibold text-lg mb-1">{f.nome}</h2>
            <div className="text-gray-500 text-sm">{f.descricao}</div>
          </a>
        ))}
      </div>

      <FAQSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "O que é transcrever áudio?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Transcrever áudio é o processo de converter fala em texto escrito. Com ferramentas de IA, esse processo se tornou automático, rápido e preciso, permitindo transcrever reuniões, podcasts, entrevistas e palestras em segundos."
                }
              },
              {
                "@type": "Question",
                "name": "Qual a melhor IA para transcrever áudio em texto?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As melhores IAs para transcrever áudio em texto incluem Speechify, Wisprflow, Willowvoice, Superwhisper e VibeVoice, oferecendo alta precisão, suporte multilíngue e edição integrada."
                }
              },
              {
                "@type": "Question",
                "name": "Como funciona a IA para transcrever áudio?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A IA para transcrever áudio utiliza modelos de reconhecimento de fala treinados em milhões de horas de áudio, identificando padrões de voz, sotaques e contextos para converter com precisão o que foi dito em texto."
                }
              },
              {
                "@type": "Question",
                "name": "Text to speech IA é o mesmo que transcrição?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não. Text to speech (TTS) converte texto em áudio falado, enquanto transcrição faz o oposto: converte áudio em texto escrito. Ambas tecnologias usam IA, mas com objetivos inversos."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
