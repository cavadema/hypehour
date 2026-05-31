import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "Hedra - Crie Avatares Falantes com IA",
  description: "Conheça o Hedra: ferramenta de IA que transforma fotos e áudio em vídeos com avatares falantes e sincronização labial realista. Veja vantagens, desvantagens e para quem é indicado.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/hedra",
  },
  openGraph: {
    title: "Hedra - Crie Avatares Falantes com IA",
    description: "Conheça o Hedra: ferramenta de IA que transforma fotos e áudio em vídeos com avatares falantes e sincronização labial realista.",
    url: "https://www.hypehour.com.br/ferramentas/hedra",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hedra - Crie Avatares Falantes com IA",
    description: "Transforme fotos e áudio em vídeos com avatares falantes realistas usando o Hedra.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function HedraPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/hedra#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Criar Vídeos", "item": "https://www.hypehour.com.br/ia-para-criar-videos" },
          { "@type": "ListItem", "position": 3, "name": "Hedra", "item": "https://www.hypehour.com.br/ferramentas/hedra" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/hedra#software",
        "name": "Hedra",
        "description": "Plataforma de IA que transforma fotos e áudio em vídeos com avatares falantes e sincronização labial realista.",
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "Web",
        "url": "https://www.hedra.com/",
        "mainEntityOfPage": "https://www.hypehour.com.br/ferramentas/hedra",
        "creator": { "@type": "Organization", "name": "Hedra" },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-criar-videos" className="hover:text-black transition">IA para Criar Vídeos</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Hedra</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            H
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Hedra</h1>
            <p className="text-lg text-zinc-700">Transforme fotos e áudio em avatares falantes com IA</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Hedra é uma plataforma de geração de vídeos com inteligência artificial especializada em criar avatares falantes com sincronização labial realista. A ferramenta transforma qualquer imagem de rosto e arquivo de áudio em um vídeo com o personagem falando de forma natural e expressiva.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para criadores de conteúdo, educadores, profissionais de marketing e empresas que precisam produzir vídeos com porta-vozes virtuais, apresentadores digitais ou personagens animados sem custos de filmagem.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Hedra?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Hedra é uma ferramenta de IA generativa focada em audio-driven video synthesis — a tecnologia de criar vídeos a partir de áudio. O sistema analisa o arquivo de áudio para extrair padrões de fala, fonemas e entonação, e os aplica ao rosto do personagem escolhido com sincronização precisa dos movimentos labiais e expressões faciais.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A plataforma se destaca pela simplicidade do fluxo: dois inputs (imagem + áudio) e um output (vídeo). Não é necessário experiência em edição de vídeo, animação ou design para obter resultados profissionais.
          </p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              { n: 1, titulo: "Envie a imagem do personagem", texto: "Faça upload de uma foto frontal nítida do rosto — pode ser uma foto real, ilustração, avatar ou qualquer personagem com feições faciais visíveis." },
              { n: 2, titulo: "Adicione o arquivo de áudio", texto: "Envie um arquivo de áudio com a fala desejada em MP3 ou WAV. Pode ser uma voz gravada, sintetizada por IA ou qualquer narração que você queira usar." },
              { n: 3, titulo: "IA gera a sincronização", texto: "O Hedra processa os dois arquivos e gera automaticamente um vídeo com o personagem falando — com movimentos labiais, expressões faciais e animação sincronizados ao áudio." },
              { n: 4, titulo: "Baixe e publique", texto: "Exporte o vídeo gerado e use em apresentações, redes sociais, cursos, campanhas ou qualquer outro projeto que necessite de um apresentador virtual." },
            ].map(({ n, titulo, texto }) => (
              <div key={n} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">{n}</div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">{titulo}</h3>
                  <p className="text-zinc-700">{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Avatares falantes para redes sociais",
              "Apresentadores virtuais para cursos",
              "Porta-vozes digitais para marcas",
              "Vídeos educacionais com personagens",
              "Anúncios com avatares expressivos",
              "Demos de produto com narrador virtual",
              "Conteúdo para YouTube e TikTok",
              "Personagens para newsletters em vídeo",
              "Vídeos de boas-vindas personalizados",
              "Campanhas com influenciadores virtuais",
              "Comunicados internos com avatar corporativo",
              "Conteúdo multilíngue com mesma imagem",
            ].map((item, i) => (
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="text-zinc-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principais funcionalidades */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[
              { titulo: "Sincronização labial realista", texto: "Tecnologia de lip sync que sincroniza os movimentos dos lábios do personagem ao áudio com alta precisão, gerando vídeos com aparência natural e convincente." },
              { titulo: "Expressões faciais dinâmicas", texto: "Além dos movimentos labiais, o Hedra gera expressões faciais coerentes com o tom e conteúdo do áudio — mais naturalidade e menor sensação de personagem estático." },
              { titulo: "Funciona com qualquer imagem de rosto", texto: "Compatível com fotos reais, ilustrações, avatares 3D, personagens de anime ou qualquer imagem com feições faciais — sem necessidade de templates específicos." },
              { titulo: "Suporte a qualquer idioma", texto: "O motor de sincronização labial funciona com qualquer idioma, incluindo português, espanhol, inglês e outros — basta enviar o áudio no idioma desejado." },
              { titulo: "Fluxo de dois passos", texto: "Interface simplificada: imagem + áudio = vídeo. Sem configurações complexas, sem timeline de edição — resultados em minutos mesmo para usuários sem experiência." },
              { titulo: "Plano gratuito disponível", texto: "Créditos mensais gratuitos para testar a ferramenta e criar os primeiros vídeos antes de decidir pelo upgrade para planos pagos." },
            ].map(({ titulo, texto }, i) => (
              <div key={i} className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">{titulo}</h3>
                <p className="text-zinc-700">{texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Sincronização labial de alta qualidade — resultado convincente com qualquer imagem de rosto",
              "Fluxo ultra-simples — imagem + áudio + clique = vídeo pronto",
              "Funciona com qualquer idioma — ideal para conteúdo multilíngue",
              "Plano gratuito funcional — dá para testar e criar antes de pagar",
              "Sem necessidade de filmagem — elimina custos de produção de vídeo tradicional",
              "Versátil — serve para educação, marketing, entretenimento e comunicação corporativa",
            ].map((advantage, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <span className="text-black font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-zinc-700">{advantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Desvantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {[
              "Depende da qualidade da imagem — fotos com baixa resolução ou ângulo ruim comprometem o resultado",
              "Créditos gratuitos limitados — uso intenso exige upgrade para plano pago",
              "Vídeos curtos — ideal para clipes e apresentações, não para vídeos longos",
              "Resultados podem variar — personagens muito estilizados ou com feições incomuns podem ter sincronização menos precisa",
              "Interface em inglês — a plataforma não está localizada em português",
            ].map((d, i) => (
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para quem é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Hedra?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Criadores de conteúdo para redes sociais",
                  "Educadores e criadores de cursos online",
                  "Profissionais de marketing digital",
                  "Empresas com comunicação interna em vídeo",
                  "Criadores de personagens e avatares virtuais",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-black">→</span>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Produção de vídeos longos e complexos",
                  "Projetos que exigem múltiplos personagens interagindo",
                  "Animações com controle frame-by-frame",
                  "Quem precisa de resultado 100% previsível e controlado",
                  "Produções com requisitos cinematográficos profissionais",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-zinc-700">✕</span>
                    <span className="text-zinc-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Crie seu avatar falante agora</h2>
          <p className="text-lg mb-6 text-zinc-300">Experimente o Hedra gratuitamente e transforme qualquer foto em um vídeo com personagem falante</p>
          <a
            href="https://www.hedra.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar Hedra →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Hedra resolve um problema específico com muita elegância: criar vídeos com personagens falantes sem precisar filmar nada. A combinação de sincronização labial de qualidade com um fluxo de trabalho extremamente simples o torna uma das ferramentas mais acessíveis nessa categoria.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Para criadores, educadores e empresas que precisam de um porta-voz virtual, apresentador digital ou avatar falante para seus conteúdos, o Hedra é uma opção sólida que entrega resultados profissionais sem exigir habilidades técnicas avançadas.
          </p>
        </section>

        <FAQSection />
      </div>
    </main>
  );
}
