import ExpandableContent from "./ExpandableContent";
import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

const ferramentas = [
    {
        nome: "YuanZai",
        url: "https://www.yuanzai.world/",
        descricao: "RPG de mundo aberto movido por IA onde jogadores exploram diferentes eras através de simulações de viagem no tempo.",
    },
    {
        nome: "Wingman",
        url: "https://www.funwithcomputervision.com/wingman/",
        descricao: "Co-piloto experimental que utiliza visão computacional para permitir o controle de jogos por gestos e movimentos faciais.",
    },
    {
        nome: "Sekai",
        url: "https://sekaiapp.com/",
        descricao: "TikTok para mini-apps e criação de jogos e experiências interativas com IA sem código.",
    },
    {
        nome: "YouTube Playables Builder",
        url: "https://www.youtube.com/playablesbuilder/",
        descricao: "Ferramenta do YouTube para criar jogos interativos e experiências jogáveis diretamente na plataforma."
    },
    {
        nome: "Beam",
        url: "https://site.beam.game/",
        descricao: "Plataforma de IA para criar histórias interativas e jogos com vídeos, imagens e música geradas por IA."
    },
    {
        nome: "AI Dungeon",
        url: "https://aidungeon.com/",
        descricao: "Jogo de aventura baseado em texto onde você dirige a história e a IA dá vida às suas escolhas."
    },
    {
        nome: "Gambo",
        url: "https://www.gambo.ai/",
        descricao: "Agente de vibe coding para criar jogos que geram receita desde o primeiro dia com IA."
    },
    {
        nome: "Astrocade",
        url: "https://www.astrocade.com/",
        descricao: "Plataforma para criar e jogar jogos feitos pela comunidade com ferramentas intuitivas."
    },
    {
        nome: "Ludo.ai",
        url: "https://ludo.ai/",
        descricao: "Plataforma completa com IA para design de jogos: conceitos, sprites, assets 3D, áudio e análise de mercado."
    },
    {
        nome: "Rosebud AI",
        url: "https://lab.rosebud.ai/ai-game-creator",
        descricao: "Game creator online gratuito que transforma ideias em jogos com IA, sem necessidade de programação."
    },
    {
        nome: "GDevelop",
        url: "https://gdevelop.io/pt-br",
        descricao: "Motor de jogo open-source no-code com IA para criar jogos 2D, 3D e multiplayer sem limites."
    },
    {
        nome: "Meshy",
        url: "https://www.meshy.ai/pt-BR/",
        descricao: "Gerador de modelos 3D que transforma texto e imagens em assets 3D para jogos em segundos."
    },
    {
        nome: "Unity AI",
        url: "https://unity.com/pt/features/ai",
        descricao: "Ferramentas de IA integradas no Unity para assistência contextual, geração de assets e automação de tarefas."
    }
];

export const metadata = {
    title: "Criar jogos com IA",
    description: "Descubra as melhores ferramentas de IA para criar jogos. De desenvolvimento sem código a geração de assets, estas plataformas usam inteligência artificial para transformar suas ideias em jogos reais.",
    alternates: {
        canonical: 'https://www.hypehour.com.br/ia-para-jogos',
    },
  openGraph: {
    title: "Criar jogos com IA",
    description: "Descubra as melhores ferramentas de IA para criar jogos. De desenvolvimento sem código a geração de assets, estas plataformas usam inteligência artificial para transformar suas ideias em jogos reais.",
    url: "https://www.hypehour.com.br/ia-para-jogos",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Criar jogos com IA",
    description: "Descubra as melhores ferramentas de IA para criar jogos. De desenvolvimento sem código a geração de assets, estas plataformas usam inteligência artificial para transformar suas ideias em jogos reais.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function IAparaJogos() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para Jogos</span>
      </nav>
            <div className="flex items-center gap-3 mb-8">
                <RocketLaunchIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Jogos</h1>
            </div>
      <ExpandableContent />
            <div className="grid gap-6 sm:grid-cols-2">
                {ferramentas.map((ferramenta) => (
                    <ToolCard key={ferramenta.nome} nome={ferramenta.nome} url={ferramenta.url} descricao={ferramenta.descricao} />
                ))}
            </div>
            <div className="mt-12">
              <ComparativoFerramentas />
            </div>
            <ComoEscolher />
            <ProTips />
            <FAQSection />
    
      <CategoryPageSchema
        title="Criar jogos com IA"
        description="Descubra as melhores ferramentas de IA para criar jogos. De desenvolvimento sem código a geração de assets, estas plataformas usam inteligência artificial para transformar suas ideias em jogos reais."
        canonicalUrl="https://www.hypehour.com.br/ia-para-jogos"
        ferramentas={ferramentas}
      />
    </main>
    );
}
