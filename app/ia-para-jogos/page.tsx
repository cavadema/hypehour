import { RocketLaunchIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";

const ferramentas = [
    {
        nome: "YouTube Playables Builder",
        url: "https://www.youtube.com/playablesbuilder/",
        descricao: "Ferramenta do YouTube para criar jogos interativos e experiências jogáveis diretamente na plataforma."
    },
    {
        nome: "Beam",
        url: "https://site.beam.game/",
        descricao: "Plataforma de IA para criar histórias interativas e jogos com vídeos, imagens e música geradas por IA."
    },
    {
        nome: "AI Dungeon",
        url: "https://aidungeon.com/",
        descricao: "Jogo de aventura baseado em texto onde você dirige a história e a IA dá vida às suas escolhas."
    },
    {
        nome: "Gambo",
        url: "https://www.gambo.ai/",
        descricao: "Agente de vibe coding para criar jogos que geram receita desde o primeiro dia com IA."
    },
    {
        nome: "Astrocade",
        url: "https://www.astrocade.com/",
        descricao: "Plataforma para criar e jogar jogos feitos pela comunidade com ferramentas intuitivas."
    },
    {
        nome: "Ludo.ai",
        url: "https://ludo.ai/",
        descricao: "Plataforma completa com IA para design de jogos: conceitos, sprites, assets 3D, áudio e análise de mercado."
    },
    {
        nome: "Rosebud AI",
        url: "https://lab.rosebud.ai/ai-game-creator",
        descricao: "Game creator online gratuito que transforma ideias em jogos com IA, sem necessidade de programação."
    },
    {
        nome: "GDevelop",
        url: "https://gdevelop.io/pt-br",
        descricao: "Motor de jogo open-source no-code com IA para criar jogos 2D, 3D e multiplayer sem limites."
    },
    {
        nome: "Meshy",
        url: "https://www.meshy.ai/pt-BR/",
        descricao: "Gerador de modelos 3D que transforma texto e imagens em assets 3D para jogos em segundos."
    },
    {
        nome: "Unity AI",
        url: "https://unity.com/pt/features/ai",
        descricao: "Ferramentas de IA integradas no Unity para assistência contextual, geração de assets e automação de tarefas."
    }
];

export const metadata = {
    title: "Criar jogos com IA",
    description: "Descubra as melhores ferramentas de IA para criar jogos. De desenvolvimento sem código a geração de assets, estas plataformas usam inteligência artificial para transformar suas ideias em jogos reais.",
    alternates: {
        canonical: 'https://www.hypehour.com.br/ia-para-jogos',
    },
};

export default function IAparaJogos() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <RocketLaunchIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Jogos</h1>
            </div>
            <p className="mb-8 text-gray-600">
                Descubra as melhores ferramentas de inteligência artificial para criar jogos. De desenvolvimento sem código a geração de assets, estas plataformas usam IA para transformar suas ideias em jogos reais.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
                {ferramentas.map((ferramenta) => (
                    <a
                        key={ferramenta.nome}
                        href={ferramenta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
                    >
                        <h2 className="font-semibold text-lg mb-1">{ferramenta.nome}</h2>
                        <div className="text-gray-500 text-sm">{ferramenta.descricao}</div>
                    </a>
                ))}
            </div>
            <FAQSection />
        </main>
    );
}
