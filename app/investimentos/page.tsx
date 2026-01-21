import { ChartBarIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";

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
};

export default function InvestimentosPage() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>

      <div className="flex items-center gap-3 mb-8">
        <ChartBarIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para investimentos</h1>
      </div>
      <ExpandableContent />
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
