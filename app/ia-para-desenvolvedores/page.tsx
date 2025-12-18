import { CodeBracketIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "Inteligência Artificial para desenvolvimento",
  description: "Ferramentas de IA voltadas para desenvolvedores: assistentes de código, autocompletes e ferramentas colaborativas.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/ia-para-desenvolvedores',
  },
};

const ferramentas = [
  {
    nome: "GitHub Copilot",
    url: "https://github.com/features/copilot",
    descricao: "Assistente de código da GitHub/OpenAI para autocompletar e gerar trechos de código.",
  },
  { nome: "Cursor", url: "https://www.cursor.com", descricao: "IDE com assistente de código e recursos de AI." },
  { nome: "Claude Code", url: "https://www.claude.com/product/claude-code", descricao: "Assistente de código baseado na família Claude (Anthropic)." },
  {
    nome: "Windsurf",
    url: "https://windsurf.com/",
    descricao: "Editor com agente Cascade e suporte a comandos automáticos para manter o fluxo de trabalho.",
  },
  {
    nome: "AWS CodeWhisperer",
    url: "https://aws.amazon.com/pt/q/developer/",
    descricao: "Assistente da AWS para gerar código, revisar e operar workloads diretamente na nuvem.",
  },
  {
    nome: "Tabnine",
    url: "https://www.tabnine.com/",
    descricao: "Autocompletar privado que aprende com o seu código e funciona em múltiplas IDEs.",
  },
  {
    nome: "Google AntiGravity",
    url: "https://antigravity.google/",
    descricao: "Ferramenta da Google para impulsionar produtividade com IA e fluxos agentic.",
  },
  {
    nome: "JetBrains AI Assistant",
    url: "https://www.jetbrains.com/ai/",
    descricao: "Assistente de IA integrado nas IDEs JetBrains para geração e análise de código.",
  },
  {
    nome: "Visual Studio IntelliCode",
    url: "https://learn.microsoft.com/en-us/visualstudio/intellicode/",
    descricao: "Sugestões inteligentes de código baseadas em IA para Visual Studio.",
  },
  {
    nome: "Builduo",
    url: "https://builduo.com/",
    descricao: "Plataforma de desenvolvimento com IA para acelerar a criação de aplicações.",
  },
  {
    nome: "Infrabase",
    url: "https://infrabase.co/",
    descricao: "Ferramenta de IA para gerenciamento e automação de infraestrutura de desenvolvimento.",
  },
  {
    nome: "OneNode",
    url: "https://www.onenode.ai/",
    descricao: "Framework open source de busca semântica multimodal. Processe texto, imagem, vídeo e áudio sem configurar infraestrutura complexa.",
  },
  {
    nome: "Pylar",
    url: "https://www.pylar.ai/",
    descricao: "Plataforma para dar aos agentes de IA acesso seguro a dados estruturados via ferramentas MCP e views SQL governadas.",
  },
  {
    nome: "RightNow AI",
    url: "https://www.rightnowai.co/",
    descricao: "Editor de código all-in-one para GPU kernels com IA hardware-aware e profiling em tempo real.",
  },
  {
    nome: "DebuggAI",
    url: "https://debugg.ai/demo",
    descricao: "Plataforma de testes automatizados com IA que roda em cada pull request.",
  },
  {
    nome: "Kilo",
    url: "https://kilo.ai/",
    descricao: "Agente de código open source mais popular para construir, lançar e iterar mais rápido.",
  },
  {
    nome: "Goose AI",
    url: "https://goose.ai/",
    descricao: "API de IA para desenvolvedores com modelos de linguagem acessíveis e econômicos.",
  },
  {
    nome: "Agents.md",
    url: "https://agents.md/",
    descricao: "Plataforma para criar e gerenciar agentes de IA para desenvolvimento.",
  },
  {
    nome: "Relace AI",
    url: "https://www.relace.ai/",
    descricao: "Ferramenta de IA para acelerar desenvolvimento e automação de código.",
  },
  {
    nome: "Agno",
    url: "https://www.agno.com/",
    descricao: "Plataforma de IA para desenvolvimento colaborativo e gestão de projetos.",
  },
  {
    nome: "Conductor",
    url: "https://conductor.build/",
    descricao: "Ferramenta de orquestração e automação de workflows de desenvolvimento com IA.",
  },
  {
    nome: "Mistral Devstral 2 Vibe CLI",
    url: "https://mistral.ai/news/devstral-2-vibe-cli",
    descricao: "CLI inteligente da Mistral AI para desenvolvimento acelerado com modelos de linguagem.",
  },
  {
    nome: "Softr Workflows",
    url: "https://www.softr.io/workflows",
    descricao: "Crie automações e workflows sem código com IA integrada.",
  },
  {
    nome: "TheFrontKit",
    url: "https://thefrontkit.com/",
    descricao: "Kit de ferramentas front-end com IA para desenvolvimento web acelerado.",
  },
  {
    nome: "GMI Cloud",
    url: "https://www.gmicloud.ai/",
    descricao: "Plataforma em nuvem com IA para gerenciamento e desenvolvimento de projetos.",
  },
  {
    nome: "WorkOS Radar",
    url: "https://workos.com/radar",
    descricao: "Plataforma em nuvem com IA para proteção em tempo real contra bots, fraudes e acessos suspeitos em autenticações SaaS.",
  },
  {
    nome: "Internet Backyard",
    url: "https://www.internetbackyard.com/",
    descricao: "Simplificar e modernizar fluxos financeiros (como cotação, cobrança e pagamentos) em ambientes de computação de alto desempenho.",
  },
  {
    nome: "Coder",
    url: "https://launch.coder.com/",
    descricao: "IDE na nuvem com IA para codificar, revisar e entregar software rápido.",
  },
  {
    nome: "AmpCode",
    url: "https://ampcode.com/",
    descricao: "Escrever, editar e executar código com autonomia, suporte a múltiplas linguagens e colaboração em equipe.",
  },
  {
    nome: "Privacy Shield",
    url: "https://github.com/privacyshield-ai/privacy-firewall",
    descricao: "Proteger sua privacidade ao usar assistentes de IA, bloqueando automaticamente dados sensíveis e segredos antes que sejam enviados.",
  },
  {
    nome: "Context7",
    url: "https://context7.com/",
    descricao: "IA em nuvem que fornece documentação de código atualizada para assistentes de dev com LLMs.",
  },
  {
    nome: "Augment Code Review",
    url: "https://www.augmentcode.com/product/code-review",
    descricao: "Plataforma com IA para revisão automática de código, qualidade e segurança.",
  },
  {
    nome: "Deer flow",
    url: "https://github.com/bytedance/deer-flow",
    descricao: "Framework open-source de IA para pesquisa profunda automatizada com agentes e busca.",
  },
  {
    nome: "Thesys",
    url: "https://www.thesys.dev/",
    descricao: "Plataforma com IA para documentar, visualizar e entender sistemas complexos de software.",
  },
  {
    nome: "Beam Game",
    url: "https://site.beam.game/",
    descricao: "Plataforma com IA que transforma ideias em jogos interativos em minutos.",
  },
  {
    nome: "Rapid Roboflow",
    url: "https://rapid.roboflow.com/",
    descricao: "Ambiente rápido para treinar, testar e implantar modelos de visão computacional.",
  },
  {
    nome: "Tinker",
    url: "https://thinkingmachines.ai/tinker/",
    descricao: "Ambiente experimental para prototipar e testar agentes e fluxos de IA avançados.",
  },
  {
    nome: "Kimi K2 Thinking",
    url: "https://huggingface.co/moonshotai/Kimi-K2-Thinking",
    descricao: "Modelo open-source de IA agentiva com raciocínio profundo e uso de ferramentas.",
  },
  {
    nome: "SkyRL tx",
    url: "https://github.com/NovaSky-AI/SkyRL/tree/main/skyrl-tx",
    descricao: "Framework open-source para reforço de linguagem com IA e aprendizado contínuo.",
  },
  {
    nome: "Reducto",
    url: "https://reducto.ai/",
    descricao: "IA que resume e destaca rapidamente pontos-chave de reuniões e vídeos.",
  },
  {
    nome: "You.com",
    url: "https://about.you.com/",
    descricao: "Assistente de busca com IA que responde perguntas e gera conteúdo personalizado.",
  },
  {
    nome: "Hyperlink",
    url: "https://hyperlink.nexa.ai/",
    descricao: "IA que transforma links e uploads em respostas claras e pesquisáveis.",
  },
  {
    nome: "LongCat-Image",
    url: "https://github.com/meituan-longcat/LongCat-Image",
    descricao: "Projeto open-source de IA para processamento avançado de imagens com aprendizado profundo.",
  },
  {
    nome: "Google Interactions API",
    url: "https://blog.google/technology/developers/interactions-api/",
    descricao: "API para interagir com modelos e agentes de IA com estado e contexto complexo.",
  },
  {
    nome: "LM Studio",
    url: "https://lmstudio.ai/",
    descricao: "Executar e usar modelos de linguagem (LLMs) localmente no seu PC.",
  },
  {
    nome: "Modal Notebooks",
    url: "https://modal.com/products/notebooks/",
    descricao: "Notebooks com IA para escrever, executar e colaborar em código na nuvem.",
  },
  {
    nome: "Kombai",
    url: "https://kombai.com/",
    descricao: "Use para criar, refatorar, testar e melhorar cada parte do seu frontend.",
  },
  {
    nome: "Codewiki Google",
    url: "https://codewiki.google/",
    descricao: "Documentação automática de código com IA e chat integrado ao repositório.",
  },
  {
    nome: "AWS Nova",
    url: "https://aws.amazon.com/pt/nova/",
    descricao: "Modelos Nova da AWS para construir experiências multimodais e agentes.",
  },
  {
    nome: "CoreWeave",
    url: "https://www.coreweave.com/",
    descricao: "Infraestrutura GPU em nuvem otimizada para cargas de IA.",
  },
  {
    nome: "Zencoder.ai",
    url: "https://zencoder.ai/",
    descricao: "Plataforma para criar fluxos e agentes com IA de ponta a ponta.",
  },
  {
    nome: "Stakpak",
    url: "https://stakpak.dev/",
    descricao: "Kit de ferramentas para desenvolver e implantar apps com IA.",
  },
  {
    nome: "Qualgent",
    url: "https://www.qualgent.ai/",
    descricao: "Qualidade e testes de software impulsionados por IA.",
  },
];

export default function IaParaDesenvolvedores() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <CodeBracketIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Desenvolvedores</h1>
      </div>
      <p className="mb-8 text-gray-600">Ferramentas e assistentes pensados para programadores: geração de código, revisões e autocompletes inteligentes.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <a
            key={f.nome}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >
            <h2 className="font-semibold text-lg mb-1">{f.nome}</h2>
            <div className="text-gray-500 text-sm">{f.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
