import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import { HeartIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.hypehour.com.br/#organization",
      "name": "Hypehour",
      "url": "https://www.hypehour.com.br",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.hypehour.com.br/#website",
      "name": "Hypehour",
      "url": "https://www.hypehour.com.br",
      "publisher": { "@id": "https://www.hypehour.com.br/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.hypehour.com.br/nutricionista-ia/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br" },
        { "@type": "ListItem", "position": 2, "name": "IA para Nutricionistas", "item": "https://www.hypehour.com.br/nutricionista-ia" },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.hypehour.com.br/nutricionista-ia/#collectionpage",
      "name": "IA para Nutricionistas",
      "description": "Seleção das melhores ferramentas de inteligência artificial para nutricionistas, incluindo software de planos alimentares, cálculo nutricional e gestão de pacientes.",
      "url": "https://www.hypehour.com.br/nutricionista-ia",
      "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
      "breadcrumb": { "@id": "https://www.hypehour.com.br/nutricionista-ia/#breadcrumb" },
      "mainEntity": {
        "@type": "ItemList",
        "@id": "https://www.hypehour.com.br/nutricionista-ia/#itemlist",
        "itemListOrder": "http://schema.org/ItemListOrderAscending",
        "numberOfItems": 7,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "The Pom" },
          { "@type": "ListItem", "position": 2, "name": "Rayfit" },
          { "@type": "ListItem", "position": 3, "name": "Pencil" },
          { "@type": "ListItem", "position": 4, "name": "DietSystem" },
          { "@type": "ListItem", "position": 5, "name": "Nutria by GreenTable" },
          { "@type": "ListItem", "position": 6, "name": "IPPO" },
          { "@type": "ListItem", "position": 7, "name": "Dietitian.com.br" },
        ],
      },
    },
  ],
};

export default function NutricionistaIA() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <HeartIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Nutricionistas</h1>
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
      <div className="mt-12">
        <ComparativoFerramentas />
      </div>
      <ComoEscolher />
      <ProTips />
      <FAQSection />
    </main>
  );
}
