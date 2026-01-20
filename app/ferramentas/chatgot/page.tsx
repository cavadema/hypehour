import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Chatgot - Review Completo: O Hub de Inteligência Artificial Tudo-em-Um",
    description: "Descubra o Chatgot: a plataforma que reúne GPT-4, Claude 3 e Gemini em um só lugar. Review completo sobre funcionalidades, preços e como criar seus próprios bots de IA.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/chatgot",
    },
};

export default function ChatgotPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/chatgot#breadcrumb",
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
                        "name": "Agregadores de IA",
                        "item": "https://www.hypehour.com.br/pacotes-de-ferramentas-e-agregadores-ia"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Chatgot",
                        "item": "https://www.hypehour.com.br/ferramentas/chatgot"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/chatgot#software",
                "name": "Chatgot",
                "description": "Chatgot é um assistente de IA abrangente que combina chat e pesquisa em tempo real com acesso a múltiplos modelos como GPT-4, Claude e Gemini.",
                "applicationCategory": "ProductivityApplication",
                "operatingSystem": "Web, Windows, macOS, Android, iOS",
                "url": "https://www.chatgot.io/",
                "creator": {
                    "@type": "Organization",
                    "name": "Chatgot"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "category": "Freemium"
                }
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
                    <Link href="/pacotes-de-ferramentas-e-agregadores-ia" className="hover:text-black transition">Agregadores de IA</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Chatgot</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        C
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Chatgot</h1>
                        <p className="text-lg text-zinc-700">Todos os seus modelos de IA favoritos em uma única interface inteligente.</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow-sm transition hover:shadow-md">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O **Chatgot** é um agregador de modelos de inteligência artificial que simplifica drasticamente o acesso às tecnologias mais avançadas do mercado. Em vez de assinar o ChatGPT Plus, o Claude Pro e o Gemini Advanced separadamente, o Chatgot oferece um hub centralizado onde você pode conversar com todos eles.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seja para criar textos, gerar imagens, analisar PDFs ou desenvolver código, o Chatgot se posiciona como um assistente universal, integrando pesquisa na web em tempo real para garantir que as respostas sejam sempre precisas e atualizadas.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Chatgot?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        Chatgot é uma plataforma multimodelo projetada para ser o ponto de entrada definitivo para qualquer pessoa que use IA no dia a dia. Ele elimina a fadiga de alternar entre diferentes abas e aplicativos, permitindo que você mude de modelo (como do GPT-4 para o Claude 3.5) com apenas um clique, mantendo o contexto da sua conversa.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Além do chat convencional, a ferramenta oferece uma suíte completa de criação, incluindo geradores de imagens artísticas, assistentes de escrita especializados e ferramentas para processamento de documentos complexos.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha seu Modelo</h3>
                                <p className="text-zinc-700">Selecione entre GPT-4, Claude, Gemini ou Llama. Cada um tem forças diferentes e você pode escolher o melhor para sua tarefa específica.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Interaja com IA</h3>
                                <p className="text-zinc-700">Envie prompts, faça upload de PDFs ou peça para a IA pesquisar algo na internet em tempo real. A ferramenta processa tudo instantaneamente.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Gere Resultados Multimodais</h3>
                                <p className="text-zinc-700">Receba textos polidos, imagens geradas por IA, código pronto para uso ou resumos de documentos estruturados em segundos.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Comparar respostas entre modelos",
                            "Criação de conteúdo para marketing",
                            "Pesquisa acadêmica e resumos",
                            "Geração de imagens e artes AI",
                            "Escrita e depuração de código",
                            "Tradução técnica de documentos",
                            "Análise profunda de PDFs longos",
                            "Automação de tarefas repetitivas",
                            "Brainstorming de ideias de negócios",
                            "Tutoria para aprendizado de línguas",
                            "Gestão de conhecimento pessoal",
                            "Suporte ao cliente via bots customizados",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Acesso Multimodelo (GPT, Claude, Gemini)</h3>
                            <p className="text-zinc-700">A maior vantagem do Chatgot é a flexibilidade. Você tem acesso aos modelos SOTA (State Of The Art) sem precisar assinar cada um individualmente.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Pesquisa em Tempo Real</h3>
                            <p className="text-zinc-700">Integração nativa com a web permite que a IA acesse sites, leia notícias de hoje e forneça fontes para as informações apresentadas.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Assistentes de Escrita Pro</h3>
                            <p className="text-zinc-700">Ferramentas como AI Humanizer, geradores de slogans e roteiros ajudam a elevar a qualidade da produção textual para um nível profissional.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Geradores de Imagem e Anime</h3>
                            <p className="text-zinc-700">Possui modelos dedicados à criação visual, permitindo converter texto em imagens artísticas ou fotos realistas em segundos.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Economia financeira: um único plano substitui várias assinaturas",
                            "Facilidade de uso: interface limpa e intuitiva para usuários novos",
                            "Histórico unificado: todas as suas conversas em um só lugar, independente da IA",
                            "Privacidade garantida e proteção de dados sensíveis",
                            "Extensão de navegador poderosa para Chrome e Edge",
                            "Suporte a mais de 100 idiomas com precisão nativa",
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
                            "Plano gratuito possui limites diários de mensagens",
                            "Modelos mais potentes (como GPT-4) costumam ter limites menores no plano básico",
                            "Depende totalmente de uma conexão estável com a internet",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Chatgot?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Profissionais de Marketing e Redatores</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Estudantes e Pesquisadores</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Desenvolvedores de Software</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Entusiastas de IA que amam testar novos modelos</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-100 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Usuários que precisam de uso offline estrito</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem prefere interfaces minimalistas sem muitos botões</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Acesse todas as IAs em um só lugar.</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece a usar o Chatgot agora e descubra o poder de ter os melhores modelos do mundo à sua disposição.</p>
                    <a
                        href="https://www.chatgot.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Experimentar o Chatgot Grátis →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Chatgot resolve um dos maiores problemas atuais do ecossistema de IA: a fragmentação. Ao centralizar as ferramentas mais poderosas de nomes como OpenAI, Anthropic e Google em uma interface bonita e rápida, ele se torna um companheiro indispensável para produtividade.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você está procurando uma maneira de economizar dinheiro e tempo enquanto utiliza o que há de melhor em tecnologia generativa, o Chatgot é, sem dúvida, uma das escolhas mais inteligentes disponíveis hoje.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
