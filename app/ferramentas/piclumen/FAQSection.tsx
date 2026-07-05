import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o PicLumen?", answer: "PicLumen é uma plataforma criativa com IA que permite gerar vídeos e imagens a partir de texto ou imagens, usando modelos avançados como Kling, Seedance e Seedream com controle de múltiplos takes e áudio nativo." },
    { question: "Para que serve o PicLumen?", answer: "Serve para criar vídeos dinâmicos a partir de prompts de texto, animar imagens estáticas, gerar arte com IA e produzir conteúdo visual profissional sem precisar de softwares de edição complexos." },
    { question: "O PicLumen é gratuito?", answer: "Possui créditos gratuitos para novos usuários. Para uso contínuo em volume, planos pagos são necessários." },
    { question: "O PicLumen funciona em português?", answer: "A interface pode estar em inglês, mas aceita prompts em português para geração de imagens e vídeos." },
    { question: "Quais modelos de IA o PicLumen usa?", answer: "Usa modelos de ponta como Kling (vídeo), Seedance (vídeo) e Seedream (imagem), entre outros, permitindo escolher o modelo mais adequado para cada criação." },
    { question: "O PicLumen gera vídeos do zero (text-to-video)?", answer: "Sim. Basta descrever o vídeo desejado em texto e a IA gera o clipe com os elementos solicitados." },
    { question: "O PicLumen converte imagem em vídeo?", answer: "Sim. Suporta image-to-video, animando fotos e ilustrações com movimento natural gerado por IA." },
    { question: "O que é 'Multiple shots' no PicLumen?", answer: "É a capacidade de gerar múltiplas tomadas do mesmo prompt, permitindo escolher a melhor versão entre diferentes interpretações da IA." },
    { question: "O PicLumen tem áudio nativo nos vídeos?", answer: "Sim. Oferece geração de vídeo com áudio nativo, diferenciando-o de ferramentas que geram vídeos silenciosos." },
    { question: "O PicLumen gera imagens estáticas também?", answer: "Sim. Além de vídeos, possui geração de imagens com modelos como Seedream para criação de arte e fotos geradas por IA." },
    { question: "Quanto tempo leva para gerar um vídeo no PicLumen?", answer: "Depende do modelo e da duração do vídeo. Geralmente de alguns segundos a alguns minutos por clipe." },
    { question: "O PicLumen é bom para Reels e TikToks?", answer: "Sim. Clipes curtos e dinâmicos são ideais para conteúdo de redes sociais como Instagram Reels, TikTok e YouTube Shorts." },
    { question: "Qual a duração máxima dos vídeos gerados?", answer: "Depende do modelo e do plano. A maioria dos modelos gera clipes de até 10-30 segundos por vez." },
    { question: "O PicLumen precisa de instalação?", answer: "Não. É uma plataforma web que funciona no navegador sem necessidade de instalação." },
    { question: "O PicLumen tem controle de estilo visual?", answer: "Sim. Permite definir o estilo da geração através do prompt e das configurações do modelo escolhido." },
    { question: "O PicLumen exporta em MP4?", answer: "Sim. Os vídeos gerados podem ser baixados em formato MP4 para uso em qualquer plataforma." },
    { question: "O PicLumen é melhor que o Runway?", answer: "Ambos têm qualidades diferentes. PicLumen se destaca pelo acesso a múltiplos modelos em uma única plataforma; Runway tem mais ferramentas de edição." },
    { question: "O PicLumen tem histórico de gerações?", answer: "Sim. As gerações ficam salvas na conta para download e reutilização posterior." },
    { question: "O PicLumen é bom para marketing?", answer: "Sim. Criar vídeos de produto, anúncios e conteúdo promocional com IA é um dos principais casos de uso." },
    { question: "Vale a pena pagar pelo PicLumen?", answer: "Para criadores que precisam de vídeos frequentemente, o acesso a modelos de alta qualidade como Kling e Seedance justifica o custo dos planos pagos." },
    { question: "O PicLumen funciona para vídeos educativos?", answer: "Sim. Criar visualizações e animações para conteúdo educativo é uma boa aplicação da ferramenta." },
    { question: "O PicLumen tem API para desenvolvedores?", answer: "Verifique no site oficial se há API disponível para integração em produtos e fluxos automatizados." },
    { question: "O PicLumen funciona no celular?", answer: "Sim. A plataforma web é acessível via navegador mobile, mas o desktop oferece melhor experiência." },
    { question: "O PicLumen é indicado para iniciantes?", answer: "Sim. A interface é intuitiva e não requer conhecimento técnico para gerar os primeiros vídeos e imagens." },
    { question: "O PicLumen mantém consistência entre frames?", answer: "Depende do modelo usado. Modelos como Kling têm boa consistência de movimento e personagens." },
    { question: "O PicLumen funciona para criar conteúdo de e-commerce?", answer: "Sim. Animar produtos, criar vídeos de apresentação e gerar imagens de produto são casos de uso viáveis." },
    { question: "O PicLumen tem suporte a diferentes proporções?", answer: "Sim. Permite gerar em diferentes proporções (16:9, 9:16, 1:1) para diferentes plataformas." },
    { question: "O PicLumen funciona para criar animações?", answer: "Sim. Transformar ilustrações em animações e criar cenas animadas com IA é um dos recursos da plataforma." },
    { question: "O PicLumen é seguro para dados e conteúdo?", answer: "Verifique a política de privacidade do PicLumen para entender como o conteúdo gerado e os prompts são armazenados." },
    { question: "O PicLumen gera personagens consistentes?", answer: "A consistência de personagens em múltiplos clipes é um desafio para ferramentas de vídeo com IA; resultados variam por modelo." },
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre PicLumen</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
                {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />)}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />
        </div>
    );
}
