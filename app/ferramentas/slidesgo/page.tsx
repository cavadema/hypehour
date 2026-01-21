import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Slidesgo AI - Gerador de Apresentações Inteligente | Análise e Review",
    description: "Conheça o Slidesgo AI: o gerador de apresentações que une a maior biblioteca de templates com inteligência artificial. Veja como funciona, preços e vantagens.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/slidesgo",
    },
};

export default function SlidesgoPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/slidesgo#breadcrumb",
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
                        "name": "Slidesgo",
                        "item": "https://www.hypehour.com.br/ferramentas/slidesgo"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/slidesgo#software",
                "name": "Slidesgo AI",
                "description": "O Slidesgo AI combina uma vasta biblioteca de modelos de design com inteligência artificial para criar apresentações completas a partir de prompts simples.",
                "applicationCategory": "DesignApplication",
                "operatingSystem": "Web",
                "url": "https://slidesgo.com/pt/",
                "creator": {
                    "@type": "Organization",
                    "name": "Slidesgo"
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
                    <span className="text-black font-medium">Slidesgo</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        S
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Slidesgo AI</h1>
                        <p className="text-lg text-zinc-700">Gerador de apresentações e templates com IA</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Slidesgo AI é uma solução de última geração que une a maior biblioteca de templates de apresentação do mundo com o poder da inteligência artificial. Desenvolvido para poupar horas de trabalho, ele cria slides completos — do conteúdo textual ao design visual — em questão de segundos.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seja você um professor buscando engajar seus alunos, um estudante preparando um seminário ou um profissional criando um pitch deck de vendas, o Slidesgo oferece ferramentas intuitivas que garantem um resultado visualmente impecável e profissional sem esforço.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Slidesgo AI?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Slidesgo AI é um gerador de apresentações online que utiliza inteligência artificial generativa para transformar um tema simples em uma sequência de slides estruturada. Ele faz parte do ecossistema Freepik, garantindo acesso a recursos visuais de alta qualidade.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como o Slidesgo cria slides automaticamente?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Ao receber um prompt ou tópico, a IA do Slidesgo analisa o tema, pesquisa informações relevantes, organiza o roteiro em tópicos lógicos e aplica um design que combina com o tom desejado (profissional, casual, educativo, etc.).
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Slidesgo é gratuito?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim, o Slidesgo possui um modelo freemium. Você pode usar o gerador de IA e baixar diversos templates gratuitamente (com atribuição). O plano Premium oferece downloads ilimitados, remoção de créditos e recursos exclusivos.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Funciona para PowerPoint e Google Slides?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim. Uma das maiores vantagens do Slidesgo é a flexibilidade: você pode criar seu projeto na plataforma e exportá-lo diretamente para o Microsoft PowerPoint (.pptx) ou Google Slides com total compatibilidade.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Por que escolher o Slidesgo?</h2>
                    <p className="text-zinc-700 leading-relaxed">
                        Diferente de outros geradores de IA que criam designs genéricos, o Slidesgo utiliza sua vasta biblioteca de estilos artísticos testados por milhões de usuários, garantindo que sua apresentação se destaque.
                    </p>
                </section>

                {/* Como funciona */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como funciona o Criador de IA em 4 passos</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Defina o tema e o tom</h3>
                                <p className="text-zinc-700">Digite sobre o que deseja falar e escolha o público-alvo ou o tom da conversa (ex: profissional, criativo, educativo).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha o estilo visual</h3>
                                <p className="text-zinc-700">Selecione entre diversos estilos pré-configurados pela IA que melhor se adaptam à sua mensagem.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Gere e edite</h3>
                                <p className="text-zinc-700">Aguarde alguns segundos enquanto a IA constrói a apresentação. Use o editor online para fazer ajustes finos.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Exporte para onde precisar</h3>
                                <p className="text-zinc-700">Baixe em PDF, PowerPoint ou envie para o Google Slides para apresentar da forma que preferir.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve o Slidesgo AI</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Apresentações de trabalho",
                            "Seminários escolares",
                            "Pitch decks para startups",
                            "Relatórios de reuniões",
                            "Planos de aula para professores",
                            "Infográficos dinâmicos",
                            "Portfólios profissionais",
                            "Workshops e webinars",
                            "Propostas comerciais",
                            "Treinamentos corporativos",
                            "Apresentações de eventos",
                            "Dados e estatísticas",
                            "E-books em formato slide",
                            "Planejamento estratégico",
                            "Resumos de projetos",
                            "Marketing e vendas",
                            "Educação executiva",
                            "Trabalhos de conclusão (TCC)",
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
                            <h3 className="text-xl font-semibold text-black mb-3">AI Presentation Maker</h3>
                            <p className="text-zinc-700">O coração da plataforma: gera slides completos com textos e imagens a partir de uma única ideia central.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Editor Drag-and-Drop amigável</h3>
                            <p className="text-zinc-700">Interface intuitiva para arrastar e soltar elementos, trocar cores e fontes sem precisar de habilidades de design.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Integração nativa com Freepik e Flaticon</h3>
                            <p className="text-zinc-700">Acesso direto a milhões de fotos, ilustrações e ícones premium para enriquecer visualmente seus slides.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Escrita de conteúdo por IA</h3>
                            <p className="text-zinc-700">Não comece com uma página em branco. A IA sugere os melhores textos para cada slide de acordo com seu tema.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Variantes de cores dinâmicas</h3>
                            <p className="text-zinc-700">Teste diferentes paletas de cores em toda a apresentação com apenas um clique para mudar o clima visual.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Suporte a múltiplos idiomas</h3>
                            <p className="text-zinc-700">Crie apresentações em português, inglês, espanhol e diversas outras línguas com tradução natural via IA.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Biblioteca gigante de modelos de design premiados",
                            "Integração perfeita com Google Slides e PowerPoint",
                            "Acesso a bancos de imagens premium (Freepik) integrado",
                            "Opção gratuita robusta para usuários casuais e educadores",
                            "Facilidade extrema de uso para quem não domina ferramentas de design",
                            "Economia colossal de tempo na estruturação de apresentações",
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
                            "Versão gratuita exige atribuição ao Slidesgo no final da apresentação",
                            "A IA pode ser um pouco genérica em temas muito técnicos ou nichados",
                            "Limite de downloads diários no plano gratuito para layouts manuais",
                            "A edição avançada fora da plataforma (PPT) pode requerer pequenos ajustes manuais",
                            "Necessita de conexão constante com a internet para gerar conteúdo",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Slidesgo AI?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Professores e estudantes (ensino médio e acadêmico)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Pequenos empreendedores e startups</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Times de Marketing e Vendas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Palestrantes e criadores de conteúdo</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Profissionais liberais (arquitetos, consultores, medicos)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Grandes corporações com guias de marca rígidos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Designers profissionais que precisam de controle pixel-a-pixel</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Ambientes sem acesso estável à internet</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Apresentações altamente sigilosas offline</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Projetos que exigem animações 3D complexas nativas</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Crie sua apresentação com IA agora</h2>
                    <p className="text-lg mb-6 text-zinc-300">Escolha um tema e deixe o Slidesgo cuidar do design e conteúdo por você</p>
                    <a
                        href="https://slidesgo.com/pt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar Slidesgo →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Slidesgo AI representa o equilíbrio perfeito entre a automação inteligente e o design humano de alta qualidade. Ao alavancar um acervo visual inigualável, ele garante que suas apresentações não sejam apenas rápidas de fazer, mas também visualmente cativantes.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você busca agilidade sem abrir mão da estética tradicional e compatibilidade com ferramentas como PowerPoint e Google Slides, o Slidesgo é certamente uma das melhores escolhas no mercado de IA atual.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
