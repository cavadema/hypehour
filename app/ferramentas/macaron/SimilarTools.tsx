import Link from "next/link";

export default function SimilarTools() {
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <h2 className="text-2xl font-bold text-black mb-6">Ferramentas Similares</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { nome: "ChatGot", url: "/ferramentas/chatgot", desc: "Plataforma que reúne múltiplos assistentes de IA em uma interface única para comparar respostas de diferentes modelos." },
          { nome: "FlowGPT", url: "/ferramentas/flowgpt", desc: "Comunidade e marketplace de prompts de IA com acesso a assistentes especializados para diferentes casos de uso." },
          { nome: "Ollama", url: "/ferramentas/ollama", desc: "Plataforma para executar modelos de linguagem localmente no seu computador, com privacidade total e sem custos de API." },
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
