import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";
export const metadata = {
  title: "IA para Design de Interiores",
  description: "Ferramentas de IA para design de interiores, decoração e planejamento de ambientes.",
  alternates: { canonical: "https://www.hypehour.com.br/ia-para-design-de-interiores" },
  openGraph: {
    title: "IA para Design de Interiores",
    description: "Ferramentas de IA para design de interiores, decoração e planejamento de ambientes.",
    url: "https://www.hypehour.com.br/ia-para-design-de-interiores",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "IA para Design de Interiores",
    description: "Ferramentas de IA para design de interiores, decoração e planejamento de ambientes.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

const ferramentas = [
  { nome: "Collov AI", url: "/ferramentas/collov-ai", descricao: "Plataforma de design de interiores com IA que redesenha ambientes com produtos reais de lojas parceiras, permitindo visualizar e comprar os móveis e itens de decoração diretamente." },
  { nome: "RoomX AI", url: "/ferramentas/roomxai", descricao: "Ferramenta de IA para transformar fotos de ambientes em designs de interiores profissionais com dezenas de estilos." },
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
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para Design de Interiores</span>
      </nav>
      <div className="flex items-center gap-3 mb-8">
        <HomeIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Design de Interiores</h1>
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
        title="IA para Design de Interiores"
        description="Ferramentas de IA para design de interiores, decoração e planejamento de ambientes."
        canonicalUrl="https://www.hypehour.com.br/ia-para-design-de-interiores"
        ferramentas={ferramentas}
      />
    </main>
  );
}
