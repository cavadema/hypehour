"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o TurboScribe?", answer: "TurboScribe é uma ferramenta de transcrição de áudio com IA baseada na tecnologia Whisper da OpenAI, capaz de transcrever arquivos de áudio e vídeo em mais de 98 idiomas com alta precisão." },
    { question: "Para que serve o TurboScribe?", answer: "Serve para transcrever reuniões, podcasts, entrevistas, aulas, palestras e qualquer conteúdo em áudio ou vídeo, gerando texto preciso em minutos." },
    { question: "O TurboScribe é gratuito?", answer: "Sim, possui plano gratuito com até 3 transcrições por dia. Planos pagos oferecem transcrições ilimitadas e recursos avançados." },
    { question: "O TurboScribe funciona em português?", answer: "Sim. O TurboScribe suporta português entre os mais de 98 idiomas disponíveis, com boa precisão para o português brasileiro." },
    { question: "Qual tecnologia o TurboScribe usa?", answer: "É baseado no modelo Whisper da OpenAI, reconhecido como um dos melhores modelos de reconhecimento de fala do mundo." },
    { question: "O TurboScribe é preciso?", answer: "Sim. Usando o modelo Whisper, entrega uma das maiores precisões disponíveis comercialmente, especialmente para áudios de boa qualidade." },
    { question: "Quais formatos de arquivo o TurboScribe aceita?", answer: "Aceita os principais formatos de áudio (MP3, M4A, WAV, OGG) e vídeo (MP4, MOV, AVI), entre outros." },
    { question: "O TurboScribe tem limite de duração de arquivo?", answer: "Planos gratuitos e pagos têm limites diferentes. O plano pago geralmente permite arquivos mais longos. Verifique os detalhes no site." },
    { question: "O TurboScribe identifica diferentes falantes?", answer: "Sim. Possui diarização de falantes, identificando e separando quem falou cada trecho na transcrição." },
    { question: "Em quanto tempo o TurboScribe transcreve?", answer: "Geralmente muito mais rápido que a duração do áudio original — um arquivo de 1 hora pode ser transcrito em poucos minutos." },
    { question: "O TurboScribe exporta em quais formatos?", answer: "Exporta em TXT, DOCX, SRT (legenda) e outros formatos, facilitando o uso em diferentes contextos." },
    { question: "O TurboScribe gera legendas (SRT)?", answer: "Sim. Pode exportar as transcrições em formato SRT para adicionar legendas a vídeos automaticamente." },
    { question: "O TurboScribe funciona para podcasts?", answer: "Sim. É muito usado para transcrever episódios de podcast e gerar conteúdo escrito para blogs e SEO." },
    { question: "O TurboScribe precisa de instalação?", answer: "Não. É uma plataforma web que funciona diretamente no navegador, sem download." },
    { question: "O TurboScribe funciona offline?", answer: "Não. Requer conexão com internet para processar as transcrições nos servidores." },
    { question: "O TurboScribe é seguro para arquivos confidenciais?", answer: "Verifique a política de privacidade antes de transcrever conteúdos sensíveis. A plataforma descreve suas práticas de segurança no site." },
    { question: "O TurboScribe funciona para aulas e palestras?", answer: "Sim. É muito usado por estudantes e professores para transcrever aulas, webinars e palestras acadêmicas." },
    { question: "O TurboScribe permite editar a transcrição?", answer: "Sim. Após a geração, o texto pode ser editado diretamente na plataforma antes de exportar." },
    { question: "O TurboScribe funciona para transcrever entrevistas?", answer: "Sim. Com a diarização de falantes, é excelente para transcrever entrevistas com múltiplas pessoas." },
    { question: "O TurboScribe tem API?", answer: "Verifique no site oficial. Plataformas de transcrição frequentemente oferecem API para integração em fluxos de trabalho automatizados." },
    { question: "O TurboScribe é melhor que o Whisper direto?", answer: "Para quem não tem conhecimento técnico, sim — o TurboScribe oferece uma interface amigável sobre o mesmo modelo Whisper, sem necessidade de código." },
    { question: "O TurboScribe suporta múltiplos idiomas na mesma gravação?", answer: "O modelo Whisper lida bem com trocas de idioma, mas resultados são mais consistentes quando o áudio está em um único idioma." },
    { question: "O TurboScribe é bom para transcrever reuniões do Zoom?", answer: "Sim. Basta gravar a reunião e fazer upload do arquivo de áudio ou vídeo para obter a transcrição completa." },
    { question: "O TurboScribe funciona para áudios do WhatsApp?", answer: "Sim. Você pode baixar áudios do WhatsApp e fazer upload no TurboScribe para obter a transcrição." },
    { question: "O TurboScribe gera timestamps na transcrição?", answer: "Sim. Inclui marcações de tempo (timestamps) na transcrição, facilitando a localização de trechos específicos no áudio original." },
    { question: "O TurboScribe funciona para vídeos do YouTube?", answer: "Você pode baixar o áudio de um vídeo do YouTube e transcrever com o TurboScribe, mas verifique as políticas de direitos autorais." },
    { question: "O TurboScribe tem histórico de transcrições?", answer: "Sim. As transcrições ficam salvas na conta para acesso e edição posterior." },
    { question: "Vale a pena pagar pelo TurboScribe?", answer: "Para quem transcreve mais de 3 arquivos por dia, o plano pago é muito vantajoso pelo custo-benefício em relação ao tempo economizado." },
    { question: "O TurboScribe funciona para áudios de baixa qualidade?", answer: "O modelo Whisper é robusto, mas áudios com muito ruído, sotaques muito fortes ou múltiplos falantes simultâneos reduzem a precisão." },
    { question: "O TurboScribe é indicado para jornalistas?", answer: "Sim. Transcrever entrevistas é um dos casos de uso mais populares entre jornalistas e profissionais de imprensa." },
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre TurboScribe</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
                {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />)}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />
        </div>
    );
}
