import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As <strong>ferramentas de IA para contabilidade</strong> estão revolucionando o trabalho de contadores e escritórios contábeis brasileiros. Com soluções como <strong>Contabilone, Omie AI, QuickBooks AI e Receipt Bank</strong>, é possível automatizar lançamentos, classificar despesas por conta contábil, conciliar extratos bancários e gerar balanços — reduzindo drasticamente o trabalho manual e os erros que custam caro nas obrigações acessórias para o Fisco.
                </p>
                <p className="mb-4">
                    No contexto da <strong>reforma tributária brasileira</strong> e da crescente complexidade fiscal do país, a <strong>IA aplicada à contabilidade</strong> se torna ainda mais estratégica. Ferramentas inteligentes acompanham mudanças na legislação do IBS e CBS, identificam oportunidades de crédito tributário, analisam enquadramento de regime tributário (Simples, Lucro Presumido ou Real) e sinalizam inconsistências antes que virem autuações fiscais.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como IA Transforma a Rotina de Contadores e Escritórios Contábeis</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Conciliação bancária automática:</strong> IA compara extratos bancários com lançamentos contábeis, identifica diferenças em segundos e sugere ajustes — eliminando horas semanais de conferência manual e reduzindo o risco de erros em fechamentos mensais.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Classificação inteligente de notas fiscais:</strong> OCR com IA lê XMLs de NF-e e NFS-e, extrai dados relevantes e classifica automaticamente por conta contábil, centro de custo e natureza da operação — sem digitação manual, sem retrabalho.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise de risco fiscal:</strong> Modelos de IA cruzam dados de SPED, ECF, ECD e obrigações acessórias para identificar inconsistências e divergências que podem gerar autuações — permitindo correções proativas antes do envio ao Fisco.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Relatórios gerenciais e dashboards financeiros:</strong> Com os dados contábeis estruturados, IA gera automaticamente DRE, fluxo de caixa, análise de margem e indicadores financeiros — transformando contabilidade de obrigação em ferramenta de decisão para os clientes.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para contabilidade listadas abaixo e descubra como modernizar seu escritório, aumentar a capacidade de atendimento sem contratar mais pessoas e oferecer serviços de maior valor agregado aos seus clientes.</p>
            </details>
        </div>
    );
}
