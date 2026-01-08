import { HomeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import FAQSection from "./FAQSection";
import Script from "next/script";

export const metadata = {
  title: "IA para Design de Interiores",
  description: "Ferramentas de IA para design de interiores, decoração e planejamento de ambientes.",
  alternates: { canonical: "https://www.hypehour.com.br/ia-para-design-de-interiores" },
};

const ferramentas = [
  { nome: "Planner 5D", url: "https://planner5d.com/pt/use/ia-decoracao", descricao: "Plataforma de design 3D com IA para planejar e decorar interiores de forma realista." },
  { nome: "RoomGPT", url: "https://www.roomgpt.io/", descricao: "Gere designs de interiores personalizados com IA a partir de fotos de ambientes." },
  { nome: "Leonardo AI Interior Design", url: "https://leonardo.ai/ai-interior-design/", descricao: "Crie designs de interiores impressionantes com IA generativa e modelos personalizados." },
  { nome: "DecoraGPT", url: "https://decoragpt.com.br/", descricao: "IA brasileira para gerar ideias de decoração e transformar ambientes virtualmente." },
  { nome: "Home IA Design Interior", url: "https://apps.apple.com/br/app/home-ia-design-interior-ia/id6464476667", descricao: "App iOS com IA para design de interiores e visualização de projetos em 3D." },
  { nome: "Canva Design de Interiores", url: "https://www.canva.com/pt_br/design-interiores-ia/", descricao: "Ferramentas do Canva com IA para criar moodboards e designs de interiores." },
  { nome: "Interior Design AI App", url: "https://play.google.com/store/apps/details?id=co.appnation.interiordesigner&hl=pt_BR", descricao: "Aplicativo Android com IA para transformar fotos de ambientes em projetos de design." },
  { nome: "PromeAI Interior Design", url: "https://www.promeai.pro/pt/interior-design-transformation", descricao: "Transforme espaços com IA, gerando renders realistas e variações de design." },
  { nome: "IA Decora", url: "https://iadecora.com/", descricao: "Plataforma brasileira com IA para decoração e design de interiores automático." },
  { nome: "PaintIt.AI", url: "https://paintit.ai/", descricao: "IA para visualizar cores e acabamentos em ambientes reais ou virtuais." },
  { nome: "BgRem Interior Design Planner", url: "https://bgrem.ai/pt/interior-design-planner/", descricao: "Planeje e redesenhe interiores com IA, removendo e substituindo elementos." },
  { nome: "DekorAI", url: "https://dekorai.com/pt/", descricao: "Gere ideias de decoração e design de interiores com IA em segundos." },
  { nome: "Arch AI Interior Design", url: "https://apps.apple.com/br/app/arch-ai-interior-design/id6446172225", descricao: "App iOS com IA para criar projetos arquitetônicos e design de interiores." },
  { nome: "Easy-Peasy AI Interior Design", url: "https://easy-peasy.ai/pt/ai-interior-design-generator", descricao: "Gerador de design de interiores com IA simples e rápido para ideias criativas." },
  { nome: "MNML.AI", url: "https://mnml.ai/", descricao: "IA minimalista para design de interiores focado em estética clean e moderna." },
  { nome: "Remodeled.AI", url: "https://remodeled.ai/", descricao: "Visualize reformas e remodelações de ambientes com IA fotorrealista." },
  { nome: "InteriorAI", url: "https://interiorai.com/", descricao: "Crie variações de design de interiores com IA a partir de uma única foto." },
  { nome: "Homestyler", url: "https://www.homestyler.com/", descricao: "Plataforma completa de design 3D com IA para interiores e decoração." },
  { nome: "DecorMatters", url: "https://decormatters.com/", descricao: "App de design de interiores com IA, realidade aumentada e comunidade criativa." },
  { nome: "Reimagine Home AI", url: "https://www.reimaginehome.ai/", descricao: "Reimagine e transforme qualquer ambiente com IA gerativa e estilos personalizados." },
];

export default function IAParaDesignDeInteriores() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <HomeIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Design de Interiores</h1>
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
      <Script id="faq-json-ld-interiores" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "O que é IA para design de interiores?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "IA para design de interiores são ferramentas que usam inteligência artificial para criar, simular e transformar ambientes internos automaticamente."
              }
            },
            {
              "@type": "Question",
              "name": "Para que serve o design de interiores com IA?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Serve para visualizar ambientes, testar estilos e planejar decoração de forma rápida e prática."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores funciona com fotos reais?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Muitas ferramentas usam fotos reais do ambiente para gerar novos layouts."
              }
            },
            {
              "@type": "Question",
              "name": "Existe IA para design de interiores gratuito?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Algumas ferramentas oferecem versões gratuitas ou testes limitados."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores é indicada para leigos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Não é necessário conhecimento técnico em arquitetura ou design."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores substitui um designer profissional?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Não. Ela auxilia no processo criativo, mas não substitui profissionais."
              }
            },
            {
              "@type": "Question",
              "name": "Design de interiores com IA é preciso?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "É bastante preciso para visualização e inspiração, mas não substitui medições técnicas."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores funciona em português?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Muitas ferramentas aceitam comandos em português."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores cria projetos completos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ela cria visualizações e sugestões de layout, não projetos executivos."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores ajuda a escolher móveis?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Ela sugere móveis, cores e estilos compatíveis."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores é usada por profissionais?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Designers usam como apoio criativo e para apresentações."
              }
            },
            {
              "@type": "Question",
              "name": "Design de interiores com IA funciona em apartamentos pequenos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. É muito útil para otimizar espaços reduzidos."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores pode simular reformas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. É possível visualizar mudanças antes de executar a obra."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores funciona online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. A maioria das ferramentas funciona via navegador."
              }
            },
            {
              "@type": "Question",
              "name": "Vale a pena usar IA para design de interiores?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Economiza tempo e ajuda a tomar decisões visuais melhores."
              }
            },
            {
              "@type": "Question",
              "name": "Qual a melhor IA para design de interiores?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Depende do objetivo, mas ferramentas modernas oferecem ótimas simulações."
              }
            },
            {
              "@type": "Question",
              "name": "IA consegue decorar um ambiente automaticamente?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Basta informar o estilo desejado."
              }
            },
            {
              "@type": "Question",
              "name": "Dá para usar IA para design de interiores sem pagar?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Algumas plataformas oferecem uso gratuito com limitações."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores funciona em casas e apartamentos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Ela se adapta a diferentes tipos de imóveis."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores cria plantas baixas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Geralmente não. O foco é visualização e decoração."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores ajuda em reformas?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Permite visualizar mudanças antes da execução."
              }
            },
            {
              "@type": "Question",
              "name": "Design de interiores com IA é realista?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. As imagens geradas são cada vez mais realistas."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores funciona no celular?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Muitas ferramentas são compatíveis com dispositivos móveis."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores entende estilos específicos?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Estilos como moderno, minimalista e industrial são comuns."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores pode sugerir paletas de cores?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Ela gera combinações harmoniosas."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores é útil para imobiliárias?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. É muito usada para staging virtual."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores gera imagens 3D?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Algumas ferramentas geram visualizações tridimensionais."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores funciona para cozinhas e banheiros?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. É muito usada nesses ambientes."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores substitui softwares profissionais?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Não. Ela complementa softwares técnicos."
              }
            },
            {
              "@type": "Question",
              "name": "IA para design de interiores vale a pena para profissionais?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Aumenta produtividade e melhora apresentações."
              }
            }
          ]
        })}
      </Script>
    </main>
  );
}
