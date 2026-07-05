import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>cursos de inteligência artificial</strong> explodiram em quantidade e qualidade nos últimos anos, mas a curadoria do que realmente vale seu tempo continua sendo um desafio. Seja você um profissional buscando <strong>requalificação para o mercado de IA</strong>, um gestor que quer entender como aplicar IA no seu negócio ou um estudante mirando carreira técnica, existe um caminho de aprendizado estruturado para cada perfil e objetivo.
                </p>
                <p className="mb-4">
                    No Brasil, as melhores opções vão de <strong>cursos gratuitos de machine learning</strong> em plataformas como Coursera e fast.ai até bootcamps intensivos, formações corporativas e pós-graduações em IA nas principais universidades. O segredo está em combinar teoria sólida com projetos práticos — o mercado de trabalho valoriza portfólios e GitHub antes de certificados.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Como Montar seu Plano de Estudos em IA</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Comece pela aplicação prática:</strong> Aprenda a usar ferramentas de IA no seu trabalho atual antes de estudar os fundamentos técnicos — isso gera motivação e ROI imediato.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Fundamentos técnicos progressivos:</strong> Python básico, depois scikit-learn para ML clássico, depois PyTorch/TensorFlow para deep learning — não pule etapas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Projetos reais no portfólio:</strong> Um projeto de análise de dados ou fine-tuning de modelo no GitHub vale mais que dezenas de certificados ao se candidatar a vagas de IA.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Comunidade e networking:</strong> Participe de meetups de IA, grupos no Discord e LinkedIn — muitas oportunidades de emprego e parcerias surgem dessas conexões.</span></li>
                </ul>
                <p>Explore os cursos e formações de IA listados abaixo, selecionados para diferentes níveis e objetivos — do iniciante total ao desenvolvedor que quer se especializar em LLMs e IA generativa.</p>
            </details>
        </div>
    );
}
