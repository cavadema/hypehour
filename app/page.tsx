import {
  SparklesIcon, PhotoIcon, CodeBracketIcon, ShieldCheckIcon, AcademicCapIcon, EnvelopeIcon, GlobeAltIcon, MusicalNoteIcon, ArchiveBoxIcon, PencilSquareIcon, MegaphoneIcon, PresentationChartLineIcon, VideoCameraIcon, BuildingOffice2Icon, DocumentTextIcon,
  UserIcon, PhoneIcon, SwatchIcon, CurrencyDollarIcon, BookOpenIcon, HeartIcon, WrenchScrewdriverIcon, BriefcaseIcon, FunnelIcon,
} from "@heroicons/react/24/solid";

const webpageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.hypehour.com.br/#webpage",
  "url": "https://www.hypehour.com.br",
  "name": "Hypehour — Ferramentas de IA para todos os segmentos",
  "description": "Hypehour é um agregador de ferramentas de IA para imagens, desenvolvimento, estudos e muito mais.",
  "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.hypehour.com.br/#organization",
    "name": "Hypehour",
    "logo": { "@type": "ImageObject", "url": "https://www.hypehour.com.br/logo.png" },
    "sameAs": ["https://x.com/hypehourbr", "https://www.linkedin.com/company/hypehour/"]
  },
  "inLanguage": "pt-BR"
};

