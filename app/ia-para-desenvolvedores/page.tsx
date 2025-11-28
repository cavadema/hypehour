import { CodeBracketIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "IA para desenvolvedores - Hypehour",
  description: "Ferramentas de IA voltadas para desenvolvedores: assistentes de código, autocompletes e ferramentas colaborativas.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/ia-para-desenvolvedores',
  },
};

const ferramentas = [
  {
    nome: "GitHub Copilot",
    url: "https://github.com/features/copilot",
    descricao: "Assistente de código da GitHub/OpenAI para autocompletar e gerar trechos de código.",
  },
  { nome: "Cursor", url: "https://www.cursor.com", descricao: "IDE com assistente de código e recursos de AI." },
  { nome: "Claude Code", url: "#", descricao: "Assistente de código baseado na família Claude (Anthropic)." },
  {
    nome: "Windsurf",
    url: "https://windsurf.com/",
    descricao: "Editor com agente Cascade e suporte a comandos automáticos para manter o fluxo de trabalho.",
  },
  {
    nome: "AWS CodeWhisperer",
    url: "https://aws.amazon.com/pt/q/developer/",
    descricao: "Assistente da AWS para gerar código, revisar e operar workloads diretamente na nuvem.",
  },
  {
    nome: "Tabnine",
    url: "https://www.tabnine.com/",
    descricao: "Autocompletar privado que aprende com o seu código e funciona em múltiplas IDEs.",
  },
  {
    nome: "Google AntiGravity",
    url: "https://antigravity.google/",
    descricao: "Ferramenta da Google para impulsionar produtividade com IA e fluxos agentic.",
  },
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
}
