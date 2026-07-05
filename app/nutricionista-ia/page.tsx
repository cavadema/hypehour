import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import { HeartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

export const metadata = {
  title: "IA para Nutricionistas — Melhores Ferramentas de Inteligência Artificial em 2026",
  description: "Descubra as melhores ferramentas de IA para nutricionistas: software de planos alimentares, cálculo nutricional automático e gestão de pacientes com inteligência artificial.",
  alternates: {
    canonical: "https://www.hypehour.com.br/nutricionista-ia",
  },
  openGraph: {
    title: "IA para Nutricionistas — Melhores Ferramentas de Inteligência Artificial em 2026",
    description: "Descubra as melhores ferramentas de IA para nutricionistas: software de planos alimentares, cálculo nutricional automático e gestão de pacientes com inteligência artificial.",
    url: "https://www.hypehour.com.br/nutricionista-ia",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA para Nutricionistas — Melhores Ferramentas de Inteligência Artificial em 2026",
    description: "Ferramentas de IA para nutricionistas: planos alimentares, cálculo nutricional e gestão de pacientes com IA.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

const ferramentas = [
  {
    nome: "The Pom",
    url: "https://thepom.app/",
    descricao: "Aplicativo de acompanhamento alimentar com IA que ajuda pacientes a registrar refeições, monitorar macros e manter a aderência ao plano nutricional no dia a dia.",
  },
  {
    nome: "Rayfit",
    url: "https://www.rayfit.com/",
    descricao: "Plataforma de saúde e nutrição com inteligência artificial para criação de planos alimentares e de treino personalizados, com foco em resultados de emagrecimento e performance.",
  },
  {
    nome: "Pencil",
    url: "https://www.pencil.dev/",
    descricao: "Ferramenta com IA para criação de conteúdo e materiais educativos, útil para nutricionistas que produzem receitas, guias alimentares e materiais de orientação para pacientes.",
  },
  {
    nome: "DietSystem",
    url: "https://www.dietsystem.com.br/",
    descricao: "Software completo para nutricionistas com montagem de planos alimentares, cálculo de macronutrientes e micronutrientes, banco de alimentos atualizado pela TACO e registro automático de consultas.",
  },
  {
    nome: "Nutria by GreenTable",
    url: "https://greentable.com.br/nutria",
    descricao: "Plataforma com IA que auxilia nutricionistas a criar planos alimentares personalizados de forma mais rápida, com sugestões inteligentes baseadas no perfil e objetivos do paciente.",
  },
  {
    nome: "IPPO",
    url: "https://www.ippo.com.br/",
    descricao: "Sistema de gestão para nutricionistas e clínicas de nutrição com prontuário eletrônico, agendamento online, planos alimentares e acompanhamento evolutivo dos pacientes.",
  },
  {
    nome: "Dietitian.com.br",
    url: "https://dietitian.com.br/",
    descricao: "Ferramenta de inteligência artificial voltada para nutricionistas brasileiros, com geração automatizada de planos alimentares e cálculos nutricionais baseados em IA.",
  },
];


export default function NutricionistaIA() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para Nutricionistas</span>
      </nav>
      <div className="flex items-center gap-3 mb-8">
        <HeartIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Nutricionistas</h1>
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
        title="IA para Nutricionistas — Melhores Ferramentas de Inteligência Artificial em 2026"
        description="Descubra as melhores ferramentas de IA para nutricionistas: software de planos alimentares, cálculo nutricional automático e gestão de pacientes com inteligência artificial."
        canonicalUrl="https://www.hypehour.com.br/nutricionista-ia"
        breadcrumbName="IA para Nutricionistas"
        ferramentas={ferramentas}
      />
    </main>
  );
}
