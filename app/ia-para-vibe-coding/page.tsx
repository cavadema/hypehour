import { CodeBracketIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "IA para vibe coding - SearchIA",
  description: "Ferramentas e IAs para acelerar seu fluxo de desenvolvimento: editores, assistentes e automações.",
};

const ferramentas = [
  { nome: "Lovable", url: "#", descricao: "IA para programação, resumos e automações." },
  { nome: "Bolt.new", url: "#", descricao: "Ferramenta para acelerar desenvolvimento e automações." },
  { nome: "v0", url: "#", descricao: "Plataforma para criação rápida de interfaces e automações." },
  { nome: "Replit", url: "https://replit.com", descricao: "IDE online com recursos colaborativos e assistentes de código." },
  { nome: "Base44", url: "#", descricao: "Ferramenta/infra de IA (verificar site oficial)." },
  { nome: "Trae", url: "#", descricao: "Assistente / ferramenta de desenvolvimento (verificar site)." },
  { nome: "Cursor", url: "https://www.cursor.com", descricao: "IDE com assistente de código e recursos AI." },
  { nome: "Tempo", url: "#", descricao: "Ferramenta focada em produtividade para devs (verificar site)." },
  { nome: "Create", url: "#", descricao: "Ferramenta de geração/auxílio no desenvolvimento." },
  { nome: "Google AI Studio", url: "#", descricao: "Plataforma de ferramentas AI do Google (Studio)." },
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
            <div className="font-semibold text-lg mb-1">{f.nome}</div>
            <div className="text-gray-500 text-sm">{f.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
