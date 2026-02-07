import Link from "next/link";

const similarTools = [
    {
        nome: "Invideo",
        descricao: "Plataforma de criação de vídeos com IA que transforma texto em vídeos profissionais em minutos.",
        url: "/ferramentas/invideo"
    },
    {
        nome: "Kapwing",
        descricao: "Editor de vídeo online assistido por IA que facilita a criação para redes sociais.",
        url: "/ferramentas/kapwing"
    },
    {
        nome: "Clipchamp",
        descricao: "Editor de vídeo da Microsoft com recursos de IA integrados para criação rápida de conteúdo.",
        url: "/ferramentas/clipchamp"
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
