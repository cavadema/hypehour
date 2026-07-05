import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA pode ajudar no planejamento e produtividade pessoal?",
        "a": "A IA ajuda a estruturar metas, quebrar projetos em tarefas menores, priorizar atividades com base em impacto e urgência, criar cronogramas realistas e identificar gargalos de produtividade — funcionando como um coach de produtividade disponível 24 horas."
    },
    {
        "q": "Quais ferramentas de IA são melhores para planejamento e organização?",
        "a": "Notion AI para notas e projetos, Reclaim AI para gestão inteligente de agenda, Motion para priorização automática de tarefas, Todoist com IA para gerenciamento de tarefas e ChatGPT para planejamento estratégico conversacional."
    },
    {
        "q": "O Notion AI vale a pena para planejamento?",
        "a": "Sim, especialmente se você já usa o Notion. O Notion AI resume reuniões, gera sumários de projetos, cria planos de ação a partir de notas brutas, analisa seu backlog e ajuda a manter documentação de projeto atualizada com menos esforço."
    },
    {
        "q": "Como usar IA para criar um planejamento anual eficaz?",
        "a": "Descreva seus objetivos ao Claude ou ChatGPT com contexto sobre sua vida profissional e pessoal. A IA ajuda a estruturar OKRs, quebrar metas anuais em trimestres, identificar dependências e criar marcos de revisão — transformando ambições vagas em planos acionáveis."
    },
    {
        "q": "IA pode gerenciar minha agenda automaticamente?",
        "a": "Sim. Ferramentas como Reclaim AI e Motion analisam suas tarefas, compromissos e padrões de produtividade para agendar automaticamente blocos de trabalho focado, reuniões e pausas no Google Calendar — adaptando-se a mudanças em tempo real."
    },
    {
        "q": "Como usar IA para priorizar tarefas quando tudo parece urgente?",
        "a": "Descreva sua lista de tarefas com contexto sobre prazos, impacto e dependências ao Claude ou ChatGPT. A IA aplica frameworks como Matriz de Eisenhower, método MoSCoW ou RICE para sugerir uma ordem de execução racional."
    },
    {
        "q": "IA pode ajudar no planejamento de projetos para equipes?",
        "a": "Sim. Ferramentas como Linear AI, Asana com IA e ClickUp com IA assistem no breakdown de projetos em tarefas, estimativa de esforço, identificação de riscos e redistribuição de carga quando membros ficam sobrecarregados."
    },
    {
        "q": "Como usar IA para superar procrastinação e falta de foco?",
        "a": "IA pode ajudar a identificar por que você está procrastinando (medo de falhar, tarefa vaga, falta de energia), quebrar a tarefa em passos menores e menos intimidadores, e criar accountability simbólico ao declarar intenções ao assistente."
    },
    {
        "q": "IA pode criar templates de planejamento semanal personalizados?",
        "a": "Sim. Descreva sua rotina, compromissos fixos, objetivos e estilo de trabalho ao ChatGPT ou Claude e receba um template de planejamento semanal no Notion, Markdown ou Google Docs — personalizado para o seu contexto e método preferido."
    },
    {
        "q": "Como integrar IA ao método GTD (Getting Things Done)?",
        "a": "Use o Claude para processar sua inbox de captura — classificando itens em próximas ações, projetos, um dia/talvez e referência. Configure automações no n8n para capturar itens de e-mail e WhatsApp e organizá-los automaticamente no seu sistema GTD."
    },
    {
        "q": "IA pode ajudar no planejamento financeiro pessoal?",
        "a": "Sim. Com dados de receitas e despesas, a IA cria orçamentos personalizados, identifica gastos desnecessários, projeta economias para objetivos específicos e sugere ajustes baseados nos padrões de consumo — tornando o planejamento financeiro mais acessível."
    },
    {
        "q": "Como usar IA para criar um plano de estudos para concursos ou certificações?",
        "a": "Informe o edital ou conteúdo programático, o tempo disponível por dia e a data da prova ao Claude ou ChatGPT. A IA cria um cronograma de estudos detalhado com distribuição de temas, revisões espaçadas e simulados — otimizando o tempo de preparação."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Planejamento e Produtividade</h2>
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
