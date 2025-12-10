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
