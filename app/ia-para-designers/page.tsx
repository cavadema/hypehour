import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import ExpandableContent from "./ExpandableContent";
import { ArchiveBoxIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

export const metadata = {
  title: "Faça seu Design com IA",
  description: "Ferramentas de IA para designers criarem e iterarem projetos visuais com mais rapidez.",
  alternates: { canonical: "https://www.hypehour.com.br/ia-para-designers" },
  openGraph: {
    title: "Faça seu Design com IA",
    description: "Ferramentas de IA para designers criarem e iterarem projetos visuais com mais rapidez.",
    url: "https://www.hypehour.com.br/ia-para-designers",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Faça seu Design com IA",
    description: "Ferramentas de IA para designers criarem e iterarem projetos visuais com mais rapidez.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

const ferramentas = [
  { nome: "Recraft", url: "/ferramentas/recraft", descricao: "Plataforma de IA para designers criar imagens fotorrealistas, vetores SVG editáveis e assets com estilos personalizados para consistência de marca." },
  {
    nome: "Pencil",
    url: "https://www.pencil.dev/",
    descricao: "Design no canvas que se traduz diretamente em código para acelerar o fluxo de engenharia.",
  },
  {
    nome: "Comfy",
    url: "https://www.comfy.org/",
    descricao: "Interface modular para criar fluxos de trabalho visuais de IA generativa com controle total.",
  },
  {
    nome: "UX Pilot",
    url: "https://uxpilot.ai/pt",
    descricao: "Plataforma de IA para design de UX, simplificando fluxos e criação de interfaces inteligentes."
  },
  {
    nome: "Pomelli",
    url: "https://labs.google.com/pomelli/about/",
    descricao: "Experimento do Google Labs para criar padrões visuais, texturas e designs únicos com IA generativa."
  },
  {
    nome: "Design Arena",
    url: "https://www.designarena.ai/",
    descricao: "Benchmark global crowdsourced para modelos de design com rankings Elo baseados em preferência humana."
  },
  {
    nome: "Designs.ai",
    url: "https://designs.ai/",
    descricao: "Gerador all-in-one de IA para logos, imagens, vídeos, vozes e posts sociais."
  },
  {
    nome: "Uizard",
    url: "https://uizard.io/",
    descricao: "Design de UI para apps e sites com IA generativa, transforme ideias em conceitos instantaneamente."
  },
  {
    nome: "Lemonslice",
    url: "https://lemonslice.com/",
    descricao: "Plataforma de IA para gerar conceitos visuais, variações e assets de design rapidamente."
  },
  {
    nome: "Dorlabs",
    url: "https://dorlabs.ai/",
    descricao: "Gere conceitos visuais e variações de layout com IA para acelerar a criação."
  },
  {
    nome: "Arcads",
    url: "https://www.arcads.ai/",
    descricao: "Designer assistido por IA para explorar direções criativas rapidamente."
  },
  {
    nome: "Creatify",
    url: "https://creatify.ai/",
    descricao: "Comparativo destacando fluxos e vantagens do Creatify para design generativo."
  },
  {
    nome: "Cognify",
    url: "https://www.getcognify.ai/",
    descricao: "Ferramentas de IA para criar peças visuais e automações de design."
  },
  {
    nome: "Looka",
    url: "https://looka.com/",
    descricao: "Criação de logos e identidades visuais rápidas com assistente de IA."
  },
  {
    nome: "Figroot (plugin)",
    url: "https://www.figma.com/pt-br/comunidade/plugin/1486825259782611959/figroot-free-figma-to-code-react-tailwind-css-html-css-plugin",
    descricao: "Plugin Figma que converte layouts em código React/Tailwind/HTML/CSS usando IA."
  },
];

export default function IaParaDesigners() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para Designers</span>
      </nav>
      <div className="flex items-center gap-3 mb-8">
        <ArchiveBoxIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Designers</h1>
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
        title="Faça seu Design com IA"
        description="Ferramentas de IA para designers criarem e iterarem projetos visuais com mais rapidez."
        canonicalUrl="https://www.hypehour.com.br/ia-para-designers"
        ferramentas={ferramentas}
      />
    </main>
  );
}
