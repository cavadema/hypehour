import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Quais ferramentas de IA para RH são mais usadas no Brasil?",
        "a": "Gupy e Kenoby lideram em recrutamento e seleção no mercado brasileiro, com IA para triagem de currículos e testes online. Para gestão de desempenho, Qulture.Rocks e Feedz têm forte adoção. Internacionalmente, Workday AI, SAP SuccessFactors e Factorial também são utilizados por empresas brasileiras de médio e grande porte."
    },
    {
        "q": "Como a IA pode reduzir o tempo de contratação no RH?",
        "a": "IA automatiza as etapas mais demoradas: triagem de currículos (de dias para minutos), agendamento automático de entrevistas via chatbot, aplicação e correção de testes técnicos online e ranqueamento de candidatos. Times de RH que adotam IA relatam redução de 40% a 60% no tempo médio de contratação (time-to-hire)."
    },
    {
        "q": "IA no RH cria viés nos processos seletivos?",
        "a": "Depende de como é implementada. IA treinada em dados históricos pode perpetuar vieses existentes. Ferramentas modernas como Pymetrics e ferramentas com IA explicável mitigam isso anonimizando candidatos, usando dados comportamentais em vez de currículos e auditando regularmente os resultados por diversidade. É essencial monitorar os outputs."
    },
    {
        "q": "O que é análise preditiva de turnover e como funciona?",
        "a": "É o uso de IA para identificar colaboradores com alta probabilidade de pedir demissão antes que isso aconteça. O modelo analisa dados como frequência de ausências, resultados de pesquisas de clima, tempo na função, ciclos de promoção, comparativo salarial e mudanças no padrão de comportamento para gerar um score de risco individual."
    },
    {
        "q": "Como usar IA para onboarding de novos colaboradores?",
        "a": "Chatbots treinados na base de conhecimento da empresa respondem dúvidas dos recém-chegados 24/7 sobre benefícios, políticas e processos. Plataformas como Workleap Onboard e BambooHR criam trilhas de onboarding personalizadas por cargo, departamento e localidade — aumentando o engajamento e reduzindo o tempo para plena produtividade."
    },
    {
        "q": "IA pode ajudar na gestão de desempenho e avaliações 360?",
        "a": "Sim. Ferramentas como Lattice, Leapsome e Qulture.Rocks usam IA para analisar feedbacks em texto livre, identificar padrões de alto e baixo desempenho, sugerir planos de desenvolvimento individualizados e eliminar o viés do avaliador (halo effect, recency bias) por meio de análises baseadas em dados longitudinais."
    },
    {
        "q": "Como ferramentas de IA ajudam no planejamento de sucessão?",
        "a": "Eightfold AI e ferramentas similares mapeiam todas as competências dos colaboradores, identificam automaticamente os melhores candidatos internos para cada posição de liderança e cruzam com planos de carreira. Isso transforma sucessão de um exercício manual e subjetivo em um processo orientado a dados e meritocrático."
    },
    {
        "q": "IA pode ajudar a personalizar benefícios e remuneração?",
        "a": "Sim. Ferramentas como Mercer e Willis Towers Watson usam IA para analisar dados de mercado e recomendar faixas salariais competitivas por cargo, região e setor. Algumas plataformas permitem que colaboradores personalizem seus pacotes de benefícios dentro de um orçamento fixo, com IA sugerindo composições com base em perfil demográfico."
    },
    {
        "q": "Como a LGPD afeta o uso de IA em processos de RH no Brasil?",
        "a": "A LGPD exige base legal para coletar e processar dados de candidatos e colaboradores, transparência sobre decisões automatizadas que afetam a relação de trabalho e o direito de revisão humana de decisões tomadas por IA. Ferramentas de RH com IA devem ter DPA (Data Processing Agreement) e processar dados preferencialmente em servidores no Brasil ou com adequação LGPD."
    },
    {
        "q": "Quais tarefas administrativas de RH a IA pode automatizar completamente?",
        "a": "Agendamento e reagendamento de entrevistas, resposta a dúvidas frequentes de colaboradores, geração de contratos e cartas oferta, cálculo e validação de férias e horas extras, processamento de documentos de admissão e demissão, e envio de lembretes de avaliações e treinamentos obrigatórios são tarefas altamente automatizáveis com IA."
    },
    {
        "q": "Como medir o ROI de ferramentas de IA no RH?",
        "a": "Os principais indicadores são: redução no custo por contratação (CPH), diminuição no tempo de preenchimento de vagas (time-to-fill), queda na taxa de turnover nos primeiros 90 dias, aumento no eNPS (Employee Net Promoter Score) e horas de trabalho administrativo economizadas por mês. A maioria das empresas atinge ROI positivo em 6 a 12 meses."
    },
    {
        "q": "IA para RH é viável para pequenas e médias empresas?",
        "a": "Sim. Ferramentas como Factorial, Gupy e Tangerino têm planos acessíveis pensados para PMEs. Chatbots com ChatGPT API para responder dúvidas de colaboradores custam menos de R$200/mês para configurar. O Notion AI pode estruturar documentação de RH e políticas. A barreira de entrada caiu drasticamente nos últimos dois anos."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Ferramentas de IA para RH</h2>
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
