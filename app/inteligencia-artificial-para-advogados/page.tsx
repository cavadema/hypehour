import { ScaleIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";

const ferramentas = [
    {
        nome: "JusIA",
        url: "https://ia.jusbrasil.com.br/",
        descricao: "Assistente jurídico do Jusbrasil para pesquisa de jurisprudência e análise de documentos.",
    },
    {
        nome: "Jusfy",
        url: "https://jusfy.com.br/",
        descricao: "Plataforma de IA para advogados com cálculo de prazos, correção de petições e mais.",
    },
    {
        nome: "MinutAI",
        url: "https://www.minutaia.com.br/",
        descricao: "Geração de minutas contratuais e documentos jurídicos com inteligência artificial.",
    },
    {
        nome: "JuridicoAI",
        url: "https://juridico.ai/",
        descricao: "Assistente virtual para automação de atendimento e triagem de casos jurídicos.",
    },
    {
        nome: "Juit",
        url: "https://juit.com.br/",
        descricao: "Jurimetria e inteligência de dados para escritórios de advocacia e departamentos jurídicos.",
    },
    {
        nome: "LawX",
        url: "https://lawx.ai/",
        descricao: "Soluções de IA para análise preditiva e gestão de processos judiciais.",
    },
    {
        nome: "ChatADV",
        url: "https://chatadv.com.br/",
        descricao: "Chatbot jurídico treinado na legislação brasileira para tirar dúvidas e auxiliar advogados.",
    },
    {
        nome: "Inspira",
        url: "https://www.inspire-se.co/",
        descricao: "Ferramenta de gestão e produtividade para advogados com recursos de IA.",
    },
    {
        nome: "Turivius",
        url: "https://turivius.com/",
        descricao: "Pesquisa jurisprudencial e jurimetria avançada para tomada de decisão estratégica.",
    },
    {
        nome: "CaseText",
        url: "https://casetext.com/",
        descricao: "Tecnologia CoCounsel para revisão de documentos e pesquisa legal com IA (agora parte da Thomson Reuters).",
    },
    {
        nome: "Lawgeex",
        url: "https://www.lawgeex.com/",
        descricao: "Automação de revisão de contratos para garantir conformidade e acelerar fechamentos.",
    },
    {
        nome: "JusPrompt",
        url: "https://www.jusprompt.plus/",
        descricao: "Assistente jurídico com IA para petições e pesquisas legais.",
    },
    {
        nome: "Legal Robot",
        url: "https://legalrobot.com/",
        descricao: "Plataforma com IA para analisar contratos, riscos legais e conformidade.",
    },
];

export const metadata = {
    title: "Inteligência Artificial para Advogados",
    description: "Descubra as melhores ferramentas de IA para advogados: pesquisa jurídica, automação de contratos e jurimetria.",
    alternates: {
        canonical: "https://www.hypehour.com.br/inteligencia-artificial-para-advogados",
    },
};

export default function IaParaAdvogados() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <ScaleIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Advogados</h1>
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
