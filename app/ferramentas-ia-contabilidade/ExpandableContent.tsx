import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial aplicada à contabilidade</strong> funciona conectando modelos de reconhecimento de documentos, classificação automática e análise de padrões ao fluxo real de dados fiscais de uma empresa. Quando um documento fiscal é capturado — seja por foto, XML ou importação bancária — algoritmos treinados em milhões de transações identificam a natureza da operação, sugerem a conta contábil correta e cruzam automaticamente as informações com as obrigações acessórias vigentes, sem digitação manual.
                </p>
                <p className="mb-4">
                    No contexto da <strong>complexidade tributária brasileira</strong>, essa capacidade de automação vai além da eficiência operacional: ela se torna uma proteção estratégica. Sistemas inteligentes monitoram continuamente a consistência entre declarações, acompanham mudanças na legislação do IBS e CBS, e identificam divergências antes que se transformem em autuações fiscais — convertendo a contabilidade de uma obrigação reativa em um instrumento de gestão proativa.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a IA está transformando a rotina contábil</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Conciliação bancária automatizada:</strong> Algoritmos comparam extratos com lançamentos contábeis em segundos, identificam divergências e sugerem ajustes — eliminando horas semanais de conferência manual e reduzindo erros em fechamentos mensais.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Classificação de documentos fiscais:</strong> Tecnologia de OCR avançada lê XMLs de NF-e e NFS-e, extrai dados estruturados e classifica automaticamente por conta contábil, centro de custo e natureza da operação — sem retrabalho.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise de risco fiscal:</strong> Modelos de IA cruzam dados de SPED, ECF, ECD e demais obrigações acessórias para identificar inconsistências que podem gerar autuações, permitindo correções proativas antes do envio ao Fisco.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Relatórios gerenciais automáticos:</strong> Com os dados contábeis estruturados, a IA gera DRE, fluxo de caixa, análise de margem e indicadores financeiros de forma automática — transformando contabilidade em ferramenta de decisão estratégica.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
