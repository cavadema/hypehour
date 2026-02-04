import { ArchiveBoxIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "Repositórios de IA no Github",
  description: "Repositórios de IA no Github com projetos open-source para inteligência artificial.",
  alternates: { canonical: "https://www.hypehour.com.br/repositorios-ia-github" },
};

const ferramentas = [
  { nome: "vLLM", url: "https://github.com/vllm-project/vllm", descricao: "Engine de inferência de alto desempenho para LLMs com gerenciamento de memória PagedAttention." },
  { nome: "PersonaPlex", url: "https://github.com/NVIDIA/personaplex", descricao: "Framework da NVIDIA para geração de dados sintéticos personalizados e realistas." },
  { nome: "Flash Attention", url: "https://github.com/Dao-AILab/flash-attention", descricao: "Implementação de atenção rápida e eficiente em memória para acelerar o treinamento e inferência de Transformers." },
  { nome: "VibeVoice", url: "https://github.com/microsoft/VibeVoice", descricao: "Framework da Microsoft Research para geração de áudio conversacional expressivo e transcrição estruturada." },
  { nome: "X Algorithm", url: "https://github.com/xai-org/x-algorithm", descricao: "Código-fonte aberto do algoritmo de recomendação da plataforma X (Twitter)." },
  { nome: "Remotion", url: "https://github.com/remotion-dev/remotion", descricao: "Framework para criar vídeos programaticamente usando React e ferramentas web modernas." },
  { nome: "ChunkHound", url: "https://github.com/chunkhound/chunkhound", descricao: "Mecanismo de busca de código local-first para assistentes de IA via protocolo MCP." },
  { nome: "Claude Mem", url: "https://github.com/thedotmack/claude-mem", descricao: "Sistema de memória persistente para sessões do Claude Code usando SQLite local." },
  { nome: "OpenAI Apps SDK Examples", url: "https://github.com/openai/openai-apps-sdk-examples", descricao: "Exemplos de componentes de UI e servidores MCP para criar aplicações no ChatGPT." },
  { nome: "Openwork", url: "https://github.com/langchain-ai/openwork", descricao: "Interface desktop para agentes profundos com acesso total ao sistema de arquivos e navegador." },
  { nome: "Opensync", url: "https://github.com/waynesutton/opensync", descricao: "Dashboards sincronizados na nuvem para rastreamento de sessões do OpenCode e Claude Code." },
  { nome: "Claude Config", url: "https://github.com/brianlovin/claude-config", descricao: "Configurações pessoais e habilidades reutilizáveis para o ambiente Claude Code." },
  { nome: "Open Ralph Wiggum", url: "https://github.com/Th0rgal/open-ralph-wiggum", descricao: "Ferramenta de loop agentico autônomo que utiliza técnicas de prompting iterativo." },
  { nome: "Claudeception", url: "https://github.com/blader/Claudeception", descricao: "Sistema de extração de habilidades para aprendizado contínuo do Claude Code." },
  { nome: "ShapeR", url: "https://github.com/facebookresearch/ShapeR", descricao: "Reconstrução 3D generativa a partir de imagens casuais usando flow transformers." },
  { nome: "SkyPilot", url: "https://github.com/skypilot-org/skypilot", descricao: "Framework para rodar LLMs e jobs de IA em qualquer nuvem com máxima economia e facilidade." },
  { nome: "Kyutai Labs", url: "https://github.com/kyutai-labs", descricao: "Pesquisa aberta em IA de voz com modelos Moshi para conversas em tempo real e ultra-baixa latência." },
  { nome: "Multiplex Thinking", url: "https://github.com/GMLR-Penn/Multiplex-Thinking", descricao: "Framework de raciocínio branch-and-merge para modelos de linguagem mais eficientes." },
  { nome: "Mviz", url: "https://github.com/matsonj/mviz", descricao: "Gerador de gráficos e relatórios denso projetado especificamente para visualização de dados por IA." },
  { nome: "GrepAI", url: "https://github.com/yoanbernabeu/grepai", descricao: "CLI de busca semântica de código 100% local usando embeddings vetoriais." },
  { nome: "Manifold", url: "https://github.com/Esrbwt1/manifold", descricao: "Toolkit para simplificar o deploy e gerenciamento seguro de modelos de IA." },
  { nome: "Gambit", url: "https://github.com/bolt-foundry/gambit", descricao: "Framework de orquestração para construir e verificar fluxos de trabalho complexos com LLMs." },
  { nome: "1Code-Repo", url: "https://github.com/21st-dev/1code", descricao: "Interface visual para Claude Code, permitindo rodar múltiplos agentes de programação em paralelo." },
  { nome: "Claude-Code-Router", url: "https://github.com/musistudio/claude-code-router", descricao: "Roteador inteligente para Claude Code que otimiza custos e limites de contexto entre provedores." },
  { nome: "DASD Thinking", url: "https://github.com/D2I-ai/dasd-thinking", descricao: "Projeto de pesquisa em arquiteturas de raciocínio profundo e modelos sistêmicos de IA." },
  { nome: "Spec Kit", url: "https://github.com/github/spec-kit", descricao: "Toolkit para desenvolvimento orientado a especificações com IA, aumentando a confiabilidade na criação de apps." },
  { nome: "CaRR", url: "https://github.com/THUDM/CaRR", descricao: "Framework de reforço robusto para agentes de busca profunda com recompensas baseadas em citações." },
  { nome: "Superpowers", url: "https://github.com/obra/superpowers", descricao: "Extensão para VS Code que adiciona superpoderes de IA ao seu fluxo de trabalho." },
  { nome: "Ralph", url: "https://github.com/snarktank/ralph", descricao: "Framework de automação de agentes de IA focado em simplicidade e performance." },
  { nome: "Thinking-with-Map", url: "https://github.com/AMAP-ML/Thinking-with-Map", descricao: "Ferramenta de raciocínio visual que ajuda IAs a pensar e planejar com mapas mentais." },
  { nome: "Agent-browser", url: "https://github.com/vercel-labs/agent-browser", descricao: "Biblioteca da Vercel para permitir que agentes de IA naveguem e interajam com a web." },
  { nome: "GLM-Image", url: "https://github.com/zai-org/GLM-Image", descricao: "Modelos avançados de compreensão e geração de imagem baseados em GLM." },
  { nome: "Seta", url: "https://github.com/camel-ai/seta", descricao: "Framework para orquestração de sistemas multi-agentes complexos." },
  { nome: "Eigent", url: "https://github.com/eigent-ai/eigent", descricao: "Soluções de IA para análise de dados e automação empresarial de alta performance." },
  { nome: "Call Me", url: "https://github.com/ZeframLou/call-me", descricao: "Projeto open-source para automação e interação com agentes de IA." },
  { nome: "Ralph TUI", url: "https://github.com/subsy/ralph-tui", descricao: "Interface de terminal moderna e intuitiva para gerenciar tarefas e IA." },
  { nome: "Nanocode", url: "https://github.com/1rgs/nanocode", descricao: "Ambiente de desenvolvimento leve e focado em produtividade assistida por IA." },
  { nome: "Agentboard", url: "https://github.com/gbasin/agentboard", descricao: "Dashboard para monitorar e orquestrar múltiplos agentes de IA em tempo real." },
  { nome: "Sundial Skills", url: "https://github.com/sundial-org/skills/tree/main/skills/tinker", descricao: "Conjunto de habilidades e ferramentas para prototipar agentes de IA avançados." },
  { nome: "Claude Bootstrap", url: "https://github.com/alinaqi/claude-bootstrap", descricao: "Inicialização de projetos focada em segurança e IA-ativa para Claude Code." },
  { nome: "AI Observer", url: "https://github.com/tobilg/ai-observer", descricao: "Ferramenta de observabilidade local unificada para assistentes de codificação com IA." },
  { nome: "Gastown", url: "https://github.com/steveyegge/gastown", descricao: "Gerenciador de workspace multi-agente para fluxos de desenvolvimento complexos." },
  { nome: "SleepFM Clinical", url: "https://github.com/zou-group/sleepfm-clinical", descricao: "Modelo fundacional de sono multimodal e ferramentas de diagnóstico clínico." },
  { nome: "Prompt Forge", url: "https://github.com/insaanimanav/prompt-forge", descricao: "Workbench para engenharia, teste e avaliação sistemática de prompts de IA." },
  { nome: "Ralph Wiggum Marketer", url: "https://github.com/muratcankoylan/ralph-wiggum-marketer/", descricao: "Plugin de copywriting autônomo baseado em IA para Claude Code." },
  { nome: "Doom Coding", url: "https://github.com/rberg27/doom-coding", descricao: "Guia e setup para transformar seu smartphone em um ambiente de desenvolvimento portátil usando Claude Code e SSH para codar em qualquer lugar." },
  { nome: "NVIDIA Isaac GR00T", url: "https://github.com/NVIDIA/Isaac-GR00T", descricao: "Modelo de IA fundacional para robôs humanoides, permitindo compreensão multimodal e controle de ações." },
  { nome: "NVIDIA Cosmos Reason2", url: "https://github.com/nvidia-cosmos/cosmos-reason2", descricao: "Modelo de raciocínio VLM aberto para IA física e robótica, com compreensão espaço-temporal avançada." },
  { nome: "Google AI Edge Gallery", url: "https://github.com/google-ai-edge/gallery", descricao: "Execute modelos de IA generativa de ponta diretamente no dispositivo Android sem internet." },
  { nome: "SkillsBench", url: "https://github.com/benchflow-ai/SkillsBench", descricao: "Benchmark para avaliar como agentes de IA utilizam habilidades e compõem fluxos de trabalho." },
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
