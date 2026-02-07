
import { GlobeAltIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
    title: "Web Scraping com IA",
    description: "Ferramentas e APIs de IA para Web Scraping, extração de dados e automação de navegação.",
    alternates: { canonical: "https://www.hypehour.com.br/ia-web-scraping" },
};

const ferramentas = [
    {
        nome: "Lection",
        url: "https://www.lection.app/",
        descricao: "Agente de IA para web scraping que funciona no navegador. Extraia dados dinâmicos, paginação e scroll infinito sem código."
    },
    {
        nome: "Firecrawl",
        url: "/ferramentas/firecrawl",
        descricao: "API de scraping e crawling projetada para LLMs. Transforma sites inteiros em dados limpos e estruturados (Markdown) prontos para IA."
    },
    {
        nome: "Browse AI",
        url: "/ferramentas/browse-ai",
        descricao: "Monitore e extraia dados de qualquer site sem código. Crie robôs em minutos para automação de extração de dados."
    },
    {
        nome: "Bright Data Web Scraper",
        url: "https://brightdata.com/products/web-scraper",
        descricao: "Infraestrutura robusta de scraping com proxy desbloqueador, IDE hospedado e datasets prontos para escalar extração de dados."
    },
    {
        nome: "Crawl4AI",
        url: "/ferramentas/crawl4ai",
        descricao: "Crawler e scraper open-source amigável para LLMs. Otimizado para RAG e processamento de dados para inteligência artificial."
    },
    {
        nome: "ScrapeGraphAI",
        url: "https://scrapegraphai.com/",
        descricao: "Biblioteca Python de web scraping que usa LLMs e grafos para extrair conteúdo estruturado de sites e documentos."
    },
    {
        nome: "LLM Scraper",
        url: "https://github.com/mishushakov/llm-scraper",
        descricao: "Biblioteca open-source que permite transformar qualquer página web em dados estruturados (JSON) usando LLMs."
    },
    {
        nome: "Zyte",
        url: "https://www.zyte.com/",
        descricao: "Plataforma enterprise de web scraping que gerencia proxies e bans automaticamente, focada em extração de dados em escala."
    },
    {
        nome: "Browserless",
        url: "/ferramentas/browserless",
        descricao: "Serviço de automação de navegadores headless em nuvem. Execute Puppeteer e Playwright em escala sem gerenciar infraestrutura."
    },
    {
        nome: "Diffbot",
        url: "https://www.diffbot.com/",
        descricao: "Transforma a web em dados estruturados usando visão computacional e NLP. Cria Knowledge Graphs automaticamente."
    },
    {
        nome: "ScraperAPI",
        url: "/ferramentas/scraperapi",
        descricao: "API que gerencia proxies, browsers e captchas para você focar apenas na extração dos dados HTML."
    },
    {
        nome: "Parsio",
        url: "https://parsio.io/",
        descricao: "Parser de documentos e emails com IA. Automatize a extração de dados de PDFs, anexos e corpos de email."
    },
    {
        nome: "Web Scraper",
        url: "https://webscraper.io/",
        descricao: "Extensão de navegador popular e serviço em nuvem para scraping visual point-and-click de sites modernos."
    },
    {
        nome: "Scrape.do",
        url: "https://scrape.do/",
        descricao: "API de web scraping escalável, rápida e acessível. Gerencia proxies e bloqueios para garantir o sucesso das requisições."
    }
];

export default function WebScrapingPage() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>
            <div className="flex items-center gap-3 mb-8">
                <GlobeAltIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Web Scraping</h1>
            </div>
            <p className="mb-8 text-gray-600">
                Ferramentas essenciais para extração de dados, monitoramento de sites e automação de navegação web, potencializadas por Inteligência Artificial.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
                {ferramentas.map((f) => (
                    <a key={f.nome} href={f.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100">
                        <h2 className="font-semibold text-lg mb-1">{f.nome}</h2>
                        <div className="text-gray-500 text-sm">{f.descricao}</div>
                    </a>
                ))}
            </div>
        </main>
    );
}
