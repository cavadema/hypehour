import { MegaphoneIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "Gerador de Voz com IA",
  description: "Ferramentas de IA para gerar voz natural em português (TTS).",
  alternates: { canonical: "https://www.hypehour.com.br/gerador-de-voz-ia" },
};

const ferramentas = [
  { nome: "Deevid", url: "https://deevid.ai/pt/text-to-speech", descricao: "Geração de voz em português com alta naturalidade." },
  { nome: "Canva", url: "https://www.canva.com/pt_br/recursos/gerador-voz-ia/", descricao: "Gerador de voz integrado ao editor Canva." },
  { nome: "ElevenLabs", url: "https://elevenlabs.io/pt", descricao: "Referência em TTS com vozes realistas e clonagem de voz." },
  { nome: "VidNoz", url: "/ferramentas/vidnoz", descricao: "Gerador de voz IA com vozes variadas em português." },
  { nome: "Speaktor", url: "https://speaktor.com/", descricao: "Conversão de texto para fala com múltiplos idiomas." },
  { nome: "Invideo", url: "/ferramentas/invideo", descricao: "Vozes IA integradas ao fluxo de criação de vídeos." },
  { nome: "Speechify", url: "/ferramentas/speechify", descricao: "Gerador de voz IA popular com vozes naturais." },
  { nome: "Freepik", url: "https://br.freepik.com/ai/gerador-voz", descricao: "Ferramenta IA para voz dentro do ecossistema Freepik." },
  { nome: "ClipChamp", url: "/ferramentas/clipchamp", descricao: "Gerador de voz integrado ao editor de vídeos ClipChamp." },
  { nome: "TTS Maker", url: "https://pro.ttsmaker.com/br/home", descricao: "Geração de voz rápida com suporte a português." },
  { nome: "Epidemic Sound", url: "https://www.epidemicsound.com/pt/voices/", descricao: "Biblioteca de vozes geradas e recursos sonoros." },
  { nome: "Topmediai", url: "https://br.topmediai.com/gerador-de-voz/geradores-de-voz-de-personagens/", descricao: "Vozes de personagens e estilos variados em português." },
  { nome: "CapCut", url: "https://www.capcut.com/pt-br/tools/ai-voice-generator", descricao: "Gerador de voz IA dentro do CapCut." },
  { nome: "Lovo", url: "https://lovo.ai/pt", descricao: "Plataforma TTS com vozes profissionais em português." },
  { nome: "Kapwing", url: "/ferramentas/kapwing", descricao: "Gerador de voz IA integrado ao editor Kapwing." },
  { nome: "Fish Audio", url: "https://fish.audio/pt/", descricao: "Vozes IA com foco em qualidade e variedade." },
  { nome: "Kits", url: "https://www.kits.ai/pt/ai-voice-generators", descricao: "Geradores de voz e clonagem com IA." },
  { nome: "Falatron", url: "https://falatron.com/", descricao: "Conversão de texto em voz com suporte a português." },
  { nome: "Luvvoice", url: "/ferramentas/luvvoice", descricao: "Gere vozes IA em português e outros 70 idiomas gratuitamente." },
  { nome: "Synthesia", url: "/ferramentas/synthesia", descricao: "Vozes IA integradas à criação de vídeos com avatares." },
  { nome: "FlexClip", url: "/ferramentas/flexclip", descricao: "Ferramenta de voz IA no editor FlexClip." },
  { nome: "Veed", url: "/ferramentas/veed", descricao: "Gerador de voz IA para vídeos no VEED." },
  { nome: "Amazon Polly", url: "https://aws.amazon.com/pt/polly/", descricao: "Serviço TTS da AWS com vozes em português." },
  { nome: "SpeechGen", url: "https://speechgen.io/pt/", descricao: "Conversor de texto para fala com IA e vozes naturais." },
  { nome: "WeVoicer", url: "/ferramentas/wevoicer", descricao: "Narração em IA com vozes naturais e personalizáveis para projetos audiovisuais." },
  { nome: "Cartesia", url: "https://cartesia.ai/", descricao: "Agentes de voz com IA que podem atender chamadas, receber pedidos ou responder a perguntas de clientes usando uma fala natural, semelhante à humana." },
  { nome: "Chatterbox", url: "https://www.resemble.ai/chatterbox/", descricao: "Agentes de voz em tempo real com IA para conversas naturais e interativas." },
  { nome: "Grok Voice Agent API", url: "https://x.ai/news/grok-voice-agent-api", descricao: "API da xAI para criar agentes de voz com IA." },

];

export default function GeradorDeVozIA() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <MegaphoneIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Gerador de Voz com IA</h1>
      </div>
      <p className="mb-8 text-gray-600">Ferramentas TTS para criar narrações e vozes naturais em português.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <a key={f.nome} href={f.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100">
            <h2 className="font-semibold text-lg mb-1">{f.nome}</h2>
            <div className="text-gray-500 text-sm">{f.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
