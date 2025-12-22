import { PhotoIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";

const ferramentas = [
  {
    nome: "Whisk",
    url: "https://labs.google/fx/pt/tools/whisk",
    descricao: "IA do Google para geração e edição de imagens.",
  },
  {
    nome: "Pixlr",
    url: "https://pixlr.com/",
    descricao: "Editor de imagens online com recursos de IA.",
  },
  {
    nome: "Midjourney",
    url: "https://www.midjourney.com/",
    descricao: "Geração de imagens artísticas por IA via Discord.",
  },
  {
    nome: "DALL·E",
    url: "https://openai.com/dall-e-2",
    descricao: "Geração de imagens realistas a partir de texto.",
  },
  {
    nome: "Stable Diffusion",
    url: "https://stability.ai/",
    descricao: "Modelo open source para geração de imagens.",
  },
  {
    nome: "Adobe Firefly",
    url: "https://www.adobe.com/sensei/generative-ai/firefly.html",
    descricao: "Ferramenta de IA generativa da Adobe para imagens.",
  },
  {
    nome: "Leonardo AI",
    url: "https://leonardo.ai/",
    descricao: "Geração de imagens criativas com IA.",
  },
  {
    nome: "RunwayML",
    url: "https://runwayml.com/",
    descricao: "Plataforma de IA para criação de vídeos e imagens.",
  },
  {
    nome: "Ideogram",
    url: "https://ideogram.ai/",
    descricao: "Geração de imagens e textos artísticos por IA.",
  },
  {
    nome: "Canva AI Image Generator",
    url: "https://www.canva.com/ai-image-generator/",
    descricao: "Gere imagens diretamente no Canva usando IA.",
  },
  {
    nome: "Playground AI",
    url: "https://playgroundai.com/",
    descricao: "Criação e edição de imagens com IA de forma colaborativa.",
  },
  {
    nome: "Black Forest Labs",
    url: "https://bfl.ai/",
    descricao: "Modelos avançados de geração de imagens com IA, criadores do FLUX.",
  },
  {
    nome: "Nano banana pro",
    url: "https://gemini.google/pt/overview/image-generation/?hl=pt-PT",
    descricao: "Ferramenta de geração de imagens do Google com modelos Gemini.",
  },
  {
    nome: "X-design",
    url: "https://www.x-design.com/",
    descricao: "Plataforma de design com IA para criação e edição de imagens profissionais.",
  },
  {
    nome: "Seedream Bytedance",
    url: "https://seed.bytedance.com/en/seedream4_5",
    descricao: "Modelo de geração de imagens da ByteDance com alta qualidade e controle criativo.",
  },
  {
    nome: "Kling Avatar",
    url: "https://app.klingai.com/global/ai-human/image/new",
    descricao: "Crie avatares realistas e personalizados com IA da Kling.",
  },
  {
    nome: "Lovart",
    url: "https://www.lovart.ai/pt",
    descricao: "O primeiro agente de design do mundo que automatiza toda a jornada do design com IA.",
  },
  {
    nome: "Vertical Studio",
    url: "https://app.verticalstudio.ai/stream",
    descricao: "Plataforma all-in-one para acessar múltiplos modelos de IA para texto, imagem, vídeo e áudio.",
  },
  {
    nome: "HeyGen",
    url: "https://www.heygen.com/",
    descricao: "Crie vídeos com avatares de IA e traduções automáticas em múltiplos idiomas.",
  },
  {
    nome: "Higgsfield",
    url: "https://higgsfield.ai/",
    descricao: "Plataforma de geração de imagens e vídeos com IA de alta qualidade.",
  },
  {
    nome: "Mosaic",
    url: "https://www.topazlabs.com/mosaic",
    descricao: "Usa inteligência artificial para trazer de volta detalhes, remover danos e dar nova vida a imagens antigas.",
  },
  {
    nome: "Unicorn Studio",
    url: "https://www.unicorn.studio/",
    descricao: "Crie efeitos WebGL e experiências visuais interativas sem código para sites.",
  },
  {
    nome: "Photo Genius",
    url: "https://www.genspark.ai/photo_genius",
    descricao: "Ferramenta com IA para gerar e aprimorar fotos criativas com ajustes inteligentes.",
  },
  {
    nome: "Krea",
    url: "https://www.krea.ai/",
    descricao: "Plataforma com IA para criar e explorar imagens geradas por IA em comunidade colaborativa.",
  },
  {
    nome: "Illustrate AI",
    url: "https://designbundles.net/illustrate-ai",
    descricao: "Transforma instruções em obras de arte de alta resolução e com licença comercial.",
  },
   {
    nome: "No Background Coffee",
    url: "https://www.no-background.coffee/",
    descricao: "Ferramenta gratuita de IA que remove fundos de imagens de forma limpa.",
  }
  ,
  {
    nome: "WAN 2.6",
    url: "https://create.wan.video/generate/video/generate?model=wan2.6",
    descricao: "Modelo multimodal para gerar imagens e vídeos de alta qualidade.",
  },
  {
    nome: "DorLabs",
    url: "https://dorlabs.ai/",
    descricao: "Ferramentas de IA para criação visual e edição de imagens.",
  },
  {
    nome: "Bing Image Creator",
    url: "https://www.bing.com/images/create",
    descricao: "Criador de imagens gratuito da Microsoft usando DALL-E.",
  },
  {
    nome: "Craiyon",
    url: "https://www.craiyon.com/pt",
    descricao: "Gerador de imagens com IA gratuito e acessível.",
  },
  {
    nome: "Artbreeder",
    url: "https://www.artbreeder.com/",
    descricao: "Crie e misture imagens usando IA de forma colaborativa.",
  },
  {
    nome: "BlueWillow",
    url: "https://bluewillow.ai/",
    descricao: "Gerador de imagens com IA gratuito focado em qualidade.",
  },
  {
    nome: "Tripo3D",
    url: "https://www.tripo3d.ai/pt",
    descricao: "Gere modelos 3D a partir de texto ou imagens usando IA.",
  }
  ,
  {
    nome: "Arcads",
    url: "https://www.arcads.ai/",
    descricao: "Crie anúncios e visuais com IA focados em performance.",
  },
  {
    nome: "Creatify",
    url: "https://creatify.ai/br/",
    descricao: "Crie anúncios e vídeos curtos com IA e templates prontos para social.",
  },
  {
    nome: "Image Upscaler",
    url: "https://imgupscaler.com/",
    descricao: "Melhore a qualidade de imagens com upscaling inteligente usando IA.",
  },
  {
    nome: "Media.io",
    url: "https://www.media.io/",
    descricao: "Suite de ferramentas de IA para edição, conversão e otimização de mídia.",
  }
];

export const metadata = {
  title: "Ferramentas de Inteligência Artificial para Imagens",
  description: "Descubra as melhores ferramentas de inteligência artificial para criação, edição e geração de imagens.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/ia-para-imagens',
  },
};

export default function IaParaImagens() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <PhotoIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Imagens</h1>
      </div>
      <p className="mb-8 text-gray-600">
        Descubra as melhores ferramentas de inteligência artificial para criação, edição e geração de imagens.
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
    </main>
  );
}
