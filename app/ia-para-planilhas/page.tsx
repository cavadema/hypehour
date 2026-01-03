import { TableCellsIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import FAQSection from "./FAQSection";

const ferramentas = [
  { nome: "Quadratic", url: "https://www.quadratichq.com/", descricao: "Torna o trabalho com planilhas simples, com resultados impressionantes. Adicione dados, faça perguntas, transforme, analise, visualize e compartilhe." },
  { nome: "Shortcut", url: "https://www.tryshortcut.ai/", descricao: "Automatiza tarefas de Excel/Sheets com IA, gerando fórmulas e análises." },
  { nome: "Sheets Organizer", url: "https://www.sheetsorganizer.com/", descricao: "Automatize planilhas e dashboards com IA para relatórios e análises." },
  { nome: "GPT Excel", url: "https://gptexcel.uk/", descricao: "Use IA para criar fórmulas, funções e macros automaticamente no Excel." },
  { nome: "Ajelix", url: "https://ajelix.com/", descricao: "Plataforma de IA para gerar fórmulas, explicar código e automação de planilhas." },
  { nome: "Sheet AI", url: "https://www.sheetai.app/pt", descricao: "Plugin de IA para Google Sheets que automatiza tarefas e análises de dados." },
  { nome: "Coefficient", url: "https://coefficient.io/ai", descricao: "Conecta suas planilhas com dados em tempo real usando IA." },
  { nome: "Excelmatic", url: "https://excelmatic.ai/pt/", descricao: "Gerador de fórmulas e automação para Excel com inteligência artificial." },
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
};

export default function IaParaPlanilhas() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <TableCellsIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Planilhas</h1>
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
      <FAQSection />
    </main>
  );
}
