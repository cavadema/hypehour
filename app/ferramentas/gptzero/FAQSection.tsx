"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "O GPTZero é gratuito?",
    answer: "Sim, GPTZero oferece um plano gratuito com 5 análises por mês. Educadores e instituições podem acessar planos premium com mais análises e recursos avançados.",
  },
  {
    question: "Qual a precisão do GPTZero?",
    answer: "GPTZero tem alta precisão em detectar textos gerados por ChatGPT, GPT-4, Bard e Claude. Testes mostram taxa de acerto acima de 95% em muitos cenários.",
  },
  {
    question: "O GPTZero funciona em português?",
    answer: "Sim, GPTZero funciona bem em português e suporta múltiplos idiomas, especialmente em contextos acadêmicos.",
  },
  {
    question: "Posso usar o GPTZero para validar trabalhos acadêmicos?",
    answer: "Sim, GPTZero foi especificamente desenvolvido para educadores verificarem originalidade de trabalhos e redações de alunos.",
  },
  {
    question: "O GPTZero armazena os textos que envio?",
    answer: "Não. GPTZero processa o texto para análise mas não armazena o conteúdo após a verificação, respeitando privacidade.",
  },
  {
    question: "Preciso criar conta para usar o GPTZero?",
    answer: "Para a versão gratuita é necessário criar uma conta. Apenas cadastro simples com email.",
  },
  {
    question: "O GPTZero detecta todos os modelos de IA?",
    answer: "Detecta bem os principais modelos (ChatGPT, GPT-4, Claude, Bard, LLaMA), mas modelos muito novos podem ter menor precisão.",
  },
  {
    question: "Qual o limite de caracteres por análise?",
    answer: "GPTZero aceita textos de até 10.000 caracteres. Para textos maiores, divida em partes ou use o plano premium.",
  },
  {
    question: "O GPTZero pode dar falsos positivos?",
    answer: "Sim, textos muito formais, técnicos ou padronizados podem ser sinalizados incorretamente. Use como ferramenta de apoio.",
  },
  {
    question: "Como o GPTZero identifica textos de IA?",
    answer: "Usa algoritmos de machine learning para detectar padrões linguísticos, entropia, diversidade de tokens e outros indicadores de IA.",
  },
  {
    question: "O GPTZero tem integração com plataformas educacionais?",
    answer: "Sim, oferece extensões para Canvas, Blackboard, Google Classroom e LMS populares para integração direta.",
  },
  {
    question: "Posso exportar os resultados do GPTZero?",
    answer: "Sim, você pode visualizar e compartilhar os relatórios. Recursos de exportação estão disponíveis nos planos premium.",
  },
  {
    question: "O GPTZero funciona em textos mistos?",
    answer: "Sim, destaca as seções possivelmente geradas por IA e as originais, mostrando uma análise combinada.",
  },
  {
    question: "O GPTZero é confiável para avaliações?",
    answer: "Sim, muitas escolas e universidades usam GPTZero como ferramenta de apoio em processos de avaliação acadêmica.",
  },
  {
    question: "Quanto custa o plano premium do GPTZero?",
    answer: "Planos variam de acordo com volume de análises. Educadores podem ter preços especiais. Consulte o site para valores atualizados.",
  },
  {
    question: "O GPTZero detecta paráfrase gerada por IA?",
    answer: "Sim, detecta bem mesmo textos reescritos, pois os padrões linguísticos permanecem similares aos da IA.",
  },
  {
    question: "O GPTZero é adequado para tutores particulares?",
    answer: "Sim, muitos tutores usam GPTZero para validar trabalhos de seus alunos de forma confiável.",
  },
  {
    question: "Posso usar o GPTZero para verificar e-mails?",
    answer: "Sim, você pode colar e-mails na ferramenta para detectar se foram gerados ou assistidos por IA.",
  },
  {
    question: "O GPTZero funciona offline?",
    answer: "Não, é uma ferramenta web que requer conexão à internet para processar análises.",
  },
  {
    question: "Existe extensão do GPTZero para navegador?",
    answer: "Sim, há extensões para Chrome que permitem detectar IA diretamente em páginas web e documentos.",
  },
  {
    question: "O GPTZero detecta tradução automática de IA?",
    answer: "Parcialmente. Tradutores modernos como DeepL podem não ser detectados, mas traduções de IA pura costumam ser identificadas.",
  },
  {
    question: "O GPTZero é usado por universidades renomadas?",
    answer: "Sim, instituições acadêmicas de diversos países usam GPTZero como ferramenta oficialmente reconhecida.",
  },
  {
    question: "O GPTZero detecta código gerado por IA?",
    answer: "Não, GPTZero é focado em textos naturais. Para código, use ferramentas específicas como Plagiarism Detector ou GitHub's copilot detection.",
  },
  {
    question: "Posso confiar 100% no GPTZero?",
    answer: "Não. Use como ferramenta de apoio, não como prova definitiva. Combine com outras formas de validação.",
  },
  {
    question: "O GPTZero atualiza seu modelo de detecção?",
    answer: "Sim, a equipe atualiza regularmente para acompanhar novos modelos de IA e melhorar precisão.",
  },
  {
    question: "O GPTZero funciona com textos muito técnicos?",
    answer: "Sim, mas textos especializados (medicina, engenharia) podem ter padrões semelhantes aos de IA e gerar alguns falsos positivos.",
  },
  {
    question: "O GPTZero é melhor que outras ferramentas?",
    answer: "É especializado para educação e considerado um dos melhores. Teste com ZeroGPT, Originality.ai ou Copyleaks para comparar.",
  },
  {
    question: "Posso usar o GPTZero em avaliações certificadas?",
    answer: "Sim, muitas instituições aceitam relatórios do GPTZero como evidência de verificação de originalidade.",
  },
  {
    question: "O GPTZero tem suporte ao cliente?",
    answer: "Sim, oferece suporte via email e chat para usuários de planos pagos. Usuários gratuitos têm FAQ e documentação.",
  },
  {
    question: "O GPTZero é seguro para dados educacionais?",
    answer: "Sim, usa criptografia e não armazena textos. Confira a política de privacidade para dados sensíveis.",
  },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(index < 5);

  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-black">{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-zinc-700 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
          }`}
      >
        <p className="text-zinc-700 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <div className="mt-12 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre GPTZero</h2>
      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
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
