
import { SparklesIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ferramentas = [
  { nome: "Dedalus Labs", url: "https://www.dedaluslabs.ai/", descricao: "Gateway MCP que conecta qualquer LLM a qualquer servidor MCP com uma única API drop-in." },
  { nome: "Token Factory", url: "https://tokenfactory.nebius.com/", descricao: "Acesse e integre modelos de LLM e imagem open-source premium via API simples e infraestrutura escalável." },
  {
    nome: "Amarsia",
    url: "https://www.amarsia.com/",
    descricao: "Plataforma para construir, testar e implantar APIs de IA prontas para produção em minutos.",
  },
  {
    nome: "OpenTinker",
    url: "https://open-tinker.github.io/opentinker-page/",
    descricao: "Coleção open-source de APIs e ferramentas para orquestrar agentes e fluxos com IA.",
  },
  {
    nome: "SkyRL",
    url: "https://github.com/NovaSky-AI/SkyRL/tree/main/skyrl-tx",
    descricao: "Framework open-source para desenvolvimento de agentes com reinforcement learning.",
  },
  {
    nome: "Kimi K2 Thinking",
    url: "https://huggingface.co/moonshotai/Kimi-K2-Thinking",
    descricao: "Modelo Kimi K2 com capacidades avançadas de raciocínio e análise profunda.",
  },
  {
    nome: "Runware",
    url: "https://runware.ai/",
    descricao: "API de geração de imagens com IA, modelos rápidos e infraestrutura em GPU.",
  },
  {
    nome: "Google Interactions API",
    url: "https://blog.google/technology/developers/interactions-api/",
    descricao: "API do Google para gerenciar interações e integrações com IA generativa.",
  },
  {
    nome: "X402 v2",
    url: "https://www.x402.org/writing/x402-v2-launch",
    descricao: "Plataforma de modelos de linguagem com capacidades avançadas e open source.",
  },
  {
    nome: "Qwen-Doc (Tongyi Zhiwen)",
    url: "https://github.com/Tongyi-Zhiwen/Qwen-Doc?utm_source=tldrai",
    descricao: "Documentação e ferramentas para modelos Qwen da Alibaba com suporte a múltiplas tarefas.",
  },
  {
    nome: "TRELLIS 2.4B",
    url: "https://huggingface.co/microsoft/TRELLIS.2-4B",
    descricao: "Modelo lightweight da Microsoft otimizado para eficiência em edge computing.",
  },
  {
    nome: "Grok Voice Agent API",
    url: "https://x.ai/news/grok-voice-agent-api",
    descricao: "API de voz da xAI para integrar agentes Grok com capacidades de conversação.",
  },
  {
    nome: "Supermemory",
    url: "https://supermemory.ai/",
    descricao: "Plataforma de memória pessoal com IA para organizar e recuperar informações.",
  },
  {
    nome: "TensorBlock",
    url: "https://www.tensorblock.co/",
    descricao: "Infraestrutura para deploy e scaling de modelos de IA com GPU distribuído.",
  },
  {
    nome: "APIdog",
    url: "https://apidog.com/pt-BR/",
    descricao: "Plataforma colaborativa para design, teste e documentação de APIs e agentes de IA.",
  },
];

export const metadata = {
  title: "APIs e Modelos de Linguagem de IA",
  description: "Explore as principais APIs e modelos de linguagem para integrar IA em seus projetos.",
  alternates: {
    canonical: "https://www.hypehour.com.br/api-ia-modelos",
  },
};

export default function APIsIA() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <SparklesIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">APIs de IA</h1>
      </div>
      <p className="mb-8 text-gray-600">
        Descubra as principais APIs, modelos de linguagem e plataformas para integrar inteligência artificial em seus projetos.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((api) => (
          <a
            key={api.nome}
            href={api.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >
            <h2 className="font-semibold text-lg mb-1">{api.nome}</h2>
            <div className="text-gray-500 text-sm">{api.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
