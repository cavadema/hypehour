import { DocumentTextIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

const ferramentas = [
  {
    nome: "Lido",
    url: "https://www.lido.app/",
    descricao: "Extraia dados de PDFs e documentos automaticamente para planilhas estruturadas e fluxos de automação.",
  },
  { nome: "Doctly", url: "https://doctly.ai/", descricao: "IA para ler, resumir e organizar PDFs com extração de dados segura." },
  { nome: "Docparser", url: "https://docparser.com/", descricao: "Extrai dados estruturados de PDFs e automatiza fluxos de documentos." },
  { nome: "ChatPDF", url: "/ferramentas/chatpdf", descricao: "Converse com seus PDFs em português para resumos e respostas rápidas." },
  { nome: "Smallpdf IA", url: "https://smallpdf.com/pt/ia-pdf", descricao: "Suite de IA para resumir, converter e editar PDFs online." },
  { nome: "UPDF AI", url: "https://ai.updf.com/br/features/summary/", descricao: "Leitura assistida, resumo e anotações com IA integrada." },
  { nome: "Jotform PDF IA", url: "https://www.jotform.com/pt/ai/pdf-summarizer/", descricao: "Resuma PDFs e gere insights diretamente de formulários e anexos." },
  { nome: "Decopy PDF", url: "https://decopy.ai/pt/pdf-summarizer/", descricao: "Gera resumos e pontos-chave de documentos longos." },
  { nome: "HiPDF AI Reader", url: "https://www.hipdf.com/pt/ai-read-pdf", descricao: "Leitura, resumo e conversão de PDFs com IA em português." },
  { nome: "Speechify PDF", url: "https://speechify.com/pt-br/onboarding/nc/general/use-case/", descricao: "Transforma PDFs em áudio e cria resumos automáticos." },
  { nome: "TextCortex PDF", url: "https://textcortex.com/pt/pdf-ai-alternative", descricao: "Resuma, traduza e reescreva PDFs com IA multilíngue." },
  { nome: "Soda PDF AI", url: "https://www.sodapdf.com/pt/chatpdf-ai/", descricao: "Chat com PDFs para perguntas, traduções e resumos rápidos." },
  { nome: "LightPDF", url: "/ferramentas/lightpdf", descricao: "Ferramentas de IA para ler, resumir e converter PDFs online." },
  { nome: "Monica PDF", url: "https://monica.im/pt_PT/webapp/doc-chat", descricao: "Chat IA para tirar dúvidas sobre documentos e gerar resumos." },
  { nome: "Wondershare PDF", url: "https://pdf.wondershare.com.br/app/home", descricao: "Suite completa de PDFs com IA para editar, resumir e organizar." },
  { nome: "DeepL PDF", url: "https://www.deepl.com/pt-BR/features/document-translation/pdf", descricao: "Tradução de PDFs com preservação de formatação e alta qualidade." },
  { nome: "Smartcat PDF", url: "https://pt.smartcat.com/translate-document/", descricao: "Tradução colaborativa de PDFs com IA e glossários." },
];

export const metadata = {
  title: "IA para PDS: resumir, ler, criar e traduzir",
  description: "Ferramentas de IA para PDFs: resuma, leia, traduza e extraia dados com automação completa.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ia-para-pdf",
  },
  openGraph: {
    title: "IA para PDS: resumir, ler, criar e traduzir",
    description: "Ferramentas de IA para PDFs: resuma, leia, traduza e extraia dados com automação completa.",
    url: "https://www.hypehour.com.br/ia-para-pdf",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "IA para PDS: resumir, ler, criar e traduzir",
    description: "Ferramentas de IA para PDFs: resuma, leia, traduza e extraia dados com automação completa.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function IaParaPDF() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para PDFs</span>
      </nav>
      <div className="flex items-center gap-3 mb-8">
        <DocumentTextIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para PDFs</h1>
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
        title="IA para PDS: resumir, ler, criar e traduzir"
        description="Ferramentas de IA para PDFs: resuma, leia, traduza e extraia dados com automação completa."
        canonicalUrl="https://www.hypehour.com.br/ia-para-pdf"
        ferramentas={ferramentas}
      />
    </main>
  );
}
