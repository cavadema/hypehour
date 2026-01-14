import Link from "next/link";
import FAQSection from "./FAQSection";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export const metadata = {
    title: "Rytr - Assistente de Escrita com IA e Gerador de Conteúdo | Review",
    description: "Conheça o Rytr: assistente de escrita com IA que ajuda a criar blogs, emails e anúncios 10x mais rápido. Veja como funciona, preços, vantagens e se vale a pena.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/rytr",
    },
};

export default function RytrPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/rytr#breadcrumb",
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
                        "name": "IA para Conteúdo",
                        "item": "https://www.hypehour.com.br/ferramentas-de-ia-para-conteudo"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Rytr",
                        "item": "https://www.hypehour.com.br/ferramentas/rytr"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/rytr#software",
                "name": "Rytr",
                "description": "Rytr é um assistente de escrita com IA que ajuda você a criar conteúdo de alta qualidade em poucos segundos, por uma fração do custo.",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Web, Chrome Extension",
                "url": "https://rytr.me",
                "creator": {
                    "@type": "Organization",
                    "name": "Rytr"
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
                    <Link href="/ferramentas-de-ia-para-conteudo" className="hover:text-black transition">IA para Conteúdo</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Rytr</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        R
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Rytr</h1>
                        <p className="text-lg text-zinc-700">Assistente de escrita e criação de conteúdo com IA</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        Rytr é um assistente de escrita baseado em IA que ajuda você a criar conteúdo de alta qualidade, em poucos segundos e por uma fração do custo. Com mais de 8 milhões de usuários, é uma das ferramentas de IA mais populares para copywriting, blogs, emails e muito mais.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Escolha entre mais de 40 casos de uso, 30 idiomas (incluindo Português) e 20 tons de voz para gerar conteúdo original e criativo. Ideal para profissionais de marketing, empreendedores e criadores de conteúdo.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Rytr?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Rytr é uma ferramenta de inteligência artificial projetada para ser seu assistente de escrita pessoal. Ela utiliza modelos de linguagem avançados (como GPT) para gerar textos persuasivos e engajadores automaticamente. Diferente de outras ferramentas complexas, o Rytr foca na simplicidade e eficiência, permitindo que você produza conteúdo pronto para uso em instantes.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como o Rytr funciona?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O funcionamento é simples: você escolhe o caso de uso (ex: post para blog, legenda de Instagram, email), seleciona o idioma e o tom de voz, e fornece uma breve descrição do que deseja. O Rytr então processa essas informações e gera múltiplas variantes de texto para você escolher, editar e usar.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Rytr é gratuito?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim, o Rytr oferece um plano gratuito vitalício que permite gerar até 10.000 caracteres por mês. Para volumes maiores, existem planos pagos (Saver e Unlimited) que oferecem geração de caracteres expandida ou ilimitada, além de recursos extras.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Rytr funciona em português?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim, o Rytr possui suporte nativo para Português (Brasil e Portugal), permitindo gerar conteúdo de alta qualidade diretamente em nosso idioma, sem necessidade de tradução posterior.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Rytr é confiável?</h2>
                    <p className="text-zinc-700 leading-relaxed">
                        Sim, o Rytr é amplamente confiável, utilizado por grandes empresas e freelancers ao redor do mundo. A plataforma conta com verificador de plágio integrado para garantir que o conteúdo gerado seja original e único.
                    </p>
                </section>

                {/* Como funciona (Passos) */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como funciona</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Selecione o idioma e o tom</h3>
                                <p className="text-zinc-700">Escolha o Português entre os 30+ idiomas disponíveis e defina o tom da mensagem (ex: Empolgado, Profissional, Convencente).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha o caso de uso</h3>
                                <p className="text-zinc-700">Selecione o tipo de conteúdo que deseja criar: Blog, Email, Anúncio, Youtube, posts para redes sociais, entre outros 40+ templates.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Forneça o contexto</h3>
                                <p className="text-zinc-700">Digite algumas palavras-chave ou frases curtas descrevendo o tópico ou produto sobre o qual você quer escrever.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Gere e edite</h3>
                                <p className="text-zinc-700">Clique em "Ryte for me" e veja a mágica acontecer. Edite o texto gerado diretamente no editor rico da plataforma ou exporte.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Escrever artigos de blog",
                            "Criar legendas de Instagram",
                            "Escrever emails de vendas",
                            "Gerar ideias de vídeos",
                            "Criar descrições de produtos",
                            "Escrever anúncios (Ads)",
                            "Melhorar textos existentes",
                            "Escrever copy para landing pages",
                            "Gerar SEO Meta Tags",
                            "Criar roteiros de vídeo",
                            "Escrever reviews e testimonials",
                            "Responder mensagens",
                            "Gerar slogans criativos",
                            "Escrever bios de perfil",
                            "Gerar parágrafos de conclusão",
                            "Escrever histórias criativas",
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
                            <h3 className="text-xl font-semibold text-black mb-3">40+ Casos de Uso e Templates</h3>
                            <p className="text-zinc-700">Templates prontos para praticamente qualquer necessidade de escrita, economizando tempo na estruturação do conteúdo.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Suporte Multilíngue</h3>
                            <p className="text-zinc-700">Escreva em mais de 30 idiomas com qualidade nativa, expandindo seu alcance globalmente.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Verificador de Plágio Integrado</h3>
                            <p className="text-zinc-700">Garanta a originalidade do seu conteúdo verificando se há trechos duplicados diretamente na plataforma.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Gerador de Imagens AI</h3>
                            <p className="text-zinc-700">Além de textos, o Rytr também gera imagens livres de direitos autorais para acompanhar seu conteúdo.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Extensão para Chrome</h3>
                            <p className="text-zinc-700">Leve o Rytr para onde você escreve: Gmail, WordPress, Slack, Google Docs e redes sociais.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Tons de Voz Personalizáveis</h3>
                            <p className="text-zinc-700">Use mais de 20 tons diferentes (ex: Formal, Engraçado, Urgente) para dar a emoção certa ao seu texto.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Interface extremamente simples e fácil de usar, ideal para iniciantes",
                            "Um dos planos mais acessíveis do mercado, com excelente custo-benefício",
                            "Gera conteúdo de alta qualidade e originalidade",
                            "Suporte a Português funciona muito bem",
                            "Ferramenta de reescrita e melhoria de texto ajuda a polir o conteúdo",
                            "Plano gratuito generoso para testar e uso leve",
                        ].map((advantage, index) => (
                            <div key={index} className="flex gap-3 p-4 bg-white border border-zinc-200 rounded-lg shadow-sm">
                                <CheckCircleIcon className="w-6 h-6 text-black flex-shrink-0" />
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
                            "Pode ter dificuldade com conteúdos muito longos ou técnicos sem supervisão",
                            "A verificação de plágio pode ser limitada nos planos mais baratos",
                            "As imagens geradas por IA são funcionais, mas não de nível 'midjourney'",
                            "Alguns templates são muito parecidos entre si",
                            "O limite de caracteres no plano gratuito pode acabar rápido se usado intensamente",
                        ].map((disadvantage, index) => (
                            <div key={index} className="flex gap-3 p-4 bg-zinc-50 border border-zinc-300 rounded-lg">
                                <XCircleIcon className="w-6 h-6 text-zinc-500 flex-shrink-0" />
                                <p className="text-zinc-700">{disadvantage}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Para quem é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Rytr?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Copywriters e profissionais de marketing</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Donos de e-commerce (descrições de produtos)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Blogueiros e criadores de conteúdo</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Startups e pequenas empresas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Pessoas que querem melhorar seus emails</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Escrita de livros inteiros automaticamente</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Usuários que precisam de análise de SEO ultra-avançada</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca geração de imagens hiper-realistas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Uso acadêmico estrito (cuidado com plágio/citações)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Vídeo do YouTube (Se houver, senão omitir ou colocar placeholder) */}
                {/* Omitido pois não tenho um link de vídeo específico validado, mas poderia ser um review geral */}

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Comece a escrever com Rytr hoje mesmo</h2>
                    <p className="text-lg mb-6 text-zinc-300">Crie sua conta gratuita e gere até 10.000 caracteres por mês sem custo.</p>
                    <a
                        href="https://rytr.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Experimentar Rytr Grátis →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        Rytr se posiciona como uma das melhores ferramentas de entrada no mundo da escrita com IA. Sua combinação de facilidade de uso, qualidade de texto e preço acessível o torna imbatível para tarefas do dia a dia de marketing e criação de conteúdo.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Embora possa não ter todos os recursos complexos de plataformas empresariais mais caras, ele entrega exatamente o que promete: uma maneira rápida e eficiente de acabar com o bloqueio criativo e escrever melhor.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
