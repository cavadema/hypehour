import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Recraft - Gerador de Imagens e Vetores SVG com IA para Designers",
  description: "Conheça o Recraft: plataforma de IA para criar imagens fotorrealistas, vetores SVG editáveis e assets de design com estilos personalizados. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/recraft" },
  openGraph: {
    title: "Recraft - Gerador de Imagens e Vetores SVG com IA para Designers",
    description: "Plataforma de IA para criar imagens fotorrealistas, vetores SVG editáveis e assets de design com consistência de marca.",
    url: "https://www.hypehour.com.br/ferramentas/recraft",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Recraft - Gerador de Imagens e Vetores SVG com IA", description: "Cria imagens fotorrealistas, vetores SVG editáveis e assets de design com estilos personalizados.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function RecraftPage() {
  const schemaData = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/recraft#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "IA para Designers", item: "https://www.hypehour.com.br/ia-para-designers" }, { "@type": "ListItem", position: 3, name: "Recraft", item: "https://www.hypehour.com.br/ferramentas/recraft" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/recraft#software", name: "Recraft", description: "Plataforma de geração de imagens com IA para designers, com criação de fotos fotorrealistas, vetores SVG editáveis e estilos personalizados para consistência de marca.", applicationCategory: "DesignApplication", operatingSystem: "Web", url: "https://www.recraft.ai", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/recraft", creator: { "@type": "Organization", name: "Recraft" } },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-designers" className="hover:text-black transition">IA para Designers</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Recraft</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">R</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Recraft</h1>
            <p className="text-lg text-zinc-700">Imagens fotorrealistas, vetores SVG e assets de design gerados por IA</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Recraft é uma plataforma de geração de imagens com IA voltada para designers e times de criação. Gera imagens fotorrealistas, vetores SVG editáveis nativamente e assets de design com excelente compreensão de prompts. Permite criar estilos visuais personalizados a partir de referências, garantindo consistência de marca em todas as gerações.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para designers, agências e empresas que precisam de assets visuais consistentes em escala, sem precisar de sessões fotográficas ou criação manual de cada elemento.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Recraft?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Recraft é um gerador de imagens com IA projetado especificamente para o fluxo de trabalho de designers. Diferente de geradores genéricos, foca em três áreas críticas para design profissional: fotorrealismo de alta qualidade, geração de vetores SVG editáveis (uma raridade no segmento) e criação de estilos visuais personalizados.</p>
          <p className="text-zinc-700 leading-relaxed">A funcionalidade de estilo personalizado permite criar um "DNA visual" para uma marca a partir de imagens de referência, garantindo que todas as gerações subsequentes sigam a identidade visual estabelecida.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Descreva o que quer criar","Escreva o prompt detalhando a imagem desejada. O Recraft tem excelente interpretação de prompts complexos."],["2","Escolha o tipo de saída","Selecione entre imagem fotorrealista, ilustração, vetor SVG ou outros estilos disponíveis na biblioteca."],["3","Aplique estilo personalizado (opcional)","Use imagens de referência para definir um estilo visual personalizado e garantir consistência com a marca."],["4","Refine e exporte","Faça ajustes com inpainting ou variações e exporte em PNG, JPG ou SVG conforme o uso final."]].map(([n,t,d])=>(
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
            {["Criação de assets de marca","Geração de vetores SVG editáveis","Ilustrações para UI/UX","Imagens para marketing digital","Ícones e elementos gráficos","Fotos fotorrealistas de produto","Assets para redes sociais","Mockups e protótipos visuais","Identidade visual consistente","Conteúdo para e-commerce","Thumbnails e banners","Padrões e texturas de design"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Geração de vetores SVG editáveis","Um dos únicos geradores de imagem com IA que produz vetores SVG nativamente editáveis, essencial para design profissional escalável."],["Estilos personalizados por marca","Cria estilos visuais personalizados a partir de referências de marca, garantindo consistência em todas as gerações sem treinar um modelo do zero."],["Compreensão avançada de prompts","Reconhecida pela qualidade superior na interpretação de prompts complexos, gerando imagens muito próximas ao que foi descrito."],["Fotorrealismo de alta qualidade","O modelo fotorrealista entrega imagens de alta fidelidade comparáveis a fotografias profissionais para uso em marketing e produto."],["Inpainting e variações","Ferramentas de edição para refinar partes específicas da imagem e gerar variações do resultado para explorar possibilidades."],["API para integração","API disponível para desenvolvedores que queiram integrar geração de imagens em produtos e fluxos automatizados de produção."]].map(([t,d])=>(
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
            {["Vetores SVG nativos — único diferencial que faz a diferença para designers profissionais","Estilos de marca — mantém consistência visual sem treinar modelos próprios","Compreensão de prompts — interpreta instruções complexas melhor que a maioria dos concorrentes","Fotorrealismo — qualidade de imagem comparable a fotografia profissional","API disponível — integrável em fluxos de produção automatizados","Plano gratuito — créditos mensais para experimentar sem compromisso"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Créditos se esgotam — uso intenso exige plano pago","Interface em inglês — pode ser uma barreira inicial para alguns usuários","Texto em imagens ainda imperfeito — como a maioria dos geradores de IA, textos legíveis ainda são um desafio","Curva de prompt — resultados melhores requerem aprendizado sobre como descrever bem o que se quer"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Recraft?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Designers que precisam de vetores SVG gerados por IA","Agências que criam assets visuais em volume para clientes","Empresas construindo identidade visual consistente","Profissionais de UI/UX que precisam de ilustrações e ícones","Times de marketing que produzem conteúdo visual em escala"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Criação de arte altamente subjetiva onde Midjourney tem vantagem estética","Projetos que exigem textos perfeitamente legíveis nas imagens","Quem não precisa de vetores e quer apenas a melhor arte criativa geral"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Crie imagens e vetores profissionais com IA</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o Recraft gratuitamente e gere seus primeiros assets de design agora</p>
          <a href="https://www.recraft.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar Recraft →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Recraft é a escolha certa para designers que querem usar IA sem abrir mão da qualidade e consistência profissional. A combinação de vetores SVG nativos, estilos personalizados e fotorrealismo o coloca em uma categoria acima dos geradores genéricos para uso em design.</p>
          <p className="text-zinc-700 leading-relaxed">Para agências e times de design que precisam de assets visuais em escala com identidade de marca preservada, o Recraft é um dos investimentos com melhor retorno disponíveis atualmente.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
