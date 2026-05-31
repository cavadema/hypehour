import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import { SwatchIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";

export const metadata = {
  title: "IA para Criar Logo — Melhores Geradores de Logotipo com IA em 2026",
  description: "Descubra as melhores ferramentas de IA para criar logos profissionais: geradores de logotipo com inteligência artificial para marcas, empresas e empreendedores.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ia-para-criar-logo",
  },
  openGraph: {
    title: "IA para Criar Logo — Melhores Geradores de Logotipo com IA em 2026",
    description: "Descubra as melhores ferramentas de IA para criar logos profissionais: geradores de logotipo com inteligência artificial para marcas, empresas e empreendedores.",
    url: "https://www.hypehour.com.br/ia-para-criar-logo",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IA para Criar Logo — Melhores Geradores de Logotipo com IA em 2026",
    description: "Ferramentas de IA para criar logos profissionais para marcas, empresas e empreendedores.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

const ferramentas = [
  {
    nome: "Logo AI",
    url: "https://www.logoai.com/",
    descricao: "Gerador de logos com inteligência artificial que cria identidades visuais completas — logo, paleta de cores e tipografia — a partir do nome e setor da empresa em segundos.",
  },
  {
    nome: "LogoMaster AI",
    url: "https://logomaster.ai/",
    descricao: "Plataforma de criação de logos com IA que combina geração automática com editor visual intuitivo, permitindo personalizar cada elemento do logotipo até o resultado ideal.",
  },
  {
    nome: "LogoMakr",
    url: "https://logomakr.com/",
    descricao: "Criador de logos online com biblioteca de ícones e fontes para montar logotipos personalizados de forma simples, com download gratuito em PNG e opção de SVG no plano pago.",
  },
  {
    nome: "Brandmark",
    url: "https://brandmark.io/",
    descricao: "Gerador de identidade visual com IA que cria logos únicos baseados no nome, palavras-chave e estilo da marca, entregando um kit completo de branding pronto para uso.",
  },
  {
    nome: "Design.com",
    url: "https://www.design.com/pt-br",
    descricao: "Plataforma completa de branding com IA que cria logos, kits de identidade visual e materiais de marketing personalizados para marcas e empresas de todos os tamanhos.",
  },
  {
    nome: "Smashing Logo",
    url: "https://smashinglogo.com/pt/",
    descricao: "Gerador de logos com IA que cria opções profissionais em segundos a partir do nome da empresa e estilo preferido, com download em alta resolução e formatos vetoriais.",
  },
  {
    nome: "Canva Logos",
    url: "https://www.canva.com/pt_br/logos/",
    descricao: "Criador de logos do Canva com templates profissionais e ferramentas de design intuitivas, ideal para personalizar a identidade visual da marca sem experiência técnica.",
  },
  {
    nome: "Adobe Express Logo AI",
    url: "https://www.adobe.com/br/express/create/ai/logo",
    descricao: "Gerador de logos com IA da Adobe que combina inteligência artificial com recursos de design profissional para criar identidades visuais impactantes e prontas para uso.",
  },
  {
    nome: "TurboLogo",
    url: "https://turbologo.com/pt/gerador-de-logotipos",
    descricao: "Gerador de logotipos com IA rápido e acessível, com centenas de estilos e opções de personalização, disponível em SVG e PNG para uso em qualquer contexto.",
  },
  {
    nome: "Renderforest Logo Maker",
    url: "https://www.renderforest.com/pt/logo-maker",
    descricao: "Criador de logos online com IA que gera opções profissionais baseadas no setor e estilo da empresa, integrado a outras ferramentas de identidade visual e vídeo.",
  },
  {
    nome: "SoLogo AI",
    url: "https://www.sologo.ai/pt/image-to-logo-ai-generator/",
    descricao: "Ferramenta de IA especializada em transformar imagens em logotipos vetoriais profissionais, com geração automática de variações de estilo e paleta de cores.",
  },
  {
    nome: "Venngage AI Logo Generator",
    url: "https://pt.venngage.com/ai-tools/logo-generator",
    descricao: "Gerador de logos com IA da Venngage que cria opções personalizadas para empresas e projetos com foco em simplicidade e identidade visual clara.",
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
      "@id": "https://www.hypehour.com.br/ia-para-criar-logo/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hypehour.com.br" },
        { "@type": "ListItem", "position": 2, "name": "IA para Criar Logo", "item": "https://www.hypehour.com.br/ia-para-criar-logo" },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.hypehour.com.br/ia-para-criar-logo/#collectionpage",
      "name": "IA para Criar Logo",
      "description": "Seleção das melhores ferramentas de inteligência artificial para criar logos profissionais para marcas, empresas e empreendedores.",
      "url": "https://www.hypehour.com.br/ia-para-criar-logo",
      "isPartOf": { "@id": "https://www.hypehour.com.br/#website" },
      "breadcrumb": { "@id": "https://www.hypehour.com.br/ia-para-criar-logo/#breadcrumb" },
      "mainEntity": {
        "@type": "ItemList",
        "@id": "https://www.hypehour.com.br/ia-para-criar-logo/#itemlist",
        "itemListOrder": "http://schema.org/ItemListOrderAscending",
        "numberOfItems": 12,
        "itemListElement": ferramentas.map((f, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": f.nome,
        })),
      },
    },
  ],
};

export default function IaParaCriarLogo() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <SwatchIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Criar Logo</h1>
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
