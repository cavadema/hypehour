import Link from "next/link";
import {
  AcademicCapIcon,
  ArchiveBoxIcon,
  ArrowPathIcon,
  BoltIcon,
  BookOpenIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
  CogIcon,
  CommandLineIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  FunnelIcon,
  GlobeAltIcon,
  HeartIcon,
  MegaphoneIcon,
  MicrophoneIcon,
  MusicalNoteIcon,
  PencilSquareIcon,
  PhoneIcon,
  PhotoIcon,
  PresentationChartLineIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  SparklesIcon,
  Square3Stack3DIcon,
  SwatchIcon,
  UserGroupIcon,
  UserIcon,
  VideoCameraIcon,
  WrenchScrewdriverIcon
} from "@heroicons/react/24/solid";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é o Hypehour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hypehour é o maior agregador de ferramentas de IA em português. Reunimos e curamos mais de 400 ferramentas de inteligência artificial organizadas em 47 categorias, para que você encontre a melhor IA para cada necessidade — imagens, vídeos, marketing, programação, automação, e muito mais."
      }
    },
    {
      "@type": "Question",
      "name": "Quais ferramentas de IA estão disponíveis no Hypehour?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O Hypehour reúne ferramentas de IA para imagens, vídeos, criação de logo, PDF, planilhas, transcrição de áudio, agentes de IA, automação, marketing, vendas, desenvolvimento, análise de dados, música, design, educação e muito mais. São 400+ ferramentas distribuídas em 47 categorias."
      }
    },
    {
      "@type": "Question",
      "name": "As ferramentas de IA do Hypehour são gratuitas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O Hypehour é gratuito para usar como guia e agregador. Cada ferramenta listada tem seu próprio modelo de preço — muitas oferecem planos gratuitos ou períodos de teste. Consulte a página de cada ferramenta para verificar os planos disponíveis."
      }
    },
    {
      "@type": "Question",
      "name": "Como encontrar a melhor ferramenta de IA para o meu negócio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Navegue pelas categorias do Hypehour e encontre ferramentas de IA organizadas por segmento: empresas, marketing, vendas, RH, contabilidade, atendimento, automação e muito mais. Cada categoria lista as principais opções do mercado com descrições detalhadas."
      }
    },
    {
      "@type": "Question",
      "name": "Quais são os principais modelos de LLM disponíveis em 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em 2026, os principais modelos de linguagem são: GPT-5.5 (OpenAI), Gemini 3.5 Flash (Google), Claude Opus 5 (Anthropic), Grok 4.3 (xAI), Llama 4 Maverick (Meta) e DeepSeek V4. O Hypehour acompanha os lançamentos e atualizações de todos esses modelos na página de Modelos de LLMs."
      }
    }
  ]
};

const webpageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.hypehour.com.br/#webpage",
  "url": "https://www.hypehour.com.br",
  "name": "Ferramentas de IA para Todos os Segmentos | Hypehour",
  "description": "Hypehour é o maior agregador de ferramentas de IA em português. Compare e descubra as melhores IAs para imagens, vídeos, marketing, programação, automação e muito mais. 400+ ferramentas curadas.",
  "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.hypehour.com.br/#organization",
    "name": "Hypehour",
    "logo": { "@type": "ImageObject", "url": "https://www.hypehour.com.br/logo.png" },
    "sameAs": ["https://x.com/hypehourbr", "https://www.linkedin.com/company/hypehour/"]
  },
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString().split("T")[0],
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
  { nome: "Ecommerce", url: "/ia-para-ecommerce", Icon: ShoppingCartIcon },
  { nome: "UX", url: "/ia-para-ux", Icon: CursorArrowRaysIcon },
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

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Categorias de Ferramentas de IA",
  "description": "47 categorias de ferramentas de inteligência artificial curadas pelo Hypehour",
  "url": "https://www.hypehour.com.br",
  "numberOfItems": categorias.length,
  "itemListElement": categorias.map(({ nome, url }, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": nome,
    "url": `https://www.hypehour.com.br${url}`,
  })),
};

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#f7f8fa] font-sans -mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 border-b border-zinc-200 relative overflow-hidden">
        <SparklesIcon className="w-16 h-16 text-gray-700 mb-4 animate-pulse" />
        <h1 className="apify-title text-center drop-shadow-lg">Ferramentas de IA</h1>
        <p className="apify-subtitle text-center max-w-2xl mx-auto">
          Descubra, compare e escolha entre 400+ ferramentas de IA curadas para imagens, vídeos, marketing, programação, automação e muito mais.
        </p>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gray-200 rounded-full opacity-30 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-100 rounded-full opacity-20 blur-2xl" />
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
            <h3 className="text-black font-bold">Doctly</h3>
            <p className="text-zinc-700">IA para ler, resumir e organizar PDFs com extração segura.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Docparser</h3>
            <p className="text-zinc-700">Extraia dados estruturados de PDFs e automatize processos.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">ChatPDF</h3>
            <p className="text-zinc-700">Converse com seus PDFs em português para resumos e respostas.</p>
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
            <h3 className="text-black font-bold">Quadratic</h3>
            <p className="text-zinc-700">Torna o trabalho com planilhas simples, com resultados impressionantes.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Shortcut</h3>
            <p className="text-zinc-700">Automatiza tarefas de Excel/Sheets com IA, gerando fórmulas e análises.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Sheets Organizer</h3>
            <p className="text-zinc-700">Automatize planilhas e dashboards com IA para relatórios e análises.</p>
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
            <h3 className="text-black font-bold">Speak
            </h3>
            <p className="text-zinc-700">Aulas personalizadas com IA e feedback de pronúncia.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">BeConfident
            </h3>
            <p className="text-zinc-700">Treino de conversação com correções e simulações.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Duolingo
            </h3>
            <p className="text-zinc-700">Curso gamificado com suporte de IA e prática diária.</p>
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
            <h3 className="text-black font-bold">Helploom
            </h3>
            <p className="text-zinc-700">Plataforma de atendimento com IA para automação e gestão integrada.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Gladly
            </h3>
            <p className="text-zinc-700">Transforma o atendimento em suporte inteligente, automatizado e personalizado.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Darwin
            </h3>
            <p className="text-zinc-700">Funcionários-IA que respondem em múltiplos canais e qualificam leads.</p>
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
            <h3 className="text-black font-bold">Deevid
            </h3>
            <p className="text-zinc-700">Geração de voz em português com alta naturalidade.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Canva
            </h3>
            <p className="text-zinc-700">Gerador de voz integrado ao editor Canva.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">ElevenLabs
            </h3>
            <p className="text-zinc-700">Referência em TTS com vozes realistas e clonagem de voz.</p>
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
            <h3 className="text-black font-bold">Remio
            </h3>
            <p className="text-zinc-700">Assistente de IA para organizar e automatizar tarefas.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Yutori Scouts
            </h3>
            <p className="text-zinc-700">Scouts/assistentes para busca e acompanhamento de tarefas.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Huxe
            </h3>
            <p className="text-zinc-700">Assistente pessoal com automações e integrações.</p>
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
            <h3 className="text-black font-bold">Suno
            </h3>
            <p className="text-zinc-700">Crie músicas completas com vocais e instrumentais usando IA.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Udio
            </h3>
            <p className="text-zinc-700">Plataforma de criação musical com alta fidelidade e controle criativo.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Stable Audio
            </h3>
            <p className="text-zinc-700">Geração de música e efeitos sonoros de alta qualidade pela Stability AI.</p>
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
            <h3 className="text-black font-bold">Whisk</h3>
            <p className="text-zinc-700">IA do Google para geração e edição de imagens.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Pixlr</h3>
            <p className="text-zinc-700">Editor de imagens com IA e recursos avançados.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Midjourney</h3>
            <p className="text-zinc-700">Geração de imagens artísticas por IA via Discord.</p>
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
            <h3 className="text-black font-bold">Google Gemini Veo 3.1
            </h3>
            <p className="text-zinc-700">Modelo de geração de vídeo mais capaz do Google, criando vídeos 1080p de alta qualidade.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Adobe Firefly Video
            </h3>
            <p className="text-zinc-700">Gere vídeos a partir de texto ou imagens com controle criativo e segurança comercial.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">KlingAI
            </h3>
            <p className="text-zinc-700">Ferramenta poderosa para criar vídeos realistas com movimentos complexos.</p>
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
            <h3 className="text-black font-bold">Contentor
            </h3>
            <p className="text-zinc-700">IA de SEO para criar conteúdo de qualidade com análise de SERP, briefing e geração ilimitada.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Copy.ai
            </h3>
            <p className="text-zinc-700">Gerador de textos para blogs, redes sociais e e-mails com foco em conversão.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">HubSpot Content Hub
            </h3>
            <p className="text-zinc-700">Hub de conteúdo da HubSpot com ferramentas de IA para criar e gerenciar blogs e sites.</p>
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
            <h3 className="text-black font-bold">Speechify
            </h3>
            <p className="text-zinc-700">Plataforma de IA para transcrição e conversão de texto em áudio com vozes naturais.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Wisprflow
            </h3>
            <p className="text-zinc-700">Transcrição automática de áudio com IA para fluxos de trabalho profissionais.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Willowvoice
            </h3>
            <p className="text-zinc-700">Ferramenta de transcrição de voz com IA para criar textos precisos.</p>
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
            <h3 className="text-black font-bold">Fellow
            </h3>
            <p className="text-zinc-700">Plataforma IA para gerenciar reuniões, criar atas e acompanhar ações automaticamente.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Reclaim
            </h3>
            <p className="text-zinc-700">Assistente de IA para otimizar agenda e gerar resumos de reuniões.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">tldv
            </h3>
            <p className="text-zinc-700">Transcrição e resumo automático de reuniões com IA em português.</p>
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
            <h3 className="text-black font-bold">Incredible
            </h3>
            <p className="text-zinc-700">Plataforma para criar agentes de IA com orquestração de fluxos.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Tate A Tate
            </h3>
            <p className="text-zinc-700">Construa agentes conversacionais com recursos avançados.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Okareo
            </h3>
            <p className="text-zinc-700">Teste e monitore agentes de IA em produção.</p>
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
            <h3 className="text-black font-bold">eKyte
            </h3>
            <p className="text-zinc-700">Plataforma de gestão de marketing digital com IA para planejar e executar campanhas.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Writesonic
            </h3>
            <p className="text-zinc-700">Ferramenta de escrita com IA para criar conteúdo de marketing otimizado para SEO.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Lumen5
            </h3>
            <p className="text-zinc-700">Transforme textos e artigos em vídeos engajadores para redes sociais com IA.</p>
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
            <h3 className="text-black font-bold">Genspark
            </h3>
            <p className="text-zinc-700">Crie apresentações impressionantes a partir de prompts simples com IA generativa.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Presentations.ai
            </h3>
            <p className="text-zinc-700">Plataforma de design de apresentações focada em empresas e colaboração em tempo real.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">AiPPT
            </h3>
            <p className="text-zinc-700">Gerador de PPTs com inteligência artificial que transforma tópicos em slides prontos.</p>
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
            <h3 className="text-black font-bold">Lovable</h3>
            <p className="text-zinc-700">IA para programação, resumos e automações.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Bolt.new</h3>
            <p className="text-zinc-700">Ferramenta de IA para acelerar o desenvolvimento e automação de código.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">v0</h3>
            <p className="text-zinc-700">Plataforma de IA para criação rápida de interfaces e automações.</p>
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
            <h3 className="text-black font-bold">GitHub Copilot</h3>
            <p className="text-zinc-700">Assistente de código da GitHub/OpenAI para autocompletar e gerar trechos de código.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Cursor</h3>
            <p className="text-zinc-700">IDE com assistente de código e recursos de AI.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Google AntiGravity</h3>
            <p className="text-zinc-700">Plataforma da Google para impulsionar produtividade de desenvolvedores com IA.</p>
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
            <h3 className="text-black font-bold">IBM Watson Healthcare
            </h3>
            <p className="text-zinc-700">Soluções de IA para saúde, oncologia e pesquisa clínica.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Ada
            </h3>
            <p className="text-zinc-700">App de avaliação de sintomas com IA e guia de saúde pessoal.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Voa Health
            </h3>
            <p className="text-zinc-700">Assistente que gera documentos clínicos como anamnese e receitas automaticamente.</p>
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
            <h3 className="text-black font-bold">Redraw
            </h3>
            <p className="text-zinc-700">Transforme seus esboços em renderizações fotorrealistas em segundos.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">PromeAI
            </h3>
            <p className="text-zinc-700">Gerador de arquitetura com IA para criar designs e renderizações impressionantes.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Leonardo AI
            </h3>
            <p className="text-zinc-700">Crie ativos de arquitetura e designs conceituais com ferramentas avançadas.</p>
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
            <h3 className="text-black font-bold">Conker.AI</h3>
            <p className="text-zinc-700">Gerador de quizzes alinhados a padrões educacionais em poucos cliques.</p>
          </div>

          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Diffit.me</h3>
            <p className="text-zinc-700">Crie leituras adaptadas e planos de aula personalizados automaticamente.</p>
          </div>

          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Socratic</h3>
            <p className="text-zinc-700">Suite de IA para planejar aulas, tarefas e acompanhar alunos.</p>
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
            <h3 className="text-black font-bold">QuillBot Detector de IA</h3>
            <p className="text-zinc-700">Ferramenta do QuillBot para analisar textos e apontar traços de IA.</p>
          </div>

          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Sidekicker</h3>
            <p className="text-zinc-700">Detector de conteúdo alimentado por IA com análise rápida e dashboards.</p>
          </div>

          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">WinstonAI</h3>
            <p className="text-zinc-700">Detector especializado em identificar conteúdos acadêmicos escritos por IA.</p>
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
            <h3 className="text-black font-bold">ChatGPT Atlas</h3>
            <p className="text-zinc-700">Experiência de navegação com Copilot do ChatGPT integrada ao browser Atlas.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Perplexity Comet</h3>
            <p className="text-zinc-700">Navegador que traz respostas da Perplexity diretamente na aba atual.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Opera One</h3>
            <p className="text-zinc-700">Browser com Aria e módulos multimídia para uso de IA integrado.</p>
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
            <h3 className="text-black font-bold">Adapta
            </h3>
            <p className="text-zinc-700">Plataforma que conecta ferramentas de IA para otimizar fluxos de trabalho.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">InnerAI
            </h3>
            <p className="text-zinc-700">Ecossistema de IA para empresas, integrando diversos modelos e ferramentas.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Tess
            </h3>
            <p className="text-zinc-700">Assistente de IA que agrega múltiplos modelos em uma única interface.</p>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/pacotes-de-ferramentas-e-agregadores-ia" className="text-black text-sm font-medium hover:underline">
            Ver todos os pacotes e agregadores
          </a>
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
            <h3 className="text-black font-bold">Zettadata</h3>
            <p className="text-zinc-700">Plataforma de análise de dados com IA para insights automatizados.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Basedash</h3>
            <p className="text-zinc-700">Interface de IA para visualizar e editar dados do seu banco.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Rybbit</h3>
            <p className="text-zinc-700">Análise de dados com IA e automações para decisões rápidas.</p>
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
            <h3 className="text-black font-bold">AiDrop</h3>
            <p className="text-zinc-700">Resumos semanais de avanços em IA: ferramentas, prompts e modelos novos.</p>
            <span className="text-xs text-zinc-500">Newsletter</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">AI Factory News</h3>
            <p className="text-zinc-700">Newsletter do Distrito focada em inteligência artificial e inovação.</p>
            <span className="text-xs text-zinc-500">Newsletter</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">IAí?</h3>
            <p className="text-zinc-700">Newsletter do O Globo sobre como a IA transforma o dia a dia.</p>
            <span className="text-xs text-zinc-500">Newsletter</span>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/newsletters-de-ia" className="text-black text-sm font-medium hover:underline">Ver todas as newsletters de IA</a>
        </div>
      </section>

      {/* IA para Ecommerce */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2"><ShoppingCartIcon className="w-6 h-6 text-gray-700" />IA para Ecommerce</h2>
          <a href="/ia-para-ecommerce" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas as IA para Ecommerce</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Genstore</h3>
            <p className="text-zinc-700">Construtor de lojas virtuais com IA a partir de um prompt.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Nuvem Chat</h3>
            <p className="text-zinc-700">Assistente de IA da Nuvemshop para atender no WhatsApp e no Instagram.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Prax</h3>
            <p className="text-zinc-700">Analytics de ecommerce com IA, segmentação RFM e CRM no WhatsApp.</p>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-ecommerce" className="text-black text-sm font-medium hover:underline">Ver todas as IA para Ecommerce</a>
        </div>
      </section>

      {/* IA para UX */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="apify-section-title flex items-center gap-2"><CursorArrowRaysIcon className="w-6 h-6 text-gray-700" />IA para UX</h2>
          <a href="/ia-para-ux" className="hidden md:inline-flex text-black text-sm font-medium hover:underline">Ver todas as IA para UX</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">UX Pilot</h3>
            <p className="text-zinc-700">Gera telas e fluxos de UX com IA, com integração ao Figma.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Banani</h3>
            <p className="text-zinc-700">Gerador de interfaces mobile e web a partir de texto ou imagem.</p>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Uizard</h3>
            <p className="text-zinc-700">Protótipos com IA a partir de texto, screenshots e esboços.</p>
          </div>
        </div>
        <div className="mt-4 md:hidden">
          <a href="/ia-para-ux" className="text-black text-sm font-medium hover:underline">Ver todas as IA para UX</a>
        </div>
      </section>


      {/* IAs em destaque: links internos para páginas de ferramenta */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <h2 className="apify-section-title flex items-center gap-2"><SparklesIcon className="w-6 h-6 text-gray-700" />IAs em destaque</h2>
        <p className="text-zinc-600 mb-8">Ferramentas com página dedicada: o que fazem, planos, vantagens e limitações.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/ferramentas/adapta" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Adapta</h3>
            <p className="text-zinc-700">Plataforma com +15 modelos de IA (GPT, Claude, Gemini), cursos e newsletter.</p>
          </Link>
          <Link href="/ferramentas/klingai" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">KlingAI</h3>
            <p className="text-zinc-700">Vídeos realistas com movimentos complexos a partir de texto ou imagem.</p>
          </Link>
          <Link href="/ferramentas/hailuo-ai" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Hailuo AI</h3>
            <p className="text-zinc-700">Clipes cinematográficos em vídeo gerados a partir de texto e imagens.</p>
          </Link>
          <Link href="/ferramentas/vidnoz" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Vidnoz AI</h3>
            <p className="text-zinc-700">Vídeos com avatares realistas, clonagem de voz e templates prontos.</p>
          </Link>
          <Link href="/ferramentas/excelmatic" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Excelmatic AI</h3>
            <p className="text-zinc-700">Cria fórmulas de Excel e scripts VBA e analisa dados via chat.</p>
          </Link>
          <Link href="/ferramentas/sidekicker" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Sidekicker AI</h3>
            <p className="text-zinc-700">Detector de IA que também humaniza textos e verifica plágio.</p>
          </Link>
          <Link href="/ferramentas/ux-pilot" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">UX Pilot</h3>
            <p className="text-zinc-700">Gera telas, wireframes e fluxos de UX com conexão ao Figma.</p>
          </Link>
          <Link href="/ferramentas/banani" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Banani</h3>
            <p className="text-zinc-700">Interfaces mobile e web a partir de texto ou imagens, com exportação para Figma.</p>
          </Link>
          <Link href="/ferramentas/uizard" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Uizard</h3>
            <p className="text-zinc-700">Protótipos multitela a partir de texto, screenshots e esboços.</p>
          </Link>
          <Link href="/ferramentas/relume" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Relume</h3>
            <p className="text-zinc-700">Sitemap, wireframes e site de marketing a partir de um briefing.</p>
          </Link>
          <Link href="/ferramentas/spangle" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Spangle</h3>
            <p className="text-zinc-700">Plataforma de inteligência para comércio focada em varejistas enterprise.</p>
          </Link>
          <Link href="/ferramentas/pixwit" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Pixwit</h3>
            <p className="text-zinc-700">Suíte criativa para gerar vídeos e imagens com IA.</p>
          </Link>
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
          <Link href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">GPT-5.5</h3>
            <p className="text-zinc-700">Modelo flagship multimodal da OpenAI com foco em agentes, raciocínio avançado e contexto de até 1M tokens.</p>
            <span className="text-xs text-zinc-500">OpenAI</span>
          </Link>
          <Link href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Gemini 3.5 Flash</h3>
            <p className="text-zinc-700">Modelo multimodal nativo do Google com forte desempenho em agentes e raciocínio científico.</p>
            <span className="text-xs text-zinc-500">Google DeepMind</span>
          </Link>
          <Link href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Claude Opus 5.5</h3>
            <p className="text-zinc-700">Modelo mais avançado da Anthropic com contexto de 1M tokens, lançado em setembro de 2026.</p>
            <span className="text-xs text-zinc-500">Anthropic</span>
          </Link>
          <Link href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Grok 4.3</h3>
            <p className="text-zinc-700">Modelo da xAI com conhecimento em tempo real, integração com X e contexto massivo de 2M tokens.</p>
            <span className="text-xs text-zinc-500">xAI</span>
          </Link>
          <Link href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">Llama 4 Maverick</h3>
            <p className="text-zinc-700">Principal modelo open-weight da Meta com arquitetura MoE, otimizado para inferência eficiente.</p>
            <span className="text-xs text-zinc-500">Meta AI</span>
          </Link>
          <Link href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <h3 className="text-black font-bold">DeepSeek V4</h3>
            <p className="text-zinc-700">Modelo open-weight MoE com até 1,6T parâmetros e custo extremamente baixo de inferência.</p>
            <span className="text-xs text-zinc-500">DeepSeek</span>
          </Link>
        </div>
        <div className="mt-6">
          <Link href="/modelos-de-llms" className="text-black text-sm font-medium hover:underline">Ver todos os modelos de LLMs →</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4">
        <h2 className="apify-section-title mb-8">Perguntas Frequentes sobre IA</h2>
        <div className="flex flex-col gap-4">
          <details className="bg-white border border-zinc-200 rounded-xl p-5 group">
            <summary className="font-semibold text-zinc-900 cursor-pointer list-none flex justify-between items-center gap-4">
              O que é o Hypehour?
              <span className="text-zinc-400 group-open:rotate-180 transition-transform shrink-0">▼</span>
            </summary>
            <p className="mt-3 text-zinc-600 text-sm leading-relaxed">
              Hypehour é o maior agregador de ferramentas de IA em português. Reunimos e curamos mais de 400 ferramentas de inteligência artificial organizadas em 47 categorias, para que você encontre a melhor IA para cada necessidade — imagens, vídeos, marketing, programação, automação, e muito mais.
            </p>
          </details>
          <details className="bg-white border border-zinc-200 rounded-xl p-5 group">
            <summary className="font-semibold text-zinc-900 cursor-pointer list-none flex justify-between items-center gap-4">
              Quais ferramentas de IA estão disponíveis no Hypehour?
              <span className="text-zinc-400 group-open:rotate-180 transition-transform shrink-0">▼</span>
            </summary>
            <p className="mt-3 text-zinc-600 text-sm leading-relaxed">
              O Hypehour reúne ferramentas de IA para imagens, vídeos, criação de logo, PDF, planilhas, transcrição de áudio, agentes de IA, automação, marketing, vendas, desenvolvimento, análise de dados, música, design, educação e muito mais. São 400+ ferramentas distribuídas em 47 categorias.
            </p>
          </details>
          <details className="bg-white border border-zinc-200 rounded-xl p-5 group">
            <summary className="font-semibold text-zinc-900 cursor-pointer list-none flex justify-between items-center gap-4">
              As ferramentas de IA do Hypehour são gratuitas?
              <span className="text-zinc-400 group-open:rotate-180 transition-transform shrink-0">▼</span>
            </summary>
            <p className="mt-3 text-zinc-600 text-sm leading-relaxed">
              O Hypehour é gratuito para usar como guia e agregador. Cada ferramenta listada tem seu próprio modelo de preço — muitas oferecem planos gratuitos ou períodos de teste. Consulte a página de cada ferramenta para verificar os planos disponíveis.
            </p>
          </details>
          <details className="bg-white border border-zinc-200 rounded-xl p-5 group">
            <summary className="font-semibold text-zinc-900 cursor-pointer list-none flex justify-between items-center gap-4">
              Como encontrar a melhor ferramenta de IA para o meu negócio?
              <span className="text-zinc-400 group-open:rotate-180 transition-transform shrink-0">▼</span>
            </summary>
            <p className="mt-3 text-zinc-600 text-sm leading-relaxed">
              Navegue pelas categorias do Hypehour e encontre ferramentas de IA organizadas por segmento: empresas, marketing, vendas, RH, contabilidade, atendimento, automação e muito mais. Cada categoria lista as principais opções do mercado com descrições detalhadas.
            </p>
          </details>
          <details className="bg-white border border-zinc-200 rounded-xl p-5 group">
            <summary className="font-semibold text-zinc-900 cursor-pointer list-none flex justify-between items-center gap-4">
              Quais são os principais modelos de LLM disponíveis em 2026?
              <span className="text-zinc-400 group-open:rotate-180 transition-transform shrink-0">▼</span>
            </summary>
            <p className="mt-3 text-zinc-600 text-sm leading-relaxed">
              Em 2026, os principais modelos de linguagem são: GPT-5.5 (OpenAI), Gemini 3.5 Flash (Google), Claude Opus 5 (Anthropic), Grok 4.3 (xAI), Llama 4 Maverick (Meta) e DeepSeek V4. O Hypehour acompanha os lançamentos e atualizações de todos esses modelos na página de{" "}
              <Link href="/modelos-de-llms" className="underline">Modelos de LLMs</Link>.
            </p>
          </details>
        </div>
      </section>

    </div>
  );
}
