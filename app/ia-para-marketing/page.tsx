import { MegaphoneIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";

const ferramentas = [
    {
        nome: "Agorapulse",
        url: "https://www.agorapulse.com/",
        descricao: "Gestão completa de redes sociais com recursos avançados de IA para análise e publicação."
    },
    {
        nome: "Onebrief",
        url: "https://www.onebrief.com/",
        descricao: "Plataforma de colaboração e workflow com IA focada em planejamento estratégico e tomada de decisão para operações complexas.",
    },
    {
        nome: "Seorce",
        url: "https://seorce.com/",
        descricao: "SEO e visibilidade unificada para buscas em IA (ChatGPT, Claude, Perplexity).",
    },
    {
        nome: "Option",
        url: "https://www.tryoption.ai/",
        descricao: "Plataforma líder em visibilidade de GEO (Generative Engine Optimization) para monitorar e otimizar a presença de marcas em modelos como ChatGPT e Gemini.",
    },
    {
        nome: "Insense",
        url: "https://insense.pro/",
        descricao: "Plataforma que conecta marcas a criadores para anúncios de UGC e social ads.",
    },
    {
        nome: "Weero",
        url: "https://weero.com.br/",
        descricao: "Plataforma de APIs de IA para desenvolvedores, oferecendo modelos de LLMs, síntese de voz e análise de vídeo.",
    },
    {
        nome: "Opttab",
        url: "https://opttab.com/",
        descricao: "Plataforma de visibilidade em IA e SEO generativo para monitorar e otimizar como modelos como ChatGPT e Gemini citam seu conteúdo.",
    },
    {
        nome: "Ozygen",
        url: "https://ozygen.app/",
        descricao: "Criação de conteúdo e descrições de produtos para e-commerce com IA.",
    },
    {
        nome: "Typefully",
        url: "https://typefully.com/",
        descricao: "Crie e agende threads no Twitter e LinkedIn com a ajuda da IA.",
    },
    {
        nome: "Hypefury",
        url: "https://hypefury.com/",
        descricao: "Automatize e cresça sua audiência no Twitter e outras redes.",
    },
    {
        nome: "Tweethunter",
        url: "https://tweethunter.io/",
        descricao: "Ferramenta tudo-em-um para crescer no Twitter com IA.",
    },
    {
        nome: "Creaibo",
        url: "https://creaibo.io/",
        descricao: "Crie assistentes de IA personalizados e chatbots para automação de atendimento e marketing.",
    },
    {
        nome: "Concierge AI",
        url: "https://concierge.ai/",
        descricao: "Motor de respostas de IA para sites B2B SaaS que engaja visitantes, responde perguntas e converte leads."
    },
    {
        nome: "URLtoAny",
        url: "https://www.urltoany.com/",
        descricao: "Conversor universal de URLs para Markdown, PDF, imagem e resumo com IA.",
    },
    {
        nome: "Keak",
        url: "https://www.keak.com/",
        descricao: "Plataforma de teste A/B alimentada por IA que gera e lança variantes de sites automaticamente.",
    },
    {
        nome: "Semrush One",
        url: "https://www.semrush.com/lp/semrush-one/en/",
        descricao: "Solução unificada para SEO e visibilidade em busca IA (ChatGPT, Perplexity, etc).",
    },
    {
        nome: "Koah",
        url: "https://www.koahlabs.com/",
        descricao: "Monetize apps de IA com anúncios nativos contextuais via SDK.",
    },
    {
        nome: "HypeNest",
        url: "https://hypenest.xyz/",
        descricao: "Repurposing de vídeo com IA para YouTube e TikTok com agendamento automático.",
    },
    {
        nome: "Korgiboard",
        url: "https://www.korgiboard.com/",
        descricao: "Ferramenta para planejamento, organização e execução de conteúdo e marketing, especialmente para social e conteúdo.",
    },
    {
        nome: "Page Score",
        url: "https://page-score.conversion.com.br/",
        descricao: "Analise e otimize páginas de vendas e landing pages com IA para melhorar conversão.",
    },
    {
        nome: "eKyte",
        url: "https://www.ekyte.com/pt-br/",
        descricao: "Plataforma de gestão de marketing digital com IA para planejar e executar campanhas.",
    },
    {
        nome: "Writesonic",
        url: "https://writesonic.com/",
        descricao: "Ferramenta de escrita com IA para criar conteúdo de marketing otimizado para SEO.",
    },
    {
        nome: "Temso",
        url: "https://www.temso.ai/",
        descricao: "IA para vendas e marketing que cria materiais comerciais e treina times com roteiros prontos.",
    },
    {
        nome: "Lumen5",
        url: "https://lumen5.com/",
        descricao: "Transforme textos e artigos em vídeos engajadores para redes sociais com IA.",
    },
    {
        nome: "Rytr",
        url: "https://rytr.me/",
        descricao: "Assistente de escrita criativa para gerar copys, e-mails e blogs rapidamente.",
    },
    {
        nome: "Notion AI",
        url: "https://www.notion.com/product/ai",
        descricao: "Recursos de IA integrados ao Notion para resumir, escrever e organizar ideias.",
    },
    {
        nome: "Pictory",
        url: "https://pictory.ai/",
        descricao: "Crie vídeos curtos a partir de textos longos ou roteiros usando inteligência artificial.",
    },
    {
        nome: "Delve",
        url: "https://www.delve.ai/",
        descricao: "Gere personas detalhadas e insights de público-alvo automaticamente com IA.",
    },
    {
        nome: "Surfer SEO",
        url: "https://surferseo.com/",
        descricao: "Otimize seu conteúdo para os motores de busca com auditorias e sugestões baseadas em IA.",
    },
    {
        nome: "MarketMuse",
        url: "https://www.marketmuse.com/",
        descricao: "Planejamento de conteúdo e pesquisa de palavras-chave impulsionados por IA.",
    },
    {
        nome: "Gamma",
        url: "https://gamma.app/pt-br",
        descricao: "Crie apresentações, documentos e páginas da web visualmente impressionantes com IA.",
    },
    {
        nome: "Ocoya",
        url: "https://www.ocoya.com/",
        descricao: "Crie, agende e analise conteúdo para redes sociais com ajuda de inteligência artificial.",
    },
    {
        nome: "Pixelesq",
        url: "https://www.pixelesq.com/",
        descricao: "Plataforma de marketing digital com IA para criação e gestão de campanhas.",
    },
    {
        nome: "Scripe",
        url: "https://scripe.io/",
        descricao: "Ferramenta de IA para criação de conteúdo e automação de marketing digital.",
    },
    {
        nome: "Lindy",
        url: "https://www.lindy.ai/",
        descricao: "Plataforma para criar e gerenciar agentes de IA que automatizam tarefas de marketing.",
    },
    {
        nome: "Wispr Flow",
        url: "https://wisprflow.ai/",
        descricao: "Ditado por voz com IA para escrever conteúdo de marketing 4x mais rápido.",
    },
    {
        nome: "Documentation.AI",
        url: "https://documentation.ai/",
        descricao: "Plataforma de documentação com IA para criar e manter bases de conhecimento atualizadas.",
    },
    {
        nome: "Luppa AI",
        url: "https://www.luppa.ai/",
        descricao: "Plataforma all-in-one de marketing com IA para criar texto, imagens, vídeos e automatizar postagens.",
    },
    {
        nome: "Olive",
        url: "https://fromolive.com/",
        descricao: "Plataforma de BI impulsionada por IA para criar ferramentas internas rápidas e seguras a partir de prompts.",
    },
    {
        nome: "Aha",
        url: "https://www.aha.inc/",
        descricao: "Seu funcionário de IA 24/7 para marketing de influência, automação e colaboração.",
    },
    {
        nome: "Dr-aft",
        url: "https://www.dr-aft.com/",
        descricao: "Editor de roteiros com IA nativo para formato Fountain, ideal para roteiristas e criação de scripts de vídeo.",
    },
    {
        nome: "Cofounder",
        url: "https://cofounder.co/",
        descricao: "Automatize sua vida com linguagem natural, conectando ferramentas e criando workflows.",
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
        nome: "Unwrap",
        url: "https://www.unwrap.ai/",
        descricao: "Plataforma de inteligência do cliente com IA que revela insights proativos sobre sua audiência.",
    },
    {
        nome: "Rybbit",
        url: "https://rybbit.com/",
        descricao: "Analytics moderno sem cookies, alternativa ao Google Analytics com foco em privacidade e GDPR.",
    },
    {
        nome: "Taplio",
        url: "https://taplio.com/",
        descricao: "Ferramenta de IA para crescimento no LinkedIn com criação de conteúdo e agendamento.",
    },
    {
        nome: "Cashew Research",
        url: "https://www.cashewresearch.com/",
        descricao: "Plataforma de pesquisa de mercado com IA para insights e análise de audiência.",
    },
    {
        nome: "LLMs.txt Generator",
        url: "https://llmstxtgenerator.cc/",
        descricao: "Gerador de documentação estruturada para LLMs otimizar indexação e descoberta de conteúdo.",
    },
    {
        nome: "Softr Workflows",
        url: "https://www.softr.io/workflows",
        descricao: "Crie automações e workflows sem código com IA integrada para marketing.",
    },
    {
        nome: "Normal",
        url: "https://www.trynormal.ai/",
        descricao: "Plataforma de IA para criar chatbots e assistentes de marketing conversacionais.",
    },
    {
        nome: "Bloom",
        url: "https://www.trybloom.ai/",
        descricao: "Ferramenta de IA para personalização de conteúdo e automação de marketing.",
    },
    {
        nome: "Adomni",
        url: "https://www.adomni.com/",
        descricao: "Gerar estratégias para OOH, recomendar inventário ideal, alocar orçamento e automatizar a criação de campanhas em poucos minutos",
    },
    {
        nome: "Agentio",
        url: "https://www.agentio.com/",
        descricao: "Automatizar, medir e escalar campanhas de publicidade com criadores de conteúdo de forma rápida e eficiente.",
    },
    {
        nome: "Profound",
        url: "https://tryprofound.com/",
        descricao: "Monitorar, otimizar e ampliar a visibilidade da sua marca em mecanismos de busca e respostas geradas por IA.",
    },
    {
        nome: "Rovo Atlasian",
        url: "https://www.atlassian.com/software/rovo",
        descricao: "Conecta equipes, conhecimento e ferramentas para que você possa agir com mais rapidez e trabalhar de forma mais inteligente.",
    },
    {
        nome: "Meet Maia",
        url: "https://www.matillion.com/maia",
        descricao: "Uma IA como equipe de dados assertivos, para reduzir o trabalho manual em 90%, lançar iniciativas 10 vezes mais rápidas.",
    },
    {
        nome: "Sim Gym Shopify",
        url: "https://apps.shopify.com/simgym",
        descricao: "Simule o comportamento do clientes com compradores de IA.",
    },
    {
        nome: "Zetta",
        url: "https://zettadata.ai/",
        descricao: "IA em nuvem para análise avançada, governança e monetização de dados empresariais.",
    },
    {
        nome: "Virlo",
        url: "https://virlo.ai/",
        descricao: "Plataforma com IA que detecta tendências e nichos virais para vídeos curtos.",
    },
    {
        nome: "Ahrefs",
        url: "https://ahrefs.com/ai",
        descricao: "Ferramentas de IA para SEO que aceleram pesquisa, escrita e otimização de conteúdo.",
    },
    {
        nome: "Basedash",
        url: "https://www.basedash.com/",
        descricao: "Interface moderna para explorar, editar e compartilhar bancos de dados com facilidade.",
    },
    {
        nome: "Shortcut",
        url: "https://www.tryshortcut.ai/",
        descricao: "Automatiza tarefas de Excel/Sheets com IA, gerando fórmulas e análises.",
    },
    {
        nome: "Korgi Board",
        url: "https://www.korgiboard.com/",
        descricao: "Painel inteligente para organizar, priorizar e executar tarefas com foco e clareza.",
    },
    {
        nome: "Mind Map Wizard",
        url: "https://mindmapwizard.com/",
        descricao: "Cria instantaneamente qualquer tópico ou anotação em um mapa mental visual e organizado.",
    },
    {
        nome: "Quadratichq",
        url: "https://www.quadratichq.com/",
        descricao: "Torna o trabalho com planilhas simples, com resultados impressionantes. Adicione dados, faça perguntas, transforme, analise, visualize e compartilhe.",
    },
    {
        nome: "Nas.io",
        url: "https://nas.io/pt-br",
        descricao: "Organiza, conecta e encontra informações do seu time instantaneamente.",
    },
    {
        nome: "Blocksurvey",
        url: "https://blocksurvey.io/",
        descricao: "Formulários e pesquisas com foco em privacidade, sem rastreamento ou ads.",
    },
    {
        nome: "Tines",
        url: "https://www.tines.com/",
        descricao: "Automatize workflows e respostas a incidentes sem código para equipes de segurança e ops.",
    },
    {
        nome: "Doctly",
        url: "https://doctly.ai/",
        descricao: "IA para criar e organizar documentos e conteúdos de marketing.",
    },
    {
        nome: "Sheets Organizer",
        url: "https://www.sheetsorganizer.com/",
        descricao: "Automatize planilhas e dashboards com IA para relatórios de marketing.",
    },
    {
        nome: "Swetrix",
        url: "https://swetrix.com/",
        descricao: "Analytics com foco em privacidade para medir campanhas e produto.",
    },
    {
        nome: "First Answer",
        url: "https://firstanswer.ai/br/",
        descricao: "Descubra se sua marca está sendo citada pelas IAs e o que fazer para melhorar sua visibilidade.",
    },
    {
        nome: "Outwrite",
        url: "https://outwrite.ai/",
        descricao: "Assistente de escrita com IA para melhorar clareza e gramática.",
    },
    {
        nome: "Bit.ai",
        url: "https://bit.ai/",
        descricao: "Plataforma colaborativa para criar documentos inteligentes com IA.",
    },
    {
        nome: "Intempt",
        url: "https://www.intempt.com/",
        descricao: "Plataforma de marketing com IA para personalização e automação de campanhas.",
    },
    {
        nome: "VisionSEO",
        url: "https://visionseo.com.br/",
        descricao: "Plataforma brasileira de SEO com IA para análise e otimização de sites.",
    },
    {
        nome: "BlogSEO",
        url: "https://www.blogseo.io/",
        descricao: "Plataforma de IA que analisa site, descobre oportunidades de conteúdo e publica automaticamente.",
    },
    {
        nome: "SeonaAI",
        url: "https://seonaai.com/",
        descricao: "Ferramenta gratuita de IA para otimizar SEO do seu site com análises detalhadas.",
    },
    {
        nome: "Higoodie",
        url: "https://higoodie.com/",
        descricao: "Plataforma AEO para monitorar visibilidade em IA e otimizar presença em ChatGPT e Gemini.",
    },
    {
        nome: "ClickRank",
        url: "https://www.clickrank.ai/",
        descricao: "Automação SEO com IA para otimizar títulos, meta descriptions e schema com 1 clique.",
    },
    {
        nome: "Lightfield",
        url: "https://lightfield.app/",
        descricao: "CRM de próxima geração que se auto-organiza com IA, automatiza follow-ups e usa agentes para outreach e análise de clientes.",
    },
    {
        nome: "Gazel AI",
        url: "https://www.gazel.ai/",
        descricao: "Analise e melhore a conversão do seu site com IA, recebendo score e ações para otimizar.",
    },
    {
        nome: "Automarticles",
        url: "https://automarticles.com/",
        descricao: "Blog profissional 100% automático com estratégia, conteúdos e relatórios de SEO.",
    },
];

export const metadata = {
    title: "Ferramentas de Inteligência Artificial para Marketing",
    description: "Descubra as melhores ferramentas de IA para marketing: automação, criação de conteúdo, SEO e vídeo.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ia-para-marketing",
    },
};

export default function IaParaMarketing() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <MegaphoneIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Marketing</h1>
            </div>
            <ExpandableContent />
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
