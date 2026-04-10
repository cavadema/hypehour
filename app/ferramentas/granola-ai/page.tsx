import Link from "next/link";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";

export const metadata = {
    title: "Granola AI - O Bloco de Notas Inteligente para Reuniões | Review Completo",
    description: "Conheça a Granola AI: o assistente de reuniões que potencializa suas notas sem robôs, com transcrição e resumos estruturados via inteligência artificial.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/granola-ai",
    },
};

export default function GranolaAiPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/granola-ai#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.hypehour.com.br/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "IA para fazer ata de reunião",
                        "item": "https://www.hypehour.com.br/ia-para-fazer-ata-reuniao"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Granola AI",
                        "item": "https://www.hypehour.com.br/ferramentas/granola-ai"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/granola-ai#software",
                "name": "Granola AI",
                "description": "Granola AI é um bloco de notas inteligente e discreto para reuniões, capaz de transcrever conversas e organizar notas manuais com IA sem o uso de robôs participantes.",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Mac, Windows, iOS",
                "url": "https://www.granola.sh/",
                "creator": {
                    "@type": "Organization",
                    "name": "Granola"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "13"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "category": "Freemium"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.hypehour.com.br/ferramentas/granola-ai#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "O que é a Granola AI?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A Granola AI é um bloco de notas inteligente e discreto para reuniões que capta o áudio do seu computador (sem robôs) e aprimora suas próprias anotações usando inteligência artificial."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "A Granola AI é gratuita?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, a ferramenta possui um plano gratuito generoso que inclui anotações de reuniões com IA essenciais. Para usuários que precisam de histórico ilimitado e recursos avançados de equipe, existem planos pagos."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-[#f7f8fa]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-zinc-700 mb-8">
                    <Link href="/" className="hover:text-black transition">Home</Link>
                    <span className="text-zinc-400">/</span>
                    <Link href="/ia-para-fazer-ata-reuniao" className="hover:text-black transition">IA para fazer ata de reunião</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Granola AI</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        G
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Granola AI</h1>
                        <p className="text-lg text-zinc-700">O bloco de notas inteligente para reuniões produtivas.</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        A **Granola AI** representa uma evolução no mercado de assistentes de reunião. Enquanto outros focam em robôs de gravação, a Granola se concentra em você. Ela atua como um bloco de notas 'copiloto' que transforma sua anotações simplificadas em atas de reunião ricas, profissionais e acionáveis.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Diferente de qualquer outra ferramenta, ela roda silenciosamente no seu desktop e entende o que você anota e o que está sendo falado. O resultado é um resumo que mantém seu tom de voz e foco pessoal, com a precisão dos modelos de linguagem de elite.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é a Granola AI?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Granola é um assistente de IA focado em nota-taking (tomada de notas) que não requer um participante virtual na chamada. Ele vive localmente no seu Mac ou Windows, ouve o áudio do sistema e processa a reunião para expandir o que você rascunhou no teclado.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como a Granola ajuda em reuniões?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Ao contrário de apenas transcrever, a Granola busca o 'insight'. Ela entende itens de ação, decisões e detalhes técnicos discutidos. Para quem lidera reuniões, ela é a ponte para nunca mais perder tempo reescrevendo anotações após a chamada terminar.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O no-bot é o grande diferencial?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim! Este é o maior ponto de venda da Granola. Em reuniões com clientes ou diretoria onde a presença de um bot de gravação pode ser desconfortável ou proibida, a Granola atua nos bastidores sem nunca denunciar sua presença.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">A Granola AI funciona em Português?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Completamente. A Granola possui suporte multilíngue e entende conversas em Português com alta precisão, gerando atas que parecem ter sido escritas por um assistente humano nativo.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">É seguro para dados sensíveis?</h2>
                    <p className="text-zinc-700 leading-relaxed">
                        Sim, a ferramenta utiliza criptografia e oferece controles de privacidade onde seus dados não são usados para treinar modelos globais de IA por padrão, algo essencial para o ambiente corporativo atual.
                    </p>
                </section>

                {/* Como funciona */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Abra a Granola</h3>
                                <p className="text-zinc-700">Inicie o aplicativo no seu computador antes de começar sua chamada em qualquer plataforma (Zoom, Meet, Teams).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Anotação Assistida</h3>
                                <p className="text-zinc-700">Digite pequenos tópicos ou decisões chave durante a conversa. A Granola ouve tudo o que é dito simultaneamente.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Geração da Ata</h3>
                                <p className="text-zinc-700">Ao final, a IA une suas notas com a transcrição completa para gerar um resumo estruturado e profissional instantaneamente.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Sincronia e Fluxo</h3>
                                <p className="text-zinc-700">Sincronize as notas geradas com o Notion, Slack ou HubSpot, mantendo seu time sempre por dentro do que foi acordado.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Gerar atas de reunião profissionais",
                            "Tomar notas sem robôs invasores",
                            "Sincronizar atas com o Notion",
                            "Extrair itens de ação automáticos",
                            "Resumir discussões longas",
                            "Transcrever áudio em Português",
                            "Documentar reuniões de vendas",
                            "Organizar feedback de clientes",
                            "Criar repositório de reuniões",
                            "Consultar histórico de decisões",
                            "Poupe tempo em pós-reunião",
                            "Melhorar a atenção na conversa",
                            "Gerar rascunhos de e-mail de follow-up",
                            "Monitorar tarefas pendentes",
                            "Integração com Slack e HubSpot",
                            "Documentar brainstorms",
                            "Busca rápida por palavras-chave",
                            "Gravar reuniões locais no Mac/Win",
                        ].map((item, index) => (
                            <div key={index} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                                <p className="text-zinc-700 text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">No-Bot Strategy</h3>
                            <p className="text-zinc-700">Captura de áudio nativa sem injetar participantes virtuais, focando na discrição e privacidade empresarial.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Context Enhancement</h3>
                            <p className="text-zinc-700">Tecnologia que funde rascunhos humanos com a transcrição completa para gerar notas ricas que mantêm o seu tom de voz.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Meeting Templates (Recipes)</h3>
                            <p className="text-zinc-700">Centenas de modelos prontos para estruturar atas de vendas, feedback de engenharia, brainstorms e reuniões de RH.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ask AI Chat (Cross-Meeting)</h3>
                            <p className="text-zinc-700">Faça perguntas para a IA sobre todo o seu histórico de reuniões para encontrar informações passadas em segundos.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Permite foco total na conversa, sem distração de escrita manual pesada",
                            "Zero atrito social: sem robôs pedindo para entrar na chamada",
                            "Qualidade de resumo muito superior por levar em conta suas notas",
                            "Integração perfeita com o fluxo de trabalho moderno (Notion/Slack)",
                            "Suporte para reuniões presenciais via aplicativo móvel",
                            "Plano gratuito generoso e funcional para profissionais solo",
                        ].map((advantage, index) => (
                            <div key={index} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                                <span className="text-black font-bold text-lg flex-shrink-0">✓</span>
                                <p className="text-zinc-700">{advantage}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Desvantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e considerações</h2>
                    <div className="grid gap-4">
                        {[
                            "Requer instalação de software no Mac ou Windows (não é 100% web)",
                            "A versão gratuita possui um limite de histórico de 30 dias para reuniões antigas",
                            "Diferente de ferramentas concorrentes, ela não grava o vídeo da chamada",
                            "O processamento detalhado de IA requer conexão estável com a internet",
                        ].map((disadvantage, index) => (
                            <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                                <span className="text-zinc-700 font-bold text-lg flex-shrink-0">⚠</span>
                                <p className="text-zinc-700">{disadvantage}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Para quem é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é a Granola AI?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Founders e Executivos que prezam pela discrição</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Profissionais que tomam notas durante o papo</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Equipes que usam Notion ou Slack como Hub corporativo</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Freelancers que atendem múltiplos clientes via videoconferência</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Pessoas que buscam aprender melhor revendo suas atas</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700 font-bold">✕</span>
                                    <span className="text-zinc-700">Usuários que não querem instalar softwares no computador</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700 font-bold">✕</span>
                                    <span className="text-zinc-700">Quem precisa de gravação visual (vídeo) de toda a reunião</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700 font-bold">✕</span>
                                    <span className="text-zinc-700">Cenários onde não há qualquer acesso à rede</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Potencialize suas reuniões com assistência de IA de elite</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece a usar a Granola AI gratuitamente hoje e transforme notas rápidas em atas brilhantes.</p>
                    <a
                        href="https://www.granola.sh/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Experimentar Granola AI →
                    </a>
                </section>



                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        A Granola AI se posiciona como um dos assistentes mais profissionais e humanos da categoria. Ao ignorar o modelo de robôs invasivos e focar na melhoria das notas pessoais do usuário, ela cria um valor imediato e de fácil adoção para qualquer fluxo de trabalho moderno.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        É a escolha suprema para quem quer focar na reunião de fato, garantindo que nenhum item de ação seja perdido e que todas as decisões sejam documentadas com perfeição.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />

                {/* Ferramentas Similares */}
                <SimilarTools />
            </div>
        </main>
    );
}
