"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Vidwud?", answer: "Vidwud é uma ferramenta de IA que converte imagens estáticas ou descrições em texto em vídeos dinâmicos, com efeitos de movimento, transformações de estilo e múltiplas opções de personalização." },
    { question: "Para que serve o Vidwud?", answer: "Serve para criar vídeos a partir de fotos ou prompts de texto, adicionar movimento a imagens paradas, transformar estilos visuais e produzir conteúdo de vídeo sem experiência em edição." },
    { question: "O Vidwud é gratuito?", answer: "Sim, possui plano gratuito para experimentar os recursos básicos. Funcionalidades avançadas e exportação em alta qualidade requerem plano pago." },
    { question: "O Vidwud funciona em português?", answer: "A interface pode estar em inglês, mas aceita prompts em português para descrever os vídeos que deseja criar." },
    { question: "O Vidwud converte imagem em vídeo?", answer: "Sim. É um dos principais recursos: transformar uma foto estática em um vídeo com movimento natural, como se a imagem ganhasse vida." },
    { question: "O Vidwud gera vídeos do zero (text-to-video)?", answer: "Sim. Além de imagem para vídeo, oferece geração de vídeo a partir de descrições em texto." },
    { question: "Quanto tempo dura os vídeos gerados pelo Vidwud?", answer: "Geralmente gera clipes curtos de alguns segundos. Planos pagos podem oferecer durações mais longas." },
    { question: "O Vidwud tem boa qualidade de vídeo?", answer: "Para vídeos curtos e conteúdo de redes sociais, a qualidade é boa. Para produção profissional de alta fidelidade, ferramentas premium como Sora ou Kling AI podem ter vantagem." },
    { question: "O Vidwud precisa de instalação?", answer: "Não. É uma plataforma web que funciona diretamente no navegador." },
    { question: "O Vidwud é bom para Reels e TikToks?", answer: "Sim. Os vídeos curtos e dinâmicos gerados são ideais para conteúdo de redes sociais como Instagram Reels, TikTok e YouTube Shorts." },
    { question: "O Vidwud permite personalizar o movimento das imagens?", answer: "Sim. Oferece diferentes efeitos de câmera e movimento como zoom, pan e rotação para animar as imagens." },
    { question: "O Vidwud faz transformação de estilo (style transfer)?", answer: "Sim. Pode transformar o estilo visual de um vídeo ou imagem, como converter foto em estilo anime, pintura ou outros estilos artísticos." },
    { question: "Quais formatos de imagem o Vidwud aceita?", answer: "Aceita os formatos mais comuns como JPG e PNG. Verifique o site para lista completa de formatos suportados." },
    { question: "Em que formato são exportados os vídeos do Vidwud?", answer: "Geralmente em MP4, o formato mais compatível com redes sociais e plataformas de vídeo." },
    { question: "O Vidwud é bom para apresentações?", answer: "Sim. Animações de imagens com IA podem tornar apresentações mais dinâmicas e envolventes." },
    { question: "O Vidwud funciona no celular?", answer: "Sim. A plataforma web é acessível via navegador mobile, mas o desktop oferece melhor experiência de controle." },
    { question: "Quantos vídeos posso gerar no plano gratuito?", answer: "O plano gratuito tem créditos limitados. A quantidade exata varia — verifique os planos no site do Vidwud." },
    { question: "O Vidwud é bom para e-commerce?", answer: "Sim. Animar fotos de produtos é um caso de uso popular, criando vídeos dinâmicos de produtos para lojas virtuais." },
    { question: "O Vidwud tem controle de duração do vídeo?", answer: "Sim. Permite definir a duração do clipe dentro dos limites do plano contratado." },
    { question: "O Vidwud adiciona música ou áudio aos vídeos?", answer: "Verifique no site, pois funcionalidades de áudio variam por plataforma e podem ter sido adicionadas em atualizações recentes." },
    { question: "Quanto tempo leva para gerar um vídeo no Vidwud?", answer: "Geralmente de 30 segundos a alguns minutos, dependendo da complexidade e do servidor." },
    { question: "O Vidwud é melhor que o Runway?", answer: "Ambos têm pontos fortes. Vidwud se destaca pela facilidade de uso e acesso gratuito; Runway oferece mais controle criativo e recursos profissionais." },
    { question: "O Vidwud gera vídeos com rostos humanos realistas?", answer: "Pode gerar animações de rostos, mas para vídeos com avatares humanos de alta qualidade, ferramentas como HeyGen são mais especializadas." },
    { question: "Posso usar os vídeos do Vidwud comercialmente?", answer: "Verifique os termos de uso do Vidwud para uso comercial, pois as permissões variam conforme o plano." },
    { question: "O Vidwud tem API?", answer: "Verifique no site oficial se há API disponível para desenvolvedores que queiram integrar geração de vídeo em seus produtos." },
    { question: "Vale a pena pagar pelo Vidwud?", answer: "Para criadores de conteúdo que precisam de vídeos frequentemente, o plano pago tende a se pagar pelo tempo economizado em produção." },
    { question: "O Vidwud funciona para vídeos educativos?", answer: "Sim. Transformar imagens em vídeos animados pode enriquecer material educativo e torná-lo mais engajante." },
    { question: "O Vidwud é indicado para iniciantes?", answer: "Sim. O processo em três etapas é simples e não requer experiência com edição de vídeo." },
    { question: "O Vidwud faz upscaling de vídeos?", answer: "Verifique no site, pois recursos de melhoria de qualidade de vídeo podem estar disponíveis nas versões mais recentes." },
    { question: "O Vidwud tem histórico de projetos?", answer: "Plataformas web de IA geralmente salvam os projetos recentes. Verifique na conta os limites de armazenamento." },
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Vidwud</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
                {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />)}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />
        </div>
    );
}
