import { UserIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "Assistentes de IA e pessoais",
  description: "Ferramentas para criar e usar assistentes de IA pessoais e profissionais.",
  alternates: { canonical: "https://www.hypehour.com.br/assistentes-de-ia" },
};

const ferramentas = [
  { nome: "Remio", url: "https://www.remio.ai/", descricao: "Assistente de IA para organizar e automatizar tarefas pessoais e de trabalho." },
  { nome: "Yutori Scouts", url: "https://yutori.com/scouts", descricao: "Plataforma de scouts/assistentes para busca e acompanhamento de tarefas." },
  { nome: "Huxe", url: "https://www.huxe.com/", descricao: "Assistente pessoal com automações e integração de ferramentas." },
  { nome: "OpenScouts", url: "https://openscouts.firecrawl.dev/", descricao: "Projeto open-source para scouts/assistentes com crawling e ações." },
  { nome: "Kortex", url: "https://yaksh1.github.io/Kortex-Landing-Page", descricao: "Assistente de IA com memória e execução de tarefas complexas." },
  { nome: "Integrity", url: "https://integrity.sh/", descricao: "Assistente focado em segurança e confiabilidade para fluxos profissionais." },
];

export default function AssistentesDeIA() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <UserIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Assistentes de IA e pessoais</h1>
      </div>
      <p className="mb-8 text-gray-600">Assistentes de IA para produtividade, organização e automação de tarefas.</p>
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
