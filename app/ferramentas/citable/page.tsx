import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Citable - Seja Citado por IAs com Marketing de Visibilidade em IA",
  description: "Conheça o Citable: plataforma de marketing que ajuda marcas e conteúdos a serem citados por assistentes de IA como ChatGPT, Claude e Perplexity quando usuários fazem perguntas relevantes. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/citable" },
  openGraph: {
    title: "Citable - Seja Citado por IAs com Marketing de Visibilidade em IA",
    description: "Plataforma que ajuda marcas e conteúdos a serem citados por ChatGPT, Claude e Perplexity nas respostas aos usuários.",
    url: "https://www.hypehour.com.br/ferramentas/citable",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Citable - Marketing de Visibilidade em IA", description: "Ajuda marcas a serem citadas por ChatGPT, Claude e Perplexity quando usuários fazem perguntas relevantes.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function CitablePage() {
  const schemaData = {
    "@context": "https://schema.org", "@graph": [
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
        "@id": "https://www.hypehour.com.br/ferramentas/citable#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/citable",
        "name": "Citable - Seja Citado por IAs com Marketing de Visibilidade em IA",
        "description": "Conheça o Citable: plataforma de marketing que ajuda marcas e conteúdos a serem citados por assistentes de IA como ChatGPT, Claude e Perplexity quando usuários fazem perguntas relevantes. Veja vantagens, desvantagens e se é ideal para você.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/citable#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/citable#software" },
      },

      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/citable#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "IA para Marketing", item: "https://www.hypehour.com.br/ia-para-marketing" }, { "@type": "ListItem", position: 3, name: "Citable", item: "https://www.hypehour.com.br/ferramentas/citable" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/citable#software", name: "Citable", description: "Plataforma de marketing de visibilidade em IA que otimiza conteúdos e marcas para serem citados por assistentes de IA como ChatGPT, Claude e Perplexity.", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: "https://getcitable.com", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/citable", 
        "image": "https://www.hypehour.com.br/logo.png",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.6",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1174",
        },
        creator: { "@type": "Organization", name: "Citable" } },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-marketing" className="hover:text-black transition">IA para Marketing</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Citable</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">C</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Citable</h1>
            <p className="text-lg text-zinc-700">Faça sua marca aparecer nas respostas do ChatGPT, Claude e Perplexity</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Citable é uma plataforma pioneira de marketing de visibilidade em IA — o novo SEO para a era dos assistentes de inteligência artificial. Ajuda marcas e conteúdos a serem citados e recomendados por ChatGPT, Claude, Perplexity e outros assistentes quando usuários fazem perguntas no seu nicho.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Com a crescente migração de pesquisas para assistentes de IA, ser citado nessas respostas é tão importante quanto aparecer no Google — e o Citable é especializado exatamente nisso.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Citable?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Citable representa uma nova categoria de marketing: o GEO (Generative Engine Optimization) ou simplesmente "AI PR". Enquanto o SEO otimiza conteúdos para aparecer nos resultados do Google, o Citable otimiza para aparecer nas respostas geradas por IA — um canal que está crescendo exponencialmente.</p>
          <p className="text-zinc-700 leading-relaxed">A plataforma analisa como os assistentes de IA percebem sua marca, identifica oportunidades de aumento de visibilidade e fornece estratégias para que seu conteúdo seja selecionado como referência nas respostas dos modelos.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Audite sua visibilidade atual em IAs","O Citable testa como ChatGPT, Claude e Perplexity respondem perguntas do seu nicho e se sua marca é mencionada."],["2","Identifique lacunas e oportunidades","Veja quais perguntas relevantes para o seu negócio não geram citações da sua marca e onde concorrentes aparecem."],["3","Otimize conteúdos para citação","Implemente as recomendações do Citable para estruturar conteúdos que assistentes de IA tendem a citar."],["4","Monitore e meça resultados","Acompanhe a evolução da frequência com que sua marca aparece nas respostas dos principais assistentes de IA."]].map(([n,t,d])=>(
              <div key={n} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">{n}</div>
                <div><h3 className="text-xl font-semibold text-black mb-2">{t}</h3><p className="text-zinc-700">{d}</p></div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Aumentar citações em assistentes de IA","Monitoramento de brand AI","Análise de concorrentes em IA","Otimização de conteúdo para GEO","Estratégia de AI PR","Auditoria de visibilidade em IA","Identificação de perguntas-chave","Relatórios de menções em IA","Otimização de artigos e guias","Estratégia de link building para IA","Monitoramento de reputação em IAs","Análise de share of voice em IA"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Auditoria de visibilidade em IA","Testa como ChatGPT, Claude, Perplexity e outros assistentes respondem perguntas do seu nicho e menciona sua marca."],["Monitoramento contínuo","Rastreia automaticamente menções da sua marca nas respostas dos principais assistentes de IA ao longo do tempo."],["Análise de concorrentes","Veja com que frequência concorrentes são citados nas mesmas perguntas que você e o que os diferencia."],["Recomendações de otimização","Orientações práticas sobre como estruturar conteúdos para aumentar a probabilidade de citação por modelos de IA."],["Relatórios de share of voice","Dashboard com métricas de visibilidade em IA comparativas com o mercado e evolução ao longo do tempo."],["Identificação de perguntas-chave","Descubra quais perguntas seus clientes fazem para IAs que deveriam resultar em menções da sua marca."]].map(([t,d])=>(
              <div key={t} className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">{t}</h3>
                <p className="text-zinc-700">{d}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {["Canal emergente — posiciona sua marca no canal de busca que mais cresce","Pioneiro — poucos concorrentes estão otimizando para IA ainda, oportunidade de vantagem","Auditoria completa — visão clara de onde sua marca está e onde deveria estar","Monitoramento automático — sem precisar testar manualmente os assistentes","Análise de concorrentes — inteligência competitiva no novo canal de busca","Acionável — recomendações práticas para melhorar a visibilidade"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Canal ainda em maturação — os modelos de IA atualizam seus dados com menos frequência que buscadores","Resultados de médio prazo — otimização para IA leva tempo, não é tão imediato quanto um anúncio pago","Mercado novo — melhores práticas ainda estão sendo estabelecidas, exige experimentação","Dependente do comportamento dos LLMs — cada modelo tem comportamentos diferentes e imprevisíveis"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Citable?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Marcas que investem em marketing de conteúdo e SEO","Times de marketing B2B com foco em autoridade de marca","Empresas de tecnologia que querem ser referência no nicho","Profissionais de PR e comunicação digital","Negócios em nichos onde clientes pesquisam muito em IAs"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Negócios que precisam de resultado imediato de marketing","Marcas locais onde a busca por IA ainda não é o comportamento principal","Quem não investe em conteúdo de qualidade que possa ser citado"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Apareça nas respostas das IAs que seus clientes usam</h2>
          <p className="text-lg mb-6 text-zinc-300">Audite sua visibilidade em IA e comece a ser citado pelo ChatGPT e Claude</p>
          <a href="https://getcitable.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar Citable →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Citable está na vanguarda de uma mudança real no comportamento de busca: pessoas cada vez mais perguntam para IAs em vez de googlar. Ser citado nessas respostas é o novo SEO, e o Citable oferece as ferramentas para medir e melhorar essa presença.</p>
          <p className="text-zinc-700 leading-relaxed">Para marcas que pensam no futuro do marketing digital e querem estar posicionadas no canal de descoberta que mais cresce, o Citable é um investimento estratégico relevante.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
