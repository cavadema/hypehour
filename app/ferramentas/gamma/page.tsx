import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Gamma AI - Crie Apresentações, Sites e Documentos com IA | Review",
    description: "Descubra o Gamma AI: a ferramenta que transforma prompts em apresentações, documentos e sites visualmente impressionantes em segundos. Veja como funciona.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/gamma",
    },
};

export default function GammaPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/gamma#breadcrumb",
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
                        "name": "IA para Apresentações",
                        "item": "https://www.hypehour.com.br/ia-para-criar-apresentacoes"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Gamma AI",
                        "item": "https://www.hypehour.com.br/ferramentas/gamma"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/gamma#software",
                "name": "Gamma",
                "description": "Gamma é uma ferramenta de IA generativa que cria apresentações, documentos e sites a partir de comandos de texto.",
                "applicationCategory": "DesignApplication",
                "operatingSystem": "Web Browser",
                "url": "https://gamma.app",
                "creator": {
                    "@type": "Organization",
                    "name": "Gamma Tech"
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
                    <Link href="/ia-para-criar-apresentacoes" className="hover:text-black transition">IA para Apresentações</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Gamma AI</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-black rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        G
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Gamma AI</h1>
                        <p className="text-lg text-zinc-700">Apresentações, sites e documentos gerados por IA em segundos</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Gamma é uma das ferramentas de IA mais disruptivas no mercado de produtividade. Diferente do PowerPoint ou Google Slides, que exigem que você comece com uma tela em branco e formate cada elemento, o Gamma utiliza inteligência artificial generativa para criar uma estrutura completa (incluindo texto, layout e imagens) a partir de uma ideia ou prompt.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seu foco principal é a agilidade e o design moderno. Ele não cria apenas "slides" tradicionais; ele utiliza o conceito de "cartões" (cards) que se adaptam automaticamente a qualquer tela, tornando suas apresentações muito mais fluidas e interativas.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Gamma AI?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Gamma é uma plataforma baseada em nuvem que remove a barreira do design. Com ela, você pode transformar um breve comando de texto, um roteiro ou até um arquivo já existente em uma apresentação profissional, um documento estruturado ou uma landing page funcional. É a ferramenta ideal para quem deseja comunicar ideias de forma visual sem perder horas com formatação.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como o Gamma funciona?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O processo é intuitivo: você escolhe o formato (Apresentação, Documento ou Site), digita o tema desejado e a IA gera uma estrutura de tópicos. Após sua aprovação, o Gamma preenche automaticamente os cartões com conteúdo textual e visual coerente. Você pode então editar tudo em tempo real, inclusive usando um assistente de IA via chat para ajustar layouts ou reescrever frases.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Gamma é gratuito?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim, existe um plano gratuito generoso que funciona através de um sistema de créditos. Ao se cadastrar, você recebe créditos iniciais para criar seus primeiros projetos. Para usuários pesados ou empresas que precisam de marca personalizada e exportações avançadas, os planos Plus e Pro são as melhores opções.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Suporte ao Português</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Um dos grandes diferenciais do Gamma para o mercado brasileiro é o seu excelente suporte ao português. A IA compreende nuances do idioma e gera textos naturais, evitando traduções literais robóticas.
                    </p>
                </section>

                {/* Como funciona */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como usar o Gamma passo a passo</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha seu formato</h3>
                                <p className="text-zinc-700">Selecione se deseja criar uma apresentação, um documento ou uma página web.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Forneça o Prompt</h3>
                                <p className="text-zinc-700">Digite seu tema ou cole seu conteúdo bruto no editor de IA.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Geração e Ajustes</h3>
                                <p className="text-zinc-700">A IA gera os slides em segundos. Use o chat lateral para pedir alterações ("mude este tema para azul", "adicione mais imagens").</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Compartilhe ou Exporte</h3>
                                <p className="text-zinc-700">Envie o link de visualização ou exporte para PDF e PowerPoint para apresentações offline.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Apresentações de Vendas",
                            "Pitch Decks para Startups",
                            "Materiais Didáticos",
                            "Landing Pages rápidas",
                            "Propostas Comerciais",
                            "Relatórios Trimestrais",
                            "Portfólios Online",
                            "Infográficos interativos",
                            "Webinars",
                            "Documentação de Projetos",
                            "E-books visuais",
                            "Convites de Eventos",
                            "Apresentações Corporativas",
                            "Criação de Conteúdo LinkedIn",
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
                            <h3 className="text-xl font-semibold text-black mb-3">One-click Restyling</h3>
                            <p className="text-zinc-700">Mude todo o visual da sua apresentação com apenas um clique, aplicando temas profissionais que ajustam cores, fontes e backgrounds instantaneamente.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Editor Chat</h3>
                            <p className="text-zinc-700">Não gosta de um slide? Converse com a IA. Peça para encurtar o texto, adicionar um gráfico ou trocar a imagem por uma mais futurista.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Embed Multimodal</h3>
                            <p className="text-zinc-700">Incorpore vídeos do YouTube, formulários do Typeform, Apps, GIFs e até dashboards ao vivo diretamente nos seus cartões.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Analytics de Visualização</h3>
                            <p className="text-zinc-700">Saiba quem viu sua apresentação e em quais slides eles passaram mais tempo, ideal para propostas de vendas.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Velocidade incomparável: do prompt ao slide pronto em segundos",
                            "Design moderno e responsivo que funciona bem em desktop e mobile",
                            "Interface de edição intuitiva baseada em blocos e cartões",
                            "Integração de mídias ricas sem necessidade de plugins",
                            "Excelente entendimento de português e contexto",
                            "Exportação flexível para PDF e PowerPoint",
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
                            "A formatação muito rígida pode frustrar quem deseja controle total de pixels",
                            "Sistema de créditos pode acabar rapidamente no plano gratuito",
                            "Exige conexão constante com a internet para funcionar",
                            "A marca d'água do Gamma está presente no plano gratuito",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Gamma?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Profissionais de vendas e marketing</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Estudantes e professores para aulas dinâmicas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Fundadores de startups em fase de pitch</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Gestores que precisam criar relatórios rápidos</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Designers que precisam de controle milimétrico</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Apresentações que exigem animações complexas personalizadas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Uso estritamente offline</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Vídeo do YouTube */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Veja o Gamma em ação</h2>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200">
                        <div className="relative pb-[56.25%] h-0">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/NuFo-G62xXk"
                                title="Gamma AI Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Pare de lutar com slides e comece a criar com IA.</h2>
                    <p className="text-lg mb-6 text-zinc-300">Junte-se a milhões de usuários e crie sua primeira apresentação no Gamma hoje mesmo.</p>
                    <a
                        href="https://gamma.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Criar com Gamma agora →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Gamma é muito mais do que um gerador de slides; é uma nova forma de criar conteúdo visual. Ao priorizar a fluidez e a inteligência no design, ele democratiza a criação de apresentações de alto nível, permitindo que qualquer pessoa foque no conteúdo enquanto a IA cuida da estética.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você busca produtividade e quer impressionar sua audiência com layouts modernos e interativos, o Gamma deve ser sua ferramenta número um para apresentações.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
