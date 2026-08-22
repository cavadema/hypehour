import { ChevronDownIcon } from "@heroicons/react/24/solid";
export default function ExpandableContent() {
    return (
        <div className="mb-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                    <strong>Aprender inglês com IA</strong> nunca foi tão acessível e eficiente para brasileiros. As novas ferramentas de inteligência artificial atuam como professores particulares disponíveis 24 horas: corrigem pronúncia em tempo real, explicam erros gramaticais com exemplos contextualizados e criam conversações simuladas sobre os temas que você realmente usa no dia a dia — seja no trabalho, em viagens ou nas redes sociais.
                </p>
                <p className="mb-4">
                    O diferencial da <strong>IA no aprendizado de idiomas</strong> está na personalização extrema. Enquanto cursos tradicionais seguem um currículo fixo, a IA adapta cada sessão ao seu nível atual, identifica seus pontos fracos específicos e sugere exercícios direcionados para superá-los. Essa abordagem <strong>reduz drasticamente o tempo</strong> necessário para atingir fluência conversacional em comparação aos métodos convencionais.
                </p>
            </div>
            <details className="group">
                <summary className="mt-4 flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors cursor-pointer list-none">
                    <span>Ver mais</span>
                    <ChevronDownIcon className="w-5 h-5 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <h2 className="font-semibold text-lg mb-3 text-gray-900 mt-4">Estratégias para Aprender Inglês mais Rápido com IA</h2>
                <ul className="space-y-3 mb-4">
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Conversação diária:</strong> Pratique pelo menos 15 minutos por dia de conversação com IA em tópicos do seu trabalho ou interesse — consistência supera intensidade esporádica na construção da fluência.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Correção de pronúncia fonema a fonema:</strong> Aplicativos com reconhecimento de fala avançado identificam exatamente quais sons do inglês você pronuncia com sotaque brasileiro e criam exercícios fonéticos específicos para corrigi-los.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Vocabulário contextual:</strong> Aprenda palavras novas dentro de frases e situações reais, não em listas isoladas — a IA cria contextos relevantes para sua área profissional e objetivos pessoais.</span></li>
                    <li className="flex gap-2"><span className="text-gray-900 font-bold">•</span><span><strong>Imersão assistida:</strong> Use IA para entender séries, músicas e podcasts em inglês — traduza, explique expressões idiomáticas e pratique shadow speaking com suporte e feedback imediato.</span></li>
                </ul>
                <p>Confira abaixo os melhores aplicativos e ferramentas de IA para aprender inglês, selecionados para diferentes objetivos, do básico ao inglês profissional avançado.</p>
            </details>
        </div>
    );
}
