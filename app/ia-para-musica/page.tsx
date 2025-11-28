import { MusicalNoteIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ferramentas = [
    {
        nome: "Suno",
        url: "https://suno.com/home",
        descricao: "Crie músicas completas com vocais e instrumentais usando IA.",
    },
    {
        nome: "Udio",
        url: "https://www.udio.com/",
        descricao: "Plataforma de criação musical com alta fidelidade e controle criativo.",
    },
    {
        nome: "Stable Audio",
        url: "https://stableaudio.com/",
        descricao: "Geração de música e efeitos sonoros de alta qualidade pela Stability AI.",
    },
    {
        nome: "ElevenLabs Voice Design",
        url: "https://elevenlabs.io/voice-design",
        descricao: "Crie vozes únicas e realistas para seus projetos de áudio.",
    },
    {
        nome: "AIVA",
        url: "https://www.aiva.ai/",
        descricao: "Compositor de música clássica e trilhas sonoras com inteligência artificial.",
    },
    {
        nome: "Soundraw",
        url: "https://soundraw.io/",
        descricao: "Gerador de música livre de royalties para criadores de conteúdo.",
    },
    {
        nome: "Boomy",
        url: "https://boomy.com/",
        descricao: "Crie músicas originais em segundos e publique nas plataformas de streaming.",
    },
];

export const metadata = {
    title: "IA para Música",
    description: "Descubra as melhores ferramentas de inteligência artificial para criação e edição de música e áudio.",
    alternates: {
        canonical: 'https://www.hypehour.com.br/ia-para-musica',
    },
};

export default function IaParaMusica() {
    return (
        <main className="max-w-3xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <MusicalNoteIcon className="w-10 h-10 text-blue-500" />
                <h1 className="text-3xl font-bold">IA para Música</h1>
            </div>
            <p className="mb-8 text-gray-600">
                Descubra as melhores ferramentas de inteligência artificial para criação, edição e geração de música e áudio.
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
        </main>
    );
}
