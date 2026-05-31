"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  { q: "Qual a melhor IA para criar logo?", a: "Depende da necessidade. Para quem já usa o ecossistema Adobe, o Adobe Express Logo AI é a escolha natural. Para resultados rápidos e acessíveis, Smashing Logo e TurboLogo se destacam. Canva é ideal para quem precisa continuar editando o logo junto a outros materiais de marketing." },
  { q: "É possível criar um logo profissional com IA gratuitamente?", a: "Sim. Canva, Adobe Express, Renderforest e outras ferramentas oferecem planos gratuitos que permitem criar e baixar logos funcionais. Alguns formatos premium, como SVG vetorial, podem exigir upgrade, mas PNG em boa resolução geralmente está disponível no gratuito." },
  { q: "O logo gerado por IA é exclusivo?", a: "Depende da ferramenta. A maioria dos geradores cria logos baseados em combinações de elementos do banco da plataforma, o que significa que outra empresa pode gerar um logo similar. Para exclusividade garantida, personalize bem o resultado ou considere contratar um designer para adaptar a versão gerada pela IA." },
  { q: "Posso usar o logo gerado por IA comercialmente?", a: "Na maioria das plataformas pagas, sim. Nos planos gratuitos, verifique os termos de uso de cada ferramenta, pois alguns restringem o uso comercial. Adobe Express e Canva Pro, por exemplo, concedem direitos de uso comercial amplos." },
  { q: "O logo gerado por IA vem em formato vetorial?", a: "Os planos pagos da maioria das ferramentas entregam SVG ou EPS (formatos vetoriais), que são essenciais para uso em impressão e em diferentes tamanhos. No gratuito, geralmente você recebe PNG — suficiente para uso digital, mas limitado para impressão em grande escala." },
  { q: "Quanto tempo leva para criar um logo com IA?", a: "Entre 5 e 15 minutos para ter opções iniciais geradas. Com personalização — ajuste de cores, fontes e ícone — o processo completo raramente passa de 30 minutos, contra dias ou semanas de um processo tradicional." },
  { q: "IA para criar logo substitui designer gráfico?", a: "Para necessidades simples, sim. Para identidades visuais complexas, marcas com forte necessidade de diferenciação ou projetos que envolvem estratégia de branding aprofundada, um designer humano ainda agrega valor significativo que a IA não substitui completamente." },
  { q: "Qual ferramenta é melhor para quem está começando um negócio?", a: "Canva e Design.com são as mais indicadas para iniciantes: interfaces intuitivas, resultados profissionais e possibilidade de criar outros materiais da marca (cartão de visita, post, site) na mesma plataforma." },
  { q: "Posso editar o logo depois de gerado pela IA?", a: "Sim. Todas as ferramentas desta lista permitem personalizar o resultado — trocar cores, fontes, ícones e layout — antes de fazer o download. Algumas, como Canva e Adobe Express, oferecem edição ainda mais detalhada." },
  { q: "Qual gerador de logo com IA é melhor para startup?", a: "Design.com e Adobe Express são ótimas escolhas para startups, pois além do logo entregam um kit completo de identidade visual — paleta de cores, tipografia e aplicações — que facilita manter consistência em todos os materiais da marca." },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(index < 5);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button className="flex w-full items-center justify-between py-4 text-left focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <span className="font-medium text-gray-900">{question}</span>
        <ChevronDownIcon className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  };

  return (
    <div className="mt-12 mb-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Criar Logo</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.q} answer={faq.a} index={index} />
        ))}
      </div>
    </div>
  );
}
