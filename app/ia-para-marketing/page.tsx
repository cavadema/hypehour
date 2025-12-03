import { MegaphoneIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ferramentas = [
    {
        nome: "eKyte",
        url: "https://www.ekyte.com/pt-br/",
        descricao: "Plataforma de gestão de marketing digital com IA para planejar e executar campanhas.",
    },
    {
        nome: "Writesonic",
        url: "https://writesonic.com/",
        descricao: "Ferramenta de escrita com IA para criar conteúdo de marketing otimizado para SEO.",
    },
    {
        nome: "Lumen5",
        url: "https://lumen5.com/",
        descricao: "Transforme textos e artigos em vídeos engajadores para redes sociais com IA.",
    },
    {
        nome: "Rytr",
        url: "https://rytr.me/",
        descricao: "Assistente de escrita criativa para gerar copys, e-mails e blogs rapidamente.",
    },
    {
        nome: "Notion AI",
        url: "https://www.notion.com/product/ai",
        descricao: "Recursos de IA integrados ao Notion para resumir, escrever e organizar ideias.",
    },
    {
        nome: "Pictory",
        url: "https://pictory.ai/",
        descricao: "Crie vídeos curtos a partir de textos longos ou roteiros usando inteligência artificial.",
    },
    {
        nome: "Delve",
        url: "https://www.delve.ai/",
        descricao: "Gere personas detalhadas e insights de público-alvo automaticamente com IA.",
    },
    {
        nome: "Surfer SEO",
        url: "https://surferseo.com/",
        descricao: "Otimize seu conteúdo para os motores de busca com auditorias e sugestões baseadas em IA.",
    },
    {
        nome: "MarketMuse",
        url: "https://www.marketmuse.com/",
        descricao: "Planejamento de conteúdo e pesquisa de palavras-chave impulsionados por IA.",
    },
    {
        nome: "Gamma",
        url: "https://gamma.app/pt-br",
        descricao: "Crie apresentações, documentos e páginas da web visualmente impressionantes com IA.",
    },
    {
        nome: "Ocoya",
        url: "https://www.ocoya.com/",
        descricao: "Crie, agende e analise conteúdo para redes sociais com ajuda de inteligência artificial.",
    },
    {
        nome: "Searchfy",
        url: "https://searchfy.com.br/",
        descricao: "Ferramenta de IA para SEO e otimização de conteúdo.",
    },
    {
        nome: "Pixelesq",
        url: "https://www.pixelesq.com/",
        descricao: "Plataforma de marketing digital com IA para criação e gestão de campanhas.",
    },
];

export const metadata = {
    title: "Ferramentas de Inteligência Artificial para Marketing - Hypehour",
    description: "Descubra as melhores ferramentas de IA para marketing: automação, criação de conteúdo, SEO e vídeo.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ia-para-marketing",
    },
};

export default function IaParaMarketing() {
    return (
        <main className="max-w-3xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <MegaphoneIcon className="w-10 h-10 text-blue-500" />
                <h1 className="text-3xl font-bold">IA para Marketing</h1>
            </div>
            <p className="mb-8 text-gray-600">
                Potencialize suas estratégias de marketing com ferramentas de inteligência artificial para criação, automação e análise.
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
