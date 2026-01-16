import { MusicalNoteIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";

const ferramentas = [
    {
        nome: "Songburst",
        url: "https://www.songburst.ai/",
        descricao: "Crie músicas únicas com IA a partir de texto.",
    },
    {
        nome: "Library.fm",
        url: "https://library.fm/",
        descricao: "Crie histórias em áudio personalizadas para crianças com IA, narração expressiva e efeitos sonoros.",
    },
    {
        nome: "Suno",
        url: "https://suno.com/home",
        descricao: "Crie músicas completas com vocais e instrumentais usando IA.",
    },
    {
        nome: "Udio",
        url: "https://www.udio.com/",
        descricao: "Plataforma de criação musical com alta fidelidade e controle criativo.",
    },
    {
        nome: "Stable Audio",
        url: "https://stableaudio.com/",
        descricao: "Geração de música e efeitos sonoros de alta qualidade pela Stability AI.",
    },
    {
        nome: "ElevenLabs Voice Design",
        url: "https://elevenlabs.io/voice-design",
        descricao: "Crie vozes únicas e realistas para seus projetos de áudio.",
    },
    {
        nome: "AIVA",
        url: "https://www.aiva.ai/",
        descricao: "Compositor de música clássica e trilhas sonoras com inteligência artificial.",
    },
    {
        nome: "Soundraw",
        url: "https://soundraw.io/",
        descricao: "Gerador de música livre de royalties para criadores de conteúdo.",
    },
    {
        nome: "Boomy",
        url: "https://boomy.com/",
        descricao: "Crie músicas originais em segundos e publique nas plataformas de streaming.",
    },
    {
        nome: "Kits.AI",
        url: "https://www.kits.ai/pt/",
        descricao: "Transforme sua voz com IA ou crie vozes sintéticas de alta qualidade para suas produções.",
    },
    {
        nome: "iZotope",
        url: "https://www.izotope.com/",
        descricao: "Ferramentas inteligentes de mixagem, masterização e reparo de áudio assistidas por IA.",
    },
    {
        nome: "Loudly",
        url: "https://www.loudly.com/",
        descricao: "Crie e personalize músicas royalty-free com IA para vídeos e projetos criativos.",
    },
    {
        nome: "Amper Music",
        url: "https://www.ampermusic.com/",
        descricao: "Crie trilhas sonoras originais e personalizáveis em segundos com IA.",
    },
    {
        nome: "Deepgram",
        url: "https://deepgram.com/product/voice-agent-api",
        descricao: "API de agentes de voz com IA para transcrição e síntese de fala em tempo real.",
    },
    {
        nome: "ACE Studio",
        url: "https://acestudio.ai/",
        descricao: "Estúdio de IA para criar vozes sintéticas realistas e personalizar tons de áudio.",
    },
    {
        nome: "Moises",
        url: "https://studio.moises.ai/",
        descricao: "Criação, edição e produção musical profissional diretamente no navegador, gerando e manipulando instrumentos e faixas com inteligência de contexto.",
    },
    {
        nome: "Aiode",
        url: "https://aiode.com/",
        descricao: "Criar e controlar “músicos virtualizados” que ouvem, adaptam e tocam com sua música, exportando stems profissionais prontos para DAWs.",
    },
    {
        nome: "Minimax Audio",
        url: "https://www.minimax.io/audio",
        descricao: "IA em nuvem para gerar vozes ultra-realistas e clonagem de áudio natural.",
    },
    {
        nome: "Meta SAM Audio",
        url: "https://ai.meta.com/samaudio/",
        descricao: "Modelo de áudio da Meta para separar fontes e gerar sons com alta fidelidade.",
    },
];

export const metadata = {
    title: "Ferramentas de Inteligência Artificial para Música",
    description: "Descubra as melhores ferramentas de inteligência artificial para criação e edição de música e áudio.",
    alternates: {
        canonical: 'https://www.hypehour.com.br/ia-para-musica',
    },
};


const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "O que é IA para música?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "IA para música é tecnologia que usa inteligência artificial para gerar melodias, letras, arranjos e vozes automaticamente. Ela aprende padrões musicais e cria composições originais com base em prompts textuais, estilos específicos ou referências sonoras fornecidas pelo usuário."
            }
        },
        {
            "@type": "Question",
            "name": "Para que serve a inteligência artificial para música?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Inteligência artificial para música serve para criar composições, gerar letras, produzir vocais, montar arranjos, criar trilhas sonoras e acelerar processos de produção musical. Ela auxilia músicos, criadores de conteúdo, produtores e pessoas sem conhecimento técnico."
            }
        },
        {
            "@type": "Question",
            "name": "Como funciona a IA para criar música?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "IA para criar música funciona analisando grandes bases de dados musicais e usando modelos generativos para produzir melodias, harmonias e letras. O usuário descreve o estilo em um prompt e a ferramenta transforma essa descrição em uma música completa."
            }
        },
        {
            "@type": "Question",
            "name": "Como usar IA para fazer música?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Para usar IA para fazer música, basta escrever um prompt com estilo, ritmo e tema. A IA gera letra, melodia, voz e arranjo automaticamente. Plataformas como Suno e Udio permitem criar músicas completas sem conhecimento de produção musical."
            }
        },
        {
            "@type": "Question",
            "name": "Quais são as melhores IAs para música?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "As melhores IAs para música incluem Suno, Udio, AIVA, Soundraw e Amper Music. Elas geram músicas completas, vocais, trilhas instrumentais e até mixagens automáticas. A escolha depende do tipo de projeto e do uso comercial desejado."
            }
        },
        {
            "@type": "Question",
            "name": "IA para criar música é boa?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "IA para criar música é eficaz porque gera composições completas com qualidade profissional, incluindo letra, voz, harmonia e mixagem automática. Ela é usada tanto por amadores quanto por músicos profissionais para acelerar processos criativos."
            }
        },
        {
            "@type": "Question",
            "name": "IA substitui músicos?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "IA não substitui músicos, porque depende de direção artística humana. Ela automatiza tarefas repetitivas e ajuda na criatividade, mas conceitos como interpretação, emoção e escolha estética continuam sendo responsabilidade dos artistas."
            }
        },
        {
            "@type": "Question",
            "name": "É possível criar músicas completas com IA?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "É possível criar músicas completas com IA, incluindo letra, melodia, instrumentos, arranjos e vocais sintéticos. Ferramentas modernas geram faixas finalizadas prontas para uso em vídeos, jogos, publicidade e plataformas de streaming."
            }
        },
        {
            "@type": "Question",
            "name": "IA para música pode imitar estilos de artistas famosos?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "IA para música pode gerar músicas inspiradas em estilos específicos, mas sem copiar vozes ou melodias protegidas por direitos autorais. Ela recria características gerais, como ritmo, harmonia e atmosfera."
            }
        },
        {
            "@type": "Question",
            "name": "Posso usar músicas criadas com IA comercialmente?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "O uso comercial depende da plataforma usada. Algumas IAs liberam uso comercial total, enquanto outras exigem licenciamento. É essencial verificar os termos de uso antes de publicar ou monetizar músicas geradas por IA."
            }
        },
        {
            "@type": "Question",
            "name": "IA para fazer música é gratuita?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "IA para fazer música pode ser gratuita em planos básicos, mas normalmente com limites de geração. Ferramentas pagas oferecem mais qualidade, velocidade e direitos comerciais. Suno, Udio e AIVA têm versões free e versões premium."
            }
        },
        {
            "@type": "Question",
            "name": "Como a IA cria letras de música?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A IA cria letras de música analisando padrões linguísticos e estruturais de milhares de composições. Ela usa prompts para definir tema, estilo e emoção, gerando letras completas em poucos segundos."
            }
        },
        {
            "@type": "Question",
            "name": "IA para música funciona em português?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "IA para música funciona em português e gera letras e vocais em PT-BR. Ferramentas modernas entendem prompts em português e são capazes de cantar com boa pronúncia e prosódia."
            }
        },
        {
            "@type": "Question",
            "name": "Como escolher a melhor IA para criar música?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Para escolher a melhor IA para criar música, defina o objetivo: músicas completas, trilhas instrumentais, vocais ou edição. Também verifique direitos comerciais e limitações do plano."
            }
        },
        {
            "@type": "Question",
            "name": "IA para música é segura em relação a direitos autorais?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "IA para música é segura quando a plataforma garante que as obras são originais, mas cada serviço possui regras próprias de copyright. É importante conferir se a música pode ser usada comercialmente e se há restrições de distribuição."
            }
        }
    ]
};

export default function IaParaMusica() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <MusicalNoteIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Música</h1>
            </div>
            <p className="mb-8 text-gray-600">
                Descubra as melhores ferramentas de inteligência artificial para criação, edição e geração de música e áudio.
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
