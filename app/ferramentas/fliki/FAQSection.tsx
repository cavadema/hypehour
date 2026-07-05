import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Fliki?", answer: "Fliki é um gerador de vídeos com IA que transforma texto, scripts ou prompts em vídeos completos com narração realista, clipes de vídeo dinâmicos e edição automática." },
    { question: "Para que serve o Fliki?", answer: "Serve para criar vídeos de redes sociais, conteúdo educativo, vídeos de marketing, tutoriais e apresentações a partir de texto, sem precisar gravar câmera ou fazer edição manual." },
    { question: "O Fliki é gratuito?", answer: "Sim, possui plano gratuito com minutos limitados de geração de vídeo por mês. Planos pagos oferecem mais minutos, vozes premium e resolução mais alta." },
    { question: "O Fliki funciona em português?", answer: "Sim. O Fliki suporta português brasileiro com vozes de IA naturais para narração dos vídeos." },
    { question: "O Fliki gera narração automática?", answer: "Sim. Converte o texto em narração com vozes de IA realistas em múltiplos idiomas e estilos, eliminando a necessidade de gravar áudio manualmente." },
    { question: "O Fliki gera os clipes de vídeo automaticamente?", answer: "Sim. Busca e seleciona clipes de vídeo relevantes automaticamente com base no texto, montando o vídeo completo com as cenas adequadas." },
    { question: "O Fliki cria avatares de IA?", answer: "Sim. Oferece avatares de IA que podem narrar o conteúdo em vídeo, útil para vídeos de apresentação sem aparecer na câmera." },
    { question: "O Fliki funciona para YouTube?", answer: "Sim. É amplamente usado para criar vídeos de YouTube, especialmente canais de conteúdo informativo, listas e tutoriais sem gravação de câmera." },
    { question: "O Fliki cria Reels e TikToks?", answer: "Sim. Suporta formato vertical (9:16) para criação de conteúdo de Reels, TikTok e YouTube Shorts." },
    { question: "Posso usar meu próprio script no Fliki?", answer: "Sim. Você pode inserir seu próprio roteiro e o Fliki gera a narração e os clipes correspondentes automaticamente." },
    { question: "O Fliki tem banco de imagens e vídeos?", answer: "Sim. Integra com bancos de mídia como Pexels e outros, selecionando automaticamente imagens e vídeos relevantes para o conteúdo." },
    { question: "O Fliki permite personalizar as vozes?", answer: "Sim. Oferece centenas de vozes em diferentes idiomas, gêneros e estilos, com controle de velocidade e entonação." },
    { question: "Posso adicionar minha própria voz no Fliki?", answer: "Nos planos adequados, é possível clonar a própria voz para usar na narração dos vídeos." },
    { question: "O Fliki exporta em quais formatos?", answer: "Exporta principalmente em MP4 em diferentes resoluções dependendo do plano contratado." },
    { question: "O Fliki é bom para criar conteúdo educativo?", answer: "Sim. Transformar artigos, resumos e conteúdo escrito em vídeos educativos é um dos principais usos da plataforma." },
    { question: "O Fliki precisa de instalação?", answer: "Não. É uma plataforma web que funciona diretamente no navegador." },
    { question: "O Fliki funciona para podcasts em vídeo?", answer: "Sim. Pode ser usado para criar versões em vídeo de conteúdo de podcast com imagens e legendas automáticas." },
    { question: "O Fliki adiciona legendas automaticamente?", answer: "Sim. Gera legendas sincronizadas automaticamente a partir da narração, melhorando a acessibilidade e o engajamento." },
    { question: "O Fliki é bom para criar anúncios?", answer: "Sim. Para anúncios de texto com narração e clipes visuais, é uma solução rápida e eficiente." },
    { question: "O Fliki tem biblioteca de músicas?", answer: "Sim. Oferece músicas de fundo royalty-free para adicionar aos vídeos." },
    { question: "O Fliki é indicado para iniciantes?", answer: "Sim. A interface guiada torna fácil criar o primeiro vídeo mesmo sem experiência em edição." },
    { question: "Quanto tempo leva para criar um vídeo no Fliki?", answer: "Um vídeo simples de 1-2 minutos pode ser criado em poucos minutos, dependendo da complexidade do roteiro." },
    { question: "O Fliki substitui o Adobe Premiere?", answer: "Para vídeos simples baseados em texto e narração, sim. Para edição avançada com múltiplas camadas e efeitos complexos, não." },
    { question: "O Fliki funciona para criar conteúdo de LinkedIn?", answer: "Sim. Vídeos informativos e profissionais para LinkedIn são um caso de uso comum na plataforma." },
    { question: "O Fliki tem templates prontos?", answer: "Sim. Oferece templates de vídeo para diferentes formatos e nichos, acelerando a criação de conteúdo." },
    { question: "Vale a pena pagar pelo Fliki?", answer: "Para criadores de conteúdo que produzem vídeos regularmente, o plano pago se paga rapidamente em horas economizadas de edição." },
    { question: "O Fliki funciona para criar vídeos de produto?", answer: "Sim. Para vídeos explicativos e de apresentação de produto com narração, é uma excelente opção." },
    { question: "O Fliki tem API?", answer: "Verifique no site oficial para informações sobre disponibilidade de API para desenvolvedores." },
    { question: "O Fliki funciona no celular?", answer: "Sim. A interface web é acessível via navegador mobile, mas o desktop é recomendado para melhor experiência de edição." },
    { question: "O Fliki é bom para agências de marketing?", answer: "Sim. A capacidade de produzir vídeos em escala a partir de texto o torna eficiente para agências com demanda alta de conteúdo." },
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Fliki</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
                {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />)}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />
        </div>
    );
}
