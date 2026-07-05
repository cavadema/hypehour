import { ArchiveBoxIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import ExpandableContent from "./ExpandableContent";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

export const metadata = {
  title: "Análise de dados com IA",
  description: "Ferramentas de IA para análise, visualização e processamento de dados.",
  alternates: { canonical: "https://www.hypehour.com.br/analise-de-dados" },
  openGraph: {
    title: "Análise de dados com IA",
    description: "Ferramentas de IA para análise, visualização e processamento de dados.",
    url: "https://www.hypehour.com.br/analise-de-dados",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Análise de dados com IA",
    description: "Ferramentas de IA para análise, visualização e processamento de dados.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

const ferramentas = [
  { nome: "ChartGen.ai", url: "https://chartgen.ai/", descricao: "Transforme dados brutos em gráficos e diagramas profissionais automaticamente com IA, sem precisar de design ou código." },
  { nome: "Ada.im", url: "https://ada.im/", descricao: "Analista de dados de IA que automatiza limpeza, SQL e geração de relatórios empresariais." },
  { nome: "marimo", url: "https://marimo.io/", descricao: "Notebook reativo para Python, open-source e reprodutível. Alternativa moderna ao Jupyter que roda como app." },
  { nome: "Livedocs", url: "https://livedocs.com/", descricao: "Copiloto de dados com IA para gerar gráficos e insights de CSVs e bancos de dados automaticamente." },
  { nome: "CData", url: "https://www.cdata.com/", descricao: "Conectividade de dados em tempo real para alimentar IA e analytics a partir de centenas de fontes." },
  { nome: "RizzCalc", url: "https://rizzcalc.com/", descricao: "Modelagem financeira e análise de dados com IA diretamente no Google Sheets." },
  { nome: "Retool", url: "https://retool.com/", descricao: "Construa ferramentas internas e workflows operacionais com componentes nativos de IA." },
  { nome: "Compass", url: "https://compass.dagster.io/", descricao: "Assistente de dados nativo do Slack para insights e visualizações instantâneas." },
  { nome: "PostHog", url: "https://posthog.com/", descricao: "Plataforma de product analytics com eventos, funis, retenção e comportamento do usuário com recursos de IA." },
  { nome: "A2GO", url: "https://a2go.ai/", descricao: "Plataforma de IA para análise de dados e automação de processos com insights inteligentes." },
  { nome: "Findly", url: "https://www.findly.ai/pt", descricao: "Assistente de IA para análise de dados que responde perguntas em linguagem natural sobre seus dados." },
  { nome: "Excelmatic", url: "https://excelmatic.ai/pt/", descricao: "IA para automatizar tarefas no Excel e Google Sheets com fórmulas e análises inteligentes." },
  { nome: "Arcwise", url: "https://arcwise.app/", descricao: "Copiloto de IA para planilhas que explica, corrige e gera fórmulas com contexto de dados." },
  { nome: "Firecrawl", url: "https://www.firecrawl.dev/", descricao: "Ferramenta de IA para extrair e transformar dados de websites em formatos estruturados para análise." },
  { nome: "Promptloop", url: "https://www.promptloop.com/", descricao: "IA para manipular e transformar dados diretamente em planilhas usando prompts." },
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
  { nome: "Julius AI", url: "/ferramentas/julius-ai", descricao: "Analisa planilhas e dados em linguagem natural, gerando gráficos, análises estatísticas e insights automaticamente sem código." },
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
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para Análise de dados</span>
      </nav>
      <div className="flex items-center gap-3 mb-8">
        <ArchiveBoxIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Análise de dados</h1>
      </div>
      <ExpandableContent />
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <ToolCard key={f.nome} nome={f.nome} url={f.url} descricao={f.descricao} />
        ))}
      </div>
      <div className="mt-12">
        <ComparativoFerramentas />
      </div>
      <ComoEscolher />
      <ProTips />
      <FAQSection />

      <CategoryPageSchema
        title="Análise de dados com IA"
        description="Ferramentas de IA para análise, visualização e processamento de dados."
        canonicalUrl="https://www.hypehour.com.br/analise-de-dados"
        ferramentas={ferramentas}
      />
    </main>
  );
}
