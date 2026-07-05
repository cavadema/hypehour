import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>fluxos e workflows de IA</strong> são a espinha dorsal de qualquer operação inteligente escalável. Com ferramentas como <strong>n8n, Flowise e LangFlow</strong>, é possível construir pipelines visuais que encadeiam modelos de linguagem, bases de dados vetoriais, APIs externas e sistemas internos — criando automações que processam informação, tomam decisões e executam ações de ponta a ponta sem intervenção humana.
                </p>
                <p className="mb-4">
                    A diferença entre um <strong>workflow de IA bem estruturado</strong> e uma automação simples está na capacidade de lidar com variações e exceções. Enquanto scripts tradicionais quebram quando algo muda, workflows de IA com LLMs conseguem interpretar contexto, adaptar respostas e escalar para novos cenários — tornando a automação mais resiliente e inteligente ao longo do tempo.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Arquiteturas Mais Comuns de Workflows de IA</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pipeline de processamento de documentos:</strong> Ingesta PDFs, extrai texto, divide em chunks, gera embeddings e armazena num banco vetorial para consulta via RAG.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Workflow de triagem e resposta:</strong> Monitora e-mails ou tickets, classifica por urgência e assunto com IA, gera rascunho de resposta e notifica o atendente com contexto completo.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pipeline de geração de conteúdo:</strong> Busca tendências, gera rascunho com LLM, verifica plágio e adequação à marca, formata para cada canal e agenda a publicação.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Workflow de análise e relatório:</strong> Coleta dados de múltiplas fontes, processa com IA para extrair insights, gera narrativa em linguagem natural e distribui relatório para stakeholders.</span></li>
                </ul>
                <p>Descubra as ferramentas listadas abaixo para montar seus próprios workflows de IA — desde pipelines simples de automação até arquiteturas complexas de processamento de dados em produção.</p>
            </details>
        </div>
    );
}
