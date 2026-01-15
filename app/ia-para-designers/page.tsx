import { ArchiveBoxIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "Faça seu Design com IA",
  description: "Ferramentas de IA para designers criarem e iterarem projetos visuais com mais rapidez.",
  alternates: { canonical: "https://www.hypehour.com.br/ia-para-designers" },
};

const ferramentas = [
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
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <ArchiveBoxIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Designers</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <a
            key={f.nome}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >
            <h2 className="font-semibold text-lg mb-1">{f.nome}</h2>
            <div className="text-gray-500 text-sm">{f.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
