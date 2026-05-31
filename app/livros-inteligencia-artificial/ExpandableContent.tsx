"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>melhores livros sobre inteligência artificial</strong> reúnem décadas de pesquisa, experiências práticas e reflexões filosóficas que nenhum artigo ou vídeo consegue substituir. Seja você iniciante buscando os fundamentos ou profissional que quer aprofundar o entendimento sobre IA generativa, aprendizado de máquina e impactos sociais, a literatura especializada oferece profundidade e contexto que outras mídias dificilmente alcançam.
                </p>

                <p className="mb-4">
                    O campo da inteligência artificial avança rapidamente, mas os livros continuam sendo a forma mais completa de compreender <em>por que</em> a tecnologia funciona como funciona — e não apenas <em>o que</em> ela faz. Autores como Kai-Fu Lee, Max Tegmark e Martha Gabriel combinam rigor técnico com visão estratégica, oferecendo perspectivas que vão além das novidades do momento.
                </p>

                <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-2">Por que ler livros sobre IA?</h3>

                    <ul className="space-y-3 mb-4">
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Profundidade conceitual:</strong> livros desenvolvem argumentos que posts e vídeos truncam. Você entende o raciocínio por trás das decisões tecnológicas, não apenas o resultado.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Contexto histórico:</strong> a IA tem décadas de história. Conhecer essa trajetória ajuda a distinguir tendências genuínas de ciclos de hype.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Perspectiva crítica:</strong> os melhores livros não apenas celebram a tecnologia — eles examinam riscos, vieses e implicações éticas com seriedade.</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-gray-900 font-bold">•</span>
                            <span><strong>Acesso a especialistas:</strong> Kissinger, Tegmark e Kai-Fu Lee reúnem visões que levaram décadas para serem construídas. É conhecimento de alto nível disponível por poucos reais.</span>
                        </li>
                    </ul>

                    <p className="mb-4">
                        A lista abaixo reúne títulos em português e traduzidos que cobrem desde os fundamentos técnicos até as grandes questões filosóficas e geopolíticas que a inteligência artificial levanta. São indicações tanto para quem está começando quanto para quem já trabalha com IA e quer expandir o repertório.
                    </p>

                    <p>
                        Os links de compra serão adicionados em breve para facilitar o acesso a cada obra. Por enquanto, você pode encontrar todos os títulos listados nas principais livrarias brasileiras — físicas e digitais — como Amazon, Estante Virtual e Livraria Cultura.
                    </p>
                </div>
            </div>

            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 flex items-center gap-2 text-gray-900 hover:text-gray-700 font-medium transition"
            >
                <span>{isExpanded ? 'Ver menos' : 'Ver mais'}</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
        </div>
    );
}
