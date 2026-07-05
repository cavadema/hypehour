import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o v0?", answer: "v0 é uma ferramenta da Vercel que gera interfaces React e Next.js completas a partir de prompts de texto ou capturas de tela. Você descreve ou mostra o que quer e a IA gera o código JSX pronto para usar no seu projeto." },
    { question: "Para que serve o v0?", answer: "O v0 serve para criar componentes de interface, páginas completas e layouts em React sem escrever código manualmente. É muito usado para prototipagem rápida, criação de UIs e aceleração de projetos Next.js." },
    { question: "O v0 é gratuito?", answer: "O v0 oferece plano gratuito com créditos mensais para geração de interfaces. Planos pagos liberam mais créditos, histórico ilimitado e acesso a modelos mais avançados." },
    { question: "O v0 gera código real?", answer: "Sim. O v0 gera código JSX/TSX real que pode ser copiado diretamente para o seu projeto React ou Next.js. O código usa Tailwind CSS e shadcn/ui por padrão, seguindo boas práticas de desenvolvimento." },
    { question: "O v0 é da Vercel?", answer: "Sim. O v0 é um produto oficial da Vercel, a empresa por trás do Next.js e uma das principais plataformas de deploy para aplicações React." },
    { question: "Preciso usar Next.js para usar o v0?", answer: "Não obrigatoriamente. O código gerado funciona em qualquer projeto React, mas é otimizado para Next.js com App Router. A integração é mais fluida em projetos Vercel/Next.js." },
    { question: "O v0 usa shadcn/ui?", answer: "Sim. Por padrão, o v0 gera componentes usando shadcn/ui e Tailwind CSS, duas das tecnologias mais populares no ecossistema React atual." },
    { question: "O v0 aceita capturas de tela como referência?", answer: "Sim. Você pode enviar uma imagem ou screenshot de uma interface que quer replicar e o v0 gera o código correspondente em React." },
    { question: "O v0 gera páginas completas ou apenas componentes?", answer: "O v0 gera desde componentes isolados (botões, cards, formulários) até páginas inteiras com layout, navegação e múltiplas seções." },
    { question: "O v0 é bom para prototipagem?", answer: "Sim. É uma das ferramentas mais usadas para prototipagem rápida de interfaces em React — em minutos você tem um layout funcional para validar com stakeholders ou clientes." },
    { question: "O v0 funciona em português?", answer: "Sim. O v0 aceita prompts em português e gera as interfaces descritas com precisão, mesmo com prompts em língua portuguesa." },
    { question: "Posso editar o código gerado pelo v0?", answer: "Sim. O código gerado é limpo e bem estruturado, facilitando edições posteriores. Você pode copiar o código e modificar como qualquer componente React normal." },
    { question: "O v0 é melhor que escrever componentes manualmente?", answer: "Para criação inicial de UI, o v0 é muito mais rápido. Para lógica complexa e personalização avançada, editar o código manualmente ainda é necessário. O v0 funciona melhor como ponto de partida." },
    { question: "O v0 funciona com TypeScript?", answer: "Sim. O v0 gera componentes em TypeScript por padrão, com tipagem adequada para os props e estrutura de componentes." },
    { question: "Como começar a usar o v0?", answer: "Acesse v0.dev, faça login com sua conta Vercel ou GitHub, descreva a interface que quer criar no campo de prompt e clique em gerar. O código aparece em segundos." },
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre v0</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                ))}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
        </div>
    );
}
