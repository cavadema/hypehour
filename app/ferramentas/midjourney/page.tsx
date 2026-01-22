import Link from "next/link";
import { CameraIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import { faqs } from "./constants";

export const metadata = {
    title: "Midjourney - O Líder em Geração de Imagens Artísticas | Review",
    description: "Conheça o Midjourney: a IA com maior qualidade artística e fotorrealista do mercado. Veja como funciona via Discord, preços, v6 e se é ideal para você.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/midjourney",
    },
};

export default function MidjourneyPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/midjourney#breadcrumb",
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
                        "name": "Midjourney",
                        "item": "https://www.hypehour.com.br/ferramentas/midjourney"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/midjourney#software",
                "name": "Midjourney",
                "description": "Midjourney é um laboratório de pesquisa independente que produz um modelo de inteligência artificial de ponta para criar imagens a partir de descrições textuais.",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Web (Discord-based)",
                "url": "https://www.midjourney.com",
                "creator": {
                    "@type": "Organization",
                    "name": "Midjourney"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "10.00",
                    "priceCurrency": "USD",
                    "category": "Paid"
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
                    <span className="text-black font-medium">Midjourney</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow overflow-hidden">
                        <CameraIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Midjourney</h1>
                        <p className="text-lg text-zinc-700">O padrão ouro da geração de imagens artísticas</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Midjourney</strong> é amplamente reconhecido como a inteligência artificial mais capaz quando o assunto é estética, composição artística e fotorrealismo. Diferente de seus concorrentes, ele possui uma "assinatura" visual única que entrega resultados profissionais quase instantaneamente, mesmo com prompts simples.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Operando principalmente através do <strong>Discord</strong>, a ferramenta criou uma vasta comunidade de criadores, artistas e designers que utilizam sua versão <strong>v6</strong> para criar desde conceitos arquitetônicos e design de produtos até ilustrações complexas e fotografias publicitárias que desafiam a percepção da realidade.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Midjourney?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        É um laboratório de pesquisa independente que desenvolveu um modelo de IA proprietário capaz de transformar texto em imagens. Sua missão foca em expandir os poderes imaginativos da espécie humana através da tecnologia, priorizando a beleza visual e a fidelidade técnica em cada pixel gerado.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como funciona o fluxo de trabalho?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O fluxo é baseado em comandos no Discord ou através de seu novo painel web Alpha. Ao enviar um comando como <code>/imagine</code> seguido de uma descrição, a IA gera quatro opções iniciais. A partir daí, o usuário pode escolher aumentar a resolução (Upscale), criar variações (Vary) ou editar áreas específicas da imagem (Vary Region).
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Quanto custa usar o Midjourney?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O Midjourney é uma ferramenta paga, com planos que variam de <strong>$10 a $120 dólares mensais</strong>. Os planos diferem pela quantidade de "horas de GPU" (tempo de processamento rápido) e pelo acesso a recursos como o modo privado (Stealth Mode). No plano Standard ($30), o usuário ganha gerações ilimitadas no modo Relax.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Suporte ao idioma português</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Embora entenda contextos e objetos básicos descritos em português, o Midjourney performa significativamente melhor com instruções em <strong>inglês</strong>. Para obter estilos artísticos específicos, tipos de iluminação e controle de câmera, o uso do inglês é essencial para evitar resultados imprecisos.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Passo a passo para começar</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Entre no Discord</h3>
                                <p className="text-zinc-700">Crie uma conta no Discord e junte-se ao servidor oficial do Midjourney ou adicione o bot ao seu próprio servidor.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Assine um plano</h3>
                                <p className="text-zinc-700">Utilize o comando <code>/subscribe</code> para escolher seu plano. Não há período de teste gratuito disponível no momento.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Crie sua primeira imagem</h3>
                                <p className="text-zinc-700">Digite <code>/imagine prompt:</code> seguido da sua ideia em inglês. Em menos de 60 segundos, você terá 4 variações.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Refine e exporte</h3>
                                <p className="text-zinc-700">Use os botões de upscale para baixar a imagem em alta resolução ou variações para ajustar os detalhes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Casos de Uso */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">O que você pode criar</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Fotografias de produtos",
                            "Conceitos arquitetônicos",
                            "Design de interiores",
                            "Ilustrações para livros",
                            "Logotipos e branding",
                            "Web design e interfaces",
                            "Personagens de jogos",
                            "Arte conceitual para filmes",
                            "Vitrines de e-commerce",
                            "Moodboards para moda",
                            "Postagens de redes sociais",
                            "Capas de álbuns musicais",
                            "Texturas para 3D",
                            "Estampas de vestuário",
                            "Templates de landing pages",
                            "Infográficos visuais",
                            "Retratos fotorrealistas",
                            "Mockups publicitários",
                        ].map((item, index) => (
                            <div key={index} className="p-3 bg-white border border-zinc-200 rounded-lg shadow-sm hover:shadow-md transition">
                                <p className="text-zinc-700 text-sm font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades Profissionais</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Versão 6 Avançada</h3>
                            <p className="text-zinc-700">O modelo mais atual traz uma compreensão semântica superior, permitindo prompts extremamente longos e detalhados com controle total de luz e estilo.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Zoom Out e Pan</h3>
                            <p className="text-zinc-700">Permite "afastar a câmera" da imagem gerada para criar um cenário maior ao redor do objeto central, ou expandir o canvas para qualquer direção.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Vary Region (Inpainting)</h3>
                            <p className="text-zinc-700">Selecione uma parte específica da imagem (ex: mudar a cor de uma camisa) e peça para a IA redesenhar apenas aquela área mantendo o resto intacto.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Style Reference (--sref)</h3>
                            <p className="text-zinc-700">Copie o estilo visual exato de uma imagem existente e aplique em qualquer novo prompt, garantindo consistência visual em projetos de marca.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Melhor qualidade estética entre todas as IAs do mercado",
                            "Fotorrealismo impressionante que economiza custos com ensaios reais",
                            "Recursos de edição interna (Vary Region) de alta precisão",
                            "Modo 'Relax' ilimitado para quem gera centenas de imagens mensais",
                            "Comunidade vibrante e galeria de milhões de prompts para inspiração",
                            "Capacidade de gerar textos curtos de forma legível (v6)",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Considerações e Desafios</h2>
                    <div className="grid gap-4">
                        {[
                            "Interface via Discord pode assustar usuários menos técnicos em um primeiro momento",
                            "Ausência de um plano gratuito para testes pontuais",
                            "Privacidade das imagens só está disponível nos planos mais caros (Pro/Mega)",
                            "Curva de aprendizado para entender parâmetros técnicos (--ar, --stylize, --iw)",
                            "Dependência quase total de prompts em inglês para resultados de alta fidelidade",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Midjourney?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Designers gráficos e diretores de arte</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Arquitetos e decoradores de interiores</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Profissionais de marketing e publicidade</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Artistas digitais e entusiastas de IA</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Criadores de conteúdo e e-commerce</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca uma ferramenta 100% gratuita</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Usuários que não querem usar o Discord</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Geração de imagens com textos muito longos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem precisa de imagens privadas sem pagar premium</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Crie imagens que parecem reais</h2>
                    <p className="text-lg mb-6 text-zinc-400">Junte-se a milhões de criadores e transforme suas ideias em arte com o Midjourney</p>
                    <a
                        href="https://www.midjourney.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition transform hover:scale-105"
                    >
                        Começar no Midjourney →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Midjourney não é apenas uma ferramenta de geração de imagens, é um divisor de águas para a economia criativa. Apesar de sua barreira inicial (o Discord) e da ausência de um plano gratuito, sua superioridade técnica justifica o investimento para qualquer profissional que dependa de alta qualidade visual.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você busca o máximo em fotorrealismo e uma ferramenta que "entende" de arte e iluminação, o Midjourney v6 é, sem dúvida, a melhor escolha do mercado atualmente.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
