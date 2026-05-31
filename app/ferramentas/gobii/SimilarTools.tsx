import Link from "next/link";

export default function SimilarTools() {
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <h2 className="text-2xl font-bold text-black mb-6">Ferramentas Similares</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { nome: "Cursor", url: "/ferramentas/cursor", desc: "Editor de código com IA que entende o contexto do projeto para sugestões e geração de código precisas." },
          { nome: "Chatbase", url: "/ferramentas/chatbase", desc: "Plataforma para criar chatbots de IA treinados com dados da sua empresa para atendimento e suporte." },
          { nome: "Lovable", url: "/ferramentas/lovable", desc: "Plataforma de desenvolvimento com IA que gera aplicações web completas a partir de descrições em linguagem natural." },
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
