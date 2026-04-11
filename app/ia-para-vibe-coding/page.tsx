import ExpandableContent from "./ExpandableContent";
import { CodeBracketIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "Ferramentas de Inteligência Artificial para vibe coding",
  description: "Ferramentas e IAs para acelerar seu fluxo de desenvolvimento: editores, assistentes e automações.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/ia-para-vibe-coding',
  },
  openGraph: {
    title: "Ferramentas de Inteligência Artificial para vibe coding",
    description: "Ferramentas e IAs para acelerar seu fluxo de desenvolvimento: editores, assistentes e automações.",
    url: "https://www.hypehour.com.br/ia-para-vibe-coding",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: "Ferramentas de Inteligência Artificial para vibe coding",
    description: "Ferramentas e IAs para acelerar seu fluxo de desenvolvimento: editores, assistentes e automações.",
  },
};

const ferramentas = [
  {
    nome: "Fimo AI",
    url: "https://fimo.ai/",
    descricao: "Construtor de sites nativo de IA que integra ferramentas generativas diretamente no CMS e no editor visual.",
  },
  {
    nome: "Nori Skillsets",
    url: "https://noriskillsets.dev/",
    descricao: "Habilidades e ferramentas otimizadas para potencializar fluxos de desenvolvimento via vibe coding.",
  },
  {
    nome: "Compyle",
    url: "https://www.compyle.ai/",
    descricao: "Agente de código que colabora com você, planejando e confirmando passos antes de realizar alterações complexas.",
  },
  {
    nome: "Replit",
    url: "https://replit.com/",
    descricao: "IDE colaborativa baseada em nuvem que integra IA para codificação e desenvolvimento ágil.",
  },
  {
    nome: "Meku",
    url: "https://meku.dev/",
    descricao: "Ferramenta de vibe coding para prototipar ideias em aplicações funcionais rapidamente.",
  },
  {
    nome: "Open SaaS",
    url: "https://opensaas.sh/",
    descricao: "Starter kit open-source para SaaS com React, Node.js e recursos de IA integrados.",
  },
  {
    nome: "Atoms",
    url: "https://atoms.dev/",
    descricao: "Ferramenta para criação ultra-rápida de aplicações e agentes via vibe coding.",
  },
  {
    nome: "Dessn",
    url: "https://www.dessn.ai/",
    descricao: "Ferramenta de vibe coding que permite criar interfaces de usuário diretamente no código através de desenhos e interações visuais.",
  },
  { nome: "RepoPrompt", url: "https://repoprompt.com/", descricao: "Engenharia de contexto e colaboração de agentes IA no macOS para fluxos de vibe coding." },
  { nome: "Rork", url: "https://rork.com/", descricao: "Crie aplicativos móveis nativos para iOS e Android descrevendo sua ideia em linguagem natural." },
  { nome: "PageAI", url: "https://pageai.pro/", descricao: "Transforme prompts de texto em sites profissionais, otimizados e totalmente codificados em minutos." },
  { nome: "Windsurf", url: "https://windsurf.com/", descricao: "IDE de código com IA que mantém você no fluxo, integrando agentes de codificação e ferramentas inteligentes." },
  { nome: "GenStore", url: "https://www.genstore.ai/", descricao: "Loja de componentes e prompts de IA para impulsionar seus projetos de vibe coding." },
  { nome: "Emergent", url: "https://app.emergent.sh/", descricao: "Construa apps prontos para produção através de conversas com agentes de IA que desenham, codificam e implantam." },
  { nome: "Dropstone", url: "https://www.dropstone.io/", descricao: "Runtime de engenharia de software autônomo que substitui IDEs, focado em refatoração e correção automática." },
  { nome: "PromptDC", url: "https://promptdc.com/", descricao: "Extensão para aprimoramento de prompts em tempo real para plataformas como Lovable, Bolt e editores locais." },
  { nome: "Vertical Studio", url: "https://www.verticalstudio.ai/", descricao: "Plataforma no-code para customizar, afinar e implantar modelos de IA descentralizados." },
  { nome: "Uimagic", url: "https://www.uimagic.io/", descricao: "Crie sites personalizados e prontos para lançamento em menos de 5 minutos com IA." },
  { nome: "YouTube Playables Builder", url: "https://www.youtube.com/playablesbuilder/", descricao: "Ferramenta do YouTube para criar experiências jogáveis e fluxos interativos que podem ser embutidos." },
  { nome: "Figroot", url: "https://www.figma.com/pt-br/comunidade/plugin/1486825259782611959/figroot-free-figma-to-code-react-tailwind-css-html-css-plugin", descricao: "Plugin gratuito do Figma que converte designs em código React, Tailwind CSS e HTML/CSS com IA." },
  { nome: "Creao AI", url: "https://creao.ai/", descricao: "Plataforma de IA para desenvolvimento rápido de aplicações com assistente inteligente." },
  { nome: "Lovable", url: "/ferramentas/lovable", descricao: "IA para programação, resumos e automações." },
  { nome: "Bolt.new", url: "https://bolt.new/", descricao: "Ferramenta para acelerar desenvolvimento e automações." },
  { nome: "v0", url: "https://v0.dev/", descricao: "Plataforma para criação rápida de interfaces e automações." },
  { nome: "Base44", url: "https://base44.com", descricao: "Ferramenta/infra de IA para criar apps completos." },
  { nome: "Trae", url: "https://trae.ai", descricao: "IDE adaptativo com IA da ByteDance." },
  { nome: "Cursor", url: "/ferramentas/cursor", descricao: "IDE com assistente de código e recursos AI." },
  { nome: "Tempo", url: "https://tempo.new", descricao: "Ferramenta focada em produtividade para devs React." },
  { nome: "Create", url: "https://www.create.xyz", descricao: "Ferramenta de geração de apps via prompt." },
  { nome: "Google AI Studio", url: "https://aistudio.google.com/", descricao: "Plataforma de ferramentas AI do Google (Studio)." },
  { nome: "Cody", url: "https://www.sourcegraph.com/cody", descricao: "Assistente de código da Sourcegraph." },
  { nome: "Google Gemini Code Assist", url: "https://ai.google.dev/", descricao: "Assistente de codificação inteligente do Google com modelos Gemini." },
  { nome: "Warp AI", url: "https://www.warp.dev/", descricao: "Terminal moderno reimaginado com IA integrada." },
  { nome: "Aider", url: "https://aider.chat/", descricao: "Programação em par com IA diretamente no seu terminal." },
  { nome: "Continue.dev", url: "https://www.continue.dev/", descricao: "Extensão open-source para IDE com piloto automático de código." },
  { nome: "FastShot", url: "https://fastshot.ai/", descricao: "Crie apps móveis nativos 100x mais rápido sem código, apenas com prompts de IA." },
  { nome: "Skip", url: "https://www.goskip.dev/", descricao: "O Lovable brasileiro. Transforme ideias em aplicações web completas com IA." },
  { nome: "Deco", url: "https://www.decocms.com/", descricao: "Plataforma MCP-native para criar apps AI full-stack com governança integrada." },
  { nome: "Loki", url: "https://loki.build/", descricao: "Crie landing pages de alta qualidade com IA, rápidas e totalmente personalizáveis." },
  { nome: "Gazel", url: "https://gazel.ai/", descricao: "Plataforma de IA para criar e gerenciar agentes autônomos para diversas tarefas." },
  { nome: "TensorBlock", url: "https://tensorblock.io/", descricao: "Ferramenta para otimização e implantação de modelos de IA em produção." },
  { nome: "Orca Engine", url: "https://orcaengine.ai/", descricao: "Plataforma de IA para criação de jogos com automação e ferramentas avançadas." },
  { nome: "Google Stitch", url: "https://stitch.withgoogle.com/", descricao: "Ferramenta experimental do Google para criação colaborativa com IA." },
  { nome: "AppWizzy", url: "https://appwizzy.com/", descricao: "Plataforma de IA para criar aplicações web e mobile sem código rapidamente." },
  { nome: "Orchids", url: "https://www.orchids.app/", descricao: "Plataforma no/low-code para criar apps e fluxos com IA." },
  { nome: "Vibecode AI App Builder", url: "https://apps.apple.com/us/app/vibecode-ai-app-builder/id6742912146", descricao: "App builder móvel com geração assistida por IA." },
  { nome: "Vybe build", url: "https://www.vybe.build/", descricao: "Apps internos seguros, criados por IA em segundos, com seus dados." },
  { nome: "Fei studio", url: "https://autonomyai.io/", descricao: "Estúdio com IA para criar agentes visuais interativos e experiências digitais autônomas." },
  { nome: "BrainGrid", url: "https://www.braingrid.ai/", descricao: "Soluções de IA empresarial para análise, automação e tomada de decisão inteligente." },
  { nome: "Youware", url: "https://www.youware.com/", descricao: "Sistema com IA para gerenciar conhecimento e centralizar perguntas e respostas da sua empresa." },
  { nome: "Webflow Code Gen", url: "https://webflow.com/feature/code-gen", descricao: "Recurso com IA que gera código automaticamente a partir de designs no Webflow." },
  { nome: "VibeCSS - AI CSS Editor (extensao)", url: "https://chromewebstore.google.com/detail/vibecss-ai-css-editor/colipoagmianjahabfbghhpmeclolgad", descricao: "Extensão com IA que edita e gera CSS diretamente no navegador para estilizar sites." },
  { nome: "Mocha", url: "https://getmocha.com/", descricao: "Agente/IDE com IA para criar apps via chat e ações." },
  { nome: "PromptGuard", url: "https://promptguard.co/", descricao: "Ferramenta de segurança para proteger prompts e detectar vulnerabilidades em sistemas de IA." },
  { nome: "Bitrig", url: "https://www.bitrig.com/", descricao: "Ferramentas para criar apps com IA rapidamente." },
  { nome: "Google Opal", url: "https://opal.google/", descricao: "Plataforma experimental do Google para apps com IA." },
  { nome: "Retool", url: "https://retool.com/", descricao: "Crie apps internos rapidamente; integrações e automações." },
  { nome: "Gambo", url: "https://www.gambo.ai/", descricao: "Geração de apps e fluxos com IA." },
  { nome: "Blink", url: "https://blink.new/", descricao: "Ferramenta rápida para prototipagem e desenvolvimento web com IA." },
  { nome: "Caffeine", url: "https://caffeine.ai/", descricao: "IA para acelerar desenvolvimento e automatizar tarefas de código." },
  { nome: "Hey Boss", url: "https://heyboss.ai/", descricao: "Plataforma de IA para automação de workflows e tarefas de negócio." },
  { nome: "10Web", url: "https://10web.io/", descricao: "Criador de sites com IA, hospedagem e ferramentas de otimização." },
  { nome: "Durable", url: "https://durable.co/pt", descricao: "Construtor de sites e apps com IA em minutos." },
  { nome: "StyleAI", url: "https://www.styleai.io/", descricao: "IA para design e estilo visual de projetos web." },
  { nome: "Epic (goepic.dev)", url: "https://www.goepic.dev/", descricao: "PRPs (especificações LLM) para Lovable com arquivos, dependências e critérios de aceitação." },
];

export default function IaParaVibeCoding() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <CodeBracketIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Vibe Coding</h1>
      </div>
      <ExpandableContent />
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => {
          const isInternal = f.url.startsWith('/');
          const content = (
            <>
              <h2 className="font-semibold text-lg mb-1">{f.nome}</h2>
              <div className="text-gray-500 text-sm">{f.descricao}</div>
            </>
          );
          const className = "block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100";

          if (isInternal) {
            return (
              <Link key={f.nome} href={f.url} className={className}>
                {content}
              </Link>
            );
          }

          return (
            <a
              key={f.nome}
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              className={className}
            >
              {content}
            </a>
          );
        })}
      </div>

      <FAQSection />
      
    </main>
  );
}
