export const faqs = [
    {
        question: "O que é o Crawl4AI?",
        answer: "O Crawl4AI é uma biblioteca open-source em Python projetada para realizar crawling e scraping de alta performance, otimizada especificamente para alimentar modelos de linguagem (LLMs) e pipelines de RAG."
    },
    {
        question: "O Crawl4AI é gratuito?",
        answer: "Sim, o Crawl4AI é totalmente open-source e gratuito para uso, permitindo que você o hospede em sua própria infraestrutura sem custos de licença."
    },
    {
        question: "Quais são os principais diferenciais do Crawl4AI?",
        answer: "Ele se destaca pela velocidade, suporte nativo a renderização de JavaScript (via Playwright), limpeza automática de conteúdo e saída otimizada em Markdown para IA."
    },
    {
        question: "Ele suporta extração estruturada?",
        answer: "Sim, o Crawl4AI possui suporte para extração baseada em esquemas JSON usando LLMs, permitindo transformar sites em dados organizados sem seletores manuais."
    },
    {
        question: "O Crawl4AI lida com proxies?",
        answer: "Sim, você pode configurar facilmente a rotação de proxies e headers personalizados para evitar bloqueios e gerenciar a identidade do crawler."
    },
    {
        question: "Ele é mais rápido que o BeautifulSoup?",
        answer: "Sim, o Crawl4AI utiliza processamento assíncrono e é otimizado para lidar com milhares de URLs simultaneamente de forma muito mais eficiente."
    },
    {
        question: "O Crawl4AI resolve sites feitos em React ou Vue?",
        answer: "Sim, ele utiliza o Playwright nos bastidores para renderizar conteúdo dinâmico e esperar que os elementos de SPAs sejam carregados."
    },
    {
        question: "Posso usar o Crawl4AI com LangChain?",
        answer: "Sim, ele é frequentemente usado como um Document Loader em ecossistemas de IA como LangChain e LlamaIndex."
    },
    {
        question: "O Crawl4AI remove anúncios e menus?",
        answer: "Sim, ele possui algoritmos de limpeza que filtram 'ruídos' como barras laterais, rodapés e publicidade, entregando apenas o conteúdo semântico."
    },
    {
        question: "Qual o formato de saída dos dados?",
        answer: "O output padrão é Markdown limpo, mas ele também pode retornar JSON, HTML sanitizado e metadados completos da página."
    },
    {
        question: "É fácil de instalar?",
        answer: "Sim, basta um comando `pip install crawl4ai` para começar a usar a biblioteca em seus projetos Python."
    },
    {
        question: "O Crawl4AI suporta autenticação?",
        answer: "Sim, você pode passar sessões, cookies e headers para realizar scraping de áreas que exigem login ou tokens de acesso."
    },
    {
        question: "Ele consome muitos recursos do servidor?",
        answer: "Ele é altamente eficiente, mas o consumo depende se você está usando o modo headless (com navegador) ou apenas requisições HTTP simples."
    },
    {
        question: "Como o Crawl4AI lida com CAPTCHAs?",
        answer: "Ele foca na evasão inteligente e pode ser integrado a serviços de resolução de CAPTCHA de terceiros se necessário."
    },
    {
        question: "Posso fazer crawling recursivo?",
        answer: "Sim, a biblioteca permite definir profundidade de busca e padrões de URL para explorar domínios inteiros automaticamente."
    },
    {
        question: "O Crawl4AI extrai imagens?",
        answer: "Ele foca no texto em Markdown, mas captura as URLs das imagens e preserva a estrutura de links para referência posterior."
    },
    {
        question: "Ele é seguro para uso comercial?",
        answer: "Sim, a licença open-source permite o uso comercial, desde que respeitadas as condições da licença específica do projeto."
    },
    {
        question: "Existe uma versão em nuvem (SaaS)?",
        answer: "O Crawl4AI é focado em self-hosted, mas você pode integrá-lo em funções serverless ou containers em qualquer nuvem."
    },
    {
        question: "O que é o 'Fit Markdown'?",
        answer: "É uma técnica do Crawl4AI que ajusta o Markdown para que ele contenha apenas o que é estatisticamente provável de ser o conteúdo principal da página."
    },
    {
        question: "Como é o suporte da comunidade?",
        answer: "O projeto é muito ativo no GitHub e possui uma comunidade crescente de desenvolvedores de IA que contribuem com melhorias constantes."
    }
];
