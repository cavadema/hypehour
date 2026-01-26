import { HeartIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import ExpandableContent from "./ExpandableContent";

export const metadata = {
    title: "IA para Médicos - Ferramentas de Inteligência Artificial para Saúde",
    description: "Descubra ferramentas de IA para médicos, clínicas e hospitais: diagnósticos, anotações automáticas e pesquisa.",
    alternates: {
        canonical: 'https://www.hypehour.com.br/ia-para-medicos',
    },
};

const ferramentas = [
    {
        nome: "Biomni",
        url: "https://biomni.stanford.edu/",
        descricao: "Modelos de fundação biomédica da Stanford para acelerar a pesquisa e diagnóstico clínico.",
    },
    {
        nome: "Mozzarellm",
        url: "https://github.com/cheeseman-lab/mozzarellm",
        descricao: "Ferramenta baseada em LLM para análise de clusters de genes e descoberta de caminhos biológicos.",
    },
    {
        nome: "Dr. Guard AI",
        url: "https://www.heidihealth.com/",
        descricao: "Escriba médico de IA que automatiza notas clínicas, preenche documentos e dita cartas, permitindo que médicos foquem no cuidado ao paciente.",
    },
    {
        nome: "IBM Watson Healthcare",
        url: "https://www.ibm.com/br-pt/industries/healthcare",
        descricao: "Soluções de IA para saúde, oncologia e pesquisa clínica.",
    },
    {
        nome: "Ada",
        url: "https://ada.com/pt/",
        descricao: "App de avaliação de sintomas com IA e guia de saúde pessoal.",
    },
    {
        nome: "Voa Health",
        url: "https://voa.health/",
        descricao: "Assistente que gera documentos clínicos como anamnese e receitas automaticamente.",
    },
    {
        nome: "Excelmatic",
        url: "https://excelmatic.ai/",
        descricao: "Análise de dados e visualização em Excel com IA.",
    },
    {
        nome: "Scisummary",
        url: "https://scisummary.com/",
        descricao: "Resumos de artigos científicos complexos em segundos.",
    },
    {
        nome: "Humata",
        url: "https://www.humata.ai/",
        descricao: "Chat com IA para analisar e extrair dados de arquivos PDF e papers.",
    },
    {
        nome: "Livia",
        url: "https://livia.careintelligence.ai/",
        descricao: "Inteligência Artificial Médica Brasileira treinada por especialistas.",
    },
    {
        nome: "Ziptalk",
        url: "https://ziptalk.ai/",
        descricao: "Transforma mensagens de voz do WhatsApp em resumos e tarefas.",
    },
    {
        nome: "PathAI",
        url: "https://www.pathai.com/",
        descricao: "Tecnologia de patologia impulsionada por IA para diagnósticos precisos.",
    },
    {
        nome: "Aspirin AI",
        url: "https://play.google.com/store/apps/details?id=appdrguidenet.wpapp",
        descricao: "App de IA para guia médico e informações sobre medicamentos.",
    },
    {
        nome: "SciSpace Biomedical",
        url: "https://scispace.com/biomedical",
        descricao: "Plataforma de IA para pesquisa biomédica com análise de artigos científicos e literatura médica.",
    },
    {
        nome: "HumanTrack",
        url: "https://humantrack.io/",
        descricao: "IA para monitoramento e análise de saúde com insights automatizados.",
    },
    {
        nome: "Leona Health",
        url: "https://www.leona.health/",
        descricao: "Plataforma de IA para triagem e suporte médico com análise de sintomas.",
    },
];

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://www.hypehour.com.br/#organization",
            "name": "Hypehour",
            "url": "https://www.hypehour.com.br"
        },
        {
            "@type": "WebSite",
            "@id": "https://www.hypehour.com.br/#website",
            "name": "Hypehour",
            "url": "https://www.hypehour.com.br",
            "publisher": {
                "@id": "https://www.hypehour.com.br/#organization"
            }
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.hypehour.com.br/ia-para-medicos/#breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.hypehour.com.br"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "IA para Médicos",
                    "item": "https://www.hypehour.com.br/ia-para-medicos"
                }
            ]
        },
        {
            "@type": "CollectionPage",
            "@id": "https://www.hypehour.com.br/ia-para-medicos/#collectionpage",
            "name": "IA para Médicos",
            "description": "Lista de ferramentas de IA para médicos, incluindo soluções para diagnóstico, análise clínica, gestão de pacientes e apoio à tomada de decisão na área da saúde.",
            "url": "https://www.hypehour.com.br/ia-para-medicos",
            "isPartOf": {
                "@id": "https://www.hypehour.com.br/#website"
            },
            "breadcrumb": {
                "@id": "https://www.hypehour.com.br/ia-para-medicos/#breadcrumb"
            },
            "mainEntity": {
                "@type": "ItemList",
                "@id": "https://www.hypehour.com.br/ia-para-medicos/#itemlist",
                "itemListOrder": "http://schema.org/ItemListOrderAscending",
                "numberOfItems": 13,
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "IBM Watson Healthcare" },
                    { "@type": "ListItem", "position": 2, "name": "Ada" },
                    { "@type": "ListItem", "position": 3, "name": "Voa Health" },
                    { "@type": "ListItem", "position": 4, "name": "Excelmatic" },
                    { "@type": "ListItem", "position": 5, "name": "Scisummary" },
                    { "@type": "ListItem", "position": 6, "name": "Humata Chat" },
                    { "@type": "ListItem", "position": 7, "name": "Livia" },
                    { "@type": "ListItem", "position": 8, "name": "Ziptalk" },
                    { "@type": "ListItem", "position": 9, "name": "PathAI" },
                    { "@type": "ListItem", "position": 10, "name": "Aspirin AI" },
                    { "@type": "ListItem", "position": 11, "name": "SciSpace Biomedical" },
                    { "@type": "ListItem", "position": 12, "name": "HumanTrack" },
                    { "@type": "ListItem", "position": 13, "name": "Leona Health" }
                ]
            }
        }
    ]
};

export default function IaParaMedicos() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <HeartIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Médicos</h1>
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
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
