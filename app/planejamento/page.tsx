import FAQSection from "./FAQSection";
import ExpandableContent from "./ExpandableContent";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

export const metadata = {
  title: "IA para Planejamento, Organização e Produtividade",
  description: "Ferramentas com IA para planejar rotinas, organizar projetos e aumentar a produtividade.",
  alternates: { canonical: "https://www.hypehour.com.br/planejamento" },
  openGraph: {
    title: "IA para Planejamento, Organização e Produtividade",
    description: "Ferramentas com IA para planejar rotinas, organizar projetos e aumentar a produtividade.",
    url: "https://www.hypehour.com.br/planejamento",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "IA para Planejamento, Organização e Produtividade",
    description: "Ferramentas com IA para planejar rotinas, organizar projetos e aumentar a produtividade.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

const ferramentas = [
  { nome: "Todoist Ramble", url: "https://www.todoist.com/pt-BR/ramble", descricao: "Ferramenta do Todoist que utiliza IA para capturar ideias e tarefas via voz de forma rápida e inteligente." },
  { nome: "Linear", url: "https://linear.app/", descricao: "Sistema de rastreamento de projetos e roteiros focado em velocidade para equipes de produtos modernas, simplificando sprints e issues." },
  { nome: "Northr", url: "https://northr.ai/", descricao: "Sistema de planejamento adaptativo que ajuda a definir direção estratégica e automatiza o gerenciamento semanal com IA." },
  { nome: "Tiimo", url: "https://www.tiimoapp.com/", descricao: "App de planejamento diário e rotinas com foco, lembretes e organização." },
  { nome: "Plander AI", url: "https://plander.ai/", descricao: "Planejamento com IA para objetivos, tarefas e cronogramas inteligentes." },
  { nome: "MyMap.ai Planning Tool", url: "https://www.mymap.ai/pt/planning-tool", descricao: "Ferramenta de planejamento com IA para mapas mentais, brainstorm e organização." },
  { nome: "Notion", url: "https://www.notion.com/pt", descricao: "Plataforma de organização e produtividade com IA para documentos, tarefas e bases." },
];

export default function PlanejamentoPage() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para Planejamento</span>
      </nav>
      <div className="flex items-center gap-3 mb-8">
        <DocumentTextIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Planejamento</h1>
      </div>
      <ExpandableContent />
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <ToolCard key={f.nome} nome={f.nome} url={f.url} descricao={f.descricao} />
        ))}
      </div>
          <FAQSection />

      <CategoryPageSchema
        title="IA para Planejamento, Organização e Produtividade"
        description="Ferramentas com IA para planejar rotinas, organizar projetos e aumentar a produtividade."
        canonicalUrl="https://www.hypehour.com.br/planejamento"
        ferramentas={ferramentas}
      />
    </main>
  );
}
