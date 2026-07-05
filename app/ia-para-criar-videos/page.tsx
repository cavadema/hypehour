import ExpandableContent from "./ExpandableContent";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import ComparativoFerramentas from "./ComparativoFerramentas";
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

const ferramentas = [
    { nome: "Pixverse", url: "/ferramentas/pixverse", descricao: "Gerador de vídeos com IA em múltiplos estilos — realista, anime, cartoon e cinematográfico — a partir de texto ou imagem, com plano gratuito disponível." },
    { nome: "Viggle AI", url: "/ferramentas/viggle-ai", descricao: "Anime qualquer personagem com movimentos realistas usando vídeos de referência — ideal para criar vídeos de dança e motion virais para redes sociais." },
    { nome: "Renderforest", url: "https://www.renderforest.com/pt/ai-video-generator", descricao: "Plataforma de criação de vídeos, animações, logos e mockups com templates profissionais e IA, pensada para marcas, agências e negócios que precisam de conteúdo visual em escala." },
    { nome: "Pixelcut", url: "https://www.pixelcut.ai/pt-br/criar-videos-com-ia", descricao: "Crie vídeos com IA de forma rápida, com remoção de fundo automática, edição simplificada e ferramentas otimizadas para e-commerce, produtos e redes sociais." },
    { nome: "MindVideo", url: "https://www.mindvideo.ai/pt/", descricao: "Gera vídeos a partir de descrições textuais com modelos de IA de última geração, com controle de câmera, consistência de personagens e alta qualidade visual." },
    { nome: "Easy-Peasy.AI", url: "https://easy-peasy.ai/pt/ai-video-generator", descricao: "Plataforma all-in-one com gerador de vídeos por IA, criação de imagens, roteiros e conteúdo de marketing, tudo em um único ambiente para criadores de conteúdo." },
    { nome: "EaseMate", url: "https://www.easemate.ai/br/ai-video-generator", descricao: "Ferramenta de geração de vídeos com IA que transforma texto e imagens em vídeos profissionais com múltiplos estilos, formatos e trilha sonora automática." },
    { nome: "Vivideo", url: "https://vivideo.ai/pt-br/ferramentas/gerador-de-video-ia", descricao: "Gerador de vídeos com inteligência artificial que transforma descrições textuais em vídeos dinâmicos e criativos com alta qualidade visual e variedade de estilos." },
    { nome: "AI Studios", url: "https://www.aistudios.com/pt", descricao: "Crie vídeos profissionais com avatares de IA realistas e narração em mais de 80 idiomas a partir de texto, ideal para treinamentos corporativos, marketing e e-learning." },
    { nome: "TopMediai", url: "https://br.topmediai.com/ai-video-generator/", descricao: "Suite completa de ferramentas de IA para geração de vídeos, edição inteligente, síntese de voz e criação de conteúdo multimídia em uma única plataforma acessível." },
    { nome: "WayIn AI", url: "https://wayin.ai/pt/tools/ai-video-generator/", descricao: "Plataforma de criação de conteúdo com IA que gera vídeos automaticamente para redes sociais, campanhas de marketing e comunicação digital com templates personalizáveis." },
    { nome: "Magnific", url: "https://www.magnific.com/br/ai/gerador-video", descricao: "Ferramenta de geração e upscaling de imagens e vídeos com IA de ultra-alta resolução, transformando conteúdo comum em material de qualidade fotográfica e cinematográfica." },
    { nome: "PicLumen", url: "/ferramentas/piclumen", descricao: "Plataforma criativa com IA para gerar vídeos e imagens usando modelos avançados como Kling, Seedance e Seedream com múltiplos takes e áudio nativo." },
    { nome: "Fliki", url: "/ferramentas/fliki", descricao: "Gera vídeos completos com narração realista, clipes automáticos e legendas a partir de texto ou roteiro, sem precisar gravar ou editar." },
    { nome: "Vidwud", url: "/ferramentas/vidwud", descricao: "Converte imagens e textos em vídeos dinâmicos com IA, com efeitos de movimento e transformações de estilo." },
    {
        nome: "Remotion",
        url: "https://www.remotion.dev/",
        descricao: "Crie vídeos programaticamente usando React, permitindo automação, renderização escalável e edição dinâmica.",
    },
    {
        nome: "Hedra",
        url: "/ferramentas/hedra",
        descricao: "Plataforma de criação de vídeo com IA focada em avatares falantes e personagens expressivos — transforma imagens e áudio em vídeos com sincronização labial realista.",
    },
    {
        nome: "Reelive",
        url: "https://reelive.ai/",
        descricao: "Plataforma de IA para criar vídeos curtos e envolventes otimizados para redes sociais.",
    },
    {
        nome: "Clipwise",
        url: "https://www.clipwise.ai/",
        descricao: "Criação de vídeos curtos e virais para redes sociais com automação de roteiro e edição.",
    },
    {
        nome: "Vids.new",
        url: "https://vids.new",
        descricao: "Plataforma ultra-rápida para criar e editar vídeos com o poder da inteligência artificial."
    },
    {
        nome: "Elser AI",
        url: "https://www.elser.ai/",
        descricao: "Plataforma completa para gerar vídeos e filmes de anime com consistência de personagens e cenas.",
    },
    {
        nome: "Hailuo AI",
        url: "/ferramentas/hailuo-ai",
        descricao: "Plataforma inovadora que transforma prompts de texto e imagens em vídeos de alta qualidade em segundos com IA avançada.",
    },
    {
        nome: "Leadde",
        url: "https://leadde.ai/",
        descricao: "Criador de vídeos inteligente para empresas que transforma documentos e slides em vídeos envolventes com avatares e vozes de IA.",
    },
    {
        nome: "LTX-2",
        url: "https://ltx.io/model/ltx-2",
        descricao: "Modelo multimodal de próxima geração para geração de vídeo e áudio sincronizados em alta qualidade e resolução 4K.",
    },
    {
        nome: "ReelBase",
        url: "https://reelbase.io/",
        descricao: "Plataforma de criação de vídeos curtos com IA para maximizar o engajamento em redes sociais.",
    },
    {
        nome: "YouClip",
        url: "https://www.youclip.id/",
        descricao: "Transforme vídeos longos em clipes curtos automaticamente com IA para TikTok e Reels.",
    },
    {
        nome: "Clipchamp",
        url: "/ferramentas/clipchamp",
        descricao: "Editor de vídeo online da Microsoft com recursos de IA para criação rápida de conteúdo.",
    },
    {
        nome: "Kapwing",
        url: "/ferramentas/kapwing",
        descricao: "Editor de vídeo online colaborativo com ferramentas de IA para legendas, cortes e melhoria de áudio.",
    },
    {
        nome: "Dzine",
        url: "https://www.dzine.ai/",
        descricao: "Ferramenta de design e edição de imagem/vídeo com IA para criadores, com recursos de generative fill e face swap.",
    },
    {
        nome: "Tavus",
        url: "https://www.tavus.io/",
        descricao: "IA para geração de vídeos personalizados em escala, muito usada em vendas, marketing e onboarding.",
    },
    {
        nome: "VEED",
        url: "/ferramentas/veed",
        descricao: "Editor de vídeo online intuitivo com IA para legendas automáticas, tradução e edição rápida.",
    },
    {
        nome: "Vidiio",
        url: "https://vidiio.net/",
        descricao: "Plataforma de criação e edição de vídeos com IA para marketing e redes sociais.",
    },
    {
        nome: "Google Gemini Veo 3.1",
        url: "https://gemini.google/overview/video-generation/",
        descricao: "Modelo de geração de vídeo mais capaz do Google, criando vídeos 1080p de alta qualidade.",
    },
    {
        nome: "Adobe Firefly Video Model",
        url: "https://www.adobe.com/br/products/firefly/features/ai-video-generator.html",
        descricao: "Gere vídeos a partir de texto ou imagens com controle criativo e segurança comercial.",
    },
    {
        nome: "KlingAI",
        url: "/ferramentas/klingai",
        descricao: "Ferramenta poderosa para criar vídeos realistas com movimentos complexos.",
    },
    {
        nome: "Sora",
        url: "https://openai.com/pt-BR/sora/",
        descricao: "Gerar vídeos a partir de instruções (prompts) textuais ou visuais com estilos variados — desde cenas cinematográficas até animações e composições realistas — incluindo automaticamente som e efeitos.",
    },
    {
        nome: "Invideo",
        url: "/ferramentas/invideo",
        descricao: "Plataforma de criação de vídeos com IA que transforma texto em vídeos profissionais em minutos.",
    },
    {
        nome: "Canva Gerador de Videos",
        url: "https://www.canva.com/pt_br/recursos/gerador-video-ai/",
        descricao: "Transforme texto em vídeo diretamente no editor do Canva com a tecnologia Magic Media.",
    },
    {
        nome: "Synthesia",
        url: "/ferramentas/synthesia",
        descricao: "Crie vídeos com avatares de IA realistas em mais de 120 idiomas.",
    },
    {
        nome: "Freepik Videos",
        url: "https://br.freepik.com/ai/gerador-video",
        descricao: "Gerador de vídeos de IA do Freepik para criar clipes visuais rapidamente.",
    },
    {
        nome: "Deevid",
        url: "https://deevid.ai/pt",
        descricao: "Crie vídeos com avatares virtuais para comunicação corporativa e educacional.",
    },
    {
        nome: "HeyGen",
        url: "/ferramentas/heygen",
        descricao: "Plataforma líder para criação de vídeos com avatares personalizados e tradução de vídeo.",
    },
    {
        nome: "Steve.AI",
        url: "https://www.steve.ai/pt",
        descricao: "Transforme texto, blogs e áudio em vídeos animados ou live-action.",
    },
    {
        nome: "Vidnoz",
        url: "/ferramentas/vidnoz",
        descricao: "Ferramenta gratuita para criar vídeos com avatares de IA e clonagem de voz.",
    },
    {
        nome: "CapCut AI",
        url: "https://www.capcut.com/pt-br/tools/ai-video-generator",
        descricao: "Gerador de vídeo integrado ao CapCut para criar conteúdo viral para redes sociais.",
    },
    {
        nome: "FlexClip",
        url: "/ferramentas/flexclip",
        descricao: "Criador de vídeos online simples com ferramentas de IA para narração e legendagem.",
    },
    {
        nome: "Visla",
        url: "https://www.visla.us/",
        descricao: "Plataforma tudo-em-um para gravar, editar e gerar vídeos com IA.",
    },
    {
        nome: "TwelveLabs",
        url: "https://www.twelvelabs.io/",
        descricao: "IA multimodal para buscar e entender vídeos em linguagem natural com compreensão de tempo e espaço.",
    },
    {
        nome: "Higgsfield",
        url: "/ferramentas/higgsfield",
        descricao: "Plataforma de IA para criação e edição de vídeos com recursos avançados de geração.",
    },
    {
        nome: "Pika",
        url: "https://pika.art/login",
        descricao: "Plataforma focada em animação e geração de vídeo com estilos artísticos únicos.",
    },
    {
        nome: "Trugen AI",
        url: "https://trugen.ai/",
        descricao: "Plataforma de geração de vídeos com IA para criar conteúdo visual de alta qualidade.",
    },
    {
        nome: "UniFab AI Video Enhancer",
        url: "https://unifab.ai/ai-video-enhancer.htm",
        descricao: "Melhore e faça upscaling de vídeos até 16K com IA, redução de ruído e conversão de formatos.",
    },
    {
        nome: "Kaiber",
        url: "https://www.kaiber.ai/superstudio",
        descricao: "Crie animações e vídeos estilizados a partir de imagens ou texto, usado por artistas.",
    },
    {
        nome: "Cybercut",
        url: "https://www.cybercut.ai/",
        descricao: "Editor de vídeo com IA para cortes automáticos, legendas e otimização de conteúdo.",
    },
    {
        nome: "Magiclip",
        url: "https://magiclip.io/",
        descricao: "Plataforma de IA para criar vídeos virais curtos com legendas automáticas e otimização para redes sociais.",
    },
    {
        nome: "Ripplica",
        url: "https://www.ripplica.com/",
        descricao: "Automatize qualquer workflow baseado em navegador com agentes de IA usando apenas um vídeo simples.",
    },
    {
        nome: "Filmsupply",
        url: "https://www.filmsupply.com/",
        descricao: "Plataforma de vídeos premium com curadoria e ferramentas de IA para busca e edição.",
    },
    {
        nome: "Pippit",
        url: "https://www.pippit.ai/pt-br",
        descricao: "Ferramenta de IA para criação e edição de vídeos curtos para redes sociais.",
    },
    {
        nome: "OpusClip",
        url: "/ferramentas/opusclip",
        descricao: "Plataforma em nuvem com IA para transformar vídeos longos em clipes curtos virais e prontos para publicação em redes sociais.",
    },
    {
        nome: "Filmora",
        url: "https://filmora.wondershare.com.br/",
        descricao: "Edição de vídeo fácil, rápida e profissional em qualquer dispositivo. Transforma ideias em vídeos de alta qualidade rapidamente.",
    },
    {
        nome: "Xpression camera",
        url: "https://xpressioncamera.com/",
        descricao: "Câmera virtual com IA que anima qualquer foto em tempo real para vídeo e streaming.",
    },
    {
        nome: "Pollo",
        url: "https://pollo.ai/ ",
        descricao: "IA em nuvem para gerar vídeos e imagens impressionantes a partir de texto ou fotos.",
    },
    {
        nome: "LTX studio",
        url: "https://ltx.studio/",
        descricao: "Estúdio criativo com IA para gerar vídeos cinematográficos a partir de texto.",
    },
    {
        nome: "Odyssey",
        url: "https://odyssey.ml/",
        descricao: "Vídeos interativos gerados por IA que respondem às suas ações em tempo real.",
    },
    {
        nome: "EgoX",
        url: "https://keh0t0.github.io/EgoX/",
        descricao: "Transforme um único vídeo em terceira pessoa em uma experiência convincente em primeira pessoa.",
    },
    {
        nome: "WAN 2.6",
        url: "https://create.wan.video/generate/video/generate?model=wan2.6",
        descricao: "Gere vídeos realistas com o modelo WAN 2.6.",
    },
    {
        nome: "Submagic",
        url: "https://www.submagic.co/pt-br",
        descricao: "Legendas automáticas com IA, cortes e edição para vídeos curtos.",
    },
    {
        nome: "AutoShorts",
        url: "https://autoshorts.ai/",
        descricao: "Crie vídeos curtos automaticamente com IA para redes sociais.",
    },
    {
        nome: "Viral Clips Crew",
        url: "https://github.com/alexfazio/viral-clips-crew/",
        descricao: "Projeto open-source para criar clipes virais com IA.",
    },
    {
        nome: "Klap",
        url: "https://klap.app/",
        descricao: "Transforme vídeos longos em clipes curtos para redes sociais com IA.",
    },
    {
        nome: "Eightify",
        url: "https://eightify.app/",
        descricao: "Resuma vídeos do YouTube com IA e extraia insights em minutos.",
    },
    {
        nome: "Morph Studio",
        url: "https://www.morphstudio.com/",
        descricao: "Estúdio de criação de vídeos com IA para efeitos avançados.",
    },
    { nome: "Luma Labs", url: "https://lumalabs.ai/", descricao: "Plataforma de IA para gerar vídeos de alta qualidade com Dream Machine e modelos de geração avançados." },
    { nome: "Descript", url: "/ferramentas/descript", descricao: "Editor de vídeo e podcast com IA que permite editar pelo texto, gerar B-roll, remover silêncios e aplicar layouts automaticamente." },
    { nome: "Detail", url: "https://detail.co/", descricao: "Grave, edite e compartilhe com AI em um toque: Auto Edit, teleprompter e clips para social." },
];

export const metadata = {
    title: "IA para Criar Vídeos - Ferramentas de Inteligência Artificial",
    description: "Descubra as melhores ferramentas de IA para criar, editar e gerar vídeos automaticamente.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ia-para-criar-videos",
    },
  openGraph: {
    title: "IA para Criar Vídeos - Ferramentas de Inteligência Artificial",
    description: "Descubra as melhores ferramentas de IA para criar, editar e gerar vídeos automaticamente.",
    url: "https://www.hypehour.com.br/ia-para-criar-videos",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "IA para Criar Vídeos - Ferramentas de Inteligência Artificial",
    description: "Descubra as melhores ferramentas de IA para criar, editar e gerar vídeos automaticamente.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function IaParaCriarVideos() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para Criar Vídeos</span>
      </nav>
            <div className="flex items-center gap-3 mb-8">
                <VideoCameraIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Criar Vídeos</h1>
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
        title="IA para Criar Vídeos - Ferramentas de Inteligência Artificial"
        description="Descubra as melhores ferramentas de IA para criar, editar e gerar vídeos automaticamente."
        canonicalUrl="https://www.hypehour.com.br/ia-para-criar-videos"
        ferramentas={ferramentas}
      />
    </main>
    );
}
