"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function ExpandableContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-4">
          As ferramentas de IA para marketing estão transformando a forma como empresas criam, analisam e otimizam ações digitais. A IA para marketing permite apoiar decisões estratégicas, automatizar tarefas e interpretar dados em diferentes canais, sem substituir o trabalho humano.
        </p>

        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
          <p className="mb-4">
            No contexto do marketing com IA, essas soluções são utilizadas para dar escala a processos, melhorar a organização de fluxos e ampliar a eficiência das equipes. Ao integrar ferramentas de IA para marketing ao dia a dia, profissionais conseguem concentrar esforços em planejamento, criatividade e análise.
          </p>

          <p className="mb-4">De forma geral, a IA para marketing digital oferece suporte em áreas como:</p>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span>apoio à criação e otimização de conteúdo e anúncios</span></li>
            <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span>análise de desempenho, métricas e comportamento de audiência</span></li>
            <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span>automação de tarefas operacionais e fluxos de trabalho</span></li>
            <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span>personalização de comunicações com base em dados</span></li>
          </ul>

          <p>
            Explore as ferramentas de IA para marketing listadas abaixo e descubra soluções que podem apoiar desde a criação até a análise e otimização de resultados.
          </p>
        </div>
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors"
        aria-expanded={isExpanded}
      >
        <span>{isExpanded ? "Ver menos" : "Ver mais"}</span>
        <ChevronDownIcon className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}
