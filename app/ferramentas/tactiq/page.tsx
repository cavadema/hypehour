
import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Tactiq - Transcrição e Resumo de Reuniões com IA | Review",
    description: "Conheça o Tactiq: ferramenta de IA para transcrever reuniões do Google Meet, Zoom e Teams em tempo real. Veja funcionalidades, preço e se vale a pena.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/tactiq",
    },
};

export default function TactiqPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/tactiq#breadcrumb",
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
                        "name": "IA para Ata de Reunião",
                        "item": "https://www.hypehour.com.br/ia-para-fazer-ata-reuniao"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Tactiq",
                        "item": "https://www.hypehour.com.br/ferramentas/tactiq"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/tactiq#software",
                "name": "Tactiq",
                "description": "Tactiq é uma ferramenta de IA que transcreve e resume reuniões do Google Meet, Zoom e Microsoft Teams em tempo real, gerando insights e tarefas automaticamente.",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, Chrome Extension",
                "url": "https://tactiq.io",
                "creator": {
                    "@type": "Organization",
                    "name": "Tactiq"
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
                    <Link href="/ia-para-fazer-ata-reuniao" className="hover:text-black transition">IA para Ata de Reunião</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Tactiq</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        T
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Tactiq</h1>
                        <p className="text-lg text-zinc-700">Transcrição e resumos de reuniões em tempo real com IA</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Tactiq é uma ferramenta de produtividade indispensável para quem passa muito tempo em reuniões. Ele transcreve automaticamente chamadas do Google Meet, Zoom e Microsoft Teams em tempo real, garantindo que você nunca mais perca um detalhe importante ou precise fazer anotações manuais frenéticas.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Usando a tecnologia da OpenAI (GPT), o Tactiq vai além da transcrição: ele identifica itens de ação, resume discussões, destaca decisões importantes e permite fazer perguntas ao "bot" sobre o que foi falado na reunião, transformando conversas em resultados práticos.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Tactiq?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        Tactiq é uma extensão de navegador e plataforma de IA projetada para capturar, transcrever e resumir reuniões online. Ele se integra diretamente às plataformas de videoconferência mais populares, funcionando silenciosamente em segundo plano para gerar notas precisas e estruturadas.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Seu diferencial é a capacidade de usar IA generativa para transformar transcrições brutas em documentos úteis, como atas de reunião, listas de tarefas, follow-ups de vendas e tickets para gerenciadores de projetos (como Jira e Notion) com um único clique.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Instale a extensão</h3>
                                <p className="text-zinc-700">Adicione a extensão do Tactiq ao seu navegador (Chrome ou Edge). É gratuito e rápido.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Entre na reunião</h3>
                                <p className="text-zinc-700">Inicie sua chamada no Google Meet, Zoom ou Teams. O Tactiq abrirá automaticamente um painel lateral.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Transcrição em tempo real</h3>
                                <p className="text-zinc-700">Veja a transcrição acontecendo ao vivo. Destaque pontos importantes manualmente ou deixe a IA capturar.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Receba o resumo e ações</h3>
                                <p className="text-zinc-700">Ao final, receba um email com a transcrição completa, resumo gerado por IA e lista de tarefas identificadas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Gerar atas de reunião automáticas",
                            "Identificar tarefas e action items",
                            "Resumir reuniões longas",
                            "Consultar decisões passadas (Ask AI)",
                            "Compartilhar notas com o time",
                            "Integração com CRM e Notion",
                            "Acompanhamento de vendas",
                            "Entrevistas de recrutamento",
                            "Daily scrums e stand-ups",
                            "Reuniões de briefing com clientes",
                            "Aulas e webinars online",
                            "Documentação de projetos",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Transcrição ao vivo (Live Transcripts)</h3>
                            <p className="text-zinc-700">Captura cada palavra dita na reunião em tempo real, identificando os falantes e permitindo highlights instantâneos.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Meeting Kits</h3>
                            <p className="text-zinc-700">Kits de prompts predefinidos para gerar resumos específicos, como "Decisões de Design", "Update de Projeto" ou "Follow-up de Vendas".</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Integrações poderosas</h3>
                            <p className="text-zinc-700">Conecte com Slack, Notion, Asana, Trello, Salesforce e HubSpot para enviar notas e tarefas diretamente para seu fluxo de trabalho.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ask AI (Chat com a reunião)</h3>
                            <p className="text-zinc-700">Faça perguntas como "O que o João prometeu entregar?" ou "Quais foram os prazos definidos?" e a IA responde baseada na transcrição.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Suporte a múltiplos idiomas</h3>
                            <p className="text-zinc-700">Transcreve reuniões em português, inglês, espanhol, francês, alemão e mais de 10 outros idiomas com alta precisão.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Economiza horas de trabalho manual pós-reunião",
                            "Garante que nenhuma informação ou tarefa seja perdida",
                            "Foco total na conversa, sem a distração de anotar",
                            "Fácil de compartilhar informações com quem não participou",
                            "Integração perfeita com ferramentas existentes (Google, Zoom, Teams)",
                            "Plano gratuito funcional para uso moderado (10 reuniões/mês)",
                            "Segurança e privacidade com certificação SOC-2",
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
                            "Requer instalação de extensão no navegador (para Google Meet)",
                            "A transcrição depende da qualidade do áudio dos participantes",
                            "Plano gratuito tem limite de 10 reuniões por mês",
                            "Pode não capturar nuances de tom ou sarcasmo perfeitamente",
                            "Funciona apenas em reuniões online (não grava reuniões presenciais diretamente)",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Tactiq?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Gerentes de produtos e projetos (PMs)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de vendas e customer success</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Engenheiros e desenvolvedores (Scrum)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Profissionais de RH e recrutadores</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Freelancers e consultores</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Reuniões estritamente presenciais (offline)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem prefere gravar áudio/vídeo completo (foco é texto)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Uso sem navegador (em apps desktop nativos, exceto Zoom)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Pare de anotar durante as reuniões</h2>
                    <p className="text-lg mb-6 text-zinc-300">Experimente o Tactiq gratuitamente e deixe a IA cuidar das suas atas</p>
                    <a
                        href="https://tactiq.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Instalar Tactiq Grátis →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Tactiq é uma ferramenta essencial para a era do trabalho remoto e híbrido. Ele remove a carga cognitiva de ter que "lembrar e anotar" tudo, permitindo que você participe ativamente das discussões. A qualidade dos resumos e a facilidade de gerar ações pós-reunião pagam o investimento rapidamente em tempo economizado.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você usa Google Meet, Zoom ou Teams regularmente, o Tactiq é uma daquelas ferramentas que você instala e se pergunta como viveu sem ela.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
