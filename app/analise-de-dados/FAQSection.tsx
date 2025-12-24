"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  { question: "O que é IA para análise de dados?", answer: "É o uso de inteligência artificial para interpretar grandes volumes de dados, identificar padrões, gerar insights e automatizar análises." },
  { question: "Como funciona a análise de dados com IA?", answer: "A IA aplica algoritmos estatísticos e modelos de machine learning para encontrar correlações, tendências e previsões automaticamente." },
  { question: "Qual a melhor IA para análise de dados hoje?", answer: "Ferramentas como Power BI com Copilot, Tableau AI, Google BigQuery ML e ChatGPT são amplamente utilizadas." },
  { question: "IA de análise de dados substitui um analista humano?", answer: "Não. A IA acelera análises, mas a interpretação estratégica ainda depende do profissional." },
  { question: "IA para análise de dados é indicada para iniciantes?", answer: "Sim. Muitas ferramentas usam linguagem natural, facilitando o uso mesmo sem conhecimento técnico avançado." },
  { question: "Existe IA para análise de dados gratuita?", answer: "Sim. Google Colab, versões gratuitas do Power BI, ChatGPT e ferramentas open source oferecem recursos sem custo." },
  { question: "IA para análise de dados funciona com grandes volumes?", answer: "Sim. Ela é especialmente eficiente em big data e conjuntos complexos." },
  { question: "Ciência de dados e IA são a mesma coisa?", answer: "Não. Ciência de dados é a área; IA é uma das tecnologias usadas dentro dela." },
  { question: "IA para análise de dados ajuda na tomada de decisão?", answer: "Sim. Ela gera insights rápidos e previsões que apoiam decisões estratégicas." },
  { question: "IA para análise de dados é usada em empresas?", answer: "Sim. É amplamente usada em marketing, finanças, logística, saúde e tecnologia." },
  { question: "IA para análise de dados funciona em tempo real?", answer: "Sim. Algumas ferramentas analisam dados em tempo real para monitoramento contínuo." },
  { question: "Análise de dados com IA melhora a precisão?", answer: "Em muitos casos, sim, pois reduz erros humanos e detecta padrões ocultos." },
  { question: "IA para análise de dados pode gerar relatórios automaticamente?", answer: "Sim. Ela cria dashboards, gráficos e relatórios de forma automática." },
  { question: "IA para análise de dados Excel é possível?", answer: "Sim. Excel com Copilot e plugins de IA permitem análises avançadas direto na planilha." },
  { question: "IA de análise de dados exige programação?", answer: "Não necessariamente. Muitas plataformas funcionam via interface visual ou linguagem natural." },
  { question: "Como usar IA para análise de dados na prática?", answer: "Basta conectar a IA à base de dados e fazer perguntas ou gerar relatórios automaticamente." },
  { question: "Qual IA é melhor para análise de dados empresarial?", answer: "Power BI, Tableau AI e BigQuery ML são líderes no ambiente corporativo." },
  { question: "IA para análise de dados é segura?", answer: "Sim, desde que sejam seguidas boas práticas de segurança e privacidade." },
  { question: "IA de análise de dados funciona para pequenas empresas?", answer: "Sim. Existem ferramentas acessíveis e até gratuitas para PMEs." },
  { question: "IA pode analisar dados sem intervenção humana?", answer: "Parcialmente. Ela executa análises, mas a validação final é humana." },
  { question: "Qual a diferença entre análise tradicional e análise com IA?", answer: "A IA automatiza e escala análises, enquanto a tradicional é mais manual." },
  { question: "IA para análise de dados pode prever tendências?", answer: "Sim. Modelos preditivos estimam comportamentos futuros com base em dados históricos." },
  { question: "IA para análise de dados funciona com dados não estruturados?", answer: "Sim. Textos, imagens e áudios também podem ser analisados." },
  { question: "IA para análise de dados é difícil de aprender?", answer: "Não. Ferramentas modernas focam em usabilidade e linguagem natural." },
  { question: "IA para análise de dados ajuda no Excel?", answer: "Sim. Ela sugere fórmulas, gráficos e insights automaticamente." },
  { question: "IA pode analisar dados de marketing e vendas?", answer: "Sim. É um dos usos mais comuns para prever conversões e comportamento do cliente." },
  { question: "Ciência de dados e IA trabalham juntas?", answer: "Sim. A IA é uma das principais ferramentas da ciência de dados moderna." },
  { question: "IA para análise de dados é cara?", answer: "Não necessariamente. Há opções gratuitas e planos acessíveis." },
  { question: "IA para análise de dados substitui BI tradicional?", answer: "Ela complementa e evolui o BI, mas não elimina completamente." },
  { question: "Vale a pena usar IA para análise de dados?", answer: "Sim. Ela aumenta produtividade, precisão e velocidade de análise." },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(index < 5);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="mt-12 mb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Análise de Dados</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
