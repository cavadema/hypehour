import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import ExpandableContent from "./ExpandableContent";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

const ferramentas = [
  { nome: "Quantera", url: "https://www.quantera.ai/", descricao: "Agentes financeiros de IA para pesquisa de equity, insights e automação de fluxos de trabalho para instituições." },
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
  openGraph: {
    title: "Inteligencia artificial para Fluxos e Workflows",
    description: "Ferramentas de IA para criar, orquestrar e automatizar fluxos e workflows em sua empresa.",
    url: "https://www.hypehour.com.br/fluxos-workflows-ia",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Inteligencia artificial para Fluxos e Workflows",
    description: "Ferramentas de IA para criar, orquestrar e automatizar fluxos e workflows em sua empresa.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function FluxosWorkflowsIAPage() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">Fluxos e Workflows com IA</span>
      </nav>

      <div className="flex items-center gap-3 mb-8">
        <ArrowPathIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Fluxos e Workflows com IA</h1>
      </div>
      <ExpandableContent />

      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((ferramenta) => (
          <ToolCard key={ferramenta.nome} nome={ferramenta.nome} url={ferramenta.url} descricao={ferramenta.descricao} />
        ))}
      </div>
          <div className="mt-12">
            <ComparativoFerramentas />
          </div>
          <ComoEscolher />
          <ProTips />
          <FAQSection />

      <CategoryPageSchema
        title="Inteligencia artificial para Fluxos e Workflows"
        description="Ferramentas de IA para criar, orquestrar e automatizar fluxos e workflows em sua empresa."
        canonicalUrl="https://www.hypehour.com.br/fluxos-workflows-ia"
        ferramentas={ferramentas}
      />
    </main>
  );
}
