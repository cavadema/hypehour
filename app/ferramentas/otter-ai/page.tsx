import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Otter AI - Transcrição e Ata de Reunião com Inteligência Artificial",
  description: "Conheça o Otter AI: ferramenta de IA que transcreve reuniões em tempo real, gera resumos e identifica itens de ação automaticamente. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/otter-ai" },
  openGraph: {
    title: "Otter AI - Transcrição e Ata de Reunião com Inteligência Artificial",
    description: "Conheça o Otter AI: ferramenta de IA que transcreve reuniões em tempo real, gera resumos e identifica itens de ação automaticamente.",
    url: "https://www.hypehour.com.br/ferramentas/otter-ai",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Otter AI - Transcrição e Ata de Reunião com Inteligência Artificial",
    description: "Ferramenta de IA que transcreve reuniões em tempo real, gera resumos e identifica itens de ação automaticamente.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function OtterAIPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/otter-ai#breadcrumb",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" },
          { "@type": "ListItem", position: 2, name: "IA para Ata de Reunião", item: "https://www.hypehour.com.br/ia-para-fazer-ata-reuniao" },
          { "@type": "ListItem", position: 3, name: "Otter AI", item: "https://www.hypehour.com.br/ferramentas/otter-ai" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/otter-ai#software",
        name: "Otter AI",
        description: "Plataforma de IA que transcreve reuniões em tempo real, gera resumos automáticos e identifica itens de ação com integração a Zoom, Teams e Google Meet.",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://otter.ai",
        mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/otter-ai",
        creator: { "@type": "Organization", name: "Otter.ai" },
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
          <Link href="/ia-para-fazer-ata-reuniao" className="hover:text-black transition">IA para Ata de Reunião</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Otter AI</span>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">O</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Otter AI</h1>
            <p className="text-lg text-zinc-700">Transcrição e atas de reunião automáticas com IA</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Otter AI é uma plataforma de inteligência artificial que transcreve reuniões em tempo real, gera resumos com os principais pontos discutidos e identifica automaticamente os itens de ação. Integra-se nativamente com Zoom, Google Meet, Microsoft Teams e Slack.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para equipes que fazem muitas reuniões e precisam de registro confiável sem depender de notas manuais — liberando os participantes para focar na conversa em vez de anotar.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Otter AI?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Otter AI é um assistente de reuniões baseado em IA que atua como um participante virtual: entra automaticamente nas chamadas, transcreve tudo em tempo real e, ao final, entrega um resumo estruturado com pontos-chave e tarefas identificadas.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A plataforma também permite pesquisar dentro de todas as transcrições salvas, transformando o histórico de reuniões em uma base de conhecimento consultável pela equipe inteira.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              ["1", "Conecte à sua agenda", "Integre o Otter AI ao Google Calendar ou Outlook para que ele detecte automaticamente suas reuniões agendadas."],
              ["2", "Otter AI entra na reunião", "O assistente virtual entra como participante no Zoom, Meet ou Teams e inicia a transcrição em tempo real."],
              ["3", "Transcrição ao vivo", "Acompanhe a transcrição em tempo real pela tela, com identificação de quem está falando em cada trecho."],
              ["4", "Resumo e itens de ação", "Ao final da reunião, a IA gera automaticamente um resumo com os principais pontos e tarefas identificadas."],
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
            {["Transcrição de reuniões de negócios", "Geração automática de atas", "Identificação de itens de ação", "Registro de entrevistas de emprego", "Transcrição de calls de vendas", "Notas de reuniões 1:1", "Base de conhecimento de reuniões", "Transcrição de podcasts e entrevistas", "Sincronização com CRM (Salesforce)", "Distribuição de resumos para equipes", "Reuniões presenciais via app mobile", "Pesquisa em histórico de reuniões"].map((item, i) => (
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
              ["Transcrição em tempo real", "Converte a fala em texto instantaneamente durante a reunião, com identificação automática de cada falante."],
              ["Resumos automáticos com IA", "Ao fim de cada reunião, gera um resumo estruturado com os tópicos discutidos e as decisões tomadas."],
              ["Identificação de itens de ação", "A IA detecta frases que indicam tarefas e responsabilidades, destacando-as separadamente no resumo."],
              ["Integração com Zoom, Meet e Teams", "Entra automaticamente nas chamadas como participante virtual, sem necessidade de configuração manual a cada reunião."],
              ["AI Chat nas transcrições", "Permite fazer perguntas sobre o conteúdo de qualquer reunião transcrita, como um ChatGPT focado nas suas reuniões."],
              ["Workspace compartilhado para equipes", "Nos planos Business, toda a equipe acessa as transcrições em um workspace centralizado e pesquisável."],
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
              "Transcrição em tempo real — acompanhe a ata sendo gerada ao vivo durante a reunião",
              "Identificação de falantes — sabe exatamente quem disse o quê em cada trecho",
              "Integração nativa — funciona com Zoom, Meet, Teams, Slack e Salesforce sem configuração complexa",
              "Base de conhecimento pesquisável — busque qualquer palavra em todo o histórico de reuniões",
              "Plano gratuito generoso — 300 minutos mensais para testar antes de assinar",
              "App mobile — transcreve reuniões presenciais pelo celular",
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
              "Suporte a português limitado — funciona melhor com reuniões em inglês",
              "300 minutos no plano gratuito — uso intenso exige plano pago",
              "Precisão cai com ruído de fundo — ambientes barulhentos prejudicam a transcrição",
              "Privacidade a considerar — transcrições ficam armazenadas em servidores externos",
              "Limite de 40 min por sessão no plano gratuito — reuniões longas exigem upgrade",
            ].map((d, i) => (
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Otter AI?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Equipes de negócios com muitas reuniões em inglês", "Times de vendas que gravam calls com clientes", "Gestores que precisam distribuir atas rapidamente", "Jornalistas e pesquisadores que transcrevem entrevistas", "RH que registra entrevistas de seleção"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Reuniões conduzidas principalmente em português", "Ambientes com muito ruído de fundo", "Quem precisa de 100% de confidencialidade dos dados", "Reuniões longas frequentes sem orçamento para plano pago"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Nunca mais perca o que foi decidido em reuniões</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o Otter AI gratuitamente e comece a transcrever suas reuniões hoje</p>
          <a href="https://otter.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">
            Acessar Otter AI →
          </a>
        </section>

        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Otter AI é uma das ferramentas mais completas do mercado para transcrição e registro de reuniões. Para equipes que operam principalmente em inglês e fazem muitas reuniões, o retorno em tempo economizado é significativo já no plano gratuito.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Se suas reuniões são em português, vale testar e avaliar a precisão — a ferramenta vem melhorando o suporte a outros idiomas. Para inglês, é uma das melhores escolhas disponíveis.
          </p>
        </section>

        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
