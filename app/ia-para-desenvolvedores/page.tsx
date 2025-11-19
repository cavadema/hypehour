import { CodeBracketIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "IA para desenvolvedores - Hypehour",
  description: "Ferramentas de IA voltadas para desenvolvedores: assistentes de código, autocompletes e ferramentas colaborativas.",
};

const ferramentas = [
  { nome: "GitHub Copilot", url: "https://github.com/features/copilot", descricao: "Assistente de código da GitHub/OpenAI para autocompletar e gerar trechos de código." },
  { nome: "Cursor", url: "https://www.cursor.com", descricao: "IDE com assistente de código e recursos de AI." },
  { nome: "Claude Code", url: "#", descricao: "Assistente de código baseado na família Claude (Anthropic)." },
];

export default function IaParaDesenvolvedores() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <CodeBracketIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl font-bold">IA para Desenvolvedores</h1>
      </div>
      <p className="mb-8 text-gray-600">Ferramentas e assistentes pensados para programadores: geração de código, revisões e autocompletes inteligentes.</p>
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
