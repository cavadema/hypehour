import { UserGroupIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

const ferramentas = [
  { nome: "Rings AI", url: "https://www.rings.ai/", descricao: "Plataforma de XRM para gestão de contatos e pipelines com insights baseados em IA." },
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
  openGraph: {
    title: "CRM com IA",
    description: "Ferramentas de CRM com inteligência artificial para gerenciar vendas, leads e relacionamento com clientes.",
    url: "https://www.hypehour.com.br/crm-ia",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "CRM com IA",
    description: "Ferramentas de CRM com inteligência artificial para gerenciar vendas, leads e relacionamento com clientes.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function CRMIAPage() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para CRM</span>
      </nav>

      <div className="flex items-center gap-3 mb-8">
        <UserGroupIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para CRM</h1>
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
        title="CRM com IA"
        description="Ferramentas de CRM com inteligência artificial para gerenciar vendas, leads e relacionamento com clientes."
        canonicalUrl="https://www.hypehour.com.br/crm-ia"
        ferramentas={ferramentas}
      />
    </main>
  );
}
