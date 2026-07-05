import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    <strong>Aprender inglês com IA</strong> nunca foi tão acessível e eficiente para brasileiros. As novas ferramentas de inteligência artificial atuam como professores particulares disponíveis 24 horas: corrigem sua pronúncia em tempo real, explicam erros gramaticais com exemplos contextualizados e criam conversações simuladas sobre os temas que você realmente usa no dia a dia — seja no trabalho, em viagens ou nas redes sociais.
                </p>
                <p className="mb-4">
                    O diferencial da <strong>IA para aprender inglês</strong> está na personalização extrema. Enquanto cursos tradicionais seguem um currículo fixo, a IA adapta cada sessão ao seu nível, identifica seus pontos fracos específicos (como a diferença entre "make" e "do" ou o uso correto dos phrasal verbs) e sugere exercícios direcionados. Isso reduz drasticamente o tempo necessário para atingir fluência conversacional.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h3 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Estratégias para Aprender Inglês mais Rápido com IA</h3>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Conversação diária:</strong> Pratique pelo menos 15 minutos por dia de conversação com IA em tópicos do seu trabalho ou interesse — consistência supera intensidade esporádica.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Correção de pronúncia:</strong> Apps como Elsa Speak identificam exatamente quais sons do inglês você pronuncia com sotaque brasileiro e criam exercícios fonéticos específicos.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Vocabulário contextual:</strong> Aprenda palavras novas dentro de frases e situações reais, não em listas isoladas — a IA cria contextos relevantes para sua área profissional.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Imersão assistida:</strong> Use IA para entender séries, músicas e podcasts em inglês — traduza, explique expressões idiomáticas e pratique shadow speaking com suporte da IA.</span></li>
                </ul>
                <p>Confira abaixo os melhores aplicativos e ferramentas de IA para aprender inglês, selecionados para diferentes objetivos, do básico ao inglês profissional avançado.</p>
            </details>
        </div>
    );
}
