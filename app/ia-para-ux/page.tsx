import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

const ferramentas = [
    {
        nome: "UX Pilot",
        url: "/ferramentas/ux-pilot",
        descricao: "Gera telas e fluxos de UI e UX editáveis com IA, de wireframes de baixa a alta fidelidade, com importação e exportação para Figma e exportação de código.",
    },
    {
        nome: "Banani",
        url: "/ferramentas/banani",
        descricao: "Gerador de interfaces com IA para apps mobile e web a partir de texto ou screenshots, com variações de tela, fluxos de várias telas e exportação para Figma ou HTML e CSS.",
    },
    {
        nome: "Uizard",
        url: "/ferramentas/uizard",
        descricao: "Ferramenta de design de interfaces com IA, com Autodesigner para ir de texto a protótipo, além de Screenshot Scanner e Wireframe Scanner para transformar imagens e esboços em telas.",
    },
    {
        nome: "Visily",
        url: "/ferramentas/visily",
        descricao: "Software de design de UI com IA que transforma ideias em wireframes e protótipos, com geração a partir de texto, conversão de diagramas em telas, chat de edição e plugin do Figma.",
    },
    {
        nome: "Relume",
        url: "/ferramentas/relume",
        descricao: "Cria sites de marketing a partir de um briefing, gerando sitemap, wireframes e site, com mais de 1.000 componentes e exportação para Figma, Webflow ou React.",
    },
    {
        nome: "Locofy",
        url: "https://www.locofy.ai/",
        descricao: "Ferramenta de design to code com IA, voltada a converter designs de interface em código de front-end.",
    },
];

export const metadata = {
    title: "Ferramentas de Inteligência Artificial para UX e Design de Interfaces",
    description: "Descubra as melhores ferramentas de IA para UX e UI: geração de telas e wireframes, prototipagem, exportação para Figma e conversão de design em código.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ia-para-ux",
    },
    openGraph: {
        title: "Ferramentas de Inteligência Artificial para UX e Design de Interfaces",
        description: "Descubra as melhores ferramentas de IA para UX e UI: geração de telas e wireframes, prototipagem, exportação para Figma e conversão de design em código.",
        url: "https://www.hypehour.com.br/ia-para-ux",
        siteName: 'Hypehour',
        images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Ferramentas de Inteligência Artificial para UX e Design de Interfaces",
        description: "Descubra as melhores ferramentas de IA para UX e UI: geração de telas e wireframes, prototipagem, exportação para Figma e conversão de design em código.",
        images: ['https://www.hypehour.com.br/logo.png'],
        creator: '@hypehourbr',
    },
};

export default function IaParaUX() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black font-medium">IA para UX</span>
            </nav>
            <div className="flex items-center gap-3 mb-8">
                <CursorArrowRaysIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para UX</h1>
            </div>

            <ExpandableContent />
            <h2 className="text-2xl font-bold mb-6 text-black">Melhores ferramentas de IA para UX</h2>
            <div className="grid gap-6 sm:grid-cols-2">
                {ferramentas.map((ferramenta) => (
                    <ToolCard key={ferramenta.nome} nome={ferramenta.nome} url={ferramenta.url} descricao={ferramenta.descricao} />
                ))}
            </div>
            <div className="mt-12">
                <ComparativoFerramentas />
            </div>
            <ComoEscolher />
            <ProTips />
            <FAQSection />

            <CategoryPageSchema
                title="Ferramentas de Inteligência Artificial para UX e Design de Interfaces"
                description="Descubra as melhores ferramentas de IA para UX e UI: geração de telas e wireframes, prototipagem, exportação para Figma e conversão de design em código."
                canonicalUrl="https://www.hypehour.com.br/ia-para-ux"
                ferramentas={ferramentas}
            />
        </main>
    );
}
