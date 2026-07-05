import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    Os <strong>livros de inteligência artificial</strong> oferecem algo que cursos online raramente proporcionam: profundidade, contexto histórico e rigor intelectual para realmente entender os fundamentos da tecnologia que está transformando o mundo. De clássicos técnicos como <strong>"Deep Learning" de Goodfellow</strong> ao acessível "AI Superpowers" de Kai-Fu Lee, a literatura sobre IA atende desde o desenvolvedor que quer dominar redes neurais até o executivo que precisa compreender o impacto estratégico da IA nos negócios.
                </p>
                <p className="mb-4">
                    Para brasileiros, o principal desafio é a <strong>escassez de material técnico de qualidade em português</strong>. A maior parte das referências fundamentais ainda está em inglês, e os livros traduzidos chegam com atraso de 1 a 2 anos. Investir no inglês técnico abre acesso a um universo muito mais amplo — e ferramentas de IA como o NotebookLM ajudam a estudar em inglês com suporte em português.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Trilhas de Leitura para Diferentes Objetivos</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Para não-técnicos e gestores:</strong> Comece com "AI Superpowers" (impacto geopolítico) e "Competing in the Age of AI" (estratégia de negócios) antes de avançar para material mais técnico.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Para desenvolvedores iniciantes em ML:</strong> "Hands-On Machine Learning" de Géron é o caminho mais prático — código real com scikit-learn e TensorFlow desde as primeiras páginas.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Para quem quer entender ética e riscos:</strong> "Human Compatible" de Stuart Russell e "The Alignment Problem" de Brian Christian são leituras essenciais e acessíveis ao público geral.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Para especialização técnica:</strong> "Deep Learning" de Goodfellow é a bíblia teórica, complementada por papers do arXiv para se manter na fronteira do conhecimento em IA.</span></li>
                </ul>
                <p>Explore a lista de livros e recursos de aprendizado sobre inteligência artificial curados abaixo — organizados por nível e objetivo para facilitar sua trilha de leitura.</p>
            </details>
        </div>
    );
}
