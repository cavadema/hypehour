import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA pode ajudar nos investimentos?",
        "a": "A IA analisa grandes volumes de dados financeiros para identificar tendências, avaliar risco de ativos, personalizar carteiras, automatizar operações de trading e fornecer insights baseados em dados que seriam impossíveis de processar manualmente."
    },
    {
        "q": "IA pode fazer análises de ações da Bolsa brasileira (B3)?",
        "a": "Sim. Ferramentas especializadas e APIs de dados financeiros permitem análise técnica e fundamentalista de ativos da B3 com IA. Plataformas como Trade Ideas e sistemas customizados com Python (yfinance, pandas) são usados por investidores brasileiros."
    },
    {
        "q": "O que são robôs traders com IA?",
        "a": "São sistemas algorítmicos que usam machine learning para identificar padrões de mercado e executar ordens automaticamente com base em regras definidas ou modelos preditivos — operando sem emoção e em velocidades impossíveis para humanos."
    },
    {
        "q": "IA consegue prever o preço de ações?",
        "a": "IA pode identificar padrões e probabilidades, mas não prevê preços com certeza. Mercados são sistemas complexos influenciados por fatores imprevisíveis. Use IA como ferramenta de apoio à decisão, não como oráculo infalível."
    },
    {
        "q": "Como usar IA para analisar FIIs (Fundos de Investimento Imobiliário)?",
        "a": "Com Python e bibliotecas de dados financeiros, você pode automatizar a análise de P/VP, dividend yield, vacância e histórico de distribuição de FIIs da B3. Ferramentas como Fundsexplorer têm recursos de comparação e IA em desenvolvimento."
    },
    {
        "q": "IA pode ajudar a montar uma carteira de investimentos diversificada?",
        "a": "Sim. Robo-advisors como Warren e plataformas com IA utilizam teoria moderna de portfólio e machine learning para sugerir alocações personalizadas com base no perfil de risco, horizonte de investimento e objetivos financeiros do investidor."
    },
    {
        "q": "O que é análise de sentimento de mercado com IA?",
        "a": "Sistemas de IA analisam notícias, redes sociais, relatórios de analistas e dados macroeconômicos para avaliar o sentimento geral sobre um ativo ou mercado — sinalizando quando o pessimismo ou otimismo excessivo pode representar oportunidade."
    },
    {
        "q": "Robo-advisors brasileiros são confiáveis para investir?",
        "a": "Plataformas como Warren, Magnetis e XP Investimentos com ferramentas de IA são reguladas pela CVM e ANBIMA. Oferecem diversificação automática com custo menor que gestão ativa tradicional — adequados para perfis moderados e de longo prazo."
    },
    {
        "q": "Como usar ChatGPT ou Claude para aprender sobre investimentos?",
        "a": "Excelentes para educação financeira: explique conceitos, simulate cenários de portfólio, calcule projeções de juros compostos e entenda produtos financeiros complexos. Nunca use como conselho financeiro personalizado — para isso, consulte um CFP certificado."
    },
    {
        "q": "IA pode detectar fraudes e irregularidades em demonstrações financeiras?",
        "a": "Sim. Modelos de machine learning treinados em demonstrações financeiras identificam padrões anômalos que podem indicar manipulação contábil, comparando com empresas do mesmo setor e histórico da própria companhia."
    },
    {
        "q": "O que é quant trading e como IA é usada?",
        "a": "Quant trading usa modelos matemáticos e estatísticos — cada vez mais baseados em machine learning — para identificar ineficiências de mercado e executar operações de alta frequência ou sistemáticas. É o domínio de hedge funds quantitativos como Renaissance Technologies."
    },
    {
        "q": "Como acompanhar notícias e eventos que afetam investimentos usando IA?",
        "a": "Ferramentas de monitoramento com IA como Feedly com IA, Perplexity e sistemas customizados com RSS e LLMs coletam e resumem automaticamente notícias relevantes para seus ativos — alertando quando eventos materiais ocorrem."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Investimentos</h2>
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
