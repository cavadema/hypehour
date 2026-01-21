import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Smallppt AI - Criador de Apresentações Multifuncional | Review",
    description: "Conheça o Smallppt AI: a ferramenta de IA que cria slides a partir de Word, PDF, URLs e até áudio. Veja como funciona, preços e funcionalidades exclusivas.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/smallppt",
    },
};

export default function SmallpptPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/smallppt#breadcrumb",
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
                        "name": "Smallppt",
                        "item": "https://www.hypehour.com.br/ferramentas/smallppt"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/smallppt#software",
                "name": "Smallppt AI",
                "description": "Uma plataforma de IA versátil que automatiza a criação de apresentações a partir de múltiplos formatos de entrada, incluindo áudio e documentos complexos.",
                "applicationCategory": "DesignApplication",
                "operatingSystem": "Web",
                "url": "https://smallppt.com/",
                "creator": {
                    "@type": "Organization",
                    "name": "Smallppt"
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
                    <span className="text-black font-medium">Smallppt</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        Sm
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Smallppt AI</h1>
                        <p className="text-lg text-zinc-700">Criação de slides inteligente a partir de múltiplos conteúdos</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Smallppt AI se destaca no mercado de inteligência artificial pela sua incrível versatilidade na criação de apresentações. Diferente de ferramentas que aceitam apenas texto, o Smallppt permite que você transforme documentos Word, PDFs, sites inteiros e até arquivos de áudio em slides profissionais e prontos para uso.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Integrando os modelos mais poderosos como GPT-4o e Gemini, a plataforma não apenas gera o design, mas oferece uma suíte completa de produtividade, incluindo edição de PDF, criação de mapas mentais e um assistente de escrita inteligente, tudo focado em economizar tempo e elevar a qualidade do seu trabalho.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Smallppt AI?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Smallppt AI é um ecossistema de produtividade que utiliza inteligência artificial generativa para facilitar a comunicação visual. Sua ferramenta principal é o gerador de slides, mas ele também oferece editores de PDF e assistentes de pesquisa integrados em uma interface única e moderna.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Quais conteúdos ele transforma em slides?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        A versatilidade é o ponto forte: você pode usar um tópico curto (prompt), importar documentos (Word, PDF), colar links de páginas da web (URL) ou até converter narrações em áudio diretamente para uma estrutura de apresentação organizada.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Smallppt é gratuito?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Ele adota o modelo freemium. No plano gratuito, você pode testar a ferramenta com um limite de 4 gerações de slides. Planos pagos liberam o uso ilimitado, acesso a modelos de IA superiores e a remoção de marcas d'água.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O que é o plano Lifetime (Vitalício)?</h2>
                    <p className="text-zinc-700 leading-relaxed">
                        O Smallppt oferece uma opção rara no mercado de IA: o acesso vitalício. Através de um pagamento único, o usuário garante acesso permanente a todos os recursos premium da plataforma, sem a necessidade de assinaturas recorrentes mensais.
                    </p>
                </section>

                {/* Como funciona */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como criar apresentações no Smallppt</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha seu método de entrada</h3>
                                <p className="text-zinc-700">Escolha entre digitar um texto, enviar um arquivo Word/PDF, colar um link de site ou até enviar um arquivo de áudio.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">IA gera o rascunho</h3>
                                <p className="text-zinc-700">A ferramenta processa o conteúdo, cria a estrutura dos tópicos e seleciona o design visual automaticamente.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Ajuste e Personalize</h3>
                                <p className="text-zinc-700">Use o editor online para editar textos, trocar imagens ou usar o AI Chat para pesquisar novos fatos e imagens para seus slides.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Exporte para PowerPoint ou PDF</h3>
                                <p className="text-zinc-700">Baixe sua apresentação em formato PPTX totalmente editável ou salve como PDF para compartilhar com seu público.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Aplicações do Smallppt AI</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Resumos de PDFs longos",
                            "Apresentações de reuniões",
                            "Trabalhos acadêmicos",
                            "Criação de Mapas Mentais",
                            "Propostas de projetos",
                            "Relatórios empresariais",
                            "Conversão de áudio em slides",
                            "Apresentações de vendas",
                            "Planos de aula rápidos",
                            "Transformação de sites em PPT",
                            "Edição e gestão de PDFs",
                            "Suporte em brainstormings",
                            "Currículos criativos",
                            "Portfólios de design",
                            "Resumos de artigos web",
                            "Documentação técnica",
                            "Treinamentos internos",
                            "Pitch decks profissionais",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Multi-Input Slide Generator</h3>
                            <p className="text-zinc-700">Transforma textos, documentos Word/PDF, áudios e links de sites diretamente em apresentações estruturadas.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Mind Map to PPT</h3>
                            <p className="text-zinc-700">Permite criar mapas mentais para organizar ideias visualmente e convertê-los em slides com um único clique.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Integração GPT-4o e Gemini</h3>
                            <p className="text-zinc-700">Acesso aos modelos de linguagem mais avançados do mundo para geração de conteúdo preciso e criativo.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Writer & Summarizer</h3>
                            <p className="text-zinc-700">Ferramenta para reescrever, expandir ou condensar informações, facilitando o preenchimento dos slides.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Suíte de Ferramentas PDF</h3>
                            <p className="text-zinc-700">Inclui editor, conversor e ferramentas para mesclar ou dividir arquivos PDF sem precisar de outro software.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Suporte Total em Português</h3>
                            <p className="text-zinc-700">Tanto a interface quanto a IA operam fluentemente em português, facilitando o uso para o público brasileiro e europeu.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Aceita o maior volume de formatos de entrada do mercado (PDF, Word, Áudio, URL)",
                            "Exportação em PPTX 100% editável e compatível com Office",
                            "Disponibilidade de um plano Vitalício (pagamento único)",
                            "Interface limpa e rica em ferramentas auxiliares (PDF, Mapas Mentais)",
                            "IA extremamente precisa na tradução e escrita em português",
                            "Facilidade para transformar conteúdos densos em slides简洁 (concisos)",
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
                            "Plano gratuito muito limitado (apenas 4 gerações)",
                            "Grande quantidade de ferramentas pode exigir tempo para explorar tudo",
                            "Assinaturas mensais individuais têm custo superior a algumas opções básicas",
                            "Necessita de internet estável para o processamento da IA",
                            "As imagens geradas pela IA podem precisar de substituição para temas muito específicos",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Smallppt AI?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Estudantes e acadêmicos que precisam resumir PDFs e teses</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Profissionais que fazem apresentações a partir de relatórios longos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Palestrantes que usam mapas mentais para organizar ideias</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Pessoas que buscam uma solução definitiva com plano Vitalício</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Usuários que precisam converter áudios de aulas em slides</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca uma ferramenta 100% gratuita para uso contínuo</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Designers que preferem criar cada slide do zero manualmente</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Empresas com restrições severas de upload de documentos na nuvem</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Uso offline completo (a IA exige conexão)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Projetos que exigem animações interativas web ultra-complexas</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Transforme qualquer conteúdo em apresentações com IA</h2>
                    <p className="text-lg mb-6 text-zinc-300">Word, PDF, Áudio ou URL: crie slides profissionais em segundos hoje mesmo</p>
                    <a
                        href="https://smallppt.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar Smallppt AI →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Smallppt AI é uma das ferramentas mais completas e versáteis para quem precisa ir além do simples 'texto para slide'. Ao aceitar múltiplos formatos de entrada e oferecer uma suíte de produtividade integrada, ele se torna uma 'central de comando' para qualquer comunicador moderno.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Seja pelo raro plano vitalício ou pela facilidade de uso em português, o Smallppt é uma solução robusta que equilibra perfeitamente poder de processamento de IA com ferramentas práticas do dia a dia.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
