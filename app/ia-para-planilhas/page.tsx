import { TableCellsIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

const ferramentas = [
  { nome: "Claude for Excel", url: "/ferramentas/claude-for-excel", descricao: "Add-in oficial da Anthropic que integra o Claude AI ao Microsoft Excel para análise de dados e geração de fórmulas em linguagem natural." },
  {
    nome: "Lido",
    url: "https://www.lido.app/",
    descricao: "Extraia dados de PDFs e documentos automaticamente para planilhas estruturadas e fluxos de automação.",
  },
  { nome: "Pane", url: "https://paneapp.com/", descricao: "Simplifica o trabalho com planilhas e dados usando agentes de IA de última geração." },
  { nome: "Quadratic", url: "https://www.quadratichq.com/", descricao: "Torna o trabalho com planilhas simples, com resultados impressionantes. Adicione dados, faça perguntas, transforme, analise, visualize e compartilhe." },
  { nome: "Shortcut", url: "https://www.tryshortcut.ai/", descricao: "Automatiza tarefas de Excel/Sheets com IA, gerando fórmulas e análises." },
  { nome: "Sheets Organizer", url: "https://www.sheetsorganizer.com/", descricao: "Automatize planilhas e dashboards com IA para relatórios e análises." },
  { nome: "GPT Excel", url: "https://gptexcel.uk/", descricao: "Use IA para criar fórmulas, funções e macros automaticamente no Excel." },
  { nome: "Ajelix", url: "https://ajelix.com/", descricao: "Plataforma de IA para gerar fórmulas, explicar código e automação de planilhas." },
  { nome: "Sheet AI", url: "https://www.sheetai.app/pt", descricao: "Plugin de IA para Google Sheets que automatiza tarefas e análises de dados." },
  { nome: "Coefficient", url: "https://coefficient.io/ai", descricao: "Conecta suas planilhas com dados em tempo real usando IA." },
  { nome: "Excelmatic", url: "/ferramentas/excelmatic", descricao: "Gerador de fórmulas e automação para Excel com inteligência artificial." },
  { nome: "Zoho Sheet", url: "https://www.zoho.com/pt-br/sheet/", descricao: "Planilha colaborativa com IA para análise de dados e relatórios." },
  { nome: "Sheet Magic", url: "https://sheetmagic.ai/", descricao: "Assistente de IA para Google Sheets com automação e geração de fórmulas." },
  { nome: "FormulasHQ", url: "https://formulashq.com/", descricao: "Plataforma para criar e compartilhar fórmulas de Excel com IA." },
  { nome: "Softr Formula Generator", url: "https://www.softr.io/tool-formula-generator-google-sheets", descricao: "Gerador de fórmulas para Google Sheets com IA integrada." },
];

export const metadata = {
  title: "IA para Criar Planilhas | Ferramentas de IA para Excel e Google Sheets",
  description: "Descubra as melhores ferramentas de IA para criar, automatizar e analisar planilhas no Excel e Google Sheets.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ia-para-planilhas",
  },
  openGraph: {
    title: "IA para Criar Planilhas | Ferramentas de IA para Excel e Google Sheets",
    description: "Descubra as melhores ferramentas de IA para criar, automatizar e analisar planilhas no Excel e Google Sheets.",
    url: "https://www.hypehour.com.br/ia-para-planilhas",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "IA para Criar Planilhas | Ferramentas de IA para Excel e Google Sheets",
    description: "Descubra as melhores ferramentas de IA para criar, automatizar e analisar planilhas no Excel e Google Sheets.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function IaParaPlanilhas() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para Planilhas</span>
      </nav>
      <div className="flex items-center gap-3 mb-8">
        <TableCellsIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Planilhas</h1>
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
        title="IA para Criar Planilhas | Ferramentas de IA para Excel e Google Sheets"
        description="Descubra as melhores ferramentas de IA para criar, automatizar e analisar planilhas no Excel e Google Sheets."
        canonicalUrl="https://www.hypehour.com.br/ia-para-planilhas"
        ferramentas={ferramentas}
      />
    </main>
  );
}
