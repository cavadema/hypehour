import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para atendimento ao cliente</strong> transformou o suporte de um centro de custo em uma vantagem competitiva. Com <strong>chatbots baseados em LLMs, assistentes treinados na base de conhecimento da empresa e automação inteligente de tickets</strong>, empresas brasileiras conseguem atender centenas de clientes simultaneamente com consistência e qualidade — 24 horas por dia, inclusive fins de semana e feriados.
                </p>
                <p className="mb-4">
                    O impacto mais imediato é a <strong>redução do volume de tickets escalados para humanos</strong>: ferramentas bem configuradas resolvem automaticamente 40 a 70% das solicitações de nível 1. Isso libera a equipe de atendimento para focar em casos complexos, clientes estratégicos e situações que realmente exigem empatia e julgamento humano — elevando tanto a satisfação dos clientes quanto a qualidade de vida dos atendentes.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Recursos Essenciais de IA para Atendimento de Alta Qualidade</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Base de conhecimento integrada:</strong> O chatbot responde com base nos seus próprios documentos, FAQs e políticas da empresa — sem inventar respostas ou desviar do tom da marca.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Análise de sentimento:</strong> Identifica automaticamente clientes frustrados ou em risco de churn e aciona protocolos de escalada ou compensação antes que a situação se agrave.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Sugestão de resposta para agentes:</strong> Mesmo nas conversas humanas, a IA sugere respostas em tempo real baseadas no histórico do cliente e nos melhores atendimentos anteriores.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Integração omnichannel:</strong> Um único assistente de IA bem configurado atende simultaneamente no site, WhatsApp, Instagram e e-mail, mantendo contexto consistente entre canais.</span></li>
                </ul>
                <p>Confira as ferramentas de IA para atendimento ao cliente listadas abaixo e encontre a solução que melhor se adapta ao tamanho e aos canais de comunicação da sua empresa.</p>
            </details>
        </div>
    );
}
