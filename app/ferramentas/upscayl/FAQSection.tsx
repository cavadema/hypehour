import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Upscayl?", answer: "Upscayl é um upscaler de imagens com IA gratuito e open-source que aumenta a resolução de fotos borradas ou de baixa qualidade em até 16x, tornando-as nítidas e detalhadas." },
    { question: "Para que serve o Upscayl?", answer: "Serve para melhorar a qualidade de imagens antigas, fotos tiradas com câmera ruim, screenshots pixelados e qualquer imagem que precise de mais resolução e nitidez." },
    { question: "O Upscayl é gratuito?", answer: "Sim, completamente gratuito e open-source. O app desktop é gratuito para sempre, e há também uma versão cloud com créditos gratuitos." },
    { question: "O Upscayl funciona offline?", answer: "Sim. O aplicativo desktop processa as imagens localmente no computador, sem enviar dados para servidores externos — ideal para privacidade." },
    { question: "O Upscayl precisa de instalação?", answer: "A versão desktop sim — disponível para Windows, macOS e Linux. Há também a versão web (Upscayl Cloud) que funciona no navegador sem instalação." },
    { question: "O Upscayl funciona no Linux?", answer: "Sim. É um dos poucos upscalers de qualidade com suporte nativo ao Linux, além de Windows e macOS." },
    { question: "O Upscayl usa GPU?", answer: "Sim. Utiliza a GPU do computador para processar as imagens mais rapidamente. Funciona com GPUs NVIDIA, AMD e Intel." },
    { question: "O Upscayl funciona sem GPU?", answer: "Pode funcionar com processamento na CPU, mas muito mais lento. Uma GPU dedicada é recomendada para uso frequente." },
    { question: "O Upscayl melhora fotos de rostos?", answer: "Sim. Possui modelos especializados em rostos (face enhancement) que restauram detalhes faciais em fotos antigas ou de baixa resolução." },
    { question: "Quantas vezes o Upscayl pode ampliar uma imagem?", answer: "Pode ampliar em 2x, 4x, 8x ou até 16x dependendo do modelo escolhido e da resolução original da imagem." },
    { question: "O Upscayl processa múltiplas imagens de uma vez?", answer: "Sim. Suporta processamento em lote, permitindo melhorar várias imagens de uma vez." },
    { question: "O Upscayl aceita quais formatos de imagem?", answer: "Aceita PNG, JPG, WEBP e outros formatos comuns. O resultado pode ser exportado em PNG ou JPG de alta qualidade." },
    { question: "O Upscayl é melhor que o Photoshop para upscaling?", answer: "Para upscaling com IA, o Upscayl geralmente produz resultados superiores ao zoom tradicional do Photoshop, especialmente em imagens com rostos e detalhes finos." },
    { question: "O Upscayl tem diferentes modelos de IA?", answer: "Sim. Oferece vários modelos otimizados para diferentes tipos de imagem: fotos reais, arte digital, anime, rostos, paisagens, entre outros." },
    { question: "O Upscayl remove ruído (denoising) das imagens?", answer: "Alguns modelos incluem remoção de ruído junto com o upscaling, melhorando a qualidade geral da imagem." },
    { question: "O Upscayl é bom para restaurar fotos antigas?", answer: "Sim. É muito usado para restaurar fotos digitalizadas de família, aumentando a resolução e melhorando a nitidez de imagens antigas." },
    { question: "O Upscayl funciona para imagens de anime?", answer: "Sim. Possui modelos específicos para anime e arte em estilo japonês, preservando as características únicas desse estilo." },
    { question: "O Upscayl é bom para screenshots?", answer: "Sim. Melhorar screenshots de baixa resolução, como capturas de jogos antigos ou interfaces antigas, é um caso de uso popular." },
    { question: "O Upscayl afeta a composição da imagem?", answer: "Não. O Upscayl amplia e melhora a resolução sem alterar a composição, cor ou conteúdo original da imagem." },
    { question: "O Upscayl tem versão mobile?", answer: "Não há app mobile oficial. Para mobile, a versão web (Upscayl Cloud) pode ser acessada pelo navegador do smartphone." },
    { question: "O Upscayl é seguro?", answer: "Sim. Por ser open-source, o código é auditável. O processamento local significa que suas imagens não saem do seu computador." },
    { question: "O Upscayl funciona para imagens de produto?", answer: "Sim. Melhorar fotos de produto de baixa resolução para uso em e-commerce é uma aplicação direta." },
    { question: "O Upscayl é melhor que o Topaz Gigapixel?", answer: "O Upscayl é gratuito e open-source, com qualidade competitiva. Topaz Gigapixel tem mais opções de ajuste fino, mas cobra uma licença cara." },
    { question: "Quanto tempo leva para processar uma imagem no Upscayl?", answer: "Depende da resolução original, do fator de ampliação e da GPU disponível. Geralmente de alguns segundos a poucos minutos por imagem." },
    { question: "O Upscayl funciona para impressão?", answer: "Sim. Aumentar imagens digitais para resolução suficiente para impressão em grande formato é um dos principais usos profissionais." },
    { question: "O Upscayl é bom para fotógrafos?", answer: "Sim. Recuperar detalhes de fotos tiradas com ISO alto, câmera antiga ou em condições ruins é muito útil para fotógrafos." },
    { question: "O Upscayl tem suporte em português?", answer: "A interface pode estar em inglês, mas o uso é intuitivo e não exige conhecimento técnico." },
    { question: "O Upscayl tem atualizações frequentes?", answer: "Sim. Por ser um projeto ativo open-source, recebe atualizações regulares com novos modelos e melhorias." },
    { question: "Posso usar imagens melhoradas pelo Upscayl comercialmente?", answer: "Sim. O Upscayl não impõe restrições sobre o uso comercial das imagens processadas." },
    { question: "O Upscayl funciona para texturas de jogos?", answer: "Sim. Melhorar texturas de jogos antigos é um caso de uso popular na comunidade de modding." },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    return (
        <details className="border-b border-zinc-200 last:border-0 group" open={index < 5}>
            <summary className="flex w-full items-center justify-between py-4 text-left cursor-pointer list-none focus:outline-none">
                <span className="font-medium text-black pr-8">{question}</span>
                <ChevronDownIcon
                    className="h-5 w-5 text-zinc-700 transition-transform duration-200 group-open:rotate-180"
                />
            </summary>
            <p className="text-zinc-700 leading-relaxed mb-4">{answer}</p>
        </details>
    );
}


export default function FAQSection() {
    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Upscayl</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
                {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />)}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />
        </div>
    );
}
