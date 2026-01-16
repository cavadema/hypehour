
import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Sana (Sana Labs) - Plataforma de IA para Gestão do Conhecimento | Review",
    description: "Conheça a Sana: a plataforma de IA que unifica busca, aprendizado e conhecimento corporativo. Saiba como ela transforma a produtividade da sua empresa.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/sanalabs",
    },
};

export default function SanaPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/sanalabs#breadcrumb",
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
                        "name": "Assistentes de IA",
                        "item": "https://www.hypehour.com.br/assistentes-de-ia"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Sana",
                        "item": "https://www.hypehour.com.br/ferramentas/sanalabs"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/sanalabs#software",
                "name": "Sana",
                "description": "Sana é uma plataforma de IA para empresas que unifica gestão do conhecimento, busca universal e aprendizado (LMS) em uma única interface inteligente.",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "url": "https://sanalabs.com",
                "creator": {
                    "@type": "Organization",
                    "name": "Sana Labs"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "category": "Enterprise"
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
                    <Link href="/assistentes-de-ia" className="hover:text-black transition">Assistentes de IA</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Sana</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        S
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Sana</h1>
                        <p className="text-lg text-zinc-700">O cérebro da sua empresa: IA para busca, aprendizado e conhecimento.</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        A Sana (anteriormente Sana Labs) é uma plataforma de inteligência artificial revolucionária projetada para organizar o caos de informações dentro das empresas. Ela atua como um "cérebro digital" que conecta todas as suas ferramentas (Slack, Drive, Notion, GitHub, etc.) e permite buscar, aprender e criar conteúdo a partir de um único lugar.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Diferente de wikis antigas ou LMSs travados, a Sana usa IA generativa de ponta para entender o contexto do seu trabalho, respondendo perguntas complexas com base nos documentos da sua empresa e automatizando a criação de treinamentos e onboarding.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é a Sana?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        A Sana é um ecossistema de gestão do conhecimento impulsionado por IA. Ela resolve o problema do "conhecimento fragmentado" — onde informações cruciais estão espalhadas por dezenas de aplicativos diferentes, difíceis de encontrar.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Ela combina três produtos principais em uma única plataforma:
                        <br />
                        <strong>1. Sana Search:</strong> Uma busca universal que encontra qualquer coisa, em qualquer app da empresa.
                        <br />
                        <strong>2. Sana Assistant:</strong> Um assistente tipo ChatGPT, mas fundamentado (grounded) nos dados reais da sua empresa.
                        <br />
                        <strong>3. Sana Learn:</strong> Uma plataforma de aprendizado (LMS) adaptativa que cria cursos personalizados automaticamente.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Conecte seus apps</h3>
                                <p className="text-zinc-700">Integre a Sana com suas ferramentas de trabalho: Google Drive, Slack, Microsoft Teams, Notion, Salesforce, Github e mais.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">A IA indexa tudo</h3>
                                <p className="text-zinc-700">A tecnologia RAG (Retrieval-Augmented Generation) da Sana lê e organiza seus dados de forma segura, criando um índice de conhecimento unificado.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Pergunte e Crie</h3>
                                <p className="text-zinc-700">Use a barra de busca para encontrar arquivos ou o chat para fazer perguntas ("Qual é a política de reembolso?"). A IA responde citando as fontes.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Agentes em Ação</h3>
                                <p className="text-zinc-700">Crie agentes que executam tarefas complexas, como "analisar este relatório de vendas e criar uma apresentação de slides resumida".</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Busca universal corporativa",
                            "Onboarding de novos funcionários",
                            "Treinamento e desenvolvimento (L&D)",
                            "Suporte a vendas (Sales Enablement)",
                            "Criação automática de cursos",
                            "Gestão de conhecimento (Wiki)",
                            "Resumo de documentos complexos",
                            "Automação de workflows",
                            "Respostas rápidas de RH",
                            "Conformidade e Compliance",
                            "Centralização de informações",
                            "Análise de dados de múltiplos apps",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Busca Universal Inteligente</h3>
                            <p className="text-zinc-700">Pare de abrir 10 abas para achar um arquivo. Pesquise uma vez e a Sana varre Slack, Drive, Jira e emails para encontrar exatamente o que você precisa.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Assistente de IA Grounded</h3>
                            <p className="text-zinc-700">Converse com seus dados. Faça perguntas complexas sobre projetos ou processos internos e receba respostas confiáveis com links diretos para as fontes.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Criação de Cursos com IA</h3>
                            <p className="text-zinc-700">Transforme PDFs, vídeos ou documentos do Google Docs em cursos interativos com quizzes e resumos em segundos, agilizando o treinamento de equipes.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Agentes Autônomos</h3>
                            <p className="text-zinc-700">Configure agentes de IA para monitorar mudanças, atualizar CRMs ou gerar relatórios periódicos automaticamente, liberando tempo humano.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Reuniões Inteligentes</h3>
                            <p className="text-zinc-700">A Sana grava, transcreve e resume reuniões, conectando o que foi falado com os documentos e projetos relevantes da empresa.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Centraliza todo o conhecimento da empresa em um só lugar",
                            "Reduz drasticamente o tempo gasto procurando informações (até 20% do tempo de trabalho)",
                            "Melhora a experiência de onboarding de novos colaboradores",
                            "Segurança de nível empresarial (seus dados não treinam modelos públicos)",
                            "Interface moderna e intuitiva, muito superior a intranets antigas",
                            "IA que realmente entende o contexto do seu negócio",
                            "Integração com praticamente todas as ferramentas de SaaS modernas",
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
                            "Focado em empresas (B2B), pode ser caro para times muito pequenos",
                            "Requer integração inicial e permissões de acesso aos dados da empresa",
                            "A qualidade das respostas depende da qualidade da documentação interna existente",
                            "Curva de aprendizado para times acostumados com processos manuais",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é a Sana?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Empresas em crescimento rápido (Scale-ups)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de People e RH (L&D)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Times de Vendas e Suporte (Enablement)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Empresas remotas ou híbridas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Gestores de conhecimento e TI</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Freelancers ou uso puramente pessoal</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca apenas um chatbot genérico (sem dados da empresa)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Empresas sem cultura de documentação digital</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Organize o conhecimento da sua empresa</h2>
                    <p className="text-lg mb-6 text-zinc-300">Descubra como a Sana pode transformar a forma como sua equipe trabalha e aprende.</p>
                    <a
                        href="https://sanalabs.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Conhecer a Sana →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        A Sana representa o futuro da gestão de conhecimento corporativo. Ao unir busca, aprendizado e assistência de IA em uma única plataforma elegante e interconectada, ela elimina as barreiras de informação que tornam as grandes empresas lentas.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se sua empresa sofre com informações espalhadas e dificuldade de onboarding, a Sana não é apenas uma ferramenta, é uma atualização necessária para o sistema operacional do seu negócio.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
