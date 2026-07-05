import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Quais ferramentas de IA para contabilidade são mais usadas no Brasil?",
        "a": "Contabilone, Omie e Bling têm recursos de IA integrados para classificação automática de lançamentos e conciliação. Receipt Bank (agora Dext) e AutoEntry automatizam a captura e classificação de notas fiscais. Para análise financeira avançada, ferramentas como Tableau com IA e Power BI com Copilot são amplamente usadas por grandes escritórios."
    },
    {
        "q": "IA pode substituir contadores e técnicos em contabilidade?",
        "a": "Não. IA automatiza tarefas operacionais repetitivas — digitação, classificação, conciliação — mas a interpretação fiscal, o planejamento tributário, a consultoria estratégica e a responsabilidade técnica exigem julgamento humano e são exclusivos do contador. A tendência é que contadores que usam IA substituam contadores que não usam, não o profissional em si."
    },
    {
        "q": "Como a IA ajuda na gestão de obrigações acessórias no Brasil?",
        "a": "Ferramentas de contabilidade com IA monitoram prazos de entrega de SPED, EFD, ECF, DCTF, DeSTDA e outras obrigações, cruzam dados automaticamente para consistência entre declarações e sinalizam divergências antes do envio. Isso reduz drasticamente o risco de multas por inconsistência e atrasos na entrega de obrigações ao Fisco."
    },
    {
        "q": "IA pode ajudar na escolha do regime tributário ideal para minha empresa?",
        "a": "Sim. Ferramentas como o simulador de regime tributário com IA analisam faturamento, margem, folha de pagamento, setor de atuação e projeções de crescimento para recomendar entre Simples Nacional, Lucro Presumido e Lucro Real — com simulações de carga tributária em cada cenário para embasar a decisão."
    },
    {
        "q": "Como a IA pode reduzir o tempo de fechamento contábil mensal?",
        "a": "Automatizando conciliação bancária, classificação de lançamentos, apuração de impostos e geração de relatórios gerenciais. Escritórios que implementam IA no fechamento relatam redução de 50% a 70% no tempo dessa rotina, permitindo atender mais clientes com a mesma equipe ou liberar o time para atividades de maior valor como consultoria financeira."
    },
    {
        "q": "O que é OCR inteligente e como funciona na contabilidade?",
        "a": "OCR (Reconhecimento Ótico de Caracteres) com IA vai além da simples leitura de texto: extrai dados estruturados de notas fiscais em papel, PDFs ou fotos, identifica fornecedor, valor, data e natureza da operação, e classifica automaticamente no plano de contas. Ferramentas como Dext, AutoEntry e Nibo fazem isso para o contexto fiscal brasileiro."
    },
    {
        "q": "Como ferramentas de IA ajudam na auditoria e detecção de fraudes?",
        "a": "IA analisa 100% das transações (não amostras), identifica padrões anômalos como valores arredondados suspeitos, fornecedores fantasma, duplicidade de pagamentos e despesas fora do padrão histórico. Soluções como MindBridge AI Auditor e ACL Analytics têm sido adotadas por grandes escritórios de auditoria no Brasil."
    },
    {
        "q": "IA pode ajudar a identificar oportunidades de recuperação de créditos tributários?",
        "a": "Sim. Ferramentas especializadas analisam histórico de pagamentos de tributos, cruzam com a legislação aplicável e identificam pagamentos indevidos ou a maior de PIS, COFINS, ICMS e outros tributos — gerando relatórios com o potencial de recuperação para monetização via compensação ou restituição."
    },
    {
        "q": "Como preparar meu escritório contábil para a reforma tributária com IA?",
        "a": "A transição para o IBS/CBS exige reclassificação de produtos e serviços, adaptação de sistemas e entendimento de novos regimes. Ferramentas de IA que monitoram mudanças regulatórias, sugerem reclassificações e simulam impacto da reforma no fluxo de caixa dos clientes serão diferenciais competitivos para escritórios contábeis brasileiros a partir de 2026."
    },
    {
        "q": "Como a IA melhora o relacionamento entre contador e cliente?",
        "a": "Com rotinas automatizadas, contadores têm mais tempo para reuniões estratégicas, análise de resultados e orientação de negócios. Dashboards financeiros gerados por IA que os clientes podem acessar em tempo real aumentam a percepção de valor do serviço contábil — migrando o escritório de prestador de obrigações para parceiro estratégico de negócios."
    },
    {
        "q": "Ferramentas de IA para contabilidade são seguras para dados fiscais sensíveis?",
        "a": "Ferramentas sérias têm certificação SOC 2, criptografia em trânsito e em repouso, backups automáticos e conformidade com LGPD. Para dados altamente sensíveis, prefira ferramentas que processam dados no Brasil ou têm cláusulas contratuais específicas sobre localização de dados. Sempre leia os termos de serviço antes de migrar dados fiscais para qualquer plataforma."
    },
    {
        "q": "Como começar a implementar IA no meu escritório contábil?",
        "a": "Comece por um processo específico e de alto volume, como conciliação bancária ou classificação de notas fiscais. Escolha uma ferramenta integrada ao seu sistema atual (Omie, Bling, Contabilone) para minimizar mudanças. Treine a equipe, meça o tempo economizado e, com o ROI comprovado, expanda para outras áreas do escritório gradualmente."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Ferramentas de IA para Contabilidade</h2>
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
