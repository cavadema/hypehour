import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>geradores de logo com IA</strong> democratizaram o acesso a identidade visual profissional para empreendedores e pequenas empresas brasileiras. Com plataformas como <strong>Looka, Brandmark e Ideogram</strong>, qualquer pessoa pode criar uma logo de qualidade em minutos — sem necessidade de contratar um designer ou aguardar dias por uma proposta. Você informa o nome, setor e estilo, e a IA gera dezenas de variações para escolher.
                </p>
                <p className="mb-4">
                    A qualidade das <strong>logos geradas por IA</strong> evoluiu enormemente: as melhores ferramentas exportam arquivos vetoriais (SVG, AI) prontos para uso em impressão, bordado e sinalização, além de gerar kits de marca completos com paleta de cores, fontes e mockups em diferentes aplicações. Para novos negócios, MEIs e projetos pessoais, o custo-benefício é imbatível comparado à contratação de um designer profissional.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">O que Considerar ao Criar sua Logo com IA</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Originalidade e diferenciação:</strong> Teste se a logo gerada não é muito similar a marcas existentes no seu setor — use o Google Imagens para verificar antes de adotar.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Formato vetorial obrigatório:</strong> Sempre exija arquivos SVG ou AI para garantir que a logo possa ser escalada para qualquer tamanho sem perda de qualidade — de favicon a outdoor.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Direitos comerciais claros:</strong> Confirme que o plano escolhido inclui licença comercial completa, especialmente se for registrar a marca no INPI.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Versões para diferentes fundos:</strong> Solicite versões em fundo claro, escuro e transparente — a versatilidade é essencial para uso consistente em diferentes mídias.</span></li>
                </ul>
                <p>Explore os geradores de logo com IA listados abaixo e dê o primeiro passo para a identidade visual da sua marca em poucos minutos.</p>
            </details>
        </div>
    );
}
