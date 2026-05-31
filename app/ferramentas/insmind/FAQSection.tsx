"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o insMind?", answer: "insMind é um editor de fotos com IA especializado em imagens de produtos, oferecendo remoção de fundo, geração de fundos em IA, aprimoramento de imagem e edição em lote." },
    { question: "Para que serve o insMind?", answer: "Serve principalmente para criar fotos profissionais de produtos para e-commerce, remover e substituir fundos, aprimorar a qualidade das imagens e gerar visuais atraentes sem necessidade de estúdio." },
    { question: "O insMind é gratuito?", answer: "Sim, possui plano gratuito com acesso a recursos básicos. Planos pagos desbloqueiam mais créditos, exportação em alta resolução e funcionalidades avançadas." },
    { question: "O insMind funciona em português?", answer: "Sim. A interface do insMind está disponível em português brasileiro, facilitando o uso por criadores e lojistas nacionais." },
    { question: "O insMind remove fundo de imagens automaticamente?", answer: "Sim. A remoção de fundo é automática e precisa, funcionando bem com produtos, pessoas e objetos complexos como cabelos e bordas finas." },
    { question: "O insMind gera fundos com IA?", answer: "Sim. Após remover o fundo original, você pode gerar novos fundos com IA descrevendo o ambiente desejado em texto." },
    { question: "O insMind é bom para e-commerce?", answer: "Sim. É especialmente projetado para lojistas que precisam de fotos de produtos com fundo branco ou cenários criativos sem custo de estúdio." },
    { question: "O insMind faz edição em lote?", answer: "Sim. Permite processar múltiplas imagens de uma vez, ideal para lojas com grande catálogo de produtos." },
    { question: "O insMind aprimora a qualidade de fotos?", answer: "Sim. Possui ferramentas de upscaling e melhoria automática que aumentam a resolução e a nitidez das imagens." },
    { question: "O insMind remove objetos indesejados?", answer: "Sim. Tem ferramenta de remoção de objetos que elimina elementos indesejados da imagem de forma inteligente." },
    { question: "O insMind precisa de instalação?", answer: "Não. É uma ferramenta 100% web que funciona no navegador, sem download ou instalação." },
    { question: "O insMind funciona no celular?", answer: "Sim. A versão web responsiva funciona em smartphones, embora a experiência seja melhor no desktop para edições mais detalhadas." },
    { question: "Em quais formatos posso exportar do insMind?", answer: "Exporta em PNG (com fundo transparente), JPG e outros formatos, dependendo do plano contratado." },
    { question: "O insMind mantém a qualidade da imagem original?", answer: "Sim. O processamento é feito em alta qualidade, preservando detalhes da imagem original durante a edição." },
    { question: "Posso usar o insMind para fotos de pessoas?", answer: "Sim. Funciona com fotos de pessoas, incluindo remoção de fundo para retratos e headshots profissionais." },
    { question: "O insMind tem IA generativa de imagens do zero?", answer: "O foco principal é edição e aprimoramento de fotos existentes, não geração do zero como Midjourney ou DALL-E." },
    { question: "O insMind é indicado para iniciantes?", answer: "Sim. A interface é simples e intuitiva, permitindo que qualquer pessoa sem experiência em design obtenha resultados profissionais." },
    { question: "O insMind substitui o Photoshop?", answer: "Para tarefas específicas como remoção de fundo e edição de fotos de produtos, sim. Para design gráfico avançado, o Photoshop ainda tem vantagem." },
    { question: "O insMind tem API para desenvolvedores?", answer: "Verifique no site oficial. Ferramentas desse tipo frequentemente oferecem API para integração em plataformas de e-commerce." },
    { question: "Quantas imagens posso editar no plano gratuito?", answer: "O plano gratuito tem créditos limitados. A quantidade exata pode variar — verifique os planos atuais no site do insMind." },
    { question: "O insMind funciona com imagens de baixa qualidade?", answer: "A IA tenta melhorar a qualidade, mas resultados melhores partem de imagens originais com boa iluminação e resolução razoável." },
    { question: "O insMind é seguro para minhas imagens?", answer: "Verifique a política de privacidade para entender como as imagens carregadas são armazenadas e utilizadas pela plataforma." },
    { question: "O insMind faz change de cor de produtos?", answer: "Possui recursos de ajuste de cor e geração de variações, útil para mostrar o mesmo produto em cores diferentes." },
    { question: "O insMind integra com plataformas de e-commerce?", answer: "Verifique no site oficial quais integrações estão disponíveis. Muitos usuários exportam as imagens manualmente para suas lojas." },
    { question: "Vale a pena pagar pelo insMind?", answer: "Para lojistas que precisam processar muitas imagens regularmente, o plano pago costuma se pagar comparado ao custo de um fotógrafo ou designer." },
    { question: "O insMind é melhor que o Remove.bg?", answer: "O insMind oferece mais recursos além da remoção de fundo, como geração de fundos com IA e edição de produtos, tornando-o mais completo para e-commerce." },
    { question: "O insMind tem histórico de edições?", answer: "Possui histórico de projetos, permitindo acessar imagens editadas anteriormente dentro da plataforma." },
    { question: "O insMind funciona para imagens de alimentos?", answer: "Sim. É muito usado por restaurantes e marcas de alimentos para criar fotos apetitosas de produtos com fundos profissionais." },
    { question: "O insMind faz geração de mockups?", answer: "Sim, possui recursos para gerar mockups de produtos em contextos realistas, útil para apresentações e marketing." },
    { question: "Posso colaborar com equipe no insMind?", answer: "Planos empresariais geralmente oferecem workspaces compartilhados. Verifique os planos disponíveis no site oficial." },
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre insMind</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
                {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />)}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />
        </div>
    );
}
