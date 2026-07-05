import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que são ferramentas de IA para criar música?",
        "a": "São sistemas que geram composições musicais originais a partir de descrições em texto, estilos de referência ou humming de melodias. Incluem geradores de música completa, assistentes de composição para músicos e ferramentas de produção que automatizam arranjos e masterização."
    },
    {
        "q": "Quais as melhores ferramentas de IA para criar música em 2026?",
        "a": "Suno AI e Udio lideram para geração de músicas completas com voz e instrumentos a partir de prompts de texto. Mubert é referência para trilhas sonoras sem direitos. Soundraw permite criar loops personalizáveis. AIVA foca em composição clássica e orquestral."
    },
    {
        "q": "O Suno AI realmente gera músicas completas com letra e vocal?",
        "a": "Sim. O Suno v4 gera músicas de até 4 minutos com instrumentação, arranjo, letra e vocal sintetizado de qualidade surpreendente. Você descreve o estilo, humor e tema em texto — o sistema compõe e produz tudo automaticamente."
    },
    {
        "q": "Músicas geradas por IA têm direitos autorais?",
        "a": "A questão legal ainda evolui. No Brasil e nos EUA, obras sem autoria humana criativa significativa não são protegidas pelo direito autoral. Verifique sempre os termos da plataforma usada para entender o que pode fazer com as músicas geradas."
    },
    {
        "q": "Como usar IA para criar trilha sonora de vídeos e podcasts?",
        "a": "Ferramentas como Mubert, Soundraw e Epidemic Sound com IA geram trilhas customizadas para a duração exata do vídeo, no estilo desejado, sem direitos de uso — eliminando o risco de strikes de copyright em plataformas como YouTube."
    },
    {
        "q": "IA pode ajudar músicos profissionais a compor e arranjar?",
        "a": "Sim. Ferramentas como Hookpad com IA sugerem progressões de acordes harmônicas, AIVA gera melodias de contra-ponto e assistentes de DAW como o no Ableton sugerem automações e efeitos — potencializando músicos sem substituí-los."
    },
    {
        "q": "É possível criar jingles e música para publicidade com IA?",
        "a": "Sim, e muitas agências brasileiras já fazem isso. Suno AI, Loudly e ferramentas especializadas em jingles geram composições para anúncios em minutos, com variações para diferentes formatos (rádio, TV, redes sociais) — a um custo muito menor que produção tradicional."
    },
    {
        "q": "IA pode separar vocais e instrumentos de músicas existentes?",
        "a": "Sim. Ferramentas como Lalal.ai, Moises App e Demucs (open source) separam stems de músicas — vocais, bateria, baixo, guitarra — com qualidade impressionante, útil para remixes, karaokê e estudos de arranjo."
    },
    {
        "q": "Como usar IA para masterizar músicas produzidas por artistas independentes?",
        "a": "Plataformas como LANDR, Masterchannel e eMastered usam IA para masterização automática profissional a uma fração do custo de um estúdio. Envie o mix, a IA aplica EQ, compressão e limiting otimizados para streaming."
    },
    {
        "q": "Quanto custa usar Suno ou Udio para criar músicas?",
        "a": "Suno tem plano gratuito com 50 créditos/dia e planos pagos de US$8 a US$24/mês para uso comercial e maior volume. Udio oferece 1.200 gerações gratuitas/mês no plano inicial. Para uso comercial, os planos pagos são necessários."
    },
    {
        "q": "IA consegue criar música em estilos brasileiros como samba, forró e funk?",
        "a": "Sim. Especificando o gênero musical no prompt — 'samba de roda baiano', 'funk carioca', 'forró pé de serra' — ferramentas como Suno e Udio geram composições reconhecíveis nesses gêneros, com ritmo e instrumentação típicos."
    },
    {
        "q": "Como a IA pode ajudar na prática e ensino de música?",
        "a": "Apps como Yousician com IA avaliam sua execução em tempo real, identificam erros de ritmo e afinação e sugerem exercícios personalizados. Softwares de acompanhamento como iReal Pro geram backing tracks adaptativos para prática."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Criar Música</h2>
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
