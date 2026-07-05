import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA está sendo usada na advocacia e nos escritórios de direito?",
        "a": "A IA auxilia em pesquisa jurisprudencial, revisão e análise de contratos, geração de petições e pareceres iniciais, due diligence em M&A, classificação de documentos em litígios e automatização de tarefas administrativas como timesheet e faturamento."
    },
    {
        "q": "Quais ferramentas de IA são mais usadas por advogados no Brasil?",
        "a": "JusBrasil com IA para jurisprudência, Harvey AI para pesquisa e redação jurídica, Clio Duo para gestão de escritório, além de ChatGPT e Claude para rascunhos de documentos. Ferramentas específicas para o direito brasileiro ainda são limitadas comparado ao mercado americano."
    },
    {
        "q": "IA pode substituir advogados?",
        "a": "Não. A IA automatiza pesquisa, revisão e rascunhos, mas o julgamento jurídico, a estratégia processual, a advocacia em audiências e a responsabilidade ética sobre os atos praticados são intransferíveis para máquinas. IA amplifica, não substitui o advogado."
    },
    {
        "q": "É ético usar IA para redigir petições e documentos jurídicos?",
        "a": "Sim, desde que o advogado revise, assuma responsabilidade e garanta a precisão do conteúdo. A OAB não proíbe o uso de IA como ferramenta de suporte — o que é vedado é assinar documentos com erros factuais ou jurídicos sem revisão adequada."
    },
    {
        "q": "Como usar IA para pesquisa jurisprudencial no Brasil?",
        "a": "JusBrasil tem funcionalidades de IA para busca de jurisprudência. Você também pode usar Claude ou ChatGPT como ponto de partida, mas sempre valide citações em fontes primárias — alucinação de jurisprudência inexistente é um risco real com LLMs genéricos."
    },
    {
        "q": "IA pode analisar contratos e identificar riscos jurídicos?",
        "a": "Sim. Claude (com sua janela de contexto longa) e ferramentas específicas como Luminance e Kira analisam contratos identificando cláusulas problemáticas, obrigações assimétricas, penalidades e inconsistências com a legislação aplicável."
    },
    {
        "q": "Como a IA pode ajudar em due diligence jurídica?",
        "a": "IA acelera drasticamente a due diligence em M&A e investimentos: classifica automaticamente centenas de documentos por relevância, extrai termos-chave de contratos, identifica passivos ocultos e gera relatórios consolidados em horas, não semanas."
    },
    {
        "q": "IA pode ajudar na gestão financeira de escritórios de advocacia?",
        "a": "Sim. Plataformas como Clio com IA automatizam timesheet, faturamento, controle de prazos processuais e gestão de honorários — liberando advogados e gestores para focar na advocacia em vez da administração."
    },
    {
        "q": "Como usar IA para acompanhar prazos processuais automaticamente?",
        "a": "Ferramentas de gestão de escritório como Projuris, LegalOne e SAJ ADV integram com os tribunais eletrônicos e usam IA para monitorar movimentações processuais e alertar automaticamente sobre prazos críticos."
    },
    {
        "q": "É possível usar IA para criar contratos a partir de modelos?",
        "a": "Sim. Com Claude ou ChatGPT e um bom prompt de sistema com instruções sobre o tipo de contrato, partes, objeto e cláusulas essenciais, é possível gerar rascunhos iniciais de contratos que o advogado revisa e adapta — reduzindo significativamente o tempo de elaboração."
    },
    {
        "q": "Dados de clientes são seguros ao usar IA jurídica?",
        "a": "Atenção crítica aqui. Usar informações confidenciais de clientes em ferramentas de IA públicas pode violar o sigilo profissional. Para uso com dados de clientes, escolha plataformas com contratos de privacidade enterprise e política de não uso de dados para treinamento."
    },
    {
        "q": "Como a IA pode ajudar na triagem de casos em escritórios de alto volume?",
        "a": "IA classifica automaticamente novos casos por área, complexidade e urgência, extrai informações-chave dos documentos do cliente e gera resumo inicial para o advogado responsável — acelerando o onboarding de clientes e a alocação de recursos."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Advogados</h2>
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
