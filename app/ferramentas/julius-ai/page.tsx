import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Julius AI - Análise de Dados com IA sem Precisar de Código",
  description: "Conheça o Julius AI: assistente de análise de dados com IA que responde perguntas sobre planilhas, CSV e dados em linguagem natural, gerando gráficos e insights automaticamente. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/julius-ai" },
  openGraph: {
    title: "Julius AI - Análise de Dados com IA sem Precisar de Código",
    description: "Assistente de IA que analisa planilhas e dados em linguagem natural, gerando gráficos e insights sem necessidade de código.",
    url: "https://www.hypehour.com.br/ferramentas/julius-ai",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Julius AI - Análise de Dados com IA", description: "Analisa planilhas e dados em linguagem natural, gerando gráficos e insights automaticamente.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function JuliusAIPage() {
  const schemaData = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/julius-ai#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "Análise de Dados", item: "https://www.hypehour.com.br/analise-de-dados" }, { "@type": "ListItem", position: 3, name: "Julius AI", item: "https://www.hypehour.com.br/ferramentas/julius-ai" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/julius-ai#software", name: "Julius AI", description: "Assistente de IA para análise de dados que responde perguntas sobre planilhas e CSV em linguagem natural, gerando gráficos, análises estatísticas e insights automaticamente.", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: "https://julius.ai", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/julius-ai", creator: { "@type": "Organization", name: "Julius AI" } },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/analise-de-dados" className="hover:text-black transition">Análise de Dados</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Julius AI</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">J</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Julius AI</h1>
            <p className="text-lg text-zinc-700">Analise dados, gere gráficos e obtenha insights em linguagem natural</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Julius AI é um assistente de inteligência artificial especializado em análise de dados. Você carrega sua planilha ou CSV, faz perguntas em português ou inglês, e a IA executa cálculos, cria gráficos e explica os resultados — sem precisar escrever uma linha de código.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para profissionais, gestores e estudantes que precisam extrair insights de dados sem dominar Python, SQL ou ferramentas de BI complexas.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Julius AI?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Julius AI é um analista de dados com IA conversacional. Pense nele como um cientista de dados que você pode chamar a qualquer momento: carregue os dados, faça uma pergunta em linguagem natural — "quais produtos tiveram maior crescimento no último trimestre?" — e ele entrega o resultado com gráfico e explicação.</p>
          <p className="text-zinc-700 leading-relaxed">Internamente, o Julius executa código Python para processar as análises, mas você nunca precisa ver ou escrever código. Apenas perguntas e respostas.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Carregue os dados","Faça upload da planilha Excel, CSV ou conecte a uma fonte de dados compatível."],["2","Faça perguntas em linguagem natural","Pergunte em português ou inglês: 'mostre as vendas por mês', 'qual a correlação entre X e Y', 'faça uma previsão para os próximos 3 meses'."],["3","IA executa a análise","O Julius escreve e executa código Python internamente, processando os dados e gerando gráficos automaticamente."],["4","Receba insights e gráficos","Os resultados são apresentados em gráficos interativos com explicação em texto simples, prontos para exportar."]].map(([n,t,d])=>(
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
            {["Análise de vendas e receita","Visualização de dados em gráficos","Análise estatística automática","Previsões e projeções","Relatórios de marketing","Análise financeira","Limpeza e tratamento de dados","Análise de dados de RH","Insights de e-commerce","Análise de campanhas","Exploração de datasets","Cruzamento de múltiplas planilhas"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Análise em linguagem natural","Faça perguntas sobre seus dados em português ou inglês sem precisar de SQL, Python ou qualquer linguagem de programação."],["Geração automática de gráficos","Cria visualizações (barras, linhas, dispersão, pizza, heatmaps) automaticamente a partir das perguntas feitas."],["Análise estatística completa","Realiza média, mediana, desvio padrão, correlação, regressão, previsões e outros cálculos estatísticos avançados."],["Execução de código Python visível","O código Python gerado pela IA é visível e editável, permitindo que usuários técnicos personalizem as análises."],["Suporte a múltiplos formatos","Aceita Excel (.xlsx), CSV e outros formatos de dados para upload e análise imediata."],["Histórico de análises","Salva o histórico de conversas e análises para referência e continuação em sessões futuras."]].map(([t,d])=>(
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
            {["Zero código — qualquer pessoa analisa dados profissionalmente sem Python ou SQL","Responde em português — sem barreira de idioma para usuários brasileiros","Gráficos automáticos — visualizações criadas instantaneamente a partir de perguntas","Mais específico que ChatGPT — especializado em dados, com execução real de código","Explica os resultados — não apenas números, mas o que eles significam em texto simples","Ideal para relatórios — exporte gráficos e análises diretamente para apresentações"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Análises limitadas no plano gratuito — uso intenso exige assinatura","Não substitui um cientista de dados sênior — para modelagens muito complexas, limitações existem","Privacidade dos dados — verifique a política antes de carregar dados sensíveis ou confidenciais","Limite de tamanho de arquivo — datasets muito grandes podem ter restrições no upload"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Julius AI?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Gestores e empreendedores que precisam de insights de dados rápidos","Profissionais de marketing analisando resultados de campanhas","Equipes de vendas analisando performance e metas","Estudantes de cursos que exigem análise de dados","Pequenas empresas sem orçamento para contratar analistas"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Modelagem de machine learning avançada","Processamento de datasets gigantes em produção","Quem precisa de pipelines de dados automatizados","Análises que exigem controle total sobre cada passo do processo"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Analise seus dados sem escrever uma linha de código</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o Julius AI gratuitamente e faça sua primeira análise em minutos</p>
          <a href="https://julius.ai" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar Julius AI →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Julius AI democratiza a análise de dados, tornando possível que qualquer pessoa — independente de conhecimento técnico — extraia insights valiosos de planilhas e datasets com a mesma qualidade de um analista profissional.</p>
          <p className="text-zinc-700 leading-relaxed">Para empresas e profissionais que tomam decisões baseadas em dados mas não têm equipe técnica, o Julius AI é um diferencial significativo no dia a dia.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
