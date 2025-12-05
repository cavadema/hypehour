import { GlobeAltIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const navegadores = [
  {
    nome: "ChatGPT Atlas",
    url: "https://chatgpt.com/pt-BR/atlas/",
    descricao: "Navegador da OpenAI com integração direta ao ChatGPT para pesquisas e copiloto em qualquer aba.",
  },
  {
    nome: "Perplexity Comet",
    url: "https://www.perplexity.ai/comet",
    descricao: "Browser da Perplexity com respostas contextuais enquanto você navega.",
  },
  {
    nome: "Opera One",
    url: "https://www.opera.com/pt-br/one",
    descricao: "Opera com IA Aria integrada, módulos multimídia e temas dinâmicos.",
  },
  {
    nome: "Microsoft Edge Copilot",
    url: "https://www.microsoft.com/pt-br/edge/copilot?form=MA13SQ&cs=3457492030",
    descricao: "Versão do Edge com Copilot nativo, modo Copilot e visão para resumir páginas e vídeos.",
  },
  {
    nome: "Dia Browser",
    url: "https://www.diabrowser.com/",
    descricao: "Navegador para escrita e aprendizado com copiloto em cada campo de texto.",
  },
  {
    nome: "Sigma Browser",
    url: "https://www.sigmabrowser.com/",
    descricao: "Browser que promete automações com agentes e copilotos personalizados.",
  },
  {
    nome: "Fellou",
    url: "https://fellou.ai/",
    descricao: "Navegador focado em privacidade com assistente inteligente embutido.",
  },
  {
    nome: "Brave Leo",
    url: "https://brave.com/leo/",
    descricao: "Experiência do Brave com o Leo, chatbot que responde sobre qualquer página aberta.",
  },
];

export const metadata = {
  title: "Navegadores com uso de Inteligência Artificial - Hypehour",
  description: "Descubra navegadores que já chegam com inteligência artificial integrada para pesquisar, resumir e automatizar tarefas.",
  alternates: {
    canonical: "https://www.hypehour.com.br/navegadores-de-ia",
  },
};

export default function NavegadoresDeIA() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <GlobeAltIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Navegadores de IA</h1>
      </div>
      <p className="mb-8 text-gray-600">
        Conheça browsers que já vêm com copilotos, automações e integrações de inteligência artificial para acelerar sua
        navegação e produtividade.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {navegadores.map((nav) => (
          <a
            key={nav.nome}
            href={nav.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >
            <h2 className="font-semibold text-lg mb-1">{nav.nome}</h2>
            <div className="text-gray-500 text-sm">{nav.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}




