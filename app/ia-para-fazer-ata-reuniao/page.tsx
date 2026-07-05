import { DocumentTextIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

export const metadata = {
  title: "Inteligência Artificial para Ata de Reunião",
  description: "As melhores ferramentas de IA para gerar atas de reunião automaticamente com precisão e velocidade.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/ia-para-fazer-ata-reuniao',
  },
  openGraph: {
    title: "Inteligência Artificial para Ata de Reunião",
    description: "As melhores ferramentas de IA para gerar atas de reunião automaticamente com precisão e velocidade.",
    url: "https://www.hypehour.com.br/ia-para-fazer-ata-reuniao",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Inteligência Artificial para Ata de Reunião",
    description: "As melhores ferramentas de IA para gerar atas de reunião automaticamente com precisão e velocidade.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

const ferramentas = [
  { nome: "Radiant", url: "https://radiantapp.com/", descricao: "Transforme suas reuniões em atas acionáveis e insights estratégicos com IA avançada." },
  { nome: "Circleback", url: "https://circleback.ai/", descricao: "IA para reuniões que gera notas precisas, identifica itens de ação e se integra ao seu CRM." },
  { nome: "Fellow", url: "https://fellow.ai/", descricao: "Plataforma IA para gerenciar reuniões, criar atas e acompanhar ações automaticamente." },
  { nome: "Reclaim", url: "https://reclaim.ai", descricao: "Assistente de IA para otimizar agenda e gerar resumos de reuniões." },
  { nome: "tldv", url: "https://tldv.io/pt-br/", descricao: "Transcrição e resumo automático de reuniões com IA em português." },
  { nome: "Grain", url: "https://grain.com/", descricao: "Plataforma para capturar e compartilhar momentos-chave de reuniões com IA." },
  { nome: "Tactiq", url: "/ferramentas/tactiq", descricao: "Gerador de atas com IA para Zoom, Meet e Teams." },
  { nome: "Read.ai", url: "https://www.read.ai/pt", descricao: "IA para transcrever, resumir e gerar insights de reuniões em tempo real." },
  { nome: "MeetGeek", url: "https://meetgeek.ai/pt/ai-meeting-minutes", descricao: "Plataforma que gera atas automáticas e identifica pontos de ação em reuniões." },
  { nome: "Otter AI", url: "/ferramentas/otter-ai", descricao: "Transcrição e resumo de reuniões com IA, suportando múltiplas plataformas." },
  { nome: "Fathom", url: "https://www.fathom.ai/", descricao: "Registra, transcreve e resume reuniões automaticamente com resumos acionáveis." },
  { nome: "Supernormal", url: "https://www.supernormal.com/", descricao: "Gera atas de qualidade profissional diretamente de suas reuniões com IA." },
  { nome: "Fireflies", url: "https://fireflies.ai/", descricao: "Transcrição de reuniões, pesquisa e análise de conversas com IA." },
  { nome: "Smartnoter", url: "https://smartnoter.ai/", descricao: "Aplicativo de IA para tomar notas em reuniões com organização automática." },
  { nome: "Cockatoo", url: "https://www.cockatoo.com/", descricao: "Plataforma IA para transcrever, traduzir e resumir reuniões." },
  { nome: "ClickMeeting", url: "https://clickmeeting.com/", descricao: "Plataforma de videoconferência com IA para gravação e resumo de reuniões." },
  { nome: "ScreenApp", url: "https://screenapp.io/pt/features/meeting-minutes-generator", descricao: "Gerador de atas de reunião a partir de áudio com IA." },
  { nome: "Granola", url: "/ferramentas/granola-ai", descricao: "Assistente de IA para transcrever, resumir e extrair insights automáticos de reuniões sem robôs." },
  { nome: "Noty", url: "https://noty.ai/", descricao: "Assistente de IA que transcreve reuniões, gera resumos e extrai tarefas automaticamente." },
  { nome: "Zoom AI Assistant", url: "https://www.zoom.com/pt/products/ai-assistant/", descricao: "Assistente de IA nativo do Zoom para transcrever reuniões, gerar atas e extrair insights." },
];

export default function IaParaFazerAtaReuniao() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para fazer ata de reunião</span>
      </nav>
      <div className="flex items-center gap-3 mb-8">
        <DocumentTextIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para fazer ata de reunião</h1>
      </div>
      <ExpandableContent />
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <ToolCard key={f.nome} nome={f.nome} url={f.url} descricao={f.descricao} />
        ))}
      </div>
      <div className="mt-12">
        <ComparativoFerramentas />
      </div>
      <ComoEscolher />
      <ProTips />
      <FAQSection />

      <CategoryPageSchema
        title="Inteligência Artificial para Ata de Reunião"
        description="As melhores ferramentas de IA para gerar atas de reunião automaticamente com precisão e velocidade."
        canonicalUrl="https://www.hypehour.com.br/ia-para-fazer-ata-reuniao"
        ferramentas={ferramentas}
      />
    </main>
  );
}
