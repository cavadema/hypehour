import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que são ferramentas de IA para nutrição?",
        "a": "São aplicativos e sistemas que usam inteligência artificial para criar planos alimentares personalizados, analisar a composição nutricional de refeições, monitorar ingestão de macros e micronutrientes e oferecer orientações baseadas no perfil e objetivos do usuário."
    },
    {
        "q": "IA pode substituir um nutricionista?",
        "a": "Não. Ferramentas de IA são ótimas para monitoramento, educação nutricional e planos gerais. Para condições de saúde específicas (diabetes, doenças renais, alergias graves, transtornos alimentares), o acompanhamento de um nutricionista registrado no CRN é imprescindível."
    },
    {
        "q": "Como funciona a análise de refeições por foto com IA?",
        "a": "Apps como MyFitnessPal com IA e Calorie Mama identificam os alimentos em fotos do prato, estimam as porções visualmente e calculam automaticamente as calorias, proteínas, carboidratos e gorduras — eliminando o registro manual item por item."
    },
    {
        "q": "IA pode criar um plano alimentar personalizado?",
        "a": "Sim. Com informações sobre peso, altura, objetivo (emagrecimento, hipertrofia, saúde geral), restrições alimentares, preferências e rotina, ferramentas de IA criam planos semanais personalizados com listas de compras e receitas adequadas."
    },
    {
        "q": "Quais ferramentas de IA são úteis para nutricionistas profissionais?",
        "a": "Ferramentas como Nutrium com IA, DietBox e Evo Nutrition ajudam nutricionistas a criar planos alimentares mais rapidamente, gerar relatórios de progresso automaticamente e escalar o atendimento sem sacrificar a personalização."
    },
    {
        "q": "IA para nutrição funciona com a culinária brasileira?",
        "a": "Ferramentas globais como ChatGPT e Claude entendem alimentos brasileiros (feijão, arroz, mandioca, açaí, carne de sol) e a culinária regional. Plataformas específicas brasileiras como o DietBox têm bases de dados de alimentos nacionais mais completas."
    },
    {
        "q": "Como usar ChatGPT para criar receitas saudáveis?",
        "a": "Descreva seus ingredientes disponíveis, restrições alimentares, objetivo calórico e preferências de paladar. O ChatGPT ou Claude geram receitas completas com modo de preparo, informação nutricional estimada e variações para diferentes perfis."
    },
    {
        "q": "IA pode ajudar no controle de alergias e intolerâncias alimentares?",
        "a": "Sim. Apps de planejamento alimentar com IA filtram receitas e ingredientes baseados em restrições cadastradas (lactose, glúten, amendoim, etc.). Assistentes de IA como Claude ajudam a identificar ingredientes ocultos em rótulos e substituições adequadas."
    },
    {
        "q": "Ferramentas de IA conseguem monitorar a hidratação e hábitos alimentares?",
        "a": "Sim. Apps como Waterllama e integrações de saúde com IA monitoram consumo de água, horários de refeições e padrões alimentares ao longo do tempo, identificando lacunas e sugerindo ajustes baseados nos dados reais do usuário."
    },
    {
        "q": "IA pode ajudar atletas a otimizar a alimentação para performance?",
        "a": "Sim. Calculando necessidades calóricas baseadas no volume de treino, timing de carboidratos para performance, recuperação pós-treino e periodização nutricional — sempre como suporte, já que atletas competitivos devem ter acompanhamento profissional."
    },
    {
        "q": "Como a IA pode ajudar pessoas com objetivo de emagrecimento?",
        "a": "Monitoramento calórico com reconhecimento de foto, sugestões de substituições de alimentos para reduzir calorias sem sacrificar saciedade, identificação de padrões que sabotam o déficit calórico e motivação baseada em dados de progresso real."
    },
    {
        "q": "Existe app de IA para nutrição gratuito em português?",
        "a": "MyFitnessPal tem plano gratuito robusto com boa base de alimentos brasileiros. ChatGPT gratuito pode criar planos alimentares em português. O Google Gemini também responde perguntas nutricionais detalhadas gratuitamente."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Nutrição com IA</h2>
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
