"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Sidekicker AI?",
        answer: "O Sidekicker AI é uma plataforma 'tudo-em-um' para criação e autenticação de conteúdo. Ela oferece ferramentas integradas de detecção de IA, humanização de texto e verificação de plágio."
    },
    {
        question: "O Sidekicker AI é gratuito?",
        answer: "O Sidekicker oferece um período de teste de 7 dias por um valor simbólico (geralmente US$ 1,95). Após esse período, ele se torna uma assinatura paga. Não há uma versão 100% gratuita permanente."
    },
    {
        question: "Como funciona a detecção de IA no Sidekicker?",
        answer: "A ferramenta utiliza algoritmos de machine learning treinados em vastos conjuntos de dados para identificar padrões linguísticos, tom e estrutura típicos de modelos de IA como ChatGPT e Claude."
    },
    {
        question: "O Sidekicker AI humaniza textos?",
        answer: "Sim, ele possui uma funcionalidade chamada 'Humanizer', que reescreve textos gerados por IA para que soem mais naturais e humanos, tentando evitar a detecção por outros softwares."
    },
    {
        question: "O humanizador do Sidekicker realmente funciona?",
        answer: "Embora ajude a melhorar a fluidez do texto, testes indicam que ele nem sempre consegue burlar detectores mais rigorosos. Recomenda-se sempre uma revisão manual final."
    },
    {
        question: "O Sidekicker AI detecta plágio?",
        answer: "Sim, ele inclui um verificador de plágio que compara o conteúdo com bilhões de fontes online para garantir a originalidade e evitar cópias indevidas."
    },
    {
        question: "Qual a precisão do detector de IA do Sidekicker?",
        answer: "A precisão é alta para detectar modelos comuns, mas, como todo detector, pode apresentar falsos positivos em textos muito técnicos ou padronizados."
    },
    {
        question: "O Sidekicker AI suporta português?",
        answer: "Sim, a ferramenta é capaz de analisar e processar textos em português, embora tenha sido otimizada primariamente para o inglês."
    },
    {
        question: "Como funciona o período de teste do Sidekicker?",
        answer: "Você paga um valor inicial baixo para testar por 7 dias. Importante: se não cancelar antes do fim do prazo, a renovação para o plano mensal completo ocorre automaticamente."
    },
    {
        question: "O Sidekicker AI pode dar falsos positivos?",
        answer: "Sim. Textos escritos por humanos que seguem estruturas muito rígidas ou acadêmicas podem ser ocasionalmente marcados como IA. Use o score como guia, não como prova absoluta."
    },
    {
        question: "Quais são os modos de escrita disponíveis?",
        answer: "A plataforma oferece modos como Criativo, Profissional, Acadêmico e Casual, permitindo ajustar o tom do texto humanizado conforme a necessidade."
    },
    {
        question: "O Sidekicker AI é seguro?",
        answer: "O Sidekicker afirma utilizar protocolos de segurança modernos para proteger os dados enviados, mas evite inserir informações sensíveis ou confidenciais na ferramenta."
    },
    {
        question: "Posso cancelar minha assinatura a qualquer momento?",
        answer: "Sim, o cancelamento pode ser feito através do painel de usuário, mas deve ser realizado antes da próxima data de ciclo de faturamento para evitar novas cobranças."
    },
    {
        question: "O Sidekicker AI detecta conteúdos do GPT-4?",
        answer: "Sim, seus modelos são atualizados para identificar conteúdos gerados pelas versões mais recentes da OpenAI, incluindo o GPT-4 e GPT-4o."
    },
    {
        question: "Qual a diferença entre o Sidekicker e o GPTZero?",
        answer: "O GPTZero é focado quase exclusivamente em detecção educacional, enquanto o Sidekicker é uma ferramenta mais voltada para produtores de conteúdo, unindo detecção e 'humanização' no mesmo lugar."
    },
    {
        question: "Como usar o detector de plágio do Sidekicker?",
        answer: "Basta colar o texto na seção correspondente; a ferramenta gerará um relatório detalhado mostrando porcentagens de similaridade e fontes encontradas na web."
    },
    {
        question: "O Sidekicker AI serve para estudantes?",
        answer: "Sim, muitos estudantes utilizam a ferramenta para garantir que seus trabalhos não apresentem plágio e para verificar a naturalidade de suas escritas."
    },
    {
        question: "Existe uma extensão para Chrome?",
        answer: "Atualmente, o Sidekicker opera principalmente como uma plataforma web, mas frequentemente lançam novas integrações e extensões de navegador."
    },
    {
        question: "O Sidekicker AI ajuda no SEO?",
        answer: "Ao ajudar a criar textos mais naturais e originais, ele indiretamente contribui para o SEO, já que motores de busca como o Google priorizam conteúdo de alta qualidade."
    },
    {
        question: "Como entrar em contato com o suporte do Sidekicker?",
        answer: "O suporte é realizado geralmente via e-mail ou sistema de tickets dentro da plataforma para assinantes de planos pagos."
    }
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Sidekicker AI</h2>
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
