import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Quais são as melhores ferramentas de IA para criar conteúdo em português?",
        "a": "Jasper e Copy.ai lideram na geração de textos em português com qualidade. Claude (Anthropic) e ChatGPT são excelentes para textos longos e nuançados. Para SEO integrado, Surfer SEO com Jasper é a combinação mais usada por times de marketing brasileiros."
    },
    {
        "q": "IA consegue escrever conteúdo com a voz e o tom da minha marca?",
        "a": "Sim. Ferramentas como Jasper permitem criar 'Brand Voice' com exemplos de textos da sua marca. Claude e ChatGPT com instruções detalhadas no sistema prompt mantêm tom e estilo consistentes. O segredo está em alimentar a IA com exemplos reais do seu conteúdo e um guia de voz da marca."
    },
    {
        "q": "Como usar IA para criar conteúdo para redes sociais em escala?",
        "a": "Buffer AI e Lately AI especializam-se em repurposing para redes sociais — transformam artigos longos em dezenas de posts. Para Instagram e TikTok, ferramentas como OpusClip cortam vídeos longos em clips curtos automaticamente. ChatGPT e Claude geram variações de copy para testes A/B."
    },
    {
        "q": "Conteúdo gerado por IA é detectado pelo Google e penalizado?",
        "a": "O Google afirma que não penaliza conteúdo de IA per se, mas sim conteúdo de baixa qualidade, sem utilidade ou criado para manipular rankings. Conteúdo de IA revisado, enriquecido com experiência real e dados únicos performa bem. O foco deve ser na qualidade final, não na origem do texto."
    },
    {
        "q": "Qual a diferença entre Jasper, Copy.ai e Writesonic para criação de conteúdo?",
        "a": "Jasper foca em times de marketing com brand voice e integrações robustas — é o mais completo, mas também o mais caro. Copy.ai tem interface mais simples e workflows prontos para e-commerce e anúncios. Writesonic é mais acessível e tem boa geração para landing pages e artigos de blog."
    },
    {
        "q": "Como criar uma estratégia de conteúdo completa usando IA?",
        "a": "Use Perplexity AI ou ChatGPT para pesquisar tópicos e gaps de conteúdo, Semrush ou Surfer para análise de palavras-chave, Claude ou Jasper para redigir os artigos, Canva AI para criar os visuais e Buffer ou Notion AI para organizar o calendário editorial."
    },
    {
        "q": "IA pode criar conteúdo para YouTube — roteiros, descrições e tags?",
        "a": "Sim. Claude e ChatGPT são excelentes para roteiros de YouTube quando alimentados com o tópico, duração e estilo do canal. VidIQ e TubeBuddy têm IA integrada para gerar títulos, descrições e tags otimizados para busca no YouTube especificamente."
    },
    {
        "q": "Como usar IA para criar e-mails de marketing e nutrição?",
        "a": "ActiveCampaign, HubSpot e Mailchimp têm IA integrada para sugerir assuntos e body de e-mails com base em histórico de performance. Para sequências completas, Claude e Jasper geram fluxos de nutrição inteiros a partir de uma briefing com persona, produto e objetivo de conversão."
    },
    {
        "q": "Ferramentas de IA para conteúdo têm planos gratuitos?",
        "a": "Copy.ai e Writesonic oferecem planos gratuitos com limites de palavras. ChatGPT gratuito (GPT-4o mini) funciona para criação de conteúdo básica. Claude tem tier gratuito generoso. Canva AI está disponível no plano gratuito do Canva com recursos limitados."
    },
    {
        "q": "Como manter autenticidade e experiência humana no conteúdo gerado por IA?",
        "a": "Adicione exemplos pessoais, dados originais de pesquisas próprias, opiniões e perspectivas que a IA não pode ter. Use IA para estrutura, rascunho e pesquisa — mas enriqueça com insights únicos da sua experiência. Textos que combinam velocidade da IA com perspectiva humana são os mais eficazes."
    },
    {
        "q": "IA pode criar conteúdo técnico e especializado com precisão?",
        "a": "Sim, com os prompts certos e verificação adequada. Claude e GPT-4o são os mais capazes em conteúdo técnico. Para áreas de alta responsabilidade (médica, jurídica, financeira), o conteúdo gerado deve ser sempre revisado por especialistas. Perplexity AI cita fontes e ajuda a verificar dados."
    },
    {
        "q": "Como calcular o ROI de usar ferramentas de IA para conteúdo?",
        "a": "Compare o tempo gasto na produção manual versus com IA, multiplique pela hora do profissional e some o custo da ferramenta. Times que adotam IA para conteúdo relatam 3x a 10x mais velocidade de produção. O ROI também inclui SEO melhorado, mais frequência de publicação e menor dependência de freelancers."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Ferramentas de IA para Criação de Conteúdo</h2>
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
