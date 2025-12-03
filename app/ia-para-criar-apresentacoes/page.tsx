import { PresentationChartLineIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";

const ferramentas = [
    {
        nome: "Genspark",
        url: "https://www.genspark.ai/",
        descricao: "Crie apresentações impressionantes a partir de prompts simples com IA generativa.",
    },
    {
        nome: "Presentations.ai",
        url: "https://www.presentations.ai/",
        descricao: "Plataforma de design de apresentações focada em empresas e colaboração em tempo real.",
    },
    {
        nome: "AiPPT",
        url: "https://www.aippt.com/pt/",
        descricao: "Gerador de PPTs com inteligência artificial que transforma tópicos em slides prontos.",
    },
    {
        nome: "Gamma",
        url: "https://gamma.app/pt-br",
        descricao: "Crie apresentações, documentos e páginas da web visualmente impressionantes com IA.",
    },
    {
        nome: "SlidesGO",
        url: "https://slidesgo.com/pt/",
        descricao: "Modelos de slides criativos e gerador de apresentações com IA integrado.",
    },
    {
        nome: "Smallppt",
        url: "https://smallppt.com/pt",
        descricao: "Ferramentas de IA para criar, editar e otimizar apresentações em PowerPoint.",
    },
    {
        nome: "DeckRobot",
        url: "https://www.deckrobot.com/",
        descricao: "Automação de design para PowerPoint que formata slides corporativos em segundos.",
    },
    {
        nome: "Decktopus",
        url: "https://www.decktopus.com/",
        descricao: "Gerador de apresentações com IA que cria slides, roteiros e imagens automaticamente.",
    },
    {
        nome: "Slidebean",
        url: "https://slidebean.com/",
        descricao: "IA para criar pitch decks profissionais e apresentações para startups.",
    },
    {
        nome: "Beautiful.ai",
        url: "https://www.beautiful.ai/",
        descricao: "Software de apresentação que usa IA para ajustar o design dos slides automaticamente.",
    },
    {
        nome: "Visme",
        url: "https://www.visme.co/pt-br/",
        descricao: "Ferramenta tudo-em-um para criar apresentações, infográficos e conteúdos visuais com IA.",
    },
    {
        nome: "Tome",
        url: "https://landing-staging.tome.app/",
        descricao: "Crie apresentações narrativas e interativas com IA em segundos.",
    },
    {
        nome: "Pitch",
        url: "https://pitch.com/",
        descricao: "Software de apresentação colaborativo com recursos de IA para equipes modernas.",
    },
    {
        nome: "Zoho Show",
        url: "https://www.zoho.com/pt-br/show/",
        descricao: "Ferramenta de apresentação online com design inteligente e colaboração.",
    },
];

export const metadata = {
    title: "Inteligência Artificial para Criar Apresentações e Slides - Hypehour",
    description: "Descubra as melhores ferramentas de IA para criar apresentações, slides e pitch decks automaticamente.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ia-para-criar-apresentacoes",
    },
};


const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "O que é uma IA para fazer slides?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Uma IA para fazer slides é uma ferramenta capaz de gerar automaticamente apresentações completas, criando textos, layouts e imagens a partir de um tema ou prompt digitado pelo usuário."
            }
        },
        {
            "@type": "Question",
            "name": "Qual é a melhor IA para criar apresentações?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "As melhores IAs para criar apresentações são Gamma, Beautiful.ai, Tome, Canva com IA, Pitch, PowerPoint Copilot, Google Slides com Gemini e Zoho Show AI, variando conforme a necessidade do usuário."
            }
        },
        {
            "@type": "Question",
            "name": "Existem IAs para criar apresentações de slides grátis?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim, existem opções gratuitas como Canva, Gamma, Tome, Google Slides com Gemini, Beautiful.ai (versão limitada) e alguns recursos gratuitos do PowerPoint Copilot."
            }
        },
        {
            "@type": "Question",
            "name": "Como funciona uma ferramenta de IA para criar apresentações?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A ferramenta recebe um tema, texto ou documento e gera automaticamente a estrutura dos tópicos, os textos principais, o design visual, o layout dos slides, imagens complementares e até infográficos."
            }
        },
        {
            "@type": "Question",
            "name": "Qual é a IA mais rápida para fazer slides automaticamente?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "As IAs mais rápidas para gerar apresentações em poucos segundos são Gamma e Tome, que criam slides com textos, imagens, design e estrutura praticamente prontos."
            }
        },
        {
            "@type": "Question",
            "name": "Existe IA que cria apresentação a partir de texto, artigo ou PDF?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim, ferramentas como Gamma, Canva, PowerPoint Copilot, Beautiful.ai e Google Gemini transformam textos longos, PDFs, artigos e documentos em apresentações prontas automaticamente."
            }
        },
        {
            "@type": "Question",
            "name": "Posso usar IA para criar apresentações profissionais?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim, ferramentas como Pitch, Beautiful.ai e Canva produzem apresentações com padrão profissional, adequadas para reuniões empresariais, vendas, pitches, aulas e eventos."
            }
        },
        {
            "@type": "Question",
            "name": "Qual IA cria apresentações com melhor design?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "As ferramentas que se destacam no design são Beautiful.ai, Gamma, Tome e Pitch, que oferecem modelos modernos e ajustes visuais automáticos."
            }
        },
        {
            "@type": "Question",
            "name": "IA para criar apresentação é melhor que usar PowerPoint manualmente?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim, porque a IA cria automaticamente a estrutura, organiza os textos, ajusta o design e gera imagens, economizando horas de trabalho. Depois, ainda é possível editar no próprio PowerPoint."
            }
        },
        {
            "@type": "Question",
            "name": "Tem IA que cria slides com imagens e gráficos automaticamente?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim, plataformas como Gamma, Tome, Canva e Beautiful.ai geram gráficos, tabelas, ilustrações e imagens automaticamente com base no conteúdo inserido."
            }
        },
        {
            "@type": "Question",
            "name": "Posso baixar a apresentação criada pela IA em PowerPoint (PPT)?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim, ferramentas como Canva, Gamma e Beautiful.ai permitem exportar as apresentações em formatos PPTX, PDF ou imagens."
            }
        },
        {
            "@type": "Question",
            "name": "IA para criar apresentações funciona para estudar e fazer trabalhos?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim. Estudantes usam ferramentas como Canva, Google Slides e Gamma para criar resumos, seminários, TCCs e trabalhos escolares com rapidez."
            }
        },
        {
            "@type": "Question",
            "name": "IA para criar slides é segura?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim, desde que você utilize plataformas confiáveis como Canva, Microsoft Copilot, Google Gemini, Gamma e Beautiful.ai, que seguem padrões de privacidade."
            }
        },
        {
            "@type": "Question",
            "name": "Qual IA cria apresentação no estilo PowerPoint tradicional?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "As melhores opções para quem prefere o estilo do PowerPoint são PowerPoint Copilot, Canva com exportação para PPT e Google Slides."
            }
        },
        {
            "@type": "Question",
            "name": "Qual IA é melhor para apresentações em português?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "As IAs que mais entendem português e geram textos naturais são Gamma, Canva, Tome, Microsoft Copilot e Google Gemini."
            }
        }
    ]
};

export default function IaParaCriarApresentacoes() {
    return (
        <main className="max-w-3xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <PresentationChartLineIcon className="w-10 h-10 text-blue-500" />
                <h1 className="text-3xl font-bold">IA para Criar Apresentações</h1>
            </div>
            <p className="mb-8 text-gray-600">
                Ferramentas de inteligência artificial que transformam ideias em apresentações visuais impactantes em poucos minutos.
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
