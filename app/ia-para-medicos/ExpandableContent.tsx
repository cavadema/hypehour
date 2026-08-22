import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>inteligência artificial na medicina</strong> opera sobre bases de dados clínicos de escala que nenhum profissional conseguiria processar individualmente — milhões de imagens médicas anotadas, registros de prontuários, literatura científica e padrões de apresentação de doenças. Isso permite que sistemas de IA identifiquem correlações sutis em exames de imagem, sinalizem achados prioritários em filas de laudos e gerem documentação clínica estruturada a partir da transcrição de consultas em tempo real.
                </p>
                <p className="mb-4">
                    O princípio que orienta o uso responsável dessas tecnologias é o de <strong>suporte à decisão clínica</strong>, não substituição: a IA amplifica a capacidade do profissional de saúde ao processar informação em escala e reduzir erros de omissão, mas a responsabilidade pelo diagnóstico e pela conduta permanece inteiramente do médico. Esse modelo de colaboração homem-máquina é o que torna a IA na medicina uma ferramenta de segurança, não um risco.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a IA está sendo aplicada na prática clínica</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Documentação clínica automatizada:</strong> Transcrição de consultas e geração de nota clínica estruturada em tempo real, liberando o médico para focar no paciente em vez de no teclado.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise de imagem radiológica:</strong> Detecção de nódulos, fraturas e alterações em tomografias, ressonâncias e raios-X com alta sensibilidade, auxiliando na triagem e priorização de laudos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Apoio ao raciocínio diagnóstico:</strong> Sistemas que sugerem diagnósticos diferenciais e condutas baseados em sintomas, histórico e exames — expandindo o arsenal de referência do clínico.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Gestão de saúde populacional:</strong> Identificação de pacientes de alto risco para intervenção proativa, análise de indicadores de qualidade assistencial e otimização de agendas de retorno em escala.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
