"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        question: "O que é um gerador de imagens IA?",
        answer: "É uma ferramenta que usa inteligência artificial para criar imagens a partir de descrições em texto, imagens de referência ou estilos definidos pelo usuário."
    },
    {
        question: "Qual é a melhor IA que cria imagens atualmente?",
        answer: "As mais populares são Midjourney, DALL·E, Stable Diffusion e Adobe Firefly, conhecidas pela qualidade e controle criativo."
    },
    {
        question: "IA para imagens funciona apenas com texto?",
        answer: "Não. Além de texto, ela pode usar imagens base, estilos visuais, esboços e referências."
    },
    {
        question: "IA que cria imagens é indicada para iniciantes?",
        answer: "Sim. Qualquer pessoa consegue gerar imagens apenas descrevendo o que deseja, sem conhecimento técnico."
    },
    {
        question: "Existe IA que cria imagens grátis?",
        answer: "Sim. Ferramentas como Bing Image Creator, Leonardo AI (limitado) e Stable Diffusion oferecem uso gratuito."
    },
    {
        question: "IA de imagens gera imagens realistas?",
        answer: "Sim. Algumas IAs produzem imagens altamente realistas, inclusive rostos, ambientes e objetos detalhados."
    },
    {
        question: "Gerador de imagens IA pode criar ilustrações e artes digitais?",
        answer: "Sim. É amplamente usado para ilustrações, concept art, personagens, capas e artes criativas."
    },
    {
        question: "IA que cria imagens pode copiar artistas reais?",
        answer: "Ela gera imagens inspiradas em estilos, mas não copia obras específicas protegidas por direitos autorais."
    },
    {
        question: "IA para imagens permite personalizar estilo e cores?",
        answer: "Sim. É possível definir estilo artístico, paleta de cores, iluminação e composição."
    },
    {
        question: "IA de imagens é boa para marketing e redes sociais?",
        answer: "Sim. Ela cria artes para anúncios, posts, banners e thumbnails rapidamente."
    },
    {
        question: "Gerador de imagens IA cria imagens em alta resolução?",
        answer: "Sim. Muitas ferramentas permitem upscale e exportação em alta qualidade."
    },
    {
        question: "IA que cria imagens funciona no celular?",
        answer: "Sim. Várias plataformas possuem versões web e mobile."
    },
    {
        question: "IA para imagens pode editar imagens existentes?",
        answer: "Sim. Ela pode remover objetos, alterar fundos, ajustar cores e gerar variações."
    },
    {
        question: "IA de imagens pode criar logotipos?",
        answer: "Sim. É possível gerar ideias visuais e conceitos iniciais para logos."
    },
    {
        question: "IA que cria imagens é segura para uso comercial?",
        answer: "Depende da ferramenta. Algumas permitem uso comercial livre, outras exigem plano pago."
    },
    {
        question: "Como funciona uma IA que cria imagens a partir de texto?",
        answer: "Ela interpreta o texto, entende objetos e estilos e gera imagens usando modelos de difusão treinados com grandes volumes de dados."
    },
    {
        question: "Qual gerador de imagens IA é gratuito?",
        answer: "Bing Image Creator e algumas versões do Stable Diffusion oferecem geração gratuita."
    },
    {
        question: "IA que cria imagens grátis tem limite?",
        answer: "Sim. Normalmente há limite diário ou mensal de imagens."
    },
    {
        question: "Qual IA de imagens gera fotos realistas?",
        answer: "Midjourney, DALL·E e Stable Diffusion são referências em realismo."
    },
    {
        question: "IA para imagens é melhor que designers humanos?",
        answer: "Não. Ela acelera a criação, mas não substitui criatividade e estratégia humana."
    },
    {
        question: "IA que cria imagens pode gerar rostos humanos?",
        answer: "Sim. Ela cria rostos realistas que não pertencem a pessoas reais."
    },
    {
        question: "Dá para usar imagens geradas por IA comercialmente?",
        answer: "Sim, desde que a licença da ferramenta permita uso comercial."
    },
    {
        question: "IA de imagens consegue seguir estilos específicos?",
        answer: "Sim. É possível pedir estilos como aquarela, óleo, anime ou 3D."
    },
    {
        question: "Gerador de imagens IA é bom para e-commerce?",
        answer: "Sim. Ele cria imagens de produtos, mockups e cenários."
    },
    {
        question: "IA para imagens substitui banco de imagens?",
        answer: "Em muitos casos, sim, pois gera imagens exclusivas sob demanda."
    },
    {
        question: "IA que cria imagens funciona offline?",
        answer: "Algumas versões do Stable Diffusion podem rodar localmente."
    },
    {
        question: "Qual IA cria imagens mais rápido?",
        answer: "Bing Image Creator e DALL·E são conhecidos pela velocidade."
    },
    {
        question: "IA de imagens pode remover fundo automaticamente?",
        answer: "Sim. Muitas IAs oferecem remoção e troca de fundo com um clique."
    },
    {
        question: "IA que cria imagens precisa de computador potente?",
        answer: "Não, se for baseada em nuvem. Localmente, exige GPU."
    },
    {
        question: "IA para imagens pode gerar artes exclusivas?",
        answer: "Sim. Cada imagem gerada é única, baseada no prompt enviado."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [isOpen, setIsOpen] = useState(index < 5);

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
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "O que é um gerador de imagens IA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "É uma ferramenta que usa inteligência artificial para criar imagens a partir de descrições em texto, imagens de referência ou estilos definidos pelo usuário."
                }
            },
            {
                "@type": "Question",
                "name": "Qual é a melhor IA que cria imagens atualmente?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "As mais populares são Midjourney, DALL·E, Stable Diffusion e Adobe Firefly, conhecidas pela qualidade e controle criativo."
                }
            },
            {
                "@type": "Question",
                "name": "IA para imagens funciona apenas com texto?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Não. Além de texto, ela pode usar imagens base, estilos visuais, esboços e referências."
                }
            },
            {
                "@type": "Question",
                "name": "IA que cria imagens é indicada para iniciantes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Qualquer pessoa pode gerar imagens apenas descrevendo o que deseja, sem conhecimento técnico."
                }
            },
            {
                "@type": "Question",
                "name": "Existe IA que cria imagens grátis?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Bing Image Creator, Leonardo AI e Stable Diffusion oferecem opções gratuitas com limitações."
                }
            },
            {
                "@type": "Question",
                "name": "IA de imagens gera imagens realistas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Algumas IAs produzem imagens altamente realistas, incluindo rostos, ambientes e objetos detalhados."
                }
            },
            {
                "@type": "Question",
                "name": "Gerador de imagens IA pode criar ilustrações e artes digitais?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. É amplamente utilizado para ilustrações, concept art, personagens, capas e artes criativas."
                }
            },
            {
                "@type": "Question",
                "name": "IA que cria imagens pode copiar artistas reais?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ela gera imagens inspiradas em estilos artísticos, mas não copia obras específicas protegidas por direitos autorais."
                }
            },
            {
                "@type": "Question",
                "name": "IA para imagens permite personalizar estilo e cores?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. É possível definir estilo artístico, paleta de cores, iluminação e composição."
                }
            },
            {
                "@type": "Question",
                "name": "IA de imagens é boa para marketing e redes sociais?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Ela cria artes para anúncios, posts, banners e thumbnails rapidamente."
                }
            },
            {
                "@type": "Question",
                "name": "Gerador de imagens IA cria imagens em alta resolução?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Muitas ferramentas permitem upscale e exportação em alta qualidade."
                }
            },
            {
                "@type": "Question",
                "name": "IA que cria imagens funciona no celular?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Diversas plataformas funcionam via navegador ou aplicativos mobile."
                }
            },
            {
                "@type": "Question",
                "name": "IA para imagens pode editar imagens existentes?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Ela pode remover objetos, trocar fundos, ajustar cores e gerar variações da imagem."
                }
            },
            {
                "@type": "Question",
                "name": "IA de imagens pode criar logotipos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. É útil para criar conceitos visuais e ideias iniciais de logotipo."
                }
            },
            {
                "@type": "Question",
                "name": "IA que cria imagens é segura para uso comercial?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Depende da ferramenta. Algumas permitem uso comercial livre, enquanto outras exigem planos pagos."
                }
            },
            {
                "@type": "Question",
                "name": "Como funciona uma IA que cria imagens a partir de texto?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ela interpreta o texto, entende objetos e estilos e gera imagens usando modelos de difusão treinados com grandes volumes de dados."
                }
            },
            {
                "@type": "Question",
                "name": "Qual gerador de imagens IA é gratuito?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bing Image Creator e algumas versões do Stable Diffusion oferecem geração gratuita."
                }
            },
            {
                "@type": "Question",
                "name": "IA que cria imagens grátis tem limite?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Normalmente há limites diários ou mensais de geração."
                }
            },
            {
                "@type": "Question",
                "name": "Qual IA de imagens gera fotos realistas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Midjourney, DALL·E e Stable Diffusion são referências em realismo visual."
                }
            },
            {
                "@type": "Question",
                "name": "IA para imagens é melhor que designers humanos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Não. Ela acelera a criação, mas não substitui criatividade e estratégia humana."
                }
            },
            {
                "@type": "Question",
                "name": "IA que cria imagens pode gerar rostos humanos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Ela cria rostos realistas que não pertencem a pessoas reais."
                }
            },
            {
                "@type": "Question",
                "name": "Dá para usar imagens geradas por IA comercialmente?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim, desde que a licença da ferramenta permita uso comercial."
                }
            },
            {
                "@type": "Question",
                "name": "IA de imagens consegue seguir estilos específicos?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. É possível solicitar estilos como aquarela, óleo, anime, 3D ou cinematográfico."
                }
            },
            {
                "@type": "Question",
                "name": "Gerador de imagens IA é bom para e-commerce?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Ele cria imagens de produtos, mockups e cenários promocionais."
                }
            },
            {
                "@type": "Question",
                "name": "IA para imagens substitui banco de imagens?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Em muitos casos, sim, pois gera imagens exclusivas sob demanda."
                }
            },
            {
                "@type": "Question",
                "name": "IA que cria imagens funciona offline?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Algumas versões do Stable Diffusion podem ser usadas localmente, sem internet."
                }
            },
            {
                "@type": "Question",
                "name": "Qual IA cria imagens mais rápido?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bing Image Creator e DALL·E são conhecidos pela velocidade de geração."
                }
            },
            {
                "@type": "Question",
                "name": "IA de imagens pode remover fundo automaticamente?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Muitas ferramentas oferecem remoção e troca de fundo com um clique."
                }
            },
            {
                "@type": "Question",
                "name": "IA que cria imagens precisa de computador potente?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Não se for baseada em nuvem. Apenas versões locais exigem GPU."
                }
            },
            {
                "@type": "Question",
                "name": "IA para imagens pode gerar artes exclusivas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim. Cada imagem gerada é única, baseada no prompt enviado."
                }
            }
        ]
    };

    return (
        <div className="mt-12 mb-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Imagens</h2>
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
