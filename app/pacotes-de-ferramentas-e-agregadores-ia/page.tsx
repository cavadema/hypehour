import { ArchiveBoxIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ferramentas = [
    {
        nome: "Yonoo",
        url: "https://yonoo.ai/",
        descricao: "Plataforma de descoberta e motor de busca para encontrar as melhores ferramentas de IA.",
    },
    {
        nome: "Skywork",
        url: "https://skywork.ai/",
        descricao: "Modelo de IA avançado da Skywork com capacidades de raciocínio, matemática e codificação de alto nível.",
    },
    {
        nome: "Snippets AI",
        url: "https://www.getsnippets.ai/",
        descricao: "Gerenciador de prompts de IA para equipes, compatível com ChatGPT, Claude e mais.",
    },
    {
        nome: "Adapta",
        url: "/ferramentas/adapta",
        descricao: "Plataforma que conecta ferramentas de IA para otimizar fluxos de trabalho.",
    },
    {
        nome: "InnerAI",
        url: "https://www.innerai.com/pt",
        descricao: "Ecossistema de IA para empresas, integrando diversos modelos e ferramentas.",

    },
    {
        nome: "Auriax",
        url: "https://auriax.com.br/",
        descricao: "Agregador brasileiro com acesso a múltiplos modelos e ferramentas de IA.",
    },
    {
        nome: "Tess",
        url: "https://tess.im/pt-BR",
        descricao: "Assistente de IA que agrega múltiplos modelos em uma única interface.",
    },
    {
        nome: "Poe",
        url: "https://poe.com/",
        descricao: "Plataforma da Quora para acessar e criar chatbots com diversos modelos de IA.",
    },
    {
        nome: "OpenRouter",
        url: "https://openrouter.ai/",
        descricao: "Gateway unificado para acessar os melhores modelos de LLM do mercado.",
    },
    {
        nome: "Ollama",
        url: "/ferramentas/ollama",
        descricao: "Execute grandes modelos de linguagem localmente no seu computador.",
    },
    {
        nome: "Jan.ai",
        url: "https://www.jan.ai/",
        descricao: "Alternativa open-source ao ChatGPT que roda 100% offline no seu dispositivo.",
    },
    {
        nome: "AnythingLLM",
        url: "https://anythingllm.com/",
        descricao: "Solução all-in-one para chat com documentos e vetores usando LLMs.",
    },
    {
        nome: "ChatBetter",
        url: "https://www.chatbetter.com/",
        descricao: "Acesse todos os principais modelos de IA em um único chat com seleção automática do melhor modelo.",
    },
    {
        nome: "AiChat",
        url: "https://aichat.fm/",
        descricao: "várias IAs em um só app, com privacidade, personalização e preço único.",
    },
    {
        nome: "Okara",
        url: "https://okara.ai/",
        descricao: "Plataforma para conectar modelos e orquestrar agentes de forma segura.",
    },
    {
        nome: "ChatLLM Abacus",
        url: "https://chatllm.abacus.ai/",
        descricao: "Agregador com acesso a múltiplos modelos LLM em uma interface.",
    },
    {
        nome: "BlackBox AI",
        url: "https://www.blackbox.ai/",
        descricao: "Assistente de código com IA para desenvolvedores.",
    },
    {
        nome: "Sup AI",
        url: "https://sup.ai/",
        descricao: "Orquestração multi-modelo com citações e RAG para máxima precisão; API compatível com OpenAI.",
    },
    {
        nome: "TensorBlock",
        url: "https://www.tensorblock.co/",
        descricao: "Plataforma unificada para acessar e gerenciar múltiplos modelos de IA.",
    },
];

export const metadata = {
    title: "Pacotes de Ferramentas IA e Agregadores",
    description: "Descubra as melhores plataformas que agregam múltiplas ferramentas e modelos de inteligência artificial.",
    alternates: {
        canonical: 'https://www.hypehour.com.br/pacotes-de-ferramentas-e-agregadores-ia',
    },
};

export default function PacotesFerramentas() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <ArchiveBoxIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">Pacotes de Ferramentas IA e Agregadores</h1>
            </div>
            <p className="mb-8 text-gray-600">
                Descubra as melhores plataformas que agregam múltiplas ferramentas e modelos de inteligência artificial em um só lugar.
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
