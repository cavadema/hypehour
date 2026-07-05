import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que são navegadores de IA?",
        "a": "São navegadores web que integram assistentes de inteligência artificial diretamente na interface de navegação — permitindo pesquisar, resumir páginas, comparar conteúdos, fazer perguntas sobre o que você está vendo e interagir com a web de forma conversacional."
    },
    {
        "q": "Qual a diferença entre Perplexity AI e um navegador de IA tradicional?",
        "a": "Perplexity é primariamente um motor de busca com IA que cita fontes. Navegadores de IA como Arc com funcionalidades de IA e Dia integram a inteligência dentro da sessão de navegação — você navega normalmente e a IA está disponível para qualquer página visitada."
    },
    {
        "q": "O Perplexity AI é gratuito?",
        "a": "Sim, com um plano gratuito robusto. O Perplexity Pro (US$20/mês) adiciona acesso a modelos mais poderosos (Claude, GPT-4o), pesquisa de imagens, modo Deep Research e maior volume de pesquisas diárias."
    },
    {
        "q": "Como navegadores de IA ajudam na pesquisa online?",
        "a": "Em vez de abrir 10 abas e ler cada uma manualmente, a IA resume múltiplas fontes, compara informações contraditórias, cita as referências e permite aprofundar qualquer ponto com perguntas de follow-up — comprimindo horas de pesquisa em minutos."
    },
    {
        "q": "Navegadores de IA são mais rápidos que o Google para pesquisa?",
        "a": "Para pesquisas que exigem síntese de múltiplas fontes (perguntas complexas, comparações, resumos), sim — Perplexity e similares são muito mais eficientes. Para encontrar um link específico ou informação pontual, o Google ainda tem vantagem."
    },
    {
        "q": "O que é o modo Deep Research do Perplexity?",
        "a": "Deep Research realiza pesquisa multi-passo autônoma: formula múltiplas sub-questões, pesquisa cada uma independentemente, analisa dezenas de fontes e sintetiza um relatório completo com citações — similar a uma pesquisa que levaria horas de trabalho humano."
    },
    {
        "q": "Navegadores de IA respeitam minha privacidade?",
        "a": "Varia por plataforma. Perplexity coleta dados de uso para melhorar o serviço. Para uso com informações sensíveis, leia a política de privacidade. Navegadores baseados em modelos open source rodando localmente oferecem máxima privacidade."
    },
    {
        "q": "Como usar IA no Chrome ou Safari sem mudar de navegador?",
        "a": "Extensões como Perplexity Companion e Monica adicionam funcionalidades de IA ao Chrome e Edge sem exigir mudança de navegador. O Copilot da Microsoft está integrado nativamente no Edge, disponível com clique na barra lateral."
    },
    {
        "q": "IA em navegadores pode ler e resumir qualquer página web?",
        "a": "A maioria sim — desde que o conteúdo não seja bloqueado por paywall ou proteção especial. Ferramentas como Perplexity, Arc Max e extensões de IA para Chrome resumem artigos, destacam pontos principais e permitem fazer perguntas sobre o conteúdo."
    },
    {
        "q": "O Arc Browser com IA está disponível no Brasil?",
        "a": "Arc Browser está disponível para download gratuito no Mac e Windows globalmente, incluindo no Brasil. As funcionalidades de IA (Arc Max) incluem resumo de abas, pesquisa inteligente e ações rápidas — disponíveis na versão gratuita."
    },
    {
        "q": "Navegadores de IA funcionam bem em português?",
        "a": "Perplexity responde em português quando a pergunta é feita em português. Funcionalidades de resumo de página funcionam bem com conteúdo em português. A qualidade da IA em português melhorou muito em 2025-2026."
    },
    {
        "q": "Como navegadores de IA podem aumentar a produtividade no trabalho?",
        "a": "Pesquisa de concorrentes sintetizada em segundos, resumo de artigos longos sem leitura completa, comparação rápida de opções e extração de informações específicas de páginas complexas — pesquisadores e profissionais de conhecimento ganham horas por semana."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    return (
        <details className="border-b border-gray-200 last:border-0 group" open={index < 5}>
            <summary className="flex w-full items-center justify-between py-4 text-left cursor-pointer list-none focus:outline-none">
                <span className="font-medium text-gray-900">{question}</span>
                <ChevronDownIcon
                    className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                />
            </summary>
            <p className="text-gray-600 leading-relaxed mb-4">{answer}</p>
        </details>
    );
}


export default function FAQSection() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="mt-12 mb-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Navegadores e Buscadores de IA</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.q}
                        answer={faq.a}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
