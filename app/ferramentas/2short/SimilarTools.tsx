import Link from "next/link";

const similarTools = [
    {
        nome: "OpusClip",
        descricao: "Transforma podcasts e vídeos longos em clipes para TikTok, Reels e Shorts.",
        url: "/ferramentas/opusclip"
    },
    {
        nome: "Kapwing",
        descricao: "Editor de vídeo online colaborativo com ferramentas de IA para legendas e cortes.",
        url: "/ferramentas/kapwing"
    },
    {
        nome: "VEED",
        descricao: "Editor de vídeo online que usa IA para legendar, editar e traduzir vídeos.",
        url: "/ferramentas/veed"
    }
];

export default function SimilarTools() {
    return (
        <section className="mt-12 pt-10 border-t border-zinc-200">
            <h2 className="text-2xl font-bold mb-8 text-black">Ferramentas similares</h2>
            <div className="grid gap-6 sm:grid-cols-3">
                {similarTools.map((tool) => {
                    const isInternal = tool.url.startsWith('/');
                    const content = (
                        <>
                            <h3 className="font-bold text-lg mb-2 text-black">{tool.nome}</h3>
                            <p className="text-zinc-600 text-sm leading-relaxed">{tool.descricao}</p>
                            <div className="mt-4 text-zinc-400 font-medium text-sm flex items-center gap-1">
                                Ver mais <span>→</span>
                            </div>
                        </>
                    );
                    const className = "block bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-zinc-200";

                    if (isInternal) {
                        return (
                            <Link key={tool.nome} href={tool.url} className={className}>
                                {content}
                            </Link>
                        );
                    }

                    return (
                        <a
                            key={tool.nome}
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={className}
                        >
                            {content}
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
