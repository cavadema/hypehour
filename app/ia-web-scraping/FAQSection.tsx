import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que é web scraping com IA e como funciona?",
        "a": "Web scraping com IA combina técnicas tradicionais de extração de dados com modelos de linguagem que entendem estruturas de página variáveis, limpam dados automaticamente e extraem informações específicas em linguagem natural sem necessidade de xpath ou seletores CSS rígidos."
    },
    {
        "q": "Quais as melhores ferramentas de IA para web scraping?",
        "a": "Firecrawl, Browse AI, Crawl4AI, Apify e ScraperAPI são as mais usadas. Firecrawl converte páginas web em markdown limpo para uso com LLMs. Browse AI permite criar scrapers visuais sem código. Crawl4AI é open source e gratuito."
    },
    {
        "q": "Web scraping com IA é legal?",
        "a": "Depende do contexto. Extrair dados públicos para uso pessoal e não comercial é geralmente permitido. Para fins comerciais, verifique os termos de uso do site, o arquivo robots.txt e a legislação local. Dados pessoais têm proteção adicional pela LGPD."
    },
    {
        "q": "Como usar Firecrawl para extrair dados de sites?",
        "a": "Firecrawl converte páginas web em texto estruturado (markdown) via API, eliminando HTML, anúncios e elementos visuais. Ideal para alimentar RAG com conteúdo da web ou extrair informações específicas para análise com LLMs."
    },
    {
        "q": "É possível fazer scraping de sites com JavaScript dinâmico usando IA?",
        "a": "Sim. Ferramentas como Browserless, Playwright com IA e Apify suportam rendering de JavaScript antes da extração, coletando dados que só aparecem após o carregamento dinâmico da página — cobrindo SPAs e sites modernos."
    },
    {
        "q": "Como evitar bloqueios ao fazer web scraping?",
        "a": "Use rotação de IPs e proxies, implemente delays aleatórios entre requisições, respeite o robots.txt, use User Agents reais e faça scraping em horários de menor tráfego. Serviços como ScraperAPI gerenciam tudo isso automaticamente."
    },
    {
        "q": "IA pode extrair dados estruturados de qualquer página web?",
        "a": "Com bom desempenho. LLMs como GPT-4o e Claude conseguem identificar e extrair dados específicos de páginas com layouts variados — como preços de produtos, contatos de empresas ou informações de imóveis — sem seletores pré-programados por página."
    },
    {
        "q": "O que é Crawl4AI e por que é popular entre desenvolvedores?",
        "a": "Crawl4AI é uma biblioteca Python open source otimizada para preparar conteúdo web para uso com LLMs — extraindo conteúdo limpo, gerando embeddings e facilitando a construção de pipelines de RAG com dados da web de forma gratuita."
    },
    {
        "q": "Como monitorar mudanças em sites automaticamente com IA?",
        "a": "Browse AI e Visualping permitem criar monitores de página que alertam quando preços mudam, novos produtos aparecem ou conteúdos são atualizados. Com n8n e Firecrawl, você cria pipelines customizados de monitoramento e notificação."
    },
    {
        "q": "Web scraping com IA pode coletar dados de PDFs e documentos online?",
        "a": "Sim. Ferramentas como LlamaParse e Unstructured extraem dados de PDFs, planilhas e apresentações online com alta fidelidade, preservando estrutura de tabelas e hierarquia de seções para uso em análises e RAG."
    },
    {
        "q": "Quanto custa fazer web scraping com IA em produção?",
        "a": "Crawl4AI é gratuito. ScraperAPI tem plano gratuito com 1.000 requisições/mês. Firecrawl custa a partir de US$16/mês para 3.000 créditos. Para alto volume, avaliar custo de proxies e API de LLM para extração inteligente é essencial."
    },
    {
        "q": "IA pode limpar e normalizar dados extraídos de sites automaticamente?",
        "a": "Sim. Após a extração, LLMs podem normalizar formatos de data, padronizar nomes de entidades, deduplicar registros e classificar itens em categorias — produzindo dados estruturados e consistentes prontos para análise."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Web Scraping</h2>
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
