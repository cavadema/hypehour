export const faqs = [
    {
        question: "O que é o Browserless?",
        answer: "O Browserless é um serviço de automação de navegadores headless em nuvem que permite executar scripts de Puppeteer, Playwright e Selenium em escala sem gerenciar infraestrutura."
    },
    {
        question: "Por que usar o Browserless em vez de rodar localmente?",
        answer: "O Browserless elimina a complexidade de gerenciar instâncias de Chrome em servidores, lidando com memória, zumbis de processos e escalabilidade automática."
    },
    {
        question: "O Browserless suporta Playwright e Puppeteer?",
        answer: "Sim, ele é totalmente compatível com as principais bibliotecas de automação, permitindo que você apenas mude a URL de conexão no seu código."
    },
    {
        question: "Como o Browserless ajuda no web scraping?",
        answer: "Ele fornece navegadores prontos com rotação de proxies, gestão de sessões e capacidade de processar milhares de requisições simultâneas sem quedas de performance."
    },
    {
        question: "O Browserless possui um dashboard visual?",
        answer: "Sim, ele oferece um debugger visual onde você pode ver em tempo real o que o navegador está fazendo, facilitando a correção de scripts."
    },
    {
        question: "Posso hospedar o Browserless na minha própria infraestrutura?",
        answer: "Sim, além da versão Cloud, existe uma versão open-source via Docker que você pode rodar em seus próprios servidores ou clusters Kubernetes."
    },
    {
        question: "Ele lida com sites que bloqueiam bots?",
        answer: "Sim, o Browserless possui recursos avançados como stealth mode e integração nativa com provedores de proxy para contornar bloqueios."
    },
    {
        question: "O que são as 'N-browser instances'?",
        answer: "É a capacidade de disparar centenas de navegadores ao mesmo tempo, cada um em um contexto isolado, para scraping massivo de dados."
    },
    {
        question: "Existe suporte para gerenciar fontes e emojis?",
        answer: "Sim, as instâncias de navegador do Browserless vêm pré-configuradas com fontes internacionais e suporte a emojis para renderização perfeita de qualquer site."
    },
    {
        question: "Como funciona a precificação do Cloud?",
        answer: "A precificação costuma ser baseada no tempo de uso do navegador ou em unidades de processamento, com um plano gratuito para testes."
    },
    {
        question: "O Browserless é seguro?",
        answer: "Sim, todas as sessões de navegador são isoladas e destruídas após o uso, garantindo que não haja vazamento de dados entre execuções."
    },
    {
        question: "Consigo tirar prints e gerar PDFs com ele?",
        answer: "Sim, essa é uma das funções mais comuns. Você pode capturar screenshots de alta resolução ou converter páginas HTML inteiras em PDFs profissionais."
    },
    {
        question: "Ele suporta extensões do Chrome?",
        answer: "Sim, você pode carregar extensões personalizadas no navegador durante a sessão para funcionalidades extras ou bypasses específicos."
    },
    {
        question: "O Browserless é rápido?",
        answer: "Sim, por rodar em infraestrutura otimizada com CPUs de alta performance, ele geralmente é mais rápido que rodar o Chrome em servidores genéricos."
    },
    {
        question: "Ele possui limites de taxa (Rate Limits)?",
        answer: "Isso depende do seu plano, mas a arquitetura é desenhada para suportar picos de tráfego intensos sem degradar o serviço."
    },
    {
        question: "Como faço a integração com meu código?",
        answer: "Basta substituir a chamada de lançamento local do navegador por um endpoint de conexão remota (WebSocket) fornecido pelo Browserless."
    },
    {
        question: "Ele funciona com Python e Node.js?",
        answer: "Sim, qualquer linguagem que suporte os protocolos do Puppeteer ou Playwright pode se conectar ao Browserless perfeitamente."
    },
    {
        question: "O Browserless ajuda com economia de memória?",
        answer: "Sim, ele gerencia agressivamente o ciclo de vida dos navegadores para garantir que processos inativos não consumam RAM desnecessariamente."
    },
    {
        question: "Existe suporte técnico?",
        answer: "Sim, os planos pagos oferecem suporte prioritário via chat e e-mail, além de uma documentação técnica muito detalhada."
    },
    {
        question: "O Browserless é melhor que o Zyte?",
        answer: "O Browserless foca em automação bruta de navegadores, enquanto o Zyte foca mais em proxies e extração de dados brutos. São ferramentas complementares."
    }
];
