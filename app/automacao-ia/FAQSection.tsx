import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que é automação com IA e como difere da automação tradicional?",
        "a": "Automação com IA vai além de scripts e gatilhos fixos: ela usa modelos de linguagem para tomar decisões, interpretar conteúdo e lidar com variações não previstas — enquanto a automação tradicional falha quando algo foge do padrão."
    },
    {
        "q": "Qual a diferença entre n8n, Make e Zapier?",
        "a": "Zapier é o mais simples e caro, ideal para quem não tem conhecimento técnico. Make (Makaton) tem fluxos visuais poderosos com bom custo-benefício. n8n é open source, auto-hospedável e mais flexível para desenvolvedores."
    },
    {
        "q": "Preciso saber programar para criar automações com IA?",
        "a": "Com ferramentas como Make e Zapier, não — a maioria das automações é feita arrastando blocos visuais. Para casos mais avançados com n8n ou automações via código, algum conhecimento de JavaScript ou Python ajuda muito."
    },
    {
        "q": "O que é possível automatizar com IA em uma pequena empresa?",
        "a": "Resposta automática a e-mails e mensagens, classificação de leads, geração de propostas personalizadas, postagens em redes sociais, relatórios semanais, alimentação de planilhas e notificações inteligentes são exemplos comuns."
    },
    {
        "q": "Como integrar o ChatGPT ou Claude nas minhas automações?",
        "a": "Tanto n8n quanto Make e Zapier têm módulos nativos para OpenAI e Anthropic. Você conecta sua chave API e usa a IA como um nó de processamento dentro dos fluxos — por exemplo, para resumir um e-mail antes de enviá-lo a outro sistema."
    },
    {
        "q": "Quanto custa montar uma automação de IA funcional?",
        "a": "Com n8n auto-hospedado e Gemini ou GPT-4o Mini, o custo mensal pode ser inferior a R$100. Soluções no-code com Zapier e Make têm planos de R$50 a R$500/mês dependendo do número de tarefas automatizadas."
    },
    {
        "q": "O que são agentes de IA e como se diferem de automações simples?",
        "a": "Agentes de IA tomam decisões multi-passo: pesquisam na web, consultam ferramentas, analisam resultados e executam ações de forma autônoma. Automações simples seguem um fluxo fixo; agentes adaptam o caminho conforme o contexto."
    },
    {
        "q": "É seguro automatizar processos críticos com IA?",
        "a": "Para processos críticos, é recomendável manter revisão humana antes de ações irreversíveis (como envio de e-mails em massa ou deletar dados). Implante automações gradualmente, monitorando logs e erros antes de dar total autonomia."
    },
    {
        "q": "Posso automatizar o WhatsApp da minha empresa com IA?",
        "a": "Sim. Ferramentas como ManyChat, Typebot integrado à API oficial do WhatsApp Business e soluções no n8n permitem criar chatbots com IA que respondem automaticamente a clientes no WhatsApp."
    },
    {
        "q": "Quais são os melhores casos de uso de automação com IA para marketing?",
        "a": "Geração automática de copy para anúncios, publicação agendada com IA em redes sociais, personalização de e-mails em escala, categorização de leads e resposta automática a comentários são casos clássicos de alto ROI."
    },
    {
        "q": "n8n é gratuito? Como funciona o modelo de preços?",
        "a": "n8n é open source e pode ser auto-hospedado gratuitamente. A versão cloud paga começa em torno de US$20/mês com número limitado de fluxos ativos. A versão self-hosted tem custo apenas do servidor."
    },
    {
        "q": "Como medir o ROI de uma automação com IA?",
        "a": "Calcule o tempo economizado por tarefa, multiplique pela frequência e pelo custo/hora do colaborador. Compare com o custo mensal da ferramenta. A maioria das automações se paga em menos de 3 meses de operação."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Automação com IA</h2>
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
