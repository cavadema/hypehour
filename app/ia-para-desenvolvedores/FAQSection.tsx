import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Quais as melhores ferramentas de IA para desenvolvedores em 2026?",
        "a": "Cursor, GitHub Copilot, Cline (VS Code), Windsurf e Claude com Projects são as mais usadas. Para revisão de código e arquitetura, Claude 3.5 Sonnet é frequentemente preferido por sua capacidade de analisar bases de código extensas."
    },
    {
        "q": "GitHub Copilot vs Cursor: qual escolher?",
        "a": "Copilot integra diretamente ao GitHub e VS Code com completions inline muito eficientes. Cursor é um editor completo baseado em VS Code com capacidade de editar múltiplos arquivos de uma vez e entender o contexto do projeto todo — preferido para refatoração e features complexas."
    },
    {
        "q": "IA realmente aumenta a produtividade de desenvolvedores?",
        "a": "Estudos mostram ganhos de 20% a 55% em velocidade de implementação. O impacto é maior em código boilerplate, geração de testes, documentação e debugging — tarefas que costumam consumir tempo desproporcional ao valor entregue."
    },
    {
        "q": "IA pode escrever código seguro? Existe risco de vulnerabilidades?",
        "a": "É um risco real. Modelos de IA podem sugerir código com vulnerabilidades conhecidas se treinados em código inseguro. Sempre revise criticamente o código gerado, especialmente em funções de autenticação, criptografia e input de usuário."
    },
    {
        "q": "Como usar IA para debugging e resolução de erros?",
        "a": "Cole o stack trace e o código relevante no chat do Claude ou ChatGPT e peça explicação do erro e solução. Para erros complexos, use o Cursor com modo Agent para que a IA possa navegar pela base de código autonomamente e propor correções."
    },
    {
        "q": "IA pode gerar testes automatizados para meu código?",
        "a": "Sim, e com qualidade razoável. Claude e Copilot geram testes unitários, de integração e mocks com base no código existente. Ainda é necessário revisar a cobertura e adicionar casos extremos que a IA pode não antecipar."
    },
    {
        "q": "Como IA ajuda na migração de código legado?",
        "a": "Ferramentas como Claude com contexto longo conseguem analisar bases de código antigas, explicar o funcionamento, identificar dependências e sugerir estratégias de migração gradual para tecnologias modernas — acelerando muito um processo tipicamente lento."
    },
    {
        "q": "É seguro usar IA com código proprietário da minha empresa?",
        "a": "Verifique a política de privacidade de cada ferramenta. GitHub Copilot Business e Claude Enterprise têm contratos que garantem que o código não é usado para treinamento. Para código altamente sensível, considere modelos open source rodando localmente."
    },
    {
        "q": "IA pode criar APIs e backends completos?",
        "a": "Sim, especialmente com ferramentas como Cursor em modo Agent ou Claude com Projects. A IA gera endpoints, models, validações e até configurações de deploy. A revisão de arquitetura e segurança ainda é responsabilidade do desenvolvedor."
    },
    {
        "q": "Como usar IA para aprender novas linguagens de programação mais rápido?",
        "a": "Use a IA como tutor interativo: peça explicações de conceitos, análise de código que você escreveu, traduções de lógica de uma linguagem que você conhece para a nova, e exercícios progressivos adaptados ao seu nível."
    },
    {
        "q": "IA pode ajudar na criação de documentação técnica?",
        "a": "Excelente para isso. Cole funções, classes ou módulos inteiros e peça ao Claude ou ChatGPT para gerar documentação JSDoc, docstrings Python, README, changelog ou artigos técnicos explicando a arquitetura."
    },
    {
        "q": "O que é vibe coding e como se diferencia do desenvolvimento assistido por IA?",
        "a": "Vibe coding é a prática de descrever o que você quer em linguagem natural e deixar a IA construir quase tudo, com mínima intervenção técnica. Desenvolvimento assistido por IA pressupõe um desenvolvedor revisando e direcionando cada geração."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Desenvolvedores</h2>
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
