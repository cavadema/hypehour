import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Fliki - Gerador de Vídeos com IA a partir de Texto",
  description: "Conheça o Fliki: ferramenta de IA que transforma texto em vídeos completos com narração realista, clipes automáticos e edição sem necessidade de experiência. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/fliki" },
  openGraph: {
    title: "Fliki - Gerador de Vídeos com IA a partir de Texto",
    description: "Transforma texto em vídeos completos com narração realista e clipes automáticos sem precisar gravar ou editar.",
    url: "https://www.hypehour.com.br/ferramentas/fliki",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Fliki - Gerador de Vídeos com IA a partir de Texto", description: "Transforma texto em vídeos com narração realista, clipes automáticos e edição sem experiência.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function FlikiPage() {
  const schemaData = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/fliki#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "IA para Criar Vídeos", item: "https://www.hypehour.com.br/ia-para-criar-videos" }, { "@type": "ListItem", position: 3, name: "Fliki", item: "https://www.hypehour.com.br/ferramentas/fliki" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/fliki#software", name: "Fliki", description: "Plataforma de geração de vídeos com IA que transforma texto, scripts e prompts em vídeos com narração realista, clipes automáticos e legendas.", applicationCategory: "MultimediaApplication", operatingSystem: "Web", url: "https://fliki.ai", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/fliki", creator: { "@type": "Organization", name: "Fliki" } },
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
          <span className="text-black font-medium">Fliki</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">F</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Fliki</h1>
            <p className="text-lg text-zinc-700">Do texto ao vídeo completo com narração e clipes automáticos</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Fliki é um gerador de vídeos com IA que transforma texto, scripts ou prompts em vídeos polidos com narração realista, clipes de vídeo dinâmicos selecionados automaticamente e edição sem intervenção manual. Suporta português entre dezenas de idiomas com vozes naturais de alta qualidade.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para criadores de conteúdo que produzem vídeos para YouTube, redes sociais e e-learning sem querer gravar câmera ou passar horas na edição.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Fliki?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Fliki é uma plataforma de criação de vídeo com IA que elimina as duas maiores barreiras da produção de vídeo: a gravação e a edição. Você insere um texto ou roteiro, escolhe a voz de narração e o Fliki monta o vídeo completo — buscando clipes relevantes, sincronizando com a narração e adicionando legendas automaticamente.</p>
          <p className="text-zinc-700 leading-relaxed">O resultado é um vídeo profissional pronto para publicar, produzido em minutos em vez de horas.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Insira o texto ou roteiro","Cole o artigo, script ou prompt que deseja transformar em vídeo. O Fliki divide automaticamente em cenas."],["2","Escolha a voz de narração","Selecione entre centenas de vozes em diferentes idiomas, gêneros e estilos. Ajuste velocidade e entonação."],["3","IA monta o vídeo","O Fliki busca clipes relevantes, sincroniza com a narração e adiciona legendas automáticas para cada cena."],["4","Ajuste e exporte","Faça ajustes finos nas cenas se necessário e exporte o vídeo final em MP4 para qualquer plataforma."]].map(([n,t,d])=>(
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
            {["Vídeos de YouTube sem câmera","Reels e TikToks informativos","Conteúdo educativo e e-learning","Vídeos de marketing e produto","Narração de artigos e blogs","Tutoriais em vídeo","Shorts e conteúdo vertical","Vídeos com avatares de IA","Vídeos para LinkedIn","Podcasts em vídeo","Apresentações narradas","Anúncios com narração"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Text-to-Video automatizado","Transforma qualquer texto em vídeo completo com clipes, narração e legendas sem edição manual."],["Narração com 1000+ vozes de IA","Centenas de vozes em dezenas de idiomas, incluindo português brasileiro, com ajuste de velocidade e tom."],["Seleção automática de clipes","Busca e seleciona clipes de vídeo relevantes de bancos licenciados (Pexels e outros) sincronizados com o script."],["Avatares de IA","Cria apresentadores virtuais que narram o conteúdo em vídeo, ideal para quem não quer aparecer na câmera."],["Legendas automáticas","Gera e sincroniza legendas automaticamente, melhorando acessibilidade e engajamento nas redes sociais."],["Templates para diferentes formatos","Oferece templates prontos para YouTube, Reels, TikTok e outros formatos com proporções e estilos adequados."]].map(([t,d])=>(
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
            {["Sem câmera — produza vídeos profissionais sem aparecer ou gravar nada","Sem edição — a IA monta e sincroniza tudo automaticamente","Português suportado — vozes naturais em PT-BR sem barreira de idioma","Escalável — produza dezenas de vídeos por semana com a mesma qualidade","Legendas automáticas — aumenta o engajamento sem trabalho adicional","Banco de clipes licenciados — sem preocupação com direitos autorais das imagens"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Minutos limitados no plano gratuito — produção em volume exige plano pago","Clipes automáticos podem não ser perfeitos — revisão manual pode ser necessária","Vozes de IA ainda soam artificiais em textos muito emocionais","Menor controle criativo — quem prefere edição frame a frame ficará limitado"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Fliki?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Criadores de conteúdo que não querem aparecer em câmera","Profissionais de e-learning e educação online","Agências de marketing com demanda alta de vídeos","Blogueiros que querem versões em vídeo de seus artigos","Empresas que produzem treinamentos e tutoriais em escala"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Produtores que precisam de controle total sobre cada frame","Conteúdo que requer presença humana real em câmera","Vídeos cinematográficos com narrativa visual complexa"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Transforme seus textos em vídeos profissionais</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o Fliki gratuitamente e crie seu primeiro vídeo em minutos</p>
          <a href="https://fliki.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar Fliki →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Fliki é uma das soluções mais eficientes para produzir vídeos em escala sem câmera ou edição. Para criadores que querem transformar conteúdo escrito em vídeo regularmente, o retorno em tempo é enorme.</p>
          <p className="text-zinc-700 leading-relaxed">Se você tem um blog, newsletter ou roteiro que poderia virar vídeo, o Fliki é a ferramenta certa para dar esse passo sem investir em produção tradicional.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
