export const faqs = [
    {
        question: "O que é o Firecrawl?",
        answer: "O Firecrawl é uma API de scraping e crawling projetada especificamente para alimentar modelos de linguagem (LLMs). Ele transforma qualquer site em Markdown limpo e estruturado, pronto para RAG e treinamento."
    },
    {
        question: "Como o Firecrawl se diferencia de scrapers tradicionais?",
        answer: "Diferente de scrapers que focam em HTML bruto, o Firecrawl limpa automaticamente o conteúdo (removendo menus e anúncios), lida com proxies, resolve JavaScript e entrega Markdown otimizado para economizar tokens."
    },
    {
        question: "O Firecrawl resolve JavaScript e SPAs?",
        answer: "Sim, ele possui um motor de renderização integrado que processa JavaScript, lida com cookies e espera o carregamento de componentes dinâmicos em sites feitos com React, Vue, etc."
    },
    {
        question: "O que é a funcionalidade 'LLM Extract'?",
        answer: "É um recurso que permite definir um esquema JSON desejado e o Firecrawl usa IA para extrair exatamente esses dados do site, sem que você precise escrever seletores CSS manuais."
    },
    {
        question: "O Firecrawl lida com proxies e CAPTCHAs?",
        answer: "Sim, ele gerencia automaticamente a rotação de proxies e técnicas de evasão de bloqueios para garantir que o seu crawler não seja interrompido por sistemas anti-bot."
    },
    {
        question: "Posso fazer crawl de um domínio inteiro?",
        answer: "Sim, o Firecrawl pode navegar por sitemaps ou fazer crawling recursivo de um domínio para capturar todas as subpáginas relevantes automaticamente."
    },
    {
        question: "O Firecrawl é integrável com LangChain ou LlamaIndex?",
        answer: "Sim, ele possui integrações nativas com os principais frameworks de agentes de IA, sendo a solução preferida para criar bases de conhecimento atualizadas em tempo real."
    },
    {
        question: "Existe um limite de páginas por crawl?",
        answer: "Os limites dependem do seu plano, mas a API é desenhada para escala industrial, permitindo processar milhares de páginas de forma eficiente."
    },
    {
        question: "Qual o formato de saída dos dados?",
        answer: "O formato principal é Markdown, mas também suporta JSON estruturado para extrações de dados específicos e metadados da página."
    },
    {
        question: "Como o Firecrawl lida com imagens e arquivos externos?",
        answer: "Atualmente o foco é extrair texto e links em Markdown, mas ele preserva as URLs das imagens e estruturas de tabelas para manter a integridade visual do conteúdo."
    },
    {
        question: "O Firecrawl é open-source?",
        answer: "Sim, ele possui uma versão open-source que pode ser hospedada localmente (self-hosted), além da versão Cloud gerenciada para facilidade e alta disponibilidade."
    },
    {
        question: "É seguro usar o Firecrawl em sites corporativos?",
        answer: "Sim, ele segue práticas padrão de web scraping e permite configurar headers e limites de taxa para respeitar as políticas de acesso dos sites."
    },
    {
        question: "Como funciona a precificação do Cloud?",
        answer: "A precificação é baseada em créditos por página processada, com um plano gratuito generoso para desenvolvedores testarem a plataforma."
    },
    {
        question: "O Firecrawl consegue burlar bloqueios baseados em IP?",
        answer: "Através de sua infraestrutura de proxies residenciais e data centers, ele consegue contornar a maioria dos bloqueios geográficos e de IP."
    },
    {
        question: "Posso agendar crawlings?",
        answer: "Através da API, você pode integrar o Firecrawl ao seu próprio cron job ou ferramenta de orquestração para manter seus dados sempre sincronizados."
    },
    {
        question: "Ele suporta autenticação (logins)?",
        answer: "O Firecrawl foca em conteúdo público, mas permite passar cookies e headers personalizados para acessar áreas que exigem autenticação básica."
    },
    {
        question: "Como o Markdown gerado economiza tokens?",
        answer: "Ao remover tags HTML redundantes, scripts e estilos CSS, o Firecrawl entrega apenas o texto semântico, reduzindo em até 80% o volume de dados enviados ao LLM."
    },
    {
        question: "Ele extrai metadados como título e descrição?",
        answer: "Sim, cada requisição retorna metadados completos da página como título, descrição, autor, data de publicação e linguagens."
    },
    {
        question: "O Firecrawl é rápido?",
        answer: "Ele é otimizado para performance, utilizando processamento paralelo para scraping e crawling de larga escala em segundos."
    },
    {
        question: "Existe suporte para desenvolvedores?",
        answer: "Sim, o Firecrawl possui documentação extensiva, SDKs em Python e Node.js, e uma comunidade ativa no Discord e GitHub."
    }
];
