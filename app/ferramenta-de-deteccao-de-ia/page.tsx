import { ArrowLeftIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ferramentas = [
  {
    nome: "QuillBot Detector de IA",
    url: "https://quillbot.com/pt/detector-de-ia",
    descricao: "Detector multilíngue para identificar sinais de conteúdo gerado por IA.",
  },
  {
    nome: "Sidekicker",
    url: "https://sidekicker.ai/pt/ai-detector",
    descricao: "Análise rápida de textos com relatórios sobre probabilidade de IA.",
  },
  {
    nome: "WinstonAI",
    url: "https://gowinston.ai/",
    descricao: "Detector focado em textos acadêmicos e corporativos, com insights detalhados.",
  },
  {
    nome: "Copyleaks",
    url: "https://copyleaks.com/pt/ai-content-detector",
    descricao: "Plataforma para detectar IA e plágio com integrações corporativas.",
  },
  {
    nome: "Smodin",
    url: "https://smodin.io/pt/detector-de-conteudo-ai",
    descricao: "Detector que avalia conteúdos em vários idiomas e dá sugestões de ajuste.",
  },
  {
    nome: "JustDone",
    url: "https://justdone.com/pt/ai-detector",
    descricao: "Ferramenta simples para identificar textos gerados por IA em português.",
  },
  {
    nome: "ExpertChat",
    url: "https://tutorial.expertchat.me/",
    descricao: "Detector com foco em criadores de conteúdo e equipes de marketing.",
  },
  {
    nome: "Undetectable",
    url: "https://undetectable.ai/pt-br",
    descricao: "Verifica conteúdos e também oferece recursos para melhorar a naturalidade.",
  },
  {
    nome: "Plagium",
    url: "https://www.plagium.com/pt/detectordeplagio",
    descricao: "Ferramenta clássica de plágio com modo para detectar textos gerados por IA.",
  },
  {
    nome: "GPTZero",
    url: "https://gptzero.me/",
    descricao: "Detector popular criado para professores, com métricas claras de probabilidade.",
  },
  {
    nome: "ZeroGPT",
    url: "https://www.zerogpt.com/",
    descricao: "Detector avançado e confiável para ChatGPT, GPT-5 e Gemini com alta precisão.",
  },
];

export const metadata = {
  title: "Ferramentas para detectar uso de Inteligência Artificial - Hypehour",
  description: "Lista curada de ferramentas para identificar conteúdos gerados por inteligência artificial.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramenta-de-deteccao-de-ia",
  },
};

export default function FerramentaDeteccaoIA() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <ShieldCheckIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Ferramentas de detecção de IA</h1>
      </div>
      <p className="mb-8 text-gray-600">
        Explore detectores especializados para verificar se um texto foi escrito por inteligência artificial. Escolha a
        ferramenta que melhor se adapta ao seu fluxo de trabalho.
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


