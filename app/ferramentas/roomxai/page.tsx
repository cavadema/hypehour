import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "RoomX AI - Design de Interiores com IA em Segundos",
  description: "Conheça o RoomX AI: ferramenta de inteligência artificial para transformar fotos de ambientes em designs de interiores profissionais com dezenas de estilos. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/roomxai" },
  openGraph: {
    title: "RoomX AI - Design de Interiores com IA em Segundos",
    description: "Transforma fotos de ambientes em designs de interiores profissionais com dezenas de estilos usando IA.",
    url: "https://www.hypehour.com.br/ferramentas/roomxai",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "RoomX AI - Design de Interiores com IA", description: "Transforma fotos de ambientes em designs de interiores profissionais com dezenas de estilos.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function RoomXAIPage() {
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
        "@id": "https://www.hypehour.com.br/ferramentas/roomxai#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/roomxai",
        "name": "RoomX AI - Design de Interiores com IA em Segundos",
        "description": "Conheça o RoomX AI: ferramenta de inteligência artificial para transformar fotos de ambientes em designs de interiores profissionais com dezenas de estilos. Veja vantagens, desvantagens e se é ideal para você.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/roomxai#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/roomxai#software" },
      },

      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/roomxai#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "IA para Design de Interiores", item: "https://www.hypehour.com.br/ia-para-design-de-interiores" }, { "@type": "ListItem", position: 3, name: "RoomX AI", item: "https://www.hypehour.com.br/ferramentas/roomxai" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/roomxai#software", name: "RoomX AI", description: "Ferramenta de IA para design de interiores que transforma fotos de ambientes reais em renders profissionais com diferentes estilos decorativos.", applicationCategory: "DesignApplication", operatingSystem: "Web", url: "https://roomxai.com", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/roomxai", 
        "image": "https://www.hypehour.com.br/logo.png",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1217",
        },
        creator: { "@type": "Organization", name: "RoomX AI" } },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-design-de-interiores" className="hover:text-black transition">IA para Design de Interiores</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">RoomX AI</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">R</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">RoomX AI</h1>
            <p className="text-lg text-zinc-700">Redesenhe qualquer ambiente com IA — dos fundamentos à decoração final</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O RoomX AI é uma ferramenta de design de interiores com IA que transforma fotos de ambientes reais em renders profissionais com diferentes estilos decorativos. Tire uma foto do seu cômodo atual e veja como ele ficaria com decoração minimalista, industrial, escandinava, luxuosa ou qualquer outro estilo em segundos.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para quem está planejando uma reforma, decoradores que querem apresentar opções a clientes rapidamente, e construtoras que precisam de visualizações de ambientes antes da obra.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o RoomX AI?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">RoomX AI usa modelos de difusão de imagem especializados em arquitetura e design de interiores para redesenhar ambientes mantendo a estrutura original do cômodo — paredes, janelas, proporções — enquanto transforma completamente a decoração, móveis, iluminação e acabamentos.</p>
          <p className="text-zinc-700 leading-relaxed">O resultado é uma visualização realista que permite explorar múltiplos conceitos de design sem precisar contratar um arquiteto ou esperar semanas por um render tradicional.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Fotografe o ambiente","Tire uma foto do cômodo que deseja redesenhar. Quanto melhor a iluminação e o ângulo, melhor o resultado."],["2","Escolha o estilo desejado","Selecione entre os estilos disponíveis: minimalista, escandinavo, industrial, moderno, luxo, boho, rústico e outros."],["3","IA redesenha o ambiente","O RoomX gera uma versão redesenhada do mesmo ambiente com o estilo escolhido, mantendo a estrutura arquitetônica."],["4","Compare e compartilhe","Veja o antes e depois lado a lado, gere variações e exporte as imagens para apresentações ou projetos."]].map(([n,t,d])=>(
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
            {["Planejamento de reformas","Visualização de estilos decorativos","Apresentações para clientes","Fotografias de imóveis para venda","Projetos de design de interiores","Inspiração para decoração","Simulação antes de comprar móveis","Redecorações sem obra","Staging virtual de imóveis","Projetos residenciais e comerciais","Renderização rápida de ambientes","Comparação de conceitos de design"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Redesign por foto","Transforma fotos de ambientes reais em renders de design profissional mantendo a estrutura arquitetônica do cômodo."],["Múltiplos estilos decorativos","Biblioteca de estilos populares: minimalista, escandinavo, industrial, moderno, luxo, boho, tropical, rústico e outros."],["Preservação da estrutura","A IA mantém paredes, janelas, portas e proporções originais, alterando apenas decoração e acabamentos."],["Comparação antes/depois","Visualize o ambiente original e o redesenhado lado a lado para avaliar o impacto das mudanças."],["Geração de variações","Crie múltiplas versões do mesmo ambiente com estilos diferentes para comparar opções antes de decidir."],["Alta resolução para apresentações","Exporta renders em alta resolução adequados para apresentações de projeto e materiais de venda de imóveis."]].map(([t,d])=>(
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
            {["Velocidade — render em segundos vs. semanas de um arquiteto tradicional","Foto real como base — não precisa de planta ou modelo 3D, só a foto do ambiente","Múltiplos estilos — explore dezenas de conceitos antes de decidir","Preserva a estrutura — resultado realista que reflete o espaço real","Alta resolução — imagens prontas para apresentações profissionais","Acessível — democratiza o acesso a visualizações de design que antes eram caras"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Não substitui projeto técnico — o render é visual, não inclui plantas, medidas ou especificações técnicas","Resultados variáveis — qualidade do render depende da qualidade e iluminação da foto original","Móveis específicos — a IA não coloca exatamente os móveis que você escolheu, apenas recria o estilo","Itens muito específicos — detalhes de acabamento muito particulares podem não ser reproduzidos fielmente"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o RoomX AI?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Proprietários planejando reformas e buscando inspiração","Arquitetos e decoradores apresentando conceitos a clientes","Imobiliárias que usam staging virtual para fotos de venda","Construtoras que precisam de renders rápidos para apresentações","Quem está comprando imóvel e quer visualizar como decorar"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Projetos que exigem plantas técnicas e especificações de obra","Visualização de móveis específicos de marcas determinadas","Projetos arquitetônicos que precisam de modelagem 3D precisa"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Redesenhe seus ambientes com IA em segundos</h2>
          <p className="text-lg mb-6 text-zinc-300">Experimente o RoomX AI e veja como seu espaço pode ser transformado</p>
          <a href="https://roomxai.com" target="_blank" rel="noopener noreferrer nofollow" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar RoomX AI →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O RoomX AI democratiza o acesso a visualizações de design de interiores que antes dependiam de horas de trabalho de um arquiteto ou designer. Para quem está planejando uma reforma ou quer explorar possibilidades antes de investir, é uma ferramenta de alto valor prático.</p>
          <p className="text-zinc-700 leading-relaxed">A velocidade e facilidade de uso o tornam especialmente valioso para decisões rápidas de design — como na venda de imóveis ou na escolha entre conceitos decorativos distintos.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
