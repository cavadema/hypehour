import { GlobeAltIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "Criação de Agentes de IA",
  description: "Ferramentas para criar e orquestrar agentes de IA rapidamente.",
  alternates: {
    canonical: "https://www.hypehour.com.br/criacao-agentes-ia",
  },
};

const ferramentas = [
  { nome: "Incredible", url: "https://www.incredible.one/", descricao: "Plataforma para criar agentes de IA com orquestração de fluxos." },
  { nome: "Tate A Tate", url: "https://www.tate-a-tate.com/", descricao: "Construa agentes conversacionais com recursos avançados." },
  { nome: "Okareo", url: "https://okareo.com/", descricao: "Teste e monitore agentes de IA em produção." },
  { nome: "TangleML", url: "https://tangleml.com/", descricao: "Framework para agentes com controle de ferramentas e memória." },
  { nome: "Merge Agent handler", url: "https://www.merge.dev/products/merge-agent-handler/", descricao: "Plataforma com IA para criar agentes que gerenciam integrações e APIs automaticamente." },
  { nome: "Verdent", url: "https://www.verdent.ai/", descricao: "Plataforma com IA para gerar insights e otimizar processos agrícolas com dados em tempo real." },

];

export default function CriacaoAgentesIA() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <GlobeAltIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Criação de Agentes de IA</h1>
      </div>
      <p className="mb-8 text-gray-600">Ferramentas de IA para criar, testar e operar agentes com rapidez.</p>
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
