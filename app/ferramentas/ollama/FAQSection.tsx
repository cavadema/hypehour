"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O Ollama é gratuito?",
        answer: "Sim, o Ollama é uma ferramenta totalmente open-source e gratuita para baixar e usar localmente no seu computador."
    },
    {
        question: "Preciso de internet para usar o Ollama?",
        answer: "Você precisa de internet apenas para baixar o Ollama e os modelos que deseja usar. Uma vez baixados, o Ollama funciona totalmente offline, processando tudo localmente."
    },
    {
        question: "Quais são os requisitos mínimos de hardware?",
        answer: "Para modelos de 7B parâmetros (como Llama 3 ou Mistral), recomenda-se pelo menos 8GB de RAM (16GB é o ideal). Para modelos de 13B, você precisará de pelo menos 16GB de RAM. Uma GPU com boa VRAM acelera significativamente o processamento, mas o Ollama também pode rodar apenas na CPU."
    },
    {
        question: "O Ollama envia meus dados para algum servidor?",
        answer: "Não. O grande diferencial do Ollama é a privacidade. Seus prompts e as respostas geradas são processados localmente e nunca saem da sua máquina."
    },
    {
        question: "Como instalo o Ollama no Windows?",
        answer: "O Ollama já possui suporte nativo para Windows. Basta baixar o instalador oficial no site ollama.com e seguir as instruções. Ele também funciona via WSL2 se você preferir."
    },
    {
        question: "Posso usar o Ollama com outras ferramentas como LangChain?",
        answer: "Sim! O Ollama fornece uma API local (geralmente na porta 11434) que é compatível com a API da OpenAI. Isso permite integrá-lo facilmente com LangChain, LlamaIndex, SDKs de Python e JS, e muitas outras ferramentas."
    },
    {
        question: "Como faço para atualizar o Ollama?",
        answer: "No macOS e Windows, o Ollama geralmente baixa atualizações automaticamente; basta reiniciar o app quando solicitado. No Linux, basta rodar o comando de instalação novamente: curl -fsSL https://ollama.com/install.sh | sh."
    },
    {
        question: "Onde encontro os logs do Ollama para resolver problemas?",
        answer: "No Windows, os logs ficam em %LOCALAPPDATA%\\Ollama\\server.log. No Mac, use 'cat ~/.ollama/logs/server.log'. No Linux, você pode usar 'journalctl -u ollama' para ver os logs do sistema."
    },
    {
        question: "Como saber se o modelo está rodando na GPU ou na CPU?",
        answer: "Você pode usar o comando 'ollama ps' enquanto um modelo estiver ativo. Ele mostrará a porcentagem do modelo que está carregada na VRAM da GPU e o que está na RAM (CPU)."
    },
    {
        question: "Posso alterar o tamanho da janela de contexto (num_ctx)?",
        answer: "Sim. Você pode definir isso no comando 'ollama run' usando '/set parameter num_ctx 8192', ou criar um Modelfile customizado com o parâmetro 'PARAMETER num_ctx 8192'."
    },
    {
        question: "O Ollama funciona atrás de um proxy?",
        answer: "Sim. Você pode configurar as variáveis de ambiente HTTP_PROXY ou HTTPS_PROXY no seu sistema para que o Ollama consiga baixar modelos através de um servidor proxy."
    },
    {
        question: "Posso rodar vários modelos simultaneamente?",
        answer: "Sim, o Ollama suporta a execução de múltiplos modelos ao mesmo tempo, desde que você tenha VRAM/RAM suficiente. Ele gerencia o carregamento e descarregamento de modelos conforme a demanda das requisições via API."
    },
    {
        question: "Como crio um modelo personalizado no Ollama?",
        answer: "Você deve criar um arquivo chamado 'Modelfile', definir a base (ex: FROM llama3), adicionar instruções de sistema (SYSTEM) e parâmetros, e então rodar o comando 'ollama create meu-modelo -f Modelfile'."
    },
    {
        question: "Existe uma interface gráfica (GUI) para o Ollama?",
        answer: "O Ollama em si é focado em CLI/API, mas existem projetos incríveis da comunidade como 'Open WebUI' (antigo Ollama WebUI), 'AnythingLLM' e 'LM Studio' que se conectam ao Ollama para oferecer uma interface de chat premium."
    },
    {
        question: "Quais GPUs são compatíveis com o Ollama?",
        answer: "O Ollama tem excelente suporte para GPUs NVIDIA (arquitetura Maxwell ou superior) via CUDA, GPUs AMD (via ROCm) e é extremamente otimizado para Apple Silicon (M1, M2, M3) usando a tecnologia Metal."
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
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Ollama</h2>
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
