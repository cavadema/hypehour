import { SparklesIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const eventos = [
    {
        nome: "IA Conference Brasil 2026",
        url: "https://www.iaconferencebrasil.com.br/",
        descricao: "O maior evento de inteligência artificial do Brasil com especialistas, tendências e cases reais de IA.",
    },
    {
        nome: "AI Summit Brasil",
        url: "https://aisummit.org.br/",
        descricao: "Evento onde conhecimento se transforma em vantagem competitiva com conteúdo que inspira e conexões que transformam.",
    },
    {
        nome: "StartSe AI Festival",
        url: "https://pages.startse.com/ai-festival",
        descricao: "Festival de IA da StartSe reunindo inovação, tecnologia e networking.",
    },
    {
        nome: "The AI Conference",
        url: "https://aiconference.com/",
        descricao: "Conferência internacional moldando o futuro da IA com os melhores especialistas do mundo.",
    },
    {
        nome: "SuperAI Singapore",
        url: "https://www.superai.com/",
        descricao: "O principal evento global de IA em Singapura, 10-11 de junho de 2026, no Marina Bay Sands.",
    },
    {
        nome: "Lovable Day",
        url: "https://www.lovableday.com.br/",
        descricao: "Maior evento presencial da Lovable no mundo, acontece em Florianópolis.",
    },
    {
        nome: "AI Festival Brasil",
        url: "https://aifestival.com.br/",
        descricao: "Festival brasileiro de inteligência artificial com palestras, workshops e networking.",
    },
    {
        nome: "The AI Summit London",
        url: "https://london.theaisummit.com/",
        descricao: "De iniciantes a especialistas, evento para todos os estágios de adoção de IA em Londres.",
    },
    {
        nome: "AI4",
        url: "https://ai4.io/",
        descricao: "Conferência focada em aplicações práticas de IA para empresas e indústrias.",
    },
    {
        nome: "World Summit AI",
        url: "https://worldsummit.ai/",
        descricao: "O único AI Summit no mundo que realmente importa, reunindo o ecossistema global de IA em Amsterdã.",
    },
    {
        nome: "HumanX",
        url: "https://www.humanx.co/",
        descricao: "Conferência #1 de IA para tomadores de decisão e líderes da indústria, San Francisco, 6-9 de abril de 2026.",
    },
];

export const metadata = {
    title: "Eventos de Inteligência Artificial 2026 - Brasil e Mundo",
    description: "Descubra os principais eventos de IA em 2026 no Brasil e no mundo. Conferências, summits e festivais de inteligência artificial.",
    alternates: {
        canonical: 'https://www.hypehour.com.br/eventos-ia',
    },
};

export default function EventosIA() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>

            <div className="flex items-center gap-3 mb-8">
                <SparklesIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">Eventos de IA</h1>
            </div>

            <p className="mb-8 text-gray-600">
                Participe dos principais eventos de inteligência artificial em 2026. Conecte-se com especialistas, descubra tendências e explore cases reais de IA no Brasil e no mundo.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
                {eventos.map((evento) => (
                    <a
                        key={evento.nome}
                        href={evento.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
                    >
                        <h2 className="font-semibold text-lg mb-1">{evento.nome}</h2>
                        <div className="text-gray-500 text-sm">{evento.descricao}</div>
                    </a>
                ))}
            </div>
        </main>
    );
}
