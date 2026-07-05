import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA pode ajudar professores no dia a dia?",
        "a": "A IA auxilia na criação de planos de aula, elaboração de atividades e provas, geração de exercícios diferenciados, correção automática de redações, feedback personalizado para alunos e redução do tempo gasto em tarefas administrativas."
    },
    {
        "q": "Quais ferramentas de IA são mais úteis para professores brasileiros?",
        "a": "ChatGPT e Claude para planejamento e criação de conteúdo, Conker para geração de quizzes, Diffit para simplificação de textos por nível de leitura, Canva Edu para materiais visuais, e NotebookLM para estudo e síntese de materiais didáticos."
    },
    {
        "q": "IA pode criar planos de aula completos em português?",
        "a": "Sim. Descreva ao ChatGPT ou Claude o tema, ano escolar, tempo de aula e objetivos de aprendizagem e receba um plano completo com introdução, desenvolvimento, atividades, materiais necessários e avaliação — em minutos."
    },
    {
        "q": "Como usar IA para criar provas e questões de múltipla escolha?",
        "a": "Ferramentas como Conker, Quizgecko e o próprio ChatGPT geram questões de múltipla escolha, V ou F e dissertativas sobre qualquer conteúdo. Especifique o nível de dificuldade, a competência avaliada e o alinhamento com a BNCC."
    },
    {
        "q": "IA pode ajudar a adaptar conteúdo para alunos com necessidades especiais?",
        "a": "Sim. Ferramentas como Diffit simplificam textos para diferentes níveis de leitura. A IA pode reformular explicações em linguagem mais acessível, criar materiais com mais suporte visual e sugerir adaptações para diferentes perfis de aprendizagem."
    },
    {
        "q": "Como detectar se um aluno usou IA para fazer a tarefa?",
        "a": "Ferramentas como GPTZero e Originality.AI identificam características estatísticas de texto gerado por IA. Porém, o melhor antídoto pedagógico é criar tarefas que exijam reflexão pessoal, contextualização local e experiências únicas do aluno."
    },
    {
        "q": "IA pode corrigir redações e dar feedback construtivo?",
        "a": "Sim. ChatGPT, Claude e ferramentas específicas como Grammarly for Education analisam redações em português, identificam erros de coesão, coerência, gramática e ortografia, e geram feedback detalhado e personalizado para cada aluno."
    },
    {
        "q": "Como integrar IA nas aulas sem substituir o aprendizado ativo dos alunos?",
        "a": "Use IA como ponto de partida, não de chegada. Peça para alunos questionar, verificar e expandir o que a IA produz. Atividades de 'audit de IA' — identificar erros no output da IA — desenvolvem pensamento crítico de forma altamente engajante."
    },
    {
        "q": "IA pode ajudar professores a criar material didático para EAD?",
        "a": "Sim. Além de textos e questões, a IA ajuda a criar scripts para vídeoaulas, roteiros de atividades interativas, fóruns de discussão temáticos, e até vozes sintéticas para narrar conteúdos gravados sem a presença do professor."
    },
    {
        "q": "Existe política de uso de IA nas escolas brasileiras?",
        "a": "A discussão está em andamento. Muitas escolas particulares já adotaram diretrizes próprias. O MEC e o CNE discutem referências nacionais. O consenso emergente é integrar eticamente em vez de proibir, desenvolvendo letramento em IA desde cedo."
    },
    {
        "q": "Como usar IA para diferenciação pedagógica na sala de aula?",
        "a": "Gere versões do mesmo conteúdo em três níveis de complexidade: básico, intermediário e avançado. A IA produz atividades, textos e exemplos calibrados para cada perfil, permitindo ao professor atender às diferentes necessidades da turma sem triplicar o trabalho."
    },
    {
        "q": "IA pode criar rubricas de avaliação para diferentes atividades?",
        "a": "Sim. Descreva a atividade, os objetivos de aprendizagem e os critérios importantes e o ChatGPT ou Claude gera uma rubrica completa com descritores por nível de desempenho — alinhada à BNCC e pronta para uso ou adaptação."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Professores</h2>
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
