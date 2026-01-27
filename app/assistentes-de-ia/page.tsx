import { UserIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "Assistentes de IA e pessoais",
  description: "Ferramentas para criar e usar assistentes de IA pessoais e profissionais.",
  alternates: { canonical: "https://www.hypehour.com.br/assistentes-de-ia" },
};

const ferramentas = [
  {
    nome: "StudyMate",
    url: "https://studymate.live/en/",
    descricao: "Plataforma de IA para estudantes com ferramentas de resumo, flashcards e assistência em estudos.",
  },
  {
    nome: "Comfy",
    url: "https://www.comfy.org/",
    descricao: "Interface modular e poderosa para fluxos de trabalho de IA estável e criativa.",
  },
  {
    nome: "The Password",
    url: "https://thepassword.app/",
    descricao: "Assistente de segurança e gestão de senhas inteligente com foco em simplicidade.",
  },
  {
    nome: "Notis",
    url: "https://notis.ai/",
    descricao: "Ferramenta de IA para anotações inteligentes e organização de conhecimento.",
  },
  {
    nome: "Note67",
    url: "https://note67.com/",
    descricao: "Plataforma para criação de notas rápidas, resumos e organização pessoal com IA.",
  },
  {
    nome: "Pretty Prompt",
    url: "https://www.pretty-prompt.com/",
    descricao: "Extensão de navegador para otimizar, salvar e compartilhar prompts de IA em equipe.",
  },
  {
    nome: "Prompt Navigator",
    url: "https://chromewebstore.google.com/detail/prompt-navigator/fhjhecdbkkcfaapnpnomdopedafeniee",
    descricao: "Ferramenta de navegação e gerenciamento de prompts para acelerar o uso de LLMs no dia a dia.",
  },
  {
    nome: "Openwork",
    url: "https://openwork.me/",
    descricao: "Agente de desktop open-source que automatiza tarefas de arquivos e navegador localmente.",
  },
  {
    nome: "Weavin",
    url: "https://weavin.ai/",
    descricao: "Plataforma de pesquisa e extração de conhecimento que transforma documentos em insights citáveis.",
  },
  {
    nome: "Clawd",
    url: "https://clawd.bot/",
    descricao: "Assistente de IA pessoal auto-hospedado que funciona via WhatsApp e Telegram com memória persistente.",
  },
  {
    nome: "Drift",
    url: "https://drift.dvkk.dev/",
    descricao: "Plataforma de IA conversacional para qualificação de leads e engajamento personalizado.",
  },
  {
    nome: "Atlas",
    url: "https://atlas.new/new/",
    descricao: "Novo assistente de IA focado em produtividade e organização pessoal inteligente.",
  },
  {
    nome: "Near AI",
    url: "https://near.ai/private-chat",
    descricao: "Chat privado com foco em segurança e soberania de dados para interações com IA.",
  },
  {
    nome: "Confer",
    url: "https://confer.to/",
    descricao: "Assistente de IA para otimizar reuniões e facilitar a colaboração em tempo real.",
  },
  {
    nome: "Atoms",
    url: "https://atoms.dev/",
    descricao: "Ferramenta para desenvolvedores criarem assistentes de IA modulares e escaláveis.",
  },
  {
    nome: "The Second Brain",
    url: "https://www.thesecondbrain.io/",
    descricao: "Crie um segundo cérebro digital com IA para gerenciar conhecimento, resumir vídeos e documentos em um quadro visual interativo.",
  },
  {
    nome: "Goose",
    url: "https://block.github.io/goose/",
    descricao: "Agente de IA open-source focado em engenharia que executa e automatiza tarefas de desenvolvimento complexas localmente.",
  },
  {
    nome: "Clarity",
    url: "https://claritydocs.ai/",
    descricao: "Assistente de documentos com IA para extrair insights, analisar informações e colaborar em equipe sobre arquivos complexos.",
  },
  {
    nome: "AuthorVoices",
    url: "https://www.authorvoices.ai/",
    descricao: "Plataforma para criação de audiobooks e narrações com vozes de IA altamente realistas e expressivas.",
  },
  {
    nome: "Awesome ChatGPT Prompts",
    url: "https://prompts.chat/",
    descricao: "Curadoria colaborativa dos melhores prompts para extrair o máximo de modelos como ChatGPT e Claude.",
  },
  {
    nome: "Aside",
    url: "https://getaside.co/",
    descricao: "Assistente de IA focado em produtividade para gerenciar tarefas e informações de forma centralizada.",
  },
  { nome: "DoAnything", url: "https://www.doanything.com/", descricao: "Assistente de IA versátil e flexível para automação de tarefas cotidianas e profissionais." },
  { nome: "Hipcityreg", url: "https://hipcityreg-situation-monitor.vercel.app/", descricao: "Painel em tempo real projetado para monitorar notícias globais, mercados e eventos geopolíticos em uma visão consolidada." },
  { nome: "Spangle", url: "https://www.spangle.ai/", descricao: "Plataforma de e-commerce baseada em IA que cria experiências de compra personalizadas e landing pages otimizadas em tempo real." },
  { nome: "Ringg AI", url: "https://www.ringg.ai/", descricao: "Assistentes de voz com IA para automatizar chamadas, qualificar leads e agendar reuniões." },
  { nome: "Wethos", url: "https://wethos.ai/", descricao: "Plataforma de cognição empresarial e ferramentas para freelancers gerarem propostas e contratos." },
  { nome: "Incogni", url: "https://incogni.com/", descricao: "Ferramenta de remoção de dados que automatiza a exclusão de informações pessoais de corretores de dados para proteger sua privacidade digital." },
  { nome: "Radial", url: "https://radial.appverge.net/", descricao: "Plataforma que usa IA para otimizar operações de logística e suporte à decisão em saúde." },
  { nome: "Talo AI", url: "https://taloai.com/", descricao: "Tradutor em tempo real para videochamadas que funciona como um intérprete ao vivo em diversas plataformas." },
  { nome: "Olive", url: "https://fromolive.com/", descricao: "Plataforma de IA que conecta bancos de dados para construir ferramentas internas a partir de prompts." },
  { nome: "Scouts", url: "https://yutori.com/scouts", descricao: "Agentes de IA autônomos para pesquisa e monitoramento de informações na web." },
  { nome: "Creaibo", url: "https://creaibo.io/", descricao: "Plataforma para criar assistentes de IA personalizados e chatbots para empresas e marketing." },
  { nome: "Friendware", url: "https://www.friendware.ai/", descricao: "Copiloto de IA para macOS que entende o contexto do seu trabalho, prevê intenções e executa ações em tempo real." },
  { nome: "Zaia", url: "https://zaia.app/", descricao: "Crie funcionários de IA para atendimento, suporte e vendas no WhatsApp em minutos." },
  { nome: "My Audio Journal", url: "https://www.myaudiojournal.com/", descricao: "Diário de áudio pessoal que grava, transcreve e analisa suas entradas para autoconhecimento." },
  { nome: "Refinder", url: "https://refinder.ai/", descricao: "Hub de trabalho com IA para Slack e Google Chat que automatiza tarefas e gerencia apps." },
  { nome: "AI Context Flow", url: "https://chromewebstore.google.com/detail/ai-context-flow-shared-me/cfegfckldnmbdnimjgfamhjnmjpcmgnf", descricao: "Extensão para memória compartilhada e prompts aprimorados no ChatGPT, Claude e outros." },
  { nome: "Slashit", url: "https://www.slashit.app/", descricao: "Transforme textos comuns em atalhos inteligentes para economizar horas de digitação repetitiva." },
  { nome: "Screenshots.AI", url: "https://screenshots.ai/", descricao: "Torne suas screenshots instantaneamente pesquisáveis com IA, organizadas automaticamente como bookmarks." },
  { nome: "TwelveLabs", url: "https://www.twelvelabs.io/", descricao: "IA multimodal para buscar e entender vídeos em linguagem natural com compreensão de tempo e espaço." },
  { nome: "NotebookLM", url: "https://notebooklm.google/", descricao: "Assistente de pesquisa do Google que analisa fontes, transforma complexidade em clareza e gera conteúdo." },
  { nome: "Recallify", url: "https://recallify.ai/", descricao: "Companheiro de IA para memória, aprendizado e tarefas com gravação de voz e suporte para ADHD." },
  { nome: "PingPrompt", url: "https://launch.pingprompt.dev/", descricao: "Ferramenta para criar e testar prompts de IA com validação e otimização automática." },
  { nome: "HeyHelp", url: "https://www.heyhelp.ai/", descricao: "Assistente executivo de IA dentro do Gmail para rascunhar respostas e organizar emails automaticamente." },
  { nome: "Tallyrus", url: "https://tallyrus.com/", descricao: "Assistente de IA para automação de tarefas e gerenciamento de produtividade pessoal." },
  { nome: "Saner.ai", url: "https://www.saner.ai/", descricao: "Assistente pessoal de IA para ADHD com gerenciamento de notas, emails e calendário." },
  { nome: "Guru", url: "https://www.getguru.com/pt", descricao: "IA de knowledge base + assistente inteligente para responder perguntas internas, onboarding e suporte a times." },
  { nome: "Connect Machine", url: "https://www.connectmachine.ai/", descricao: "Assistente de IA para conectar e automatizar workflows entre diferentes ferramentas e sistemas." },
  { nome: "Remio", url: "https://www.remio.ai/", descricao: "Assistente de IA para organizar e automatizar tarefas pessoais e de trabalho." },
  { nome: "Yutori Scouts", url: "https://yutori.com/scouts", descricao: "Plataforma de scouts/assistentes para busca e acompanhamento de tarefas." },
  { nome: "Huxe", url: "https://www.huxe.com/", descricao: "Assistente pessoal com automações e integração de ferramentas." },
  { nome: "OpenScouts", url: "https://openscouts.firecrawl.dev/", descricao: "Projeto open-source para scouts/assistentes com crawling e ações." },
  { nome: "Kortex", url: "https://yaksh1.github.io/Kortex-Landing-Page", descricao: "Assistente de IA com memória e execução de tarefas complexas." },
  { nome: "Integrity", url: "https://integrity.sh/", descricao: "Assistente focado em segurança e confiabilidade para fluxos profissionais." },
  { nome: "SanaLabs", url: "/ferramentas/sanalabs", descricao: "Extraia aquele documento de preços do Drive, analise os dados nele contidos, gere uma apresentação com as informações e atualize seu CRM — tudo a partir de um único comando em mais de 100 ferramentas." },
  { nome: "Google Disco", url: "https://labs.google/disco", descricao: "Experimento do Chrome baseado no Gemini que transforma suas guias abertas em aplicativos da web leves chamados GenTabs, sugerindo ferramentas interativas com base no que você está navegando e permitindo que você crie aplicativos personalizados com instruções em linguagem simples." },
  { nome: "CoHere", url: "https://cohere.com/products", descricao: "Reordena seus resultados de pesquisa para exibir primeiro os documentos mais relevantes, funcionando em mais de 100 idiomas e com dados complexos como e-mails, tabelas, JSON e código." },
  { nome: "ClickUp v4", url: "https://clickup.com/v4", descricao: "Reúne seus projetos, chats, documentos, automações e o assistente de IA Brain em um único espaço de trabalho convergente, permitindo que você peça ao @Brain para responder perguntas, agendar tarefas e ativar agentes." },
  { nome: "Dex", url: "https://www.joindex.com/", descricao: "Transforma seu navegador Chrome em um único espaço de trabalho com IA que memoriza suas abas, tarefas e contexto, permitindo que você alterne entre pesquisa, planejamento e execução." },
  { nome: "Glady", url: "https://www.gladly.ai/hp1/", descricao: "Transforma o atendimento ao cliente em suporte inteligente, automatizado e personalizado em todos os canais." },
  { nome: "Darwin", url: "https://www.getdarwin.ai/pt", descricao: "Criar funcionários-IA que respondem clientes em canais como WhatsApp, Instagram e ligações, qualificam leads, atualizam CRMs, etc." },
  { nome: "Rovo Atlasian", url: "https://www.atlassian.com/software/rovo", descricao: "Conecta equipes, conhecimento e ferramentas para que você possa agir com mais rapidez e trabalhar de forma mais inteligente." },
  { nome: "WorkTrace", url: "https://www.worktrace.ai/", descricao: "IA que monitora produtividade e atividades para insights inteligentes em equipes." },
  { nome: "AutoGLM", url: "https://xiao9905.github.io/AutoGLM/blog.html", descricao: "Framework open-source para treinar e automatizar modelos de linguagem com agentes." },
  { nome: "Odies", url: "https://apps.apple.com/us/app/odies-ai-companions/id6754986881?mt=12", descricao: "App de companheiros virtuais com IA para conversas e interações personalizadas." },
  { nome: "Mino", url: "https://mino.ai/", descricao: "IA que transforma texto em vídeos realistas com avatares e narração automática." },
  { nome: "Zoom AI Assistant", url: "https://www.zoom.com/pt/products/ai-assistant/", descricao: "Assistente de IA do Zoom para reuniões, tarefas e resumos." },
  { nome: "Google CC", url: "https://labs.google/cc", descricao: "Experimentos do Google Labs com companheiros/assistentes baseados em IA." },
  { nome: "Klarna Agentic Protocol", url: "https://www.klarna.com/international/press/klarna-launches-agentic-product-protocol-the-open-standard-that-makes-100m/", descricao: "Padrão aberto da Klarna para agentes interoperarem com produtos." },
  { nome: "Sonatype Guide", url: "https://www.sonatype.com/products/sonatype-guide", descricao: "Assistente com IA para guiar desenvolvedores em segurança e dependências." },
  { nome: "Radiant", url: "https://radiantapp.com/", descricao: "Assistente pessoal com IA para foco, tarefas e informações rápidas." },
  { nome: "Varchive", url: "https://varchive.ai/", descricao: "Organize conhecimento e documentos com IA em um único lugar." },
  { nome: "Coral AI", url: "https://www.getcoralai.com/", descricao: "Assistente de IA para produtividade e automação de tarefas." },
  { nome: "Sintra", url: "https://sintra.ai/", descricao: "Equipe de assistentes de IA que trabalham 24/7 para automação de tarefas, marketing, vendas e atendimento ao cliente." },
  { nome: "Doco", url: "https://www.trydoco.com/", descricao: "Assistente de IA integrado ao Microsoft Word para editar, resumir e formatar documentos profissionais." },
  { nome: "Cove", url: "https://cove.ai/", descricao: "Assistente de IA para emails, pesquisa e rotinas diárias com contexto persistente." },
  { nome: "Claritydocs", url: "https://claritydocs.ai/", descricao: "Companheiro de IA para documentar decisões, reuniões e fluxo de trabalho automaticamente." },
];

export default function AssistentesDeIA() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
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
