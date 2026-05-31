import Link from "next/link";

export default function SimilarTools() {
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <h2 className="text-2xl font-bold text-black mb-6">Ferramentas Similares</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { nome: "Excelmatic", url: "/ferramentas/excelmatic", desc: "Gerador de fórmulas e automação para Excel com inteligência artificial, simplificando tarefas complexas de planilha." },
          { nome: "Julius AI", url: "/ferramentas/julius-ai", desc: "Assistente de análise de dados que responde perguntas sobre planilhas em linguagem natural, gerando gráficos automaticamente." },
          { nome: "Grafana", url: "/ferramentas/grafana", desc: "Plataforma de observabilidade e visualização de dados com dashboards avançados e alertas inteligentes." },
        ].map((t) => (
          <Link key={t.nome} href={t.url} className="p-5 bg-white border border-zinc-200 rounded-xl shadow-sm hover:shadow-md transition block">
            <h3 className="font-semibold text-black mb-2">{t.nome}</h3>
            <p className="text-zinc-600 text-sm">{t.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
