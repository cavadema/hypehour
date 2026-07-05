import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial na medicina</strong> representa uma das aplicações mais transformadoras da tecnologia — e uma das que exige maior responsabilidade. Sistemas de IA já auxiliam médicos brasileiros no <strong>diagnóstico por imagem, triagem de urgência, transcrição automática de consultas e análise de prontuários</strong>, aumentando a capacidade de atendimento e reduzindo erros, sempre como suporte à decisão clínica do profissional de saúde.
                </p>
                <p className="mb-4">
                    Para <strong>médicos e gestores de clínicas no Brasil</strong>, as ferramentas de IA mais impactantes no dia a dia são as de documentação clínica automatizada — que eliminam horas de digitação de prontuário — e os sistemas de análise de imagem que funcionam como segundo par de olhos especializado. A ANVISA e o CFM estabelecem os critérios de uso seguro, garantindo que a IA amplifique a medicina, não a substitua.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Aplicações de IA que já Estão Transformando a Medicina</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Documentação automática:</strong> IA grava e transcreve consultas, gerando nota clínica estruturada em tempo real — liberando o médico para focar no paciente em vez de no teclado.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise de imagem radiológica:</strong> Sistemas detectam nódulos, fraturas e hemorragias em imagens médicas com alta sensibilidade, auxiliando radiologistas na priorização e na triagem.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Apoio diagnóstico:</strong> Bancos de dados clínicos com IA sugerem diagnósticos diferenciais baseados em sintomas, histórico e exames, ampliando o raciocínio clínico do médico.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Gestão de saúde populacional:</strong> IA identifica pacientes de alto risco para intervenção proativa, otimiza agendas de retorno e analisa indicadores de qualidade assistencial em escala.</span></li>
                </ul>
                <p>Explore as ferramentas de IA para medicina e saúde listadas abaixo — todas selecionadas com foco em aplicações clínicas práticas para o contexto da saúde brasileira.</p>
            </details>
        </div>
    );
}
