import { DocumentTextIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "IA para Planejamento, Organização e Produtividade",
  description: "Ferramentas com IA para planejar rotinas, organizar projetos e aumentar a produtividade.",
  alternates: { canonical: "https://www.hypehour.com.br/planejamento" },
};

const ferramentas = [
  { nome: "Northr", url: "https://northr.ai/", descricao: "Sistema de planejamento adaptativo que ajuda a definir direção estratégica e automatiza o gerenciamento semanal com IA." },
  { nome: "Tiimo", url: "https://www.tiimoapp.com/", descricao: "App de planejamento diário e rotinas com foco, lembretes e organização." },
  { nome: "Plander AI", url: "https://plander.ai/", descricao: "Planejamento com IA para objetivos, tarefas e cronogramas inteligentes." },
  { nome: "MyMap.ai Planning Tool", url: "https://www.mymap.ai/pt/planning-tool", descricao: "Ferramenta de planejamento com IA para mapas mentais, brainstorm e organização." },
  { nome: "Notion", url: "https://www.notion.com/pt", descricao: "Plataforma de organização e produtividade com IA para documentos, tarefas e bases." },
];

export default function PlanejamentoPage() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <DocumentTextIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Planejamento</h1>
      </div>
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
