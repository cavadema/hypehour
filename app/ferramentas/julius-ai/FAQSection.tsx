"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Julius AI?", answer: "Julius AI é um assistente de análise de dados com inteligência artificial que permite fazer perguntas em linguagem natural sobre planilhas, CSV e bancos de dados, gerando gráficos, análises e insights automaticamente." },
    { question: "Para que serve o Julius AI?", answer: "Serve para analisar dados sem precisar escrever código — você faz perguntas em texto e a IA executa cálculos, cria visualizações e explica os resultados de forma clara." },
    { question: "O Julius AI é gratuito?", answer: "Possui plano gratuito com análises limitadas por mês. Planos pagos oferecem mais análises, modelos de IA mais potentes e recursos avançados." },
    { question: "O Julius AI funciona em português?", answer: "Sim. Aceita perguntas em português e responde em português, tornando a análise de dados acessível sem barreira de idioma." },
    { question: "Preciso saber programar para usar o Julius AI?", answer: "Não. Essa é a proposta central: qualquer pessoa pode analisar dados fazendo perguntas em linguagem natural, sem escrever Python, SQL ou qualquer código." },
    { question: "O Julius AI aceita planilhas do Excel?", answer: "Sim. Suporta upload de arquivos Excel (.xlsx), CSV e outros formatos de dados comuns." },
    { question: "O Julius AI gera gráficos automaticamente?", answer: "Sim. A partir de perguntas como 'mostre as vendas por mês em um gráfico', a IA gera a visualização automaticamente." },
    { question: "O Julius AI conecta ao Google Sheets?", answer: "Verifique as integrações disponíveis no site oficial. Muitas plataformas de análise suportam Google Sheets diretamente." },
    { question: "O Julius AI escreve código Python?", answer: "Sim. Internamente executa código Python para realizar as análises, e você pode ver e editar o código gerado se quiser." },
    { question: "O Julius AI faz análise estatística?", answer: "Sim. Realiza análises estatísticas como média, mediana, correlação, regressão e outros cálculos a partir de perguntas em linguagem natural." },
    { question: "O Julius AI é seguro para dados sensíveis?", answer: "Verifique a política de privacidade e segurança antes de carregar dados confidenciais ou pessoais na plataforma." },
    { question: "O Julius AI funciona com bancos de dados?", answer: "Verifique as integrações disponíveis. Algumas versões suportam conexão direta a bancos de dados SQL." },
    { question: "O Julius AI faz previsões (forecasting)?", answer: "Sim. Pode realizar análises preditivas e projeções baseadas nos dados históricos carregados." },
    { question: "O Julius AI é melhor que o ChatGPT para análise de dados?", answer: "Para análise de dados específica, sim — Julius AI é especializado nessa tarefa, com execução de código, geração de gráficos e contexto do dataset, algo que o ChatGPT base não faz nativamente." },
    { question: "O Julius AI tem limite de tamanho de arquivo?", answer: "Verifique os limites no site. Arquivos muito grandes podem ter restrições dependendo do plano." },
    { question: "O Julius AI exporta os gráficos gerados?", answer: "Sim. Os gráficos e análises podem ser exportados para uso em apresentações e relatórios." },
    { question: "O Julius AI funciona para análise de marketing?", answer: "Sim. Analisar dados de campanhas, métricas de redes sociais e resultados de anúncios são casos de uso comuns." },
    { question: "O Julius AI é indicado para pequenas empresas?", answer: "Sim. Permite que pequenas empresas façam análises de dados profissionais sem precisar contratar um analista ou cientista de dados." },
    { question: "O Julius AI funciona para análise financeira?", answer: "Sim. Análise de receita, despesas, fluxo de caixa e projeções financeiras são casos de uso frequentes." },
    { question: "O Julius AI explica os resultados em linguagem simples?", answer: "Sim. Além de gráficos e números, o Julius AI explica o que os dados significam em texto acessível." },
    { question: "O Julius AI funciona para dados de RH?", answer: "Sim. Análise de turnover, performance, headcount e outros dados de recursos humanos são casos de uso viáveis." },
    { question: "O Julius AI tem histórico de análises?", answer: "Sim. As análises e conversas ficam salvas para referência e continuação em sessões futuras." },
    { question: "O Julius AI aceita múltiplos arquivos ao mesmo tempo?", answer: "Verifique no site. A capacidade de cruzar múltiplos datasets pode estar disponível em planos avançados." },
    { question: "O Julius AI é bom para relatórios?", answer: "Sim. Gerar relatórios com gráficos e interpretações automáticas é um dos principais benefícios da ferramenta." },
    { question: "Vale a pena pagar pelo Julius AI?", answer: "Para quem analisa dados regularmente e quer economizar horas de trabalho manual, o plano pago se paga rapidamente." },
    { question: "O Julius AI funciona para análise de e-commerce?", answer: "Sim. Analisar dados de vendas, produtos mais vendidos, sazonalidade e comportamento de clientes são aplicações diretas." },
    { question: "O Julius AI tem integração com outras ferramentas?", answer: "Verifique o site para as integrações disponíveis, como Google Sheets, Notion e outras plataformas de dados." },
    { question: "O Julius AI precisa de instalação?", answer: "Não. É uma plataforma web que funciona diretamente no navegador." },
    { question: "O Julius AI é indicado para estudantes?", answer: "Sim. Analisar dados de pesquisas, TCC e experimentos acadêmicos sem precisar de R ou Python é uma grande vantagem." },
    { question: "O Julius AI faz análise de sentimento?", answer: "Para dados textuais, pode executar análises de sentimento e classificação de texto usando IA." },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(index < 5);
    return (
        <div className="border-b border-zinc-200 last:border-0">
            <button className="flex w-full items-center justify-between py-4 text-left focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                <span className="font-medium text-black">{question}</span>
                <ChevronDownIcon className={`h-5 w-5 text-zinc-700 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                <p className="text-zinc-700 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Julius AI</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
                {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />)}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />
        </div>
    );
}
