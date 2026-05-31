import Link from "next/link";

export default function SimilarTools() {
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <h2 className="text-2xl font-bold text-black mb-6">Ferramentas Similares</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { nome: "Leonardo AI", url: "/ferramentas/leonardo-ai", desc: "Plataforma de geração de imagens com IA para criação de arte, assets de jogos e conteúdo visual profissional." },
          { nome: "Recraft", url: "/ferramentas/recraft", desc: "Plataforma de IA para criar imagens fotorrealistas, vetores SVG editáveis e assets de design com estilos personalizados." },
          { nome: "Ideogram", url: "/ferramentas/ideogram", desc: "Gerador de imagens com IA especializado em texto visual preciso e tipografia integrada nas imagens." },
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
