import Link from "next/link";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";
import { faqs } from "./constants";

export const metadata = {
    title: "HeyGen - Avatares de IA e Tradução de Vídeo Inteligente | Review",
    description: "Conheça o HeyGen: a plataforma líder em avatares digitais e tradução de vídeo com lip-sync. Veja como funciona, preços e como criar vídeos profissionais.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/heygen",
    },
};

export default function HeyGenPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/heygen#breadcrumb",
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
                        "name": "HeyGen",
                        "item": "https://www.hypehour.com.br/ferramentas/heygen"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/heygen#software",
                "name": "HeyGen",
                "description": "HeyGen é uma plataforma de IA generativa especializada em avatares digitais, tradução de vídeo multilingue e clonagem de voz.",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Web",
                "url": "https://heygen.com",
                "creator": {
                    "@type": "Organization",
                    "name": "HeyGen AI"
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
                    <span className="text-black font-medium">HeyGen</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow overflow-hidden">
                        <UserCircleIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">HeyGen</h1>
                        <p className="text-lg text-zinc-700">Líder mundial em avatares e dublagem com IA</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>HeyGen</strong> é a ferramenta que transformou a maneira como empresas e criadores produzem vídeos de comunicação. Ao eliminar a necessidade de câmeras, microfones e estúdios, a plataforma utiliza <strong>avatares de IA de hiper-realistas</strong> que falam qualquer texto com uma naturalidade espantosa.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seja para traduzir vídeos inteiros mantendo a voz original ou para criar apresentadores digitais que trabalham 24/7, o HeyGen se consolidou como uma solução multimodal que atende tanto o mercado de <strong>Imagens</strong> (com seus avatares de fotos) quanto o de <strong>Vídeos</strong> (com sua engine de renderização cinematográfica).
                    </p>
                </div>

                {/* Segmentos */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-black mb-4">IA para Imagens</h2>
                        <p className="text-zinc-700 leading-relaxed">
                            O HeyGen permite transformar fotos estáticas ou artes geradas por IA em seres humanos digitais falantes. Sua tecnologia de animação facial é capaz de injetar vida em retratos, tornando-os ferramentas de comunicação interativas.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
                        <h2 className="text-2xl font-bold text-black mb-4">IA para Vídeos</h2>
                        <p className="text-zinc-700 leading-relaxed">
                            Referência em vídeo generativo, o HeyGen oferece tradução automática com sincronia labial (lip-sync), clonagem de voz e um estúdio completo de edição que funciona diretamente no navegador.
                        </p>
                    </div>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o HeyGen?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Fundada com a missão de democratizar a produção de vídeo, o HeyGen utiliza modelos de visão computacional de última geração. A plataforma permite que qualquer pessoa crie vídeos profissionais em minutos, bastando um roteiro e alguns cliques, removendo as barreiras técnicas tradicionais do audiovisual.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Video Translate: O novo padrão global</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        A ferramenta Video Translate do HeyGen é considerada mágica por muitos. Ela permite subir um vídeo seu e, com um clique, traduzi-lo para mais de 100 idiomas. O sistema clona seu timbre de voz e altera o movimento dos seus lábios para que pareça que você realmente fala o idioma de destino fluentemente.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Instant Avatar e Personalização</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Para profissionais de marketing e vendas, o recurso 'Instant Avatar' permite criar uma versão digital de si mesmo a partir de um vídeo de 2 minutos gravado pelo celular. Esse avatar pode então ser usado para gravar centenas de vídeos personalizados para clientes, economizando semanas de gravação.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como criar com o HeyGen</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha seu Avatar</h3>
                                <p className="text-zinc-700">Acesse heygen.com e selecione entre centenas de avatares prontos ou faça o upload de uma foto para criar o seu próprio.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Insira o Roteiro</h3>
                                <p className="text-zinc-700">Digite o texto que o avatar deve falar. Você pode escolher a voz, o idioma e até ajustar a ênfase e a velocidade da fala.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Personalize o Design</h3>
                                <p className="text-zinc-700">Adicione fundos, textos sobrepostos, imagens e trilhas sonoras usando o editor no estilo Canva da própria plataforma.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Gere e Export_</h3>
                                <p className="text-zinc-700">Clique em 'Submit' para que a IA processe o vídeo. Em poucos minutos, seu vídeo está pronto para download em 1080p ou 4K.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades de Destaque</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Talking Photos</h3>
                            <p className="text-zinc-700">Transforme qualquer portrait estático em uma imagem falante com animação facial baseada em IA de alta precisão.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Voice Cloning</h3>
                            <p className="text-zinc-700">Clonagem de voz idêntica em múltiplos idiomas, mantendo a personalidade da marca ou do apresentador original.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Personalized Video at Scale</h3>
                            <p className="text-zinc-700">Integração com APIs e planilhas para gerar milhares de vídeos personalizados chamando cada cliente pelo nome de forma automática.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Multi-Avatar Conversations</h3>
                            <p className="text-zinc-700">Criação de cenas com múltiplos avatares interagindo entre si, ideal para scripts de treinamento e diálogos simulados.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Lip-sync mais realista do mercado atual",
                            "Ferramenta de tradução de vídeo que clona a voz original perfeitamente",
                            "Ampla biblioteca de vozes e idiomas com entonação natural",
                            "Plataforma extremamente intuitiva, ideal para não-editores",
                            "Integração oficial com Canva e outras ferramentas de CRM",
                            "Escalabilidade para empresas que precisam de centenas de vídeos mensais",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Considerações e Desafios</h2>
                    <div className="grid gap-4">
                        {[
                            "Custo por crédito pode ser elevado para criadores independentes",
                            "Plano gratuito muito limitado para gerações de alta duração",
                            "O processo de criar seu próprio avatar (Instant Avatar) exige boa iluminação",
                            "Dependência total de conexão com a internet para renderização",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o HeyGen?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de T&D e RH (Treinamentos)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Marketeers e Growth Hackers</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Vendedores (Vídeos frios personalizados)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Criadores de conteúdo multilingue</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Cineastas que buscam vídeo cinematográfico abstrato</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Projetos com orçamentos de zero custo constante</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Geração de cenas complexas sem avatares humanos</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Alcance o mundo com avatares de IA</h2>
                    <p className="text-lg mb-6 text-zinc-300">Crie seu primeiro vídeo com avatar ou traduza seu conteúdo em minutos com o HeyGen</p>
                    <a
                        href="https://heygen.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Começar Gratuitamente no HeyGen →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O HeyGen não é apenas mais um editor de vídeo; é uma ferramenta de escala global. Sua capacidade de transformar roteiros secos em vídeos humanos e calorosos, aliada a uma tecnologia de tradução sem precedentes, torna-a a escolha número 1 para empresas que buscam modernizar sua comunicação.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você precisa de vídeos profissionais constantes, dublagem impecável ou simplesmente quer poupar horas de gravação perante a câmera, o HeyGen oferece o melhor retorno sobre investimento em IA audiovisual atualmente.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />

                {/* Ferramentas Similares */}
                <SimilarTools />
            </div>
        </main>
    );
}
