"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-4">
          A <strong>inteligência artificial para nutricionistas</strong> está revolucionando a prática clínica nutricional, tornando mais rápida e precisa a elaboração de planos alimentares, o cálculo de macros e micronutrientes e o acompanhamento evolutivo de pacientes. Com o uso de <strong>IA para nutrição</strong>, é possível automatizar tarefas repetitivas e focar no que realmente importa: o cuidado individualizado.
        </p>
        <p className="mb-4">
          Ferramentas de <strong>software para nutricionistas com IA</strong> já permitem gerar planos alimentares personalizados em minutos, com sugestões baseadas no perfil do paciente, restrições alimentares, objetivos e histórico clínico — reduzindo drasticamente o tempo gasto em cada atendimento.
        </p>

        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Como a IA transforma a nutrição clínica</h3>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-2">
              <span className="text-gray-900 font-bold">•</span>
              <span><strong>Planos alimentares em minutos:</strong> Ferramentas de <strong>IA para nutricionistas</strong> geram cardápios completos com substituições automáticas, respeitando restrições alimentares e preferências do paciente.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-900 font-bold">•</span>
              <span><strong>Cálculo nutricional preciso:</strong> Algoritmos calculam automaticamente macros, micros, calorias e índices como VET e TMB com base nos dados antropométricos e objetivos do paciente.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-900 font-bold">•</span>
              <span><strong>Prontuário e gestão integrados:</strong> Sistemas modernos unificam anamnese, evolução, exames e comunicação com o paciente em uma única plataforma, sem papelada.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-900 font-bold">•</span>
              <span><strong>Acompanhamento contínuo:</strong> A IA monitora a aderência do paciente ao plano alimentar e sugere ajustes conforme os resultados evoluem ao longo das consultas.</span>
            </li>
          </ul>
          <p className="mb-4">
            Vale destacar que as <strong>ferramentas de inteligência artificial para nutrição</strong> funcionam como aliadas do profissional — não como substitutas. A análise clínica, o vínculo com o paciente e o julgamento profissional continuam sendo insubstituíveis para uma conduta nutricional de qualidade.
          </p>
          <p>
            Explore as opções listadas nesta página e descubra qual <strong>software de IA para nutricionistas</strong> melhor se adapta ao seu modelo de atendimento, seja em consultório particular, clínica multiprofissional ou atendimento online.
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
