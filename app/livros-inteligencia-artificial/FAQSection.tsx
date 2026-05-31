"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { q: "Qual o melhor livro de inteligência artificial para iniciantes?", a: "Para quem está começando, 'Inteligência Artificial para Leigos', de John Paul Mueller e Luca Massaron, é uma excelente entrada. 'Introdução à Inteligência Artificial: uma abordagem não técnica', de Tom Taulli, também é muito recomendado por explicar os conceitos sem exigir conhecimento técnico prévio." },
    { q: "Preciso saber programar para ler livros sobre IA?", a: "Não necessariamente. A maioria dos títulos desta lista é voltada para um público amplo e não requer conhecimento de programação. Livros como os de Martha Gabriel, Adriano Mussa e Kai-Fu Lee falam sobre IA de forma estratégica, ética e social — sem código." },
    { q: "Existe algum livro sobre IA com foco no Brasil?", a: "Sim. 'Fundamentos da Inteligência Artificial: o futuro é agora', de Ricardo Murer, é um dos poucos títulos que aborda a IA com lente brasileira, discutindo regulação, inclusão digital e os desafios específicos do contexto nacional." },
    { q: "Quais livros abordam o impacto da IA no mercado de trabalho?", a: "'Inteligência Artificial', de Kai-Fu Lee, e 'Inteligência Artificial: mitos e verdades', de Adriano Mussa, são as leituras mais diretas sobre como a IA está transformando profissões, eliminando algumas funções e criando novas oportunidades." },
    { q: "Existe algum livro que combina ficção e análise sobre IA?", a: "Sim. '2041: como a Inteligência Artificial vai mudar sua vida nas próximas décadas', de Kai-Fu Lee e Chen Qiufan, alterna capítulos de ficção científica com análises técnicas rigorosas, tornando a leitura ao mesmo tempo envolvente e informativa." },
    { q: "Qual livro é mais indicado para entender os riscos da IA?", a: "'Vida 3.0: o ser humano na era da Inteligência Artificial', de Max Tegmark, é a referência mais aprofundada sobre os riscos existenciais e os dilemas éticos da IA avançada. 'A Era da IA', de Kissinger, Schmidt e Huttenlocher, também aborda os riscos geopolíticos com seriedade." },
    { q: "Os livros sobre IA ficam desatualizados rapidamente?", a: "Os livros técnicos de implementação envelhecem mais rápido, mas os títulos desta lista focam em fundamentos, estratégia e filosofia — conteúdo que mantém relevância mesmo com o avanço da tecnologia. A reflexão de Tegmark sobre o papel humano ou a análise de Kissinger sobre geopolítica continuam válidas independente dos modelos do momento." },
    { q: "Qual a diferença entre um livro técnico e um livro estratégico sobre IA?", a: "Livros técnicos ensinam como implementar algoritmos, treinar modelos e desenvolver sistemas de IA — normalmente exigem conhecimento de programação. Livros estratégicos, como os desta lista, explicam o que é IA, como ela impacta negócios e sociedade, e como tomar decisões melhores em um mundo moldado por ela — acessíveis a qualquer profissional." },
    { q: "Existe algum livro sobre IA generativa especificamente?", a: "O campo da IA generativa (ChatGPT, Gemini, Claude) é recente demais para ter clássicos consolidados, mas livros como os de Martha Gabriel e Tom Taulli abordam os fundamentos que embasam essas tecnologias. Acompanhe esta lista — novos títulos sobre IA generativa estão sendo publicados e serão adicionados." },
    { q: "Vale a pena ler mais de um livro sobre IA?", a: "Com certeza. Cada autor traz uma perspectiva diferente: Kai-Fu Lee vê a IA pelo ângulo do investidor e empreendedor; Tegmark, pelo da física e ética; Kissinger, pela geopolítica; Martha Gabriel, pelo marketing e educação. A leitura de múltiplos pontos de vista constrói uma visão muito mais completa e crítica." },
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
                    className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 mb-4" : "max-h-0 opacity-0"}`}
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Livros de Inteligência Artificial</h2>
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
