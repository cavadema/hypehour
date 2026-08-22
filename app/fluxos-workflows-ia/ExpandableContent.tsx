import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Um <strong>workflow de IA</strong> é uma sequência orquestrada de etapas onde modelos de linguagem, APIs externas, bases de dados e serviços de terceiros são encadeados para processar informação de ponta a ponta. Diferente de scripts simples, esses fluxos são capazes de tomar microdecisões em cada etapa — classificar uma entrada, escolher um caminho condicional, formatar uma saída — sem que o desenvolvedor precise antecipar cada variação possível no código.
                </p>
                <p className="mb-4">
                    A distinção fundamental entre automação tradicional e <strong>automação com IA</strong> está na resiliência a variações: enquanto scripts quebram quando o formato dos dados muda, workflows que incorporam modelos de linguagem conseguem interpretar contexto, adaptar respostas e lidar com exceções de forma natural. Isso torna a automação significativamente mais durável e escalável — especialmente em processos que envolvem linguagem não estruturada, como e-mails, documentos e conversas.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Arquiteturas mais comuns de workflows de IA</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pipeline de processamento de documentos:</strong> Ingesta PDFs, extrai texto, divide em chunks, gera embeddings e armazena num banco vetorial para consulta via RAG — base de qualquer sistema de perguntas sobre documentos internos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Workflow de triagem e resposta:</strong> Monitora e-mails ou tickets, classifica por urgência e assunto com IA, gera rascunho de resposta contextualizado e notifica o responsável — reduzindo drasticamente o tempo de primeira resposta.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pipeline de geração de conteúdo:</strong> Busca tendências, gera rascunho com modelo de linguagem, verifica adequação à marca, formata para cada canal e agenda a publicação — sem intervenção manual a cada ciclo.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Workflow de análise e relatório:</strong> Coleta dados de múltiplas fontes, processa com IA para extrair insights, gera narrativa em linguagem natural e distribui relatório para stakeholders de forma recorrente e automática.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
