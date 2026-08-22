import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para Recursos Humanos</strong> estão transformando profundamente a gestão de pessoas no Brasil. Com inteligência artificial aplicada ao ciclo completo do colaborador, equipes de RH automatizam a triagem de currículos, conduzem entrevistas iniciais de forma estruturada, preveem risco de turnover e constroem planos de desenvolvimento individualizados — reduzindo o tempo de contratação e aumentando a qualidade dos talentos captados.
                </p>
                <p className="mb-4">
                    Além do recrutamento, a <strong>inteligência artificial no RH</strong> atua em toda a jornada do colaborador: do onboarding automatizado e personalizado até a análise contínua de engajamento, mapeamento de competências e planejamento de sucessão de liderança. O resultado é uma <strong>visão completa do capital humano</strong> da empresa, permitindo decisões estratégicas baseadas em dados — não em intuição ou percepção subjetiva de gestores.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Aplicações de IA que Estão Redefinindo o RH Brasileiro</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Triagem e ranking de candidatos:</strong> Sistemas de IA analisam currículos em segundos, ranqueiam candidatos por aderência ao perfil da vaga e contribuem para reduzir vieses inconscientes baseados em gênero, nome ou instituição de origem.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise preditiva de turnover:</strong> Modelos de IA identificam padrões comportamentais que precedem pedidos de demissão — frequência de ausências, queda de produtividade, mudanças em pesquisas de clima — permitindo ação proativa de retenção antes que o talento decida sair.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Avaliação de desempenho contínua:</strong> Substituindo ciclos anuais rígidos, plataformas com IA realizam check-ins frequentes, analisam feedbacks em linguagem natural e geram relatórios de desenvolvimento com recomendações personalizadas por colaborador.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Chatbots de RH para dúvidas frequentes:</strong> Automatize respostas sobre férias, benefícios, políticas internas e processos de onboarding com assistentes treinados na base de conhecimento da empresa — liberando o time de RH de responder as mesmas perguntas dezenas de vezes por semana.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para RH listadas abaixo e descubra como modernizar a gestão de pessoas na sua empresa, reduzir o tempo de contratação e criar uma experiência do colaborador mais engajadora e baseada em dados.</p>
            </details>
        </div>
    );
}
