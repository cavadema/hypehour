import Link from "next/link";
import FAQSection from "./FAQSection";
import { faqs } from "./constants";

export const metadata = {
    title: "Intercom Fin AI - Agente de Atendimento Inteligente | Review e Análise",
    description: "Conheça o Intercom Fin: o agente de IA que resolve até 50% dos chamados de suporte automaticamente. Veja como funciona, preços, vantagens e desvantagens.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/intercom",
    },
};

export default function IntercomPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/intercom#breadcrumb",
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
                        "name": "Intercom Fin AI",
                        "item": "https://www.hypehour.com.br/ferramentas/intercom"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/intercom#software",
                "name": "Intercom Fin AI",
                "description": "Um agente de atendimento ao cliente baseado em IA que resolve dúvidas complexas de forma autônoma usando a base de conhecimento da empresa.",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web",
                "url": "https://www.intercom.com/ai",
                "creator": {
                    "@type": "Organization",
                    "name": "Intercom"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0.99",
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
                    <span className="text-black font-medium">Intercom</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        Fi
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Intercom Fin AI</h1>
                        <p className="text-lg text-zinc-700">O novo padrão de atendimento ao cliente impulsionado por IA</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        A Intercom revolucionou o mercado de atendimento ao cliente com o lançamento do <strong>Fin</strong>, seu agente de IA generativa de última geração. Diferente dos chatbots tradicionais baseados em árvores de decisão rígidas, o Fin utiliza modelos avançados de linguagem para entender o contexto e resolver problemas dos clientes de maneira conversacional.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seu grande diferencial é a capacidade de "aprender" toda a base de conhecimento de uma empresa em segundos, oferecendo respostas precisas em mais de 45 idiomas e garantindo uma redução drástica no volume de tickets que chegam aos atendentes humanos.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Fin AI?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O Fin é um Agente de IA (AI Agent) autônomo integrado à plataforma de atendimento Intercom. Ele foi construído para ser o primeiro ponto de contato de um cliente, resolvendo questões complexas sem a necessidade de intervenção humana, mas sabendo exatamente quando passar o caso para um especialista humano.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como funciona na prática?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Basta conectar sua Central de Ajuda (Help Center), PDFs ou links de sites ao Fin. Ele processa essas informações e as utiliza como única fonte de verdade para as respostas. Quando um cliente faz uma pergunta no chat ou via e-mail, o Fin pesquisa o banco de dados e gera uma resposta segura e fundamentada.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Preço por resolução: Um modelo inovador</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        A Intercom adotou um modelo de precificação baseado em sucesso: você paga <strong>$0,99 por resolução</strong>. Isso significa que se a IA atender o cliente e ele ficar satisfeito (sem precisar falar com um humano), a cobrança é realizada. É um modelo focado em ROI (Retorno sobre Investimento) direto.
                    </p>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades Inteligentes</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Respostas Multilíngues Autênticas</h3>
                            <p className="text-zinc-700">O Fin fala mais de 45 idiomas nativamente, permitindo que sua empresa ofereça suporte global 24/7 sem precisar contratar equipes em todos os fusos horários.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Copilot para Atendentes</h3>
                            <p className="text-zinc-700">Um assistente que sugere respostas, resume históricos de conversas e encontra informações em documentos internos para ajudar sua equipe humana a ser 2x mais rápida.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ações e Fluxos (Procedures)</h3>
                            <p className="text-zinc-700">Enfrentando mais do que perguntas frequentes? Ensine o Fin a verificar status de pedidos, cancelar assinaturas ou atualizar dados consultando sua API.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Analytics de IA Detalhado</h3>
                            <p className="text-zinc-700">Acompanhe taxas de resolução, satisfação dos clientes e identifique lacunas na sua base de conhecimento através de insights gerados pela própria IA.</p>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Aplicações Reais para o Fin AI</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Suporte ao Cliente 24/7",
                            "Respostas a Perguntas Frequentes",
                            "Rastreamento de Pedidos",
                            "Reset de Senhas Automático",
                            "Suporte Multilíngue Escalonado",
                            "Atendimento em Redes Sociais",
                            "Resumo de Tickets para Humanos",
                            "Automação de E-mails de Suporte",
                            "Orientação de Onboarding",
                            "Geração de Leads Qualificados",
                            "Verificação de Status de Serviços",
                            "Agendamento de Demonstrações",
                            "Coleta de CSAT/NPS",
                            "Triagem de Problemas Técnicos",
                            "Busca em Documentação Interna",
                            "Apoio em Vendas Self-Service",
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
                            "Configuração 'No-Code' extremamente rápida (em minutos)",
                            "Custo baseado em resultados reais (resoluções bem-sucedidas)",
                            "Integração nativa com a melhor plataforma de atendimento do mundo",
                            "Qualidade de resposta superior baseada em GPT-4",
                            "Capacidade de realizar ações via API (Procedures)",
                            "Handoff (passagem) invisível e suave para humanos quando necessário",
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
                            "Custo por resolução pode escalar em volumes massivos se não monitorado",
                            "Dependência total da qualidade da sua base de conhecimento",
                            "Algumas personalizações avançadas exigem os planos mais caros da plataforma",
                            "A IA pode ocasionalmente falhar em temas extremamente subjetivos",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Intercom Fin?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Empresas SaaS com alto volume de tickets repetitivos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Negócios de E-commerce com suporte global</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes que precisam escalar o atendimento sem aumentar o headcount</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Startups que buscam eficiência máxima desde o dia 1</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Pode não ser ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Empresas sem nenhuma base de conhecimento documentada</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Suporte focado exclusivamente em questões jurídicas ou médicas críticas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Negócios com orçamentos de software extremamente restritos</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Reduza sua carga de suporte com Intercom Fin AI</h2>
                    <p className="text-lg mb-6 text-zinc-300">Resolva metade dos seus problemas de atendimento hoje mesmo com IA Agent</p>
                    <a
                        href="https://www.intercom.com/ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Conheça o Intercom Fin →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Intercom Fin AI não é apenas mais um bot; é uma mudança de paradigma no suporte ao cliente. Ao focar em resoluções autênticas e um modelo de preço justo por sucesso, ele oferece às empresas a capacidade de crescer de forma sustentável, mantendo uma experiência de cliente premium.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você já utiliza a Intercom ou está buscando uma solução de suporte que coloque a IA no centro da estratégia, o Fin é, sem dúvida, a ferramenta mais madura e eficaz disponível no mercado atualmente.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
