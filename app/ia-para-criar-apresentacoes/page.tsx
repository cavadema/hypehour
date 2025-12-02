import { PresentationChartLineIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ferramentas = [
    {
        nome: "Genspark",
        url: "https://www.genspark.ai/",
        descricao: "Crie apresentações impressionantes a partir de prompts simples com IA generativa.",
    },
    {
        nome: "Presentations.ai",
        url: "https://www.presentations.ai/",
        descricao: "Plataforma de design de apresentações focada em empresas e colaboração em tempo real.",
    },
    {
        nome: "AiPPT",
        url: "https://www.aippt.com/pt/",
        descricao: "Gerador de PPTs com inteligência artificial que transforma tópicos em slides prontos.",
    },
    {
        nome: "Gamma",
        url: "https://gamma.app/pt-br",
        descricao: "Crie apresentações, documentos e páginas da web visualmente impressionantes com IA.",
    },
    {
        nome: "SlidesGO",
        url: "https://slidesgo.com/pt/",
        descricao: "Modelos de slides criativos e gerador de apresentações com IA integrado.",
    },
    {
        nome: "Smallppt",
        url: "https://smallppt.com/pt",
        descricao: "Ferramentas de IA para criar, editar e otimizar apresentações em PowerPoint.",
    },
    {
        nome: "DeckRobot",
        url: "https://www.deckrobot.com/",
        descricao: "Automação de design para PowerPoint que formata slides corporativos em segundos.",
    },
    {
        nome: "Decktopus",
        url: "https://www.decktopus.com/",
        descricao: "Gerador de apresentações com IA que cria slides, roteiros e imagens automaticamente.",
    },
    {
        nome: "Slidebean",
        url: "https://slidebean.com/",
        descricao: "IA para criar pitch decks profissionais e apresentações para startups.",
    },
    {
        nome: "Beautiful.ai",
        url: "https://www.beautiful.ai/",
        descricao: "Software de apresentação que usa IA para ajustar o design dos slides automaticamente.",
    },
    {
        nome: "Visme",
        url: "https://www.visme.co/pt-br/",
        descricao: "Ferramenta tudo-em-um para criar apresentações, infográficos e conteúdos visuais com IA.",
    },
];

export const metadata = {
    title: "Inteligência Artificial para Criar Apresentações e Slides - Hypehour",
    description: "Descubra as melhores ferramentas de IA para criar apresentações, slides e pitch decks automaticamente.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ia-para-criar-apresentacoes",
    },
};

export default function IaParaCriarApresentacoes() {
    return (
        <main className="max-w-3xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <PresentationChartLineIcon className="w-10 h-10 text-blue-500" />
                <h1 className="text-3xl font-bold">IA para Criar Apresentações</h1>
            </div>
            <p className="mb-8 text-gray-600">
                Ferramentas de inteligência artificial que transformam ideias em apresentações visuais impactantes em poucos minutos.
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
