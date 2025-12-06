import { BuildingOffice2Icon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";

export const metadata = {
    title: "IA para Arquitetura - Ferramentas de Inteligência Artificial para Projetos",
    description: "Descubra ferramentas de IA para arquitetura: renderização, modelagem 3D e design generativo.",
    alternates: {
        canonical: 'https://www.hypehour.com.br/ia-para-arquitetura',
    },
};

const ferramentas = [
    {
        nome: "Redraw",
        url: "https://www.redraw.pro/",
        descricao: "Transforme seus esboços em renderizações fotorrealistas em segundos.",
    },
    {
        nome: "PromeAI",
        url: "https://www.promeai.pro/pt/ai-architecture-generator",
        descricao: "Gerador de arquitetura com IA para criar designs e renderizações impressionantes.",
    },
    {
        nome: "Leonardo AI",
        url: "https://leonardo.ai/ai-architecture-generator/",
        descricao: "Crie ativos de arquitetura e designs conceituais com ferramentas avançadas de imagem generativa.",
    },
    {
        nome: "Project Dream",
        url: "https://www.pulze.io/products/project-dream",
        descricao: "Assistente de design arquitetônico que ajuda a visualizar e iterar projetos rapidamente.",
    },
    {
        nome: "Dzine",
        url: "https://www.dzine.ai/",
        descricao: "Plataforma de design generativo para estilizar e criar variações de projetos arquitetônicos.",
    },
    {
        nome: "Architechtures",
        url: "https://architechtures.com",
        descricao: "Ferramenta de design de edifícios residenciais assistida por IA para otimizar o planejamento.",
    },
    {
        nome: "Finch",
        url: "https://www.finch3d.com/",
        descricao: "Otimize plantas baixas e gere opções de layout com algoritmos generativos.",
    },
    {
        nome: "ArkDesign",
        url: "https://arkdesign.ai/",
        descricao: "Otimize esquemas de apartamentos e avalie a viabilidade de terrenos com IA.",
    },
    {
        nome: "Luma",
        url: "https://lumalabs.ai/",
        descricao: "Capture e crie modelos 3D fotorrealistas a partir de vídeos com NeRF e Gaussian Splatting.",
    },
    {
        nome: "Maket",
        url: "https://www.maket.ai/",
        descricao: "Gere plantas baixas residenciais e explore estilos de zoneamento instantaneamente.",
    },
    {
        nome: "Stability",
        url: "https://stability.ai/stable-image",
        descricao: "Modelos de geração de imagem poderosos para conceptualização e texturização arquitetônica.",
    },
    {
        nome: "Archicad AI Visualizer",
        url: "https://www.graphisoft.com/solutions/innovation/archicad-ai-visualizer",
        descricao: "Integração de IA no Archicad para gerar visualizações artísticas de seus modelos BIM.",
    },
    {
        nome: "Kaedim",
        url: "https://www.kaedim3d.com/",
        descricao: "Transforme imagens 2D em modelos 3D prontos para uso em CAD e renderização.",
    },
];

export default function IaParaArquitetura() {
    return (
        <main className="max-w-3xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <BuildingOffice2Icon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Arquitetura</h1>
            </div>

            <ExpandableContent />

            <div className="grid gap-6 sm:grid-cols-2">
                {ferramentas.map((f) => (
                    <a
                        key={f.nome}
                        href={f.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
                    >
                        <h2 className="font-semibold text-lg mb-1">{f.nome}</h2>
                        <div className="text-gray-500 text-sm">{f.descricao}</div>
                    </a>
                ))}
            </div>
        </main>
    );
}
