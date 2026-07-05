import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>automação com IA</strong> combina o poder dos modelos de linguagem com plataformas de integração como <strong>n8n, Make e Zapier</strong> para criar fluxos de trabalho que operam sozinhos — respondendo e-mails, qualificando leads, publicando conteúdo, alimentando planilhas e notificando equipes sem intervenção humana. O diferencial da IA é conseguir interpretar contexto e tomar decisões, não apenas executar passos fixos.
                </p>
                <p className="mb-4">
                    Para pequenas empresas e profissionais autônomos brasileiros, a <strong>automação inteligente com IA</strong> é um nivelador de campo poderoso: permite que um time pequeno opere com a eficiência de equipes muito maiores. Com investimento mensal acessível e sem necessidade de equipe de TI dedicada, é possível automatizar boa parte das operações repetitivas em semanas.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Processos que Você Pode Automatizar com IA Hoje</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Atendimento inicial:</strong> Chatbots com IA respondem dúvidas frequentes, coletam dados de contato e encaminham leads qualificados para a equipe comercial automaticamente.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Geração de conteúdo:</strong> Configure fluxos que buscam tendências, geram rascunhos de posts com IA e publicam automaticamente nas redes sociais no horário de maior engajamento.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Relatórios automáticos:</strong> Colete dados de diferentes sistemas, processe com IA e envie resumos executivos semanais por e-mail ou Slack sem nenhuma ação manual.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Integração entre sistemas:</strong> Conecte seu CRM, ERP, e-commerce e ferramentas de marketing para que dados fluam automaticamente entre plataformas sem redigitação.</span></li>
                </ul>
                <p>Explore as ferramentas de automação com IA listadas abaixo e identifique qual processo da sua empresa pode ser o primeiro a ganhar autonomia inteligente.</p>
            </details>
        </div>
    );
}
