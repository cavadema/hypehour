import { UserGroupIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import FAQSection from "./FAQSection";

const ferramentas = [
  { nome: "Lightfield", url: "https://lightfield.app/", descricao: "CRM com IA para gerenciar relacionamentos e vendas de forma inteligente." },
  { nome: "SmartWriter", url: "https://www.smartwriter.ai/", descricao: "Gerador de mensagens e conteúdo com IA para CRM e outreach." },
  { nome: "Attio", url: "https://attio.com/", descricao: "CRM moderno com IA para equipes de vendas e business development." },
  { nome: "Kommo WhatsApp", url: "https://br.kommo.com/whatsapp-lead-generation/", descricao: "CRM integrado com WhatsApp e IA para geração e qualificação de leads." },
  { nome: "Pipedrive", url: "https://www.pipedrive.com/pt/gettingstarted-crm", descricao: "CRM focado em vendas com automações e IA para pipeline management." },
  { nome: "Monday CRM", url: "https://monday.com/lang/pt/crm/", descricao: "Plataforma de CRM visual com IA para automação de processos de vendas." },
  { nome: "HubSpot AI CRM", url: "https://br.hubspot.com/products/crm/ai-crm", descricao: "CRM completo com IA integrada para vendas, marketing e atendimento." },
  { nome: "Leads360", url: "https://leads360.com.br/crm-atendimento-ia/", descricao: "CRM e atendimento com IA para gerenciar leads e relacionamento com clientes." },
  { nome: "DataCrazy", url: "https://datacrazy.io/", descricao: "Análise de dados e IA para otimizar processos de CRM e vendas." },
];

export const metadata = {
  title: "CRM com IA",
  description: "Ferramentas de CRM com inteligência artificial para gerenciar vendas, leads e relacionamento com clientes.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/crm-ia',
  },
};

export default function CRMIAPage() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>

      <div className="flex items-center gap-3 mb-8">
        <UserGroupIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para CRM</h1>
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
