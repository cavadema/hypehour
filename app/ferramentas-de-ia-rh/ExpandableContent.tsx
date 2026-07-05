import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para Recursos Humanos</strong> estão transformando profundamente a gestão de pessoas no Brasil. Com plataformas como <strong>Gupy, Kenoby, Factorial AI e Workday AI</strong>, equipes de RH automatizam triagem de currículos, conduzem entrevistas iniciais por IA, preveem risco de turnover e constroem planos de desenvolvimento individualizados — reduzindo drasticamente o tempo de contratação e aumentando a qualidade dos talentos captados.
                </p>
                <p className="mb-4">
                    Além do recrutamento, a <strong>inteligência artificial no RH</strong> atua em toda a jornada do colaborador: desde o onboarding automatizado e personalizado até análise de engajamento, mapeamento de competências e sucessão de liderança. Ferramentas como <strong>Eightfold AI e Leapsome</strong> criam visualizações completas do capital humano da empresa, permitindo decisões estratégicas baseadas em dados — não em intuição.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Aplicações de IA que Estão Redefinindo o RH Brasileiro</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Triagem e ranking de candidatos:</strong> Gupy e Kenoby usam IA para analisar currículos em segundos, ranquear candidatos por aderência ao perfil da vaga e eliminar vieses inconscientes baseados em gênero, nome ou universidade de origem.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise preditiva de turnover:</strong> Modelos de IA identificam padrões comportamentais que precedem pedidos de demissão — frequência de ausências, queda de produtividade, mudanças em pesquisas de clima — permitindo ação proativa de retenção antes que o talento decida sair.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Avaliação de desempenho contínua:</strong> Substituindo ciclos anuais rígidos, ferramentas como Leapsome e Lattice com IA fazem check-ins frequentes, analisam feedbacks em linguagem natural e geram relatórios de desenvolvimento com recomendações personalizadas por colaborador.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Chatbots de RH para dúvidas frequentes:</strong> Automatize respostas sobre férias, benefícios, políticas internas e processos de onboarding com chatbots treinados na base de conhecimento da empresa — liberando o time de RH de responder as mesmas perguntas dezenas de vezes por semana.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para RH listadas abaixo e descubra como modernizar a gestão de pessoas na sua empresa, reduzir o tempo de contratação e criar uma experiência do colaborador mais engajadora e baseada em dados.</p>
            </details>
        </div>
    );
}
