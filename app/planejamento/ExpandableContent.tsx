import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para planejamento e produtividade</strong> estão transformando a forma como profissionais brasileiros organizam seu tempo e seus projetos. Com plataformas como <strong>Notion AI, Reclaim AI e Motion</strong>, é possível ter um sistema de planejamento que aprende seus padrões, agenda automaticamente blocos de trabalho focado, prioriza tarefas com base em impacto real e se adapta a mudanças de última hora — tudo isso sem horas gastas em planilhas ou reuniões de alinhamento.
                </p>
                <p className="mb-4">
                    O uso de <strong>IA como assistente de produtividade</strong> vai além de apenas organizar listas de tarefas: assistentes como ChatGPT e Claude atuam como pensadores parceiros — ajudando a estruturar projetos complexos, identificar gargalos ocultos, criar OKRs realistas e desenvolver planos de ação detalhados para qualquer objetivo, profissional ou pessoal. A conversa com a IA frequentemente revela insights que você não teria chegado sozinho.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como a IA Eleva seu Planejamento e Produtividade</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Gestão inteligente de agenda:</strong> Reclaim AI e Motion analisam suas tarefas e compromissos para agendar automaticamente tempo de trabalho focado, reuniões e pausas — eliminando a fragmentação do dia.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Estruturação de projetos:</strong> Do objetivo vago ao plano detalhado com tarefas, responsáveis e prazos — a IA transforma intenções em estruturas acionáveis em minutos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Priorização racional:</strong> Quando tudo parece urgente, a IA aplica frameworks de prioridade objetivos para ajudar a decidir onde focar energia com base em impacto real e não em pressão emocional.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Revisão e ajuste contínuo:</strong> Use IA semanalmente para revisar o que foi feito, o que ficou pendente, o que travou e como ajustar o planejamento da próxima semana com base nos dados reais do período.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para planejamento e produtividade listadas abaixo e encontre as que melhor se encaixam no seu sistema de trabalho e objetivos.</p>
            </details>
        </div>
    );
}
