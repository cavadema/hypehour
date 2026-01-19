import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Opus Clip - Transforme Vídeos Longos em Curtos Virais com IA | Review",
    description: "Conheça o Opus Clip: a ferramenta de IA que transforma podcasts e vídeos longos em clipes virais para TikTok, Reels e Shorts em segundos. Veja como funciona.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/opusclip",
    },
};

export default function OpusClipPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/opusclip#breadcrumb",
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
                        "name": "Opus Clip",
                        "item": "https://www.hypehour.com.br/ferramentas/opusclip"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/opusclip#software",
                "name": "Opus Clip",
                "description": "Opus Clip é uma ferramenta de IA generativa de vídeo que transforma vídeos longos em clipes curtos e virais para redes sociais.",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Web Browser",
                "url": "https://www.opus.pro",
                "creator": {
                    "@type": "Organization",
                    "name": "Opus Clip"
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
                    <span className="text-black font-medium">Opus Clip</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-zinc-800 to-black rounded-xl flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                        O
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Opus Clip</h1>
                        <p className="text-lg text-zinc-700">Transforme vídeos longos em clipes virais com IA</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Opus Clip é uma ferramenta de IA generativa focada em aumentar a produtividade de produtores de conteúdo e marcas que utilizam vídeos longos (como podcasts, entrevistas e vlogs). Através de algoritmos avançados, ele "assiste" ao vídeo completo, identifica os momentos com maior potencial de viralização e os transforma em clipes curtos perfeitamente editados para redes sociais.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Em vez de gastar horas editando manualmente, o Opus Clip faz o trabalho pesado de corte, reframe (ajuste de tela), legendagem dinâmica e até adição de B-rolls, permitindo que você publique conteúdo diário em poucos minutos.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Opus Clip?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Opus Clip é uma plataforma baseada em nuvem que automatiza a criação de shorts, reels e tiktoks. Sua grande inovação está no "Virality Score", um sistema que prevê quais trechos do seu vídeo terão melhor performance nas redes, ajudando você a focar no que realmente engaja.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como o Opus Clip funciona?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Basta colar o link de um vídeo do YouTube (ou fazer upload do arquivo) e a IA processa o conteúdo instantaneamente. Ela detecta quem está falando, centraliza o rosto no formato vertical, remove silencios desnecessários e gera legendas animadas com alta precisão.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Opus Clip é gratuito?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim, existe um plano gratuito que oferece 60 minutos de processamento mensal. Para recursos profissionais, como exportação em HD sem marca d'água e integração com XML para Adobe Premiere, o plano Pro é altamente recomendado.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Opus Clip suporta português?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim, a ferramenta possui suporte total ao português brasileiro e português de Portugal, detectando automaticamente o idioma e criando legendas perfeitas.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Opus Clip é confiável?</h2>
                    <p className="text-zinc-700 leading-relaxed">
                        Completamente. O Opus Clip é utilizado por milhares de grandes podcasters e agências de marketing ao redor do mundo, sendo reconhecido como uma das IAs mais precisas para detecção de contextos e ganchos em vídeos longos.
                    </p>
                </section>

                {/* Como funciona */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como funciona step-by-step</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Importação</h3>
                                <p className="text-zinc-700">Cole o link do YouTube ou envie seu vídeo longo para a plataforma.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Análise por IA</h3>
                                <p className="text-zinc-700">A IA analisa o conteúdo, gera as legendas e aplica o Virality Score em cada clipe detectado.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Edição Rápida</h3>
                                <p className="text-zinc-700">Escolha um template, ajuste cores, fontes ou adicione B-rolls se desejar.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Exportação e Schedulling</h3>
                                <p className="text-zinc-700">Baixe o vídeo pronto ou agende a publicação direta no TikTok e Reels através do painel.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Repurposing de Podcasts",
                            "Criação de Shorts e Reels",
                            "Highlights de Live Streams",
                            "Legendas automáticas animadas",
                            "Transformar webinars em clipes",
                            "Auto-reframe 9:16",
                            "Adição de B-rolls com IA",
                            "Remoção de palavras de preenchimento",
                            "Multi-language captioning",
                            "Testar ganchos virais",
                            "Agendamento de redes sociais",
                            "Exportação para Premiere Pro",
                            "Criação de anúncios em escala",
                            "Otimização de SEO de vídeo",
                            "Análise de sentimento de fala",
                            "Presets de Design de marca",
                            "Colaboração em equipe",
                            "Criação de curso em pílulas",
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
                            <h3 className="text-xl font-semibold text-black mb-3">AI Virality Score</h3>
                            <p className="text-zinc-700">Avaliação baseada em dados reais para mostrar quais trechos têm maior probabilidade de converter visualizações em seguidores.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Active Speaker Detection</h3>
                            <p className="text-zinc-700">A câmera foca automaticamente em quem está falando, ideal para entrevistas onde a tela precisa ser centralizada verticalmente.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI B-rolls e Giphy Integration</h3>
                            <p className="text-zinc-700">Aumente o dinamismo dos seus vídeos com cenas de apoio e GIFs inseridos nos momentos certos pela inteligência artificial.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">ClipAnything Multimodal</h3>
                            <p className="text-zinc-700">Nova tecnologia que clipa cenas com base em descrições em texto, mesmo em vídeos sem narração ou diálogo.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Editor Baseado em Texto</h3>
                            <p className="text-zinc-700">Edite seu vídeo como se estivesse editando um documento do Word: delete frases no texto e o vídeo corta automaticamente.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Economia colossal de tempo na edição manual para redes sociais",
                            "Legendas automáticas com design moderno e emojis integrados",
                            "Virality score ajuda iniciantes a saber o que postar primeiro",
                            "Suporte a mais de 20 idiomas com precisão altíssima",
                            "Templates prontos com estilos parecidos com grandes criadores (Alex Hormozi style)",
                            "Plano gratuito generoso com 60 minutos mensais",
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
                            "Plano gratuito inclui marca d'água da ferramenta",
                            "O sistema de créditos (minutos) pode ser confuso para novos usuários",
                            "A IA pode errar em contextos muito específicos ou piadas visuais",
                            "Dependência total de conexão estável com a internet",
                            "Plano Pro pode ser considerado caro para criadores muito pequenos",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Opus Clip?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Podcasters que querem viralizar trechos no TikTok</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Editores de vídeo que querem acelerar o workflow</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Canais de cortes e nichos de curiosidades</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Empresas que fazem webinars e eventos online</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Youtubers focados em Shorts</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Vídeos artísticos com montagens muito manuais</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Cinema e produções de longa metragem tradicionais</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem trabalha apenas em ambientes offline</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Vídeo do YouTube */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Veja o Opus Clip em ação</h2>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200">
                        <div className="relative pb-[56.25%] h-0">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/g77RskT66G8"
                                title="Opus Clip Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Seus vídeos longos nunca foram tão produtivos.</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece a usar o Opus Clip gratuitamente e viralize seus clipes hoje mesmo.</p>
                    <a
                        href="https://www.opus.pro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Criar Clipes agora →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Opus Clip consolidou-se como a ferramenta indispensável para quem deseja dominar os Shorts e Reels. Ao unir tecnologia de entendimento de contexto com design automatizado, ele remove a maior barreira de entrada para novos criadores: o tempo de edição.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você tem conteúdo longo "parado" no seu canal, o Opus Clip é a chave para dar uma nova vida a esse material e atrair uma audiência massiva através do formato curto.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
