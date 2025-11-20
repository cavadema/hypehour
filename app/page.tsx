import { SparklesIcon, PhotoIcon, CodeBracketIcon, ShieldCheckIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-[#f7f8fa] font-sans">
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
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold">Claude Code</span>
            <p className="text-zinc-700">Assistente de código baseado na família Claude (Anthropic).</p>
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

      {/* Últimas IA adicionadas */}
      <section id="ultimas-ias" className="w-full max-w-5xl mx-auto py-16 px-4">
        <h2 className="apify-section-title flex items-center gap-2"><SparklesIcon className="w-6 h-6 text-blue-400" />Últimas IA adicionadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold"><CodeBracketIcon className="w-5 h-5" /> Lovable</span>
            <p className="text-zinc-700">IA para programação, resumos e automações.</p>
            <span className="text-xs text-zinc-500">Adicionada em 15/11/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold"><PhotoIcon className="w-5 h-5" /> Whisk (Google)</span>
            <p className="text-zinc-700">IA para imagens e geração visual.</p>
            <span className="text-xs text-zinc-500">Adicionada em 14/11/2025</span>
          </div>
          <div className="apify-card hover:shadow-xl transition-shadow flex flex-col gap-2">
            <span className="inline-flex items-center gap-1 text-blue-600 font-bold"><PhotoIcon className="w-5 h-5" /> Pixlr</span>
            <p className="text-zinc-700">Editor de imagens com IA e recursos avançados.</p>
            <span className="text-xs text-zinc-500">Adicionada em 13/11/2025</span>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="w-full max-w-5xl mx-auto py-16 px-4">
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
    </div>
  );
}
