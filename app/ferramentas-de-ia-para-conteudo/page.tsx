import { PencilSquareIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";

const ferramentas = [
  {
    nome: "Jasper",
    url: "https://www.jasper.ai/",
    descricao: "Plataforma avançada de IA para criação de conteúdo de marketing e copy.",
  },
  {
    nome: "Copy.ai",
    url: "https://www.copy.ai/",
    descricao: "Gerador de textos para blogs, redes sociais e e-mails com foco em conversão.",
  },
  {
    nome: "HubSpot Content Hub",
    url: "https://br.hubspot.com/products/content",
    descricao: "Hub de conteúdo da HubSpot com ferramentas de IA para criar e gerenciar blogs e sites.",
  },
  {
    nome: "Pippit",
    url: "https://www.pippit.ai/",
    descricao: "Ferramenta para criação de conteúdo otimizado e fluxos de trabalho de marketing.",
  },
  {
    nome: "Quillbot Gerador de textos",
    url: "https://quillbot.com/pt/ferramentas-de-ia-para-escrita/gerador-de-texto-ia",
    descricao: "Assistente de escrita para parafrasear, resumir e gerar textos com fluidez.",
  },
  {
    nome: "Automarticles",
    url: "https://automarticles.com/",
    descricao: "Automação de artigos e conteúdo para blogs com foco em SEO.",
  },
  {
    nome: "Automatik",
    url: "https://automatikblog.com/",
    descricao: "Geração automática de posts para blogs WordPress usando IA.",
  },
  {
    nome: "Rytr",
    url: "https://rytr.me",
    descricao: "Assistente de escrita com IA que ajuda a criar conteúdo de alta qualidade em poucos segundos.",
  },
  {
    nome: "Neuroflash",
    url: "https://neuroflash.com",
    descricao: "Gerador de texto e imagens com IA focado na qualidade e estilo da língua alemã e europeia.",
  },
  {
    nome: "Writer.com",
    url: "https://writer.com",
    descricao: "Plataforma de IA generativa para empresas, garantindo consistência de marca e segurança de dados.",
  },
  {
    nome: "Article Forge",
    url: "https://www.articleforge.com",
    descricao: "Escreva artigos longos e otimizados para SEO automaticamente com um clique.",
  },
  {
    nome: "Frase.io",
    url: "https://www.frase.io",
    descricao: "Ferramenta de SEO e criação de conteúdo que ajuda a pesquisar, escrever e otimizar artigos.",
  },
  {
    nome: "ContentShake AI (Semrush)",
    url: "https://www.semrush.com/contentshake",
    descricao: "Ferramenta da Semrush para criar conteúdo otimizado para SEO e engajamento.",
  },
  {
    nome: "Copymatic AI",
    url: "https://copymatic.ai",
    descricao: "Gere textos, anúncios e páginas de destino com IA para aumentar suas conversões.",
  },
  {
    nome: "Simplified AI Writer",
    url: "https://simplified.com/ai-writer",
    descricao: "Escritor de IA gratuito para gerar copys de marketing, blogs e posts sociais.",
  },
  {
    nome: "Sudowrite",
    url: "https://www.sudowrite.com",
    descricao: "A melhor IA para escrita criativa, ajudando autores a escreverem romances e histórias.",
  },
  {
    nome: "LongShot AI",
    url: "https://www.longshot.ai",
    descricao: "Assistente de escrita de IA para criar blogs longos e autênticos com verificação de fatos.",
  },
  {
    nome: "Content at Scale",
    url: "https://brandwell.ai/",
    descricao: "Gere posts de blog longos, indetectáveis e otimizados para SEO em escala.",
  },
];

export const metadata = {
  title: "Ferramentas de IA para Conteúdo - Hypehour",
  description: "Descubra as melhores ferramentas de IA para criar artigos, posts, e-mails e copys de alta conversão.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ferramentas-de-ia-para-conteudo",
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é uma IA para criação de conteúdo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uma IA para criação de conteúdo é um sistema capaz de gerar textos, ideias, títulos, artigos, roteiros, posts e outros formatos automaticamente, com base em comandos fornecidos pelo usuário."
      }
    },
    {
      "@type": "Question",
      "name": "Como funciona uma IA para criar conteúdo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A IA analisa o comando digitado, identifica o contexto e produz um texto coerente, estruturado e adaptado ao estilo solicitado, podendo gerar artigos completos, descrições de produtos, posts para redes sociais e muito mais."
      }
    },
    {
      "@type": "Question",
      "name": "Quais são as melhores ferramentas de IA para conteúdo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As melhores ferramentas de IA para criação de conteúdo são ChatGPT, Claude, Gemini, Jasper AI, Copy.ai, Writesonic, Notion AI e Grammarly."
      }
    },
    {
      "@type": "Question",
      "name": "IA para gerar conteúdo substitui um redator humano?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não totalmente. A IA acelera o processo e cria rascunhos, mas o toque humano é essencial para revisão, criatividade profunda, estratégia e identidade da marca."
      }
    },
    {
      "@type": "Question",
      "name": "É possível criar conteúdo para redes sociais usando IA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. A IA cria legendas, scripts de vídeo, textos curtos, calendários editoriais, ideias de reels e até hashtags."
      }
    },
    {
      "@type": "Question",
      "name": "IA para criação de conteúdo gera textos originais?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, as ferramentas geram textos originais com base no prompt, mas é recomendado revisar para garantir autenticidade e alinhamento com a marca."
      }
    },
    {
      "@type": "Question",
      "name": "IA para criar conteúdo é indicada para SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. As melhores ferramentas sugerem palavras-chave, criam estruturas otimizadas, títulos chamativos e conteúdos com boa legibilidade para ranqueamento no Google."
      }
    },
    {
      "@type": "Question",
      "name": "Posso usar IA para criar artigos completos para blogs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. Ferramentas como ChatGPT, Jasper AI e Claude conseguem gerar artigos completos, mas é importante revisar e ajustar o texto."
      }
    },
    {
      "@type": "Question",
      "name": "IA para gerar conteúdo é grátis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Existem opções gratuitas como ChatGPT free, Gemini e Copy.ai, mas os planos pagos oferecem mais criatividade e recursos avançados."
      }
    },
    {
      "@type": "Question",
      "name": "Quais tipos de conteúdo posso criar com IA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É possível criar artigos, posts para redes sociais, e-mails, anúncios, roteiros, newsletters, scripts, títulos, ideias de conteúdo e até imagens, dependendo da ferramenta."
      }
    },
    {
      "@type": "Question",
      "name": "O que uma IA pode criar em termos de conteúdo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uma IA pode criar artigos, posts, textos publicitários, descrições de produtos, roteiros, títulos e conteúdos longos ou curtos com base no comando do usuário."
      }
    },
    {
      "@type": "Question",
      "name": "A IA escreve textos iguais para todo mundo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. A IA gera textos únicos de acordo com o prompt, e quanto mais detalhado o comando, mais personalizado será o resultado."
      }
    },
    {
      "@type": "Question",
      "name": "A IA é confiável para gerar conteúdo para blog?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, a IA gera conteúdos completos e bem organizados, mas a revisão humana continua essencial para garantir qualidade e autenticidade."
      }
    },
    {
      "@type": "Question",
      "name": "Como pedir para a IA criar conteúdo do jeito certo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basta fornecer um prompt claro, informando público-alvo, formato, objetivo, tamanho, tom de voz e palavras-chave."
      }
    },
    {
      "@type": "Question",
      "name": "A IA ajuda a criar conteúdo com SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, a IA sugere keywords, cria estruturas otimizadas, melhora a escaneabilidade e gera títulos que aumentam o CTR."
      }
    },
    {
      "@type": "Question",
      "name": "Posso usar IA para criar conteúdo para Instagram e TikTok?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. A IA cria legendas, roteiros, ideias de vídeos, scripts e até posts completos para redes sociais."
      }
    },
    {
      "@type": "Question",
      "name": "IA para conteúdo é paga?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Existem opções gratuitas e pagas. As versões premium oferecem resultados melhores, mais profundos e mais criativos."
      }
    },
    {
      "@type": "Question",
      "name": "A IA consegue adaptar conteúdo para diferentes públicos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. A IA pode ajustar o texto para diferentes públicos, como jovens, profissionais, iniciantes ou especialistas."
      }
    },
    {
      "@type": "Question",
      "name": "A IA pode gerar ideias de conteúdo quando estou sem criatividade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim. A IA é excelente para brainstorming e gera temas de vídeos, pautas de blog, títulos e calendários editoriais."
      }
    },
    {
      "@type": "Question",
      "name": "A IA substitui totalmente um criador de conteúdo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. A IA acelera e apoia o processo, mas o criador humano continua essencial para criatividade, estratégia e autenticidade."
      }
    }
  ]
};

export default function IaParaConteudo() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <PencilSquareIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl font-bold">IA para Conteúdo</h1>
      </div>
      <p className="mb-8 text-gray-600">
        Descubra as melhores ferramentas de IA para criar artigos, posts, e-mails e copys de alta conversão.
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
