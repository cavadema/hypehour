import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Poly.ai - Assistente de Voz com IA para Atendimento ao Cliente",
  description: "Conheça o Poly.ai: plataforma de atendimento ao cliente com assistente de voz inteligente que automatiza chamadas e interações digitais com naturalidade. Veja vantagens, desvantagens e para quem é indicado.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/poly-ai",
  },
  openGraph: {
    title: "Poly.ai - Assistente de Voz com IA para Atendimento ao Cliente",
    description: "Conheça o Poly.ai: plataforma de atendimento ao cliente com assistente de voz inteligente que automatiza chamadas e interações digitais com naturalidade.",
    url: "https://www.hypehour.com.br/ferramentas/poly-ai",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Poly.ai - Assistente de Voz com IA para Atendimento ao Cliente",
    description: "Assistente de voz com IA para automatizar o atendimento ao cliente em call centers e canais digitais.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function PolyAIPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
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
        "@id": "https://www.hypehour.com.br/ferramentas/poly-ai#webpage",
        "url": "https://www.hypehour.com.br/ferramentas/poly-ai",
        "name": "Poly.ai - Assistente de Voz com IA para Atendimento ao Cliente",
        "description": "Conheça o Poly.ai: plataforma de atendimento ao cliente com assistente de voz inteligente que automatiza chamadas e interações digitais com naturalidade. Veja vantagens, desvantagens e para quem é indicado.",
        "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
        "breadcrumb": { "@id": "https://www.hypehour.com.br/ferramentas/poly-ai#breadcrumb" },
        "datePublished": "2025-11-19",
        "dateModified": "2026-07-04",
        "inLanguage": "pt-BR",
        "mainEntity": { "@id": "https://www.hypehour.com.br/ferramentas/poly-ai#software" },
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/poly-ai#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.hypehour.com.br/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "IA para Atendimento",
            "item": "https://www.hypehour.com.br/ia-para-atendimento"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Poly.ai",
            "item": "https://www.hypehour.com.br/ferramentas/poly-ai"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/poly-ai#software",
        "name": "Poly.ai",
        "description": "Assistente de voz com IA para atendimento ao cliente por telefone e canais digitais, com capacidade de resolver solicitações de forma autônoma.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://poly.ai/",
        "mainEntityOfPage": { "@id": "https://www.hypehour.com.br/ferramentas/poly-ai#webpage" },
        "image": "https://www.hypehour.com.br/logo.png",
        "featureList": ["Configuração e treinamento","Integração com sistemas","Atendimento autônomo","Transferência inteligente","Voz conversacional natural","Resolução autônoma de solicitações"],
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD", "description": "Plano gratuito disponível" },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "1149",
        },
        "creator": {
          "@type": "Organization",
          "name": "PolyAI"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-atendimento" className="hover:text-black transition">IA para Atendimento</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Poly.ai</span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            P
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Poly.ai</h1>
            <p className="text-lg text-zinc-700">Atendimento ao cliente por voz com inteligência artificial</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Poly.ai é uma plataforma de atendimento ao cliente com assistente de voz baseado em inteligência artificial. A solução permite que empresas automatizem chamadas telefônicas e interações digitais com naturalidade, resolvendo solicitações dos clientes sem intervenção humana na maioria dos casos.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Ideal para call centers, centrais de atendimento e empresas com alto volume de chamadas que buscam reduzir custos operacionais, eliminar filas de espera e melhorar a experiência do cliente com respostas rápidas e consistentes.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Poly.ai?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Poly.ai é uma empresa britânica especializada em assistentes de voz conversacionais para atendimento ao cliente. A plataforma usa modelos de linguagem avançados combinados com síntese de voz natural para criar uma experiência de atendimento indistinguível de um agente humano em muitas situações.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            O sistema é treinado especificamente para cada empresa, aprendendo os produtos, serviços, políticas e fluxos de atendimento. Isso permite que o assistente resolva de forma autônoma as solicitações mais comuns, transferindo apenas os casos complexos para agentes humanos.
          </p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">1</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Configuração e treinamento</h3>
                <p className="text-zinc-700">A equipe do Poly.ai trabalha com a empresa para entender fluxos de atendimento, políticas e dados, treinando o assistente para o contexto específico do negócio.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">2</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Integração com sistemas</h3>
                <p className="text-zinc-700">O assistente é integrado ao CRM, sistema de telefonia e bases de dados da empresa, permitindo acesso a informações de clientes em tempo real.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">3</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Atendimento autônomo</h3>
                <p className="text-zinc-700">O assistente atende as chamadas de forma natural, entende o problema do cliente e resolve a solicitação com base nas integrações e regras configuradas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">4</div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Transferência inteligente</h3>
                <p className="text-zinc-700">Quando necessário, o assistente transfere a chamada para o agente humano mais adequado, com resumo completo da interação.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Para que serve */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Automação de atendimento telefônico",
              "Redução de filas de espera",
              "Atendimento 24 horas sem custo extra",
              "Resolução de FAQs por voz",
              "Agendamento e confirmação de serviços",
              "Verificação de status de pedidos",
              "Cancelamentos e alterações de contrato",
              "Cobranças e segunda via de boleto",
              "Suporte a clientes em escala",
              "Integração com CRM em tempo real",
              "Análise de qualidade de atendimento",
              "Redução de custo operacional"
            ].map((item, index) => (
              <div key={index} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                <p className="text-zinc-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Principais funcionalidades */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Voz conversacional natural</h3>
              <p className="text-zinc-700">Síntese de voz de alta qualidade com entonação natural, pausas corretas e capacidade de entender variações de sotaque e linguagem informal.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Resolução autônoma de solicitações</h3>
              <p className="text-zinc-700">O assistente resolve a maioria das solicitações sem intervenção humana, com taxa de contenção que varia conforme a complexidade do negócio.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Integração com sistemas empresariais</h3>
              <p className="text-zinc-700">Conecta-se a CRMs, ERPs, plataformas de e-commerce e sistemas de telefonia via API para acesso a dados em tempo real.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Análise e relatórios</h3>
              <p className="text-zinc-700">Dashboard com métricas de taxa de resolução, satisfação do cliente, tempo médio de atendimento e oportunidades de melhoria.</p>
            </div>
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Transferência contextual para humanos</h3>
              <p className="text-zinc-700">Quando transfere para um agente humano, passa todo o contexto da conversa para evitar repetição e melhorar a experiência do cliente.</p>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Atendimento 24/7 sem custo por hora extra — disponibilidade total sem escalonamento de equipe",
              "Alta taxa de contenção — resolve a maioria das chamadas sem agente humano",
              "Escalabilidade imediata — suporta picos de demanda sem degradação",
              "Redução de custos operacionais — menor dependência de grandes equipes de atendimento",
              "Experiência consistente — todo cliente recebe o mesmo nível de atendimento",
              "Integração profunda com sistemas existentes — sem necessidade de substituir infraestrutura"
            ].map((advantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
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
              "Implementação complexa — requer tempo de treinamento e integração com sistemas internos",
              "Custo elevado — voltado para empresas de médio e grande porte",
              "Limitações em situações muito complexas — casos incomuns ainda precisam de humanos",
              "Necessidade de manutenção contínua — precisa de atualização quando produtos ou políticas mudam",
              "Possível resistência dos clientes — alguns preferem atendimento humano de imediato"
            ].map((disadvantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{disadvantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para quem é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Poly.ai?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {[
                  "Empresas com alto volume de chamadas",
                  "Call centers buscando automação",
                  "Negócios de saúde, hospitalidade e varejo",
                  "Empresas com atendimento 24h",
                  "Organizações que buscam reduzir custo operacional"
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
                  "Pequenas empresas com volume baixo de chamadas",
                  "Negócios com atendimento altamente personalizado",
                  "Empresas sem infraestrutura para integração de API",
                  "Setores com regulamentações muito rígidas de comunicação",
                  "Quem busca solução rápida sem período de implementação"
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
          <h2 className="text-3xl font-bold mb-4">Automatize seu atendimento ao cliente</h2>
          <p className="text-lg mb-6 text-zinc-300">Conheça o Poly.ai e descubra como a IA pode transformar seu call center</p>
          <a
            href="https://poly.ai/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar Poly.ai →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Poly.ai é uma solução robusta para empresas que precisam automatizar o atendimento ao cliente por voz em escala. Com alta taxa de contenção, integração profunda com sistemas existentes e voz natural, a plataforma representa um salto significativo em relação às URA tradicionais.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Se sua empresa lida com grande volume de chamadas e busca reduzir custos sem comprometer a qualidade do atendimento, o Poly.ai merece uma avaliação séria.
          </p>
        </section>

        <FAQSection />


        {/* Ferramentas Similares */}

        <SimilarTools />
      </div>
    </main>
  );
}
