"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é transcrever áudio?",
        answer: "Transcrever áudio é o processo de converter fala em texto escrito. Com ferramentas de IA, esse processo se tornou automático, rápido e preciso, permitindo transcrever reuniões, podcasts, entrevistas e palestras em segundos."
    },
    {
        question: "Qual a melhor IA para transcrever áudio em texto?",
        answer: "As melhores IAs para transcrever áudio em texto incluem Speechify, Wisprflow, Willowvoice, Superwhisper e VibeVoice, oferecendo alta precisão, suporte multilíngue e edição integrada."
    },
    {
        question: "Como funciona a IA para transcrever áudio?",
        answer: "A IA para transcrever áudio utiliza modelos de reconhecimento de fala treinados em milhões de horas de áudio, identificando padrões de voz, sotaques e contextos para converter com precisão o que foi dito em texto."
    },
    {
        question: "Text to speech IA é o mesmo que transcrição?",
        answer: "Não. Text to speech (TTS) converte texto em áudio falado, enquanto transcrição faz o oposto: converte áudio em texto escrito. Ambas tecnologias usam IA, mas com objetivos inversos."
    },
    {
        question: "IA consegue transcrever áudio com sotaque ou ruído?",
        answer: "Sim. As IAs modernas são treinadas para reconhecer sotaques regionais e filtrar ruídos de fundo, garantindo transcrições precisas mesmo em ambientes não ideais."
    },
    {
        question: "Transcrever áudio em português funciona bem com IA?",
        answer: "Sim. Ferramentas como Speechify, Wisprflow e Better Dictation têm excelente suporte para português brasileiro, com alta precisão na transcrição de sotaques e vocabulários técnicos."
    },
    {
        question: "IA para transcrever áudio é gratuita?",
        answer: "Muitas ferramentas oferecem planos gratuitos com limitações de tempo ou quantidade. Planos pagos oferecem transcrições ilimitadas, maior precisão e recursos avançados como edição e exportação."
    },
    {
        question: "Qual IA transcreve reuniões do Zoom ou Teams?",
        answer: "Ferramentas como Wisprflow e Aquavoice integram diretamente com plataformas de videoconferência, transcrevendo reuniões em tempo real com separação de falantes."
    },
    {
        question: "Transcrever áudio com IA é seguro?",
        answer: "Sim, desde que você escolha ferramentas com políticas de privacidade claras e criptografia de dados. Algumas oferecem processamento local para garantir total confidencialidade."
    },
    {
        question: "IA pode transcrever áudio de podcasts automaticamente?",
        answer: "Sim. Ferramentas como Speechify e Monologue permitem fazer upload de arquivos de podcast e gerar transcrições completas com timestamps e formatação para publicação."
    },
    {
        question: "Como escolher a melhor ferramenta para transcrever áudio?",
        answer: "Considere: precisão da transcrição, suporte ao idioma, integração com suas ferramentas, custo, velocidade de processamento e recursos extras como edição e exportação."
    },
    {
        question: "IA para transcrever áudio funciona offline?",
        answer: "Algumas ferramentas como Superwhisper e Better Dictation oferecem modelos offline que rodam localmente no dispositivo, garantindo privacidade e funcionamento sem internet."
    },
    {
        question: "Quanto tempo leva para transcrever áudio com IA?",
        answer: "Dependendo da ferramenta e tamanho do arquivo, a transcrição pode ser quase instantânea. Áudios de 1 hora costumam ser transcritos em menos de 5 minutos."
    },
    {
        question: "IA para transcrever áudio em texto identifica quem está falando?",
        answer: "Sim. Ferramentas avançadas como Wisprflow e Aquavoice oferecem diarização, identificando e separando diferentes falantes automaticamente na transcrição."
    },
    {
        question: "Posso editar a transcrição depois que a IA processa?",
        answer: "Sim. A maioria das ferramentas permite edição manual das transcrições, com interface para corrigir erros, adicionar pontuação e ajustar formatação."
    },
    {
        question: "IA transcreve áudio em tempo real?",
        answer: "Sim. Ferramentas como Aquavoice e Talktastic oferecem transcrição em tempo real, ideal para reuniões, palestras e transmissões ao vivo."
    },
    {
        question: "Text to speech IA e transcrição podem ser usados juntos?",
        answer: "Sim. Você pode transcrever áudio em texto e depois usar text to speech para gerar uma nova narração com vozes diferentes, ideal para criar conteúdo acessível ou multilíngue."
    },
    {
        question: "Qual formato de áudio funciona melhor com IA de transcrição?",
        answer: "A maioria das ferramentas aceita MP3, WAV, M4A e formatos comuns. Arquivos com áudio claro e em formatos não comprimidos tendem a gerar transcrições mais precisas."
    },
    {
        question: "IA para transcrever áudio substitui transcrição manual?",
        answer: "Para a maioria dos casos, sim. A IA oferece precisão de 90-98%, sendo muito mais rápida que transcrição manual. Revisão humana pode ser necessária em contextos técnicos complexos."
    },
    {
        question: "Posso usar IA para legendar vídeos automaticamente?",
        answer: "Sim. Ferramentas de transcrição de áudio podem gerar legendas automaticamente a partir do áudio do vídeo, com timestamps sincronizados para publicação em YouTube, redes sociais e cursos."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(index < 5); // Primeiros 5 abertos por padrão

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium text-gray-900">{question}</span>
                <ChevronDownIcon
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"
                    }`}
            >
                <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Transcrever Áudio</h2>
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
