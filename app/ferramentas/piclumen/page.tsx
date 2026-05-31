import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "PicLumen - Gerador de Vídeos e Imagens com IA (Kling, Seedance, Seedream)",
  description: "Conheça o PicLumen: plataforma criativa com IA para gerar vídeos e imagens usando modelos avançados como Kling e Seedance, com múltiplos takes e áudio nativo. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/piclumen" },
  openGraph: {
    title: "PicLumen - Gerador de Vídeos e Imagens com IA",
    description: "Plataforma criativa com IA para gerar vídeos e imagens usando modelos como Kling, Seedance e Seedream com áudio nativo.",
    url: "https://www.hypehour.com.br/ferramentas/piclumen",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "PicLumen - Gerador de Vídeos e Imagens com IA", description: "Plataforma criativa com IA para gerar vídeos com Kling, Seedance e imagens com Seedream.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function PicLumenPage() {
  const schemaData = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/piclumen#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "IA para Criar Vídeos", item: "https://www.hypehour.com.br/ia-para-criar-videos" }, { "@type": "ListItem", position: 3, name: "PicLumen", item: "https://www.hypehour.com.br/ferramentas/piclumen" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/piclumen#software", name: "PicLumen", description: "Plataforma criativa com IA que gera vídeos e imagens usando modelos avançados como Kling, Seedance e Seedream, com múltiplos takes e áudio nativo.", applicationCategory: "MultimediaApplication", operatingSystem: "Web", url: "https://www.piclumen.com", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/piclumen", creator: { "@type": "Organization", name: "PicLumen" } },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-criar-videos" className="hover:text-black transition">IA para Criar Vídeos</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">PicLumen</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">P</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">PicLumen</h1>
            <p className="text-lg text-zinc-700">Gere vídeos e imagens com os melhores modelos de IA em uma só plataforma</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O PicLumen é uma plataforma criativa que centraliza os melhores modelos de geração de vídeo e imagem com IA. Com acesso a modelos como Kling, Seedance e Seedream, permite criar vídeos dinâmicos a partir de texto ou imagens, com múltiplos takes por prompt e áudio nativo integrado.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para criadores de conteúdo, profissionais de marketing e designers que querem o melhor da geração de vídeo com IA sem precisar gerenciar múltiplas assinaturas.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o PicLumen?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">PicLumen é um hub de geração criativa com IA que agrega modelos de ponta para vídeo e imagem. Em vez de assinar Kling, Seedance e Seedream separadamente, o PicLumen dá acesso a todos em uma única plataforma, com a conveniência de escolher o modelo certo para cada tipo de criação.</p>
          <p className="text-zinc-700 leading-relaxed">O diferencial de gerar múltiplos takes por prompt permite comparar diferentes interpretações da IA e escolher o melhor resultado, aumentando as chances de acertar na primeira tentativa.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Escolha o modelo","Selecione o modelo de IA (Kling para vídeo, Seedream para imagem) conforme o tipo de conteúdo desejado."],["2","Insira o prompt ou imagem","Descreva o vídeo em texto ou carregue uma imagem para animar. Quanto mais detalhado o prompt, melhor o resultado."],["3","Gere múltiplos takes","O PicLumen gera múltiplas versões do mesmo prompt simultaneamente, permitindo escolher a melhor."],["4","Baixe com áudio","Exporte o vídeo final em MP4 com áudio nativo para publicar diretamente nas suas plataformas."]].map(([n,t,d])=>(
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
            {["Criar Reels e TikToks com IA","Animar imagens de produto","Vídeos para YouTube Shorts","Conteúdo para Stories","Anúncios em vídeo","Vídeos de apresentação","Arte gerada por IA","Animações para redes sociais","Transformações de estilo visual","Vídeos de marketing","Conteúdo com áudio nativo","Clipes para eventos"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Acesso a múltiplos modelos de IA","Reúne Kling, Seedance, Seedream e outros modelos em uma única plataforma, sem necessidade de múltiplas assinaturas."],["Múltiplos takes por prompt","Gera diversas versões do mesmo prompt simultaneamente, aumentando as chances de obter o resultado ideal."],["Text-to-Video e Image-to-Video","Cria vídeos a partir de descrições em texto ou anima imagens existentes com movimento natural gerado por IA."],["Áudio nativo nos vídeos","Diferente de muitas ferramentas que entregam vídeos silenciosos, o PicLumen inclui áudio nativo no resultado."],["Geração de imagens com Seedream","Além de vídeos, gera imagens de alta qualidade com o modelo Seedream para criação visual completa."],["Controle de proporção e estilo","Permite definir proporção (16:9, 9:16, 1:1) e estilo visual para cada geração."]].map(([t,d])=>(
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
            {["Hub de modelos — acessa Kling, Seedance e Seedream sem múltiplas assinaturas","Múltiplos takes — gera várias versões simultâneas para escolher a melhor","Áudio nativo — vídeos prontos para publicar com som incluído","Imagem e vídeo — criação visual completa em uma plataforma","Créditos gratuitos — experimente antes de assinar","Interface unificada — controle todos os modelos pelo mesmo painel"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Créditos se esgotam rapidamente — geração de múltiplos takes consome créditos mais rápido","Clipes curtos — duração limitada por geração, especialmente em planos básicos","Consistência de personagens — manter personagens iguais entre múltiplos clipes ainda é um desafio","Interface em inglês — pode ser uma barreira para usuários menos familiarizados"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o PicLumen?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Criadores que querem o melhor de vários modelos em um lugar","Profissionais de marketing que produzem vídeos em volume","Designers que criam imagens e vídeos para clientes","Quem quer vídeos com áudio sem etapa adicional","Social media managers com demanda alta de conteúdo visual"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Produção cinematográfica profissional que exige controle total","Quem precisa de vídeos longos com narrativa complexa","Projetos com personagens recorrentes que precisam de consistência perfeita"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Crie vídeos com os melhores modelos de IA</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o PicLumen com créditos gratuitos e gere seu primeiro vídeo agora</p>
          <a href="https://www.piclumen.com" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar PicLumen →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O PicLumen resolve um problema real de quem trabalha com geração de vídeo com IA: o custo e a complexidade de gerenciar múltiplas plataformas. Ao centralizar modelos como Kling e Seedance em um único lugar, simplifica o fluxo de trabalho e garante acesso ao estado da arte da geração de vídeo.</p>
          <p className="text-zinc-700 leading-relaxed">Para criadores que precisam de conteúdo visual dinâmico com regularidade, é uma das plataformas mais eficientes disponíveis atualmente.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
