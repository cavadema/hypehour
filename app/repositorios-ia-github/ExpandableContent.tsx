import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    O <strong>GitHub é a maior vitrine do ecossistema de IA open source</strong>. Repositórios com centenas de milhares de stars como <strong>LLaMA (Meta), Stable Diffusion, LangChain, Ollama e Hugging Face Transformers</strong> formam a infraestrutura sobre a qual grande parte das ferramentas de IA comerciais são construídas. Para desenvolvedores brasileiros, explorar esse ecossistema significa acesso gratuito às tecnologias mais avançadas do mundo — sem depender de APIs pagas.
                </p>
                <p className="mb-4">
                    A <strong>IA open source no GitHub</strong> democratizou o que antes era privilégio de grandes labs: qualquer desenvolvedor pode hoje rodar modelos de linguagem localmente com Ollama, treinar modelos customizados com Hugging Face, construir agentes com CrewAI ou criar pipelines de processamento de dados com LangChain — tudo de graça, com código auditável e comunidade global de colaboradores.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Categorias Essenciais de Repositórios de IA para Explorar</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Modelos e inferência:</strong> Ollama, LM Studio e llama.cpp permitem rodar LLMs como LLaMA 3 e Mistral localmente — privacidade total, zero custo de API, latência baixa.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Frameworks de agentes:</strong> CrewAI, LangChain e AutoGen para construir sistemas de agentes autônomos — do protótipo simples ao pipeline de produção com múltiplos agentes especializados.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Geração de imagens:</strong> Automatic1111 (Stable Diffusion WebUI) e ComfyUI oferecem interfaces completas para geração e edição de imagens com centenas de modelos e extensions.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Processamento de voz:</strong> Whisper da OpenAI para transcrição de áudio em português com qualidade excepcional — gratuito, open source e rodando localmente sem limite de uso.</span></li>
                </ul>
                <p>Explore os repositórios de IA open source listados abaixo e descubra as ferramentas, modelos e frameworks que a comunidade global de desenvolvedores usa para construir o futuro da inteligência artificial.</p>
            </details>
        </div>
    );
}
