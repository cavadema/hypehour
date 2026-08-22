import FAQSection from "./FAQSection";
import ExpandableContent from "./ExpandableContent";
import { SparklesIcon } from "@heroicons/react/24/solid";
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
    descricao: "Modelo GPT-5.5 com capacidades multimodais avançadas para texto, imagem, áudio e vídeo.",
  },
  {
    nome: "Perplexity AI",
    url: "https://www.perplexity.ai/",
    descricao: "Motor de resposta conversacional que combina LLMs com busca na web em tempo real.",
  },
  {
    nome: "Google Gemini",
    url: "https://gemini.google.com/",
    descricao: "Família Gemini 3.5 com suporte multimodal nativo e integrações com produtos Google.",
  },
  {
    nome: "Anthropic Claude",
    url: "https://claude.ai/",
    descricao: "Claude Opus 5 (lançado jul/2026) com contexto de 1M tokens, raciocínio profundo e respostas confiáveis.",
  },
  {
    nome: "Manus",
    url: "https://manus.im/app",
    descricao: "Assistente brasileiro com modelos próprios e integração com agentes.",
  },
  {
    nome: "Grok xAI",
    url: "https://grok.com/",
    descricao: "Grok 4.3 treinado pela xAI, com acesso em tempo real à plataforma X e contexto massivo.",
  },
  {
    nome: "Llama Meta",
    url: "https://www.llama.com/",
    descricao: "Llama 4 Scout e Maverick — modelos open-weight multimodais da Meta com arquitetura MoE e suporte a 200 idiomas.",
  },
  {
    nome: "Mistral / LeChat",
    url: "https://chat.mistral.ai/chat",
    descricao: "Modelos da Mistral com acesso via LeChat e APIs compactas.",
  },
  {
    nome: "Alibaba Qwen",
    url: "https://chat.qwen.ai/",
    descricao: "Qwen 3.8-Max (lançado ago/2026) — modelo MoE de 2,4 trilhões de parâmetros com suporte multimodal.",
  },
  {
    nome: "DeepSeek",
    url: "https://www.deepseek.com/",
    descricao: "DeepSeek V4 (lançado abr/2026) com custo-benefício extremo e desempenho de ponta em raciocínio.",
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
  openGraph: {
    title: "Modelos de LLMs - Large Language Model",
    description: "Descubra os principais modelos de linguagem do mercado, incluindo OpenAI, Google Gemini, Claude e outros players.",
    url: "https://www.hypehour.com.br/modelos-de-llms",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Modelos de LLMs - Large Language Model",
    description: "Descubra os principais modelos de linguagem do mercado, incluindo OpenAI, Google Gemini, Claude e outros players.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function ModelosDeLLMs() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">Modelos de LLMs</span>
      </nav>
      <div className="flex items-center gap-3 mb-8">
        <SparklesIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Modelos de LLMs</h1>
      </div>
      <ExpandableContent />
      <h2 className="text-2xl font-bold mb-6 text-black">Melhores ferramentas: Modelos de LLMs</h2>
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
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> GPT-5.5</span>
            <p className="text-zinc-700">Modelo flagship multimodal da OpenAI para raciocínio avançado, código e agentes.</p>
            <span className="text-xs text-zinc-500">Lançamento: 2026</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Gemini 3.5 Flash</span>
            <p className="text-zinc-700">Modelo multimodal do Google com desempenho aprimorado em texto, imagem e vídeo.</p>
            <span className="text-xs text-zinc-500">Lançamento: 2026</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Claude Opus 5</span>
            <p className="text-zinc-700">Modelo mais avançado da Anthropic com contexto de 1M tokens e raciocínio profundo.</p>
            <span className="text-xs text-zinc-500">Lançamento: Jul/2026</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Claude Sonnet 4.6</span>
            <p className="text-zinc-700">Equilíbrio entre custo e performance para fluxos de automação e tarefas do dia a dia.</p>
            <span className="text-xs text-zinc-500">Lançamento: 2026</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Grok 4.3</span>
            <p className="text-zinc-700">Modelo da xAI com acesso em tempo real aos dados públicos da plataforma X e contexto massivo.</p>
            <span className="text-xs text-zinc-500">Lançamento: 2026</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Llama 4 Maverick</span>
            <p className="text-zinc-700">Modelo open-weight MoE da Meta com 400B parâmetros, multimodal nativo e suporte a 200 idiomas.</p>
            <span className="text-xs text-zinc-500">Lançamento: Abr/2025</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Perplexity Sonar Pro</span>
            <p className="text-zinc-700">Modelo de busca conversacional com raciocínio em tempo real e geração de relatórios completos.</p>
            <span className="text-xs text-zinc-500">Atualizado: 2026</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> DeepSeek V4</span>
            <p className="text-zinc-700">Modelo open-weights com custo extremamente reduzido e desempenho de ponta em raciocínio.</p>
            <span className="text-xs text-zinc-500">Lançamento: Abr/2026</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Qwen 3.8-Max</span>
            <p className="text-zinc-700">Modelo MoE da Alibaba com 2,4 trilhões de parâmetros, multimodal e open-weight disponível no Hugging Face.</p>
            <span className="text-xs text-zinc-500">Lançamento: Ago/2026</span>
          </div>
          <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100 flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Mistral Medium 3.5</span>
            <p className="text-zinc-700">Modelo da Mistral AI com raciocínio avançado, eficiência e APIs compactas para produção.</p>
            <span className="text-xs text-zinc-500">Lançamento: 2026</span>
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
          <FAQSection />
    </main>
  );
}




