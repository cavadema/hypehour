"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é o Criador de Apresentações com IA do Slidesgo?",
        answer: "É uma ferramenta que utiliza inteligência artificial para gerar apresentações completas de slides automaticamente a partir de um tema, tom e estilo escolhidos pelo usuário, integrando conteúdo e design em segundos.",
    },
    {
        question: "O Slidesgo é gratuito?",
        answer: "O Slidesgo oferece um plano gratuito que inclui acesso a milhares de modelos e algumas utilizações limitadas da ferramenta de IA. Para acesso ilimitado e recursos avançados, existe o plano Premium.",
    },
    {
        question: "Como funciona o gerador de apresentações com IA?",
        answer: "Você insere o tópico da sua apresentação, escolhe o tom de voz (como profissional, criativo ou casual) e seleciona um estilo visual. A IA então estrutura os tópicos, escreve o conteúdo e seleciona as imagens e layouts.",
    },
    {
        question: "Posso exportar as apresentações para o Google Slides ou PowerPoint?",
        answer: "Sim, as apresentações criadas no Slidesgo podem ser baixadas em formato .pptx para uso no Microsoft PowerPoint ou abertas diretamente no Google Slides através de uma integração simples.",
    },
    {
        question: "O Slidesgo gera imagens para os slides?",
        answer: "Sim, a ferramenta de IA seleciona e insere automaticamente imagens relevantes ao conteúdo de cada slide, utilizando o vasto banco de dados do Freepik e Flaticon.",
    },
    {
        question: "Posso escolher o tom da apresentação?",
        answer: "Sim, o Slidesgo permite selecionar entre diversos tons, como Educativo, Profissional, Criativo, Elegante ou Engraçado, para que o conteúdo gerado pela IA combine com o seu objetivo.",
    },
    {
        question: "O Slidesgo funciona em português?",
        answer: "Sim, a ferramenta de IA do Slidesgo entende comandos em português e pode gerar todo o conteúdo da apresentação no idioma, além de suportar vários outros idiomas globais.",
    },
    {
        question: "Preciso criar uma conta para usar a IA do Slidesgo?",
        answer: "Sim, é necessário criar uma conta gratuita para utilizar o criador de apresentações com IA e salvar seus projetos na plataforma.",
    },
    {
        question: "Qual a diferença entre o plano Free e o Premium?",
        answer: "O plano Premium remove as atribuições obrigatórias, oferece downloads ilimitados, acesso a templates exclusivos e maior limite de uso para as ferramentas de IA, além de suporte prioritário.",
    },
    {
        question: "As apresentações criadas pela IA são editáveis?",
        answer: "Totalmente. Após a IA gerar a apresentação, você pode alterar textos, trocar imagens, mudar cores, adicionar novos slides ou reorganizar os elementos usando o editor online do Slidesgo.",
    },
    {
        question: "O Slidesgo é bom para estudantes e professores?",
        answer: "Sim, é uma das ferramentas favoritas da comunidade educacional devido à enorme variedade de temas lúdicos, acadêmicos e infográficos que facilitam o ensino e a aprendizagem.",
    },
    {
        question: "Posso usar minhas próprias imagens na apresentação da IA?",
        answer: "Sim, você pode fazer upload de suas próprias imagens para substituir as geradas pela IA ou para adicionar novos elementos visuais ao seu projeto.",
    },
    {
        question: "O Slidesgo oferece modelos específicos por categoria?",
        answer: "Sim, a plataforma organiza milhares de modelos por categorias como Educação, Negócios, Marketing, Saúde, Tecnologia e muito mais.",
    },
    {
        question: "Como alterar o estilo visual de uma apresentação já criada pela IA?",
        answer: "Dentro do editor, você pode aplicar diferentes variantes de cores e fontes ou até mesmo trocar o template mantendo o conteúdo gerado pela IA.",
    },
    {
        question: "O Slidesgo é melhor que o Gamma ou Canva?",
        answer: "O Slidesgo se destaca pela enorme biblioteca de designs prontos e integração com Freepik. O Gamma foca em estruturas fluidas, e o Canva em design gráfico geral. A escolha depende da sua preferência estética.",
    },
    {
        question: "Posso colaborar com outras pessoas no Slidesgo?",
        answer: "Sim, o Slidesgo oferece recursos de colaboração que permitem compartilhar o link da apresentação com outros usuários para edição conjunta.",
    },
    {
        question: "Existe um limite de apresentações que posso criar com a IA?",
        answer: "No plano gratuito, existe um limite de créditos mensais para o uso da IA. No plano Premium, esses limites são significativamente maiores ou removidos.",
    },
    {
        question: "As apresentações do Slidesgo são seguras e privadas?",
        answer: "O Slidesgo utiliza protocolos de segurança modernos para proteger seus dados e projetos. Você pode controlar a visibilidade das suas apresentações nas configurações.",
    },
    {
        question: "O Slidesgo cria conteúdo original ou apenas preenche modelos?",
        answer: "A IA gera conteúdo textual baseado no seu prompt, mas faz isso dentro de estruturas de design e templates profissionais pré-definidos para garantir a qualidade visual.",
    },
    {
        question: "Posso baixar os slides em formato PDF?",
        answer: "Sim, além do formato PowerPoint, o Slidesgo permite exportar suas apresentações diretamente para PDF de alta qualidade.",
    },
    {
        question: "O Slidesgo tem aplicativos para celular?",
        answer: "O Slidesgo é otimizado para navegadores web em computadores e dispositivos móveis, não possuindo atualmente um app nativo, mas funcionando bem via browser no celular.",
    },
    {
        question: "Como funciona a integração com o Freepik?",
        answer: "Como o Slidesgo faz parte do grupo Freepik, ele utiliza as bibliotecas de imagens e ícones do Freepik e Flaticon de forma nativa e integrada dentro do editor.",
    },
    {
        question: "Posso usar a IA para criar apresentações de negócios e pitch decks?",
        answer: "Sim, existem muitos estilos corporativos focados em dados, relatórios trimestrais e pitch decks para startups que a IA pode estruturar rapidamente.",
    },
    {
        question: "O Slidesgo oferece suporte ao cliente?",
        answer: "Sim, o Slidesgo oferece central de ajuda e suporte via ticket para todos os usuários, com atendimento prioritário para assinantes Premium.",
    },
    {
        question: "Como a IA do Slidesgo escolhe as cores e fontes?",
        answer: "Ela baseia a escolha no 'Estilo' que você seleciona no início (ex: 'Moderno' usa fontes sem serifa e cores vibrantes, 'Retro' usa tons pastéis e fontes clássicas).",
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre o Slidesgo AI</h2>
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
