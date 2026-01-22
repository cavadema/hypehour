import Link from "next/link";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import { faqs } from "./constants";

export const metadata = {
    title: "Higgsfield - IA para Criação de Imagens e Vídeos Mobile | Review",
    description: "Conheça o Higgsfield: a IA multimodal focada em mobile que cria imagens e vídeos cinematográficos. Veja como funciona, preços e recursos para social media.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/higgsfield",
    },
};

export default function HiggsfieldPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/higgsfield#breadcrumb",
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
                        "name": "IA para Imagens",
                        "item": "https://www.hypehour.com.br/ia-para-imagens"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Higgsfield",
                        "item": "https://www.hypehour.com.br/ferramentas/higgsfield"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/higgsfield#software",
                "name": "Higgsfield",
                "description": "Higgsfield é uma plataforma de IA multimodal mobile-first que permite a criação de conteúdo visual (imagem e vídeo) de alta fidelidade.",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "iOS, Android, Web",
                "url": "https://higgsfield.ai",
                "creator": {
                    "@type": "Organization",
                    "name": "Higgsfield AI"
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
                    <Link href="/ia-para-imagens" className="hover:text-black transition">IA para Imagens</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Higgsfield</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow overflow-hidden">
                        <DevicePhoneMobileIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Higgsfield</h1>
                        <p className="text-lg text-zinc-700">A potência multimodal para criadores de imagem e vídeo</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Higgsfield</strong> se destaca no competitivo mercado de inteligência artificial generativa por sua abordagem <strong>multimodal e mobile-first</strong>. Enquanto muitas ferramentas são focadas apenas em um nicho, o Higgsfield permite que criadores transitem sem costuras entre a geração de imagens de alta fidelidade e a criação de vídeos cinematográficos complexos.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Desenhado para o ritmo acelerado das redes sociais, ele oferece aos usuários de <strong>iOS e Android</strong> a capacidade de produzir conteúdo visual que antes exigiria estúdios de pós-produção, mantendo uma consistência de personagens e cenários impressionante.
                    </p>
                </div>

                {/* Segmentos */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-black mb-4">IA para Imagens</h2>
                        <p className="text-zinc-700 leading-relaxed">
                            Como gerador de imagens, o Higgsfield compete com os grandes nomes do setor, entregando fotorrealismo e uma compreensão semântica profunda. É ideal para criar assets visuais, protótipos de design e fotografias publicitárias virtuais diretamente do celular.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-black mb-4">IA para Vídeos</h2>
                        <p className="text-zinc-700 leading-relaxed">
                            Na criação de vídeos, o Higgsfield brilha com o controle de movimento e consistência. Ele permite transformar textos em clipes dinâmicos ou injetar vida em fotos estáticas, sendo uma ferramenta essencial para Reels, TikTok e anúncios digitais.
                        </p>
                    </div>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Higgsfield?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Fundada por especialistas em visão computacional e aprendizado profundo, o Higgsfield é uma plataforma que democratiza a produção visual de alto nível. Sua tecnologia é otimizada para oferecer baixa latência e resultados visualmente ricos, focando na conveniência do uso móvel sem comprometer a qualidade profissional.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Uso Mobile-First</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Diferente do Midjourney (baseado em Discord) ou Runway (focado em Desktop), o Higgsfield foi construído pensado na tela vertical. Seus aplicativos permitem que o criador de conteúdo gere, edite e publique artes e vídeos sem precisar sair do ecossistema mobile, ideal para o fluxo de social media atual.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Consistência de Personagem</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Um dos maiores desafios da IA é manter o mesmo rosto em diferentes gerações. O Higgsfield possui algoritmos proprietários de 'Character Consistency' que garantem que seu protagonista seja o mesmo em todas as cenas de um vídeo ou em uma série de fotos, permitindo storytelling real e consistente.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Começando no Higgsfield</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Instale o aplicativo</h3>
                                <p className="text-zinc-700">Baixe o Higgsfield AI na App Store ou Google Play Store e faça seu cadastro para receber créditos iniciais.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha o modo de criação</h3>
                                <p className="text-zinc-700">Selecione se deseja criar uma 'Image' de alta qualidade ou um 'Video'. Você também pode usar a função 'Image-to-Video'.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Refine com comandos</h3>
                                <p className="text-zinc-700">Para vídeos, você pode especificar movimentos de câmera (Zoom, Pan, Tilt) e a intensidade da animação através dos controles sliders.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Gere e Export_</h3>
                                <p className="text-zinc-700">A guarde a geração nos servidores da Higgsfield e exporte o resultado em HD diretamente para sua galeria.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades Principais</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Vídeo Generativo Cinematográfico</h3>
                            <p className="text-zinc-700">Capacidade de criar cenas complexas com movimentos fluidos de câmera e física realista de luz e sombra.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Character Consistent Generation</h3>
                            <p className="text-zinc-700">Mantém a identidade visual de personagens em múltiplos arquivos, permitindo a criação de curtas e séries consistentes.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Mobile UI Otimizada</h3>
                            <p className="text-zinc-700">Interface intuitiva para celular, fugindo das complexidades técnicas das interfaces web tradicionais.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Modelos de Direção de Cena</h3>
                            <p className="text-zinc-700">Controles prontos para zoom, pan e giro, facilitando a vida de quem não entende de cinematografia técnica.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Plataforma completa para imagens e vídeos no mesmo lugar",
                            "Melhor experiência de criação via smartphone do mercado",
                            "Consistência de personagens excepcional para narrativas visuais",
                            "Controles de câmera intuitivos sem precisar de prompts complexos",
                            "Ideal para criadores de Reels, TikTok e anúncios rápidos",
                            "Sistema de créditos que permite testar a ferramenta gratuitamente",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Desvantagens e Considerações</h2>
                    <div className="grid gap-4">
                        {[
                            "O foco mobile pode ser limitante para profissionais que preferem fluxos desktop complexos",
                            "A duração total dos vídeos gerados ainda é curta (alguns segundos por clipe)",
                            "Requer conexão estável com a internet para processamento em nuvem",
                            "Dependência de créditos para gerações de alta qualidade",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Higgsfield?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Criadores de Conteúdo (Reels, TikTok)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Social Media Managers</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Pequenas agências de marketing digital</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Storytellers e roteiristas experimentais</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Produções de vídeo de longa duração em um único clipe</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Editores que buscam ferramentas 100% integradas a software desktop</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Uso acadêmico sem foco criativo prático</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Mude seu jogo na criação de conteúdo</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece a criar imagens e vídeos impactantes direto do seu celular com o Higgsfield</p>
                    <a
                        href="https://higgsfield.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Baixar Higgsfield AI →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Higgsfield prova que a inteligência artificial generativa de alta fidelidade não precisa estar presa a computadores potentes ou interfaces de chat complexas. Ao unir imagens e vídeos fotorrealistas em uma experiência mobile fluida, a plataforma se posiciona como a ferramenta definitiva para a nova geração de criadores digitais.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você busca consistência, qualidade cinematográfica e a conveniência de criar em qualquer lugar, o Higgsfield é, sem dúvida, uma das escolhas mais inteligentes disponíveis hoje.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
