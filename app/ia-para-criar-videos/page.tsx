import { VideoCameraIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";

const ferramentas = [
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
        url: "https://klingai.com/global/",
        descricao: "Ferramenta poderosa para criar vídeos realistas com movimentos complexos.",
    },
    {
        nome: "Sora",
        url: "https://openai.com/pt-BR/sora/",
        descricao: "Gerar vídeos a partir de instruções (prompts) textuais ou visuais com estilos variados — desde cenas cinematográficas até animações e composições realistas — incluindo automaticamente som e efeitos.",
    },
    {
        nome: "InVideo",
        url: "https://invideo.io/pt/criar/ai-video-generator/",
        descricao: "Crie vídeos profissionais a partir de prompts de texto, ideal para marketing e social media.",
    },
    {
        nome: "Canva Gerador de Videos",
        url: "https://www.canva.com/pt_br/recursos/gerador-video-ai/",
        descricao: "Transforme texto em vídeo diretamente no editor do Canva com a tecnologia Magic Media.",
    },
    {
        nome: "Synthesia",
        url: "https://www.synthesia.io/pt-br",
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
        url: "https://www.heygen.com/pt-br/tool/free-ai-video-generator",
        descricao: "Plataforma líder para criação de vídeos com avatares personalizados e tradução de vídeo.",
    },
    {
        nome: "Steve.AI",
        url: "https://www.steve.ai/pt",
        descricao: "Transforme texto, blogs e áudio em vídeos animados ou live-action.",
    },
    {
        nome: "Vidnoz",
        url: "https://pt.vidnoz.com/",
        descricao: "Ferramenta gratuita para criar vídeos com avatares de IA e clonagem de voz.",
    },
    {
        nome: "CapCut AI",
        url: "https://www.capcut.com/pt-br/tools/ai-video-generator",
        descricao: "Gerador de vídeo integrado ao CapCut para criar conteúdo viral para redes sociais.",
    },
    {
        nome: "FlexClip",
        url: "https://www.flexclip.com/pt/",
        descricao: "Editor de vídeo online com recursos de IA para criar vídeos de marketing.",
    },
    {
        nome: "Visla",
        url: "https://www.visla.us/",
        descricao: "Plataforma tudo-em-um para gravar, editar e gerar vídeos com IA.",
    },
    {
        nome: "Pika",
        url: "https://pika.art/login",
        descricao: "Plataforma focada em animação e geração de vídeo com estilos artísticos únicos.",
    },
    {
        nome: "Trugen AI",
        url: "https://trugen.ai/home",
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
        url: "https://www.opus.pro/pt-br",
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
];

export const metadata = {
    title: "IA para Criar Vídeos - Ferramentas de Inteligência Artificial",
    description: "Descubra as melhores ferramentas de IA para criar, editar e gerar vídeos automaticamente.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ia-para-criar-videos",
    },
};

export default function IaParaCriarVideos() {
    return (
        <main className="max-w-3xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <VideoCameraIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Criar Vídeos</h1>
            </div>
            <p className="mb-8 text-gray-600">
                Ferramentas de inteligência artificial para revolucionar sua produção de vídeo: geração a partir de texto, avatares, edição automática e muito mais.
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

            <FAQSection />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "O que é uma IA para criar vídeos?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "É uma ferramenta que usa inteligência artificial para gerar vídeos automaticamente a partir de textos, imagens, áudios ou prompts."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Qual a melhor IA para fazer vídeos hoje?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "As mais populares são Runway, Pika Labs, Luma Dream Machine e Synthesia, conhecidas pela qualidade e velocidade."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para criar vídeos funciona apenas com texto?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Não. Ela pode usar texto, imagens, vídeos curtos, narrações, gravações de voz e até referências de estilo."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Qual IA para editar vídeos automaticamente?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ferramentas como Descript, Veed.io e Kapwing utilizam IA para cortes inteligentes, remoção de ruído, transições e montagem automática."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para legendar vídeos é confiável?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim. IAs como Nova AI, CapCut e Veed.io geram legendas automáticas precisas, com tradução integrada e revisão rápida."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Existe IA gratuita para criar vídeos?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim. CapCut, Pika Labs (limitado), Veed.io Free e invideo.io oferecem planos gratuitos com funcionalidades básicas."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para fazer vídeos deixa marcas d’água?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Depende da ferramenta. A maioria das versões gratuitas inclui marca d’água."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para criar vídeos é boa para conteúdo de redes sociais?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim. A maioria das IAs gera vídeos otimizados para TikTok, Reels, YouTube Shorts e anúncios."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Qual IA transforma texto em vídeo automaticamente?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Runway, Pika Labs, Luma AI e Synthesia permitem criar vídeos completos apenas com prompts."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para editar vídeos substitui um editor humano?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Não totalmente. Ela acelera tarefas repetitivas, mas não substitui a criatividade profissional."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para legendar vídeos suporta vários idiomas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim. Muitas oferecem legendagem e tradução automática em dezenas de idiomas."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "É possível criar vídeos longos com IA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim, mas algumas ferramentas têm limites de duração dependendo do plano."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para criar vídeos funciona em celular?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim, apps como CapCut e Veed.io têm versões mobile com IA integrada."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Quais são os tipos de vídeos criados por IA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "A IA pode gerar vídeos animados, realistas, institucionais, narrados, educativos ou publicitários."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para fazer vídeos pode criar pessoas artificiais (avatars)?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim. Plataformas como Synthesia e HeyGen criam apresentadores digitais realistas."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Como funciona uma IA que cria vídeos a partir de texto?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ela interpreta o prompt, identifica estilos visuais compatíveis e gera cenas baseadas em modelos de difusão ou vídeo-to-video."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Qual IA gratuita é melhor para criar vídeos rapidamente?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "CapCut e InVideo são opções populares por oferecer recursos robustos sem custo inicial."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Qual IA é boa para fazer vídeos de marketing?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Runway e Synthesia são amplamente usadas por empresas para criar vídeos institucionais e promocionais."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Dá para fazer vídeos realistas com IA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim. Ferramentas como Luma Dream Machine e Pika Labs criam movimentos realistas e cenas cinematográficas."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Qual IA é mais usada para editar vídeos automaticamente?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Descript e Veed.io são referência em edição automatizada baseada em texto."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para legendar vídeos pode traduzir automaticamente?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim. A maioria suporta tradução instantânea para dezenas de idiomas."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Existe IA para transformar um vídeo simples em algo mais profissional?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim. Runway e Kapwing aplicam filtros, correções de cor, cortes e ajustes automáticos."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para fazer vídeos usa modelos prontos?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim. A maioria oferece templates para acelerar criação de conteúdo."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "É possível criar vídeos com avatar digital usando IA?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim. HeyGen e Synthesia permitem criar apresentadores virtuais realistas."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para criar vídeos precisa de computador potente?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Não. Como o processamento ocorre na nuvem, até celulares dão conta do uso."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Quais ferramentas de IA são boas para transformar áudio em vídeo?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Pika, Runway, Veed.io e Luma AI convertem narrações em vídeos automáticos."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Como a IA ajuda iniciantes na edição de vídeo?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Ela automatiza cortes, ritmo, legenda, trilha e transições."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para editar vídeos pode remover objetos da cena?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim. Runway e CapCut possuem recursos de object removal via IA."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para criar vídeos é boa para criadores de conteúdo?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim. Ela acelera produção, reduz custos e permite criar vídeos diariamente."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "IA para vídeos pode gerar animações completas?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Sim. Várias ferramentas geram animações 2D e 3D baseadas apenas em prompts."
                                }
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
