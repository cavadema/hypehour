import { UserIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "Assistentes de IA e pessoais",
  description: "Ferramentas para criar e usar assistentes de IA pessoais e profissionais.",
  alternates: { canonical: "https://www.hypehour.com.br/assistentes-de-ia" },
};

const ferramentas = [
  { nome: "Remio", url: "https://www.remio.ai/", descricao: "Assistente de IA para organizar e automatizar tarefas pessoais e de trabalho." },
  { nome: "Yutori Scouts", url: "https://yutori.com/scouts", descricao: "Plataforma de scouts/assistentes para busca e acompanhamento de tarefas." },
  { nome: "Huxe", url: "https://www.huxe.com/", descricao: "Assistente pessoal com automações e integração de ferramentas." },
  { nome: "OpenScouts", url: "https://openscouts.firecrawl.dev/", descricao: "Projeto open-source para scouts/assistentes com crawling e ações." },
  { nome: "Kortex", url: "https://yaksh1.github.io/Kortex-Landing-Page", descricao: "Assistente de IA com memória e execução de tarefas complexas." },
  { nome: "Integrity", url: "https://integrity.sh/", descricao: "Assistente focado em segurança e confiabilidade para fluxos profissionais." },
  { nome: "SanaLabs", url: "https://sanalabs.com/agent-platform-overview", descricao: "Extraia aquele documento de preços do Drive, analise os dados nele contidos, gere uma apresentação com as informações e atualize seu CRM — tudo a partir de um único comando em mais de 100 ferramentas." },
  { nome: "Google Disco", url: "https://labs.google/disco", descricao: "Experimento do Chrome baseado no Gemini que transforma suas guias abertas em aplicativos da web leves chamados GenTabs, sugerindo ferramentas interativas com base no que você está navegando e permitindo que você crie aplicativos personalizados com instruções em linguagem simples." },
  { nome: "CoHere", url: "https://cohere.com/products", descricao: "Reordena seus resultados de pesquisa para exibir primeiro os documentos mais relevantes, funcionando em mais de 100 idiomas e com dados complexos como e-mails, tabelas, JSON e código." },
  { nome: "ClickUp v4", url: "https://clickup.com/v4", descricao: "Reúne seus projetos, chats, documentos, automações e o assistente de IA Brain em um único espaço de trabalho convergente, permitindo que você peça ao @Brain para responder perguntas, agendar tarefas e ativar agentes." },
  { nome: "Dex", url: "https://www.joindex.com/", descricao: "Transforma seu navegador Chrome em um único espaço de trabalho com IA que memoriza suas abas, tarefas e contexto, permitindo que você alterne entre pesquisa, planejamento e execução." },
  { nome: "Glady", url: "https://www.gladly.ai/hp1/", descricao: "Transforma o atendimento ao cliente em suporte inteligente, automatizado e personalizado em todos os canais." },
  { nome: "Darwin", url: "https://www.getdarwin.ai/pt", descricao: "Criar funcionários-IA que respondem clientes em canais como WhatsApp, Instagram e ligações, qualificam leads, atualizam CRMs, etc." },
  { nome: "Rovo Atlasian", url: "https://www.atlassian.com/software/rovo", descricao: "Conecta equipes, conhecimento e ferramentas para que você possa agir com mais rapidez e trabalhar de forma mais inteligente."},
  { nome: "WorkTrace", url: "https://www.worktrace.ai/", descricao: "IA que monitora produtividade e atividades para insights inteligentes em equipes."},
  { nome: "AutoGLM", url: "https://xiao9905.github.io/AutoGLM/blog.html", descricao: "Framework open-source para treinar e automatizar modelos de linguagem com agentes."},
  { nome: "Odies", url: "https://apps.apple.com/us/app/odies-ai-companions/id6754986881?mt=12", descricao: "App de companheiros virtuais com IA para conversas e interações personalizadas."},
  { nome: "Mino", url: "https://mino.ai/", descricao: "IA que transforma texto em vídeos realistas com avatares e narração automática."},
  { nome: "Zoom AI Assistant", url: "https://www.zoom.com/pt/products/ai-assistant/", descricao: "Assistente de IA do Zoom para reuniões, tarefas e resumos." },
  { nome: "Google CC", url: "https://labs.google/cc", descricao: "Experimentos do Google Labs com companheiros/assistentes baseados em IA." },
  { nome: "Klarna Agentic Protocol", url: "https://www.klarna.com/international/press/klarna-launches-agentic-product-protocol-the-open-standard-that-makes-100m/", descricao: "Padrão aberto da Klarna para agentes interoperarem com produtos." },
];

export default function AssistentesDeIA() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <UserIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Assistentes de IA e pessoais</h1>
      </div>
      <p className="mb-8 text-gray-600">Assistentes de IA para produtividade, organização e automação de tarefas.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <a key={f.nome} href={f.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100">
            <h2 className="font-semibold text-lg mb-1">{f.nome}</h2>
            <div className="text-gray-500 text-sm">{f.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
