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
    {
        nome: "Scripe",
        url: "https://scripe.io/",
        descricao: "Ferramenta de IA para criação de conteúdo e automação de marketing digital.",
    },
    {
        nome: "Lindy",
        url: "https://www.lindy.ai/",
        descricao: "Plataforma para criar e gerenciar agentes de IA que automatizam tarefas de marketing.",
    },
    {
        nome: "Wispr Flow",
        url: "https://wisprflow.ai/",
        descricao: "Ditado por voz com IA para escrever conteúdo de marketing 4x mais rápido.",
    },
    {
        nome: "Documentation.AI",
        url: "https://documentation.ai/",
        descricao: "Plataforma de documentação com IA para criar e manter bases de conhecimento atualizadas.",
    },
    {
        nome: "Luppa AI",
        url: "https://www.luppa.ai/",
        descricao: "Plataforma all-in-one de marketing com IA para criar texto, imagens, vídeos e automatizar postagens.",
    },
    {
        nome: "Olive",
        url: "https://fromolive.com/",
        descricao: "Plataforma de BI impulsionada por IA para criar ferramentas internas rápidas e seguras a partir de prompts.",
    },
    {
        nome: "Aha",
        url: "https://www.aha.inc/",
        descricao: "Seu funcionário de IA 24/7 para marketing de influência, automação e colaboração.",
    },
    {
        nome: "Dr-aft",
        url: "https://www.dr-aft.com/",
        descricao: "Editor de roteiros com IA nativo para formato Fountain, ideal para roteiristas e criação de scripts de vídeo.",
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
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <MegaphoneIcon className="w-10 h-10 text-gray-900" />
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
