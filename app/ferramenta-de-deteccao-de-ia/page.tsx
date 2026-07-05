import ExpandableContent from "./ExpandableContent";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

const ferramentas = [
  {
    nome: "Pindrop",
    url: "https://www.pindrop.com/",
    descricao: "Tecnologia avançada para detecção de áudio gerado por IA e prevenção de fraudes de voz."
  },
  {
    nome: "QuillBot Detector de IA",
    url: "https://quillbot.com/pt/detector-de-ia",
    descricao: "Detector multilíngue para identificar sinais de conteúdo gerado por IA.",
  },
  {
    nome: "Sidekicker",
    url: "/ferramentas/sidekicker",
    descricao: "Análise rápida de textos com relatórios sobre probabilidade de IA.",
  },
  {
    nome: "WinstonAI",
    url: "https://gowinston.ai/",
    descricao: "Detector focado em textos acadêmicos e corporativos, com insights detalhados.",
  },
  {
    nome: "Copyleaks",
    url: "https://copyleaks.com/pt/ai-content-detector",
    descricao: "Plataforma para detectar IA e plágio com integrações corporativas.",
  },
  {
    nome: "Smodin",
    url: "https://smodin.io/pt/detector-de-conteudo-ai",
    descricao: "Detector que avalia conteúdos em vários idiomas e dá sugestões de ajuste.",
  },
  {
    nome: "JustDone",
    url: "https://justdone.com/pt/ai-detector",
    descricao: "Ferramenta simples para identificar textos gerados por IA em português.",
  },
  {
    nome: "ExpertChat",
    url: "https://tutorial.expertchat.me/",
    descricao: "Detector com foco em criadores de conteúdo e equipes de marketing.",
  },
  {
    nome: "Undetectable AI",
    url: "/ferramentas/undetectable",
    descricao: "Detecta textos gerados por IA com múltiplos detectores e oferece humanização para torná-los naturais.",
  },
  {
    nome: "Plagium",
    url: "https://www.plagium.com/pt/detectordeplagio",
    descricao: "Ferramenta clássica de plágio com modo para detectar textos gerados por IA.",
  },
  {
    nome: "GPTZero",
    url: "/ferramentas/gptzero",
    descricao: "Detector popular criado para professores, com métricas claras de probabilidade.",
  },
  {
    nome: "ZeroGPT",
    url: "/ferramentas/zerogpt",
    descricao: "Detector avançado e confiável para ChatGPT, GPT-5 e Gemini com alta precisão.",
  },
  {
    nome: "SynthID",
    url: "https://deepmind.google/models/synthid/",
    descricao: "Tecnologia do Google DeepMind para identificar e marcar conteúdo gerado por IA.",
  },
  {
    nome: "Pangram AI Assistance Detection",
    url: "https://www.pangram.com/blog/introducing-ai-assistance-detection",
    descricao: "Ferramenta de IA que detecta quando texto foi gerado por assistentes de IA.",
  },
];

export const metadata = {
  title: "Ferramentas para detectar uso de Inteligência Artificial",
  description: "Lista curada de ferramentas para identificar conteúdos gerados por inteligência artificial.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramenta-de-deteccao-de-ia",
  },
  openGraph: {
    title: "Ferramentas para detectar uso de Inteligência Artificial",
    description: "Lista curada de ferramentas para identificar conteúdos gerados por inteligência artificial.",
    url: "https://www.hypehour.com.br/ferramenta-de-deteccao-de-ia",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ferramentas para detectar uso de Inteligência Artificial",
    description: "Lista curada de ferramentas para identificar conteúdos gerados por inteligência artificial.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function FerramentaDeteccaoIA() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">Ferramentas de detecção de IA</span>
      </nav>
      <div className="flex items-center gap-3 mb-8">
        <ShieldCheckIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Ferramentas de detecção de IA</h1>
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
        title="Ferramentas para detectar uso de Inteligência Artificial"
        description="Lista curada de ferramentas para identificar conteúdos gerados por inteligência artificial."
        canonicalUrl="https://www.hypehour.com.br/ferramenta-de-deteccao-de-ia"
        ferramentas={ferramentas}
      />
    </main>
  );
}


