import { PhotoIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

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
    descricao: "“Crie efeitos WebGL e experiências visuais interativas sem código para sites.",
  },
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
    </main>
  );
}
