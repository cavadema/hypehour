import { ArchiveBoxIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "Repositórios de IA no Github",
  description: "Repositórios de IA no Github com projetos open-source para inteligência artificial.",
  alternates: { canonical: "https://www.hypehour.com.br/repositorios-ia-github" },
};

const ferramentas = [
  { nome: "Glass", url: "https://github.com/pickle-com/glass", descricao: "Um framework leve e flexível para construir interfaces de usuário modernas com Python." },
  { nome: "Agentic Coding Flywheel", url: "https://github.com/Dicklesworthstone/agentic_coding_flywheel_setup", descricao: "Um setup completo para criar um ciclo de codificação agêntica e automatizada." },
  { nome: "HGMem", url: "https://github.com/Encyclomen/HGMem", descricao: "Memória Hierárquica Gráfica para Agentes de LLM, melhorando a retenção de contexto a longo prazo." },
  { nome: "Alpamayo", url: "https://github.com/NVlabs/alpamayo", descricao: "Modelo da NVIDIA para alinhar modelos de linguagem com feedback humano de forma eficiente." },
  { nome: "Swarm", url: "https://github.com/openai/swarm", descricao: "Uma estrutura educacional que explora a orquestração multiagente leve e ergonômica." },
  { nome: "Chatterbox", url: "https://github.com/resemble-ai/chatterbox", descricao: "TTS engine open-source de estado da arte (SoTA) da Resemble AI." },
  { nome: "Qwen-Image-Layered", url: "https://github.com/QwenLM/Qwen-Image-Layered", descricao: "Modelo capaz de gerar imagens decompostas em camadas transparentes para fácil edição." },
  { nome: "Ensue Skill", url: "https://github.com/mutable-state-inc/ensue-skill", descricao: "Ensue Memory Network: memória persistente e contextual para agentes de IA." },
  { nome: "DeepCode", url: "https://github.com/HKUDS/DeepCode", descricao: "Agente de codificação open-source capaz de atuar em Paper2Code, Text2Web e Text2Backend." },
  { nome: "HY-Motion-1.0", url: "https://github.com/Tencent-Hunyuan/HY-Motion-1.0", descricao: "Modelos de geração de movimento humano 3D a partir de texto (Tencent), baseados em DiT e Flow Matching." },
  { nome: "MAI-UI", url: "https://github.com/Tongyi-MAI/MAI-UI", descricao: "Agentes de GUI focados no mundo real da Tongyi, permitindo controle de interface e navegação móvel via IA." },
  { nome: "AbleMouse", url: "https://github.com/aradzhabov/AbleMouse", descricao: "Tecnologia assistiva open-source que substitui o mouse, controlada por movimentos faciais ou oculares." },
  { nome: "Test-Time Training", url: "https://github.com/test-time-training/", descricao: "Coleção de implementações TTT, onde modelos aprendem e se adaptam com cada amostra de teste." },
  { nome: "LMCache", url: "https://github.com/LMCache/LMCache", descricao: "Cache KV compartilhado e eficiente para LLMs, reduzindo latência e custo em inferências de contexto longo." },
  { nome: "Reachy Mini", url: "https://github.com/pollen-robotics/reachy_mini", descricao: "Robô desktop open-source e expressivo da Pollen Robotics, projetado para interação humano-robô e prototipagem." },
  { nome: "Next AI Draw.io", url: "https://github.com/DayuanJiang/next-ai-draw-io", descricao: "Integração de IA com Draw.io para criar, editar e otimizar diagramas usando comandos de linguagem natural." },
  { nome: "nano-vLLM", url: "https://github.com/GeeeekExplorer/nano-vllm", descricao: "Implementação leve e didática do vLLM, focada em inferência offline rápida e código legível." },
  { nome: "Sim Studio", url: "https://github.com/simstudioai/sim", descricao: "Visual workflow builder open-source para criar e orquestrar agentes de IA com interface drag-and-drop." },
  {
    nome: "PyTorch ExecuTorch",
    url: "https://github.com/pytorch/executorch",
    descricao: "Framework PyTorch para IA on-device em mobile, embedded e edge com otimização de performance."
  },
  {
    nome: "Google ADK-JS",
    url: "https://github.com/google/adk-js",
    descricao: "Toolkit TypeScript open-source do Google para construir, avaliar e deployar agentes de IA sofisticados."
  },
  {
    nome: "Anthropic Skills",
    url: "https://github.com/anthropics/skills",
    descricao: "Repositório público da Anthropic com skills para agentes Claude Code, Claude.ai e API."
  },
  {
    nome: "Claude-Mem",
    url: "https://github.com/thedotmack/claude-mem",
    descricao: "Plugin para Claude Code que captura sessões de coding, comprime com IA e injeta contexto relevante."
  },
  {
    nome: "Awesome Agentic Prompting",
    url: "https://gist.github.com/doobidoo/fa84d31c0819a9faace345ca227b268f",
    descricao: "Coleção curada de prompts e técnicas para prompting agentic com exemplos práticos."
  },
  {
    nome: "Stirrup",
    url: "https://github.com/ArtificialAnalysis/Stirrup",
    descricao: "Framework leve e open-source para construção de agentes de IA com suporte a múltiplos LLMs."
  },
  {
    nome: "distillKit",
    url: "https://github.com/arcee-ai/distillKit",
    descricao: "Conjunto de ferramentas para distilação e avaliação de modelos de IA de forma open-source."
  },
  {
    nome: "Agent Skills for Context Engineering",
    url: "https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering",
    descricao: "Repositório para habilidades de agentes com engenharia de contexto avançada."
  },
  {
    nome: "OpenTinker",
    url: "https://github.com/open-tinker/OpenTinker",
    descricao: "Projeto open-source para automação e integração de ferramentas com IA."
  },
  {
    nome: "SGI-Bench",
    url: "https://github.com/InternScience/SGI-Bench",
    descricao: "Benchmark para avaliar modelos de IA em tarefas específicas."
  },
  {
    nome: "NitroGen",
    url: "https://github.com/MineDojo/NitroGen",
    descricao: "Ferramenta para geração de conteúdo com IA usando modelos avançados."
  },
  {
    nome: "Awesome Claude Skills",
    url: "https://github.com/ComposioHQ/awesome-claude-skills",
    descricao: "Coleção curada de skills para Claude com integração de APIs e ferramentas."
  },
  {
    nome: "Rogue",
    url: "https://github.com/qualifire-dev/rogue",
    descricao: "Framework para desenvolvimento de agentes de IA autônomos."
  },
  {
    nome: "NVIDIA NeMo Gym",
    url: "https://github.com/NVIDIA-NeMo/Gym",
    descricao: "Plataforma NVIDIA para treinamento e avaliação de modelos de linguagem."
  },
  {
    nome: "NVIDIA NeMo RL",
    url: "https://github.com/NVIDIA-NeMo/RL",
    descricao: "Ferramentas NVIDIA para aprendizado por reforço com modelos de IA."
  },
  {
    nome: "Inteligência Artificial - IA",
    url: "https://github.com/Carlos-CGS/InteligenciaArtificial-IA",
    descricao: "Repositório educacional com projetos e exemplos de inteligência artificial."
  },
  {
    nome: "Experimentos de IA",
    url: "https://github.com/idcesares/Experimentos-de-IA",
    descricao: "Coleção de experimentos práticos e desafios com modelos de IA."
  },
];

export default function RepositoriosIA() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <ArchiveBoxIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Repositórios de IA no Github</h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((repo) => (
          <a key={repo.nome} href={repo.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100">
            <h2 className="font-semibold text-lg mb-1">{repo.nome}</h2>
            <div className="text-gray-500 text-sm">{repo.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
