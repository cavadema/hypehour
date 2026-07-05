import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Dzine?", answer: "Dzine é uma plataforma de criação e edição de imagens com inteligência artificial que reúne geração de imagens, generative fill, face swap, edição inteligente e outras ferramentas criativas em uma interface acessível para criadores de conteúdo e designers." },
    { question: "Para que serve o Dzine?", answer: "O Dzine serve para gerar imagens a partir de texto, editar fotos com IA, aplicar troca de rosto (face swap), preencher áreas da imagem inteligentemente, criar retratos estilizados e produzir conteúdo visual criativo sem precisar de softwares complexos." },
    { question: "O Dzine é gratuito?", answer: "O Dzine oferece plano gratuito com créditos mensais para experimentar as ferramentas. Planos pagos liberam mais créditos, acesso a modelos premium, geração em alta resolução e recursos avançados de edição." },
    { question: "O Dzine funciona em português?", answer: "A interface do Dzine está principalmente em inglês, mas aceita prompts em português para geração de imagens e edição, com resultados satisfatórios no idioma." },
    { question: "O Dzine faz face swap?", answer: "Sim. O Dzine possui um recurso de face swap com IA que permite substituir o rosto em imagens de forma natural, mantendo iluminação e expressão coerentes com a cena." },
    { question: "O que é o Generative Fill do Dzine?", answer: "O Generative Fill é um recurso que permite selecionar uma área da imagem e preenchê-la com conteúdo gerado por IA, seja para expandir a imagem, adicionar elementos ou remover e substituir partes indesejadas." },
    { question: "O Dzine gera imagens a partir de texto?", answer: "Sim. O Dzine possui um gerador de imagens com IA que cria imagens realistas, artísticas ou conceituais a partir de descrições em texto, com múltiplos estilos disponíveis." },
    { question: "O Dzine é bom para criadores de conteúdo?", answer: "Sim. A plataforma foi desenhada para criadores que precisam de uma ferramenta versátil e rápida para produzir imagens criativas, editar fotos e gerar visuais para redes sociais sem precisar dominar ferramentas profissionais complexas." },
    { question: "O Dzine cria retratos estilizados?", answer: "Sim. O Dzine permite gerar retratos com estilos artísticos variados — anime, pintura a óleo, fotografia, fantasia — transformando fotos comuns em ilustrações com visual personalizado." },
    { question: "O Dzine é bom para redes sociais?", answer: "Sim. A ferramenta é muito usada para criar imagens para Instagram, TikTok e outras plataformas, com recursos que facilitam a criação de conteúdo visual diferenciado e chamativo." },
    { question: "O Dzine tem API?", answer: "O Dzine possui opções de integração para desenvolvedores. Consulte a documentação oficial em dzine.ai para detalhes sobre disponibilidade e planos de API." },
    { question: "O Dzine funciona no celular?", answer: "Sim. O Dzine é acessível via navegador em dispositivos móveis, permitindo criar e editar imagens diretamente pelo smartphone." },
    { question: "O Dzine substitui o Photoshop?", answer: "Para tarefas criativas como geração de imagens, face swap e generative fill, o Dzine é muito mais acessível e rápido. Para edição profissional com controle total de camadas e ajustes avançados, o Photoshop ainda é mais adequado." },
    { question: "O Dzine é melhor que o Midjourney?", answer: "O Dzine e o Midjourney têm focos diferentes. O Midjourney é especializado em geração de imagens de altíssima qualidade artística, enquanto o Dzine oferece uma suite mais ampla de ferramentas de edição além da geração, sendo mais versátil para quem precisa de mais de uma funcionalidade." },
    { question: "Como começar a usar o Dzine?", answer: "Acesse dzine.ai, crie uma conta gratuita, escolha a ferramenta desejada — geração de imagens, face swap, generative fill ou edição — e comece a criar com os créditos gratuitos disponíveis." },
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Dzine</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                ))}
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                        }))
                    })
                }}
            />
        </div>
    );
}
