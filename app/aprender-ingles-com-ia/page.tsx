import { AcademicCapIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";
import ExpandableContent from "./ExpandableContent";

export const metadata = {
  title: "Aprender Inglês com IA",
  description: "Ferramentas com IA para estudar, praticar conversação e melhorar a pronúncia em inglês.",
  alternates: { canonical: "https://www.hypehour.com.br/aprender-ingles-com-ia" },
};

const ferramentas = [
  { nome: "Fluently", url: "https://app.getfluently.app/", descricao: "Assistente de escrita e tradução em tempo real para estudar inglês." },
  { nome: "TalkPal", url: "https://talkpal.ai/get-started/pt-br", descricao: "Prática de conversação com IA e feedback instantâneo." },
  { nome: "AI Learna", url: "https://ailearna.com/", descricao: "Aulas guiadas por IA com planos personalizados de estudo." },
  { nome: "Promova", url: "https://promova.com/", descricao: "Aplicativo de idiomas com exercícios e revisão inteligente." },
  { nome: "Falou", url: "https://falou.com/pt", descricao: "Simulações de fala do cotidiano com correção de sotaque." },
  { nome: "Praktika AI", url: "https://praktika.ai/pt-br/", descricao: "Pratique conversação com avatares em inglês e receba dicas." },
  { nome: "GetPronounce", url: "https://www.getpronounce.com", descricao: "Treine pronúncia com análise automática por IA." },
  { nome: "LanguaTalk", url: "https://languatalk.com/try-langua", descricao: "Aulas particulares e prática guiada para fluência." },
  { nome: "Univerbal", url: "https://www.univerbal.app/", descricao: "Chat com IA para treinar inglês em cenários reais." },
  { nome: "Lingvist", url: "https://lingvist.com/pt-br/", descricao: "Vocabulário e gramática adaptativos com IA." },
  { nome: "ELSA Speak", url: "https://elsaspeak.com/en", descricao: "Feedback de pronúncia avançado e exercícios de fala." },
  { nome: "JumpSpeak", url: "https://www.jumpspeak.com/flow-gs", descricao: "Prática de conversação em inglês com IA e feedback instantâneo sobre fluência." },
];

export default function AprenderInglesComIA() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <AcademicCapIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para aprender inglês</h1>
      </div>
      <ExpandableContent />
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <a key={f.nome} href={f.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100">
            <h2 className="font-semibold text-lg mb-1">{f.nome}</h2>
            <div className="text-gray-500 text-sm">{f.descricao}</div>
          </a>
        ))}
      </div>
      <FAQSection />
    </main>
  );
}
