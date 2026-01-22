import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";
import { faqs } from "./constants";

export const metadata = {
    title: "Krea AI - Geração de Imagem em Tempo Real e Upscaling | Review",
    description: "Conheça o Krea AI: a ferramenta líder em inteligência artificial generativa em tempo real. Veja como funciona o AI Enhancer, preços e recursos para criativos.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/krea",
    },
};

export default function KreaPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/krea#breadcrumb",
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
                        "name": "Krea AI",
                        "item": "https://www.hypehour.com.br/ferramentas/krea"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/krea#software",
                "name": "Krea AI",
                "description": "Krea AI é uma plataforma de design criativo que oferece geração de imagens e vídeos em tempo real, além de um upscaler/enhancer de alta fidelidade.",
                "applicationCategory": "MultimediaApplication",
                "operatingSystem": "Web",
                "url": "https://krea.ai",
                "creator": {
                    "@type": "Organization",
                    "name": "Krea AI"
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
                    <span className="text-black font-medium">Krea AI</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white shadow overflow-hidden">
                        <SparklesIcon className="w-10 h-10" />
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Krea AI</h1>
                        <p className="text-lg text-zinc-700">Geração de imagem em tempo real e upscaling profissional</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O <strong>Krea AI</strong> revolucionou o campo da inteligência artificial generativa ao introduzir a <strong>geração em tempo real</strong>. Enquanto as outras IAs pedem que você espere um minuto pelo resultado, no Krea a imagem se transforma instantaneamente à medida que você altera uma única letra no prompt ou move um pincel no canvas interativo.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Além da velocidade, a ferramenta se tornou um padrão da indústria para o <strong>aprimoramento de imagens</strong>. Seu 'AI Enhancer' é capaz de transformar esboços simples ou imagens borradas em fotografias de altíssima fidelidade, sendo uma ferramenta indispensável para designers, arquitetos e diretores de arte.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Krea AI?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        É um estúdio criativo baseado em nuvem que utiliza modelos de difusão de baixa latência para permitir interação instantânea. A plataforma foi desenhada para facilitar o fluxo de trabalho criativo, permitindo que o usuário visualize o resultado final durante o processo de composição, e não apenas no final.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Poder do AI Enhancer e Upscaler</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O recurso de aprimoramento do Krea vai além de um simples aumento de pixels. Ele utiliza IA para "preencher lacunas", adicionando poros de pele, texturas de tecidos e reflexos cinematográficos onde antes não existiam, elevando a qualidade de qualquer geração de IA para um nível fotorealista profissional.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Gratuidade e Planos</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        O Krea é uma das ferramentas mais acessíveis do mercado. Oferece uma versão <strong>gratuita</strong> funcional com créditos diários que permitem testar todas as funcionalidades básicas. Para profissionais, as assinaturas desbloqueiam exportações em resoluções maiores e maior poder de processamento para upscaling complexo.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Design Social e Canvas</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        A interface de 'Canvas' do Krea permite que você organize múltiplas imagens, combine-as usando IA e exporte designs prontos para uso. O feed da comunidade também permite que você veja o histórico de criação de outros artistas e aprenda novas técnicas de manipulação em tempo real.
                    </p>
                </section>

                {/* Como funciona - Steps */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Como usar o Krea AI</h2>
                    <div className="grid gap-6">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha sua ferramenta</h3>
                                <p className="text-zinc-700">Acesse krea.ai e decida entre 'Real-time Generation' para criar do zero ou 'Enhancer' para melhorar uma imagem existente.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Interaja em tempo real</h3>
                                <p className="text-zinc-700">No modo real-time, comece a digitar seu prompt. Veja a imagem mudar a cada palavra adicionada ou ao arrastar formas no canvas do lado esquerdo.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Refine com o Enhancer</h3>
                                <p className="text-zinc-700">Após chegar na composição ideal, envie a imagem para o Enhancer para adicionar detalhes realistas e aumentar a nitidez drasticamente.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Baixe em alta qualidade</h3>
                                <p className="text-zinc-700">Escolha a resolução de saída e faça o download do resultado final, pronto para apresentações ou redes sociais.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Principais funcionalidades */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Funcionalidades de Destaque</h2>
                    <div className="grid gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Real-time Generation</h3>
                            <p className="text-zinc-700">A latência zero permite um loop de feedback instantâneo entre o pensamento do criador e a execução da IA, algo inexistente em ferramentas tradicionais.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Upscaler & Enhancer</h3>
                            <p className="text-zinc-700">Considerado um dos melhores upscalers generativos do mundo, recupera detalhes perdidos e cria texturas orgânicas de alta fidelidade.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Real-time Video</h3>
                            <p className="text-zinc-700">Geração de animações e transições de vídeo em tempo real, permitindo exploração visual dinâmica de cenários e personagens.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Patterns e Illusions</h3>
                            <p className="text-zinc-700">Ferramenta integrada para esconder logotipos ou padrões dentro de belas paisagens ou cenas urbanas geradas por IA.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Incomparável para prototipagem rápida e ideação visual dinâmica",
                            "O melhor Enhancer/Upscaler gratuito disponível na web",
                            "Interface de canvas que permite trabalhar múltiplas imagens ao mesmo tempo",
                            "Recurso de geração constante enquanto você desenha ou move elementos",
                            "Excelente para corrigir e detalhar imagens geradas por outras IAs",
                            "Facilidade no uso de padrões e logotipos escondidos em imagens",
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
                            "Imagens em tempo real podem ser menos detalhadas antes de passar pelo Enhancer",
                            "Plano gratuito tem limites que podem ser atingidos rapidamente em fluxos de vídeo",
                            "Para altas resoluções (4K), é necessário o upgrade para os planos Pro",
                            "Não possui controle de tipografia tão preciso quanto o Ideogram",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Krea AI?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Concept Artists e Ilustradores Digitais</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Designers que precisam de upscaling de alta fidelidade</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Arquitetos fazendo renderização rápida de esboços</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Criadores de conteúdo experimentando com vídeo IA</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem busca apenas tipografia técnica estática</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Usuários sem conexão rápida à internet (para fluxos em tempo real)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Projetos que exigem controle total de parâmetros manuais de difusão</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Experimente o design em tempo real</h2>
                    <p className="text-lg mb-6 text-zinc-300">Descubra por que o Krea AI é a ferramenta favorita para upscaling e criação dinâmica</p>
                    <a
                        href="https://krea.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar Krea AI →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Krea AI não é apenas mais um gerador de imagens; é um estúdio de design vivo. Sua capacidade de responder instantaneamente aos estímulos do usuário o torna a ferramenta mais próxima de um "espelho da mente" disponível hoje no mercado criativo.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Seja para melhorar drasticamente a qualidade de uma foto antiga ou para criar visuais inovadores do zero, o Krea AI oferece um equilíbrio perfeito entre velocidade absurda e qualidade profissional.
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
