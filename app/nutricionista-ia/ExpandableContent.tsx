import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para nutrição</strong> estão tornando o cuidado com a alimentação mais acessível e personalizado para brasileiros. Com apps que <strong>reconhecem alimentos por foto, criam planos alimentares personalizados e monitoram macros automaticamente</strong>, manter uma dieta equilibrada ficou muito mais prático — sem precisar digitar cada ingrediente manualmente ou decorar tabelas nutricionais de cabeça.
                </p>
                <p className="mb-4">
                    Para nutricionistas profissionais, a <strong>IA para nutrição</strong> é uma ferramenta de produtividade poderosa: gera planos alimentares base em minutos, automatiza relatórios de progresso e permite escalar o atendimento sem perder personalização. Para pacientes, apps de nutrição com IA funcionam como um assistente de hábitos disponível 24 horas — sempre lembrando da hidratação, sugerindo substituições e mantendo o foco nos objetivos de saúde.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como a IA Está Transformando o Cuidado Nutricional</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Registro sem fricção:</strong> Fotografe o prato e a IA identifica os alimentos e calcula automaticamente as calorias e macros — eliminando a maior barreira do monitoramento alimentar: o trabalho manual.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Planos personalizados:</strong> IA cria cardápios semanais completos considerando suas restrições alimentares, preferências, objetivo calórico e alimentos disponíveis na sua região — incluindo receitas com culinária brasileira.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Educação nutricional contextual:</strong> Pergunte sobre qualquer alimento, rótulo ou dúvida nutricional e receba explicações claras em português — construindo conhecimento gradual sobre alimentação saudável.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Acompanhamento de progresso:</strong> IA analisa padrões alimentares ao longo do tempo, identifica sabotadores de progresso e ajusta o plano automaticamente com base nos dados reais de cada usuário.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para nutrição e alimentação saudável listadas abaixo — do monitoramento básico ao planejamento nutricional profissional.</p>
            </details>
        </div>
    );
}
