import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Quais as melhores ferramentas de IA para criar apresentações?",
        "a": "Gamma, Beautiful.ai, Tome, Pitch e SlidesGo com IA são as mais populares. Gamma se destaca por criar apresentações completas a partir de um prompt em segundos, com design profissional automático."
    },
    {
        "q": "O Gamma realmente cria apresentações completas com IA?",
        "a": "Sim. Você descreve o tema em um prompt, escolhe o estilo visual e o Gamma gera uma apresentação completa com estrutura lógica, textos, ícones e imagens. O resultado pode ser editado e exportado como PDF ou PowerPoint."
    },
    {
        "q": "É possível usar IA para converter um documento Word ou PDF em apresentação?",
        "a": "Sim. Ferramentas como Gamma, SlidesAI e Beautiful.ai permitem importar documentos e gerar slides automaticamente com os pontos-chave extraídos e organizados visualmente pela IA."
    },
    {
        "q": "IA para apresentações funciona em português?",
        "a": "Sim. Gamma, Canva com Magic Design e ChatGPT para estruturação de conteúdo funcionam bem em português brasileiro. Descreva o tema em português e as ferramentas geram conteúdo no mesmo idioma."
    },
    {
        "q": "Como usar ChatGPT para criar apresentações no PowerPoint?",
        "a": "Use o ChatGPT para gerar a estrutura (sumário, tópicos por slide e textos), depois cole o conteúdo no PowerPoint ou use um plugin como SlideSpeak que integra ChatGPT diretamente com o PowerPoint para geração automática."
    },
    {
        "q": "IA pode criar apresentações para pitch de startup?",
        "a": "Sim. Ferramentas como Tome são muito usadas para pitches — elas conhecem a estrutura padrão (problema, solução, mercado, tração, equipe, pedido) e geram slides com visual limpo e profissional a partir da sua descrição."
    },
    {
        "q": "Apresentações geradas por IA são originais ou genéricas?",
        "a": "Dependem do prompt. Com informações específicas do seu negócio, dados reais e contexto claro, as apresentações de IA são bastante personalizadas. Sem contexto, ficam genéricas. Quanto mais detalhe você fornecer, melhor o resultado."
    },
    {
        "q": "Como a IA ajuda a melhorar apresentações já existentes?",
        "a": "Ferramentas de IA podem revisar o fluxo lógico, sugerir melhorias no design visual, simplificar textos longos, gerar dados de apoio e até criar versões alternativas de slides — como um consultor de design e conteúdo disponível a qualquer hora."
    },
    {
        "q": "IA para apresentações é gratuita?",
        "a": "A maioria oferece plano gratuito com limitações. Gamma tem plano gratuito generoso. Canva com Magic Design também. Para exportações avançadas, remoção de marca d'água e mais customizações, os planos pagos começam a partir de US$8/mês."
    },
    {
        "q": "Qual ferramenta de IA é melhor para apresentações corporativas formais?",
        "a": "Beautiful.ai é referência para apresentações corporativas elegantes com templates profissionais. Pitch é ótimo para colaboração em equipe. Ambas têm IA que sugere layouts e conteúdo alinhado com o tom empresarial."
    },
    {
        "q": "É possível criar infográficos dentro das apresentações com IA?",
        "a": "Sim. Ferramentas como Canva com IA e Visme geram infográficos automaticamente a partir de dados, criando visualizações de gráficos, timelines e comparativos com design profissional integrado à apresentação."
    },
    {
        "q": "Como criar apresentações de treinamento ou e-learning com IA?",
        "a": "Ferramentas como Articulate AI e iSpring Suite com IA permitem criar cursos e treinamentos interativos completos — com quizzes, cenários de simulação e avaliações — a partir de documentos existentes da empresa."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Criar Apresentações</h2>
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
