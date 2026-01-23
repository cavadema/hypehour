import { BuildingOfficeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";

const ferramentas = [
  { nome: "Dropbox Dash", url: "https://dash.dropbox.com/", descricao: "Busca universal conectada por IA para encontrar tudo o que sua empresa precisa em um só lugar." },
  { nome: "Workday AI", url: "https://www.workday.com/", descricao: "Integração profunda de IA em processos corporativos de RH, finanças e gestão de talentos." },
  { nome: "Obviously AI", url: "https://www.paraform.com/company/obviously-ai", descricao: "Plataforma no-code para criar apps personalizados de LLM e realizar análise preditiva." },
  { nome: "Bilanc", url: "https://www.bilanc.co/", descricao: "Contabilidade e gestão financeira inteligente com IA para startups e pequenas empresas." },
  { nome: "2-B AI", url: "https://2-b.ai/", descricao: "Gerenciador de tarefas inteligente que transforma conteúdo da web em workflows organizados diretamente no navegador." },
  { nome: "Creaibo", url: "https://creaibo.io/", descricao: "Crie assistentes de IA personalizados e chatbots para automação de atendimento e marketing." },
  { nome: "Unwrap", url: "https://www.unwrap.ai/", descricao: "Analise feedback de clientes de todas as fontes com IA para obter insights acionáveis de produto." },
  { nome: "Northr", url: "https://northr.ai/", descricao: "Sistema de planejamento adaptativo que ajuda a definir direção estratégica e automatiza o gerenciamento semanal com IA." },
  { nome: "Sprinto", url: "https://sprinto.com/", descricao: "Automação de segurança e conformidade (SOC 2, ISO 27001) para empresas escaláveis." },
  { nome: "Skarbe", url: "https://skarbe.com/", descricao: "Assistente de vendas IA que captura interações e organiza o pipeline automaticamente." },
  { nome: "HeyHelp", url: "https://www.heyhelp.ai/", descricao: "Assistente de IA no Gmail para rascunhar respostas e organizar emails para empresas." },
  { nome: "Zazos", url: "https://www.zazos.com", descricao: "Sistema operacional inteligente que revoluciona a forma como você interage com tecnologia." },
  { nome: "Autumn", url: "https://useautumn.com/", descricao: "Configure planos de preços e assinaturas Stripe 10x mais rápido para startups de IA." },
  { nome: "Vanta", url: "https://www.vanta.com/", descricao: "Focada em compliance, segurança e certificações (SOC 2, ISO, etc.) para empresas com automações e integrações." },
  { nome: "Incogni", url: "https://incogni.com/", descricao: "IA para privacidade de dados, remoção de dados pessoais e proteção digital, muito usada por profissionais e empresas." },
  { nome: "Purpose.app", url: "https://purpose.app/", descricao: "Ferramenta para gestão estratégica, alinhamento de objetivos, impacto e propósito organizacional com IA." },
  { nome: "UiPath Release Hub", url: "https://www.uipath.com/product/release-hub", descricao: "Plataforma de automação empresarial com IA para orquestração de processos e workflows." },
  { nome: "Doctly", url: "https://doctly.ai/", descricao: "IA para gestão documental e automação de processos empresariais." },
  { nome: "Sheets Organizer", url: "https://www.sheetsorganizer.com/", descricao: "Organização e análise de planilhas com IA para empresas." },
  { nome: "Bit.ai", url: "https://bit.ai/", descricao: "Plataforma colaborativa com IA para documentação e gestão de conhecimento empresarial." },
  { nome: "Enlabeler", url: "https://enlabeler.com/", descricao: "IA para rotulagem e organização automática de dados empresariais." },
  { nome: "Durable", url: "https://durable.co/", descricao: "Criação de sites e ferramentas de negócios com IA para pequenas empresas." },
  { nome: "Nas.io", url: "https://nas.io/pt-br", descricao: "Plataforma com IA para gestão de comunidades e monetização para empresas." },
  { nome: "Quadratic", url: "https://www.quadratichq.com/", descricao: "Planilhas programáveis com IA para análise de dados empresariais." },
];

export const metadata = {
  title: "Inteligência Artificial para Empresas",
  description: "Ferramentas de IA para empresas otimizarem processos, automação e gestão empresarial.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/ia-para-empresas',
  },
};

export default function IAParaEmpresasPage() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>

      <div className="flex items-center gap-3 mb-8">
        <BuildingOfficeIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Empresas</h1>
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
