import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA está transformando o marketing digital?",
        "a": "A IA automatiza a criação de conteúdo, personaliza mensagens em escala, otimiza campanhas de anúncios em tempo real, segmenta audiências com precisão cirúrgica e analisa dados de performance para decisões mais rápidas e embasadas."
    },
    {
        "q": "Quais as melhores ferramentas de IA para marketing em 2026?",
        "a": "Para criação de conteúdo: Jasper, Copy.ai e ChatGPT. Para anúncios: Meta Advantage+ e Google Performance Max. Para SEO: Surfer SEO e Semrush AI. Para e-mail marketing: Klaviyo AI e HubSpot AI. Para imagens: Canva Magic Studio e Adobe Firefly."
    },
    {
        "q": "IA pode substituir uma agência de marketing?",
        "a": "Não integralmente. A IA executa com velocidade e escala, mas estratégia de marca, criatividade com contexto cultural profundo e relacionamento com o cliente ainda requerem julgamento humano. IA é copiloto, não piloto autônomo no marketing."
    },
    {
        "q": "Como usar IA para criar copy de anúncios que converte?",
        "a": "Forneça à IA informações sobre o produto, público-alvo, objeções comuns e benefícios-chave. Peça para gerar 10 a 20 variações de headline e body copy, teste as melhores em A/B e use os dados para refinar com nova rodada de IA."
    },
    {
        "q": "IA pode gerenciar campanhas de Google Ads e Meta Ads automaticamente?",
        "a": "Sim. Google Performance Max e Meta Advantage+ usam IA para otimização automática de lances, criativos e segmentação. Ferramentas de terceiros como Madgicx e Albert AI vão além com otimização cross-plataforma e análise preditiva."
    },
    {
        "q": "Como usar IA para SEO e produção de conteúdo orgânico?",
        "a": "Use Surfer SEO ou Semrush para identificar oportunidades de palavras-chave, ChatGPT ou Claude para estruturar o conteúdo, e ferramentas como MarketMuse para otimizar a profundidade semântica — combinação que gera resultados orgânicos consistentes."
    },
    {
        "q": "IA pode personalizar e-mails de marketing em escala?",
        "a": "Sim. Plataformas como Klaviyo, HubSpot e ActiveCampaign usam IA para personalizar assunto, corpo e horário de envio com base no comportamento de cada contato, aumentando taxas de abertura e conversão significativamente."
    },
    {
        "q": "Como evitar que conteúdo de marketing gerado por IA pareça genérico?",
        "a": "Forneça contexto rico: voz da marca, exemplos de conteúdo aprovado, dados específicos do negócio, stories reais de clientes e diferenciadores únicos. Quanto mais contexto, mais personalizado e autêntico o output da IA."
    },
    {
        "q": "IA pode criar vídeos para anúncios no YouTube e TikTok?",
        "a": "Sim. Ferramentas como InVideo, Opus Clip e HeyGen permitem criar anúncios em vídeo, recortar conteúdo longo em clips otimizados para cada plataforma e gerar vídeos com avatares apresentando produtos em português."
    },
    {
        "q": "Como usar IA para análise de concorrentes em marketing?",
        "a": "Ferramentas como Semrush, Similarweb e Crayon monitoram estratégias de conteúdo, anúncios e SEO dos concorrentes automaticamente. ChatGPT com acesso à web pode resumir e comparar abordagens de comunicação de diferentes players do mercado."
    },
    {
        "q": "IA pode prever quais campanhas vão performar melhor antes do lançamento?",
        "a": "Sim, com limitações. Ferramentas de análise preditiva analisam dados históricos de campanhas similares para estimar performance. Mas variáveis externas (tendências, notícias, sazonalidade) tornam a previsão probabilística, não determinística."
    },
    {
        "q": "Qual o impacto da IA nas estratégias de influencer marketing?",
        "a": "IA identifica influenciadores com audiência alinhada ao perfil de cliente ideal, analisa taxa de engajamento real versus seguidores comprados e prevê ROI de colaborações antes de fechar contratos — reduzindo apostas mal direcionadas."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Marketing</h2>
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
