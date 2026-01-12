import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Adapta - Plataforma All-in-One de IA | Análise e Review",
    description: "Conheça o Adapta: plataforma integrada com +15 modelos de IA (GPT, Claude, Gemini), cursos práticos e newsletter. Tudo o que você precisa de IA em um só lugar.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/adapta",
    },
};

export default function AdaptaPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/adapta#breadcrumb",
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
                        "name": "Pacotes de Ferramentas e Agregadores IA",
                        "item": "https://www.hypehour.com.br/pacotes-de-ferramentas-e-agregadores-ia"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Adapta",
                        "item": "https://www.hypehour.com.br/ferramentas/adapta"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/adapta#software",
                "name": "Adapta",
                "description": "Adapta é uma plataforma all-in-one que reúne os melhores modelos de IA do mundo, cursos práticos e newsletter completa em uma única assinatura.",
                "applicationCategory": "ProductivityApplication",
                "operatingSystem": "Web",
                "url": "https://adapta.org",
                "creator": {
                    "@type": "Organization",
                    "name": "Adapta"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "BRL",
                    "category": "Subscription"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.hypehour.com.br/ferramentas/adapta#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "O que é o Adapta?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Adapta é uma plataforma all-in-one que reúne os melhores modelos de IA, cursos práticos e newsletter em uma única assinatura."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quantos modelos de IA o Adapta oferece?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O Adapta oferece acesso a mais de 15 modelos de IA, incluindo GPT, Claude, Gemini, Deepseek, Llama e outros."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Adapta é seguro?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim. O Adapta usa tecnologia Advanced Encryption Standard para manter seus dados sempre seguros."
                        }
                    }
                ]
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
                    <span className="text-black font-medium">Adapta</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        A
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Adapta</h1>
                        <p className="text-lg text-zinc-700">Tudo o que você precisa de IA, em um só lugar</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Adapta é uma plataforma brasileira all-in-one que reúne as melhores IAs do mundo, cursos práticos e newsletter completa em uma única assinatura. Com acesso a mais de 15 modelos de IA (GPT, Claude, Gemini, Deepseek e outros), você pode comparar respostas, usar ferramentas especiais e aprender a dominar IA para o trabalho.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Ideal para profissionais que querem aumentar produtividade, empresas que buscam soluções integradas e qualquer pessoa que deseja estar na vanguarda da inteligência artificial.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Adapta?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        Adapta é uma plataforma que centraliza acesso aos principais modelos de IA do mercado em uma interface única e intuitiva. Em vez de pagar múltiplas assinaturas (ChatGPT Plus, Claude Pro, Gemini Advanced), você acessa tudo em um só lugar, com ferramentas adicionais como biblioteca de prompts, análise de arquivos, geração de imagens e apresentações.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        A plataforma também oferece o Adapta ONE26, um modelo proprietário que entende contexto de negócios, planeja estratégias e executa tarefas em paralelo, funcionando como um assistente inteligente para o trabalho.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Assine a plataforma</h3>
                                <p className="text-zinc-700">Escolha entre Adapta Cursos (cursos + newsletter) ou Adapta GOLD (cursos + newsletter + acesso a todos os modelos de IA).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Acesse os modelos de IA</h3>
                                <p className="text-zinc-700">Use GPT, Claude, Gemini, Deepseek, Llama, Perplexity, Grok e outros modelos em uma única interface, comparando respostas e escolhendo o melhor para cada tarefa.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Use ferramentas especiais</h3>
                                <p className="text-zinc-700">Organize chats em pastas, analise arquivos, use biblioteca de prompts, gere imagens, crie apresentações e acesse marketplace de experts.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Aprenda com os cursos</h3>
                                <p className="text-zinc-700">Acesse cursos práticos sobre IA Generativa, Copywriting, Marketing, Gestão, Imagens, Conteúdo e Automação.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Acesso a +15 modelos de IA",
                            "Comparação de respostas entre modelos",
                            "Geração de textos e conteúdos",
                            "Análise de documentos e arquivos",
                            "Geração de imagens com IA",
                            "Criação de apresentações",
                            "Biblioteca de prompts prontos",
                            "Organização de chats em pastas",
                            "Pesquisa profunda na web",
                            "Melhorador de prompts",
                            "Marketplace de experts",
                            "Contexto personalizado",
                            "Cursos práticos de IA",
                            "Newsletter semanal",
                            "Segurança e privacidade",
                            "Suporte em português",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Adapta ONE26 - IA Proprietária</h3>
                            <p className="text-zinc-700">Modelo exclusivo que entende seu negócio, investiga e constrói insights, planeja estratégias e executa tarefas em paralelo para atingir seus objetivos.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Acesso a +15 Modelos de IA</h3>
                            <p className="text-zinc-700">Use GPT-5.1, GPT-o3, Claude 4.5 Sonnet, Gemini 3 Pro, Deepseek V3, Llama 4, Perplexity, Grok 4 e outros modelos premium em uma única plataforma.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ferramentas Especiais Integradas</h3>
                            <p className="text-zinc-700">Biblioteca de prompts, análise de arquivos, geração de imagens (Stable Diffusion, Flux, Imagen), criação de apresentações com Gamma.app e muito mais.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Cursos Práticos e Atualizados</h3>
                            <p className="text-zinc-700">Aprenda IA Generativa, Copywriting, Marketing, Gestão, Imagens, Conteúdo e Automação com aulas curtas, dinâmicas e conteúdo multimídia de qualidade.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Segurança e Privacidade</h3>
                            <p className="text-zinc-700">Dados protegidos com Advanced Encryption Standard (AES), garantindo segurança, privacidade e confiança em todas as interações.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Newsletter Completa</h3>
                            <p className="text-zinc-700">Receba semanalmente as principais novidades, ferramentas e tendências de IA diretamente no seu e-mail.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Economize dinheiro — uma assinatura substitui múltiplas assinaturas de IA (ChatGPT Plus, Claude Pro, Gemini Advanced)",
                            "Compare respostas de diferentes modelos lado a lado para escolher a melhor solução",
                            "Acesso a modelos premium e de ponta sem precisar gerenciar várias contas",
                            "Ferramentas integradas (prompts, análise de arquivos, imagens, apresentações) em um só lugar",
                            "Cursos práticos em português com foco em aplicação real no trabalho",
                            "Newsletter curada com as principais novidades de IA",
                            "Suporte e comunidade brasileira",
                            "Segurança e privacidade com criptografia AES",
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
                            "Requer assinatura paga — não há plano gratuito para acesso aos modelos de IA",
                            "Dependência de conexão com internet — não funciona offline",
                            "Curva de aprendizado inicial para aproveitar todas as funcionalidades",
                            "Alguns recursos avançados podem ter limites de uso dependendo do plano",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Adapta?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Profissionais que usam IA diariamente</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Empresas buscando soluções integradas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Criadores de conteúdo e copywriters</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Profissionais de marketing e vendas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Gestores e empreendedores</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Quem quer aprender IA de forma prática</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem usa IA esporadicamente</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem prefere ferramentas gratuitas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Desenvolvedores que precisam de APIs customizadas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca apenas um modelo específico</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Vídeo do YouTube */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Veja o Adapta em ação</h2>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200">
                        <div className="relative pb-[56.25%] h-0">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/3VorOdW2iQM"
                                title="Adapta Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Pronto para ter todas as IAs em um só lugar?</h2>
                    <p className="text-lg mb-6 text-zinc-300">Teste o Adapta e tenha acesso a +15 modelos de IA, cursos práticos e newsletter completa</p>
                    <a
                        href="https://adapta.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar Adapta →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Adapta é uma solução completa para quem quer maximizar produtividade com IA sem precisar gerenciar múltiplas assinaturas e plataformas. A combinação de acesso a modelos premium, ferramentas integradas, cursos práticos e newsletter faz dele uma escolha inteligente para profissionais e empresas.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você usa IA regularmente no trabalho e quer economizar tempo e dinheiro enquanto aprende a dominar as melhores ferramentas do mercado, o Adapta vale muito a pena. A plataforma brasileira oferece suporte em português e uma comunidade ativa, facilitando ainda mais a jornada de transformação digital.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
