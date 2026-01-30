import {
  SparklesIcon, PhotoIcon, CodeBracketIcon, CodeBracketSquareIcon, ShieldCheckIcon, AcademicCapIcon, EnvelopeIcon, GlobeAltIcon, MusicalNoteIcon, ArchiveBoxIcon, PencilSquareIcon, MegaphoneIcon, PresentationChartLineIcon, VideoCameraIcon, BuildingOffice2Icon, DocumentTextIcon, Square3Stack3DIcon,
  UserIcon, HeartIcon,
  UserGroupIcon,
  PhoneIcon, MicrophoneIcon, BuildingStorefrontIcon, CogIcon, ArrowPathIcon, ChartBarIcon, CommandLineIcon, CpuChipIcon
} from "@heroicons/react/24/solid";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.hypehour.com.br/#organization",
      "name": "Hypehour",
      "url": "https://www.hypehour.com.br"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.hypehour.com.br/#website",
      "name": "Hypehour",
      "url": "https://www.hypehour.com.br",
      "publisher": {
        "@id": "https://www.hypehour.com.br/#organization"
      }
    }
  ]
};

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#f7f8fa] font-sans -mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Primeira dobra */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 border-b border-zinc-200 relative overflow-hidden">
        <SparklesIcon className="w-16 h-16 text-gray-700 mb-4 animate-pulse" />
        <h1 className="apify-title text-center drop-shadow-lg">Ferramentas de IA</h1>
        <p className="apify-subtitle text-center max-w-2xl mx-auto">
          Seu guia completo de Inteligência Artificial. Descubra, compare e escolha as melhores ferramentas de IA para transformar cada área do seu negócio.
        </p>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-200 rounded-full opacity-30 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-100 rounded-full opacity-20 blur-2xl" />
      </section>

      {/* Últimas IA adicionadas */}
      <section id="ultimas-ias" className="w-full max-w-5xl mx-auto py-12 px-4">
        <h2 className="apify-section-title flex items-center gap-2"><SparklesIcon className="w-6 h-6 text-gray-700" />Últimas IA adicionadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="https://mastra.ai/" target="_blank" rel="noopener noreferrer" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><GlobeAltIcon className="w-5 h-5" /> Mastra</span>
            <p className="text-zinc-700">Framework TypeScript para construir agentes com workflows, memória, streaming e interações otimizadas.</p>
            <span className="text-xs text-zinc-500">Adicionada em 30/01/2026</span>
          </a>
          <a href="https://www.pencil.dev/" target="_blank" rel="noopener noreferrer" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PencilSquareIcon className="w-5 h-5" /> Pencil</span>
            <p className="text-zinc-700">Design no canvas que se traduz diretamente em código para acelerar o fluxo de engenharia.</p>
            <span className="text-xs text-zinc-500">Adicionada em 30/01/2026</span>
          </a>
          <a href="https://benji.org/agentation" target="_blank" rel="noopener noreferrer" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CodeBracketIcon className="w-5 h-5" /> Agentation</span>
            <p className="text-zinc-700">Ferramenta agnóstica para feedback visual de agentes, permitindo interações de apontar e clicar.</p>
            <span className="text-xs text-zinc-500">Adicionada em 30/01/2026</span>
          </a>
          <a href="https://www.blockit.com/" target="_blank" rel="noopener noreferrer" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><UserIcon className="w-5 h-5" /> Blockit</span>
            <p className="text-zinc-700">Assistente de agendamento autônomo 24/7 via Slack e E-mail para gerenciar seu tempo.</p>
            <span className="text-xs text-zinc-500">Adicionada em 30/01/2026</span>
          </a>
          <a href="https://www.testudo.co/" target="_blank" rel="noopener noreferrer" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><BuildingOffice2Icon className="w-5 h-5" /> Testudo</span>
            <p className="text-zinc-700">Seguro gerado por IA para empresas, quantificando e transferindo riscos de sistemas de IA.</p>
            <span className="text-xs text-zinc-500">Adicionada em 30/01/2026</span>
          </a>
          <a href="https://ernie.baidu.com/" target="_blank" rel="noopener noreferrer" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CpuChipIcon className="w-5 h-5" /> ERNIE (Baidu)</span>
            <p className="text-zinc-700">O modelo de linguagem de larga escala da Baidu com capacidades avançadas de compreensão e geração.</p>
            <span className="text-xs text-zinc-500">Adicionada em 30/01/2026</span>
          </a>
        </div>
      </section>

      {/* IA para PDFs */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <DocumentTextIcon className="w-6 h-6 text-gray-700" />
            IA para PDFs
          </h2>
          <a href="/ia-para-pdf" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para PDFs
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><DocumentTextIcon className="w-5 h-5" /> Doctly</span>
            <p className="text-zinc-700">IA para ler, resumir e organizar PDFs com extração segura.</p>
            <span className="text-xs text-zinc-500">Categoria: PDFs</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><DocumentTextIcon className="w-5 h-5" /> Docparser</span>
            <p className="text-zinc-700">Extraia dados estruturados de PDFs e automatize processos.</p>
            <span className="text-xs text-zinc-500">Categoria: PDFs</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><DocumentTextIcon className="w-5 h-5" /> ChatPDF</span>
            <p className="text-zinc-700">Converse com seus PDFs em português para resumos e respostas.</p>
            <span className="text-xs text-zinc-500">Categoria: PDFs</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-pdf" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para PDFs
          </a>
        </div>
      </section>

      {/* IA para Criar Planilhas */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <PencilSquareIcon className="w-6 h-6 text-gray-700" />
            IA para Criar Planilhas
          </h2>
          <a href="/ia-para-planilhas" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para planilhas
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PencilSquareIcon className="w-5 h-5" /> Quadratic</span>
            <p className="text-zinc-700">Torna o trabalho com planilhas simples, com resultados impressionantes.</p>
            <span className="text-xs text-zinc-500">Categoria: Planilhas</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PencilSquareIcon className="w-5 h-5" /> Shortcut</span>
            <p className="text-zinc-700">Automatiza tarefas de Excel/Sheets com IA, gerando fórmulas e análises.</p>
            <span className="text-xs text-zinc-500">Categoria: Planilhas</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PencilSquareIcon className="w-5 h-5" /> Sheets Organizer</span>
            <p className="text-zinc-700">Automatize planilhas e dashboards com IA para relatórios e análises.</p>
            <span className="text-xs text-zinc-500">Categoria: Planilhas</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-planilhas" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para planilhas
          </a>
        </div>
      </section>

      {/* IA para Aprender inglês */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <AcademicCapIcon className="w-6 h-6 text-gray-700" />
            IA para Aprender inglês
          </h2>
          <a href="/aprender-ingles-com-ia" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para inglês
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <AcademicCapIcon className="w-5 h-5" /> Speak
            </span>
            <p className="text-zinc-700">Aulas personalizadas com IA e feedback de pronúncia.</p>
            <span className="text-xs text-zinc-500">Categoria: Inglês</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <AcademicCapIcon className="w-5 h-5" /> BeConfident
            </span>
            <p className="text-zinc-700">Treino de conversação com correções e simulações.</p>
            <span className="text-xs text-zinc-500">Categoria: Inglês</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <AcademicCapIcon className="w-5 h-5" /> Duolingo
            </span>
            <p className="text-zinc-700">Curso gamificado com suporte de IA e prática diária.</p>
            <span className="text-xs text-zinc-500">Categoria: Inglês</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/aprender-ingles-com-ia" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para inglês
          </a>
        </div>
      </section>

      {/* IA para Atendimento */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <PhoneIcon className="w-6 h-6 text-gray-700" />
            IA para Atendimento
          </h2>
          <a href="/ia-para-atendimento" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para atendimento
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <PhoneIcon className="w-5 h-5" /> Helploom
            </span>
            <p className="text-zinc-700">Plataforma de atendimento com IA para automação e gestão integrada.</p>
            <span className="text-xs text-zinc-500">Categoria: Atendimento</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <PhoneIcon className="w-5 h-5" /> Gladly
            </span>
            <p className="text-zinc-700">Transforma o atendimento em suporte inteligente, automatizado e personalizado.</p>
            <span className="text-xs text-zinc-500">Categoria: Atendimento</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <PhoneIcon className="w-5 h-5" /> Darwin
            </span>
            <p className="text-zinc-700">Funcionários-IA que respondem em múltiplos canais e qualificam leads.</p>
            <span className="text-xs text-zinc-500">Categoria: Atendimento</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-atendimento" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para atendimento
          </a>
        </div>
      </section>

      {/* Gerador de Voz com IA */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <GlobeAltIcon className="w-6 h-6 text-gray-700" />
            Gerador de Voz com IA
          </h2>
          <a href="/gerador-de-voz-ia" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA de voz
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <GlobeAltIcon className="w-5 h-5" /> Deevid
            </span>
            <p className="text-zinc-700">Geração de voz em português com alta naturalidade.</p>
            <span className="text-xs text-zinc-500">Categoria: Voz IA</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <GlobeAltIcon className="w-5 h-5" /> Canva
            </span>
            <p className="text-zinc-700">Gerador de voz integrado ao editor Canva.</p>
            <span className="text-xs text-zinc-500">Categoria: Voz IA</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <GlobeAltIcon className="w-5 h-5" /> ElevenLabs
            </span>
            <p className="text-zinc-700">Referência em TTS com vozes realistas e clonagem de voz.</p>
            <span className="text-xs text-zinc-500">Categoria: Voz IA</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/gerador-de-voz-ia" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA de voz
          </a>
        </div>
      </section>

      {/* Assistentes de IA e pessoais */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <UserIcon className="w-6 h-6 text-gray-700" />
            Assistentes de IA e pessoais
          </h2>
          <a href="/assistentes-de-ia" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA assistentes
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <UserIcon className="w-5 h-5" /> Remio
            </span>
            <p className="text-zinc-700">Assistente de IA para organizar e automatizar tarefas.</p>
            <span className="text-xs text-zinc-500">Categoria: Assistentes</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <UserIcon className="w-5 h-5" /> Yutori Scouts
            </span>
            <p className="text-zinc-700">Scouts/assistentes para busca e acompanhamento de tarefas.</p>
            <span className="text-xs text-zinc-500">Categoria: Assistentes</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <UserIcon className="w-5 h-5" /> Huxe
            </span>
            <p className="text-zinc-700">Assistente pessoal com automações e integrações.</p>
            <span className="text-xs text-zinc-500">Categoria: Assistentes</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/assistentes-de-ia" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA assistentes
          </a>
        </div>
      </section>


      {/* IA para Música */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <MusicalNoteIcon className="w-6 h-6 text-gray-700" />
            IA para Música
          </h2>
          <a href="/ia-para-musica" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para música
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <MusicalNoteIcon className="w-5 h-5" /> Suno
            </span>
            <p className="text-zinc-700">Crie músicas completas com vocais e instrumentais usando IA.</p>
            <span className="text-xs text-zinc-500">Categoria: Música</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <MusicalNoteIcon className="w-5 h-5" /> Udio
            </span>
            <p className="text-zinc-700">Plataforma de criação musical com alta fidelidade e controle criativo.</p>
            <span className="text-xs text-zinc-500">Categoria: Música</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <MusicalNoteIcon className="w-5 h-5" /> Stable Audio
            </span>
            <p className="text-zinc-700">Geração de música e efeitos sonoros de alta qualidade pela Stability AI.</p>
            <span className="text-xs text-zinc-500">Categoria: Música</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-musica" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para música
          </a>
        </div>
      </section>

      {/* IA para imagens */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2"><PhotoIcon className="w-6 h-6 text-gray-700" />IA para imagens</h2>
          <a href="/ia-para-imagens" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas as IA para imagens</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PhotoIcon className="w-5 h-5" /> Whisk</span>
            <p className="text-zinc-700">IA do Google para geração e edição de imagens.</p>
            <span className="text-xs text-zinc-500">Categoria: Imagens</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PhotoIcon className="w-5 h-5" /> Pixlr</span>
            <p className="text-zinc-700">Editor de imagens com IA e recursos avançados.</p>
            <span className="text-xs text-zinc-500">Categoria: Imagens</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PhotoIcon className="w-5 h-5" /> Midjourney</span>
            <p className="text-zinc-700">Geração de imagens artísticas por IA via Discord.</p>
            <span className="text-xs text-zinc-500">Categoria: Imagens</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-imagens" className="text-black text-sm font-medium hover:underline">Ver todas as IA para imagens</a>
        </div>
      </section>

      {/* IA para Vídeos */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <VideoCameraIcon className="w-6 h-6 text-gray-700" />
            IA para Vídeos
          </h2>
          <a href="/ia-para-criar-videos" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para vídeos
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <VideoCameraIcon className="w-5 h-5" /> Google Gemini Veo 3.1
            </span>
            <p className="text-zinc-700">Modelo de geração de vídeo mais capaz do Google, criando vídeos 1080p de alta qualidade.</p>
            <span className="text-xs text-zinc-500">Categoria: Vídeos</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <VideoCameraIcon className="w-5 h-5" /> Adobe Firefly Video
            </span>
            <p className="text-zinc-700">Gere vídeos a partir de texto ou imagens com controle criativo e segurança comercial.</p>
            <span className="text-xs text-zinc-500">Categoria: Vídeos</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <VideoCameraIcon className="w-5 h-5" /> KlingAI
            </span>
            <p className="text-zinc-700">Ferramenta poderosa para criar vídeos realistas com movimentos complexos.</p>
            <span className="text-xs text-zinc-500">Categoria: Vídeos</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-criar-videos" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para vídeos
          </a>
        </div>
      </section>

      {/* IA para Conteúdo */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <PencilSquareIcon className="w-6 h-6 text-gray-700" />
            IA para Conteúdo
          </h2>
          <a href="/ferramentas-de-ia-para-conteudo" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para conteúdo
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <PencilSquareIcon className="w-5 h-5" /> Contentor
            </span>
            <p className="text-zinc-700">IA de SEO para criar conteúdo de qualidade com análise de SERP, briefing e geração ilimitada.</p>
            <span className="text-xs text-zinc-500">Categoria: Conteúdo</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <PencilSquareIcon className="w-5 h-5" /> Copy.ai
            </span>
            <p className="text-zinc-700">Gerador de textos para blogs, redes sociais e e-mails com foco em conversão.</p>
            <span className="text-xs text-zinc-500">Categoria: Conteúdo</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <PencilSquareIcon className="w-5 h-5" /> HubSpot Content Hub
            </span>
            <p className="text-zinc-700">Hub de conteúdo da HubSpot com ferramentas de IA para criar e gerenciar blogs e sites.</p>
            <span className="text-xs text-zinc-500">Categoria: Conteúdo</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ferramentas-de-ia-para-conteudo" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para conteúdo
          </a>
        </div>
      </section>

      {/* IA para Transcrever Áudio */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <MusicalNoteIcon className="w-6 h-6 text-gray-700" />
            IA para Transcrever Áudio
          </h2>
          <a href="/transcrever-audio" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para transcrever áudio
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <MusicalNoteIcon className="w-5 h-5" /> Speechify
            </span>
            <p className="text-zinc-700">Plataforma de IA para transcrição e conversão de texto em áudio com vozes naturais.</p>
            <span className="text-xs text-zinc-500">Categoria: Transcrição</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <MusicalNoteIcon className="w-5 h-5" /> Wisprflow
            </span>
            <p className="text-zinc-700">Transcrição automática de áudio com IA para fluxos de trabalho profissionais.</p>
            <span className="text-xs text-zinc-500">Categoria: Transcrição</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <MusicalNoteIcon className="w-5 h-5" /> Willowvoice
            </span>
            <p className="text-zinc-700">Ferramenta de transcrição de voz com IA para criar textos precisos.</p>
            <span className="text-xs text-zinc-500">Categoria: Transcrição</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/transcrever-audio" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para transcrever áudio
          </a>
        </div>
      </section>

      {/* IA para Fazer Ata de Reunião */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <DocumentTextIcon className="w-6 h-6 text-gray-700" />
            IA para Fazer Ata de Reunião
          </h2>
          <a href="/ia-para-fazer-ata-reuniao" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para ata de reunião
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <DocumentTextIcon className="w-5 h-5" /> Fellow
            </span>
            <p className="text-zinc-700">Plataforma IA para gerenciar reuniões, criar atas e acompanhar ações automaticamente.</p>
            <span className="text-xs text-zinc-500">Categoria: Ata de Reunião</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <DocumentTextIcon className="w-5 h-5" /> Reclaim
            </span>
            <p className="text-zinc-700">Assistente de IA para otimizar agenda e gerar resumos de reuniões.</p>
            <span className="text-xs text-zinc-500">Categoria: Ata de Reunião</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <DocumentTextIcon className="w-5 h-5" /> tldv
            </span>
            <p className="text-zinc-700">Transcrição e resumo automático de reuniões com IA em português.</p>
            <span className="text-xs text-zinc-500">Categoria: Ata de Reunião</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-fazer-ata-reuniao" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para ata de reunião
          </a>
        </div>
      </section>

      {/* Criação de Agentes de IA */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <GlobeAltIcon className="w-6 h-6 text-gray-700" />
            Criação de Agentes de IA
          </h2>
          <a href="/criacao-agentes-ia" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para criação de agentes
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <GlobeAltIcon className="w-5 h-5" /> Incredible
            </span>
            <p className="text-zinc-700">Plataforma para criar agentes de IA com orquestração de fluxos.</p>
            <span className="text-xs text-zinc-500">Categoria: Agentes</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <GlobeAltIcon className="w-5 h-5" /> Tate A Tate
            </span>
            <p className="text-zinc-700">Construa agentes conversacionais com recursos avançados.</p>
            <span className="text-xs text-zinc-500">Categoria: Agentes</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <GlobeAltIcon className="w-5 h-5" /> Okareo
            </span>
            <p className="text-zinc-700">Teste e monitore agentes de IA em produção.</p>
            <span className="text-xs text-zinc-500">Categoria: Agentes</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/criacao-agentes-ia" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para criação de agentes
          </a>
        </div>
      </section>

      {/* IA para Marketing */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <MegaphoneIcon className="w-6 h-6 text-gray-700" />
            IA para Marketing
          </h2>
          <a href="/ia-para-marketing" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para marketing
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <MegaphoneIcon className="w-5 h-5" /> eKyte
            </span>
            <p className="text-zinc-700">Plataforma de gestão de marketing digital com IA para planejar e executar campanhas.</p>
            <span className="text-xs text-zinc-500">Categoria: Marketing</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <MegaphoneIcon className="w-5 h-5" /> Writesonic
            </span>
            <p className="text-zinc-700">Ferramenta de escrita com IA para criar conteúdo de marketing otimizado para SEO.</p>
            <span className="text-xs text-zinc-500">Categoria: Marketing</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <MegaphoneIcon className="w-5 h-5" /> Lumen5
            </span>
            <p className="text-zinc-700">Transforme textos e artigos em vídeos engajadores para redes sociais com IA.</p>
            <span className="text-xs text-zinc-500">Categoria: Marketing</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-marketing" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para marketing
          </a>
        </div>
      </section>

      {/* IA para Criar Apresentações */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <PresentationChartLineIcon className="w-6 h-6 text-gray-700" />
            IA para Criar Apresentações
          </h2>
          <a href="/ia-para-criar-apresentacoes" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para apresentações
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <PresentationChartLineIcon className="w-5 h-5" /> Genspark
            </span>
            <p className="text-zinc-700">Crie apresentações impressionantes a partir de prompts simples com IA generativa.</p>
            <span className="text-xs text-zinc-500">Categoria: Apresentações</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <PresentationChartLineIcon className="w-5 h-5" /> Presentations.ai
            </span>
            <p className="text-zinc-700">Plataforma de design de apresentações focada em empresas e colaboração em tempo real.</p>
            <span className="text-xs text-zinc-500">Categoria: Apresentações</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <PresentationChartLineIcon className="w-5 h-5" /> AiPPT
            </span>
            <p className="text-zinc-700">Gerador de PPTs com inteligência artificial que transforma tópicos em slides prontos.</p>
            <span className="text-xs text-zinc-500">Categoria: Apresentações</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-criar-apresentacoes" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para apresentações
          </a>
        </div>
      </section>

      {/* IA para vibe coding */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2"><CodeBracketIcon className="w-6 h-6 text-gray-700" />IA para vibe coding</h2>
          <a href="/ia-para-vibe-coding" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas as IA para vibe coding</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CodeBracketIcon className="w-5 h-5" /> Lovable</span>
            <p className="text-zinc-700">IA para programação, resumos e automações.</p>
            <span className="text-xs text-zinc-500">Categoria: Coding</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CodeBracketIcon className="w-5 h-5" /> Bolt.new</span>
            <p className="text-zinc-700">Ferramenta de IA para acelerar o desenvolvimento e automação de código.</p>
            <span className="text-xs text-zinc-500">Categoria: Coding</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CodeBracketIcon className="w-5 h-5" /> v0</span>
            <p className="text-zinc-700">Plataforma de IA para criação rápida de interfaces e automações.</p>
            <span className="text-xs text-zinc-500">Categoria: Coding</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-vibe-coding" className="text-black text-sm font-medium hover:underline">Ver todas as IA para vibe coding</a>
        </div>
      </section>

      {/* IA para desenvolvedores */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2"><CodeBracketIcon className="w-6 h-6 text-gray-700" />IA para desenvolvedores</h2>
          <a href="/ia-para-desenvolvedores" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas as IA para desenvolvedores</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CodeBracketIcon className="w-5 h-5" /> GitHub Copilot</span>
            <p className="text-zinc-700">Assistente de código da GitHub/OpenAI para autocompletar e gerar trechos de código.</p>
            <span className="text-xs text-zinc-500">Categoria: Desenvolvedores</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CodeBracketIcon className="w-5 h-5" /> Cursor</span>
            <p className="text-zinc-700">IDE com assistente de código e recursos de AI.</p>
            <span className="text-xs text-zinc-500">Categoria: Desenvolvedores</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CodeBracketIcon className="w-5 h-5" /> Google AntiGravity</span>
            <p className="text-zinc-700">Plataforma da Google para impulsionar produtividade de desenvolvedores com IA.</p>
            <span className="text-xs text-zinc-500">Categoria: Desenvolvedores</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-desenvolvedores" className="text-black text-sm font-medium hover:underline">Ver todas as IA para desenvolvedores</a>
        </div>
      </section>

      {/* IA para Médicos */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <ShieldCheckIcon className="w-6 h-6 text-gray-700" />
            IA para Médicos
          </h2>
          <a href="/ia-para-medicos" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para médicos
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <ShieldCheckIcon className="w-5 h-5" /> IBM Watson Healthcare
            </span>
            <p className="text-zinc-700">Soluções de IA para saúde, oncologia e pesquisa clínica.</p>
            <span className="text-xs text-zinc-500">Categoria: Médicos</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <ShieldCheckIcon className="w-5 h-5" /> Ada
            </span>
            <p className="text-zinc-700">App de avaliação de sintomas com IA e guia de saúde pessoal.</p>
            <span className="text-xs text-zinc-500">Categoria: Médicos</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <ShieldCheckIcon className="w-5 h-5" /> Voa Health
            </span>
            <p className="text-zinc-700">Assistente que gera documentos clínicos como anamnese e receitas automaticamente.</p>
            <span className="text-xs text-zinc-500">Categoria: Médicos</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-medicos" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para médicos
          </a>
        </div>
      </section>

      {/* IA para Arquitetura */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <BuildingOffice2Icon className="w-6 h-6 text-gray-700" />
            IA para Arquitetura
          </h2>
          <a href="/ia-para-arquitetura" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para arquitetura
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <BuildingOffice2Icon className="w-5 h-5" /> Redraw
            </span>
            <p className="text-zinc-700">Transforme seus esboços em renderizações fotorrealistas em segundos.</p>
            <span className="text-xs text-zinc-500">Categoria: Arquitetura</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <BuildingOffice2Icon className="w-5 h-5" /> PromeAI
            </span>
            <p className="text-zinc-700">Gerador de arquitetura com IA para criar designs e renderizações impressionantes.</p>
            <span className="text-xs text-zinc-500">Categoria: Arquitetura</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <BuildingOffice2Icon className="w-5 h-5" /> Leonardo AI
            </span>
            <p className="text-zinc-700">Crie ativos de arquitetura e designs conceituais com ferramentas avançadas.</p>
            <span className="text-xs text-zinc-500">Categoria: Arquitetura</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-arquitetura" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para arquitetura
          </a>
        </div>
      </section>

      {/* IA para professores */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <AcademicCapIcon className="w-6 h-6 text-gray-700" />
            IA para professores
          </h2>
          <a href="/ia-para-professores" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as IA para professores
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><AcademicCapIcon className="w-5 h-5" /> Conker.AI</span>
            <p className="text-zinc-700">Gerador de quizzes alinhados a padrões educacionais em poucos cliques.</p>
            <span className="text-xs text-zinc-500">Categoria: Professores</span>
          </div>

          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><AcademicCapIcon className="w-5 h-5" /> Diffit.me</span>
            <p className="text-zinc-700">Crie leituras adaptadas e planos de aula personalizados automaticamente.</p>
            <span className="text-xs text-zinc-500">Categoria: Professores</span>
          </div>

          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><AcademicCapIcon className="w-5 h-5" /> Socratic</span>
            <p className="text-zinc-700">Suite de IA para planejar aulas, tarefas e acompanhar alunos.</p>
            <span className="text-xs text-zinc-500">Categoria: Professores</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-professores" className="text-black text-sm font-medium hover:underline">
            Ver todas as IA para professores
          </a>
        </div>
      </section>

      {/* Detecção de IA */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <ShieldCheckIcon className="w-6 h-6 text-gray-700" />
            Detecção de IA
          </h2>
          <a href="/ferramenta-de-deteccao-de-ia" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas as ferramentas de detecção</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><ShieldCheckIcon className="w-5 h-5" /> QuillBot Detector de IA</span>
            <p className="text-zinc-700">Ferramenta do QuillBot para analisar textos e apontar traços de IA.</p>
            <span className="text-xs text-zinc-500">Categoria: Detecção de IA</span>
          </div>

          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><ShieldCheckIcon className="w-5 h-5" /> Sidekicker</span>
            <p className="text-zinc-700">Detector de conteúdo alimentado por IA com análise rápida e dashboards.</p>
            <span className="text-xs text-zinc-500">Categoria: Detecção de IA</span>
          </div>

          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><ShieldCheckIcon className="w-5 h-5" /> WinstonAI</span>
            <p className="text-zinc-700">Detector especializado em identificar conteúdos acadêmicos escritos por IA.</p>
            <span className="text-xs text-zinc-500">Categoria: Detecção de IA</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ferramenta-de-deteccao-de-ia" className="text-black text-sm font-medium hover:underline">Ver todas as ferramentas de detecção</a>
        </div>
      </section>

      {/* Navegadores de IA */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <GlobeAltIcon className="w-6 h-6 text-gray-700" />
            Navegadores de IA
          </h2>
          <a href="/navegadores-de-ia" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todos os navegadores de IA
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><GlobeAltIcon className="w-5 h-5" /> ChatGPT Atlas</span>
            <p className="text-zinc-700">Experiência de navegação com Copilot do ChatGPT integrada ao browser Atlas.</p>
            <span className="text-xs text-zinc-500">Categoria: Navegadores de IA</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><GlobeAltIcon className="w-5 h-5" /> Perplexity Comet</span>
            <p className="text-zinc-700">Navegador que traz respostas da Perplexity diretamente na aba atual.</p>
            <span className="text-xs text-zinc-500">Categoria: Navegadores de IA</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><GlobeAltIcon className="w-5 h-5" /> Opera One</span>
            <p className="text-zinc-700">Browser com Aria e módulos multimídia para uso de IA integrado.</p>
            <span className="text-xs text-zinc-500">Categoria: Navegadores de IA</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/navegadores-de-ia" className="text-black text-sm font-medium hover:underline">
            Ver todos os navegadores de IA
          </a>
        </div>
      </section>

      {/* Pacotes de Ferramentas de IA */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <ArchiveBoxIcon className="w-6 h-6 text-gray-700" />
            Pacotes de Ferramentas de IA
          </h2>
          <a href="/pacotes-de-ferramentas-e-agregadores-ia" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todos os pacotes e agregadores
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <ArchiveBoxIcon className="w-5 h-5" /> Adapta
            </span>
            <p className="text-zinc-700">Plataforma que conecta ferramentas de IA para otimizar fluxos de trabalho.</p>
            <span className="text-xs text-zinc-500">Categoria: Agregadores</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <ArchiveBoxIcon className="w-5 h-5" /> InnerAI
            </span>
            <p className="text-zinc-700">Ecossistema de IA para empresas, integrando diversos modelos e ferramentas.</p>
            <span className="text-xs text-zinc-500">Categoria: Agregadores</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <ArchiveBoxIcon className="w-5 h-5" /> Tess
            </span>
            <p className="text-zinc-700">Assistente de IA que agrega múltiplos modelos em uma única interface.</p>
            <span className="text-xs text-zinc-500">Categoria: Agregadores</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/pacotes-de-ferramentas-e-agregadores-ia" className="text-black text-sm font-medium hover:underline">
            Ver todos os pacotes e agregadores
          </a>
        </div>
      </section>

      {/* Cursos de IA */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <AcademicCapIcon className="w-6 h-6 text-gray-700" />
            Cursos de IA gratuitos e pagos
          </h2>
          <a href="/cursos-de-ia" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todos os cursos</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><AcademicCapIcon className="w-5 h-5" /> Escola Virtual Gov.br</span>
            <p className="text-zinc-700">Curso gratuito de IA oferecido pelo Governo Federal.</p>
            <span className="text-xs text-zinc-500">Categoria: Cursos</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><AcademicCapIcon className="w-5 h-5" /> Inteligência Artificial e o Novo Contexto da Cultura Digital</span>
            <p className="text-zinc-700">Curso sobre IA e cultura digital oferecido pela Fundação Getúlio Vargas.</p>
            <span className="text-xs text-zinc-500">Categoria: Cursos</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><AcademicCapIcon className="w-5 h-5" /> Inteligência Artificial na Alura</span>
            <p className="text-zinc-700">Aprenda IA com cursos práticos e estruturados da Alura.</p>
            <span className="text-xs text-zinc-500">Categoria: Cursos</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/cursos-de-ia" className="text-black text-sm font-medium hover:underline">Ver todos os cursos</a>
        </div>
      </section>

      {/* IA para Análise de Dados */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <ArchiveBoxIcon className="w-6 h-6 text-gray-700" />
            IA para Análise de Dados
          </h2>
          <a href="/analise-de-dados" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas as IAs para análise de dados</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><ArchiveBoxIcon className="w-5 h-5" /> Zettadata</span>
            <p className="text-zinc-700">Plataforma de análise de dados com IA para insights automatizados.</p>
            <span className="text-xs text-zinc-500">Categoria: Análise de dados</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><ArchiveBoxIcon className="w-5 h-5" /> Basedash</span>
            <p className="text-zinc-700">Interface de IA para visualizar e editar dados do seu banco.</p>
            <span className="text-xs text-zinc-500">Categoria: Análise de dados</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><ArchiveBoxIcon className="w-5 h-5" /> Rybbit</span>
            <p className="text-zinc-700">Análise de dados com IA e automações para decisões rápidas.</p>
            <span className="text-xs text-zinc-500">Categoria: Análise de dados</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/analise-de-dados" className="text-black text-sm font-medium hover:underline">Ver todas as IAs para análise de dados</a>
        </div>
      </section>

      {/* Newsletters de IA */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <EnvelopeIcon className="w-6 h-6 text-gray-700" />
            Newsletters de IA
          </h2>
          <a href="/newsletters-de-ia" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas as newsletters de IA</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><EnvelopeIcon className="w-5 h-5" /> AiDrop</span>
            <p className="text-zinc-700">Resumos semanais de avanços em IA: ferramentas, prompts e modelos novos.</p>
            <span className="text-xs text-zinc-500">Newsletter</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><EnvelopeIcon className="w-5 h-5" /> AI Factory News</span>
            <p className="text-zinc-700">Newsletter do Distrito focada em inteligência artificial e inovação.</p>
            <span className="text-xs text-zinc-500">Newsletter</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><EnvelopeIcon className="w-5 h-5" /> IAí?</span>
            <p className="text-zinc-700">Newsletter do O Globo sobre como a IA transforma o dia a dia.</p>
            <span className="text-xs text-zinc-500">Newsletter</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/newsletters-de-ia" className="text-black text-sm font-medium hover:underline">Ver todas as newsletters de IA</a>
        </div>
      </section>

      {/* Estatísticas do site */}
      <section className="w-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Hypehour em Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">30+</div>
              <div className="text-white/90 text-sm md:text-base font-medium">Categorias</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">250+</div>
              <div className="text-white/90 text-sm md:text-base font-medium">Ferramentas IA</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">10+</div>
              <div className="text-white/90 text-sm md:text-base font-medium">Newsletters</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">15+</div>
              <div className="text-white/90 text-sm md:text-base font-medium">Modelos de IA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Versões de modelos */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <h2 className="apify-section-title flex items-center gap-2">
          <SparklesIcon className="w-6 h-6 text-gray-700" />
          Versões de Modelos de LLMs (Large Language Models)
        </h2>
        <p className="text-zinc-600 mb-8">
          Acompanhe os lançamentos e atualizações das principais famílias de modelos de linguagem do mercado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> GPT-5.2</span>
            <p className="text-zinc-700">Modelo multimodal avançado da OpenAI para raciocínio, código e criação pro.</p>
            <span className="text-xs text-zinc-500">Lançamento: Dez/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Gemini 3.0</span>
            <p className="text-zinc-700">Modelo multimodal do Google capaz de operar em texto, imagem e vídeo.</p>
            <span className="text-xs text-zinc-500">Lançamento: Nov/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Opus 4.5</span>
            <p className="text-zinc-700">Atualização da Anthropic focada em respostas mais seguras e assertivas.</p>
            <span className="text-xs text-zinc-500">Lançamento: Out/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Sonnet 4.5</span>
            <p className="text-zinc-700">Equilíbrio entre custo e performance para fluxos de automação avançados.</p>
            <span className="text-xs text-zinc-500">Lançamento: Out/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Grok 4.1</span>
            <p className="text-zinc-700">Modelo da xAI com acesso em tempo real aos dados públicos da plataforma X.</p>
            <span className="text-xs text-zinc-500">Lançamento: Set/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Llama 4</span>
            <p className="text-zinc-700">Nova geração open-source da Meta com melhorias significativas em raciocínio e performance.</p>
            <span className="text-xs text-zinc-500">Lançamento: Dez/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Perplexity Sonar</span>
            <p className="text-zinc-700">Modelo focado em busca e raciocínio em tempo real, baseado no Llama 3.1.</p>
            <span className="text-xs text-zinc-500">Lançamento: Dez/2024</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> DeepSeek 3.2</span>
            <p className="text-zinc-700">Modelo open-weights com desempenho de ponta e custo reduzido.</p>
            <span className="text-xs text-zinc-500">Lançamento: Dez/2024</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Qwen3</span>
            <p className="text-zinc-700">Família de modelos da Alibaba com excelência em código e matemática.</p>
            <span className="text-xs text-zinc-500">Lançamento: Set/2024</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Mistral 3</span>
            <p className="text-zinc-700">Modelo fronteira da Mistral AI com raciocínio avançado e eficiência.</p>
            <span className="text-xs text-zinc-500">Lançamento: Jan/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Maritaca - Sabiazinho-4</span>
            <p className="text-zinc-700">LLM brasileiro treinado especificamente para o português e cultura nacional.</p>
            <span className="text-xs text-zinc-500">Lançamento: Fev/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> manus 1.6</span>
            <p className="text-zinc-700">um passo significativo em direção a um futuro onde a AI pode lidar de forma confiável com a maior parte do seu trabalho mais complexo.</p>
            <span className="text-xs text-zinc-500">Lançamento: Mar/2025</span>
          </div>
        </div>
      </section>

      {/* Modelos de LLMs */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <SparklesIcon className="w-6 h-6 text-gray-700" />
            Modelos de LLMs em destaque
          </h2>
          <a href="/modelos-de-llms" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todos os modelos de LLMs
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> OpenAI ChatGPT</span>
            <p className="text-zinc-700">Modelo multimodal da OpenAI com resultados de texto, voz e imagem.</p>
            <span className="text-xs text-zinc-500">Modelo proprietário</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Google Gemini</span>
            <p className="text-zinc-700">Família Gemini com suporte a texto, imagem, áudio e agentes.</p>
            <span className="text-xs text-zinc-500">Modelo proprietário</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Anthropic Claude</span>
            <p className="text-zinc-700">Linha Claude com foco em segurança e respostas confiáveis.</p>
            <span className="text-xs text-zinc-500">Modelo proprietário</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/modelos-de-llms" className="text-black text-sm font-medium hover:underline">
            Ver todos os modelos de LLMs
          </a>
        </div>
      </section>

      {/* Automação */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <SparklesIcon className="w-6 h-6 text-gray-700" />
            Automação
          </h2>
          <a href="/automacao-ia" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">
            Ver todas as ferramentas de automação
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <SparklesIcon className="w-5 h-5" /> Atlassian Rovo
            </span>
            <p className="text-zinc-700">Automação e busca inteligente com IA para equipes Atlassian.</p>
            <span className="text-xs text-zinc-500">Categoria: Automação</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <SparklesIcon className="w-5 h-5" /> Thesys N8N
            </span>
            <p className="text-zinc-700">Plataforma de automação de workflows com IA e integração de ferramentas.</p>
            <span className="text-xs text-zinc-500">Categoria: Automação</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold">
              <SparklesIcon className="w-5 h-5" /> Kadabra
            </span>
            <p className="text-zinc-700">Automação de processos com IA para simplificar tarefas empresariais.</p>
            <span className="text-xs text-zinc-500">Categoria: Automação</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/automacao-ia" className="text-black text-sm font-medium hover:underline">
            Ver todas as ferramentas de automação
          </a>
        </div>
      </section>


      {/* Depoimentos */}
      <section id="depoimentos" className="w-full max-w-5xl mx-auto py-12 px-4">
        <h2 className="apify-section-title mb-8">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="apify-card p-6">
            <p className="text-zinc-700">&quot;Esse site me ajudou a descobrir várias IAs do mercado e para meu segmento de trabalho.&quot;</p>
            <div className="mt-4 text-sm text-zinc-500">— Usuário satisfeito</div>
          </div>

          <div className="apify-card p-6">
            <p className="text-zinc-700">&quot;Não imaginava que tinha tantas IAs para gerar imagens.&quot;</p>
            <div className="mt-4 text-sm text-zinc-500">— Designer visual</div>
          </div>

          <div className="apify-card p-6">
            <p className="text-zinc-700">&quot;Eu estava pesquisando IAs para um trabalho e acabei descobrindo um novo mercado para aprender a programar.&quot;</p>
            <div className="mt-4 text-sm text-zinc-500">— Estudante</div>
          </div>
        </div>
      </section>
    </div >
  );
}
