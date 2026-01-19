import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Ollama - Execute Modelos de IA (LLMs) Localmente | Review Completo",
    description: "Conheça o Ollama: a ferramenta open-source para rodar modelos como Llama 3, Mistral e Gemma no seu PC com total privacidade e sem internet.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/ollama",
    },
};

export default function OllamaPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/ollama#breadcrumb",
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
                        "name": "Pacotes e Agregadores",
                        "item": "https://www.hypehour.com.br/pacotes-de-ferramentas-e-agregadores-ia"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Ollama",
                        "item": "https://www.hypehour.com.br/ferramentas/ollama"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/ollama#software",
                "name": "Ollama",
                "description": "Ollama é uma ferramenta de código aberto que permite configurar e rodar modelos de linguagem grandes localmente no macOS, Linux e Windows.",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "macOS, Linux, Windows",
                "url": "https://ollama.com",
                "creator": {
                    "@type": "Organization",
                    "name": "Ollama"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "category": "Open Source"
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
                    <span className="text-black font-medium">Ollama</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-black text-2xl font-bold shadow-sm">
                        🦙
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Ollama</h1>
                        <p className="text-lg text-zinc-700">Rode os melhores modelos de IA localmente no seu computador.</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow-sm">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Ollama é uma das ferramentas mais populares e poderosas para quem deseja explorar o mundo da inteligência artificial generativa com total privacidade e controle. Ele permite que você baixe e execute modelos como Llama 3, Mistral, Gemma e DeepSeek diretamente no seu hardware, eliminando a dependência da nuvem e de assinaturas mensais.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Com uma interface simples via linha de comando (CLI) e uma API robusta, o Ollama se tornou o padrão ouro para desenvolvedores que constroem aplicações baseadas em IA local, permitindo integração fácil com interfaces web, IDEs e frameworks de automação.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Ollama?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        Ollama é um framework de código aberto projetado para simplificar a execução de grandes modelos de linguagem (LLMs). Ele empacota os pesos dos modelos, configurações e datasets em uma estrutura unificada (Modelfile), facilitando a instalação e o gerenciamento de diferentes IAs em um único lugar.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Ao contrário de serviços como o ChatGPT, o Ollama não processa seus dados em servidores externos. Tudo acontece dentro da sua CPU ou GPU, garantindo que suas informações sensíveis nunca saiam do seu dispositivo.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Instalação Simples</h3>
                                <p className="text-zinc-700">Baixe o instalador para seu sistema (Mac, Linux ou Windows). Em poucos segundos, o ambiente local de IA está pronto.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Pull de Modelos</h3>
                                <p className="text-zinc-700">Use comandos como "ollama run llama3" para baixar automaticamente os modelos da biblioteca oficial do Ollama.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Chat Imediato</h3>
                                <p className="text-zinc-700">Interaja com a IA diretamente pelo terminal ou conecte uma interface gráfica (UI) para uma experiência de chat tradicional.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Integração via API</h3>
                                <p className="text-zinc-700">O Ollama roda um servidor local que permite que outros apps e scripts se comuniquem com a IA de forma programática.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais Usos</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Chatbot de IA 100% offline",
                            "Assistente de código local para desenvolvedores",
                            "Análise de documentos privados",
                            "Experimentos com novos modelos open-source",
                            "Automação de tarefas sem custo de API",
                            "Criação de agentes de IA locais",
                            "Resumo de textos e e-mails",
                            "Tradução de idiomas sem nuvem",
                            "Processamento de dados sensíveis",
                            "Estudo e aprendizado de LLMs",
                            "Integração com Docker e servidores",
                            "Uso em locais sem conexão estável",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Biblioteca Gigante de Modelos</h3>
                            <p className="text-zinc-700">Acesso instantâneo a centenas de versões otimizadas de modelos como Llama 3, Phi-3, Mistral, Gemma, Command R e muitos outros.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">API Compatível com OpenAI</h3>
                            <p className="text-zinc-700">A API do Ollama pode ser usada em substituição à da OpenAI em muitos apps, facilitando a transição do pago para o local gratuito.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Customização via Modelfile</h3>
                            <p className="text-zinc-700">Crie suas próprias variantes de modelos definindo a "System Prompt", parâmetros de temperatura e contexto em um arquivo simples.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Aceleração por GPU</h3>
                            <p className="text-zinc-700">Suporte automático para placas NVIDIA e Apple Silicon (Metal), garantindo respostas rápidas mesmo em modelos grandes.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Privacidade Total: Seus dados nunca saem do computador",
                            "Custo Zero: Não há mensalidades ou taxas por token",
                            "Funciona Offline: Use a IA mesmo sem internet",
                            "Velocidade: Respostas instantâneas dependendo do seu hardware",
                            "Versatilidade: Suporta os melhores modelos open-source do mercado",
                            "Fácil Gerenciamento: Atualize e mude de modelos com um comando",
                        ].map((advantage, index) => (
                            <div key={index} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                                <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
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
                            "Depende do seu hardware (exige boa RAM e preferencialmente GPU)",
                            "Consome recursos do sistema enquanto está processando",
                            "Modelos muito grandes (ex: 70B) podem ser lentos no PC comum",
                            "Requer conhecimentos básicos de terminal para algumas configurações",
                        ].map((disadvantage, index) => (
                            <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                                <span className="text-zinc-600 font-bold text-lg flex-shrink-0">⚠</span>
                                <p className="text-zinc-700">{disadvantage}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Para quem é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Ollama?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Desenvolvedores de software</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Entusiastas de Inteligência Artificial</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Empresas preocupadas com privacidade de dados</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Pesquisadores e estudantes de tecnologia</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Usuários com computadores muito antigos ou sem RAM suficiente</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca modelos proprietários (GPT-4, Claude 3 Opus) localmente</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Sua própria IA, no seu PC.</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece a usar o Ollama hoje e descubra o poder dos modelos de IA rodando localmente.</p>
                    <a
                        href="https://ollama.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Baixar Ollama Grátis →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Ollama democratizou o acesso à IA de ponta ao permitir que qualquer pessoa com um computador razoável possa rodar os melhores modelos open-source do mundo. Sua simplicidade de uso, aliada a uma comunidade vibrante, faz dele a escolha óbvia para quem busca liberdade e privacidade digital.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Seja para produtividade individual ou para construir o próximo grande aplicativo de IA, o Ollama é a base sólida que você precisa para rodar LLMs localmente.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
