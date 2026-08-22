import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para nutrição</strong> operam cruzando dados individuais — peso, altura, objetivos, restrições alimentares, preferências e histórico de refeições — com extensas bases de dados nutricionais para gerar recomendações verdadeiramente personalizadas. Modelos de visão computacional conseguem identificar alimentos em fotos e estimar porções com precisão crescente, eliminando a principal barreira do monitoramento alimentar: o registro manual tedioso de cada refeição.
                </p>
                <p className="mb-4">
                    Para a prática clínica da nutrição, a IA representa um <strong>ganho de capacidade operacional</strong>: planos alimentares que antes demandavam horas de elaboração podem ser gerados em minutos como ponto de partida, liberando o nutricionista para focar na escuta, no ajuste fino e na construção do vínculo terapêutico com o paciente. É importante destacar que ferramentas de IA complementam — mas não substituem — o acompanhamento profissional, especialmente em condições de saúde que exigem prescrição dietética individualizada e monitoramento clínico.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como a IA Está Transformando o Cuidado Nutricional</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Registro sem fricção:</strong> Fotografe o prato e a IA identifica os alimentos e calcula automaticamente as calorias e macros — eliminando a maior barreira do monitoramento alimentar: o trabalho manual.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Planos personalizados:</strong> IA cria cardápios semanais completos considerando suas restrições alimentares, preferências, objetivo calórico e alimentos disponíveis na sua região — incluindo receitas com culinária brasileira.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Educação nutricional contextual:</strong> Pergunte sobre qualquer alimento, rótulo ou dúvida nutricional e receba explicações claras em português — construindo conhecimento gradual sobre alimentação saudável.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Acompanhamento de progresso:</strong> IA analisa padrões alimentares ao longo do tempo, identifica sabotadores de progresso e ajusta o plano automaticamente com base nos dados reais de cada usuário.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
