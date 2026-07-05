import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import { CalculatorIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

const ferramentas = [
    {
        nome: "Conrado",
        url: "https://cdcia.com.br/",
        descricao: "Inteligência Artificial para contabilidade que automatiza a análise de documentos e lançamentos.",
    },
    {
        nome: "IA Cont",
        url: "https://iacont.com.br/",
        descricao: "Plataforma que utiliza IA para otimizar processos contábeis e fiscais.",
    },
    {
        nome: "Dattos",
        url: "https://www.dattos.com.br/ai",
        descricao: "Solução de reconciliação de dados financeiros com recursos avançados de IA.",
    },
    {
        nome: "Truewind",
        url: "https://www.truewind.ai/",
        descricao: "Contabilidade e finanças impulsionadas por IA para startups e empresas em crescimento.",
    },
    {
        nome: "Indy",
        url: "https://weareindy.com/",
        descricao: "Ferramenta tudo-em-um para freelancers com recursos de contabilidade e gestão financeira.",
    },
    {
        nome: "Zeni",
        url: "https://www.zeni.ai/",
        descricao: "Plataforma financeira com IA que oferece contabilidade, pagamentos e insights em tempo real.",
    },
    {
        nome: "Docyt",
        url: "https://docyt.com/",
        descricao: "Automação de contabilidade e gestão de despesas com inteligência artificial.",
    },
  { nome: "Nume", url: "https://www.nume.ai/", descricao: "IA CFO que analisa dados financeiros, fornece insights em tempo real e automatiza tarefas contábeis." },
];

export const metadata = {
    title: "Ferramentas de IA para Contabilidade",
    description: "Descubra as melhores ferramentas de IA para contabilidade: automação fiscal, reconciliação e gestão financeira.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas-ia-contabilidade",
    },
  openGraph: {
    title: "Ferramentas de IA para Contabilidade",
    description: "Descubra as melhores ferramentas de IA para contabilidade: automação fiscal, reconciliação e gestão financeira.",
    url: "https://www.hypehour.com.br/ferramentas-ia-contabilidade",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ferramentas de IA para Contabilidade",
    description: "Descubra as melhores ferramentas de IA para contabilidade: automação fiscal, reconciliação e gestão financeira.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function IaParaContabilidade() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para Contabilidade</span>
      </nav>
            <div className="flex items-center gap-3 mb-8">
                <CalculatorIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Contabilidade</h1>
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
        title="Ferramentas de IA para Contabilidade"
        description="Descubra as melhores ferramentas de IA para contabilidade: automação fiscal, reconciliação e gestão financeira."
        canonicalUrl="https://www.hypehour.com.br/ferramentas-ia-contabilidade"
        ferramentas={ferramentas}
      />
    </main>
    );
}
