import Link from "next/link";
import FAQSection from "./FAQSection";
import { faqs } from "./constants";

export const metadata = {
    title: "Chatbase - Crie seu Próprio Chatbot de IA | Review e Guia Completo",
    description: "Conheça o Chatbase: a ferramenta líder para criar chatbots treinados com seus dados. Veja como funciona, preços, integrações e se vale a pena.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/chatbase",
    },
};

export default function ChatbasePage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/chatbase#breadcrumb",
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
                        "name": "IA para Atendimento",
                        "item": "https://www.hypehour.com.br/ia-para-atendimento"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Chatbase",
                        "item": "https://www.hypehour.com.br/ferramentas/chatbase"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/chatbase#software",
                "name": "Chatbase",
                "description": "Uma plataforma no-code que permite construir chatbots de IA personalizados treinados em seus próprios documentos, sites e base de conhecimento.",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "url": "https://www.chatbase.co/",
                "creator": {
                    "@type": "Organization",
                    "name": "Chatbase"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "19.00",
                    "priceCurrency": "USD",
                    "category": "Paid"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map((faq: { question: string; answer: string }) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
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
                    <Link href="/ia-para-atendimento" className="hover:text-black transition">IA para Atendimento</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Chatbase</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        Cb
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Chatbase</h1>
                        <p className="text-lg text-zinc-700">Seu GPT personalizado para atendimento e suporte</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Chatbase</strong> se consolidou como uma das ferramentas mais populares para empresas que desejam aproveitar o poder da IA generativa utilizando seus próprios dados. Em vez de um robô que responde genericamente, o Chatbase permite criar um assistente especializado que conhece profundamente seus produtos, regras e manuais.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seja para suporte técnico, geração de orçamentos automáticos ou atendimento em sites de e-commerce, a plataforma oferece uma interface simples onde qualquer pessoa, sem conhecimento técnico, pode ter um chatbot operando em poucos minutos.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Chatbase?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        É uma plataforma 'No-Code' de construção de chatbots. Ela atua como uma ponte entre os modelos de linguagem mais avançados do mundo (como o GPT-4 da OpenAI) e os seus documentos privados. O resultado é um assistente de chat inteligente que só responde baseado nas informações que você carregou.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como funciona o treinamento?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O processo é simples: você fornece a fonte dos dados. Pode ser o link do seu site (ele faz o rastreamento automático de todas as páginas), arquivos PDF de catálogos, manuais de instrução ou apenas uma lista de perguntas e respostas. A IA processa esses dados e cria um banco de dados de conhecimento que é consultado instantaneamente a cada nova conversa.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Integração em qualquer lugar</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Um dos pontos fortes do Chatbase é a versatilidade. Você pode colocar o bot no seu site via widget, usá-lo dentro do Slack da sua equipe, integrá-lo ao WhatsApp ou até mesmo usá-lo como uma API para construir sua própria interface de atendimento personalizada.
                    </p>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades Principais</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Suporte a Múltiplos Formatos de Dados</h3>
                            <p className="text-zinc-700">Aceita PDFs, URLs, documentos de texto, links do Notion e entrada direta de texto. Você pode misturar várias fontes para um treinamento completo.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Captação de Leads Integrada</h3>
                            <p className="text-zinc-700">Configure formulários automáticos para que o chatbot peça o e-mail e contato do cliente antes de iniciar ou terminar um atendimento, ajudando no funil de vendas.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Escolha do Modelo de Linguagem</h3>
                            <p className="text-zinc-700">Escolha entre modelos como GPT-3.5 para velocidade e economia, ou modelos como GPT-4 e Claude 3.5 Sonnet para máxima inteligência e raciocínio complexo.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Revisão e Correção Manual</h3>
                            <p className="text-zinc-700">Veja exatamente o que o bot respondeu e corrija qualquer erro. A IA aprenderá com o seu feedback e nunca mais repetirá o mesmo erro naquela pergunta.</p>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Casos de Uso Comuns</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Chat de Atendimento em Sites",
                            "Base de Conhecimento para Equipes",
                            "Geração de Leads Qualificados",
                            "Suporte Técnico 24 horas",
                            "Atendimento de E-commerce",
                            "Agendamento via Chatbot",
                            "Triagem de Pacientes",
                            "Assistente Interno de RH",
                            "Manual Interativo de Produtos",
                            "Onboarding de Novos Usuários",
                            "Resumo de Documentos PDFs",
                            "Pesquisa em Centrais de Ajuda",
                            "Automação de Orçamentos",
                            "Chatbot para Eventos",
                            "Tradução de FAQ Instantânea",
                            "Assistente de Vendas Educativo",
                        ].map((item, index) => (
                            <div key={index} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                                <p className="text-zinc-700 text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Simplicidade extrema para treinar com seus próprios dados",
                            "Não exige nenhuma linha de código para ser configurado",
                            "Suporte a dezenas de idiomas nativamente",
                            "Possibilidade de handoff (transição) para humanos",
                            "Integração rápida com WhatsApp e Slack",
                            "Preço acessível para startups e pequenas empresas",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Considerações</h2>
                    <div className="grid gap-4">
                        {[
                            "Remoção da marca Chatbase exige pagamento extra",
                            "Planos básicos podem ter limites de mensagens baixos para sites grandes",
                            "Interface de chat é simples e com poucas opções de design avançado nativo",
                            "Pode alucinar se a base de conhecimento for muito confusa ou contraditória",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Chatbase?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Donos de sites que recebem muitas perguntas recorrentes</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de suporte que querem automatizar o nível 1</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Agências que desejam oferecer bots personalizados para clientes</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Empresas com documentações extensas em PDF</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Pode não ser ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Altíssimos volumes de mensagens (pode ficar caro)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Necessidade de fluxos de bot altamente complexos e ramificados</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Crie seu chatbot treinado em minutos</h2>
                    <p className="text-lg mb-6 text-zinc-300">Treine seu assistente com seus PDFs e seu site gratuitamente</p>
                    <a
                        href="https://www.chatbase.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Experimentar o Chatbase Grátis →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Chatbase democratizou o acesso a chatbots inteligentes. É uma ferramenta robusta, fácil de implementar e que entrega resultados imediatos na redução da carga de suporte humano e no aumento da eficiência de atendimento digital.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você precisa de uma solução que "simplesmente funcione" e que seja capaz de entender seus dados específicos com precisão, o Chatbase é atualmente a melhor escolha custo-benefício do mercado.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
