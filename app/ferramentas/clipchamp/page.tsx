
import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Clipchamp - Editor de Vídeo Online com IA da Microsoft | Review",
    description: "Conheça o Clipchamp: editor de vídeo oficial da Microsoft com recursos de IA para legendas, narração e edição automática. Veja funcionalidades, preço e se vale a pena.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/clipchamp",
    },
};

export default function ClipchampPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/clipchamp#breadcrumb",
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
                        "name": "IA para Criar Vídeos",
                        "item": "https://www.hypehour.com.br/ia-para-criar-videos"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Clipchamp",
                        "item": "https://www.hypehour.com.br/ferramentas/clipchamp"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/clipchamp#software",
                "name": "Clipchamp",
                "description": "Clipchamp é o editor de vídeos oficial do Windows e Microsoft 365, oferecendo ferramentas fáceis de usar com integração de IA para criação rápida de conteúdo.",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Web, Windows, iOS",
                "url": "https://clipchamp.com/pt-br/",
                "creator": {
                    "@type": "Organization",
                    "name": "Microsoft"
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
                    <Link href="/ia-para-criar-videos" className="hover:text-black transition">IA para Criar Vídeos</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Clipchamp</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        C
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Clipchamp</h1>
                        <p className="text-lg text-zinc-700">Editor de vídeo da Microsoft com recursos avançados de IA</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Clipchamp é o editor de vídeo oficial da Microsoft, projetado para democratizar a criação de conteúdo audiovisual. Diferente de editores profissionais complexos, ele aposta na facilidade de uso do "arrastar e soltar" combinada com poderosos recursos de Inteligência Artificial.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Integrado ao Windows 11 e ao ecossistema Microsoft 365, ele permite criar vídeos para YouTube, TikTok, Instagram e apresentações corporativas em minutos, oferecendo desde legendas automáticas até narração por IA (Text-to-Speech) de alta qualidade.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Clipchamp?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        Clipchamp é uma plataforma de edição de vídeo baseada em navegador (e aplicativo desktop) que simplifica o processo de pós-produção. Adquirido pela Microsoft em 2021, tornou-se a ferramenta padrão de edição para milhões de usuários Windows.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Sua proposta é permitir que qualquer pessoa, sem experiência prévia, crie vídeos com aparência profissional usando templates prontos, biblioteca de estoque de mídia e automações inteligentes.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Inicie um projeto</h3>
                                <p className="text-zinc-700">Acesse via navegador ou app do Windows. Escolha criar um vídeo do zero ou use um dos milhares de templates prontos.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Importe e Edite</h3>
                                <p className="text-zinc-700">Arraste seus vídeos, fotos e áudios para a timeline. Use ferramentas de corte intuitivas e adicione transições com um clique.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Aplique IA</h3>
                                <p className="text-zinc-700">Gere legendas automáticas para seus vídeos falados ou crie uma narração (voiceover) usando a ferramenta de texto para fala.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Exporte e Compartilhe</h3>
                                <p className="text-zinc-700">Salve seu vídeo em 1080p (HD) gratuitamente sem marca d'água ou envie diretamente para o YouTube, TikTok e OneDrive.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Vídeos para YouTube e Vlogs",
                            "Reels e TikTok (formato vertical)",
                            "Apresentações de trabalho",
                            "Vídeos de treinamento e tutoriais",
                            "Anúncios para redes sociais",
                            "Gravação de tela e webcam",
                            "Vídeos de aniversário e comemorações",
                            "Podcasts em vídeo (Videocasts)",
                            "Highlight de jogos (Gaming)",
                            "Vídeos promocionais de produtos",
                            "Legendar vídeos automaticamente",
                            "Criar narrações com IA",
                        ].map((item, index) => (
                            <div key={index} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                                <p className="text-zinc-700 text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Principais funcionalidades com IA</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Legendas Automáticas (Auto Captions)</h3>
                            <p className="text-zinc-700">A IA transcreve o áudio do seu vídeo e gera legendas perfeitamente sincronizadas em mais de 80 idiomas, tornando seu conteúdo acessível e engajador.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Texto em Fala (Text-to-Speech)</h3>
                            <p className="text-zinc-700">Transforme qualquer texto em uma narração profissional usando vozes de IA ultra-realistas da Azure, com controle de emoção e velocidade.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Speaker Coach</h3>
                            <p className="text-zinc-700">Uma ferramenta de IA que analisa suas gravações de webcam e oferece feedback em tempo real sobre seu ritmo, pausas e palavras de preenchimento ("hum", "tipo").</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Auto Compose</h3>
                            <p className="text-zinc-700">Basta fazer upload de suas fotos e vídeos, escolher um estilo, e a IA do Clipchamp monta automaticamente um vídeo editado com música e transições.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Remoção de Fundo (Green Screen)</h3>
                            <p className="text-zinc-700">Remova ou substitua fundos de vídeos facilmente usando efeitos de chroma key e filtros inteligentes.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Interface extremamente intuitiva, ideal para iniciantes",
                            "Plano gratuito generoso (exportação 1080p sem marca d'água)",
                            "Recursos de IA poderosos (TTS e Legendas) incluídos",
                            "Vem pré-instalado no Windows 11",
                            "Integração nativa com OneDrive, Google Drive e TikTok",
                            "Biblioteca enorme de templates e mídia de estoque",
                            "Funciona na nuvem (não exige PC super potente para edição básica)",
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
                            "Exportação em 4K exige plano Premium pago",
                            "Acesso completo ao banco de imagens/vídeos é pago (Premium)",
                            "Depende de internet estável (versão Web)",
                            "Falta recursos avançados para editores profissionais (ex: keyframes complexos)",
                            "Renderização pode ser lenta em projetos muito grandes na versão web",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Clipchamp?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Criadores de conteúdo iniciantes e intermediários</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Pequenas empresas e equipes de marketing</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Professores e estudantes</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Quem precisa de vídeos rápidos para social media</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Gamers que gravam clipes de jogos</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Editores de cinema/TV profissionais (Cinema grade)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Projetos extremamente longos com milhares de arquivos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem precisa de efeitos VFX avançados (como After Effects)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Comece a editar com IA hoje mesmo</h2>
                    <p className="text-lg mb-6 text-zinc-300">O Clipchamp já vem no seu Windows ou está a um clique no navegador. É grátis e fácil.</p>
                    <a
                        href="https://clipchamp.com/pt-br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Abrir Clipchamp Grátis →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Clipchamp acertou em cheio ao equilibrar simplicidade e poder. Ao remover as barreiras técnicas da edição de vídeo e adicionar ferramentas mágicas de IA, ele permite que qualquer pessoa conte suas histórias visualmente com qualidade.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Seja você um YouTuber aspirante ou alguém que só quer fazer um vídeo bonito para a família, o Clipchamp é provavelmente a melhor ferramenta gratuita "ponto de partida" disponível hoje.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
