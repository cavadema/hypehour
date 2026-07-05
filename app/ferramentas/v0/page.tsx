import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "v0 - Gerador de Interfaces React com IA da Vercel",
  description: "Conheça o v0: ferramenta da Vercel que gera interfaces React e Next.js prontas a partir de prompts de texto ou imagens. Veja vantagens, desvantagens e para quem é indicado.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/v0" },
  openGraph: {
    title: "v0 - Gerador de Interfaces React com IA da Vercel",
    description: "Gere componentes e páginas em React com IA diretamente da Vercel — usando shadcn/ui e Tailwind CSS.",
    url: "https://www.hypehour.com.br/ferramentas/v0",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "v0 - Gerador de Interfaces React com IA da Vercel",
    description: "Interfaces React geradas por IA — v0 da Vercel com shadcn/ui e Tailwind CSS.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function V0Page() {
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
        "@id": "https://www.hypehour.com.br/ferramentas/v0#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/v0",
        "name": "v0 - Gerador de Interfaces React com IA da Vercel",
        "description": "Conheça o v0: ferramenta da Vercel que gera interfaces React e Next.js prontas a partir de prompts de texto ou imagens. Veja vantagens, desvantagens e para quem é indicado.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/v0#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/v0#software" },
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/v0#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Vibe Coding", "item": "https://www.hypehour.com.br/ia-para-vibe-coding" },
          { "@type": "ListItem", "position": 3, "name": "v0", "item": "https://www.hypehour.com.br/ferramentas/v0" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/v0#software",
        "name": "v0",
        "description": "Ferramenta da Vercel que gera interfaces React e Next.js a partir de prompts de texto usando shadcn/ui e Tailwind CSS.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "url": "https://v0.dev/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/v0#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "616",
        },
        "creator": { "@type": "Organization", "name": "Vercel" },
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
          <span className="text-black font-medium">v0</span>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">v0</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">v0</h1>
            <p className="text-lg text-zinc-700">Gere interfaces React prontas com IA — da Vercel, com shadcn/ui e Tailwind</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O v0 é uma ferramenta da Vercel que gera código de interface React de alta qualidade a partir de prompts de texto ou capturas de tela. Com suporte nativo a shadcn/ui, Tailwind CSS e TypeScript, o código gerado segue as melhores práticas do ecossistema React e pode ser usado diretamente em projetos Next.js sem adaptações.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para desenvolvedores frontend que querem acelerar a criação de componentes e páginas, e para profissionais que precisam de protótipos de UI de alta fidelidade em minutos.</p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o v0?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">v0 é um gerador de interfaces desenvolvido pela Vercel — empresa por trás do Next.js e uma das maiores plataformas de deploy para aplicações React. A ferramenta usa modelos de linguagem treinados especificamente para geração de componentes React, com foco em código limpo, acessível e pronto para produção.</p>
          <p className="text-zinc-700 leading-relaxed">O diferencial do v0 em relação a geradores genéricos é a profundidade técnica: os componentes gerados usam shadcn/ui com variantes corretas, Tailwind CSS com classes semânticas e TypeScript com tipagem adequada — reduzindo o trabalho de limpeza e adaptação após a geração.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              { n: 1, titulo: "Descreva a interface ou envie uma imagem", texto: "Digite um prompt descrevendo o componente ou página que quer criar, ou envie uma captura de tela de uma interface que quer replicar." },
              { n: 2, titulo: "v0 gera o código React", texto: "A IA gera o código JSX/TSX com shadcn/ui, Tailwind CSS e TypeScript, seguindo as convenções do ecossistema Next.js." },
              { n: 3, titulo: "Visualize e refine", texto: "Veja a interface renderizada ao vivo no preview, faça pedidos de ajuste em linguagem natural e itere até o resultado estar correto." },
              { n: 4, titulo: "Copie ou integre ao projeto", texto: "Copie o código gerado para seu projeto, use o comando CLI para adicionar diretamente ou exporte via integração com o Next.js." },
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
            {["Criação de componentes React", "Páginas completas em Next.js", "Prototipagem de UI de alta fidelidade", "Landing pages", "Formulários e modais", "Dashboards e painéis", "Tabelas e listagens", "Navegação e headers", "Cards e seções de conteúdo", "Replicação de interfaces existentes", "Aceleração de desenvolvimento frontend", "Validação visual com stakeholders"].map((item, i) => (
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[
              { titulo: "Geração de componentes React com IA", texto: "Cria componentes JSX/TSX funcionais com shadcn/ui e Tailwind CSS a partir de descrições em texto ou imagens de referência." },
              { titulo: "Preview ao vivo", texto: "Visualize o componente renderizado em tempo real enquanto a IA gera o código, sem precisar copiar para o projeto primeiro." },
              { titulo: "Suporte a capturas de tela", texto: "Envie uma screenshot de uma interface que quer replicar e o v0 gera o código correspondente em React." },
              { titulo: "Refinamento iterativo", texto: "Ajuste o componente pedindo modificações em linguagem natural — troca de cores, layout, comportamento ou elementos — sem editar código manualmente." },
              { titulo: "Integração com Next.js e shadcn", texto: "Código gerado compatível com App Router do Next.js, usando shadcn/ui como biblioteca de componentes base." },
              { titulo: "CLI para integração direta", texto: "Comando de terminal para adicionar o componente gerado diretamente no projeto sem precisar copiar e colar o código." },
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
              "Código de qualidade — shadcn/ui, Tailwind e TypeScript sem gambiarras",
              "Preview instantâneo — veja a interface renderizada antes de copiar o código",
              "Da Vercel — integração natural com Next.js e o ecossistema React",
              "Aceita imagens como referência — replique interfaces existentes com precisão",
              "Refinamento por texto — ajuste sem editar código manualmente",
              "CLI integrado — adicione componentes direto no projeto com um comando",
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
              "Focado em UI — não gera lógica de backend ou banco de dados",
              "Créditos limitados no plano gratuito — uso intenso exige upgrade",
              "Melhor aproveitado por quem conhece React — iniciantes absolutos podem ter dificuldade para integrar o código",
              "Interface em inglês — sem versão em português",
              "Componentes complexos podem precisar de ajuste manual após geração",
            ].map((d, i) => (
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o v0?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Desenvolvedores frontend React/Next.js", "Designers que querem ver ideias em código", "Times criando protótipos de alta fidelidade", "Devs que usam shadcn/ui e Tailwind CSS", "Quem quer acelerar criação de componentes"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Quem precisa de backend e banco de dados gerados", "Iniciantes sem noção básica de React", "Projetos que não usam Tailwind CSS", "Quem precisa de lógica de negócio complexa gerada automaticamente"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Gere sua interface agora</h2>
          <p className="text-lg mb-6 text-zinc-300">Acesse o v0 e crie componentes React prontos para usar em segundos</p>
          <a href="https://v0.dev/" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar v0 →</a>
        </section>

        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O v0 é a ferramenta mais próxima do desenvolvedor React no ecossistema de geração de UI com IA. Ao gerar código com shadcn/ui e Tailwind CSS que segue as convenções do Next.js, ele reduz drasticamente o tempo de criação de componentes sem comprometer a qualidade do código.</p>
          <p className="text-zinc-700 leading-relaxed">Para desenvolvedores que já usam o stack React/Next.js/Tailwind, o v0 é uma adição natural ao fluxo de trabalho — especialmente para criar rapidamente componentes de UI que depois serão customizados com lógica de negócio.</p>
        </section>

        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
