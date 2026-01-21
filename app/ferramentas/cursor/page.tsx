import Link from "next/link";
import FAQSection from "./FAQSection";
import { faqs } from "./constants";

export const metadata = {
    title: "Cursor AI - O Editor de Código com Inteligência Artificial | Review",
    description: "Conheça o Cursor: o editor focado em IA que está substituindo o VS Code para muitos desenvolvedores. Veja como funciona, recursos e preços.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/cursor",
    },
};

export default function CursorPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/cursor#breadcrumb",
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
                        "name": "IA para Desenvolvedores",
                        "item": "https://www.hypehour.com.br/ia-para-desenvolvedores"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Cursor",
                        "item": "https://www.hypehour.com.br/ferramentas/cursor"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/cursor#software",
                "name": "Cursor AI",
                "description": "Um editor de código focado em IA, fork do VS Code, que oferece assistência inteligente profunda, chat contextual e edição automática de arquivos.",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Windows, macOS, Linux",
                "url": "https://www.cursor.com/",
                "creator": {
                    "@type": "Organization",
                    "name": "Anysphere"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "20.00",
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
                    <Link href="/ia-para-desenvolvedores" className="hover:text-black transition">IA para Desenvolvedores</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Cursor</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        Cu
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Cursor AI</h1>
                        <p className="text-lg text-zinc-700">O editor de código 'AI-first' que está mudando o desenvolvimento</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Cursor</strong> não é apenas mais um plugin para o seu editor; ele é um editor completo, construído sobre o alicerce do VS Code, mas reimaginado com a Inteligência Artificial no centro de tudo. Enquanto outras ferramentas tentam se adaptar à IA, o Cursor nasceu dela.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Ao indexar todo o seu repositório localmente e integrar modelos como Claude 3.5 Sonnet e GPT-4o diretamente no fluxo de digitação, o Cursor permite que desenvolvedores criem aplicações inteiras com uma velocidade e precisão que antes pareciam impossíveis.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Cursor?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Technicamente, o Cursor é um 'fork' do Visual Studio Code. Isso significa que ele parece e funciona exatamente como o VS Code, suportando as mesmas extensões e atalhos, mas com uma camada profunda de inteligência artificial que entende não apenas o arquivo aberto, mas todo o seu contexto de projeto.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">A Revolução do Contexto</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O grande trunfo do Cursor é o seu sistema de indexação. Ele 'lê' o seu projeto e cria um índice semântico. Quando você pergunta algo no chat, a IA sabe quais componentes chamam qual função, como o banco de dados está estruturado e quais são os tipos definidos, entregando respostas muito mais precisas que um assistente genérico.
                    </p>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades de Elite</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Composer (AI Agent)</h3>
                            <p className="text-zinc-700">O recurso mais avançado, onde você diz o que quer construir e a IA cria arquivos, edita código existente e roda comandos simultaneamente em todo o projeto.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Cursor Tab (Autocomplete Preditivo)</h3>
                            <p className="text-zinc-700">Muito além de completar palavras, o Tab sugere edições multi-linha e refatorações em tempo real enquanto você digita, antecipando seu próximo passo.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Chat com Visão de Código</h3>
                            <p className="text-zinc-700">Pressione Cmd+L e converse com seu repositório. Peça para encontrar bugs, sugerir melhorias de performance ou explicar como um fluxo complexo funciona.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Fix with AI</h3>
                            <p className="text-zinc-700">Ao encontrar um erro de linter ou de compilação, um único botão permite que a IA analise o erro e aplique a correção exata instantaneamente.</p>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como o Cursor Acelera seu Workflow</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Refatoração de Código Legado",
                            "Criação Automática de Testes",
                            "Conversão de Linguagens",
                            "Explicação de Codebases Complexas",
                            "Geração de Boilerplate",
                            "Correção Automática de Bugs",
                            "Documentação de Código",
                            "Escrita de Consultas SQL",
                            "Desenvolvimento Front-end Ágil",
                            "Criação de APIs REST",
                            "Configuração de Docker/CI-CD",
                            "Otimização de Performance",
                            "Migração de Frameworks",
                            "Busca Semântica no Projeto",
                            "Integração de Bibliotecas Novas",
                            "Debug de Logs de Erro",
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
                            "Transição invisível para quem já usa VS Code",
                            "Melhor compreensão de contexto do mercado atual",
                            "Suporte aos modelos de linguagem mais potentes (Claude 3.5 Sonnet)",
                            "Recurso Composer que atua como um verdadeiro agente de software",
                            "Velocidade de desenvolvimento aumentada em até 3x",
                            "Privacidade de dados com o 'Privacy Mode'",
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
                            "Pode ser mais pesado em memória que o VS Code puro",
                            "O plano gratuito é limitado para uso intensivo de IA",
                            "Dependência da internet para os recursos de chat e geração",
                            "Ocasionalmente pode sugerir abordagens 'preguiçosas' se não monitorado",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Cursor?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Desenvolvedores VS Code buscando produtividade máxima</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Engenheiros de software lidando com repositórios legados gigantes</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Founders e desenvolvedores solo que precisam 'fazer por três'</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Times que desejam padronizar e acelerar o code review</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Pode não ser ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Desenvolvedores que preferem IDEs muito específicas (JetBrains, Xcode)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Ambientes corporativos com restrições severas de saída de rede para IA</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Experimente o futuro do desenvolvimento</h2>
                    <p className="text-lg mb-6 text-zinc-300">Baixe o Cursor e sinta o poder de programar com um agente de IA integrado.</p>
                    <a
                        href="https://www.cursor.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Download do Cursor AI →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Cursor provou que o editor de código do futuro não é apenas uma ferramenta de escrita, mas um parceiro de pensamento. Ao trazer a IA para o coração do desenvolvimento de software, ele redefine o que significa ser um programador produtivo em 2024.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você ainda está colando código no ChatGPT, está perdendo tempo. O Cursor traz esse poder para onde o seu cursor está, literalmente.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
