import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Quais as melhores ferramentas de IA para gerar imagens em 2026?",
        "a": "Midjourney continua líder em qualidade artística. DALL-E 3 (integrado ao ChatGPT) é o mais acessível. Stable Diffusion é a opção open source mais poderosa. Adobe Firefly é o melhor para uso comercial seguro. Ideogram se destaca para imagens com texto legível."
    },
    {
        "q": "Midjourney vs DALL-E 3: qual é melhor para criar imagens com IA?",
        "a": "Midjourney produz imagens com estética mais artística e cinematográfica, ideal para arte conceitual e design. DALL-E 3 segue instruções com mais precisão e está disponível direto no ChatGPT. Para uso comercial, Adobe Firefly elimina riscos de direitos autorais."
    },
    {
        "q": "Como criar imagens com IA de alta qualidade? Quais prompts usar?",
        "a": "Seja específico: descreva o estilo artístico, iluminação, composição, paleta de cores e referências. Por exemplo: 'fotografia profissional de produto, fundo branco limpo, iluminação de estúdio, câmera Sony, ultra-realista'. A qualidade do prompt define o resultado."
    },
    {
        "q": "Imagens geradas por IA têm direitos autorais?",
        "a": "A questão jurídica ainda evolui mundialmente. Em geral, você tem direitos sobre o que gerou nas plataformas pagas, mas os modelos foram treinados em obras de artistas sem compensação direta. Adobe Firefly foi projetado para eliminar esse risco com dataset licenciado."
    },
    {
        "q": "É possível usar Stable Diffusion gratuitamente?",
        "a": "Sim. O modelo é open source e pode ser rodado localmente com GPU adequada. Plataformas como Automatic1111 e ComfyUI permitem instalação gratuita. Alternativas online como Leonardo AI e Playground AI oferecem créditos gratuitos mensais."
    },
    {
        "q": "IA consegue gerar fotos realistas de pessoas que não existem?",
        "a": "Sim, com alta fidelidade. Modelos como Stable Diffusion com LoRA e Midjourney geram rostos fotorrealistas convincentes. Isso levanta questões éticas sérias sobre desinformação e criação de perfis falsos — use com responsabilidade."
    },
    {
        "q": "Como usar IA para melhorar e editar fotos existentes?",
        "a": "Adobe Firefly no Photoshop (Generative Fill), ClipDrop, Krea AI e Remove.bg permitem editar, ampliar, remover objetos e refinar fotos reais com IA. É possível mudar fundos, adicionar elementos e melhorar qualidade de imagens antigas."
    },
    {
        "q": "Quanto custa usar Midjourney para criar imagens?",
        "a": "O plano Basic custa US$10/mês com 200 gerações. O plano Standard (US$30/mês) oferece gerações ilimitadas em modo relaxed. Para uso profissional intenso, o plano Pro (US$60/mês) com GPU prioritária é recomendado."
    },
    {
        "q": "IA para imagens funciona para criar assets de jogos e animações?",
        "a": "Sim. Stable Diffusion com ControlNet é amplamente usado por game artists para criar assets, sprites e concept art. Krea AI e Leonardo AI têm ferramentas específicas para geração de assets de jogos com estilos consistentes."
    },
    {
        "q": "Como criar um estilo visual consistente em imagens geradas por IA?",
        "a": "Use seeds fixos, reference images, ou treine um modelo personalizado (LoRA) com exemplos do estilo desejado. Para marcas, isso garante que todas as imagens geradas mantenham identidade visual coerente."
    },
    {
        "q": "IA consegue gerar infográficos e imagens com dados?",
        "a": "Para infográficos com dados precisos, ferramentas específicas como Canva com IA ou DataWrapper funcionam melhor. Geradores de imagem como Midjourney não são bons para textos e dados — use Ideogram para o melhor resultado com texto em imagens."
    },
    {
        "q": "Como aumentar a resolução de imagens geradas por IA?",
        "a": "Ferramentas de upscaling como Upscayl (gratuito e open source), Topaz Gigapixel AI e a função de upscale nativa do Midjourney aumentam a resolução de imagens sem perda de qualidade, chegando a 4K ou mais."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    return (
        <details className="border-b border-gray-200 last:border-0 group" open={index < 5}>
            <summary className="flex w-full items-center justify-between py-4 text-left cursor-pointer list-none focus:outline-none">
                <span className="font-medium text-gray-900">{question}</span>
                <ChevronDownIcon
                    className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                />
            </summary>
            <p className="text-gray-600 leading-relaxed mb-4">{answer}</p>
        </details>
    );
}


export default function FAQSection() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="mt-12 mb-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Geração de Imagens</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.q}
                        answer={faq.a}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
