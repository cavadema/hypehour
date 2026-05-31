import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "AI Ease - Gerador de Headshots Profissionais com Inteligência Artificial",
  description: "Conheça o AI Ease: ferramenta de IA que transforma selfies em headshots profissionais de estúdio para LinkedIn, currículo e perfis corporativos. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/ai-ease" },
  openGraph: {
    title: "AI Ease - Gerador de Headshots Profissionais com Inteligência Artificial",
    description: "Ferramenta de IA que transforma selfies em headshots profissionais para LinkedIn, currículo e perfis corporativos.",
    url: "https://www.hypehour.com.br/ferramentas/ai-ease",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Ease - Gerador de Headshots Profissionais com Inteligência Artificial",
    description: "Transforma selfies em headshots profissionais para LinkedIn, currículo e perfis corporativos com IA.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function AIEasePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/ai-ease#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" },
          { "@type": "ListItem", position: 2, name: "IA para Imagens", item: "https://www.hypehour.com.br/ia-para-imagens" },
          { "@type": "ListItem", position: 3, name: "AI Ease", item: "https://www.hypehour.com.br/ferramentas/ai-ease" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/ai-ease#software",
        name: "AI Ease",
        description: "Gerador de headshots profissionais com IA que transforma selfies em fotos de estúdio para LinkedIn, currículo e perfis corporativos.",
        applicationCategory: "DesignApplication",
        operatingSystem: "Web",
        url: "https://www.aiease.ai",
        mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/ai-ease",
        creator: { "@type": "Organization", name: "AI Ease" },
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
          <Link href="/ia-para-imagens" className="hover:text-black transition">IA para Imagens</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">AI Ease</span>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">A</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">AI Ease</h1>
            <p className="text-lg text-zinc-700">Headshots profissionais de estúdio gerados por IA a partir de selfies</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O AI Ease é uma ferramenta de inteligência artificial que transforma selfies comuns em headshots profissionais com qualidade de estúdio. Você envia suas fotos, seleciona o estilo de roupa e fundo desejado, e a IA entrega dezenas de variações prontas para usar no LinkedIn, currículo e perfis corporativos.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para profissionais que precisam de uma foto de perfil de qualidade sem o custo e a logística de uma sessão fotográfica profissional.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o AI Ease?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            AI Ease é um gerador de headshots com IA que analisa suas características faciais a partir de selfies enviadas e cria retratos profissionais realistas em diferentes estilos, roupas e ambientes. O processo é automatizado — você não precisa posar novamente ou contratar ninguém.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A plataforma entrega pacotes com múltiplas variações de headshots, permitindo que você escolha as que melhor se adequam ao contexto profissional desejado.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              ["1", "Envie suas selfies", "Faça upload de 10 a 20 selfies com variações de ângulo, iluminação e expressão para que a IA aprenda suas características."],
              ["2", "Escolha o estilo", "Selecione o tipo de roupa (formal, casual, executivo) e os fundos preferidos (claro, escuro, cor sólida, ambiente de escritório)."],
              ["3", "IA processa", "A inteligência artificial treina um modelo personalizado com suas fotos e gera dezenas de headshots em algumas horas."],
              ["4", "Baixe os melhores", "Receba um pacote com múltiplas variações e escolha os headshots que mais combinam com sua imagem profissional."],
            ].map(([num, title, desc]) => (
              <div key={num} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">{num}</div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                  <p className="text-zinc-700">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Foto de perfil para LinkedIn", "Foto profissional para currículo", "Imagem para site corporativo", "Perfil de executivo e liderança", "Foto para apresentações profissionais", "Imagem para cartão de visita digital", "Perfil em plataformas de freelancer", "Foto para assinatura de e-mail", "Imagem para redes profissionais", "Headshot para imprensa e mídia", "Foto para speaker de evento", "Imagem de perfil em apps corporativos"].map((item, i) => (
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="text-zinc-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[
              ["Modelo de IA personalizado por usuário", "Treina um modelo com suas fotos específicas para preservar suas características faciais com fidelidade."],
              ["Múltiplos estilos e fundos", "Gera headshots com diferentes roupas (formal, casual, executivo) e fundos (claro, escuro, colorido, ambiente corporativo)."],
              ["Pacote com dezenas de variações", "Entrega múltiplas opções de headshots para você escolher as que melhor representam sua imagem profissional."],
              ["Qualidade de estúdio", "O resultado tem iluminação, enquadramento e nitidez comparáveis a fotos feitas em estúdio profissional."],
              ["Sem necessidade de nova sessão fotográfica", "Usa selfies que você já tem ou tira com qualquer câmera de smartphone para gerar os headshots."],
              ["Entrega em alta resolução", "Os headshots são entregues em alta resolução, adequados para uso digital e impressão."],
            ].map(([title, desc]) => (
              <div key={title} className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">{title}</h3>
                <p className="text-zinc-700">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Custo muito menor — fração do preço de uma sessão fotográfica profissional",
              "Conveniência total — sem agendamento, deslocamento ou tempo de espera",
              "Múltiplas variações — dezenas de headshots em diferentes estilos para escolher",
              "Resultado realista — mantém suas feições reconhecíveis com qualidade profissional",
              "Rápido — pronto em horas, não semanas como fotógrafos de agenda cheia",
              "Sem equipamento — qualquer smartphone moderno é suficiente para as selfies de entrada",
            ].map((v, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <span className="text-black font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-zinc-700">{v}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {[
              "Processo não é instantâneo — leva algumas horas para processar as fotos",
              "Qualidade depende das selfies enviadas — fotos escuras ou borradas comprometem o resultado",
              "Pode alterar nuances faciais — a IA não é perfeita em preservar 100% das características",
              "Não substitui book profissional — para atores, modelos e uso publicitário, fotógrafo ainda é melhor",
              "Verificar política de privacidade — suas fotos são enviadas para servidores externos",
            ].map((d, i) => (
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o AI Ease?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Profissionais atualizando perfil no LinkedIn", "Executivos e líderes que precisam de foto corporativa", "Freelancers que querem imagem profissional no portfólio", "Quem está buscando emprego e precisa de boa foto", "Empresas que precisam de fotos uniformes para toda a equipe"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Atores e modelos que precisam de book profissional", "Campanhas publicitárias que exigem direção artística", "Quem precisa de resultado em menos de uma hora", "Projetos que exigem expressões ou poses muito específicas"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Transforme suas selfies em headshots profissionais</h2>
          <p className="text-lg mb-6 text-zinc-300">Use o AI Ease e tenha dezenas de headshots de estúdio sem sair de casa</p>
          <a href="https://www.aiease.ai/headshot-generator/" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">
            Acessar AI Ease →
          </a>
        </section>

        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O AI Ease resolve um problema real: ter uma foto de perfil profissional de qualidade sem o custo e a inconveniência de uma sessão fotográfica. Para LinkedIn, currículo e perfis corporativos, o resultado gerado pela IA é excelente e muito mais acessível.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Se você está investindo na sua presença profissional online, um headshot de qualidade faz diferença — e o AI Ease entrega isso a uma fração do preço de um fotógrafo.
          </p>
        </section>

        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
