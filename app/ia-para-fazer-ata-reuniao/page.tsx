import { DocumentTextIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";

export const metadata = {
  title: "Inteligência Artificial para Ata de Reunião",
  description: "As melhores ferramentas de IA para gerar atas de reunião automaticamente com precisão e velocidade.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/ia-para-fazer-ata-reuniao',
  },
};

const ferramentas = [
  { nome: "Fellow", url: "https://fellow.ai/", descricao: "Plataforma IA para gerenciar reuniões, criar atas e acompanhar ações automaticamente." },
  { nome: "Reclaim", url: "https://reclaim.ai", descricao: "Assistente de IA para otimizar agenda e gerar resumos de reuniões." },
  { nome: "tldv", url: "https://tldv.io/pt-br/", descricao: "Transcrição e resumo automático de reuniões com IA em português." },
  { nome: "Grain", url: "https://grain.com/", descricao: "Plataforma para capturar e compartilhar momentos-chave de reuniões com IA." },
  { nome: "Tactiq", url: "https://tactiq.io/pt-br/ferramentas/ai-meeting-minutes-generator", descricao: "Gerador de atas com IA para Zoom, Meet e Teams." },
  { nome: "Read.ai", url: "https://www.read.ai/pt", descricao: "IA para transcrever, resumir e gerar insights de reuniões em tempo real." },
  { nome: "MeetGeek", url: "https://meetgeek.ai/pt/ai-meeting-minutes", descricao: "Plataforma que gera atas automáticas e identifica pontos de ação em reuniões." },
  { nome: "Otter.ai", url: "https://otter.ai/", descricao: "Transcrição e resumo de reuniões com IA, suportando múltiplas plataformas." },
  { nome: "Fathom", url: "https://www.fathom.ai/", descricao: "Registra, transcreve e resume reuniões automaticamente com resumos acionáveis." },
  { nome: "Supernormal", url: "https://www.supernormal.com/", descricao: "Gera atas de qualidade profissional diretamente de suas reuniões com IA." },
  { nome: "Fireflies", url: "https://fireflies.ai/", descricao: "Transcrição de reuniões, pesquisa e análise de conversas com IA." },
  { nome: "Smartnoter", url: "https://smartnoter.ai/", descricao: "Aplicativo de IA para tomar notas em reuniões com organização automática." },
  { nome: "Cockatoo", url: "https://www.cockatoo.com/", descricao: "Plataforma IA para transcrever, traduzir e resumir reuniões." },
  { nome: "ClickMeeting", url: "https://clickmeeting.com/", descricao: "Plataforma de videoconferência com IA para gravação e resumo de reuniões." },
];

export default function IaParaFazerAtaReuniao() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <DocumentTextIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para fazer ata de reunião</h1>
      </div>
      <ExpandableContent />
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
    </main>
  );
}
