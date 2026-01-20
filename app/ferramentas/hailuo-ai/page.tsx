import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Hailuo AI - Review Completo: A Revolução do Vídeo por IA da MiniMax",
    description: "Conheça o Hailuo AI: o gerador de vídeos por IA que transforma texto e imagens em clipes cinematográficos de alta qualidade. Saiba como funciona, preços e funcionalidades.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/hailuo-ai",
    },
};

export default function HailuoAIPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/hailuo-ai#breadcrumb",
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
                        "name": "IA para Vídeos",
                        "item": "https://www.hypehour.com.br/ia-para-criar-videos"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Hailuo AI",
                        "item": "https://www.hypehour.com.br/ferramentas/hailuo-ai"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/hailuo-ai#software",
                "name": "Hailuo AI",
                "description": "Hailuo AI é uma plataforma de geração de vídeos por IA que transforma prompts de texto e imagens em vídeos de alta qualidade em segundos.",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Web, iOS, Android",
                "url": "https://hailuoai.video/",
                "creator": {
                    "@type": "Organization",
                    "name": "MiniMax"
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
                    <Link href="/ia-para-criar-videos" className="hover:text-black transition">IA para Vídeos</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Hailuo AI</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        H
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Hailuo AI</h1>
                        <p className="text-lg text-zinc-700">Transforme suas ideias em vídeos cinematográficos instantaneamente.</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow-sm transition hover:shadow-md">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O **Hailuo AI**, desenvolvido pela startup **MiniMax**, é um dos geradores de vídeo por inteligência artificial mais impressionantes da atualidade. Ele se destaca pela capacidade de criar vídeos extremamente realistas, com uma compreensão profunda das leis da física e movimentos de câmera fluidos.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seja você um criador de conteúdo, profissional de marketing ou cineasta, o Hailuo AI oferece ferramentas poderosas para converter prompts de texto ou imagens estáticas em clipes dinâmicos de alta resolução em questão de segundos.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Hailuo AI?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Hailuo AI é uma plataforma de 'Text-to-Video' e 'Image-to-Video' que utiliza modelos de inteligência artificial generativa para criar conteúdo visual. Ao contrário de editores de vídeo tradicionais, aqui o conteúdo é criado do zero a partir de descrições em linguagem natural.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        A plataforma é alimentada pelos modelos da MiniMax, conhecidos por sua precisão em detalhes como iluminação, texturas e continuidade de objetos, permitindo a criação de cenas complexas que parecem ter sido filmadas por câmeras reais.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Descreva sua Cena</h3>
                                <p className="text-zinc-700">Digite um prompt detalhado descrevendo o que deve acontecer no vídeo ou carregue uma imagem que você deseja animar.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha o Modelo</h3>
                                <p className="text-zinc-700">Selecione entre modelos focados em realismo, controle de diretor ou consistência de personagens para o melhor resultado.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Gere e Baixe</h3>
                                <p className="text-zinc-700">Aguarde alguns segundos enquanto a IA processa o vídeo e, em seguida, baixe o resultado em alta resolução e 25fps.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Clipes para redes sociais (Reels/TikTok)",
                            "Criação de anúncios publicitários",
                            "Storytelling visual e roteiros",
                            "Animação de fotos e logos",
                            "Efeitos visuais (fumaça, chuva, fogo)",
                            "Prototipagem rápida de cenas",
                            "Conteúdo educativo e explicativo",
                            "Artes abstratas e experimentais",
                            "Transições dinâmicas para vídeos",
                            "Cinematografia de baixo custo",
                            "Postagens de blog visualmente ricas",
                            "Demos de produtos e serviços",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Text-to-Video e Image-to-Video</h3>
                            <p className="text-zinc-700">A versatilidade de criar a partir de palavras ou transformar uma foto morta em um vídeo cheio de vida em poucos segundos.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Controle de Diretor (T2V Director)</h3>
                            <p className="text-zinc-700">Permite dar ordens específicas de câmera, como zooms e pans, usando apenas linguagem natural para ditar o enquadramento.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Alta Velocidade de Geração</h3>
                            <p className="text-zinc-700">Um dos motores mais rápidos do mundo, capaz de entregar previews e vídeos finais muito antes da concorrência tradicional.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Biblioteca de Efeitos Visuais</h3>
                            <p className="text-zinc-700">Inclusão nativa de efeitos físicos complexos como partículas, iluminação dinâmica e consistência de texturas entre os quadros.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Realismo impressionante em detalhes técnicos",
                            "Excelente custo-benefício comparado a filmagens reais",
                            "Interface intuitiva e fácil de navegar",
                            "Suporte a múltiplos idiomas para prompts (inclusive PT-BR)",
                            "Velocidade de processamento líder de mercado",
                            "Melhorias constantes nos modelos de física e movimento",
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
                            "Plano gratuito limitado e com marca d'água",
                            "Ainda pode haver pequenas inconsistências em movimentos humanos muito rápidos",
                            "Requer prompts precisos para evitar distorções visuais",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Hailuo AI?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Criadores de conteúdo e YouTubers</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Agências de Marketing Digital</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Social Media Managers</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Designers e Artistas Digitais</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-100 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem precisa de vídeos longos (+1 min) em um único take</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Projetos que exigem edição frame-a-frame manual clássica</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Crie vídeos de tirar o fôlego com IA.</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece a usar o Hailuo AI gratuitamente hoje mesmo e leve seu conteúdo visual para o próximo nível.</p>
                    <a
                        href="https://hailuoai.video/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Experimentar o Hailuo AI Grátis →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Hailuo AI não é apenas mais um gerador de vídeos; é um vislumbre do futuro da produção audiovisual. Com sua velocidade estonteante e qualidade visual superior, ele democratiza a criação de clipes cinematográficos, permitindo que qualquer pessoa com uma boa ideia possa dar vida a ela.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você busca inovação e quer se destacar no mar de conteúdos digitais, integrar o Hailuo AI ao seu fluxo de trabalho é um passo lógico e extremamente vantajoso.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
