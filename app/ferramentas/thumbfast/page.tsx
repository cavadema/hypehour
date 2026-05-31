import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Thumbfast - Gerador de Thumbnails com IA para YouTube e Redes Sociais",
  description: "Conheça o Thumbfast: ferramenta de IA para criar thumbnails profissionais para YouTube, Instagram e redes sociais de forma rápida. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/thumbfast" },
  openGraph: {
    title: "Thumbfast - Gerador de Thumbnails com IA",
    description: "Cria thumbnails profissionais para YouTube, Instagram e redes sociais com IA de forma rápida.",
    url: "https://www.hypehour.com.br/ferramentas/thumbfast",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Thumbfast - Thumbnails com IA para YouTube", description: "Cria thumbnails profissionais para YouTube e redes sociais com IA rapidamente.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function ThumbfastPage() {
  const schemaData = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/thumbfast#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "IA para Imagens", item: "https://www.hypehour.com.br/ia-para-imagens" }, { "@type": "ListItem", position: 3, name: "Thumbfast", item: "https://www.hypehour.com.br/ferramentas/thumbfast" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/thumbfast#software", name: "Thumbfast", description: "Gerador de thumbnails com IA para YouTube, Instagram e redes sociais, criando imagens de capa profissionais e otimizadas para cliques.", applicationCategory: "DesignApplication", operatingSystem: "Web", url: "https://thumbfa.st", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/thumbfast", creator: { "@type": "Organization", name: "Thumbfast" } },
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
          <span className="text-black font-medium">Thumbfast</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">T</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Thumbfast</h1>
            <p className="text-lg text-zinc-700">Thumbnails profissionais para YouTube e redes sociais geradas por IA</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Thumbfast é um gerador de thumbnails com IA focado em velocidade e qualidade. Cria imagens de capa otimizadas para cliques no YouTube, Instagram e outras plataformas, com composição visual atraente e texto impactante, tudo gerado automaticamente a partir de uma descrição.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para criadores de conteúdo, YouTubers e social media managers que precisam de thumbnails de alta qualidade sem contratar designers ou passar horas no Canva.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Thumbfast?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Thumbfast é especializado em um dos ativos mais importantes do criador de conteúdo: a thumbnail. A imagem de capa é responsável por uma parcela significativa dos cliques em vídeos, e o Thumbfast usa IA para gerar thumbnails com os elementos visuais que comprovadamente atraem mais atenção.</p>
          <p className="text-zinc-700 leading-relaxed">A velocidade é um diferencial: enquanto criar uma thumbnail no Canva pode levar 20-30 minutos, o Thumbfast entrega opções em segundos, permitindo que o criador teste diferentes variações facilmente.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Descreva o vídeo ou conteúdo","Informe o tema, título e o clima que a thumbnail deve transmitir. Quanto mais detalhado, melhor o resultado."],["2","Escolha o estilo visual","Selecione o estilo de thumbnail que melhor combina com o seu canal ou tipo de conteúdo."],["3","IA gera as opções","O Thumbfast cria múltiplas variações de thumbnail com composição, cores e texto otimizados para cliques."],["4","Baixe e publique","Escolha a melhor versão, faça ajustes finais se necessário e use diretamente na publicação do conteúdo."]].map(([n,t,d])=>(
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
            {["Thumbnails para YouTube","Capas de Reels e TikToks","Banners para posts do Instagram","Imagens de destaque para blogs","Capas de podcast em vídeo","Thumbnails para cursos online","Banners para webinars","Imagens de capa para LinkedIn","Thumbnails para tutoriais","Capas de newsletter em vídeo","Banners para shorts","Thumbnails para vídeos de produto"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Geração otimizada para cliques","A IA usa princípios de design e psicologia visual para criar thumbnails que maximizam a taxa de cliques (CTR)."],["Múltiplas variações por prompt","Gera várias opções diferentes para o mesmo prompt, permitindo escolher a que melhor funciona para o canal."],["Texto e tipografia integrados","Incorpora títulos e textos na imagem com fontes e estilos que aumentam o impacto visual."],["Templates por nicho","Estilos pré-definidos para os nichos mais populares: gaming, tecnologia, finanças, lifestyle, tutoriais."],["Dimensões otimizadas por plataforma","Exporta nas dimensões corretas para cada plataforma: YouTube (1280×720), Instagram, TikTok e outras."],["Edição de ajustes finais","Interface para pequenos ajustes no texto, posição de elementos e cores antes do download."]].map(([t,d])=>(
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
            {["Velocidade — thumbnail pronta em segundos, não em meia hora","CTR otimizado — composição baseada em princípios de design para mais cliques","Múltiplas variações — compare opções antes de escolher a melhor","Texto integrado — tipografia e títulos já na imagem","Templates por nicho — estilos adequados para cada tipo de conteúdo","Dimensões corretas — exportação nas medidas certas para cada plataforma"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Menor controle criativo — quem quer controle pixel a pixel prefere Canva ou Photoshop","Identidade visual — thumbnails geradas podem não refletir perfeitamente a identidade do canal","Rostos reais — IA ainda tem limitações para inserir fotos reais de pessoas nas thumbnails","Resultados variáveis — qualidade do resultado depende da qualidade do prompt fornecido"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Thumbfast?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["YouTubers que publicam conteúdo com frequência","Social media managers com volume alto de posts","Criadores de conteúdo sem experiência em design","Agências que produzem conteúdo para múltiplos clientes","Bloggers e podcasters que criam vídeos"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Criadores que exigem thumbnails com sua própria foto em destaque","Canais com identidade visual muito específica e consolidada","Quem prefere controle total sobre cada elemento do design"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Crie thumbnails que geram mais cliques com IA</h2>
          <p className="text-lg mb-6 text-zinc-300">Experimente o Thumbfast e gere sua primeira thumbnail em segundos</p>
          <a href="https://thumbfa.st" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar Thumbfast →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Thumbfast resolve um gargalo real na produção de conteúdo: a criação de thumbnails de qualidade sem gastar muito tempo. Para criadores que publicam regularmente, a economia de tempo é significativa e o resultado é visualmente competitivo.</p>
          <p className="text-zinc-700 leading-relaxed">Se você produz conteúdo para YouTube ou redes sociais e quer thumbnails mais profissionais sem investir em design, o Thumbfast é uma ferramenta prática e eficiente.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
