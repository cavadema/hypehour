"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Recraft?", answer: "Recraft é uma plataforma de geração de imagens com IA que cria fotos fotorrealistas, vetores editáveis e assets de design com compreensão avançada de prompts e estilos personalizados a partir de imagens de referência." },
    { question: "Para que serve o Recraft?", answer: "Serve para criar imagens profissionais para design, marketing e branding, gerar vetores SVG editáveis com IA, criar assets visuais consistentes e desenvolver identidades visuais com estilo personalizado." },
    { question: "O Recraft é gratuito?", answer: "Possui plano gratuito com créditos mensais. Planos pagos oferecem mais créditos, acesso a modelos premium e recursos avançados de estilo." },
    { question: "O Recraft gera vetores SVG?", answer: "Sim. É um dos poucos geradores de imagem com IA que produz vetores SVG editáveis nativamente, um diferencial importante para designers." },
    { question: "O Recraft funciona em português?", answer: "A interface pode estar em inglês, mas aceita prompts em português para geração das imagens." },
    { question: "O Recraft tem boa compreensão de prompts?", answer: "Sim. A plataforma é reconhecida pela qualidade excepcional na interpretação de prompts, gerando imagens muito próximas ao que foi descrito." },
    { question: "O Recraft cria estilos personalizados?", answer: "Sim. Permite criar estilos visuais personalizados a partir de imagens de referência, mantendo consistência visual sem precisar treinar um modelo do zero." },
    { question: "O Recraft é bom para branding?", answer: "Sim. Criar assets visuais consistentes para marcas — ícones, ilustrações, imagens de produto — é um dos pontos fortes da plataforma." },
    { question: "O Recraft gera ícones e ilustrações?", answer: "Sim. Além de fotos realistas, é excelente para criar ícones, ilustrações vetoriais e assets de UI/UX." },
    { question: "O Recraft é melhor que o Midjourney para design?", answer: "Para uso em design profissional com necessidade de vetores e consistência de marca, o Recraft tem vantagens. Para arte criativa geral, o Midjourney ainda se destaca pela qualidade artística." },
    { question: "O Recraft permite editar as imagens geradas?", answer: "Sim. Possui ferramentas de edição como inpainting (pintar sobre áreas específicas) e variações para refinar o resultado." },
    { question: "O Recraft é bom para criação de UI/UX?", answer: "Sim. Gerar mockups, ícones e elementos visuais para interfaces é uma das especialidades da plataforma." },
    { question: "O Recraft tem biblioteca de estilos prontos?", answer: "Sim. Oferece uma coleção de estilos pré-definidos (fotorrealista, ilustração, flat design, isométrico, etc.) para facilitar a criação." },
    { question: "O Recraft exporta em quais formatos?", answer: "Exporta em PNG, JPG e SVG (para vetores), com opções de resolução para diferentes usos." },
    { question: "O Recraft funciona para criação de personagens?", answer: "Sim. Com a consistência de estilo personalizado, é possível criar personagens recorrentes com aparência coerente." },
    { question: "O Recraft gera imagens em lote?", answer: "Verifique no site. Alguns planos permitem geração em volume para otimizar a produção de assets." },
    { question: "O Recraft é preciso com textos nas imagens?", answer: "A geração de texto legível em imagens é um desafio para modelos de IA em geral. O Recraft está evoluindo nessa área mas pode não ser perfeito." },
    { question: "O Recraft funciona para e-commerce?", answer: "Sim. Criar imagens de produto, banners e assets de marketing para lojas online são aplicações diretas." },
    { question: "O Recraft precisa de instalação?", answer: "Não. É uma plataforma web que funciona diretamente no navegador." },
    { question: "O Recraft é bom para agências de design?", answer: "Sim. A consistência de estilo, geração de vetores e qualidade dos resultados o tornam uma ferramenta valiosa para agências." },
    { question: "O Recraft tem API?", answer: "Sim. Oferece API para desenvolvedores que queiram integrar geração de imagens em produtos e fluxos de trabalho automatizados." },
    { question: "O Recraft funciona para redes sociais?", answer: "Sim. Criar posts, thumbnails, stories e banners para redes sociais com estilo consistente é um caso de uso frequente." },
    { question: "Quanto tempo leva para gerar uma imagem no Recraft?", answer: "Geralmente de 10 a 30 segundos por imagem, dependendo do modelo e da resolução solicitada." },
    { question: "O Recraft tem workspace colaborativo?", answer: "Verifique os planos disponíveis. Funcionalidades de equipe podem estar disponíveis em planos empresariais." },
    { question: "O Recraft é indicado para freelancers de design?", answer: "Sim. Acelera muito a criação de assets para clientes, desde mockups até ilustrações e vetores finais." },
    { question: "O Recraft funciona para criação de logos?", answer: "Pode auxiliar na geração de conceitos visuais para logos, especialmente com vetores SVG, mas logos finais geralmente precisam de refinamento manual." },
    { question: "Vale a pena pagar pelo Recraft?", answer: "Para designers e criadores que precisam de assets visuais consistentes com regularidade, o plano pago se paga em tempo economizado." },
    { question: "O Recraft tem histórico de gerações?", answer: "Sim. As imagens geradas ficam salvas na conta para referência e download posterior." },
    { question: "O Recraft é bom para fotorrealismo?", answer: "Sim. O modelo fotorrealista do Recraft entrega resultados de alta qualidade comparáveis a fotografias reais." },
    { question: "O Recraft funciona para criar padrões e texturas?", answer: "Sim. Criar padrões repetitivos, texturas e fundos para design é uma das aplicações possíveis na plataforma." },
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Recraft</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
                {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />)}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />
        </div>
    );
}
