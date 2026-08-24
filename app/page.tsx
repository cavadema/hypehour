import Link from "next/link";
import {
  SparklesIcon, PhotoIcon, CodeBracketIcon, ShieldCheckIcon, AcademicCapIcon, EnvelopeIcon, GlobeAltIcon, MusicalNoteIcon, ArchiveBoxIcon, PencilSquareIcon, MegaphoneIcon, PresentationChartLineIcon, VideoCameraIcon, BuildingOffice2Icon, DocumentTextIcon,
  UserIcon, PhoneIcon, SwatchIcon, CurrencyDollarIcon, BookOpenIcon, HeartIcon, WrenchScrewdriverIcon, BriefcaseIcon, FunnelIcon,
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
  "name": "Hypehour — 400+ Ferramentas de IA | Guia Completo 2026",
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
        <h1 className="apify-title text-center drop-shadow-lg">Ferramentas de IA em Português — Guia Completo 2026</h1>
        <p className="apify-subtitle text-center max-w-2xl mx-auto">
          Descubra, compare e escolha entre 400+ ferramentas de IA curadas para imagens, vídeos, marketing, programação, automação e muito mais.
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
            <Link
              key={url}
              href={url}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-zinc-200 hover:border-zinc-400 hover:shadow-md transition-all text-center group"
            >
              <Icon className="w-6 h-6 text-zinc-500 group-hover:text-black transition-colors" />
              <span className="text-xs font-medium text-zinc-700 group-hover:text-black transition-colors leading-tight">{nome}</span>
            </Link>
          ))}
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

      {/* Editorial */}
      <section className="w-full max-w-5xl mx-auto py-12 px-4 border-b border-zinc-200">
        <h2 className="apify-section-title mb-6">O que é o Hypehour?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-600 text-sm leading-relaxed">
          <div>
            <h3 className="font-semibold text-zinc-900 mb-2">Curadoria de ferramentas de IA</h3>
            <p>
              O Hypehour nasceu para resolver um problema real: o mercado de inteligência artificial cresce tão rápido que fica difícil acompanhar quais ferramentas realmente valem a pena. Avaliamos e organizamos as melhores IAs disponíveis em português, separadas por caso de uso — para que você não perca tempo testando soluções que não entregam.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-2">Para profissionais e empresas</h3>
            <p>
              Nossa curadoria cobre desde ferramentas de IA para marketing, vendas e atendimento até soluções especializadas para médicos, advogados, designers e desenvolvedores. Com mais de 400 ferramentas organizadas em 47 categorias, qualquer profissional encontra o que precisa para aumentar sua produtividade com IA.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 mb-2">Sempre atualizado</h3>
            <p>
              O ecossistema de IA muda toda semana: novos modelos de LLM, novas ferramentas, novas versões. O Hypehour acompanha esses lançamentos de perto e mantém o guia atualizado com as versões mais recentes do GPT, Gemini, Claude, Grok e outros modelos — para que você sempre tome decisões com informação atual.
            </p>
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
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> GPT-5.5</span>
            <p className="text-zinc-700">Modelo flagship multimodal da OpenAI com foco em agentes, raciocínio avançado e contexto de até 1M tokens.</p>
            <span className="text-xs text-zinc-500">OpenAI</span>
          </Link>
          <Link href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Gemini 3.5 Flash</span>
            <p className="text-zinc-700">Modelo multimodal nativo do Google com forte desempenho em agentes e raciocínio científico.</p>
            <span className="text-xs text-zinc-500">Google DeepMind</span>
          </Link>
          <Link href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Claude Opus 5</span>
            <p className="text-zinc-700">Modelo mais avançado da Anthropic com contexto de 1M tokens, lançado em julho de 2026.</p>
            <span className="text-xs text-zinc-500">Anthropic</span>
          </Link>
          <Link href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Grok 4.3</span>
            <p className="text-zinc-700">Modelo da xAI com conhecimento em tempo real, integração com X e contexto massivo de 2M tokens.</p>
            <span className="text-xs text-zinc-500">xAI</span>
          </Link>
          <Link href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> Llama 4 Maverick</span>
            <p className="text-zinc-700">Principal modelo open-weight da Meta com arquitetura MoE, otimizado para inferência eficiente.</p>
            <span className="text-xs text-zinc-500">Meta AI</span>
          </Link>
          <Link href="/modelos-de-llms" className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-black font-bold"><SparklesIcon className="w-5 h-5" /> DeepSeek V4</span>
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
