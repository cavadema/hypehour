import Link from "next/link";

const ferramentas = [
  { nome: "Cursor", link: "/ferramentas/cursor", preco: "Freemium / Pro $20/mês", gratis: "Sim", tipo: "IDE com IA para vibe coding", melhorPara: "Devs que querem descrever o que querem e ver o código surgir no próprio editor com contexto do projeto" },
  { nome: "Replit AI", link: "/ferramentas/replit", preco: "Freemium / Core $20/mês", gratis: "Sim", tipo: "IDE online com IA e deploy instantâneo", melhorPara: "Prototipar e publicar apps completos no browser sem configuração de ambiente local" },
  { nome: "Bolt.new", link: "/ferramentas/bolt-new", preco: "Freemium / Pro $20/mês", gratis: "Sim", tipo: "Gerador de apps full-stack em uma mensagem", melhorPara: "Criar aplicações web completas a partir de uma descrição em texto, com deploy em minutos" },
  { nome: "v0 (Vercel)", link: "/ferramentas/v0", preco: "Freemium / Pro $20/mês", gratis: "Sim", tipo: "Gerador de UI com shadcn/Tailwind", melhorPara: "Desenvolvedores que querem componentes React prontos gerados por IA com código limpo e editável" },
  { nome: "Lovable", link: "/ferramentas/lovable", preco: "Freemium / Pro $20/mês", gratis: "Sim", tipo: "Gerador de apps React por prompt", melhorPara: "Não-desenvolvedores e fundadores que querem criar MVPs sem escrever código manualmente" },
  { nome: "GitHub Copilot", preco: "Free / Pro $10/mês", gratis: "Sim", tipo: "Completação de código inline no IDE", melhorPara: "Devs que preferem trabalhar no próprio editor com sugestões contextuais linha por linha" },
  { nome: "Windsurf", preco: "Freemium / Pro $15/mês", gratis: "Sim", tipo: "IDE com agente Cascade (OpenAI)", melhorPara: "Desenvolvedores que querem um agente que navega e edita múltiplos arquivos autonomamente" },
  { nome: "Trae", preco: "Gratuito", gratis: "Sim", tipo: "IDE com IA da ByteDance", melhorPara: "Devs que querem alternativa gratuita ao Cursor com acesso a modelos premium incluídos" },
  { nome: "Warp AI", preco: "Free / Pro $15/mês", gratis: "Sim", tipo: "Terminal moderno com IA integrada", melhorPara: "Desenvolvedores que trabalham muito no terminal e querem IA para comandos e erros" },
  { nome: "Google AI Studio", preco: "Gratuito (com limites de taxa)", gratis: "Sim", tipo: "Plataforma de prototipagem com Gemini", melhorPara: "Devs que querem experimentar e prototipar com os modelos Gemini mais recentes sem custo" },
  { nome: "Gemini Code Assist", preco: "Free individual / Enterprise $19/mês", gratis: "Sim", tipo: "Assistente de código Google no IDE", melhorPara: "Times no Google Cloud que querem assistente de código integrado ao ecossistema Google" },
  { nome: "Aider", preco: "Gratuito (open source + custo de API)", gratis: "Sim", tipo: "Pair programming via CLI com Git", melhorPara: "Devs experientes que preferem terminal e querem controle total sobre modelo e commits automáticos" },
  { nome: "Continue.dev", preco: "Gratuito (open source + custo de API)", gratis: "Sim", tipo: "Extensão open source para VS Code/JetBrains", melhorPara: "Devs que querem alternativa open source ao Copilot com suporte a modelos locais e sem telemetria" },
];

export default function ComparativoFerramentas() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Comparativo das principais ferramentas</h2>
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3 font-semibold">Ferramenta</th>
              <th className="px-4 py-3 font-semibold">Preço</th>
              <th className="px-4 py-3 font-semibold">Grátis?</th>
              <th className="px-4 py-3 font-semibold hidden md:table-cell">Tipo</th>
              <th className="px-4 py-3 font-semibold hidden lg:table-cell">Melhor para</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {ferramentas.map((f, i) => (
              <tr key={i} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-medium text-gray-900">
                  <div>{f.nome}</div>
                  {f.link && (
                    <Link href={f.link} className="text-xs text-blue-600 hover:underline">
                      Ver review completo →
                    </Link>
                  )}
                </td>
                <td className="px-4 py-3 text-gray-600">{f.preco}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${f.gratis === "Sim" ? "bg-green-100 text-green-700" : f.gratis === "Não" ? "bg-red-100 text-red-700" : "bg-yellow-100 text-yellow-700"}`}>{f.gratis}</span>
                </td>
                <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{f.tipo}</td>
                <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{f.melhorPara}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">* Preços aproximados. Consulte o site oficial de cada ferramenta para valores atualizados.</p>
    </div>
  );
}
