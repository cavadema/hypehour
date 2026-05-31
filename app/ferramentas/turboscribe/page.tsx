import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "TurboScribe - Transcrição de Áudio com IA (Whisper) em 98+ Idiomas",
  description: "Conheça o TurboScribe: ferramenta de transcrição de áudio com IA baseada no Whisper da OpenAI, com suporte a 98+ idiomas e alta precisão. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/turboscribe" },
  openGraph: {
    title: "TurboScribe - Transcrição de Áudio com IA (Whisper) em 98+ Idiomas",
    description: "Transcrição de áudio com IA baseada no Whisper da OpenAI, com suporte a 98+ idiomas, diarização de falantes e exportação em SRT.",
    url: "https://www.hypehour.com.br/ferramentas/turboscribe",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "TurboScribe - Transcrição de Áudio com IA", description: "Transcrição de áudio com Whisper AI em 98+ idiomas com alta precisão.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function TurboScribePage() {
  const schemaData = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/turboscribe#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "Transcrever Áudio", item: "https://www.hypehour.com.br/transcrever-audio" }, { "@type": "ListItem", position: 3, name: "TurboScribe", item: "https://www.hypehour.com.br/ferramentas/turboscribe" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/turboscribe#software", name: "TurboScribe", description: "Ferramenta de transcrição de áudio com IA baseada no modelo Whisper da OpenAI, suportando 98+ idiomas com alta precisão, diarização de falantes e exportação em múltiplos formatos.", applicationCategory: "MultimediaApplication", operatingSystem: "Web", url: "https://turboscribe.ai", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/turboscribe", creator: { "@type": "Organization", name: "TurboScribe" } },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/transcrever-audio" className="hover:text-black transition">Transcrever Áudio</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">TurboScribe</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">T</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">TurboScribe</h1>
            <p className="text-lg text-zinc-700">Transcrição de áudio com Whisper AI — rápida, precisa e em 98+ idiomas</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O TurboScribe é uma plataforma de transcrição de áudio e vídeo com IA, construída sobre o modelo Whisper da OpenAI — um dos mais precisos do mundo. Transcreve reuniões, podcasts, entrevistas e aulas em mais de 98 idiomas, incluindo português, com timestamps, diarização de falantes e exportação em múltiplos formatos.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para jornalistas, pesquisadores, criadores de conteúdo e profissionais que precisam de transcrições precisas sem a complexidade de configurar o Whisper diretamente.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o TurboScribe?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">TurboScribe é uma interface amigável sobre o modelo Whisper da OpenAI, tornando a transcrição de alta qualidade acessível sem necessidade de conhecimento técnico. Você simplesmente faz upload do arquivo de áudio ou vídeo e recebe a transcrição completa em minutos.</p>
          <p className="text-zinc-700 leading-relaxed">Com suporte a mais de 98 idiomas, identificação automática de falantes e exportação para TXT, DOCX e SRT, é uma das soluções mais completas para quem precisa converter fala em texto com qualidade profissional.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Faça upload do arquivo","Carregue o arquivo de áudio (MP3, WAV, M4A) ou vídeo (MP4, MOV) diretamente na plataforma."],["2","Selecione o idioma","Escolha o idioma do áudio ou deixe a detecção automática identificar o idioma falado."],["3","IA transcreve","O modelo Whisper processa o arquivo e gera a transcrição com timestamps e identificação de falantes."],["4","Exporte e use","Baixe a transcrição em TXT, DOCX ou SRT para legendas, ou edite diretamente na plataforma."]].map(([n,t,d])=>(
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
            {["Transcrição de podcasts","Transcrição de entrevistas","Geração de legendas SRT","Transcrição de aulas e webinars","Transcrição de reuniões gravadas","Conversão de áudios do WhatsApp","Transcrição para blogs e SEO","Transcrição de palestras","Legendas automáticas para vídeos","Transcrição de depoimentos","Atas de reunião a partir de gravações","Transcrição em múltiplos idiomas"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Modelo Whisper da OpenAI","Usa um dos modelos de reconhecimento de fala mais precisos do mundo, com qualidade superior à maioria dos concorrentes."],["Suporte a 98+ idiomas","Transcreve em qualquer idioma suportado pelo Whisper, com detecção automática de idioma para arquivos multilíngues."],["Diarização de falantes","Identifica e separa os diferentes falantes na transcrição, essencial para entrevistas e reuniões com múltiplos participantes."],["Timestamps automáticos","Inclui marcações de tempo em toda a transcrição, facilitando a localização de trechos específicos no áudio original."],["Exportação em múltiplos formatos","Exporta em TXT, DOCX e SRT (legenda), cobrindo todos os principais casos de uso profissional."],["Processamento rápido","Transcreve arquivos muito mais rápido que a duração original — um áudio de 1 hora em poucos minutos."]].map(([t,d])=>(
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
            {["Whisper como base — um dos modelos de transcrição mais precisos disponíveis comercialmente","Suporte robusto ao português — resultados de qualidade para PT-BR sem ajustes","Exporta SRT — geração automática de legendas sem ferramentas adicionais","Plano gratuito útil — 3 transcrições por dia são suficientes para uso ocasional","Sem instalação — funciona direto no navegador, qualquer sistema operacional","Interface simples — não exige nenhum conhecimento técnico para usar"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Plano gratuito limitado a 3 arquivos/dia — uso profissional exige assinatura","Precisão cai com ruído de fundo, sotaques fortes ou múltiplos falantes simultâneos","Não transcreve em tempo real — requer upload do arquivo gravado previamente","Privacidade dos arquivos — áudios são enviados para servidores externos para processamento"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o TurboScribe?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Jornalistas e pesquisadores que transcrevem entrevistas","Podcasters que precisam de conteúdo escrito para SEO","Professores e estudantes que transcrevem aulas","Criadores de conteúdo que produzem legendas","Profissionais que gravam reuniões e precisam de atas"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Quem precisa de transcrição em tempo real durante reuniões ao vivo","Áudios com muito ruído de fundo ou qualidade muito baixa","Transcrição de conteúdo altamente confidencial sem revisar a política de privacidade"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Transcreva qualquer áudio com precisão de Whisper</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o TurboScribe gratuitamente — 3 transcrições por dia sem custo</p>
          <a href="https://turboscribe.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar TurboScribe →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O TurboScribe é uma das melhores opções para quem quer a qualidade do Whisper sem a necessidade de configuração técnica. Para português, inglês e outros idiomas, entrega transcrições precisas que economizam horas de trabalho manual.</p>
          <p className="text-zinc-700 leading-relaxed">Se você precisa de transcrições regulares, o plano pago tem excelente custo-benefício comparado ao tempo que seria gasto transcrevendo manualmente.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
