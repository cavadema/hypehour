import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    As ferramentas de <strong>IA para fazer ata de reunião</strong> eliminaram uma das tarefas mais improdutivas do ambiente corporativo: anotar manualmente o que foi discutido enquanto tenta participar ativamente da conversa. Com plataformas como <strong>Granola AI, Fireflies.ai e Tactiq</strong>, suas reuniões no Google Meet, Zoom e Teams são gravadas, transcritas e transformadas em atas estruturadas automaticamente — com decisões, responsáveis e prazos identificados pela IA.
                </p>
                <p className="mb-4">
                    O impacto para times brasileiros é imediato: <strong>atas prontas em português em minutos</strong>, registro fiel de tudo o que foi discutido, possibilidade de pesquisar em transcrições antigas e integração automática com ferramentas como Notion, Slack e Jira. Profissionais que participam de 5 a 10 reuniões por semana economizam horas que antes iam para redação, envio e arquivamento de atas manuais.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">O que uma Boa Ferramenta de IA para Reunião Deve Oferecer</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Transcrição em português:</strong> Acurácia alta no idioma nativo da equipe é fundamental — verifique as amostras de qualidade em português antes de contratar.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Identificação de falantes:</strong> A ferramenta deve atribuir corretamente cada fala ao participante correspondente, não apenas transcrever sem identificação de quem falou.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Extração de itens de ação:</strong> Decisões e próximos passos devem ser identificados e destacados automaticamente, não apenas listados no meio de uma transcrição bruta.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Integrações nativas:</strong> Envio automático da ata para Notion, Slack, e-mail ou CRM logo após o fim da reunião — sem copiar e colar manualmente.</span></li>
                </ul>
                <p>Confira as ferramentas de IA para ata de reunião listadas abaixo e nunca mais perca um detalhe importante do que foi decidido nas suas reuniões.</p>
            </details>
        </div>
    );
}
