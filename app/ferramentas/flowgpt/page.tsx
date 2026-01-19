import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "FlowGPT - O Maior Marketplace de Prompts e Agregador de IA | Review",
    description: "Conheça o FlowGPT, a plataforma líder para descobrir prompts de IA, gerenciar modelos como GPT-4 e Claude, e criar seus próprios aplicativos inteligentes.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/flowgpt",
    },
};

export default function FlowGPTPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/flowgpt#breadcrumb",
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
                        "name": "FlowGPT",
                        "item": "https://www.hypehour.com.br/ferramentas/flowgpt"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/flowgpt#software",
                "name": "FlowGPT",
                "description": "FlowGPT é uma plataforma comunitária para descoberta e compartilhamento de prompts de IA, além de ser um agregador de múltiplos modelos de linguagem.",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Web Browser, iOS, Android",
                "url": "https://flowgpt.com",
                "creator": {
                    "@type": "Organization",
                    "name": "FlowGPT Team"
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
                    <span className="text-black font-medium">FlowGPT</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-black rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        F
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">FlowGPT</h1>
                        <p className="text-lg text-zinc-700">O maior ecossistema de prompts e agregador de modelos de IA do mundo</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O FlowGPT não é apenas mais uma ferramenta de chat; é o ponto de encontro da comunidade de inteligência artificial generativa. Imagine um "GitHub" para prompts de IA, onde os usuários podem criar, testar e compartilhar instruções complexas que extraem o máximo de modelos como ChatGPT, Claude e Gemini.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seu grande diferencial é o poder da curadoria comunitária. Através de rankings e competições, o FlowGPT filtra o que há de melhor em engenharia de prompt, oferecendo soluções prontas para marketing, programação, produtividade e entretenimento de forma acessível e organizada.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o FlowGPT?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        FlowGPT é uma plataforma híbrida: funciona como uma vasta biblioteca de prompts, um ecossistema de aplicativos baseados em chat (Flows) e um agregador de modelos de linguagem (LLMs). É o lugar onde você encontra o prompt perfeito para criar uma estratégia de SEO, codar um site inteiro ou simular conversas com personagens históricos, tudo em uma única interface.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como o FlowGPT funciona?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Ao entrar na plataforma, você tem acesso a milhares de prompts organizados por categorias. Você pode simplesmente copiar esses prompts para usar onde desejar ou executá-los diretamente no FlowGPT, escolhendo qual modelo de IA deve processar aquela instrução. A plataforma remove a necessidade de ter múltiplas assinaturas pagas, permitindo acesso a modelos premium através de seu próprio sistema de créditos.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">A Importância do Prompt Engineering</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Muitas pessoas acham que a IA é limitada, mas geralmente a limitação está na forma como o pedido é feito. O FlowGPT democratiza o "Prompt Engineering" (engenharia de prompt), permitindo que usuários comuns utilizem comandos sofisticados escritos por especialistas para obter resultados profissionais instantaneamente.
                    </p>
                </section>

                {/* Como funciona */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como usar o FlowGPT passo a passo</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Explore a Biblioteca</h3>
                                <p className="text-zinc-700">Navegue pelas categorias ou use a barra de busca para encontrar o prompt que resolve seu problema atual.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Selecione o Modelo</h3>
                                <p className="text-zinc-700">Escolha se deseja usar o GPT-4 da OpenAI, o Claude 3 da Anthropic ou outros modelos disponíveis na sandbox.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Execute e Customize</h3>
                                <p className="text-zinc-700">Preencha as variáveis do prompt (ex: tema, público-alvo) e veja a IA gerar o conteúdo em segundos.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Compartilhe e Evolua</h3>
                                <p className="text-zinc-700">Salve seus prompts favoritos, publique suas próprias criações e ajude a comunidade com feedbacks.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Criação de Scripts de Youtube",
                            "Desenvolvimento de Código",
                            "Redação de E-mails de Vendas",
                            "Planejamento de SEO",
                            "Roleplay com Personagens",
                            "Resumo de Textos Longos",
                            "Criação de Campanhas de Ads",
                            "Escrita Criativa de Livros",
                            "Tradução de Idiomas",
                            "Otimização de Currículos",
                            "Suporte Técnico especializado",
                            "Geração de Ideias para Blog",
                            "Tutoria Acadêmica",
                            "Análise de Dados Complexos",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Ranking Comunitário</h3>
                            <p className="text-zinc-700">Um sistema de votos e avaliações que garante que você sempre encontre os prompts que mais geram resultados reais.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Multi-model Chat</h3>
                            <p className="text-zinc-700">Alterne entre diferentes inteligências artificiais com apenas um clique para comparar qual dá a melhor resposta para sua necessidade específica.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Flows (Apps de IA)</h3>
                            <p className="text-zinc-700">Vá além dos prompts simples. Use fluxos de trabalho estruturados que guiam a IA em tarefas complexas de múltiplos passos.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Prompt Sandbox</h3>
                            <p className="text-zinc-700">Um editor avançado para testar e refinar seus próprios comandos antes de publicá-los para o mundo.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Acesso a uma biblioteca infinita de prompts gratuitos",
                            "Possibilidade de testar múltiplos modelos (GPT, Claude, etc) em um só lugar",
                            "Comunidade ativa com milhares de criadores experientes",
                            "Economia de tempo drástica na criação de instruções complexas",
                            "Aplicativos móveis nativos para acesso rápido",
                            "Oportunidade de monetizar seu conhecimento em prompts",
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
                            "Muitos prompts excelentes estão disponíveis apenas em inglês",
                            "Interface pode ser um pouco complexa e poluída para iniciantes",
                            "Modelos premium (como GPT-4) possuem limites de uso no plano grátis",
                            "A grande quantidade de prompts exige filtragem para achar o que realmente funciona",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o FlowGPT?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Profissionais de Marketing e Redatores</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Programadores em busca de snippets e ajuda em lógica</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Estudantes e acadêmicos que precisam organizar pesquisas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Entusiastas de IA que desejam aprender Prompt Engineering</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Usuários que buscam uma interface ultra-simplista e minimalista</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Empresas com restrições severas de compliance de prompt externo</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Uso estritamente corporativo que exige SLA de 100% de uptime</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>


                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Potencialize sua Inteligência Artificial hoje.</h2>
                    <p className="text-lg mb-6 text-zinc-300">Descubra os prompts que os especialistas usam e transforme sua produtividade com o FlowGPT.</p>
                    <a
                        href="https://flowgpt.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar FlowGPT gratuitamente →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O FlowGPT é a peça que faltava para quem deseja ir além do básico com a IA. Ao fornecer uma plataforma de colaboração e descoberta, ele empodera usuários para que tirem o melhor proveito dos modelos de linguagem, economizando horas de tentativa e erro.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você deseja se manter na fronteira do que é possível fazer com inteligência artificial, o FlowGPT é um recurso indispensável em sua caixa de ferramentas digital.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
