import { EnvelopeIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const newsletters = [
  {
    nome: "AiDrop",
    url: "https://www.aidrop.news/",
    descricao: "Resumos semanais de avanços em IA: ferramentas, prompts e modelos novos.",
  },
  {
    nome: "AI Factory News",
    url: "https://materiais.distrito.me/report/newsletter",
    descricao: "Newsletter do Distrito focada em inteligência artificial e inovação.",
  },
  {
    nome: "IAí?",
    url: "https://oglobo.globo.com/blogs/iai/",
    descricao: "Newsletter do O Globo sobre como a IA transforma o dia a dia.",
  },
  {
    nome: "The Rundown AI",
    url: "https://www.therundown.ai/",
    descricao: "Newsletter diária com as principais notícias e tendências de IA.",
  },
  {
    nome: "Mindstream",
    url: "https://www.mindstream.news/",
    descricao: "Análises profundas e insights sobre o futuro da inteligência artificial.",
  },
  {
    nome: "AI Breakfast",
    url: "https://aibreakfast.beehiiv.com/",
    descricao: "Comece o dia com as principais novidades de IA direto no seu inbox.",
  },
  {
    nome: "TLDR AI",
    url: "https://tldr.tech/ai",
    descricao: "Resumos rápidos das principais notícias de IA em formato TLDR.",
  },
  {
    nome: "IA Sobcontrole",
    url: "https://www.iasobcontrole.tech/",
    descricao: "Newsletter brasileira sobre inteligência artificial e tecnologia.",
  },
  {
    nome: "O Algoritmo",
    url: "https://news.o-algoritmo.com/",
    descricao: "Newsletter sobre algoritmos, IA e o impacto da tecnologia na sociedade.",
  },
];

export const metadata = {
  title: "Newsletters de Inteligência Artificial",
  description: "Lista completa de newsletters sobre inteligência artificial para se manter atualizado com as principais novidades e tendências.",
  alternates: {
    canonical: "https://www.hypehour.com.br/newsletters-de-ia",
  },
};

export default function NewslettersDeIA() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <EnvelopeIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Newsletters de IA</h1>
      </div>
      <p className="mb-8 text-gray-600">
        Fique por dentro das principais novidades de IA com newsletters curadas e atualizadas regularmente. Escolha as que melhor se adaptam ao seu perfil e mantenha-se informado sobre o futuro da inteligência artificial.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {newsletters.map((newsletter) => (
          <a
            key={newsletter.nome}
            href={newsletter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >
            <h2 className="font-semibold text-lg mb-1">{newsletter.nome}</h2>
            <div className="text-gray-500 text-sm">{newsletter.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}