const categorias = [
  { nome: "Imagens", url: "/ia-para-imagens", Icon: PhotoIcon },
  { nome: "Vídeos", url: "/ia-para-criar-videos", Icon: VideoCameraIcon },
  { nome: "Criar Logo", url: "/ia-para-criar-logo", Icon: SwatchIcon },
  { nome: "PDF", url: "/ia-para-pdf", Icon: DocumentTextIcon },
  { nome: "Planilhas", url: "/ia-para-planilhas", Icon: PencilSquareIcon },
  { nome: "Transcrever Áudio", url: "/transcrever-audio", Icon: MusicalNoteIcon },
  { nome: "Ata de Reunião", url: "/ia-para-fazer-ata-reuniao", Icon: DocumentTextIcon },
  { nome: "Detecção de IA", url: "/ferramenta-de-deteccao-de-ia", Icon: ShieldCheckIcon },
  { nome: "Agregadores", url: "/pacotes-de-ferramentas-e-agregadores-ia", Icon: ArchiveBoxIcon },
  { nome: "Assistentes", url: "/assistentes-de-ia", Icon: UserIcon },
  { nome: "Atendimento", url: "/ia-para-atendimento", Icon: PhoneIcon },
  { nome: "Automação", url: "/automacao-ia", Icon: WrenchScrewdriverIcon },
  { nome: "Conteúdo", url: "/ferramentas-de-ia-para-conteudo", Icon: PencilSquareIcon },
  { nome: "Marketing", url: "/ia-para-marketing", Icon: MegaphoneIcon },
  { nome: "Vendas", url: "/ia-para-vendas", Icon: CurrencyDollarIcon },
  { nome: "CRM", url: "/crm-ia", Icon: BriefcaseIcon },
  { nome: "Apresentações", url: "/ia-para-criar-apresentacoes", Icon: PresentationChartLineIcon },
  { nome: "Vibe Coding", url: "/ia-para-vibe-coding", Icon: CodeBracketIcon },
  { nome: "Desenvolvedores", url: "/ia-para-desenvolvedores", Icon: CodeBracketIcon },
  { nome: "APIs", url: "/api-ia-modelos", Icon: CodeBracketIcon },
  { nome: "Agentes de IA", url: "/criacao-agentes-ia", Icon: SparklesIcon },
  { nome: "Fluxos e Workflows", url: "/fluxos-workflows-ia", Icon: FunnelIcon },
  { nome: "Scraping", url: "/ia-web-scraping", Icon: GlobeAltIcon },
  { nome: "Análise de Dados", url: "/analise-de-dados", Icon: ArchiveBoxIcon },
  { nome: "Gerador de Voz", url: "/gerador-de-voz-ia", Icon: MusicalNoteIcon },
  { nome: "Música", url: "/ia-para-musica", Icon: MusicalNoteIcon },
  { nome: "Designers", url: "/ia-para-designers", Icon: PhotoIcon },
  { nome: "Design de Interiores", url: "/ia-para-design-de-interiores", Icon: BuildingOffice2Icon },
  { nome: "Arquitetura", url: "/ia-para-arquitetura", Icon: BuildingOffice2Icon },
  { nome: "Médicos", url: "/ia-para-medicos", Icon: HeartIcon },
  { nome: "Nutricionistas", url: "/nutricionista-ia", Icon: HeartIcon },
  { nome: "Advogados", url: "/inteligencia-artificial-para-advogados", Icon: ShieldCheckIcon },
  { nome: "Professores", url: "/ia-para-professores", Icon: AcademicCapIcon },
  { nome: "Inglês com IA", url: "/aprender-ingles-com-ia", Icon: AcademicCapIcon },
  { nome: "Jogos", url: "/ia-para-jogos", Icon: SparklesIcon },
  { nome: "Contabilidade", url: "/ferramentas-ia-contabilidade", Icon: CurrencyDollarIcon },
  { nome: "RH", url: "/ferramentas-de-ia-rh", Icon: UserIcon },
  { nome: "Empresas", url: "/ia-para-empresas", Icon: BriefcaseIcon },
  { nome: "Investimentos", url: "/investimentos", Icon: CurrencyDollarIcon },
  { nome: "Navegadores", url: "/navegadores-de-ia", Icon: GlobeAltIcon },
  { nome: "Planejamento", url: "/planejamento", Icon: DocumentTextIcon },
  { nome: "Modelos de LLMs", url: "/modelos-de-llms", Icon: SparklesIcon },
  { nome: "Livros de IA", url: "/livros-inteligencia-artificial", Icon: BookOpenIcon },
  { nome: "Cursos de IA", url: "/cursos-de-ia", Icon: AcademicCapIcon },
  { nome: "Newsletters", url: "/newsletters-de-ia", Icon: EnvelopeIcon },
  { nome: "Eventos", url: "/eventos-ia", Icon: EnvelopeIcon },
  { nome: "Repositórios Github", url: "/repositorios-ia-github", Icon: CodeBracketIcon },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#f7f8fa] font-sans -mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />

      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 border-b border-zinc-200 relative overflow-hidden">
        <SparklesIcon className="w-16 h-16 text-gray-700 mb-4 animate-pulse" />
        <h1 className="apify-title text-center drop-shadow-lg">Ferramentas de IA</h1>
        <p className="apify-subtitle text-center max-w-2xl mx-auto">
          Seu guia completo de Inteligência Artificial. Descubra, compare e escolha as melhores ferramentas de IA para transformar cada área do seu negócio.
        </p>
        <a
          href="#categorias"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-zinc-800 transition-colors shadow-md"
        >
          Explorar todas as categorias ↓
        </a>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-200 rounded-full opacity-30 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-100 rounded-full opacity-20 blur-2xl" />
      </section>

      {/* Grid de categorias */}
      <section id="categorias" className="w-full max-w-5xl mx-auto py-14 px-4">
        <h2 className="apify-section-title text-center mb-2">Todas as categorias</h2>
        <p className="text-center text-zinc-500 text-sm mb-8">47 categorias com centenas de ferramentas curadas</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {categorias.map(({ nome, url, Icon }) => (
            <a
              key={url}
              href={url}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-zinc-200 hover:border-zinc-400 hover:shadow-md transition-all text-center group"
            >
              <Icon className="w-6 h-6 text-zinc-500 group-hover:text-black transition-colors" />
              <span className="text-xs font-medium text-zinc-700 group-hover:text-black transition-colors leading-tight">{nome}</span>
            </a>
          ))}
        </div>
      </section>


      {/* IA para Atendimento */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <PhoneIcon className="w-6 h-6 text-gray-700" />
            IA para Atendimento
          </h2>
          <a href="/ia-para-atendimento" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/ia-para-atendimento" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PhoneIcon className="w-5 h-5" /> Helploom</span>
            <p className="text-zinc-700">Plataforma de atendimento com IA para automação e gestão integrada.</p>
          </a>
          <a href="/ia-para-atendimento" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PhoneIcon className="w-5 h-5" /> Gladly</span>
            <p className="text-zinc-700">Transforma o atendimento em suporte inteligente, automatizado e personalizado.</p>
          </a>
          <a href="/ferramentas/poly-ai" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PhoneIcon className="w-5 h-5" /> Poly.ai</span>
            <p className="text-zinc-700">Assistente de voz com IA para atendimento ao cliente por telefone 24h.</p>
          </a>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-atendimento" className="text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
      </section>


      {/* Assistentes de IA e pessoais */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <UserIcon className="w-6 h-6 text-gray-700" />
            Assistentes de IA
          </h2>
          <a href="/assistentes-de-ia" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/assistentes-de-ia" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><UserIcon className="w-5 h-5" /> Remio</span>
            <p className="text-zinc-700">Assistente de IA para organizar e automatizar tarefas.</p>
          </a>
          <a href="/ferramentas/janitor-ai" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><UserIcon className="w-5 h-5" /> Janitor AI</span>
            <p className="text-zinc-700">Chat com personagens de IA para roleplay e escrita criativa.</p>
          </a>
          <a href="/ferramentas/macaron" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><UserIcon className="w-5 h-5" /> Macaron</span>
            <p className="text-zinc-700">Assistente de IA pessoal com interface elegante para produtividade diária.</p>
          </a>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/assistentes-de-ia" className="text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
      </section>


      {/* IA para imagens */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2"><PhotoIcon className="w-6 h-6 text-gray-700" />IA para Imagens</h2>
          <a href="/ia-para-imagens" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/ferramentas/midjourney" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PhotoIcon className="w-5 h-5" /> Midjourney</span>
            <p className="text-zinc-700">Geração de imagens artísticas por IA via Discord.</p>
          </a>
          <a href="/ferramentas/clipdrop" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PhotoIcon className="w-5 h-5" /> ClipDrop</span>
            <p className="text-zinc-700">Suite de IA para remover fundos, upscaling e edição inteligente de imagens.</p>
          </a>
          <a href="/ferramentas/dzine" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PhotoIcon className="w-5 h-5" /> Dzine</span>
            <p className="text-zinc-700">Geração e edição de imagens com IA, face swap e generative fill.</p>
          </a>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-imagens" className="text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
      </section>

      {/* IA para Vídeos */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <VideoCameraIcon className="w-6 h-6 text-gray-700" />
            IA para Vídeos
          </h2>
          <a href="/ia-para-criar-videos" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/ferramentas/klingai" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><VideoCameraIcon className="w-5 h-5" /> KlingAI</span>
            <p className="text-zinc-700">Ferramenta poderosa para criar vídeos realistas com movimentos complexos.</p>
          </a>
          <a href="/ferramentas/hedra" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><VideoCameraIcon className="w-5 h-5" /> Hedra</span>
            <p className="text-zinc-700">Transforme fotos e áudio em avatares falantes com sincronização labial realista.</p>
          </a>
          <a href="/ferramentas/descript" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><VideoCameraIcon className="w-5 h-5" /> Descript</span>
            <p className="text-zinc-700">Editor de vídeo e podcast que permite editar pelo texto transcrito com IA.</p>
          </a>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-criar-videos" className="text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
      </section>

      {/* IA para Conteúdo */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <PencilSquareIcon className="w-6 h-6 text-gray-700" />
            IA para Conteúdo
          </h2>
          <a href="/ferramentas-de-ia-para-conteudo" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/ferramentas-de-ia-para-conteudo" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PencilSquareIcon className="w-5 h-5" /> Jasper</span>
            <p className="text-zinc-700">Plataforma avançada de IA para criação de conteúdo de marketing e copy.</p>
          </a>
          <a href="/ferramentas/quilbot" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PencilSquareIcon className="w-5 h-5" /> QuillBot</span>
            <p className="text-zinc-700">Paráfrase, correção gramatical, sumarização e tradução com IA.</p>
          </a>
          <a href="/ferramentas/rytr" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PencilSquareIcon className="w-5 h-5" /> Rytr</span>
            <p className="text-zinc-700">Gerador de textos acessível com dezenas de casos de uso e múltiplos idiomas.</p>
          </a>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ferramentas-de-ia-para-conteudo" className="text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
      </section>

      {/* IA para Transcrever Áudio */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <MusicalNoteIcon className="w-6 h-6 text-gray-700" />
            IA para Transcrever Áudio
          </h2>
          <a href="/transcrever-audio" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/ferramentas/speechify" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><MusicalNoteIcon className="w-5 h-5" /> Speechify</span>
            <p className="text-zinc-700">Plataforma de IA para transcrição e conversão de texto em áudio com vozes naturais.</p>
          </a>
          <a href="/ferramentas/otter-ai" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><MusicalNoteIcon className="w-5 h-5" /> Otter AI</span>
            <p className="text-zinc-700">Transcrição automática de reuniões com identificação de falantes e resumos.</p>
          </a>
          <a href="/ferramentas/turboscribe" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><MusicalNoteIcon className="w-5 h-5" /> TurboScribe</span>
            <p className="text-zinc-700">Transcrição rápida de áudio e vídeo com alta precisão em português.</p>
          </a>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/transcrever-audio" className="text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
      </section>



      {/* IA para Marketing */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <MegaphoneIcon className="w-6 h-6 text-gray-700" />
            IA para Marketing
          </h2>
          <a href="/ia-para-marketing" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/ia-para-marketing" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><MegaphoneIcon className="w-5 h-5" /> eKyte</span>
            <p className="text-zinc-700">Plataforma de gestão de marketing digital com IA para planejar e executar campanhas.</p>
          </a>
          <a href="/ferramentas/writesonic" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><MegaphoneIcon className="w-5 h-5" /> Writesonic</span>
            <p className="text-zinc-700">Ferramenta de escrita com IA para criar conteúdo de marketing otimizado para SEO.</p>
          </a>
          <a href="/ia-para-marketing" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><MegaphoneIcon className="w-5 h-5" /> Lumen5</span>
            <p className="text-zinc-700">Transforme textos e artigos em vídeos engajadores para redes sociais com IA.</p>
          </a>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-marketing" className="text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
      </section>

      {/* IA para Criar Apresentações */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2">
            <PresentationChartLineIcon className="w-6 h-6 text-gray-700" />
            IA para Criar Apresentações
          </h2>
          <a href="/ia-para-criar-apresentacoes" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/ferramentas/gamma" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PresentationChartLineIcon className="w-5 h-5" /> Gamma</span>
            <p className="text-zinc-700">Crie apresentações, documentos e sites com IA em minutos a partir de um prompt.</p>
          </a>
          <a href="/ia-para-criar-apresentacoes" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PresentationChartLineIcon className="w-5 h-5" /> Presentations.ai</span>
            <p className="text-zinc-700">Plataforma de design de apresentações focada em empresas e colaboração em tempo real.</p>
          </a>
          <a href="/ia-para-criar-apresentacoes" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><PresentationChartLineIcon className="w-5 h-5" /> AiPPT</span>
            <p className="text-zinc-700">Gerador de PPTs com inteligência artificial que transforma tópicos em slides prontos.</p>
          </a>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-criar-apresentacoes" className="text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
      </section>

      {/* IA para vibe coding */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2"><CodeBracketIcon className="w-6 h-6 text-gray-700" />IA para Vibe Coding</h2>
          <a href="/ia-para-vibe-coding" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/ferramentas/lovable" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CodeBracketIcon className="w-5 h-5" /> Lovable</span>
            <p className="text-zinc-700">Crie aplicações web completas com IA apenas descrevendo o que quer.</p>
          </a>
          <a href="/ia-para-vibe-coding" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CodeBracketIcon className="w-5 h-5" /> Bolt.new</span>
            <p className="text-zinc-700">Ferramenta de IA para acelerar o desenvolvimento e automação de código.</p>
          </a>
          <a href="/ia-para-vibe-coding" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CodeBracketIcon className="w-5 h-5" /> v0</span>
            <p className="text-zinc-700">Plataforma de IA para criação rápida de interfaces e automações.</p>
          </a>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-vibe-coding" className="text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
      </section>

      {/* IA para desenvolvedores */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2"><CodeBracketIcon className="w-6 h-6 text-gray-700" />IA para Desenvolvedores</h2>
          <a href="/ia-para-desenvolvedores" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/ia-para-desenvolvedores" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CodeBracketIcon className="w-5 h-5" /> GitHub Copilot</span>
            <p className="text-zinc-700">Assistente de código da GitHub/OpenAI para autocompletar e gerar trechos de código.</p>
          </a>
          <a href="/ferramentas/cursor" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CodeBracketIcon className="w-5 h-5" /> Cursor</span>
            <p className="text-zinc-700">IDE com assistente de código e recursos de IA para acelerar o desenvolvimento.</p>
          </a>
          <a href="/ia-para-desenvolvedores" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><CodeBracketIcon className="w-5 h-5" /> Google AntiGravity</span>
            <p className="text-zinc-700">Plataforma da Google para impulsionar produtividade de desenvolvedores com IA.</p>
          </a>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-desenvolvedores" className="text-black text-sm font-medium hover:underline">Ver todas →</a>
        </div>
      </section>


      {/* Estatísticas do site */}
      <section className="w-full bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Hypehour em Números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">47+</div>
              <div className="text-white/90 text-sm md:text-base font-medium">Categorias</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">400+</div>
              <div className="text-white/90 text-sm md:text-base font-medium">Ferramentas IA</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">80+</div>
              <div className="text-white/90 text-sm md:text-base font-medium">Páginas dedicadas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">12+</div>
              <div className="text-white/90 text-sm md:text-base font-medium">Modelos de LLMs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Versões de modelos */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <h2 className="apify-section-title flex items-center gap-2">
          <SparklesIcon className="w-6 h-6 text-gray-700" />
          Versões de Modelos de LLMs
        </h2>
        <p className="text-zinc-600 mb-8">
          Acompanhe os lançamentos e atualizações das principais famílias de modelos de linguagem do mercado.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> GPT-5.5</span>
            <p className="text-zinc-700">Modelo flagship multimodal da OpenAI com foco em agentes, raciocínio avançado e contexto de até 1M tokens.</p>
            <span className="text-xs text-zinc-500">OpenAI</span>
          </a>
          <a href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Gemini 3.1 Pro</span>
            <p className="text-zinc-700">Modelo multimodal nativo do Google com forte desempenho em agentes e raciocínio científico.</p>
            <span className="text-xs text-zinc-500">Google DeepMind</span>
          </a>
          <a href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Claude Opus 4.7</span>
            <p className="text-zinc-700">Modelo mais avançado da Anthropic para reasoning profundo, coding e tarefas agentic longas.</p>
            <span className="text-xs text-zinc-500">Anthropic</span>
          </a>
          <a href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Grok 4.3</span>
            <p className="text-zinc-700">Modelo da xAI com conhecimento em tempo real, integração com X e contexto massivo de 2M tokens.</p>
            <span className="text-xs text-zinc-500">xAI</span>
          </a>
          <a href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Llama 4 Maverick</span>
            <p className="text-zinc-700">Principal modelo open-weight da Meta com arquitetura MoE, otimizado para inferência eficiente.</p>
            <span className="text-xs text-zinc-500">Meta AI</span>
          </a>
          <a href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> DeepSeek V4</span>
            <p className="text-zinc-700">Modelo open-weight MoE com até 1,6T parâmetros e custo extremamente baixo de inferência.</p>
            <span className="text-xs text-zinc-500">DeepSeek</span>
          </a>
        </div>
        <div className="mt-6">
          <a href="/modelos-de-llms" className="text-black text-sm font-medium hover:underline">Ver todos os modelos de LLMs →</a>
        </div>
      </section>


    </div>
  );
}
