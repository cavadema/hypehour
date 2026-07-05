import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA está sendo usada no desenvolvimento de jogos?",
        "a": "A IA acelera criação de assets (sprites, texturas, concept art), geração de código para mecânicas de jogo, criação de diálogos de NPCs, composição de trilhas sonoras, level design procedural e testes automatizados de qualidade."
    },
    {
        "q": "Qual a diferença entre IA no jogo (NPCs inteligentes) e IA para desenvolver jogos?",
        "a": "IA dentro do jogo controla comportamento de personagens, dificuldade adaptativa e geração de conteúdo em tempo real. IA para desenvolvimento de jogos são ferramentas usadas pelos desenvolvedores para criar o jogo mais rapidamente e com menos recursos."
    },
    {
        "q": "Quais ferramentas de IA são mais usadas por game developers?",
        "a": "Stable Diffusion e Midjourney para arte conceitual e assets 2D/3D, Meshy e Luma AI para geração de modelos 3D, GitHub Copilot e Cursor para código de jogo, Suno e Udio para trilhas sonoras, e Convai para NPCs com diálogo com IA."
    },
    {
        "q": "É possível criar um jogo completo usando apenas IA?",
        "a": "Jogos simples 2D já foram criados quase inteiramente com IA por desenvolvedores solo. Jogos mais complexos ainda exigem curadoria humana significativa — mas a IA reduz drasticamente o tempo e custo de produção de assets, código boilerplate e documentação."
    },
    {
        "q": "Como usar IA para gerar assets de jogo (sprites, texturas, ícones)?",
        "a": "Leonardo AI tem ferramentas específicas para game assets com estilos consistentes. Stable Diffusion com treinamento de LoRA permite manter coerência visual entre personagens e ambientes. Adobe Firefly gera assets com licença comercial clara."
    },
    {
        "q": "IA pode gerar música e efeitos sonoros para jogos?",
        "a": "Sim. Suno AI e Udio geram trilhas musicais completas para qualquer gênero de jogo (RPG, ação, horror, puzzle). Soundraw permite criar loops musicais adaptáveis. ElevenLabs gera vozes de personagens a partir de texto."
    },
    {
        "q": "Como criar NPCs com diálogo dinâmico e inteligente usando IA?",
        "a": "Convai, Inworld AI e APIs do ChatGPT permitem criar NPCs que respondem dinamicamente às perguntas dos jogadores em linguagem natural, em vez de seguir apenas árvores de diálogo pré-programadas — criando experiências muito mais imersivas."
    },
    {
        "q": "IA pode ajudar no level design de jogos?",
        "a": "Sim. Algoritmos de level design procedural com IA geram mapas, dungeons e mundos abertos com regras de design definidas. Unity e Unreal Engine têm plugins de IA para geração de terreno, vegetação e estruturas automaticamente."
    },
    {
        "q": "Como usar IA para testar jogos automaticamente?",
        "a": "Agentes de IA podem jogar o jogo autonomamente, explorando todas as áreas, tentando quebrar mecânicas e identificando bugs — processo que com QA humano levaria semanas. GameBench e ferramentas custom com LangChain são usados para isso."
    },
    {
        "q": "Game engines como Unity e Unreal têm suporte nativo a IA?",
        "a": "Sim. Unity tem o Muse AI integrado para geração de assets e código. Unreal tem ferramentas de IA para geração de conteúdo e animação. Ambas têm ecossistema crescente de plugins de terceiros que integram modelos de IA."
    },
    {
        "q": "Qual o impacto da IA nos custos de desenvolvimento de jogos indie?",
        "a": "Significativo. Desenvolvedores solo e pequenos estúdios indie usam IA para produzir arte, música e código que antes exigiria uma equipe multidisciplinar. Estimativas indicam redução de 30 a 70% no custo de produção de assets para jogos indie."
    },
    {
        "q": "Como criar modelos 3D para jogos usando IA?",
        "a": "Meshy AI e Luma AI geram modelos 3D a partir de fotos ou descrições em texto. Kaedim transforma concept art 2D em modelos 3D. Point-E da OpenAI permite geração de point clouds 3D. A qualidade ainda requer refinamento humano para uso em jogos AAA."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    return (
        <details className="border-b border-gray-200 last:border-0 group" open={index < 5}>
            <summary className="flex w-full items-center justify-between py-4 text-left cursor-pointer list-none focus:outline-none">
                <span className="font-medium text-gray-900">{question}</span>
                <ChevronDownIcon
                    className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                />
            </summary>
            <p className="text-gray-600 leading-relaxed mb-4">{answer}</p>
        </details>
    );
}


export default function FAQSection() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="mt-12 mb-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Desenvolvimento de Jogos</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.q}
                        answer={faq.a}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
