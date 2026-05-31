"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-4">
          As <strong>ferramentas de IA para design de interiores</strong> facilitam a criação de
          projetos profissionais, da <strong>decoração</strong> à <strong>renderização 3D</strong>,
          ajudando a <strong>reimaginar ambientes</strong>, testar <strong>paletas de cores</strong>
          e estilos como escandinavo, industrial, minimalista ou contemporâneo. Com a
          <strong> inteligência artificial para decoração</strong>, é possível gerar visualizações fotorrealistas
          e <strong>moodboards</strong> em minutos.
        </p>


          <p className="mb-4">
            A <strong>IA para design de interiores</strong> acelera o processo criativo e reduz retrabalho.
            Profissionais e entusiastas podem comparar alternativas rapidamente, validar ideias com
            clientes e otimizar o orçamento, mantendo consistência estética.
          </p>

        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
          <p>
            Explore abaixo as principais <strong>ferramentas de IA para decoração e interiores</strong>
            para gerar projetos, renders, moodboards e redecorações de forma prática e acessível.
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
