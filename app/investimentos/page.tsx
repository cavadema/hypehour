import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

const ferramentas = [
  { nome: "SemiAnalysis", url: "https://semianalysis.com/", descricao: "Pesquisa e análise profunda sobre infraestrutura de semicondutores e IA." },
  { nome: "Becomeautonomous", url: "https://becomeautonomous.com/", descricao: "Plataforma de consultoria financeira com estratégias baseadas em pesquisa para rebalanceamento de portfólio e gestão de impostos." },
  { nome: "Optivault", url: "https://optivault.co/", descricao: "Consultor financeiro pessoal com IA. Automatize economias, rastreie patrimônio e receba conselhos financeiros." },
  { nome: "Public", url: "https://public.com/", descricao: "Plataforma de investimentos com IA para análise de mercado e recomendações personalizadas." },
  { nome: "Trade Ideas", url: "https://www.trade-ideas.com/", descricao: "IA para identificar oportunidades de trading e análise preditiva de ações." },
  { nome: "TrendSpider", url: "https://trendspider.com/", descricao: "Análise técnica automatizada com IA para traders e investidores." },
  { nome: "Warren AI", url: "https://br.investing.com/warrenai?entry=academy", descricao: "Assistente de IA para análise de investimentos e educação financeira." },
  { nome: "Grana Capital", url: "https://grana.capital/", descricao: "Plataforma brasileira com IA para gestão de investimentos e análise de portfólio." },
];

export const metadata = {
  title: "IA para investimentos gratuitos",
  description: "Ferramentas de inteligência artificial para análise de investimentos, trading e gestão de portfólio.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/investimentos',
  },
  openGraph: {
    title: "IA para investimentos gratuitos",
    description: "Ferramentas de inteligência artificial para análise de investimentos, trading e gestão de portfólio.",
    url: "https://www.hypehour.com.br/investimentos",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "IA para investimentos gratuitos",
    description: "Ferramentas de inteligência artificial para análise de investimentos, trading e gestão de portfólio.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function InvestimentosPage() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para investimentos</span>
      </nav>

      <div className="flex items-center gap-3 mb-8">
        <ChartBarIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para investimentos</h1>
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
        title="IA para investimentos gratuitos"
        description="Ferramentas de inteligência artificial para análise de investimentos, trading e gestão de portfólio."
        canonicalUrl="https://www.hypehour.com.br/investimentos"
        ferramentas={ferramentas}
      />
    </main>
  );
}
