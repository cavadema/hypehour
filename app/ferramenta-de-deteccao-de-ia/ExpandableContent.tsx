import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Com a proliferação de textos, imagens e vídeos gerados por inteligência artificial, as <strong>ferramentas de detecção de conteúdo sintético</strong> tornaram-se indispensáveis para educadores, jornalistas, editoras e empresas de conteúdo. Esses sistemas analisam padrões estatísticos de linguagem, artefatos visuais e inconsistências estruturais para distinguir o que foi criado por modelos de IA do que foi efetivamente produzido por autores humanos.
                </p>
                <p className="mb-4">
                    A <strong>detecção de IA em textos</strong> funciona avaliando métricas como <strong>perplexidade</strong> (quão previsível é cada palavra para o modelo) e <strong>burstiness</strong> (variação no comprimento das frases). Humanos tendem a escrever com mais variação rítmica e estrutural; textos gerados por IA costumam ser mais uniformes e estatisticamente previsíveis. Para imagens e vídeos, a análise foca em padrões de ruído, artefatos de geração e inconsistências físicas que modelos generativos produzem de forma característica.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Casos de Uso para Ferramentas de Detecção de IA</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Integridade acadêmica:</strong> Professores e instituições verificam trabalhos acadêmicos para garantir que os alunos desenvolveram o raciocínio próprio, usando detecção como parte do processo pedagógico.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Verificação jornalística:</strong> Redações e fact-checkers usam detecção de deepfake em imagens e vídeos antes de publicar, combatendo desinformação gerada por inteligência artificial.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Qualidade de conteúdo:</strong> Agências e empresas verificam entregas de freelancers e fornecedores para garantir que o conteúdo pago foi efetivamente criado e personalizado por humanos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Moderação de plataformas:</strong> Sites e redes sociais integram detecção via API para identificar e rotular automaticamente conteúdos suspeitos de serem gerados por IA em escala.</span></li>
                </ul>
                <p>Explore as ferramentas de detecção de IA listadas abaixo e encontre a solução certa para seu contexto — do uso acadêmico individual ao monitoramento corporativo em escala.</p>
            </details>
        </div>
    );
}
