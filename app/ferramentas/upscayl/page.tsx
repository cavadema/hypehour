import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Upscayl - Upscaler de Imagens com IA Gratuito e Open-Source",
  description: "Conheça o Upscayl: ferramenta gratuita e open-source de upscaling de imagens com IA que aumenta a resolução em até 16x, disponível para Windows, Mac e Linux. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/upscayl" },
  openGraph: {
    title: "Upscayl - Upscaler de Imagens com IA Gratuito e Open-Source",
    description: "Ferramenta gratuita e open-source que aumenta a resolução de imagens em até 16x com IA, disponível para Windows, Mac e Linux.",
    url: "https://www.hypehour.com.br/ferramentas/upscayl",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Upscayl - Upscaler de Imagens com IA Gratuito", description: "Aumenta a resolução de imagens em até 16x com IA. Gratuito e open-source para Windows, Mac e Linux.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function UpscaylPage() {
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
        "@id": "https://www.hypehour.com.br/ferramentas/upscayl#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/upscayl",
        "name": "Upscayl - Upscaler de Imagens com IA Gratuito e Open-Source",
        "description": "Conheça o Upscayl: ferramenta gratuita e open-source de upscaling de imagens com IA que aumenta a resolução em até 16x, disponível para Windows, Mac e Linux. Veja vantagens, desvantagens e se é ideal para você.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/upscayl#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/upscayl#software" },
      },

      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/upscayl#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "IA para Imagens", item: "https://www.hypehour.com.br/ia-para-imagens" }, { "@type": "ListItem", position: 3, name: "Upscayl", item: "https://www.hypehour.com.br/ferramentas/upscayl" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/upscayl#software", name: "Upscayl", description: "Upscaler de imagens com IA gratuito e open-source que aumenta a resolução de fotos borradas em até 16x, disponível como app desktop (Windows, Mac, Linux) e versão cloud.", applicationCategory: "DesignApplication", operatingSystem: "Windows, macOS, Linux, Web", url: "https://upscayl.org", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/upscayl", 
        "image": "https://www.hypehour.com.br/logo.png",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.7",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1219",
        },
        creator: { "@type": "Organization", name: "Upscayl" } },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-imagens" className="hover:text-black transition">IA para Imagens</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Upscayl</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">U</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Upscayl</h1>
            <p className="text-lg text-zinc-700">Upscaler de imagens com IA — gratuito, open-source e até 16x de resolução</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Upscayl é um upscaler de imagens com IA completamente gratuito e open-source. Transforma fotos borradas, pixeladas ou de baixa resolução em imagens nítidas e detalhadas com ampliação de até 16x, processando tudo localmente no seu computador — sem enviar nada para servidores externos.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Disponível para Windows, macOS e Linux, é um dos poucos upscalers de qualidade com suporte nativo ao Linux e processamento local por privacidade.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Upscayl?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Upscayl é um aplicativo desktop open-source que usa modelos de IA para aumentar a resolução de imagens de forma inteligente — não apenas esticando os pixels, mas recriando detalhes com base no que o modelo aprendeu sobre texturas, bordas e padrões visuais.</p>
          <p className="text-zinc-700 leading-relaxed">Com múltiplos modelos especializados para diferentes tipos de imagem (fotos reais, arte, anime, rostos), entrega resultados superiores ao zoom tradicional de qualquer editor de imagem convencional.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Abra o Upscayl","Instale o app no Windows, Mac ou Linux (ou use a versão web) e abra a imagem que deseja melhorar."],["2","Escolha o modelo","Selecione o modelo mais adequado: foto real, anime, arte digital, rosto ou paisagem para melhores resultados."],["3","Defina o fator de ampliação","Escolha o quanto deseja ampliar: 2x, 4x, 8x ou 16x conforme a necessidade do projeto."],["4","Processe e exporte","A IA processa localmente na sua GPU e exporta a imagem em alta resolução pronta para uso."]].map(([n,t,d])=>(
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
            {["Restaurar fotos antigas de família","Melhorar screenshots pixelados","Preparar imagens para impressão grande","Melhorar fotos de produto de baixa resolução","Ampliar arte digital e ilustrações","Melhorar texturas de jogos","Restaurar fotos digitalizadas","Ampliar wallpapers de resolução baixa","Melhorar imagens de e-commerce","Recuperar detalhes em fotos noturnas","Ampliar capturas de câmera antiga","Melhorar avatares e fotos de perfil"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Múltiplos modelos de IA especializados","Modelos otimizados para fotos reais, arte digital, anime, rostos e outros tipos de imagem para resultados superiores em cada contexto."],["Processamento local e privado","Toda a IA roda no seu computador, sem enviar imagens para servidores externos — privacidade total."],["Ampliação de até 16x","Aumenta a resolução em 2x, 4x, 8x ou 16x dependendo da necessidade e da resolução original."],["Processamento em lote","Processa múltiplas imagens de uma vez, economizando tempo em projetos com muitos arquivos."],["Suporte a Windows, Mac e Linux","Um dos únicos upscalers de qualidade com suporte nativo ao Linux, além das plataformas mais populares."],["Gratuito e open-source","100% gratuito, sem limite de uso, sem marca d'água e com código aberto auditável pela comunidade."]].map(([t,d])=>(
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
            {["100% gratuito — sem assinatura, sem limite de uso, sem marca d'água","Open-source — código auditável e confiável, sem surpresas","Privacidade total — processa localmente, suas imagens nunca saem do seu computador","Linux nativo — raro entre ferramentas de qualidade para processamento de imagem","Processamento em lote — melhora centenas de imagens de uma vez","Múltiplos modelos — escolha o modelo certo para cada tipo de imagem"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Requer instalação — não tem versão web com qualidade equivalente ao app desktop","GPU necessária para melhor desempenho — sem GPU dedicada, o processamento é lento","Não edita, só amplia — não substitui um editor de imagens completo","Imagens muito borradas têm resultado limitado — qualidade mínima de entrada é necessária"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Upscayl?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Fotógrafos que precisam ampliar imagens para impressão","Lojistas de e-commerce com fotos de produto de baixa resolução","Amantes de fotos antigas que querem restaurar memórias de família","Usuários Linux que precisam de upscaler de qualidade","Designers e criadores que trabalham com imagens regularmente"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Quem precisa de edição completa (corte, filtros, ajustes) além do upscaling","Computadores sem GPU dedicada que precisam de resultado rápido","Imagens extremamente borradas ou corrompidas onde o resultado será limitado"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Melhore qualquer imagem gratuitamente com IA</h2>
          <p className="text-lg mb-6 text-zinc-300">Baixe o Upscayl grátis e comece a ampliar imagens com IA agora</p>
          <a href="https://upscayl.org" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Baixar Upscayl →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Upscayl é simplesmente o melhor upscaler gratuito disponível atualmente. Combina qualidade de resultado com privacidade total, processamento local e suporte multiplataforma — incluindo Linux, o que é raro no segmento.</p>
          <p className="text-zinc-700 leading-relaxed">Se você precisa melhorar a resolução de imagens regularmente e não quer pagar pelo Topaz Gigapixel, o Upscayl é a alternativa perfeita sem abrir mão de qualidade.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
