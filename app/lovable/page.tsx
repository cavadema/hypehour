import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Lovable - Gerador de Apps com IA | Análise e Review",
  description: "Conheça o Lovable: ferramenta de IA para criar aplicações completas (front-end, back-end, testes) em minutos. Veja vantagens, desvantagens e se é ideal para você.",
  alternates: {
    canonical: "https://www.hypehour.com.br/lovable",
  },
};

export default function LovablePage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Voltar */}
        <Link href="/ia-para-vibe-coding" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition mb-8">
          <ArrowLeftIcon className="w-4 h-4" /> Voltar para IA para Vibe Coding
        </Link>

        {/* Header com logo e nome */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
            L
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Lovable</h1>
            <p className="text-lg text-gray-600">Crie aplicações completas com IA em minutos</p>
          </div>
        </div>

        {/* Introdução */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-10 border border-gray-200">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            O Lovable é um criador de software movido a inteligência artificial que revoluciona a forma como desenvolvemos aplicações. Em vez de horas ou dias de codificação, você pode descrever sua ideia em linguagem natural e a ferramenta gera front-end, back-end, banco de dados e testes automaticamente.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Perfeito para founders, product managers e desenvolvedores que precisam iterar rápido, validar hipóteses e colocar produtos no ar em tempo recorde.
          </p>
        </div>

        {/* O que é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">O que é o Lovable?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lovable é uma plataforma de IA que combina geração automática de código com workflows de produto colaborativos. Diferente de outras ferramentas, ela não apenas escreve código — ela entende requisitos em linguagem natural, cria toda a arquitetura, escreve testes, gera documentação e mantém um histórico versionado para revisões e ajustes rápidos.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A plataforma inclui critérios de aceitação automáticos, testes unitários e integração com Git, permitindo que você mantenha controle total sobre o código gerado e colabore com seu time em tempo real.
          </p>
        </section>

        {/* Como funciona */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Como funciona</h2>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Descreva sua ideia</h3>
                <p className="text-gray-700">Digite um prompt descrevendo a aplicação, público-alvo, features principais e integrações desejadas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">IA gera o código</h3>
                <p className="text-gray-700">O Lovable cria UI responsiva, APIs, banco de dados, testes e critérios de aceitação automaticamente.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Revise e itere</h3>
                <p className="text-gray-700">Veja o preview em tempo real, edite via chat ou código, e regenere versões conforme feedback.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deploy e escale</h3>
                <p className="text-gray-700">Faça push para Git, rodei testes, e publique em produção com um clique.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Vantagens</h2>
          <div className="grid gap-4">
            {[
              "Reduz semanas de desenvolvimento para minutos — ideal para MVPs e validação de hipóteses",
              "Gera código completo, testado e documentado — economiza horas de work repetitivo",
              "Permite colaboração fluida entre PMs, devs e stakeholders no mesmo painel",
              "Mantém histórico de versões e permite ajustes rápidos sem perder controle",
              "Inclui testes automáticos, critérios de aceite e padrões de qualidade integrados",
              "Código legível e extensível — você pode customizar manualmente quando necessário",
            ].map((advantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                <p className="text-gray-700">{advantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Desvantagens */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Desvantagens e considerações</h2>
          <div className="grid gap-4">
            {[
              "Requer revisão técnica — você não deve usar o código diretamente em produção sem validar segurança e padrões",
              "Projetos muito específicos ou complexos podem precisar de ajustes manuais significativos",
              "Custos escalam com uso frequente — cada geração consome créditos de API",
              "Dependência de qualidade do prompt — quanto melhor a descrição, melhor o resultado",
              "Ainda em evolução — atualizações frequentes podem afetar workflows estabelecidos",
            ].map((disadvantage, index) => (
              <div key={index} className="flex gap-3 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <span className="text-orange-600 font-bold text-lg flex-shrink-0">⚠</span>
                <p className="text-gray-700">{disadvantage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Para quem é */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Para quem é o Lovable?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">Founders testando ideias rápido</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">Product managers prototipando features</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">Desenvolvedores acelerando entrega</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">Agências entregando múltiplos projetos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">→</span>
                  <span className="text-gray-700">Times pequenos sem dev sênior</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-red-50 border border-red-200 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Não é ideal para:</h3>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-red-600">✕</span>
                  <span className="text-gray-700">Apps com requisitos de segurança extrema</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✕</span>
                  <span className="text-gray-700">Sistemas legados complexos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✕</span>
                  <span className="text-gray-700">Quem quer código 100% customizado</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✕</span>
                  <span className="text-gray-700">Projetos com zero orçamento</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✕</span>
                  <span className="text-gray-700">Times sem tech-savvy para validar código</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-white text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pronto para criar seu próximo app?</h2>
          <p className="text-lg mb-6 opacity-95">Teste o Lovable gratuitamente e gere sua primeira aplicação em minutos</p>
          <a
            href="https://lovable.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:shadow-lg transition"
          >
            Acessar Lovable →
          </a>
        </section>

        {/* Conclusão */}
        <section className="border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusão</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            O Lovable é uma ferramenta transformadora para quem precisa iterar rápido e validar ideias sem queimar orçamento em desenvolvimento. Se você é um founder, PM ou developer que valoriza velocidade e quer reduzir o tempo entre ideia e MVP, vale muito a pena testar.
          </p>
          <p className="text-gray-700 leading-relaxed">
            O código gerado é de qualidade profissional e pode ser usado em produção com as devidas revisões de segurança e padrões internos. Combine Lovable com sua expertise técnica e você terá uma máquina de criar produtos.
          </p>
        </section>
      </div>
    </main>
  );
}
