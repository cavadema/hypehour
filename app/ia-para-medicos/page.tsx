import { HeartIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
    title: "IA para Médicos - Ferramentas de Inteligência Artificial para Saúde",
    description: "Descubra ferramentas de IA para médicos, clínicas e hospitais: diagnósticos, anotações automáticas e pesquisa.",
    alternates: {
        canonical: 'https://www.hypehour.com.br/ia-para-medicos',
    },
};

const ferramentas = [
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
];

export default function IaParaMedicos() {
    return (
        <main className="max-w-3xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <HeartIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Médicos</h1>
            </div>
            <p className="mb-8 text-gray-600">Ferramentas de inteligência artificial para otimizar diagnósticos, gestão clínica e pesquisa médica.</p>
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
