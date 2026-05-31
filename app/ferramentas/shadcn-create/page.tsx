import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
  title: "shadcn/ui Create - Gerador de Componentes UI com IA",
  description: "Conheça o shadcn/ui Create: ferramenta com IA para gerar componentes React personalizados baseados na biblioteca shadcn/ui a partir de descrições em linguagem natural. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: { canonical: "https://www.hypehour.com.br/ferramentas/shadcn-create" },
  openGraph: {
    title: "shadcn/ui Create - Gerador de Componentes UI com IA",
    description: "Gera componentes React personalizados baseados na biblioteca shadcn/ui a partir de descrições em linguagem natural.",
    url: "https://www.hypehour.com.br/ferramentas/shadcn-create",
    siteName: "Hypehour", images: [{ url: "https://www.hypehour.com.br/logo.png" }], locale: "pt_BR", type: "website",
  },
  twitter: { card: "summary_large_image", title: "shadcn/ui Create - Componentes UI com IA", description: "Gera componentes React shadcn/ui personalizados a partir de descrições em linguagem natural.", images: ["https://www.hypehour.com.br/logo.png"], creator: "@hypehourbr" },
};

export default function ShadcnCreatePage() {
  const schemaData = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "BreadcrumbList", "@id": "https://www.hypehour.com.br/ferramentas/shadcn-create#breadcrumb", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.hypehour.com.br/" }, { "@type": "ListItem", position: 2, name: "IA para Desenvolvedores", item: "https://www.hypehour.com.br/ia-para-desenvolvedores" }, { "@type": "ListItem", position: 3, name: "shadcn/ui Create", item: "https://www.hypehour.com.br/ferramentas/shadcn-create" }] },
      { "@type": "SoftwareApplication", "@id": "https://www.hypehour.com.br/ferramentas/shadcn-create#software", name: "shadcn/ui Create", description: "Ferramenta com IA para geração de componentes React personalizados baseados na biblioteca shadcn/ui, a partir de descrições em linguagem natural.", applicationCategory: "DeveloperApplication", operatingSystem: "Web", url: "https://ui.shadcn.com/create", mainEntityOfPage: "https://www.hypehour.com.br/ferramentas/shadcn-create", creator: { "@type": "Organization", name: "shadcn" } },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8fa]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-zinc-700 mb-8">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <span className="text-zinc-400">/</span>
          <Link href="/ia-para-desenvolvedores" className="hover:text-black transition">IA para Desenvolvedores</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">shadcn/ui Create</span>
        </nav>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">S</div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">shadcn/ui Create</h1>
            <p className="text-lg text-zinc-700">Gere componentes shadcn/ui personalizados com IA a partir de uma descrição</p>
          </div>
        </div>
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">O shadcn/ui Create é a funcionalidade de geração de componentes com IA integrada ao ecossistema oficial do shadcn/ui. Descreva o componente React que precisa — um formulário de login, uma tabela de preços, um card de produto — e a IA gera o código TSX completo seguindo as convenções da biblioteca.</p>
          <p className="text-lg text-zinc-700 leading-relaxed">Como parte do próprio shadcn/ui, o código gerado segue exatamente os padrões, componentes primitivos e configurações do Tailwind que a biblioteca usa, integrando perfeitamente em projetos existentes.</p>
        </div>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o shadcn/ui Create?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">shadcn/ui Create é a ferramenta oficial de geração de componentes com IA do shadcn/ui — a biblioteca de componentes React mais popular para projetos com Tailwind CSS. A ferramenta usa IA para gerar componentes completos que seguem os padrões do shadcn, prontos para copiar e colar no projeto.</p>
          <p className="text-zinc-700 leading-relaxed">Diferente de geradores genéricos, o shadcn/ui Create entende profundamente os primitivos da biblioteca (Radix UI), as convenções de tema via CSS variables e a estrutura de arquivos esperada, produzindo código que realmente se integra sem fricção.</p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            {[["1","Descreva o componente","Informe o que o componente deve fazer: 'tabela de preços com 3 planos', 'formulário de cadastro com validação', 'navbar responsiva'."],["2","IA gera o código TSX","O shadcn/ui Create produz o código React completo usando os componentes primitivos do shadcn e classes do Tailwind."],["3","Copie para o projeto","O código gerado está pronto para ser colado diretamente no projeto sem ajustes de imports ou estilos."],["4","Personalize se necessário","Ajuste cores, textos e comportamentos conforme a necessidade, com uma base sólida já estruturada."]].map(([n,t,d])=>(
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
            {["Formulários complexos","Tabelas de preços","Navbars e sidebars","Cards de produto","Dashboards e widgets","Modais e dialogs","Tabelas de dados","Landing page sections","Formulários de autenticação","Componentes de onboarding","Menus e dropdowns","Listas e grids de conteúdo"].map((item,i)=>(
              <div key={i} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition"><p className="text-zinc-700 text-sm">{item}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
          <div className="grid gap-6">
            {[["Geração nativa shadcn/ui","Código gerado usa os primitivos exatos do shadcn/ui (Button, Card, Input, Dialog, etc.) sem improvisações."],["Tailwind CSS correto","As classes Tailwind seguem as convenções e variáveis de tema do shadcn, garantindo consistência visual."],["TypeScript e tipagem","Componentes gerados incluem tipos TypeScript corretos para props e eventos."],["Acessibilidade integrada","Como herda dos primitivos Radix UI do shadcn, os componentes gerados já têm semântica e ARIA corretos."],["Dark mode compatível","Usa as variáveis CSS do shadcn para suporte automático ao dark mode sem código extra."],["Responsivo por padrão","Componentes gerados usam breakpoints do Tailwind para layout responsivo desde o início."]].map(([t,d])=>(
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
            {["Oficial do shadcn — código que segue exatamente os padrões da biblioteca","Zero fricção de integração — componentes prontos para colar sem ajustes de imports","Acessibilidade automática — herda os primitivos Radix com semântica correta","Dark mode gratuito — variáveis CSS do shadcn dão suporte automático","TypeScript nativo — tipos corretos sem trabalho extra","Responsivo desde o início — Tailwind breakpoints incluídos nos componentes"].map((v,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm"><span className="text-black font-bold text-lg flex-shrink-0">✓</span><p className="text-zinc-700">{v}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {["Exclusivo para shadcn/ui — não serve para outros sistemas de design ou bibliotecas","Requer revisão — componentes gerados podem precisar de ajustes para casos específicos do projeto","Lógica de negócio não incluída — a IA gera UI, não a lógica funcional por trás dos componentes","Componentes complexos — composições muito específicas podem exigir ajustes manuais significativos"].map((d,i)=>(
              <div key={i} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg"><span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span><p className="text-zinc-700">{d}</p></div>
            ))}
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o shadcn/ui Create?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                {["Desenvolvedores que já usam shadcn/ui em seus projetos","Times de frontend que querem acelerar a construção de UI","Indie hackers e solodevs que constroem MVPs rapidamente","Quem quer experimentar layouts sem passar tempo codando","Projetos Next.js com Tailwind CSS que usam shadcn"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-black">→</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                {["Projetos que usam Material UI, Chakra, Ant Design ou outros sistemas","Desenvolvedores que não trabalham com React/Next.js","Quem precisa de componentes com lógica de negócio complexa embutida"].map((item,i)=>(
                  <li key={i} className="flex gap-2"><span className="text-zinc-700">✕</span><span className="text-zinc-700">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Gere componentes shadcn/ui em segundos com IA</h2>
          <p className="text-lg mb-6 text-zinc-300">Experimente o shadcn/ui Create e construa sua UI mais rápido que nunca</p>
          <a href="https://ui.shadcn.com/create" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition">Acessar shadcn/ui Create →</a>
        </section>
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">O shadcn/ui Create é a resposta natural para a pergunta que todo desenvolvedor que usa a biblioteca já se fez: "como gero um componente dessa biblioteca mais rápido?". Por ser parte do ecossistema oficial, o código gerado é de uma qualidade e consistência que ferramentas externas não conseguem replicar.</p>
          <p className="text-zinc-700 leading-relaxed">Para qualquer desenvolvedor que usa shadcn/ui em projetos Next.js, é uma ferramenta que elimina o trabalho repetitivo de criar componentes básicos e deixa mais tempo para o que realmente diferencia o produto.</p>
        </section>
        <FAQSection />
        <SimilarTools />
      </div>
    </main>
  );
}
