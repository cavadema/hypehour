import { SparklesIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const modelos = [
  {
    nome: "vLLM",
    url: "https://vllm.ai/",
    descricao: "Engine de inferência de alto desempenho para LLMs com gerenciamento de memória PagedAttention.",
  },
  {
    nome: "Artificial Analysis Recommend",
    url: "https://artificialanalysis.ai/models/recommend",
    descricao: "Ferramenta para comparar e escolher os melhores modelos de IA com base em performance e custo.",
  },
  {
    nome: "ERNIE (Baidu)",
    url: "https://ernie.baidu.com/",
    descricao: "O modelo de linguagem de larga escala da Baidu com capacidades avançadas de compreensão e geração.",
  },
  {
    nome: "NotebookLM",
    url: "https://notebooklm.google/",
    descricao: "Assistente de pesquisa do Google que transforma documentos em insights e áudio.",
  },
  {
    nome: "Zhipu AI",
    url: "https://open.bigmodel.cn/",
    descricao: "Plataforma aberta de modelos de linguagem (GLM) da Zhipu AI para desenvolvimento e API.",
  },
  {
    nome: "Inception Labs",
    url: "https://www.inceptionlabs.ai/",
    descricao: "Modelos de linguagem da Inception Labs focados em desempenho e custo-eficiência.",
  },
  {
    nome: "Z.ai",
    url: "http://z.ai/",
    descricao: "Modelo de linguagem avançado com capacidades de raciocínio e geração de texto.",
  },
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
  {
    nome: "Vick",
    url: "https://vick.ia.br/",
    descricao: "Assistente de IA brasileiro desenvolvido para o mercado nacional.",
  },
  {
    nome: "Maritaca",
    url: "https://www.maritaca.ai/",
    descricao: "Modelo de linguagem brasileiro focado em português e aplicações locais.",
  },
  {
    nome: "Kimi (Moonshot)",
    url: "https://kimi.moonshot.cn/",
    descricao: "Modelo de linguagem chinês com suporte a contexto longo e múltiplas tarefas.",
  },
  {
    nome: "You AI",
    url: "https://you.com/",
    descricao: "Mecanismo de busca com IA integrada para respostas conversacionais e pesquisa.",
  },
  {
    nome: "HuggingChat (Hugging Face)",
    url: "https://huggingface.co/chat/",
    descricao: "Interface de chat open source da Hugging Face com diversos modelos disponíveis.",
  },
  {
    nome: "Pi (Inflection AI)",
    url: "https://pi.ai/",
    descricao: "Assistente pessoal de IA focado em conversas empáticas e suporte emocional.",
  },
  {
    nome: "ChatLLM (Alibaba / Tongyi Qianwen)",
    url: "https://tongyi.aliyun.com/",
    descricao: "Modelo de linguagem da Alibaba Cloud para aplicações empresariais e conversacionais.",
  },
  {
    nome: "SoberanIA",
    url: "https://soberania.ai/",
    descricao: "Governança de dados e IA com residência, políticas, auditoria e gestão de modelos.",
  },
];

export const metadata = {
  title: "Modelos de LLMs - Large Language Model",
  description: "Descubra os principais modelos de linguagem do mercado, incluindo OpenAI, Google Gemini, Claude e outros players.",
  alternates: {
    canonical: "https://www.hypehour.com.br/modelos-de-llms",
  },
};

export default function ModelosDeLLMs() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <SparklesIcon className="w-10 h-10 text-gray-900" />
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

      {/* Versões de modelos */}
      <section className="w-full mx-auto py-12 px-4 mt-8">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
          <SparklesIcon className="w-6 h-6 text-gray-700" />
          Versões de Modelos de LLMs (Large Language Models)
        </h2>
        <p className="text-zinc-600 mb-8">
          Acompanhe os lançamentos e atualizações das principais famílias de modelos de linguagem do mercado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> GPT-5.2</span>
            <p className="text-zinc-700">Modelo multimodal avançado da OpenAI para raciocínio, código e criação pro.</p>
            <span className="text-xs text-zinc-500">Lançamento: Dez/2025</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Gemini 3.0</span>
            <p className="text-zinc-700">Modelo multimodal do Google capaz de operar em texto, imagem e vídeo.</p>
            <span className="text-xs text-zinc-500">Lançamento: Nov/2025</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Opus 4.5</span>
            <p className="text-zinc-700">Atualização da Anthropic focada em respostas mais seguras e assertivas.</p>
            <span className="text-xs text-zinc-500">Lançamento: Out/2025</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Sonnet 4.5</span>
            <p className="text-zinc-700">Equilíbrio entre custo e performance para fluxos de automação avançados.</p>
            <span className="text-xs text-zinc-500">Lançamento: Out/2025</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Grok 4.1</span>
            <p className="text-zinc-700">Modelo da xAI com acesso em tempo real aos dados públicos da plataforma X.</p>
            <span className="text-xs text-zinc-500">Lançamento: Set/2025</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Llama 4</span>
            <p className="text-zinc-700">Nova geração open-source da Meta com melhorias significativas em raciocínio e performance.</p>
            <span className="text-xs text-zinc-500">Lançamento: Dez/2025</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Perplexity Sonar</span>
            <p className="text-zinc-700">Modelo focado em busca e raciocínio em tempo real, baseado no Llama 3.1.</p>
            <span className="text-xs text-zinc-500">Lançamento: Dez/2024</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> DeepSeek 3.2</span>
            <p className="text-zinc-700">Modelo open-weights com desempenho de ponta e custo reduzido.</p>
            <span className="text-xs text-zinc-500">Lançamento: Dez/2024</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Qwen 2.5</span>
            <p className="text-zinc-700">Família de modelos da Alibaba com excelência em código e matemática.</p>
            <span className="text-xs text-zinc-500">Lançamento: Set/2024</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Mistral 3</span>
            <p className="text-zinc-700">Modelo fronteira da Mistral AI com raciocínio avançado e eficiência.</p>
            <span className="text-xs text-zinc-500">Lançamento: Jan/2025</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Maritaca - Sabiazinho 3.1</span>
            <p className="text-zinc-700">LLM brasileiro treinado especificamente para o português e cultura nacional.</p>
            <span className="text-xs text-zinc-500">Lançamento: Fev/2025</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Manus 1.5</span>
            <p className="text-zinc-700">Agente autônomo capaz de executar tarefas complexas e longas.</p>
            <span className="text-xs text-zinc-500">Lançamento: Mar/2025</span>
          </div>
        </div>
      </section>
    </main>
  );
}




