import Link from "next/link";

const similarTools = [
    { nome: "Flowgpt", descricao: "Plataforma de descoberta e criação de prompts de IA para múltiplos casos de uso.", url: "/ferramentas/flowgpt" },
    { nome: "Chatgot", descricao: "Acesse múltiplos modelos de IA em uma só interface de chat.", url: "/ferramentas/chatgot" },
    { nome: "Chatbase", descricao: "Crie chatbots de IA treinados com seu próprio conteúdo para atendimento.", url: "/ferramentas/chatbase" },
];

export default function SimilarTools() {
    return (
        <section className="mt-12 pt-10 border-t border-zinc-200">
            <h2 className="text-2xl font-bold mb-8 text-black">Ferramentas similares</h2>
            <div className="grid gap-6 sm:grid-cols-3">
                {similarTools.map((tool) => (
                    <Link key={tool.nome} href={tool.url} className="block bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border border-zinc-200">
                        <h3 className="font-bold text-lg mb-2 text-black">{tool.nome}</h3>
                        <p className="text-zinc-600 text-sm leading-relaxed">{tool.descricao}</p>
                        <div className="mt-4 text-zinc-400 font-medium text-sm flex items-center gap-1">Ver review <span>→</span></div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
