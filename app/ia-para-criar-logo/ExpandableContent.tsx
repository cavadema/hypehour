import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    A <strong>criação de logotipos com IA</strong> combina modelos generativos de imagem com sistemas de design vetorial para produzir identidades visuais a partir de informações sobre o negócio. O processo parte de dados semânticos — nome da empresa, setor, público-alvo, personalidade da marca e preferências estéticas — que orientam a geração de formas, tipografia e paleta cromática. O modelo aplica princípios de design como equilíbrio visual, legibilidade e versatilidade de aplicação para produzir variações que funcionam tanto em escalas mínimas quanto em formatos de grande porte.
                </p>
                <p className="mb-4">
                    O diferencial mais relevante dessa tecnologia para pequenos negócios e empreendedores está no <strong>acesso a arquivos profissionais</strong>: as melhores plataformas exportam formatos vetoriais escaláveis acompanhados de kits de marca completos com mockups em diferentes aplicações. Isso elimina a lacuna entre ter uma ideia visual e ter materiais prontos para uso em impressão, bordado, sinalização e ambiente digital — sem precisar contratar diferentes profissionais para cada entregável.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">O que considerar ao criar seu logotipo com IA</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Originalidade e diferenciação:</strong> Verifique se o logotipo gerado não é visualmente similar a marcas já existentes no seu setor — uma busca por imagem antes de adotar o design é uma precaução essencial.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Formato vetorial obrigatório:</strong> Sempre exija arquivos SVG ou equivalente para garantir que o logotipo possa ser escalado para qualquer tamanho sem perda de qualidade — de favicon a outdoor.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Direitos comerciais claros:</strong> Confirme que o plano escolhido inclui licença comercial completa, especialmente se houver intenção de registrar a marca junto a órgãos competentes.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Versões para diferentes aplicações:</strong> Solicite versões em fundo claro, escuro e transparente — a versatilidade de aplicação é essencial para manter a consistência visual em diferentes mídias e contextos.</span></li>
                </ul>
                <p>Explore as ferramentas listadas abaixo para encontrar a que melhor se encaixa no seu fluxo de trabalho e caso de uso.</p>
            </details>
        </div>
    );
}
