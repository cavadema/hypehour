import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>navegadores e buscadores com IA</strong> funcionam adicionando uma camada de raciocínio sobre o conteúdo da web: em vez de retornar uma lista de links para o usuário interpretar, eles leem, comparam e sintetizam múltiplas fontes simultaneamente para entregar respostas fundamentadas com citações verificáveis. Essa abordagem é possível porque modelos de linguagem conseguem compreender o conteúdo semântico de páginas inteiras — não apenas palavras-chave isoladas.
                </p>
                <p className="mb-4">
                    A mudança de paradigma está na <strong>inversão do esforço cognitivo</strong>: antes, o usuário abria dezenas de abas, lia cada uma e fazia a síntese manualmente. Com IA integrada à navegação, essa síntese acontece automaticamente — e o esforço intelectual do usuário se concentra em formular boas perguntas e avaliar criticamente as respostas. Para pesquisas complexas que exigem cruzamento de múltiplas fontes, isso representa uma compressão de horas de trabalho em minutos.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde Navegadores e Buscadores com IA Fazem Mais Diferença</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pesquisa com citações verificáveis:</strong> Respostas que indicam exatamente de qual fonte cada informação foi extraída — permitindo verificar, aprofundar e confiar no conteúdo sem abrir dezenas de abas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Resumo de páginas longas:</strong> Artigos extensos, relatórios técnicos e documentos complexos reduzidos aos pontos principais em segundos — sem abrir mão da capacidade de aprofundar qualquer ponto.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Pesquisa profunda autônoma:</strong> Para investigações complexas, o modo de pesquisa avançada conduz uma investigação multi-etapa, consultando dezenas de fontes e entregando um relatório consolidado.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Comparação inteligente de opções:</strong> Produtos, serviços, planos e alternativas comparados em segundos com dados reais coletados de múltiplos sites — sem planilhas manuais ou abas intermináveis.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
