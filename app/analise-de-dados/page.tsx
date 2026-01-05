import { ArchiveBoxIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";
import ExpandableContent from "./ExpandableContent";

export const metadata = {
  title: "Análise de dados com IA",
  description: "Ferramentas de IA para análise, visualização e processamento de dados.",
  alternates: { canonical: "https://www.hypehour.com.br/analise-de-dados" },
};

const ferramentas = [
  { nome: "Firecrawl", url: "https://www.firecrawl.dev/", descricao: "Ferramenta de IA para extrair e transformar dados de websites em formatos estruturados para análise." },
  { nome: "Alteryx", url: "https://www.alteryx.com/pt-br/", descricao: "Plataforma de análise de dados com IA para preparação, mistura e análise avançada de dados." },
  { nome: "FormulaBot", url: "https://www.formulabot.com/", descricao: "IA para criar fórmulas, scripts e automatizar análise de dados em planilhas." },
  { nome: "Prax AI", url: "https://www.prax.ai/", descricao: "Plataforma de análise de dados com IA para insights e automação inteligente." },
  { nome: "Zettadata", url: "https://zettadata.ai/", descricao: "Plataforma de análise de dados com IA para insights automatizados." },
  { nome: "Basedash", url: "https://www.basedash.com/", descricao: "Interface de IA para visualizar e editar dados do seu banco." },
  { nome: "Rybbit", url: "https://rybbit.com/", descricao: "Análise de dados com IA e automações para decisões rápidas." },
  { nome: "Swetrix", url: "https://swetrix.com/", descricao: "Analytics de privacidade com IA para sites e apps." },
  { nome: "MVP Match", url: "https://www.mvpmatch.co/", descricao: "Plataforma com IA para conectar talentos e projetos baseada em dados." },
  { nome: "Voxel51", url: "https://voxel51.com/", descricao: "Análise de dados visuais e modelos de IA para visão computacional." },
  { nome: "Zoho Analytics Zia", url: "https://www.zoho.com/pt-br/analytics/zia/", descricao: "Assistente de IA para análise de dados e insights automatizados." },
  { nome: "Google Cloud AI Data Analytics", url: "https://cloud.google.com/use-cases/ai-data-analytics?hl=pt-BR", descricao: "Soluções de análise de dados com IA no Google Cloud." },
  { nome: "Julius AI", url: "https://julius.ai/", descricao: "Assistente de IA para análise de dados e visualizações inteligentes." },
  { nome: "Coupler.io", url: "https://www.coupler.io/", descricao: "Integração e análise de dados com automação via IA." },
  { nome: "PowerDrill", url: "https://powerdrill.ai/", descricao: "IA para análise de dados e geração de insights de negócio." },
  { nome: "DataCamp DataLab", url: "https://www.datacamp.com/datalab", descricao: "Ambiente de análise de dados com IA para cientistas de dados." },
  { nome: "Polymer Search", url: "https://www.polymersearch.com/", descricao: "Transforme dados em dashboards inteligentes com IA." },
  { nome: "Akkio", url: "https://www.akkio.com/", descricao: "Plataforma de IA para análise preditiva e decisões baseadas em dados." },
  { nome: "Echobase", url: "https://echobase.ai/", descricao: "IA para consultar e analisar dados com chat inteligente." },
  { nome: "BlazeSQL", url: "https://www.blazesql.com/", descricao: "Gere SQL com IA a partir de perguntas em linguagem natural." },
];

export default function AnaliseDeDados() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <ArchiveBoxIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Análise de dados</h1>
      </div>
      <ExpandableContent />
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <a key={f.nome} href={f.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100">
            <h2 className="font-semibold text-lg mb-1">{f.nome}</h2>
            <div className="text-gray-500 text-sm">{f.descricao}</div>
          </a>
        ))}
      </div>
      <FAQSection />
    </main>
  );
}
