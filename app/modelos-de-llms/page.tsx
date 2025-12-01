import { SparklesIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const modelos = [
  {
    nome: "OpenAI ChatGPT",
    url: "https://chatgpt.com/",
    descricao: "Modelos GPT-4o e GPT-5.1 com capacidades multimodais para texto, imagem, áudio e vídeo.",
  },
  {
    nome: "Perplexity AI",
    url: "https://www.perplexity.ai/",
    descricao: "Motor de resposta conversacional que combina LLMs com busca na web em tempo real.",
  },
  {
    nome: "Google Gemini",
    url: "https://gemini.google.com/",
    descricao: "Família Gemini 3 com suporte multimodal e integrações com produtos Google.",
  },
  {
    nome: "Anthropic Claude",
    url: "https://claude.ai/",
    descricao: "Linha Claude 4 focada em segurança, contexto longo e respostas confiáveis.",
  },
  {
    nome: "Manus",
    url: "https://manus.im/app",
    descricao: "Assistente brasileiro com modelos próprios e integração com agentes.",
  },
  {
    nome: "Grok xAI",
    url: "https://grok.com/",
    descricao: "Modelos Grok 4.1 treinados pela xAI, com acesso em tempo real à plataforma X.",
  },
  {
    nome: "Llama Meta",
    url: "https://www.llama.com/",
    descricao: "Modelos Llama 3.2 open source da Meta para uso em edge e servidores.",
  },
  {
    nome: "Mistral / LeChat",
    url: "https://chat.mistral.ai/chat",
    descricao: "Modelos da Mistral com acesso via LeChat e APIs compactas.",
  },
  {
    nome: "Alibaba Qwen",
    url: "https://chat.qwen.ai/",
    descricao: "Família Qwen com suporte em múltiplos idiomas e ferramentas empresariais.",
  },
  {
    nome: "DeepSeek",
    url: "https://www.deepseek.com/",
    descricao: "Modelos DeepSeek V3 e R1 com foco em custo-benefício e desempenho.",
  },
];

export const metadata = {
  title: "Modelos de LLMs - Hypehour",
  description: "Descubra os principais modelos de linguagem do mercado, incluindo OpenAI, Google Gemini, Claude e outros players.",
  alternates: {
    canonical: "https://www.hypehour.com.br/modelos-de-llms",
  },
};

export default function ModelosDeLLMs() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <SparklesIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl font-bold">Modelos de LLMs</h1>
      </div>
      <p className="mb-8 text-gray-600">
        Explore os modelos de linguagem que estão impulsionando copilotos, buscas inteligentes e agentes autônomos.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {modelos.map((modelo) => (
          <a
            key={modelo.nome}
            href={modelo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >
            <h2 className="font-semibold text-lg mb-1">{modelo.nome}</h2>
            <div className="text-gray-500 text-sm">{modelo.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}



