import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import ExpandableContent from "./ExpandableContent";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

export const metadata = {
  title: "Aprender Inglês com IA",
  description: "Ferramentas com IA para estudar, praticar conversação e melhorar a pronúncia em inglês.",
  alternates: { canonical: "https://www.hypehour.com.br/aprender-ingles-com-ia" },
  openGraph: {
    title: "Aprender Inglês com IA",
    description: "Ferramentas com IA para estudar, praticar conversação e melhorar a pronúncia em inglês.",
    url: "https://www.hypehour.com.br/aprender-ingles-com-ia",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aprender Inglês com IA",
    description: "Ferramentas com IA para estudar, praticar conversação e melhorar a pronúncia em inglês.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

const ferramentas = [
  {
    nome: "ChatGPT Translate",
    url: "https://chatgpt.com/pt-BR/translate/",
    descricao: "Use o poder do ChatGPT como um tradutor e tutor de idiomas avançado em tempo real.",
  },
  { nome: "Pingo", url: "https://mypingoai.com/", descricao: "App de aprendizado de idiomas que usa IA para conversação realista e feedback de pronúncia instantâneo." },
  { nome: "Fluently", url: "https://app.getfluently.app/", descricao: "Assistente de escrita e tradução em tempo real para estudar inglês." },
  { nome: "TalkPal", url: "https://talkpal.ai/get-started/pt-br", descricao: "Prática de conversação com IA e feedback instantâneo." },
  { nome: "AI Learna", url: "https://ailearna.com/", descricao: "Aulas guiadas por IA com planos personalizados de estudo." },
  { nome: "Promova", url: "https://promova.com/", descricao: "Aplicativo de idiomas com exercícios e revisão inteligente." },
  { nome: "Falou", url: "https://falou.com/pt", descricao: "Simulações de fala do cotidiano com correção de sotaque." },
  { nome: "Praktika AI", url: "https://praktika.ai/", descricao: "Pratique conversação com avatares em inglês e receba dicas." },
  { nome: "GetPronounce", url: "https://www.getpronounce.com", descricao: "Treine pronúncia com análise automática por IA." },
  { nome: "LanguaTalk", url: "https://languatalk.com/try-langua", descricao: "Aulas particulares e prática guiada para fluência." },
  { nome: "Univerbal", url: "https://www.univerbal.app/", descricao: "Chat com IA para treinar inglês em cenários reais." },
  { nome: "Lingvist", url: "https://lingvist.com/pt-br/", descricao: "Vocabulário e gramática adaptativos com IA." },
  { nome: "ELSA Speak", url: "https://elsaspeak.com/en", descricao: "Feedback de pronúncia avançado e exercícios de fala." },
  { nome: "JumpSpeak", url: "https://www.jumpspeak.com/flow-gs", descricao: "Prática de conversação em inglês com IA e feedback instantâneo sobre fluência." },
  { nome: "Pingo AI", url: "https://play.google.com/store/apps/details?id=com.picoai.languageapp.android", descricao: "Aprenda idiomas conversando com IA; feedback de pronúncia e fluência em 25+ línguas." },
];

export default function AprenderInglesComIA() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para aprender inglês</span>
      </nav>
      <div className="flex items-center gap-3 mb-8">
        <AcademicCapIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para aprender inglês</h1>
      </div>
      <ExpandableContent />
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <ToolCard key={f.nome} nome={f.nome} url={f.url} descricao={f.descricao} />
        ))}
      </div>
      <div className="mt-12">
        <ComparativoFerramentas />
      </div>
      <ComoEscolher />
      <ProTips />
      <FAQSection />

      <CategoryPageSchema
        title="Aprender Inglês com IA"
        description="Ferramentas com IA para estudar, praticar conversação e melhorar a pronúncia em inglês."
        canonicalUrl="https://www.hypehour.com.br/aprender-ingles-com-ia"
        ferramentas={ferramentas}
      />
    </main>
  );
}
