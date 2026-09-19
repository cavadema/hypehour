import ExpandableContent from "./ExpandableContent";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

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
    card: 'summary_large_image',
    title: "Ferramentas de Inteligência Artificial para vibe coding",
    description: "Ferramentas e IAs para acelerar seu fluxo de desenvolvimento: editores, assistentes e automações.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

const ferramentas = [
  { nome: "Scaffold", url: "/ferramentas/scaffold", descricao: "Gera a estrutura completa de projetos de software com IA a partir de uma descrição em linguagem natural." },
  { nome: "Soloist AI", url: "/ferramentas/soloist", descricao: "Assistente de desenvolvimento com IA para desenvolvedores solo, com contexto persistente e pair programming." },
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
    url: "/ferramentas/replit",
    descricao: "IDE completa no browser com IA, deploy instantâneo, banco de dados e hospedagem — sem configurar nada localmente. Ideal para quem está aprendendo ou quer prototipar sem atrito de ambiente. Diferencial: é a única plataforma da categoria que oferece IDE + infraestrutura de produção completa (servidor, banco, domínio) em um único lugar. O Replit Agent gera apps funcionais do zero com autenticação e banco de dados embutidos.",
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
  { nome: "Windsurf", url: "https://windsurf.com/", descricao: "IDE com agent mode agressivo (Cascade) que navega, edita múltiplos arquivos, roda comandos e corrige erros em loop autônomo. Adquirida pela OpenAI em 2025, é competidora direta do Cursor com proposta similar. Melhor para devs que querem autonomia máxima do agente sem migrar de ambiente. Diferencial: o Cascade tende a ser mais proativo que o Cursor Agent em projetos com muitos arquivos interdependentes." },
  { nome: "GenStore", url: "https://www.genstore.ai/", descricao: "Loja de componentes e prompts de IA para impulsionar seus projetos de vibe coding." },
  { nome: "Emergent", url: "https://app.emergent.sh/", descricao: "Construa apps prontos para produção através de conversas com agentes de IA que desenham, codificam e implantam." },
  { nome: "Dropstone", url: "https://www.dropstone.io/", descricao: "Runtime de engenharia de software autônomo que substitui IDEs, focado em refatoração e correção automática." },
  { nome: "PromptDC", url: "https://promptdc.com/", descricao: "Extensão para aprimoramento de prompts em tempo real para plataformas como Lovable, Bolt e editores locais." },
  { nome: "Vertical Studio", url: "https://www.verticalstudio.ai/", descricao: "Plataforma no-code para customizar, afinar e implantar modelos de IA descentralizados." },
  { nome: "Uimagic", url: "https://www.uimagic.io/", descricao: "Crie sites personalizados e prontos para lançamento em menos de 5 minutos com IA." },
  { nome: "YouTube Playables Builder", url: "https://www.youtube.com/playablesbuilder/", descricao: "Ferramenta do YouTube para criar experiências jogáveis e fluxos interativos que podem ser embutidos." },
  { nome: "Figroot", url: "https://www.figma.com/pt-br/comunidade/plugin/1486825259782611959/figroot-free-figma-to-code-react-tailwind-css-html-css-plugin", descricao: "Plugin gratuito do Figma que converte designs em código React, Tailwind CSS e HTML/CSS com IA." },
  { nome: "Creao AI", url: "https://creao.ai/", descricao: "Plataforma de IA para desenvolvimento rápido de aplicações com assistente inteligente." },
  { nome: "Lovable", url: "/ferramentas/lovable", descricao: "Plataforma de vibe coding com a melhor UX não-técnica do mercado: cria apps React completos com backend Supabase a partir de descrições em linguagem natural. Tem sincronização com GitHub e editor visual. Melhor para founders e product managers que querem lançar MVPs sem background técnico. Diferencial: edições iterativas mais estáveis que o Bolt em apps com banco de dados e autenticação." },
  { nome: "Bolt.new", url: "/ferramentas/bolt-new", descricao: "Gera aplicações web full-stack completas a partir de um único prompt, rodando no browser via WebContainers sem backend externo. Melhor para MVPs simples, landing pages com lógica e ferramentas internas rápidas. Diferencial: velocidade — vai de ideia a app deployado em minutos sem nenhuma configuração. Limitação prática: perde consistência em projetos com muitos arquivos ou regras de negócio complexas." },
  { nome: "v0", url: "/ferramentas/v0", descricao: "Especializado em geração de componentes e páginas React com shadcn/ui e Tailwind CSS — código de qualidade de produção. Não é um gerador de apps completo: foca em UI. Melhor para desenvolvedores Next.js que querem acelerar a criação de interfaces sem sair do projeto existente. Diferencial: gera os melhores componentes UI por IA do mercado, com integração direta com Next.js e deploy na Vercel." },
  { nome: "Base44", url: "/ferramentas/base44", descricao: "Plataforma de vibe coding com IA que transforma descrições em aplicações web completas com backend, banco de dados e autenticação." },
  { nome: "Trae", url: "https://trae.ai", descricao: "IDE com IA desenvolvida pela ByteDance que oferece acesso gratuito a modelos premium como Claude e DeepSeek. Competidor direto do Cursor, disponível para macOS e Windows. Melhor para devs que querem funcionalidades similares ao Cursor sem custo de assinatura. Observação: por ser da ByteDance, pode ser uma preocupação para uso com código proprietário corporativo — verifique a política de privacidade antes de usar em projetos comerciais." },
  { nome: "Cursor", url: "/ferramentas/cursor", descricao: "IDE com IA que entende o codebase inteiro, não apenas o arquivo aberto. O modo Agent executa tarefas complexas em múltiplos arquivos autonomamente: cria, edita, roda testes e corrige erros em loop. Melhor para desenvolvedores experientes que querem máxima produtividade no próprio editor. Diferencial prático: funciona melhor em projetos com código existente do que ferramentas geradoras como Bolt ou Lovable." },
  { nome: "Tempo", url: "https://tempo.new", descricao: "Ferramenta focada em produtividade para devs React." },
  { nome: "Create", url: "https://www.create.xyz", descricao: "Ferramenta de geração de apps via prompt." },
  { nome: "Google AI Studio", url: "https://aistudio.google.com/", descricao: "Interface web gratuita para experimentar e prototipar com os modelos Gemini mais recentes, incluindo os de raciocínio e contexto longo. Não é um IDE — é uma plataforma de prototipagem para testar prompts, criar apps com Gemini e gerar código via API. Melhor para desenvolvedores que querem explorar capacidades do Gemini antes de integrar em produção. Diferencial: acesso gratuito (com limites de taxa) aos modelos Gemini mais novos do Google." },
  { nome: "Cody", url: "https://www.sourcegraph.com/cody", descricao: "Assistente de código da Sourcegraph." },
  { nome: "Google Gemini Code Assist", url: "https://ai.google.dev/", descricao: "Assistente de código do Google integrado a VS Code e JetBrains, anteriormente chamado Duet AI. Tem tier gratuito individual generoso e plano enterprise focado em times no Google Cloud. Melhor para equipes que já usam GCP ou Google Workspace e querem assistente de código dentro do ecossistema Google. Diferencial: integração profunda com Google Cloud, com controles de dados e conformidade corporativa que outras ferramentas não oferecem." },
  { nome: "Warp AI", url: "https://www.warp.dev/", descricao: "Terminal moderno com IA integrada que entende e explica comandos, sugere correções de erros e responde perguntas técnicas diretamente no terminal. Não é um IDE — complementa o workflow sem substituir o editor. Melhor para desenvolvedores que passam muito tempo no terminal e querem IA contextual nos comandos. Diferencial: única ferramenta da categoria focada 100% na experiência de terminal com IA." },
  { nome: "Aider", url: "https://aider.chat/", descricao: "Ferramenta open source de pair programming com IA via linha de comando, integrada ao Git — faz commits automáticos com mensagens descritivas a cada alteração. Suporta qualquer LLM (GPT-4, Claude, Gemini, modelos locais via Ollama). Melhor para desenvolvedores experientes que preferem terminal e querem controle total sobre modelo e histórico de mudanças. Diferencial: é a opção mais poderosa para quem domina CLI e quer custo mínimo usando modelos próprios." },
  { nome: "Continue.dev", url: "https://www.continue.dev/", descricao: "Extensão open source para VS Code e JetBrains que funciona como alternativa gratuita ao GitHub Copilot, com suporte a qualquer modelo incluindo os locais via Ollama. Totalmente configurável e sem telemetria obrigatória. Melhor para devs que querem controle total sobre dados e modelo sem custo de assinatura. Diferencial: única solução open source da categoria com suporte a modelos locais e edição de múltiplos arquivos." },
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
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para Vibe Coding</span>
      </nav>
      <div className="flex items-center gap-3 mb-8">
        <CodeBracketIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Vibe Coding</h1>
      </div>
      <ExpandableContent />
      <h2 className="text-2xl font-bold mb-6 text-black">Melhores ferramentas de IA para Vibe Coding</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <ToolCard key={f.nome} nome={f.nome} url={f.url} descricao={f.descricao} />
        ))}
      </div>
      <div className="mt-12">
        <ComparativoFerramentas />
      </div>
      <ComoEscolher />
      <ProTips />
      <FAQSection />
      

      <CategoryPageSchema
        title="Ferramentas de Inteligência Artificial para vibe coding"
        description="Ferramentas e IAs para acelerar seu fluxo de desenvolvimento: editores, assistentes e automações."
        canonicalUrl="https://www.hypehour.com.br/ia-para-vibe-coding"
        ferramentas={ferramentas}
      />
    </main>
  );
}
