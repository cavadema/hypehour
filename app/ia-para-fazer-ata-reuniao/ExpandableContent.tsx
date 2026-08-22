import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>geração automática de atas por IA</strong> combina três tecnologias em sequência: reconhecimento de fala para converter áudio em texto, <strong>diarização de falantes</strong> para identificar quem disse o quê, e modelos de linguagem para interpretar o conteúdo transcrito e extrair estrutura — decisões tomadas, responsáveis mencionados, prazos combinados e pontos em aberto. O resultado é um documento organizado produzido automaticamente ao fim de cada reunião, sem que ninguém precise digitar uma linha.
                </p>
                <p className="mb-4">
                    A mudança mais significativa não é apenas a economia de tempo na redação da ata — é a <strong>qualidade do registro</strong>. Atas manuais dependem da atenção e memória de quem anota enquanto também participa da conversa. Sistemas automatizados capturam tudo o que foi dito, preservam o contexto exato de cada decisão e geram um histórico pesquisável de todas as reuniões, eliminando ambiguidade e disputas de interpretação do que foi acordado.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">O que avaliar ao escolher uma solução de ata automática</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Qualidade em português:</strong> A acurácia da transcrição em português brasileiro varia muito entre soluções — teste com amostras reais antes de adotar para reuniões críticas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Identificação de falantes:</strong> A diarização precisa atribuir cada fala ao participante correto, especialmente em reuniões com muitos participantes ou vozes semelhantes.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Extração de compromissos:</strong> Decisões e itens de ação devem aparecer destacados na ata, não apenas inseridos no meio de uma transcrição bruta e extensa.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Integrações com o fluxo de trabalho:</strong> A ata gerada precisa chegar automaticamente onde a equipe trabalha — seja por email, Notion, Slack ou sistema de gestão de projetos.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
