import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "Lovable - Gerador de Apps com IA | Análise e Review",
  description: "Conheça o Lovable: ferramenta de IA para criar aplicações completas (front-end, back-end, testes) em minutos. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas/lovable",
  },
};

export default function LovablePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.hypehour.com.br/ferramentas/lovable#breadcrumb",
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
            "name": "IA para Vibe Coding",
            "item": "https://www.hypehour.com.br/ia-para-vibe-coding"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Lovable",
            "item": "https://www.hypehour.com.br/ferramentas/lovable"
          }
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.hypehour.com.br/ferramentas/lovable#software",
        "name": "Lovable",
        "description": "Lovable é uma ferramenta de vibe coding com inteligência artificial que ajuda desenvolvedores a criar, editar e melhorar código de forma rápida, intuitiva e criativa.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "Web",
        "url": "https://lovable.dev",
        "creator": {
          "@type": "Organization",
          "name": "Lovable"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "category": "Freemium"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.hypehour.com.br/ferramentas/lovable#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "O que é o Lovable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Lovable é uma ferramenta de vibe coding que usa inteligência artificial para ajudar a criar código de forma rápida, intuitiva e criativa."
            }
          },
          {
            "@type": "Question",
            "name": "Para que serve o Lovable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O Lovable serve para gerar, editar e melhorar código a partir de linguagem natural, focando em produtividade e fluxo criativo."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable é uma IA para programação?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. O Lovable é uma IA voltada para programação, com foco em vibe coding e desenvolvimento assistido."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable é indicado para iniciantes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. O Lovable facilita a criação de código mesmo para quem está começando a programar."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable funciona para desenvolvedores experientes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Ele acelera tarefas repetitivas e ajuda na prototipação rápida."
            }
          },
          {
            "@type": "Question",
            "name": "Quais linguagens o Lovable suporta?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O Lovable suporta múltiplas linguagens populares, dependendo do contexto do projeto."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable cria código do zero?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Você pode descrever o que deseja e a IA gera o código inicial."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable ajuda a corrigir bugs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Ele analisa trechos de código e sugere correções e melhorias."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable funciona via navegador ou IDE?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Geralmente funciona via interface web, com foco em simplicidade e fluxo."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable é gratuito?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O Lovable pode oferecer plano gratuito ou testes, além de planos pagos."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable é bom para vibe coding?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Ele é projetado justamente para manter o fluxo criativo enquanto você programa."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable pode substituir um programador?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não. Ele é uma ferramenta de apoio, não um substituto humano."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable é seguro para projetos reais?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, desde que o código seja revisado antes do uso em produção."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable é usado em projetos profissionais?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Pode ser usado para protótipos, MVPs e até partes de projetos reais."
            }
          },
          {
            "@type": "Question",
            "name": "Vale a pena usar o Lovable para programar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Ele aumenta produtividade e reduz fricção no desenvolvimento."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable é melhor que ChatGPT para programar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depende do uso, mas o Lovable é mais focado em vibe coding e fluxo criativo."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable substitui o GitHub Copilot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não exatamente. Ele oferece uma experiência diferente, mais conversacional."
            }
          },
          {
            "@type": "Question",
            "name": "Dá para criar projetos completos com o Lovable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, especialmente MVPs e protótipos rápidos."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable precisa de conhecimento técnico?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não necessariamente. Ele aceita comandos em linguagem natural."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable gera código limpo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Na maioria dos casos, sim, mas revisão humana é recomendada."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable funciona para front-end e back-end?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Ele pode auxiliar em ambos os contextos."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable é bom para vibe coding diário?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Ele foi pensado para manter fluidez no desenvolvimento."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable funciona offline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não. Ele depende de conexão com a internet."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable aprende com meu código?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ele pode se adaptar ao contexto do projeto durante a sessão."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable é indicado para freelancers?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Ajuda a entregar projetos mais rápido."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable é bom para startups?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. É muito usado para prototipação rápida e MVPs."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable suporta frameworks modernos?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, conforme o stack solicitado pelo usuário."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable gera código pronto para produção?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ele gera código funcional, mas ajustes finais são recomendados."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable é uma ferramenta de vibe coding brasileira?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Depende da origem da empresa, mas é usada globalmente."
            }
          },
          {
            "@type": "Question",
            "name": "O Lovable vale a pena em comparação com outras IAs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, especialmente se o foco for vibe coding e rapidez."
            }
          }
        ]
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
          <Link href="/ia-para-vibe-coding" className="hover:text-black transition">IA para Vibe Coding</Link>
          <span className="text-zinc-400">/</span>
          <span className="text-black font-medium">Lovable</span>
        </nav>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
            L
          </div>
          <div>
            <h1 className="text-4xl font-bold text-black mb-2">Lovable</h1>
            <p className="text-lg text-zinc-700">Crie aplicações completas com IA em minutos</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
          <p className="text-lg text-zinc-700 leading-relaxed mb-4">
            O Lovable é um criador de software movido a inteligência artificial que revoluciona a forma como desenvolvemos aplicações. Em vez de horas ou dias de codificação, você pode descrever sua ideia em linguagem natural e a ferramenta gera front-end, back-end, banco de dados e testes automaticamente.
          </p>
          <p className="text-lg text-zinc-700 leading-relaxed">
            Perfeito para founders, product managers e desenvolvedores que precisam iterar rápido, validar hipóteses e colocar produtos no ar em tempo recorde.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">O que é o Lovable?</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Lovable é uma plataforma de IA que combina geração automática de código com workflows de produto colaborativos. Diferente de outras ferramentas, ela não apenas escreve código — ela entende requisitos em linguagem natural, cria toda a arquitetura, escreve testes, gera documentação e mantém um histórico versionado para revisões e ajustes rápidos.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            A plataforma inclui critérios de aceitação automáticos, testes unitários e integração com Git, permitindo que você mantenha controle total sobre o código gerado e colabore com seu time em tempo real.
          </p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Descreva sua ideia</h3>
                <p className="text-zinc-700">Digite um prompt descrevendo a aplicação, público-alvo, features principais e integrações desejadas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">IA gera o código</h3>
                <p className="text-zinc-700">O Lovable cria UI responsiva, APIs, banco de dados, testes e critérios de aceitação automaticamente.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Revise e itere</h3>
                <p className="text-zinc-700">Veja o preview em tempo real, edite via chat ou código, e regenere versões conforme feedback.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Deploy e escale</h3>
                <p className="text-zinc-700">Faça push para Git, rodei testes, e publique em produção com um clique.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Reduz semanas de desenvolvimento para minutos — ideal para MVPs e validação de hipóteses",
              "Gera código completo, testado e documentado — economiza horas de work repetitivo",
              "Permite colaboração fluida entre PMs, devs e stakeholders no mesmo painel",
              "Mantém histórico de versões e permite ajustes rápidos sem perder controle",
              "Inclui testes automáticos, critérios de aceite e padrões de qualidade integrados",
              "Código legível e extensível — você pode customizar manualmente quando necessário",
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
              "Requer revisão técnica — você não deve usar o código diretamente em produção sem validar segurança e padrões",
              "Projetos muito específicos ou complexos podem precisar de ajustes manuais significativos",
              "Custos escalam com uso frequente — cada geração consome créditos de API",
              "Dependência de qualidade do prompt — quanto melhor a descrição, melhor o resultado",
              "Ainda em evolução — atualizações frequentes podem afetar workflows estabelecidos",
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
          <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Lovable?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Founders testando ideias rápido</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Product managers prototipando features</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Desenvolvedores acelerando entrega</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Agências entregando múltiplos projetos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-black">→</span>
                  <span className="text-zinc-700">Times pequenos sem dev sênior</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
              <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Apps com requisitos de segurança extrema</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Sistemas legados complexos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Quem quer código 100% customizado</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Projetos com zero orçamento</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-zinc-700">✕</span>
                  <span className="text-zinc-700">Times sem tech-savvy para validar código</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Pronto para criar seu próximo app?</h2>
          <p className="text-lg mb-6 text-zinc-300">Teste o Lovable gratuitamente e gere sua primeira aplicação em minutos</p>
          <a
            href="https://lovable.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
          >
            Acessar Lovable →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t border-zinc-200 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            O Lovable é uma ferramenta transformadora para quem precisa iterar rápido e validar ideias sem queimar orçamento em desenvolvimento. Se você é um founder, PM ou developer que valoriza velocidade e quer reduzir o tempo entre ideia e MVP, vale muito a pena testar.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            O código gerado é de qualidade profissional e pode ser usado em produção com as devidas revisões de segurança e padrões internos. Combine Lovable com sua expertise técnica e você terá uma máquina de criar produtos.
          </p>
        </section>

        {/* FAQ */}
        <FAQSection />
      </div>
    </main>
  );
}
