import { CodeBracketIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "IA para vibe coding - Hypehour",
  description: "Ferramentas e IAs para acelerar seu fluxo de desenvolvimento: editores, assistentes e automações.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/ia-para-vibe-coding',
  },
};

const ferramentas = [
  { nome: "Lovable", url: "https://lovable.dev/", descricao: "IA para programação, resumos e automações." },
  { nome: "Bolt.new", url: "https://bolt.new/", descricao: "Ferramenta para acelerar desenvolvimento e automações." },
  { nome: "v0", url: "https://v0.dev/", descricao: "Plataforma para criação rápida de interfaces e automações." },
  { nome: "Replit", url: "https://replit.com", descricao: "IDE online com recursos colaborativos e assistentes de código." },
  { nome: "Base44", url: "https://base44.com", descricao: "Ferramenta/infra de IA para criar apps completos." },
  { nome: "Trae", url: "https://trae.ai", descricao: "IDE adaptativo com IA da ByteDance." },
  { nome: "Cursor", url: "https://www.cursor.com", descricao: "IDE com assistente de código e recursos AI." },
  { nome: "Tempo", url: "https://tempo.new", descricao: "Ferramenta focada em produtividade para devs React." },
  { nome: "Create", url: "https://www.create.xyz", descricao: "Ferramenta de geração de apps via prompt." },
  { nome: "Google AI Studio", url: "https://aistudio.google.com/", descricao: "Plataforma de ferramentas AI do Google (Studio)." },
  { nome: "Cody", url: "https://www.sourcegraph.com/cody", descricao: "Assistente de código da Sourcegraph." },
];

export default function IaParaVibeCoding() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <CodeBracketIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl font-bold">IA para Vibe Coding</h1>
      </div>
      <p className="mb-8 text-gray-600">Ferramentas que ajudam no fluxo de desenvolvimento, automações e geração de código.</p>
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
