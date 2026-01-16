import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Wispr Flow - Ditado por Voz com IA e Comandos | Review",
    description: "Conheça o Wispr Flow: a ferramenta de ditado com IA que escreve 3x mais rápido que você digita. Transcrição perfeita, comandos de voz e formatação automática em qualquer app.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/wisprflow",
    },
};

export default function WisprFlowPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/wisprflow#breadcrumb",
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
                        "name": "Transcrever Áudio",
                        "item": "https://www.hypehour.com.br/transcrever-audio"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Wispr Flow",
                        "item": "https://www.hypehour.com.br/ferramentas/wisprflow"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/wisprflow#software",
                "name": "Wispr Flow",
                "description": "Wispr Flow é uma aplicação de ditado por voz baseada em IA que permite escrever textos complexos e formatados apenas falando, em qualquer lugar do seu computador.",
                "applicationCategory": "ProductivityApplication",
                "operatingSystem": "macOS, Windows, iOS",
                "url": "https://wisprflow.ai",
                "creator": {
                    "@type": "Organization",
                    "name": "Wispr AI"
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
                    <Link href="/transcrever-audio" className="hover:text-black transition">Transcrever Áudio</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Wispr Flow</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        W
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Wispr Flow</h1>
                        <p className="text-lg text-zinc-700">Sua voz convertida em texto perfeito, instantaneamente.</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O Wispr Flow é uma ferramenta de ditado revolucionária que usa inteligência artificial para permitir que você "escreva com a voz" em velocidade recorde. Diferente dos ditados antigos que erravam tudo, o Flow entende contexto, pontuação e até formatação, transformando pensamentos desorganizados em texto claro e polido.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Compatível com Mac e Windows, ele funciona sobre qualquer aplicativo — Slack, Notion, Email, VS Code — permitindo que você dite mensagens, e-mails ou documentos inteiros sem tocar no teclado.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Wispr Flow?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        Wispr Flow é um assistente de escrita por voz que elimina a fricção entre pensar e escrever. Ele usa modelos de linguagem avançados para transcrever sua fala com precisão quase humana, adaptando-se ao seu estilo e vocabulário.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Além de transcrever, o Flow atua como um editor inteligente: você pode dar comandos de voz para reescrever frases, mudar o tom (ex: "faça isso soar mais profissional") ou traduzir para outras línguas em tempo real.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Aperte o atalho</h3>
                                <p className="text-zinc-700">Pressione uma tecla de atalho simples para ativar o microfone do Wispr Flow em qualquer janela.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Fale naturalmente</h3>
                                <p className="text-zinc-700">Dite suas ideias sem se preocupar com "vírgulas" ou pausas perfeitas. Fale como se estivesse conversando.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">IA formata e transcreve</h3>
                                <p className="text-zinc-700">O Flow processa sua fala, remove "uhms" e "ahns", adiciona pontuação correta e digita o texto instantaneamente.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Edite com a voz</h3>
                                <p className="text-zinc-700">Selecione o texto e diga "transforme em uma lista" ou "traduza para inglês" para edições rápidas.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Escrever emails longos rapidamente",
                            "Responder mensagens no Slack/Teams",
                            "Criar rascunhos de artigos e posts",
                            "Programar usando voz (comentários/docs)",
                            "Tomar notas em reuniões silenciadas",
                            "Traduzir pensamentos para texto",
                            "Pessoas com LER/DORT (evitar digitação)",
                            "Brainstorming rápido de ideias",
                            "Escrever relatórios detalhados",
                            "Criar descrições de produtos",
                            "Legendar vídeos mentalmente",
                            "Documentação de código",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Auto-Edição Inteligente</h3>
                            <p className="text-zinc-700">Não apenas transcreve, mas limpa sua fala. Remove vícios de linguagem e estrutura frases confusas para parecerem texto escrito profissionalmente.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Comandos de Voz (Command Mode)</h3>
                            <p className="text-zinc-700">Aja como um diretor. Selecione um parágrafo e diga "resuma isso" ou "mude o tom para amigável" e a IA executa.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Suporte Multilíngue (100+ idiomas)</h3>
                            <p className="text-zinc-700">Fale em português, mude para inglês ou espanhol no meio da frase. O Flow detecta e transcreve corretamente em mais de 100 línguas.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Whisper Mode</h3>
                            <p className="text-zinc-700">Fale baixinho, quase sussurrando, e o Wispr Flow ainda entenderá perfeitamente. Ideal para escritórios abertos ou cafés.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Contexto Adaptativo</h3>
                            <p className="text-zinc-700">Ele entende onde você está escrevendo. Um email para o chefe terá um tom diferente de uma mensagem no Discord.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Velocidade: escreva 3x mais rápido do que digita (fala ~150 palavras/min vs digitação ~40)",
                            "Precisão absurda, entendendo sotaques e termos técnicos melhor que a digitação do sistema",
                            "Funciona em QUALQUER lugar (sistema operacional, navegador, apps nativos)",
                            "Reduz fadiga nas mãos e pulsos (ergonomia)",
                            "Plano gratuito útil para testar e uso leve",
                            "Privacidade: dados não são usados para treinar modelos públicos (no plano Enterprise)",
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
                            "Requer conexão com a internet para funcionar",
                            "Plano gratuito tem limite semanal de palavras",
                            "Pode demorar um pouco para se acostumar a 'falar pontuando' (embora a IA ajude)",
                            "Ainda não disponível para Android (apenas iOS, Mac e Windows)",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Wispr Flow?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Escritores e redatores</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Profissionais de vendas (emails/CRM)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Desenvolvedores (documentação)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Pessoas com Dislexia ou TDAH</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Quem sofre de LER/DORT</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Ambientes extremamente barulhentos (embora o Whisper Mode ajude)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem prefere pensar estritamente digitando</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Vídeo do YouTube */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Veja o Wispr Flow em ação</h2>
                    <div className="rounded-xl overflow-hidden shadow-lg border border-zinc-200">
                        <div className="relative pb-[56.25%] h-0">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/G7G5duVu3P4"
                                title="Wispr Flow Demo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Fale, não digite.</h2>
                    <p className="text-lg mb-6 text-zinc-300">Experimente o Wispr Flow de graça e aumente sua velocidade de escrita em 3x.</p>
                    <a
                        href="https://wisprflow.ai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Baixar Wispr Flow Grátis →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Wispr Flow transforma a maneira como interagimos com nossos computadores. Ao remover a barreira física da digitação, ele libera o fluxo de pensamento, permitindo que você produza mais conteúdo com menos esforço físico e mental.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Se você escreve muito no seu dia a dia, seja código, emails ou artigos, o Flow é uma daquelas ferramentas de produtividade que se pagam na primeira semana de uso.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
