import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>IA para ecommerce</strong> deixou de ser um recurso isolado e passou a atuar em toda a operação da loja: da criação do site à busca de produtos, do atendimento no WhatsApp à análise de vendas e estoque. Ferramentas como <strong>Genstore e Native Commerce</strong> montam uma loja a partir de uma descrição, enquanto <strong>Luigi&apos;s Box e Salesforce Commerce AI</strong> melhoram a busca e a recomendação dentro de lojas que já existem.
                </p>
                <p className="mb-4">
                    Para lojistas brasileiros, o ganho está em combinar o que já funciona com automação: <strong>Nuvem Chat</strong> atende clientes da Nuvemshop em horário comercial e fora dele, <strong>Prax</strong> centraliza os números da operação em um painel e <strong>Toca</strong> cruza dados de loja, marketplaces e anúncios para sugerir ações com aprovação humana. Esta página reúne essas opções para você comparar.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Onde a IA entra na operação de um ecommerce</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Criação da loja:</strong> Construtores como Genstore e Native Commerce geram a estrutura da loja a partir de uma descrição do negócio, que depois você ajusta manualmente.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Busca e recomendação:</strong> Luigi&apos;s Box e Salesforce Commerce AI usam IA para melhorar a busca interna, as recomendações de produtos e a experiência de compra guiada.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Atendimento:</strong> Assistentes como o Nuvem Chat respondem dúvidas sobre produtos, recomendam itens e conduzem o cliente ao checkout no WhatsApp e no Instagram.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Dados e operação:</strong> Prax e Toca consolidam vendas, estoque, marketing e clientes; Estoca e Selia cobrem logística e a operação terceirizada; Spreedly organiza os pagamentos.</span></li>
                </ul>
                <p>Compare as ferramentas de IA para ecommerce listadas abaixo e escolha as que se encaixam no tamanho e no estágio da sua loja.</p>
            </details>
        </div>
    );
}
