import { PencilSquareIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ferramentas = [
  {
    nome: "Jasper",
    url: "https://www.jasper.ai/",
    descricao: "Plataforma avançada de IA para criação de conteúdo de marketing e copy.",
  },
  {
    nome: "Copy.ai",
    url: "https://www.copy.ai/",
    descricao: "Gerador de textos para blogs, redes sociais e e-mails com foco em conversão.",
  },
  {
    nome: "HubSpot Content Hub",
    url: "https://br.hubspot.com/products/content",
    descricao: "Hub de conteúdo da HubSpot com ferramentas de IA para criar e gerenciar blogs e sites.",
  },
  {
    nome: "Pippit",
    url: "https://www.pippit.ai/",
    descricao: "Ferramenta para criação de conteúdo otimizado e fluxos de trabalho de marketing.",
  },
  {
    nome: "Quillbot Gerador de textos",
    url: "https://quillbot.com/pt/ferramentas-de-ia-para-escrita/gerador-de-texto-ia",
    descricao: "Assistente de escrita para parafrasear, resumir e gerar textos com fluidez.",
  },
  {
    nome: "Automarticles",
    url: "https://automarticles.com/",
    descricao: "Automação de artigos e conteúdo para blogs com foco em SEO.",
  },
  {
    nome: "Automatik",
    url: "https://automatikblog.com/",
    descricao: "Geração automática de posts para blogs WordPress usando IA.",
  },
];

export const metadata = {
  title: "Ferramentas de IA para Conteúdo - Hypehour",
  description: "Descubra as melhores ferramentas de IA para criar artigos, posts, e-mails e copys de alta conversão.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas-de-ia-para-conteudo",
  },
};

export default function IaParaConteudo() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <PencilSquareIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl font-bold">IA para Conteúdo</h1>
      </div>
      <p className="mb-8 text-gray-600">
        Descubra as melhores ferramentas de IA para criar artigos, posts, e-mails e copys de alta conversão.
      </p>
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
