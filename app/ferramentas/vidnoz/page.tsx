
import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Vidnoz AI - Gerador de Vídeo com Avatar e Voz IA Grátis | Review",
    description: "Conheça o Vidnoz AI: plataforma líder para criar vídeos com avatares realistas, clonagem de voz e templates prontos. Teste grátis e transforme texto em vídeo em minutos.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/vidnoz",
    },
};

export default function VidnozPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/vidnoz#breadcrumb",
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
                        "name": "Vidnoz",
                        "item": "https://www.hypehour.com.br/ferramentas/vidnoz"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/vidnoz#software",
                "name": "Vidnoz AI",
                "description": "Vidnoz AI é uma plataforma de geração de vídeos que usa inteligência artificial para criar apresentadores virtuais (avatares) realistas e clonar vozes, permitindo transformar texto em vídeo rapidamente.",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Web",
                "url": "https://pt.vidnoz.com/",
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
                    <span className="text-black font-medium">Vidnoz</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        V
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Vidnoz AI</h1>
                        <p className="text-lg text-zinc-700">Crie vídeos com Avatares Falantes e Vozes de IA em minutos</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O **Vidnoz AI** é uma plataforma revolucionária de criação de vídeos que permite transformar simples textos em vídeos profissionais apresentados por avatares humanos realistas (AI Avatars). Sem a necessidade de câmeras, microfones ou atores, você pode produzir conteúdo de alta qualidade para marketing, vendas, suporte e educação.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Com uma biblioteca de centenas de avatares, vozes em diversos idiomas (incluindo português do Brasil) e templates editáveis, o Vidnoz democratiza a produção de vídeos corporativos, permitindo criar em minutos o que antes levaria dias e custaria muito caro.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Vidnoz?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        Vidnoz é uma suíte de ferramentas de mídia com IA focada em vídeo. Seu principal produto é o Gerador de Vídeo com IA, que sincroniza perfeitamente o movimento labial (lip-sync) de avatares digitais com qualquer texto ou áudio que você fornecer.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Além dos avatares, a plataforma oferece clonagem de voz, "Talking Photo" (fazer fotos estáticas falarem), face swap e remoção de fundo, tudo acessível diretamente pelo navegador.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha um Template e Avatar</h3>
                                <p className="text-zinc-700">Selecione entre centenas de templates prontos (notícias, tutoriais, promos) e escolha o avatar que melhor representa sua marca.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Digite seu Roteiro</h3>
                                <p className="text-zinc-700">Escreva ou cole o texto que você quer que o avatar fale. Você pode escolher o idioma, sotaque, tom de voz e velocidade.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Personalize</h3>
                                <p className="text-zinc-700">Adicione suas próprias imagens, vídeos, música de fundo, textos e logomarca para deixar o vídeo com a sua identidade.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Gere e Baixe</h3>
                                <p className="text-zinc-700">A IA processa o vídeo sincronizando a fala e os movimentos. Em poucos minutos, seu vídeo MP4 profissional está pronto para download.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Vídeos de treinamento e onboarding",
                            "Apresentações de vendas personalizadas",
                            "Suporte ao cliente e FAQs em vídeo",
                            "Vídeos educacionais e e-learning",
                            "Marketing e anúncios para social media",
                            "Notícias e boletins informativos",
                            "Fazer fotos antigas falarem (Talking Photo)",
                            "Clonagem de voz para dublagem",
                            "Criar conteúdo multilíngue facilmente",
                            "Vídeos explicativos de produtos",
                            "Mensagens de boas-vindas",
                            "Convites virtuais animados",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Mais de 1000 Avatares Realistas</h3>
                            <p className="text-zinc-700">Grande diversidade de avatares de diferentes etnias, idades e estilos de roupa, ideais para se conectar com qualquer público globalmente.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Clonagem de Voz (Voice Cloning)</h3>
                            <p className="text-zinc-700">Clone sua própria voz ou a de um porta-voz para criar vídeos autênticos sem precisar gravar áudio todas as vezes.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Talking Photo</h3>
                            <p className="text-zinc-700">Dê vida a qualquer foto estática (retratos, pinturas, personagens) fazendo-a falar com movimentos faciais realistas.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Mais de 100 Idiomas</h3>
                            <p className="text-zinc-700">Crie conteúdo global instantaneamente com vozes de alta qualidade em português, inglês, espanhol e dezenas de outros idiomas.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Templates de Vídeo</h3>
                            <p className="text-zinc-700">Centenas de modelos prontos para diferentes nichos de mercado, economizando horas de design e edição.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Criação de vídeos profissionais sem câmeras ou estúdio",
                            "Interface arrastar-e-soltar muito fácil de usar",
                            "Plano gratuito disponível diariamente para testes",
                            "Redução drástica de custos com atores e produção",
                            "Escalabilidade: crie centenas de vídeos personalizados rapidamente",
                            "Avatares de alta qualidade com sincronização labial precisa",
                            "Ferramentas extras como Face Swap gratuito e removedor de fundo",
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
                            "A versão gratuita adiciona marca d'água aos vídeos",
                            "O tempo de geração do vídeo pode variar dependendo da fila do servidor",
                            "Alguns movimentos dos avatares ainda podem parecer levemente robóticos",
                            "Limitação de minutos por mês nos planos mais básicos",
                            "Requer conexão constante com a internet",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Vidnoz?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de RH (Treinamento e Onboarding)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Equipes de Vendas (Prospecção personalizada)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Produtores de conteúdo sem equipamentos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Empresas que precisam de conteúdo multilíngue</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700"> educadores e criadores de cursos online</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca vídeos cinematográficos artísticos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Vlogs de estilo de vida "in loco"</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Gravações que exigem emoção humana muito complexa e sutil</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Crie seu primeiro vídeo com Avatar agora</h2>
                    <p className="text-lg mb-6 text-zinc-300">Teste gratuitamente e veja a mágica acontecer em minutos. Sem cartão de crédito.</p>
                    <a
                        href="https://pt.vidnoz.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Criar Vídeo Grátis no Vidnoz →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Vidnoz AI é um divisor de águas para empresas e profissionais que precisam escalar sua produção de vídeo mas não têm orçamento para estúdios ou tempo para gravações. A qualidade dos avatares e a facilidade de uso o colocam como uma das principais opções no mercado de "AI Video Generation".
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você precisa comunicar, ensinar ou vender através de vídeo e quer agilidade, o Vidnoz é uma ferramenta indispensável no seu arsenal.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
