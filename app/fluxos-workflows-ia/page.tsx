import { ArrowPathIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ferramentas = [
  { nome: "Dafthunk", url: "https://www.dafthunk.com/", descricao: "Construa fluxos e automações com IA usando ações reutilizáveis e orquestração visual." },
  { nome: "Tines", url: "https://www.tines.com/", descricao: "Plataforma de automação visual com IA para criar workflows sem código." },
  { nome: "UiPath Release Hub", url: "https://www.uipath.com/product/release-hub", descricao: "Orquestração e automação de processos com IA para empresas." },
  { nome: "Apache Airflow", url: "https://airflow.apache.org/", descricao: "Plataforma open-source para orquestrar workflows complexos programaticamente." },
  { nome: "Sim.ai", url: "https://www.sim.ai/", descricao: "Plataforma de IA para automação de workflows e processos empresariais." },
  { nome: "Qntrl", url: "https://www.qntrl.com/pt-br/lp/workflow-orchestration.html", descricao: "Plataforma unificada para criar, automatizar e gerenciar workflows com orquestração inteligente." },
];

export const metadata = {
  title: "Inteligencia artificial para Fluxos e Workflows",
  description: "Ferramentas de IA para criar, orquestrar e automatizar fluxos e workflows em sua empresa.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/fluxos-workflows-ia',
  },
};

export default function FluxosWorkflowsIAPage() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>

      <div className="flex items-center gap-3 mb-8">
        <ArrowPathIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Fluxos e Workflows com IA</h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((ferramenta) => (
          <a
            key={ferramenta.nome}
            href={ferramenta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >
            <h2 className="font-semibold text-lg mb-1">{ferramenta.nome}</h2>
            <div className="text-gray-500 text-sm">{ferramenta.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
