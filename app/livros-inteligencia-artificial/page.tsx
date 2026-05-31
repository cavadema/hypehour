import { BookOpenIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";
import ExpandableContent from "./ExpandableContent";

const livros = [
  {
    nome: "Inteligência Artificial para Leigos",
    autor: "John Paul Mueller e Luca Massaron",
    url: "#",
    descricao: "Ponto de entrada ideal para quem nunca teve contato com o tema: apresenta fundamentos de aprendizado de máquina, redes neurais e análise de dados com linguagem direta, usando exemplos concretos de aplicações em medicina, entretenimento e e-commerce.",
  },
  {
    nome: "Fundamentos da Inteligência Artificial: o futuro é agora",
    autor: "Ricardo Murer",
    url: "#",
    descricao: "Visão abrangente da IA com lente brasileira: Murer discute deep learning, cidades inteligentes e ética digital, colocando em pauta os obstáculos de inclusão tecnológica e os caminhos para regulamentação no contexto nacional.",
  },
  {
    nome: "Inteligência Artificial: do zero a superpoderes",
    autor: "Martha Gabriel",
    url: "#",
    descricao: "Martha Gabriel traduz em linguagem acessível como a IA remodela marketing, educação e segurança, guiando o leitor a usar a tecnologia com visão estratégica e senso crítico, sem abrir mão da responsabilidade.",
  },
  {
    nome: "Inteligência Artificial: mitos e verdades",
    autor: "Adriano Mussa",
    url: "#",
    descricao: "Separando hype de realidade, Mussa oferece um olhar pragmático sobre a IA no ambiente corporativo — como as empresas podem adotá-la de forma concreta e o que essa transformação significa para o mercado de trabalho e as profissões do futuro.",
  },
  {
    nome: "A Era da IA: e nosso futuro como humanos",
    autor: "Eric Schmidt, Daniel Huttenlocher e Henry A. Kissinger",
    url: "#",
    descricao: "Três pensadores de peso analisam as consequências geopolíticas e filosóficas da inteligência artificial, questionando como a sociedade, as democracias e o próprio conceito de humanidade se redefinem diante de sistemas cada vez mais autônomos.",
  },
  {
    nome: "Introdução à Inteligência Artificial: uma abordagem não técnica",
    autor: "Tom Taulli",
    url: "#",
    descricao: "Sem recorrer a jargões técnicos, Taulli percorre machine learning, processamento de linguagem natural e casos reais de uso, discutindo as implicações éticas e as tendências que estão reformulando negócios e rotinas do dia a dia.",
  },
  {
    nome: "Inteligência Artificial",
    autor: "Kai-Fu Lee",
    url: "#",
    descricao: "Um dos maiores especialistas mundiais em IA examina como a tecnologia está transformando o mercado de trabalho, tornando processos mais eficientes e abrindo discussões sobre como usá-la para reduzir — e não ampliar — desigualdades sociais.",
  },
  {
    nome: "Vida 3.0: o ser humano na era da Inteligência Artificial",
    autor: "Max Tegmark",
    url: "#",
    descricao: "O professor do MIT percorre os efeitos da IA em segurança, conflitos armados, justiça e profissões, convidando o leitor a uma reflexão filosófica profunda sobre identidade e propósito humano em um mundo progressivamente automatizado.",
  },
  {
    nome: "Futuro Presente: o mundo movido à tecnologia",
    autor: "Guy Perelmuter",
    url: "#",
    descricao: "Perelmuter amplia o horizonte além da IA, mostrando como robótica, nanotecnologia e biotecnologia se conectam e se influenciam mutuamente para redesenhar o futuro da sociedade — com linguagem direta e panorama verdadeiramente abrangente.",
  },
  {
    nome: "2041: como a Inteligência Artificial vai mudar sua vida nas próximas décadas",
    autor: "Kai-Fu Lee e Chen Qiufan",
    url: "#",
    descricao: "Dez histórias de ficção científica embasadas em análise técnica rigorosa: Lee e Qiufan exploram como a IA pode remodelar saúde, educação e transporte até 2041, criando uma leitura que é ao mesmo tempo narrativa envolvente e exercício de antecipação.",
  },
];

export const metadata = {
  title: "Livros sobre Inteligência Artificial — os melhores títulos para ler em 2026",
  description: "Seleção dos melhores livros sobre inteligência artificial em português: do básico ao avançado, para iniciantes e profissionais que querem entender IA com profundidade.",
  alternates: {
    canonical: "https://www.hypehour.com.br/livros-inteligencia-artificial",
  },
  openGraph: {
    title: "Livros sobre Inteligência Artificial — os melhores títulos para ler em 2026",
    description: "Seleção dos melhores livros sobre inteligência artificial em português: do básico ao avançado, para iniciantes e profissionais que querem entender IA com profundidade.",
    url: "https://www.hypehour.com.br/livros-inteligencia-artificial",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Livros sobre Inteligência Artificial — os melhores títulos para ler em 2026",
    description: "Seleção dos melhores livros sobre inteligência artificial em português: do básico ao avançado.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function LivrosInteligenciaArtificial() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <BookOpenIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Livros sobre Inteligência Artificial</h1>
      </div>
      <ExpandableContent />
      <div className="grid gap-6 sm:grid-cols-2">
        {livros.map((livro) => (
          <div
            key={livro.nome}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >
            <h2 className="font-semibold text-lg mb-0.5">{livro.nome}</h2>
            <p className="text-xs text-gray-400 font-medium mb-2">{livro.autor}</p>
            <p className="text-gray-500 text-sm">{livro.descricao}</p>
          </div>
        ))}
      </div>
      <FAQSection />
    </main>
  );
}
