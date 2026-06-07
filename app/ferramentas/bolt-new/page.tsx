import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Bolt.new - Desenvolvimento Full-Stack com IA no Navegador",
  description: "Conheça o Bolt.new: plataforma de vibe coding da StackBlitz que gera, executa e deploya aplicações full-stack completas a partir de prompts de texto. Veja vantagens e para quem é indicado.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/bolt-new" },
  openGraph: {
    title: "Bolt.new - Desenvolvimento Full-Stack com IA no Navegador",
    description: "Crie aplicações full-stack completas com IA no navegador — Bolt.new da StackBlitz com deploy automático no Netlify.",
    url: "https://www.hypehour.com.br/ferramentas/bolt-new",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolt.new - Desenvolvimento Full-Stack com IA no Navegador",
    description: "Apps full-stack com IA no navegador — Bolt.new da StackBlitz.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function BoltNewPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/bolt-new#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Vibe Coding", "item": "https://www.hypehour.com.br/ia-para-vibe-coding" },
          { "@type": "ListItem", "position": 3, "name": "Bolt.new", "item": "https://www.hypehour.com.br/ferramentas/bolt-new" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/bolt-new#software",
        "name": "Bolt.new",
        "description": "Plataforma de desenvolvimento full-stack no navegador com IA que gera, executa e deploya aplicações completas a partir de prompts de texto.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "url": "https://bolt.new/",
        "mainEntityOfPage": "https://www.hypehour.com.br/ferramentas/bolt-new",
        "creator": { "@type": "Organization", "name": "StackBlitz" },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">

        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-vibe-coding" className="hover:text-black transition">IA para Vibe Coding</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Bolt.new</span>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">⚡</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Bolt.new</h1>
            <p className="text-lg text-zinc-700">Desenvolvimento full-stack com IA — gere, execute e publique apps no navegador</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Bolt.new é uma plataforma de vibe coding desenvolvida pela StackBlitz que permite criar aplicações full-stack completas no navegador usando inteligência artificial. Você descreve o que quer construir, a IA gera todo o código e a aplicação já roda ao vivo — sem instalar nada, sem configurar servidores.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para desenvolvedores e não-técnicos que querem criar MVPs e protótipos funcionais rapidamente, com a possibilidade de deployar no Netlify com um clique e iterar em tempo real.</p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Bolt.new?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Bolt.new é um ambiente de desenvolvimento completo que roda no navegador via WebContainers — tecnologia da StackBlitz que executa Node.js diretamente no browser sem precisar de servidor. Com IA integrada, ele não só gera o código como também o executa e exibe o resultado em tempo real enquanto você itera.</p>
          <p className="text-zinc-700 leading-relaxed">O diferencial técnico do Bolt.new está no ambiente de execução real: diferente de ferramentas que apenas geram código para copiar, o Bolt.new roda a aplicação ao vivo, com terminal, npm e toda a stack funcionando — o que permite detectar e corrigir erros durante a geração.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              { n: 1, titulo: "Descreva sua aplicação", texto: "Digite o que quer criar: um app React, uma API Node.js, um dashboard com Tailwind, um clone de alguma ferramenta. Seja específico para melhores resultados." },
              { n: 2, titulo: "IA gera e executa o código", texto: "O Bolt.new gera o código completo e o executa em tempo real via WebContainers — você vê a aplicação funcionando ao vivo enquanto a IA escreve o código." },
              { n: 3, titulo: "Itere por conversa", texto: "Peça mudanças em linguagem natural: adicione uma funcionalidade, corrija um bug, mude o visual. A IA aplica e você vê o resultado imediatamente." },
              { n: 4, titulo: "Deploy no Netlify", texto: "Publique a aplicação com um clique, gerando uma URL pública via Netlify sem sair da interface do Bolt.new." },
            ].map(({ n, titulo, texto }) => (
              <div key={n} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">{n}</div>
                <div><h3 className="text-xl font-semibold text-black mb-2">{titulo}</h3><p className="text-zinc-700">{texto}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["MVPs e protótipos funcionais", "Apps React e Next.js completos", "APIs e backends Node.js", "Dashboards interativos", "Landing pages com lógica", "Clones de ferramentas existentes", "Ferramentas internas", "Bots e automações web", "Projetos de portfólio", "Demos para investidores", "Apps com autenticação básica", "Integrações com APIs externas"].map((item, i) => (
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[
              { titulo: "Ambiente de execução real no navegador", texto: "WebContainers da StackBlitz executam Node.js e npm diretamente no browser — a aplicação roda de verdade, não é apenas um preview estático." },
              { titulo: "Geração e execução simultânea", texto: "A IA gera o código enquanto você já vê o resultado ao vivo — erros são detectados e corrigidos automaticamente durante o processo de geração." },
              { titulo: "Iteração por linguagem natural", texto: "Converse com a IA para fazer mudanças: adicionar funcionalidades, corrigir bugs, alterar design — tudo sem editar código diretamente." },
              { titulo: "Deploy integrado com Netlify", texto: "Publique a aplicação no Netlify com um clique, gerando URL pública sem configuração adicional." },
              { titulo: "Importação de projetos do GitHub", texto: "Importe repositórios existentes para o Bolt.new e continue o desenvolvimento com assistência da IA." },
              { titulo: "Terminal e editor de código integrados", texto: "Acesso completo ao terminal e editor para quem quer ir além do que a IA gera — editando código, instalando pacotes e executando comandos." },
            ].map(({ titulo, texto }, i) => (
              <div key={i} className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">{titulo}</h3>
                <p className="text-zinc-700">{texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Execução real no navegador — a aplicação roda, não é só visualização",
              "Detecção automática de erros — IA corrige problemas durante a geração",
              "Deploy no Netlify com um clique — do prompt ao ar em minutos",
              "Importação do GitHub — continue projetos existentes com IA",
              "Full-stack — frontend e backend gerados e executados juntos",
              "Da StackBlitz — tecnologia WebContainers consolidada e confiável",
            ].map((a, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <span className="text-black font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-zinc-700">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {[
              "Tokens limitados no plano gratuito — projetos grandes consomem créditos rapidamente",
              "Projetos muito complexos podem perder contexto — IA pode \"esquecer\" partes do projeto em apps grandes",
              "Interface em inglês — sem versão em português",
              "Performance dependente do navegador — projetos pesados podem ficar lentos",
              "Banco de dados externo necessário para persistência de dados em produção",
            ].map((d, i) => (
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Bolt.new?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Desenvolvedores criando MVPs rapidamente", "Empreendedores validando ideias de produto", "Profissionais fazendo demos para clientes", "Criadores de ferramentas internas", "Quem quer vibe coding com execução real"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Aplicações de produção com alto tráfego", "Projetos com lógica de negócio muito complexa", "Sistemas que precisam de banco de dados robusto nativo", "Quem precisa de controle total sobre infraestrutura"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Crie sua aplicação agora</h2>
          <p className="text-lg mb-6 text-zinc-300">Acesse o Bolt.new e vá da ideia ao app funcionando em minutos</p>
          <a href="https://bolt.new/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar Bolt.new →</a>
        </section>

        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Bolt.new é a definição de vibe coding em sua forma mais completa: você descreve, a IA constrói, e você vê o resultado rodando ao vivo — tudo no navegador. A tecnologia WebContainers da StackBlitz garante que a execução é real, não um simulacro, o que torna o feedback da IA muito mais preciso e útil.</p>
          <p className="text-zinc-700 leading-relaxed">Para quem quer criar protótipos funcionais rapidamente, validar ideias de produto ou construir ferramentas simples sem montar um ambiente de desenvolvimento completo, o Bolt.new é uma das opções mais poderosas disponíveis hoje.</p>
        </section>

        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
