"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "O ZeroGPT é gratuito?",
    answer: "Sim, o ZeroGPT oferece verificações ilimitadas gratuitamente. Existe um plano Pro com recursos avançados como API e relatórios detalhados.",
  },
  {
    question: "Qual a precisão do ZeroGPT?",
    answer: "O ZeroGPT tem taxa de precisão acima de 98% em textos gerados por ChatGPT, GPT-4, Bard e Claude, testada em milhões de exemplos.",
  },
  {
    question: "O ZeroGPT funciona em português?",
    answer: "Sim, o ZeroGPT suporta mais de 15 idiomas, incluindo português brasileiro e europeu, com alta taxa de acerto.",
  },
  {
    question: "Posso usar o ZeroGPT para trabalhos acadêmicos?",
    answer: "Sim, muitos professores e instituições usam o ZeroGPT para verificar originalidade de trabalhos e redações de alunos.",
  },
  {
    question: "O ZeroGPT armazena os textos que envio?",
    answer: "Não. O ZeroGPT analisa o conteúdo em tempo real e não armazena os textos após a verificação, respeitando a GDPR.",
  },
  {
    question: "Preciso criar conta para usar o ZeroGPT?",
    answer: "Não é necessário cadastro para a versão básica. Apenas para acessar histórico ou recursos Pro.",
  },
  {
    question: "O ZeroGPT detecta todos os modelos de IA?",
    answer: "Detecta os principais (ChatGPT, GPT-4, Claude, Bard, LLaMA), mas modelos novos ou muito customizados podem não ser identificados.",
  },
  {
    question: "Qual o limite de caracteres por verificação?",
    answer: "A versão gratuita permite até 15.000 caracteres por análise. O plano Pro tem limites maiores.",
  },
  {
    question: "O ZeroGPT pode dar falsos positivos?",
    answer: "Sim, textos humanos muito formais ou padronizados podem ser sinalizados como IA. A ferramenta não é 100% infalível.",
  },
  {
    question: "Como o ZeroGPT identifica textos de IA?",
    answer: "Usa modelos de machine learning treinados em milhões de exemplos para detectar padrões linguísticos, estrutura e coesão característicos de IA.",
  },
  {
    question: "O ZeroGPT tem API?",
    answer: "Sim, a API está disponível no plano Pro para integração com sistemas LMS, CMS ou workflows personalizados.",
  },
  {
    question: "Posso exportar os resultados do ZeroGPT?",
    answer: "Sim, você pode salvar os relatórios em PDF ou copiar para compartilhar com sua equipe.",
  },
  {
    question: "O ZeroGPT funciona em textos mistos?",
    answer: "Sim, ele destaca as partes geradas por IA e as escritas por humanos, mostrando o percentual de cada uma.",
  },
  {
    question: "O ZeroGPT é confiável para SEO?",
    answer: "Sim, ajuda a garantir que conteúdo não seja 100% gerado por IA, o que pode melhorar posicionamento e autenticidade.",
  },
  {
    question: "Quanto custa o plano Pro do ZeroGPT?",
    answer: "Os preços variam conforme o volume de análises e acesso à API. Consulte o site oficial para valores atualizados.",
  },
  {
    question: "O ZeroGPT detecta reescritas de IA?",
    answer: "Sim, mesmo textos reescritos ou parafraseados por IA são detectados, pois os padrões linguísticos permanecem.",
  },
  {
    question: "O ZeroGPT é adequado para editoras?",
    answer: "Sim, editoras usam o ZeroGPT para validar autenticidade de manuscritos, artigos e conteúdo recebido de autores.",
  },
  {
    question: "Posso usar o ZeroGPT para verificar e-mails?",
    answer: "Sim, é útil para detectar e-mails automáticos ou gerados por IA, especialmente em contextos de recrutamento.",
  },
  {
    question: "O ZeroGPT funciona offline?",
    answer: "Não, o ZeroGPT é uma ferramenta web que requer conexão à internet para processar os textos.",
  },
  {
    question: "Existe extensão do ZeroGPT para navegador?",
    answer: "Sim, há extensões para Chrome e Firefox que permitem verificar textos diretamente em páginas web.",
  },
  {
    question: "O ZeroGPT detecta tradução automática?",
    answer: "Parcialmente. Tradutores modernos como DeepL podem não ser detectados, mas traduções de IA pura costumam ser identificadas.",
  },
  {
    question: "O ZeroGPT é aprovado academicamente?",
    answer: "Muitas instituições usam, mas é recomendado combinar com outras ferramentas de plágio para validação completa.",
  },
  {
    question: "O ZeroGPT detecta código gerado por IA?",
    answer: "Não. O ZeroGPT é focado em textos naturais. Para código, use ferramentas específicas como GPTZero Code.",
  },
  {
    question: "Posso confiar 100% no ZeroGPT?",
    answer: "Não. Nenhuma ferramenta de detecção é 100% precisa. Use como indicador, não como prova definitiva.",
  },
  {
    question: "O ZeroGPT atualiza seu modelo de detecção?",
    answer: "Sim, a equipe atualiza regularmente para acompanhar novos modelos de IA e melhorar a precisão.",
  },
  {
    question: "O ZeroGPT funciona com textos técnicos?",
    answer: "Sim, mas textos muito especializados (medicina, engenharia) podem ter padrões semelhantes aos de IA e gerar falsos positivos.",
  },
  {
    question: "O ZeroGPT é melhor que outros detectores?",
    answer: "É um dos mais precisos e populares, mas recomenda-se testar com GPTZero, Originality.ai e Copyleaks para comparação.",
  },
  {
    question: "Posso usar o ZeroGPT em avaliações de candidatos?",
    answer: "Sim, é útil para verificar autenticidade de redações e respostas em processos seletivos.",
  },
  {
    question: "O ZeroGPT tem suporte ao cliente?",
    answer: "Sim, há suporte via e-mail e chat para usuários Pro. Usuários gratuitos têm FAQ e documentação.",
  },
  {
    question: "O ZeroGPT é seguro para dados sensíveis?",
    answer: "Sim, usa criptografia SSL e não armazena textos. Mas para documentos altamente confidenciais, consulte a política de privacidade.",
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
      <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre ZeroGPT</h2>
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
