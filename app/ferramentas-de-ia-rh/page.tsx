import { UserGroupIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ferramentas = [
    {
        nome: "Attract AI",
        url: "https://attract.ai/",
        descricao: "Plataforma de sourcing de talentos que usa IA para encontrar e engajar os melhores candidatos.",
    },
    {
        nome: "Enboarder",
        url: "https://enboarder.com/",
        descricao: "Ferramenta de onboarding e transição de funcionários focada na experiência humana e conexão.",
    },
    {
        nome: "Syndio",
        url: "https://synd.io/",
        descricao: "Plataforma de equidade salarial que usa IA para identificar e corrigir disparidades de remuneração.",
    },
    {
        nome: "UKG Pro",
        url: "https://www.ukg.com/products/ukg-pro",
        descricao: "Suíte completa de HCM com recursos de IA para gestão de talentos, folha de pagamento e benefícios.",
    },
    {
        nome: "Eightfold AI",
        url: "https://eightfold.ai/",
        descricao: "Plataforma de inteligência de talentos para recrutamento, retenção e desenvolvimento de carreira.",
    },
    {
        nome: "Workhuman",
        url: "https://www.workhuman.com/",
        descricao: "Solução de reconhecimento social e gestão de desempenho impulsionada por dados e IA.",
    },
    {
        nome: "Reclaim AI",
        url: "https://reclaim.ai/",
        descricao: "Agendamento inteligente para equipes que otimiza o tempo de foco e reuniões automaticamente.",
    },
    {
        nome: "HireVue",
        url: "https://www.hirevue.com/",
        descricao: "Plataforma de vídeo entrevista e avaliações baseada em IA para agilizar a contratação.",
    },
    {
        nome: "Effy AI",
        url: "https://www.effy.ai/",
        descricao: "Software de avaliação de desempenho e feedback 360 graus simples e eficiente.",
    },
];

export const metadata = {
    title: "Ferramentas de IA para RH - Hypehour",
    description: "Descubra as melhores ferramentas de IA para Recursos Humanos: recrutamento, onboarding e gestão de talentos.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas-de-ia-rh",
    },
};

export default function IaParaRH() {
    return (
        <main className="max-w-3xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <UserGroupIcon className="w-10 h-10 text-blue-500" />
                <h1 className="text-3xl font-bold">IA para RH</h1>
            </div>
            <p className="mb-8 text-gray-600">
                Revolucione a gestão de pessoas com ferramentas de inteligência artificial para atrair, desenvolver e reter talentos.
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
