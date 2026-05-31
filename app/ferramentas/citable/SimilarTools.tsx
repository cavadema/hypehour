import Link from "next/link";

export default function SimilarTools() {
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <h2 className="text-2xl font-bold text-black mb-6">Ferramentas Similares</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { nome: "Writesonic", url: "/ferramentas/writesonic", desc: "Plataforma de geração de conteúdo com IA para blogs, anúncios, e-mails e redes sociais com múltiplos formatos." },
          { nome: "Rytr", url: "/ferramentas/rytr", desc: "Assistente de escrita com IA para criar conteúdo de marketing, e-mails e textos criativos rapidamente." },
          { nome: "Gamma", url: "/ferramentas/gamma", desc: "Plataforma de IA para criar apresentações, documentos e páginas web com design automático e conteúdo gerado por IA." },
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
