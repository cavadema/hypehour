import Link from "next/link";
import { PhotoIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import { faqs } from "./constants";

export const metadata = {
    title: "Ideogram - A Melhor IA para Tipografia e Design Gráfico | Review",
    description: "Descubra o Ideogram: a inteligência artificial líder em renderização de texto e design. Veja como funciona, preços, Magic Prompt e se é ideal para seus projetos.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/ideogram",
    },
};

export default function IdeogramPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/ideogram#breadcrumb",
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
                        "name": "Ideogram",
                        "item": "https://www.hypehour.com.br/ferramentas/ideogram"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/ideogram#software",
                "name": "Ideogram",
                "description": "Ideogram é uma plataforma de IA generativa avançada focada em design gráfico e tipografia de alta precisão.",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Web",
                "url": "https://ideogram.ai",
                "creator": {
                    "@type": "Organization",
                    "name": "Ideogram"
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
                    <span className="text-black font-medium">Ideogram</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow overflow-hidden">
                        <PhotoIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Ideogram</h1>
                        <p className="text-lg text-zinc-700">A revolução da tipografia e design gráfico com IA</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Ideogram</strong> surgiu como uma resposta direta a um dos maiores problemas das IAs generativas: a dificuldade em renderizar textos legíveis dentro de imagens. Com o lançamento de sua versão <strong>2.0</strong>, a ferramenta não apenas resolveu esse problema, mas se tornou a plataforma favorita de designers para criar logotipos, cartazes e artes publicitárias complexas.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Diferente de ferramentas que exigem interfaces complexas (como o Discord), o Ideogram oferece uma experiência web fluida, intuitiva e social, onde a função <strong>Magic Prompt</strong> ajuda até os usuários mais leigos a criarem visuais de nível profissional em segundos.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Ideogram?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Fundada por ex-pesquisadores do Google Brain, o Ideogram é uma ferramenta de IA generativa de imagens que prioriza a fidelidade tipográfica. Ela permite que qualquer pessoa crie designs gráficos que antes exigiriam softwares avançados de edição, integrando texto e imagem de forma orgânica e estilizada.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">A magia do 'Magic Prompt'</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Uma das funcionalidades mais queridas é o Magic Prompt. Quando ativado, ele transforma pedidos simples do usuário em parágrafos técnicos detalhados, especificando estilos de iluminação, câmeras, paletas de cores e composições artísticas, garantindo que o resultado final seja rico e esteticamente agradável.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Ideogram é gratuito?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim, o Ideogram opera no modelo <strong>freemium</strong>. Usuários novos recebem créditos diários gratuitos para gerar imagens. Para profissionais que precisam de downloads em alta resolução, modo de edição avançado e privacidade nas criações, a plataforma oferece planos competitivos a partir de <strong>$7 dólares</strong>.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Renderização de Texto impecável</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Enquanto outras IAs muitas vezes 'alucinam' ao tentar escrever palavras, o Ideogram consegue renderizar frases inteiras, com fontes específicas e sem erros de ortografia, tornando-se uma ferramenta indispensável para quem trabalha com marketing digital e social media.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como usar o Ideogram</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Acesse a plataforma</h3>
                                <p className="text-zinc-700">Entre em ideogram.ai e faça login com sua conta Google ou Apple para começar a usar seus créditos gratuitos.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escreva sua ideia</h3>
                                <p className="text-zinc-700">Digite o que deseja no campo de prompt. Se quiser texto na imagem, coloque a frase entre aspas (ex: "Hypehour" neon sign).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha as configurações</h3>
                                <p className="text-zinc-700">Selecione a proporção da imagem (1:1, 16:9, etc) e ative o Magic Prompt para melhores resultados.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Gere e refine</h3>
                                <p className="text-zinc-700">Aguarde alguns segundos pelas 4 variações. Você pode baixar a sua favorita ou usar o botão 'Remix' para fazer ajustes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades de Destaque</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideogram 2.0</h3>
                            <p className="text-zinc-700">A última geração do modelo oferece cinco estilos principais: General, Realistic, Design, 3D e Anime, cada um otimizado para uma finalidade diferente.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Paleta de Cores Controlada</h3>
                            <p className="text-zinc-700">Permite que o usuário defina as cores exatas (hex codes) que a IA deve utilizar no design, ideal para manter a identidade visual de uma marca.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Editor de Texto Integrado</h3>
                            <p className="text-zinc-700">Facilita a composição de logotipos e artes promocionais com um entendimento profundo de fontes e diagramação.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Remix Social</h3>
                            <p className="text-zinc-700">Acesse o feed público para aprender com outros usuários e fazer 'remix' de prompts de sucesso com apenas um clique.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Líder incontestável na renderização de textos e tipografia",
                            "Interface web muito mais amigável que o Discord do Midjourney",
                            "Magic Prompt que facilita a criação para quem não sabe fazer prompts",
                            "Plano gratuito disponível para uso casual",
                            "Ferramentas de controle de cor excelentes para designers de marcas",
                            "Geração rápida e eficiente de logotipos e posters",
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
                            "Limites diários no plano gratuito podem ser atingidos rapidamente",
                            "Imagens são públicas por padrão, exceto nos planos mais caros",
                            "Estilos artísticos 'místicos' podem ser menos complexos que no Midjourney",
                            "O download de arquivos vetoriais (.svg) ainda é limitado",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Ideogram?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Social Media e Criadores de Conteúdo</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Designers de Logotipos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Profissionais de Marketing e Branding</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Pequenos empreendedores que precisam de artes rápidas</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Geração de imagens privadas de forma gratuita</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Artistas que buscam estilos ultra-abstratos do Midjourney</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Projetos que exigem 100% de sigilo sem assinatura Plus</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Crie designs com texto perfeito hoje</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece a usar o Ideogram gratuitamente e veja a diferença na sua tipografia</p>
                    <a
                        href="https://ideogram.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar Ideogram →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Ideogram se consolidou como uma ferramenta indispensável no toolkit de design moderno. Sua capacidade única de integrar texto e imagem com perfeição preenche uma lacuna que outras IAs ainda lutam para resolver.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Seja você um designer profissional em busca de prototipagem rápida ou um empreendedor precisando de artes para redes sociais, o Ideogram 2.0 oferece o equilíbrio perfeito entre potência técnica e facilidade de uso.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
