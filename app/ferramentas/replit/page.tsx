import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Replit - IDE Online com IA para Programar no Navegador",
  description: "Conheça o Replit: IDE colaborativa na nuvem com IA integrada que permite programar, executar e deployar projetos em 50+ linguagens direto do navegador. Veja vantagens e para quem é indicado.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/replit" },
  openGraph: {
    title: "Replit - IDE Online com IA para Programar no Navegador",
    description: "Programe, colabore e publique aplicações em 50+ linguagens direto do navegador — com IA integrada do Replit.",
    url: "https://www.hypehour.com.br/ferramentas/replit",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Replit - IDE Online com IA para Programar no Navegador",
    description: "IDE na nuvem com IA para programar em 50+ linguagens sem instalar nada — Replit.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function ReplitPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.hypehour.com.br/#organization",
        "name": "Hypehour",
        "url": "https://www.hypehour.com.br",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.hypehour.com.br/#website",
        "name": "Hypehour",
        "url": "https://www.hypehour.com.br",
        "publisher": { "@id": "https://www.hypehour.com.br/#organization" },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.hypehour.com.br/ferramentas/replit#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/replit",
        "name": "Replit - IDE Online com IA para Programar no Navegador",
        "description": "Conheça o Replit: IDE colaborativa na nuvem com IA integrada que permite programar, executar e deployar projetos em 50+ linguagens direto do navegador. Veja vantagens e para quem é indicado.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/replit#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/replit#software" },
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/replit#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Vibe Coding", "item": "https://www.hypehour.com.br/ia-para-vibe-coding" },
          { "@type": "ListItem", "position": 3, "name": "Replit", "item": "https://www.hypehour.com.br/ferramentas/replit" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/replit#software",
        "name": "Replit",
        "description": "IDE colaborativa na nuvem com IA integrada para programar, executar e deployar projetos em mais de 50 linguagens direto do navegador.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "url": "https://replit.com/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/replit#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1106",
        },
        "creator": { "@type": "Organization", "name": "Replit" },
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
          <span className="text-black font-medium">Replit</span>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">R</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Replit</h1>
            <p className="text-lg text-zinc-700">IDE colaborativa na nuvem com IA — programe, execute e publique sem instalar nada</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Replit é uma IDE completa baseada em nuvem com inteligência artificial integrada que permite escrever, executar e publicar código diretamente no navegador, sem configurar ambiente de desenvolvimento. Suporta mais de 50 linguagens de programação e tem colaboração em tempo real nativa.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para estudantes que querem aprender a programar, desenvolvedores que querem um ambiente rápido sem configuração local, times que colaboram remotamente e criadores que querem publicar projetos com agilidade.</p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Replit?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Replit é uma plataforma de desenvolvimento que elimina a principal barreira para programar: a configuração do ambiente. Ao rodar tudo em nuvem, você abre o navegador e já está com um ambiente completo funcionando — com editor de código, terminal, preview do projeto e o Replit AI para ajudar no desenvolvimento.</p>
          <p className="text-zinc-700 leading-relaxed">A plataforma é usada por milhões de pessoas — de estudantes iniciantes em cursos de programação a desenvolvedores profissionais criando bots, scripts e aplicações web — justamente por remover a fricção técnica inicial sem sacrificar poder e flexibilidade.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              { n: 1, titulo: "Crie ou clone um projeto", texto: "Escolha um template da biblioteca do Replit, clone um repositório do GitHub ou crie um projeto do zero selecionando a linguagem desejada." },
              { n: 2, titulo: "Escreva código no navegador", texto: "O editor de código é completo com syntax highlight, autocomplete, múltiplos arquivos e terminal integrado — tudo sem instalar nada localmente." },
              { n: 3, titulo: "Use o Replit AI para ajudar", texto: "O assistente de IA integrado autocompleta código, explica erros, sugere melhorias e gera funções completas a partir de descrições." },
              { n: 4, titulo: "Execute e publique", texto: "Rode o projeto no próprio Replit e publique com um clique — gerando uma URL pública acessível sem configurar servidores." },
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
            {["Aprender programação sem configuração", "Criar bots e scripts rápidos", "Desenvolver aplicações web", "Colaboração em tempo real", "Hospedar APIs e backends", "Prototipagem de projetos", "Criar bots para Discord e Telegram", "Automatizar tarefas com Python", "Projetos de educação em programação", "Compartilhar código e demos", "Desenvolvimento mobile-first", "Criar portfólio de projetos"].map((item, i) => (
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[
              { titulo: "IDE completa no navegador", texto: "Editor com syntax highlight, múltiplos arquivos, terminal integrado, suporte a pacotes e todas as funcionalidades de uma IDE local — sem instalar nada." },
              { titulo: "Replit AI (assistente de código)", texto: "IA integrada que autocompleta código, explica erros em linguagem simples, sugere melhorias e gera funções a partir de descrições em texto." },
              { titulo: "Suporte a 50+ linguagens", texto: "Python, JavaScript, TypeScript, Java, C++, Go, Rust, Ruby, PHP, Kotlin e muitas outras linguagens com ambientes pré-configurados." },
              { titulo: "Colaboração em tempo real", texto: "Múltiplos usuários podem editar o mesmo projeto simultaneamente, com cursor ao vivo e chat integrado — como Google Docs para código." },
              { titulo: "Deploy e hospedagem integrados", texto: "Publique aplicações web, APIs e bots com URL pública em segundos, sem configurar servidores ou plataformas de hospedagem externas." },
              { titulo: "Integração com GitHub", texto: "Importe repositórios do GitHub, faça commits e sincronize projetos diretamente da interface do Replit." },
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
              "Zero configuração — ambiente completo no navegador sem instalar nada",
              "50+ linguagens — um único ambiente para qualquer stack ou projeto",
              "IA integrada nativa — assistente de código sem precisar de extensões",
              "Colaboração em tempo real — multiplayer nativo como Google Docs",
              "Deploy incluído — URL pública sem configurar servidores",
              "Gratuito para começar — acesso real às funcionalidades principais sem custo inicial",
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
              "Plano gratuito com projetos públicos — código privado exige plano pago",
              "Performance inferior para projetos muito pesados — limitações de RAM e CPU no gratuito",
              "Latência maior do que ambiente local — pode impactar produtividade em projetos grandes",
              "Hospedagem gratuita fica em standby — apps dormem após inatividade no plano free",
              "Dependência de conexão com internet — sem modo offline",
            ].map((d, i) => (
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Replit?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Iniciantes aprendendo a programar", "Desenvolvedores que querem ambiente rápido", "Times colaborando remotamente", "Criadores de bots e scripts", "Educadores e estudantes de programação"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Projetos de produção com alto tráfego", "Desenvolvimento com requisitos de segurança rígidos", "Quem precisa de código 100% privado no plano gratuito", "Projetos que requerem hardware específico ou GPU"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Comece a programar agora</h2>
          <p className="text-lg mb-6 text-zinc-300">Acesse o Replit e crie seu primeiro projeto sem instalar nada</p>
          <a href="https://replit.com/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar Replit →</a>
        </section>

        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Replit democratizou o acesso à programação ao eliminar a configuração de ambiente — a maior barreira para quem está começando. Com IA integrada, suporte a 50+ linguagens e deploy nativo, a plataforma vai muito além de uma IDE simples.</p>
          <p className="text-zinc-700 leading-relaxed">Para quem quer programar sem fricção — seja aprendendo, prototipando ou colaborando — o Replit é uma das melhores escolhas disponíveis, especialmente considerando que o plano gratuito já oferece acesso real às funcionalidades principais.</p>
        </section>

        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
