import { SparklesIcon, PhotoIcon, CodeBracketIcon, ShieldCheckIcon, AcademicCapIcon, EnvelopeIcon, GlobeAltIcon, MusicalNoteIcon, ArchiveBoxIcon, PencilSquareIcon, MegaphoneIcon, PresentationChartLineIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#f7f8fa] font-sans -mt-20">
      {/* Primeira dobra */}
      <section className="w-full flex flex-col items-center justify-center py-32 bg-gradient-to-br from-blue-50 via-white to-blue-100 border-b border-zinc-200 relative overflow-hidden">
        <SparklesIcon className="w-16 h-16 text-blue-400 mb-4 animate-pulse" />
        <h1 className="apify-title text-center drop-shadow-lg">Ferramentas de IA</h1>
        <p className="apify-subtitle text-center max-w-2xl mx-auto">
          Descubra e centralize as melhores ferramentas de Inteligência Artificial para cada área do mercado, tudo em um só lugar.
        </p>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200 rounded-full opacity-30 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 blur-2xl" />
      </section>


      {/* IA para Música */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <MusicalNoteIcon className="w-6 h-6 text-blue-400" />
            IA para Música
          </h2>
          <a href="/ia-para-musica" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">
            Ver todas as IA para música
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <MusicalNoteIcon className="w-5 h-5" /> Suno
            </span>
            <p className="text-zinc-700">Crie músicas completas com vocais e instrumentais usando IA.</p>
            <span className="text-xs text-zinc-500">Categoria: Música</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <MusicalNoteIcon className="w-5 h-5" /> Udio
            </span>
            <p className="text-zinc-700">Plataforma de criação musical com alta fidelidade e controle criativo.</p>
            <span className="text-xs text-zinc-500">Categoria: Música</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <MusicalNoteIcon className="w-5 h-5" /> Stable Audio
            </span>
            <p className="text-zinc-700">Geração de música e efeitos sonoros de alta qualidade pela Stability AI.</p>
            <span className="text-xs text-zinc-500">Categoria: Música</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-musica" className="text-blue-600 text-sm font-medium hover:underline">
            Ver todas as IA para música
          </a>
        </div>
      </section>

      {/* IA para imagens */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2"><PhotoIcon className="w-6 h-6 text-blue-400" />IA para imagens</h2>
          <a href="/ia-para-imagens" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">Ver todas as IA para imagens</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold"><PhotoIcon className="w-5 h-5" /> Whisk</span>
            <p className="text-zinc-700">IA do Google para geração e edição de imagens.</p>
            <span className="text-xs text-zinc-500">Categoria: Imagens</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold"><PhotoIcon className="w-5 h-5" /> Pixlr</span>
            <p className="text-zinc-700">Editor de imagens com IA e recursos avançados.</p>
            <span className="text-xs text-zinc-500">Categoria: Imagens</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold"><PhotoIcon className="w-5 h-5" /> Midjourney</span>
            <p className="text-zinc-700">Geração de imagens artísticas por IA via Discord.</p>
            <span className="text-xs text-zinc-500">Categoria: Imagens</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-imagens" className="text-blue-600 text-sm font-medium hover:underline">Ver todas as IA para imagens</a>
        </div>
      </section>

      {/* IA para Vídeos */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <VideoCameraIcon className="w-6 h-6 text-blue-400" />
            IA para Vídeos
          </h2>
          <a href="/ia-para-criar-videos" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">
            Ver todas as IA para vídeos
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <VideoCameraIcon className="w-5 h-5" /> Google Gemini Veo 3.1
            </span>
            <p className="text-zinc-700">Modelo de geração de vídeo mais capaz do Google, criando vídeos 1080p de alta qualidade.</p>
            <span className="text-xs text-zinc-500">Categoria: Vídeos</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <VideoCameraIcon className="w-5 h-5" /> Adobe Firefly Video
            </span>
            <p className="text-zinc-700">Gere vídeos a partir de texto ou imagens com controle criativo e segurança comercial.</p>
            <span className="text-xs text-zinc-500">Categoria: Vídeos</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <VideoCameraIcon className="w-5 h-5" /> KlingAI
            </span>
            <p className="text-zinc-700">Ferramenta poderosa para criar vídeos realistas com movimentos complexos.</p>
            <span className="text-xs text-zinc-500">Categoria: Vídeos</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-criar-videos" className="text-blue-600 text-sm font-medium hover:underline">
            Ver todas as IA para vídeos
          </a>
        </div>
      </section>

      {/* IA para Conteúdo */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <PencilSquareIcon className="w-6 h-6 text-blue-400" />
            IA para Conteúdo
          </h2>
          <a href="/ferramentas-de-ia-para-conteudo" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">
            Ver todas as IA para conteúdo
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <PencilSquareIcon className="w-5 h-5" /> Jasper
            </span>
            <p className="text-zinc-700">Plataforma avançada de IA para criação de conteúdo de marketing e copy.</p>
            <span className="text-xs text-zinc-500">Categoria: Conteúdo</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <PencilSquareIcon className="w-5 h-5" /> Copy.ai
            </span>
            <p className="text-zinc-700">Gerador de textos para blogs, redes sociais e e-mails com foco em conversão.</p>
            <span className="text-xs text-zinc-500">Categoria: Conteúdo</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <PencilSquareIcon className="w-5 h-5" /> HubSpot Content Hub
            </span>
            <p className="text-zinc-700">Hub de conteúdo da HubSpot com ferramentas de IA para criar e gerenciar blogs e sites.</p>
            <span className="text-xs text-zinc-500">Categoria: Conteúdo</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ferramentas-de-ia-para-conteudo" className="text-blue-600 text-sm font-medium hover:underline">
            Ver todas as IA para conteúdo
          </a>
        </div>
      </section>

      {/* IA para Marketing */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <MegaphoneIcon className="w-6 h-6 text-blue-400" />
            IA para Marketing
          </h2>
          <a href="/ia-para-marketing" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">
            Ver todas as IA para marketing
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <MegaphoneIcon className="w-5 h-5" /> eKyte
            </span>
            <p className="text-zinc-700">Plataforma de gestão de marketing digital com IA para planejar e executar campanhas.</p>
            <span className="text-xs text-zinc-500">Categoria: Marketing</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <MegaphoneIcon className="w-5 h-5" /> Writesonic
            </span>
            <p className="text-zinc-700">Ferramenta de escrita com IA para criar conteúdo de marketing otimizado para SEO.</p>
            <span className="text-xs text-zinc-500">Categoria: Marketing</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <MegaphoneIcon className="w-5 h-5" /> Lumen5
            </span>
            <p className="text-zinc-700">Transforme textos e artigos em vídeos engajadores para redes sociais com IA.</p>
            <span className="text-xs text-zinc-500">Categoria: Marketing</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-marketing" className="text-blue-600 text-sm font-medium hover:underline">
            Ver todas as IA para marketing
          </a>
        </div>
      </section>

      {/* IA para Criar Apresentações */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <PresentationChartLineIcon className="w-6 h-6 text-blue-400" />
            IA para Criar Apresentações
          </h2>
          <a href="/ia-para-criar-apresentacoes" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">
            Ver todas as IA para apresentações
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <PresentationChartLineIcon className="w-5 h-5" /> Genspark
            </span>
            <p className="text-zinc-700">Crie apresentações impressionantes a partir de prompts simples com IA generativa.</p>
            <span className="text-xs text-zinc-500">Categoria: Apresentações</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <PresentationChartLineIcon className="w-5 h-5" /> Presentations.ai
            </span>
            <p className="text-zinc-700">Plataforma de design de apresentações focada em empresas e colaboração em tempo real.</p>
            <span className="text-xs text-zinc-500">Categoria: Apresentações</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <PresentationChartLineIcon className="w-5 h-5" /> AiPPT
            </span>
            <p className="text-zinc-700">Gerador de PPTs com inteligência artificial que transforma tópicos em slides prontos.</p>
            <span className="text-xs text-zinc-500">Categoria: Apresentações</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-criar-apresentacoes" className="text-blue-600 text-sm font-medium hover:underline">
            Ver todas as IA para apresentações
          </a>
        </div>
      </section>

      {/* IA para vibe coding */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2"><CodeBracketIcon className="w-6 h-6 text-blue-400" />IA para vibe coding</h2>
          <a href="/ia-para-vibe-coding" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">Ver todas as IA para vibe coding</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold"><CodeBracketIcon className="w-5 h-5" /> Lovable</span>
            <p className="text-zinc-700">IA para programação, resumos e automações.</p>
            <span className="text-xs text-zinc-500">Categoria: Coding</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold"><CodeBracketIcon className="w-5 h-5" /> Bolt.new</span>
            <p className="text-zinc-700">Ferramenta de IA para acelerar o desenvolvimento e automação de código.</p>
            <span className="text-xs text-zinc-500">Categoria: Coding</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold"><CodeBracketIcon className="w-5 h-5" /> v0</span>
            <p className="text-zinc-700">Plataforma de IA para criação rápida de interfaces e automações.</p>
            <span className="text-xs text-zinc-500">Categoria: Coding</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-vibe-coding" className="text-blue-600 text-sm font-medium hover:underline">Ver todas as IA para vibe coding</a>
        </div>
      </section>

      {/* IA para desenvolvedores */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2"><CodeBracketIcon className="w-6 h-6 text-blue-400" />IA para desenvolvedores</h2>
          <a href="/ia-para-desenvolvedores" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">Ver todas as IA para desenvolvedores</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">GitHub Copilot</span>
            <p className="text-zinc-700">Assistente de código da GitHub/OpenAI para autocompletar e gerar trechos de código.</p>
            <span className="text-xs text-zinc-500">Categoria: Desenvolvedores</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Cursor</span>
            <p className="text-zinc-700">IDE com assistente de código e recursos de AI.</p>
            <span className="text-xs text-zinc-500">Categoria: Desenvolvedores</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Google AntiGravity</span>
            <p className="text-zinc-700">Plataforma da Google para impulsionar produtividade de desenvolvedores com IA.</p>
            <span className="text-xs text-zinc-500">Categoria: Desenvolvedores</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-desenvolvedores" className="text-blue-600 text-sm font-medium hover:underline">Ver todas as IA para desenvolvedores</a>
        </div>
      </section>

      {/* IA para professores */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <AcademicCapIcon className="w-6 h-6 text-blue-400" />
            IA para professores
          </h2>
          <a href="/ia-para-professores" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">
            Ver todas as IA para professores
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Conker.AI</span>
            <p className="text-zinc-700">Gerador de quizzes alinhados a padrões educacionais em poucos cliques.</p>
            <span className="text-xs text-zinc-500">Categoria: Professores</span>
          </div>

          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Diffit.me</span>
            <p className="text-zinc-700">Crie leituras adaptadas e planos de aula personalizados automaticamente.</p>
            <span className="text-xs text-zinc-500">Categoria: Professores</span>
          </div>

          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Socratic</span>
            <p className="text-zinc-700">Suite de IA para planejar aulas, tarefas e acompanhar alunos.</p>
            <span className="text-xs text-zinc-500">Categoria: Professores</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-professores" className="text-blue-600 text-sm font-medium hover:underline">
            Ver todas as IA para professores
          </a>
        </div>
      </section>

      {/* Detecção de IA */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <ShieldCheckIcon className="w-6 h-6 text-blue-400" />
            Detecção de IA
          </h2>
          <a href="/ferramenta-de-deteccao-de-ia" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">Ver todas as ferramentas de detecção</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">QuillBot Detector de IA</span>
            <p className="text-zinc-700">Ferramenta do QuillBot para analisar textos e apontar traços de IA.</p>
            <span className="text-xs text-zinc-500">Categoria: Detecção de IA</span>
          </div>

          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Sidekicker</span>
            <p className="text-zinc-700">Detector de conteúdo alimentado por IA com análise rápida e dashboards.</p>
            <span className="text-xs text-zinc-500">Categoria: Detecção de IA</span>
          </div>

          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">WinstonAI</span>
            <p className="text-zinc-700">Detector especializado em identificar conteúdos acadêmicos escritos por IA.</p>
            <span className="text-xs text-zinc-500">Categoria: Detecção de IA</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ferramenta-de-deteccao-de-ia" className="text-blue-600 text-sm font-medium hover:underline">Ver todas as ferramentas de detecção</a>
        </div>
      </section>

      {/* Navegadores de IA */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <GlobeAltIcon className="w-6 h-6 text-blue-400" />
            Navegadores de IA
          </h2>
          <a href="/navegadores-de-ia" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">
            Ver todos os navegadores de IA
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">ChatGPT Atlas</span>
            <p className="text-zinc-700">Experiência de navegação com Copilot do ChatGPT integrada ao browser Atlas.</p>
            <span className="text-xs text-zinc-500">Categoria: Navegadores de IA</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Perplexity Comet</span>
            <p className="text-zinc-700">Navegador que traz respostas da Perplexity diretamente na aba atual.</p>
            <span className="text-xs text-zinc-500">Categoria: Navegadores de IA</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Opera One</span>
            <p className="text-zinc-700">Browser com Aria e módulos multimídia para uso de IA integrado.</p>
            <span className="text-xs text-zinc-500">Categoria: Navegadores de IA</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/navegadores-de-ia" className="text-blue-600 text-sm font-medium hover:underline">
            Ver todos os navegadores de IA
          </a>
        </div>
      </section>

      {/* Pacotes de Ferramentas de IA */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <ArchiveBoxIcon className="w-6 h-6 text-blue-400" />
            Pacotes de Ferramentas de IA
          </h2>
          <a href="/pacotes-de-ferramentas-e-agregadores-ia" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">
            Ver todos os pacotes e agregadores
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <ArchiveBoxIcon className="w-5 h-5" /> Adapta
            </span>
            <p className="text-zinc-700">Plataforma que conecta ferramentas de IA para otimizar fluxos de trabalho.</p>
            <span className="text-xs text-zinc-500">Categoria: Agregadores</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <ArchiveBoxIcon className="w-5 h-5" /> InnerAI
            </span>
            <p className="text-zinc-700">Ecossistema de IA para empresas, integrando diversos modelos e ferramentas.</p>
            <span className="text-xs text-zinc-500">Categoria: Agregadores</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">
              <ArchiveBoxIcon className="w-5 h-5" /> Tess
            </span>
            <p className="text-zinc-700">Assistente de IA que agrega múltiplos modelos em uma única interface.</p>
            <span className="text-xs text-zinc-500">Categoria: Agregadores</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/pacotes-de-ferramentas-e-agregadores-ia" className="text-blue-600 text-sm font-medium hover:underline">
            Ver todos os pacotes e agregadores
          </a>
        </div>
      </section>

      {/* Newsletters de IA */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <EnvelopeIcon className="w-6 h-6 text-blue-400" />
            Newsletters de IA
          </h2>
          <a href="/newsletters-de-ia" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">Ver todas as newsletters de IA</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">AiDrop</span>
            <p className="text-zinc-700">Resumos semanais de avanços em IA: ferramentas, prompts e modelos novos.</p>
            <span className="text-xs text-zinc-500">Newsletter</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">AI Factory News</span>
            <p className="text-zinc-700">Newsletter do Distrito focada em inteligência artificial e inovação.</p>
            <span className="text-xs text-zinc-500">Newsletter</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">IAí?</span>
            <p className="text-zinc-700">Newsletter do O Globo sobre como a IA transforma o dia a dia.</p>
            <span className="text-xs text-zinc-500">Newsletter</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/newsletters-de-ia" className="text-blue-600 text-sm font-medium hover:underline">Ver todas as newsletters de IA</a>
        </div>
      </section>

      {/* Versões de modelos */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <h2 className="apify-section-title flex items-center gap-2">
          <SparklesIcon className="w-6 h-6 text-blue-400" />
          Versões de Modelos de LLMs (Large Language Models)
        </h2>
        <p className="text-zinc-600 mb-8">
          Acompanhe os lançamentos e atualizações das principais famílias de modelos de linguagem do mercado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">GPT-5.1</span>
            <p className="text-zinc-700">Nova geração da OpenAI com raciocínio variável e velocidade otimizada.</p>
            <span className="text-xs text-zinc-500">Lançamento: Nov/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Gemini 3.0</span>
            <p className="text-zinc-700">Modelo multimodal do Google capaz de operar em texto, imagem e vídeo.</p>
            <span className="text-xs text-zinc-500">Lançamento: Nov/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Opus 4.1</span>
            <p className="text-zinc-700">Atualização da Anthropic focada em respostas mais seguras e assertivas.</p>
            <span className="text-xs text-zinc-500">Lançamento: Out/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Sonnet 4.5</span>
            <p className="text-zinc-700">Equilíbrio entre custo e performance para fluxos de automação avançados.</p>
            <span className="text-xs text-zinc-500">Lançamento: Out/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Grok 4.1</span>
            <p className="text-zinc-700">Modelo da xAI com acesso em tempo real aos dados públicos da plataforma X.</p>
            <span className="text-xs text-zinc-500">Lançamento: Set/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Llama 3.2</span>
            <p className="text-zinc-700">Versão open-source da Meta com quantizações eficientes para edge.</p>
            <span className="text-xs text-zinc-500">Lançamento: Set/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Perplexity Sonar</span>
            <p className="text-zinc-700">Modelo focado em busca e raciocínio em tempo real, baseado no Llama 3.1.</p>
            <span className="text-xs text-zinc-500">Lançamento: Dez/2024</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">DeepSeek 3.2</span>
            <p className="text-zinc-700">Modelo open-weights com desempenho de ponta e custo reduzido.</p>
            <span className="text-xs text-zinc-500">Lançamento: Dez/2024</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Qwen 2.5</span>
            <p className="text-zinc-700">Família de modelos da Alibaba com excelência em código e matemática.</p>
            <span className="text-xs text-zinc-500">Lançamento: Set/2024</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Mistral 3</span>
            <p className="text-zinc-700">Modelo fronteira da Mistral AI com raciocínio avançado e eficiência.</p>
            <span className="text-xs text-zinc-500">Lançamento: Jan/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Maritaca - Sabiazinho 3.1</span>
            <p className="text-zinc-700">LLM brasileiro treinado especificamente para o português e cultura nacional.</p>
            <span className="text-xs text-zinc-500">Lançamento: Fev/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Manus 1.5</span>
            <p className="text-zinc-700">Agente autônomo capaz de executar tarefas complexas e longas.</p>
            <span className="text-xs text-zinc-500">Lançamento: Mar/2025</span>
          </div>
        </div>
      </section>

      {/* Modelos de LLMs */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <SparklesIcon className="w-6 h-6 text-blue-400" />
            Modelos de LLMs em destaque
          </h2>
          <a href="/modelos-de-llms" className="hidden md:inline-flex text-blue-600 text-sm font-medium hover:underline">
            Ver todos os modelos de LLMs
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">OpenAI ChatGPT</span>
            <p className="text-zinc-700">Modelo multimodal da OpenAI com resultados de texto, voz e imagem.</p>
            <span className="text-xs text-zinc-500">Modelo proprietário</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Google Gemini</span>
            <p className="text-zinc-700">Família Gemini com suporte a texto, imagem, áudio e agentes.</p>
            <span className="text-xs text-zinc-500">Modelo proprietário</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Anthropic Claude</span>
            <p className="text-zinc-700">Linha Claude com foco em segurança e respostas confiáveis.</p>
            <span className="text-xs text-zinc-500">Modelo proprietário</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/modelos-de-llms" className="text-blue-600 text-sm font-medium hover:underline">
            Ver todos os modelos de LLMs
          </a>
        </div>
      </section>

      {/* Últimas IA adicionadas */}
      <section id="ultimas-ias" className="w-full max-w-5xl mx-auto py-12 px-4">
        <h2 className="apify-section-title flex items-center gap-2"><SparklesIcon className="w-6 h-6 text-blue-400" />Últimas IA adicionadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold"><CodeBracketIcon className="w-5 h-5" /> Google AntiGravity</span>
            <p className="text-zinc-700">Ferramenta da Google para acelerar fluxos de desenvolvimento com IA.</p>
            <span className="text-xs text-zinc-500">Adicionada em 15/11/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold"><PhotoIcon className="w-5 h-5" /> Whisk (Google)</span>
            <p className="text-zinc-700">IA para imagens e geração visual.</p>
            <span className="text-xs text-zinc-500">Adicionada em 14/11/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold"><GlobeAltIcon className="w-5 h-5" /> Perplexity Comet</span>
            <p className="text-zinc-700">Navegador com respostas da Perplexity embutidas na aba atual.</p>
            <span className="text-xs text-zinc-500">Adicionada em 13/11/2025</span>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="w-full max-w-5xl mx-auto py-12 px-4">
        <h2 className="apify-section-title mb-8">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="apify-card p-6">
            <p className="text-zinc-700">"Esse site me ajudou a descobrir várias IAs do mercado e para meu segmento de trabalho."</p>
            <div className="mt-4 text-sm text-zinc-500">— Usuário satisfeito</div>
          </div>

          <div className="apify-card p-6">
            <p className="text-zinc-700">"Não imaginava que tinha tantas IAs para gerar imagens."</p>
            <div className="mt-4 text-sm text-zinc-500">— Designer visual</div>
          </div>

          <div className="apify-card p-6">
            <p className="text-zinc-700">"Eu estava pesquisando IAs para um trabalho e acabei descobrindo um novo mercado para aprender a programar."</p>
            <div className="mt-4 text-sm text-zinc-500">— Estudante</div>
          </div>
        </div>
      </section>
    </div >
  );
}
