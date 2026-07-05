import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA pode ajudar com planilhas no Excel e Google Sheets?",
        "a": "A IA escreve fórmulas complexas a partir de descrições em português, limpa e organiza dados automaticamente, cria gráficos com base em solicitações textuais, identifica erros e anomalias e explica funções que você não conhece."
    },
    {
        "q": "Qual a melhor ferramenta de IA para trabalhar com planilhas?",
        "a": "Excelmatic, Julius AI e o ChatGPT com Code Interpreter são os mais usados para análise de planilhas por chat. Para Excel especificamente, o Copilot para Microsoft 365 integra IA diretamente na interface do Excel."
    },
    {
        "q": "IA pode escrever fórmulas do Excel para mim?",
        "a": "Sim. Descreva o que a fórmula precisa fazer em português — 'somar valores da coluna B onde a coluna A contém o texto São Paulo' — e ferramentas como Formula Bot, ChatGPT ou o Copilot do Excel geram a fórmula correta imediatamente."
    },
    {
        "q": "É possível analisar planilhas grandes com IA sem programar?",
        "a": "Sim. Julius AI e ChatGPT com Code Interpreter permitem fazer upload de planilhas CSV ou Excel e fazer perguntas em linguagem natural — 'qual produto teve maior crescimento em março?' — recebendo análises, gráficos e insights sem escrever código."
    },
    {
        "q": "Como usar IA para criar dashboards no Google Sheets?",
        "a": "Descreva o dashboard desejado ao Claude ou ChatGPT com o contexto das suas planilhas. A IA sugere a estrutura, as fórmulas necessárias, os tipos de gráfico mais adequados e até gera o script Apps Script para automatizar atualizações."
    },
    {
        "q": "IA pode limpar e organizar dados bagunçados em planilhas?",
        "a": "Sim. Com Code Interpreter ou ferramentas como Akkio, você faz upload da planilha com dados sujos — formatação inconsistente, células vazias, duplicatas — e a IA aplica regras de limpeza, padroniza formatos e exporta a versão tratada."
    },
    {
        "q": "Como usar Google Sheets com IA (Gemini) integrado?",
        "a": "Gemini for Google Workspace integra IA diretamente no Google Sheets. Você pode pedir 'crie uma tabela de controle de estoque com as colunas X, Y, Z' ou 'analise essa planilha e me diga quais vendedores estão abaixo da meta' diretamente na interface."
    },
    {
        "q": "IA pode criar macros e scripts VBA para Excel automaticamente?",
        "a": "Sim. Descreva a automação desejada em português e o ChatGPT, Claude ou Copilot geram o código VBA completo para você copiar e executar no Excel — mesmo sem conhecimento prévio de programação."
    },
    {
        "q": "Como usar IA para previsões e projeções em planilhas?",
        "a": "Com Julius AI ou o ChatGPT com Code Interpreter, faça upload do histórico de dados e peça previsões: 'projeto a receita dos próximos 6 meses com base nessa série temporal'. A IA aplica modelos estatísticos e explica as premissas."
    },
    {
        "q": "Ferramentas de IA para planilhas funcionam com dados em português?",
        "a": "Sim. As principais ferramentas reconhecem nomes de meses em português, formatos de datas e números brasileiros (vírgula como separador decimal). Verifique a configuração regional ao importar planilhas para evitar erros de interpretação."
    },
    {
        "q": "É possível conectar planilhas com IAs para atualização automática?",
        "a": "Sim. Com n8n, Make ou o Google Apps Script, você cria automações que atualizam planilhas automaticamente: dados de CRM, vendas do e-commerce, métricas de redes sociais — tudo consolidado sem trabalho manual."
    },
    {
        "q": "Quanto custa usar IA para trabalhar com planilhas?",
        "a": "Julius AI tem plano gratuito com limitações e planos pagos a partir de US$20/mês. Excelmatic oferece 10 análises gratuitas. ChatGPT Plus (R$100/mês) com Code Interpreter é uma opção versátil para planilhas e muitas outras tarefas."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Planilhas</h2>
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
