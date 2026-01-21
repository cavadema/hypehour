export const faqs = [
    {
        question: "O que é o Grafana Cloud AI?",
        answer: "O Grafana Cloud AI é um conjunto de recursos baseados em inteligência artificial e aprendizado de máquina integrados à plataforma Grafana Cloud. Ele ajuda a detectar anomalias, prever tendências e acelerar a resolução de incidentes através de assistentes inteligentes.",
    },
    {
        question: "O Grafana é gratuito?",
        answer: "O Grafana possui uma versão open-source (OSS) totalmente gratuita. No Grafana Cloud, existe um plano 'Forever Free' muito generoso que inclui métricas, logs e traces limitados. Recursos avançados de IA geralmente fazem parte dos planos Pro e Enterprise.",
    },
    {
        question: "O que é o 'Grafana Assistant'?",
        answer: "É um assistente virtual que utiliza modelos de linguagem (LLMs) para ajudar usuários a criar consultas (queries), construir dashboards e entender o estado de seus sistemas usando linguagem natural.",
    },
    {
        question: "Como funciona o recurso 'Sift'?",
        answer: "O Sift é um assistente de diagnóstico que analisa automaticamente métricas, logs e traces para identificar a causa raiz de incidentes, como erros após um deploy ou picos inesperados de uso de CPU.",
    },
    {
        question: "O Grafana AI suporta português?",
        answer: "Embora a interface principal do Grafana seja em inglês, o Grafana Assistant e os recursos de IA conseguem processar e responder a interações em diversos idiomas, incluindo o português brasileiro.",
    },
    {
        question: "Posso usar IA no Grafana self-hosted (local)?",
        answer: "Os recursos nativos de 'Cloud AI' são exclusivos da plataforma em nuvem da Grafana Labs. No entanto, usuários da versão open-source podem utilizar plugins de terceiros ou o plugin oficial de LLM para integrar assistentes de IA em suas instalações locais.",
    },
    {
        question: "O Grafana ajuda a prever falhas antes que aconteçam?",
        answer: "Sim, através do recurso de 'Forecasting' (Previsão), o Grafana Machine Learning analisa dados históricos para prever quando um disco ficará cheio ou quando o tráfego atingirá níveis críticos.",
    },
    {
        question: "O que é a Detecção de Anomalias no Grafana?",
        answer: "É um recurso que aprende o comportamento normal do seu sistema (sazonalidade) e alerta apenas quando algo sai do padrão esperado, reduzindo o excesso de alertas irrelevantes (alert fatigue).",
    },
    {
        question: "Como o Grafana AI ajuda a reduzir custos?",
        answer: "Através do 'Adaptive Telemetry', a IA analisa quais métricas são realmente utilizadas e sugere a redução ou exclusão de dados não utilizados, podendo reduzir os custos de armazenamento em até 50%.",
    },
    {
        question: "O Grafana consegue explicar logs de erro sozinhos?",
        answer: "Sim, com o recurso de 'Log Explainability', a IA analisa mensagens de erro complexas e fornece uma explicação em linguagem simples sobre o que o erro significa e qual a provável solução.",
    },
    {
        question: "Quais modelos de IA o Grafana utiliza?",
        answer: "A Grafana Labs utiliza uma combinação de modelos próprios de machine learning e parcerias com provedores de LLMs como OpenAI e Anthropic (Claude).",
    },
    {
        question: "O Grafana AI é seguro para os dados da minha empresa?",
        answer: "Sim, a Grafana Labs possui certificações SOC2 e ISO 27001. No Grafana Cloud AI, os dados de telemetria são usados apenas para gerar insights na sua própria conta e não para treinar modelos públicos globais.",
    },
    {
        question: "Posso monitorar o custo e performance da minha própria IA no Grafana?",
        answer: "Sim, o Grafana oferece dashboards especializados para 'LLM Observability', permitindo monitorar tokens, latência e custos de aplicações que você construir usando modelos de IA.",
    },
    {
        question: "O Grafana Assistant pode criar dashboards inteiros?",
        answer: "Sim, você pode descrever o que deseja visualizar e o assistente irá sugerir as melhores visualizações e configurar as consultas necessárias para montar o dashboard automaticamente.",
    },
    {
        question: "Quanto custa o uso de IA no Grafana Cloud?",
        answer: "No plano Pro, o acesso à IA geralmente inclui uma cota de mensagens por usuário. Após o limite, é cobrado um valor baseado no uso (pay-as-you-go).",
    },
    {
        question: "O Grafana ajuda a diagnosticar problemas de Kubernetes?",
        answer: "Sim, o Sift e outros recursos de IA possuem integrações profundas com Kubernetes para detectar contêineres em loop de reinicialização (CrashLoopBackOff) ou problemas de noisy neighbors.",
    },
    {
        question: "Posso treinar a IA do Grafana com meus próprios manuais?",
        answer: "O Grafana utiliza agentes que podem ser alimentados com documentação e runbooks da sua empresa para fornecer respostas ainda mais contextuais durante incidentes.",
    },
    {
        question: "O que é o 'Incident Response & Management' (IRM) com IA?",
        answer: "É o fluxo de trabalho onde a IA auxilia desde a detecção do problema até o resumo pós-incidente, ajudando a documentar o que aconteceu e como foi resolvido de forma automática.",
    },
    {
        question: "Como instalar os recursos de IA no meu dashboard?",
        answer: "No Grafana Cloud, a maioria desses recursos já vem integrada e pode ser ativada nas configurações de 'Machine Learning' ou através do ícone do Assistant na barra lateral.",
    },
    {
        question: "O Grafana substitui um analista de SRE?",
        answer: "Não, ele atua como um multiplicador de força. Ele automatiza as tarefas repetitivas de triagem e diagnóstico, permitindo que o analista de SRE foque na resolução estratégica do problema.",
    },
];
