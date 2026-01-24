import Link from "next/link";

const similarTools = [
    {
        nome: "Speechify",
        descricao: "Plataforma líder para conversão de texto em fala e transcrição com vozes naturais de alta qualidade.",
        url: "/ferramentas/speechify"
    },
    {
        nome: "Wisprflow",
        descricao: "Ideal para quem busca ditado rápido e integração profunda com workflows de produtividade.",
        url: "/ferramentas/wisprflow"
    },
    {
        nome: "Vidnoz",
        descricao: "Ferramenta gratuita para criar vídeos com avatares de IA e clonagem de voz.",
        url: "/ferramentas/vidnoz"
    }
];

export default function SimilarTools() {
    return (
        <section className="mt-12 pt-10 border-t border-zinc-200">
            <h2 className="text-2xl font-bold mb-8 text-black">Ferramentas similares</h2>
            <div className="grid gap-6 sm:grid-cols-3">
                {similarTools.map((tool) => (
                    <Link
                        key={tool.nome}
                        href={tool.url}
                        className="block bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-zinc-200"
                    >
                        <h3 className="font-bold text-lg mb-2 text-black">{tool.nome}</h3>
                        <p className="text-zinc-600 text-sm leading-relaxed">{tool.descricao}</p>
                        <div className="mt-4 text-zinc-400 font-medium text-sm flex items-center gap-1">
                            Ver review <span>→</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
