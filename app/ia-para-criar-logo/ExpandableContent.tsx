"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function ExpandableContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-4">
          As <strong>ferramentas de IA para criar logo</strong> democratizaram o acesso ao design profissional de identidade visual. Hoje, qualquer empreendedor, startup ou empresa pode gerar um <strong>logotipo com inteligência artificial</strong> em minutos — sem precisar de designer ou conhecimento técnico em design gráfico.
        </p>
        <p className="mb-4">
          Os melhores <strong>geradores de logo com IA</strong> combinam modelos de aprendizado de máquina com bibliotecas de design para criar opções personalizadas com base no nome da marca, setor de atuação, estilo visual e paleta de cores preferida.
        </p>

        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Por que usar IA para criar seu logo?</h3>
          <ul className="space-y-3 mb-4">
            <li className="flex gap-2">
              <span className="text-gray-900 font-bold">•</span>
              <span><strong>Velocidade:</strong> Um <strong>criador de logo com IA</strong> gera dezenas de opções em segundos, o que levaria dias em um processo tradicional com designer.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-900 font-bold">•</span>
              <span><strong>Custo acessível:</strong> A maioria das ferramentas oferece plano gratuito ou preços muito abaixo do custo de contratar um designer profissional para criar a identidade visual do zero.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-900 font-bold">•</span>
              <span><strong>Formatos profissionais:</strong> Os melhores geradores entregam o logo em SVG, PNG transparente e outros formatos vetoriais, prontos para usar em qualquer aplicação.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-gray-900 font-bold">•</span>
              <span><strong>Personalização:</strong> Após a geração inicial, é possível ajustar cores, fontes, ícones e layout diretamente na plataforma até obter o resultado desejado.</span>
            </li>
          </ul>
          <p className="mb-4">
            Vale lembrar que para marcas com necessidade de diferenciação muito forte ou identidade visual complexa, um designer humano ainda traz valor que a IA ainda não substitui completamente. A IA é ideal para quem está começando, testando ou precisa de velocidade.
          </p>
          <p>
            Explore as ferramentas desta lista e encontre o <strong>gerador de logotipo com IA</strong> mais adequado para o seu projeto — seja uma startup, negócio local, canal digital ou projeto pessoal.
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
