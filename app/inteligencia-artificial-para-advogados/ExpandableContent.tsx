import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial para advogados</strong> está transformando a prática jurídica — acelerando pesquisa, análise de contratos e redação de documentos sem substituir o julgamento e a responsabilidade do profissional. Com ferramentas como <strong>Harvey AI para pesquisa jurídica, Claude para análise de contratos longos e plataformas como Luminance para due diligence</strong>, escritórios de advocacia processam volumes de trabalho que antes requeriam equipes muito maiores.
                </p>
                <p className="mb-4">
                    Para advogados e escritórios brasileiros, a adoção de <strong>IA no direito</strong> já é realidade nas práticas mais competitivas. Pesquisa jurisprudencial em minutos, análise de centenas de contratos em horas e geração de rascunhos iniciais de petições são os ganhos de produtividade mais imediatos. A chave está em usar IA como assistente qualificado que acelera o trabalho técnico, enquanto o advogado mantém o controle estratégico e a responsabilidade profissional.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como a IA Está Mudando a Prática Jurídica</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pesquisa jurisprudencial acelerada:</strong> O que levava horas em bases de jurisprudência pode ser reduzido a minutos com IA que compreende conceitos jurídicos e encontra precedentes relevantes semanticamente.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise de contratos em escala:</strong> IA revisa centenas de contratos em due diligence identificando cláusulas de risco, obrigações críticas e inconsistências — comprimindo semanas de trabalho em dias.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Rascunhos iniciais de documentos:</strong> Petições, pareceres, notificações e contratos gerados por IA como ponto de partida reduzem o tempo de elaboração em 50 a 70% — o advogado refina e assina.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Gestão processual inteligente:</strong> Monitoramento automático de movimentações, alertas de prazo e classificação de urgência garantem que nenhum prazo fatal seja perdido em escritórios de alto volume.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para advogados e escritórios de advocacia listadas abaixo e descubra como modernizar sua prática jurídica sem comprometer a qualidade ou a ética profissional.</p>
            </details>
        </div>
    );
}
