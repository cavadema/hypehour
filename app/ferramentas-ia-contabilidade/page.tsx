import { CalculatorIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";

const ferramentas = [
    {
        nome: "Conrado",
        url: "https://cdcia.com.br/",
        descricao: "Inteligência Artificial para contabilidade que automatiza a análise de documentos e lançamentos.",
    },
    {
        nome: "IA Cont",
        url: "https://iacont.com.br/",
        descricao: "Plataforma que utiliza IA para otimizar processos contábeis e fiscais.",
    },
    {
        nome: "Dattos",
        url: "https://www.dattos.com.br/ai",
        descricao: "Solução de reconciliação de dados financeiros com recursos avançados de IA.",
    },
    {
        nome: "Truewind",
        url: "https://www.truewind.ai/",
        descricao: "Contabilidade e finanças impulsionadas por IA para startups e empresas em crescimento.",
    },
    {
        nome: "Indy",
        url: "https://weareindy.com/",
        descricao: "Ferramenta tudo-em-um para freelancers com recursos de contabilidade e gestão financeira.",
    },
    {
        nome: "Zeni",
        url: "https://www.zeni.ai/",
        descricao: "Plataforma financeira com IA que oferece contabilidade, pagamentos e insights em tempo real.",
    },
    {
        nome: "Docyt",
        url: "https://docyt.com/",
        descricao: "Automação de contabilidade e gestão de despesas com inteligência artificial.",
    },
];

export const metadata = {
    title: "Ferramentas de IA para Contabilidade",
    description: "Descubra as melhores ferramentas de IA para contabilidade: automação fiscal, reconciliação e gestão financeira.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas-ia-contabilidade",
    },
};

export default function IaParaContabilidade() {
    return (
        <main className="max-w-3xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <CalculatorIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Contabilidade</h1>
            </div>

            <ExpandableContent />
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
