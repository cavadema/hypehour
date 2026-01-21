import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Visme AI - Criador de Conteúdo Visual e Apresentações | Review",
    description: "Descubra o Visme AI: ferramenta multifuncional para criar apresentações, infográficos e conteúdos interativos com inteligência artificial. Veja como funciona.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/visme",
    },
};

export default function VismePage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/visme#breadcrumb",
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
                        "name": "Visme",
                        "item": "https://www.hypehour.com.br/ferramentas/visme"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/visme#software",
                "name": "Visme AI",
                "description": "Uma plataforma de comunicação visual completa que utiliza IA para gerar apresentações, infográficos, vídeos e relatórios interativos a partir de prompts simples.",
                "applicationCategory": "DesignApplication",
                "operatingSystem": "Web",
                "url": "https://www.visme.co/pt-br/",
                "creator": {
                    "@type": "Organization",
                    "name": "Visme"
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
                    <span className="text-black font-medium">Visme</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        V
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Visme AI</h1>
                        <p className="text-lg text-zinc-700">Plataforma multifuncional de design e apresentações com IA</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Visme é muito mais do que apenas um criador de slides; é uma ferramenta de comunicação visual tudo-em-um. Com as novas integrações de inteligência artificial, o Visme permite que qualquer pessoa, independentemente de suas habilidades de design, crie apresentações, infográficos e relatórios profissionais em minutos.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seu grande diferencial é o foco na interatividade e na visualização de dados. Enquanto outras ferramentas geram apenas designs estáticos, o Visme permite criar experiências imersivas com elementos animados, dados em tempo real e colaboração avançada para equipes.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Visme AI?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Visme AI é uma suíte de ferramentas generativas integradas à plataforma Visme. Ela permite criar projetos visuais inteiros a partir de descrições em texto (prompts), gerar imagens exclusivas e até mesmo reescrever textos usando processamento de linguagem natural.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como funciona o gerador de apresentações?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Você insere um resumo do que deseja comunicar, seleciona o estilo visual e a IA estruturará os slides, distribuirá o conteúdo e selecionará as imagens e ícones mais adequados, deixando a base pronta para sua personalização final.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Visme é gratuito?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O Visme oferece um plano básico gratuito que permite criar projetos e usar a IA com créditos mensais limitados. Para downloads profissionais (PDF, PPTX) e acesso total ao Brand Kit e colaboração, existem planos pagos como Starter e Pro.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Por que é ideal para empresas?</h2>
                    <p className="text-zinc-700 leading-relaxed">
                        Diferente de ferramentas focadas apenas em design casual, o Visme oferece recursos de governança de marca, análise de engajamento (quem viu seus slides) e integrações poderosas com o Salesforce, HubSpot e Google Analytics.
                    </p>
                </section>

                {/* Como funciona */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como usar a IA do Visme em 4 passos</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha o seu 'Prompt'</h3>
                                <p className="text-zinc-700">Descreva o que sua apresentação deve conter, qual o objetivo e quem é o público.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Selecione o estilo e marca</h3>
                                <p className="text-zinc-700">Escolha um dos estilos sugeridos ou deixe a IA usar as cores e fontes do seu site automaticamente via URL.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Refine no editor Drag-and-Drop</h3>
                                <p className="text-zinc-700">A IA gera o rascunho completo. Use a interface intuitiva para ajustar elementos, adicionar gráficos e animações.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Compartilhe ou Baixe</h3>
                                <p className="text-zinc-700">Gere um link interativo para rastrear acessos ou baixe em arquivos PDF, PowerPoint e até HTML5.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve o Visme AI</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Apresentações corporativas",
                            "Infográficos de dados",
                            "Relatórios interativos",
                            "Gráficos para redes sociais",
                            "Propostas de vendas",
                            "Vídeos explicativos curtos",
                            "Pitch decks para startups",
                            "Currículos visuais",
                            "Planos de marketing",
                            "Treinamentos de RH",
                            "Apresentações educativas",
                            "Painéis de BI e Dashboards",
                            "Newsletters visuais",
                            "Flyers e folhetos",
                            "Checklists animados",
                            "Manuais de marca",
                            "E-books profissionais",
                            "Apresentações de webinars",
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
                            <h3 className="text-xl font-semibold text-black mb-3">AI Design Generator</h3>
                            <p className="text-zinc-700">Gera apresentações e documentos completos a partir de um prompt, cuidando do layout, texto e imagens iniciais.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Visualização de Dados Inteligente</h3>
                            <p className="text-zinc-700">Crie mais de 50 tipos de gráficos e mapas que podem ser alimentados por dados em tempo real ou planilhas.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Writer & Rewriter</h3>
                            <p className="text-zinc-700">Ferramenta integrada para criar textos de marketing, resumir parágrafos ou mudar o tom da escrita instantaneamente.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3"> Brand Kit Automatizado</h3>
                            <p className="text-zinc-700">O sistema 'Brand Wizard' configura sua marca na plataforma apenas lendo o URL do seu site corporativo.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Análise de Engajamento</h3>
                            <p className="text-zinc-700">Rastreie quem visualizou sua apresentação, quanto tempo passou em cada slide e de qual localização acessou.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Interatividade Dinâmica</h3>
                            <p className="text-zinc-700">Adicione pop-ups, menus clicáveis e animações que tornam o conteúdo muito mais envolvente que um slide estático.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Ferramenta 'tudo-em-um' (apresentação, vídeo, infográfico, documentos)",
                            "Capacidades superiores de visualização de dados e gráficos",
                            "Recursos de interatividade exclusivos no mercado",
                            "Analytics integrado para medir o sucesso da sua apresentação",
                            "Exportação flexível, incluindo formatos web (HTML5) e offline",
                            "Curadoria de marca (Branding) automatizada e rigorosa",
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
                            "Versão gratuita é bastante limitada para exportação de arquivos",
                            "A interface pode parecer 'cheia' ou intimidadora para usuários muito casuais",
                            "Preço da assinatura Pro é superior a concorrentes como Canva",
                            "Interface principal ainda não traduzida (apenas o conteúdo da IA)",
                            "O download em PowerPoint pode perder algumas interações web exclusivas",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Visme AI?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de Marketing e Comunicação</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Analistas de Dados e Consultores</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Gerentes de Vendas e CS</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Treinadores Corporativos e RH</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Educadores que precisam de interatividade</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Usuários ocasionais que querem apenas rapidez absoluta</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Pessoas que buscam uma solução 100% gratuita sem marca d'água</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Apresentações minimalistas sem necessidade de dados</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Edição offline robusta e colaborativa</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Projetos estritamente artísticos de pixel-perfect</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Crie conteúdos visuais interativos com Visme AI</h2>
                    <p className="text-lg mb-6 text-zinc-300">Da primeira ideia ao relatório de engajamento final em uma única plataforma</p>
                    <a
                        href="https://www.visme.co/pt-br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar Visme →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Visme se consolida como a plataforma ideal para quem precisa de apresentações corporativas de alta qualidade, ricas em dados e interativas. Sua integração de IA facilita o início do processo criativo, mas é o seu editor avançado que permite atingir um nível de profissionalismo superior a outras ferramentas genéricas.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se sua prioridade é ter controle sobre sua marca, visualizar dados de forma compreensível e medir o impacto do seu conteúdo, o Visme AI é a escolha estratégica definitiva.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
