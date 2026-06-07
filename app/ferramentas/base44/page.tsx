import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "Base44 - Crie Aplicações Web Completas com IA",
  description: "Conheça o Base44: plataforma de vibe coding com IA que transforma descrições em aplicações web completas com frontend, backend, banco de dados e autenticação. Veja vantagens e para quem é indicado.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/base44" },
  openGraph: {
    title: "Base44 - Crie Aplicações Web Completas com IA",
    description: "Crie aplicações web completas com frontend, backend e banco de dados apenas descrevendo o que quer — com o Base44.",
    url: "https://www.hypehour.com.br/ferramentas/base44",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Base44 - Crie Aplicações Web Completas com IA",
    description: "Apps web completos com backend e banco de dados apenas descrevendo — Base44.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function Base44Page() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/base44#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br/" },
          { "@type": "ListItem", "position": 2, "name": "IA para Vibe Coding", "item": "https://www.hypehour.com.br/ia-para-vibe-coding" },
          { "@type": "ListItem", "position": 3, "name": "Base44", "item": "https://www.hypehour.com.br/ferramentas/base44" },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/base44#software",
        "name": "Base44",
        "description": "Plataforma de vibe coding com IA que cria aplicações web completas com backend, banco de dados e autenticação a partir de prompts de texto.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "url": "https://base44.com",
        "mainEntityOfPage": "https://www.hypehour.com.br/ferramentas/base44",
        "creator": { "@type": "Organization", "name": "Base44" },
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
          <Link href="/ia-para-vibe-coding" className="hover:text-black transition">IA para Vibe Coding</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Base44</span>
        </nav>

        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">B</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Base44</h1>
            <p className="text-lg text-zinc-700">Crie aplicações web completas com IA — frontend, backend e banco de dados</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O Base44 é uma plataforma de vibe coding com inteligência artificial que permite criar aplicações web completas sem escrever código. Diferente de ferramentas que geram apenas interfaces, o Base44 entrega o stack completo: frontend, backend, banco de dados e autenticação de usuários — tudo funcionando a partir de uma descrição em linguagem natural.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Ideal para empreendedores, product managers e profissionais não-técnicos que querem criar ferramentas internas, MVPs e aplicações funcionais sem depender de uma equipe de desenvolvimento.</p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Base44?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">Base44 é uma das plataformas de no-code/vibe coding mais completas do mercado por uma razão: ela não para no frontend. Enquanto muitos concorrentes geram interfaces bonitas que precisam ser conectadas manualmente a um backend, o Base44 cria toda a infraestrutura da aplicação — incluindo banco de dados real, lógica de servidor e sistema de login.</p>
          <p className="text-zinc-700 leading-relaxed">O resultado é uma aplicação funcional de verdade, não um protótipo estático. Isso permite ir da ideia ao produto em horas, com uma URL pública pronta para compartilhar e usar.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[
              { n: 1, titulo: "Descreva sua aplicação", texto: "Digite em linguagem natural o que você quer criar — um CRM, um dashboard, uma ferramenta interna, um portal de clientes. Quanto mais detalhado, melhor o resultado." },
              { n: 2, titulo: "IA gera o stack completo", texto: "O Base44 cria o frontend, as APIs de backend, o schema do banco de dados e o sistema de autenticação de forma integrada e coerente." },
              { n: 3, titulo: "Revise e ajuste", texto: "Visualize a aplicação funcionando, peça ajustes em linguagem natural e refine até o resultado estar alinhado com o que você precisa." },
              { n: 4, titulo: "Publique com um clique", texto: "Deploy automático com URL pública pronta para compartilhar com usuários, clientes ou investidores imediatamente." },
            ].map(({ n, titulo, texto }) => (
              <div key={n} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">{n}</div>
                <div><h3 className="text-xl font-semibold text-black mb-2">{titulo}</h3><p className="text-zinc-700">{texto}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Ferramentas internas de empresa", "CRMs simples", "Dashboards de dados", "Portais de clientes", "MVPs de SaaS", "Sistemas de gestão", "Aplicações de produtividade", "Protótipos funcionais", "Plataformas de agendamento", "Gerenciadores de tarefas", "Ferramentas de onboarding", "Apps para times internos"].map((item, i) => (
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[
              { titulo: "Geração de aplicação full-stack", texto: "Cria frontend, backend e banco de dados de forma integrada a partir de um único prompt, entregando uma aplicação funcional completa." },
              { titulo: "Banco de dados integrado", texto: "Cria automaticamente a estrutura de banco de dados necessária para a aplicação, sem necessidade de configuração manual de tabelas ou schemas." },
              { titulo: "Autenticação de usuários", texto: "Sistema de login e cadastro gerado automaticamente, com gerenciamento de sessões e controle de acesso." },
              { titulo: "Deploy automático", texto: "Publicação instantânea com URL pública sem precisar configurar servidores, domínios ou plataformas de hospedagem externas." },
              { titulo: "Ajustes por linguagem natural", texto: "Refine e expanda a aplicação continuamente descrevendo em texto o que quer mudar — sem necessidade de editar código manualmente." },
              { titulo: "Editor de código integrado", texto: "Para quem tem conhecimento técnico, é possível visualizar e editar o código gerado pela IA diretamente na plataforma." },
            ].map(({ titulo, texto }, i) => (
              <div key={i} className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-black mb-3">{titulo}</h3>
                <p className="text-zinc-700">{texto}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Stack completo — frontend, backend e banco de dados gerados juntos, sem lacunas",
              "Autenticação nativa — sistema de login pronto sem configuração extra",
              "Deploy instantâneo — URL pública em segundos após a criação",
              "Sem necessidade de código — cria aplicações funcionais apenas com descrições em texto",
              "Iteração rápida — ajuste a aplicação em tempo real com prompts simples",
              "Ideal para validação — sai da ideia para o produto funcional em horas",
            ].map((a, i) => (
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                <span className="text-black font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-zinc-700">{a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {[
              "Aplicações muito complexas podem precisar de ajustes manuais de código",
              "Plano gratuito com limites de uso — projetos intensivos exigem upgrade",
              "Menor controle sobre infraestrutura em comparação a desenvolvimento tradicional",
              "Interface em inglês — sem versão em português",
              "Escalabilidade limitada para aplicações de alto tráfego sem customização",
            ].map((d, i) => (
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-zinc-700">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Base44?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Empreendedores criando MVPs", "Product managers sem equipe técnica", "Startups em fase de validação", "Profissionais criando ferramentas internas", "Quem quer testar ideias sem custo de desenvolvimento"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Aplicações de alto tráfego e escala", "Projetos com requisitos de segurança muito rígidos", "Quem precisa de controle total sobre infraestrutura", "Sistemas legados complexos com integrações extensas"].map((item, i) => (
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Crie sua aplicação agora</h2>
          <p className="text-lg mb-6 text-zinc-300">Acesse o Base44 e transforme sua ideia em uma aplicação web completa em minutos</p>
          <a href="https://base44.com" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar Base44 →</a>
        </section>

        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O Base44 representa o que há de mais avançado em vibe coding: não para na interface. Ao entregar o stack completo com backend real, banco de dados e autenticação, a plataforma elimina o gap entre "ideia" e "produto funcional" de forma mais completa do que a maioria dos concorrentes.</p>
          <p className="text-zinc-700 leading-relaxed">Para quem quer criar uma ferramenta interna, validar um MVP ou construir um produto simples sem equipe técnica, o Base44 é um dos caminhos mais diretos da descrição à aplicação em produção.</p>
        </section>

        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
