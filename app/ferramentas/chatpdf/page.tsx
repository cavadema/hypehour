
import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "ChatPDF - Converse com seus PDFs usando IA | Review",
    description: "Conheça o ChatPDF: ferramenta de IA que permite conversar com documentos PDF, resumir textos, traduzir e responder perguntas instantaneamente.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/chatpdf",
    },
};

export default function ChatPDFPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/chatpdf#breadcrumb",
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
                        "name": "IA para PDF",
                        "item": "https://www.hypehour.com.br/ia-para-pdf"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "ChatPDF",
                        "item": "https://www.hypehour.com.br/ferramentas/chatpdf"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/chatpdf#software",
                "name": "ChatPDF",
                "description": "ChatPDF é uma ferramenta de IA que permite conversar com arquivos PDF como se fosse um humano, resumindo documentos, respondendo perguntas e extraindo informações.",
                "applicationCategory": "ProductivityApplication",
                "operatingSystem": "Web",
                "url": "https://www.chatpdf.com",
                "creator": {
                    "@type": "Organization",
                    "name": "ChatPDF"
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
                    <Link href="/ia-para-pdf" className="hover:text-black transition">IA para PDF</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">ChatPDF</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        C
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">ChatPDF</h1>
                        <p className="text-lg text-zinc-700">Converse com seus documentos PDF usando Inteligência Artificial</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O ChatPDF é uma ferramenta revolucionária que transforma a maneira como interagimos com documentos PDF. Imagine poder "conversar" com um livro, artigo acadêmico, manual técnico ou contrato legal como se ele fosse uma pessoa capaz de responder a qualquer pergunta sobre seu conteúdo.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Utilizando modelos avançados de linguagem (como o ChatGPT), o ChatPDF analisa o documento em segundos e permite que você extraia resumos, encontre informações específicas e esclareça dúvidas sem precisar ler centenas de páginas manualmente.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o ChatPDF?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        ChatPDF é uma aplicação web baseada em inteligência artificial projetada para analisar e interpretar arquivos PDF. Ela funciona como um assistente de leitura inteligente: você faz o upload do arquivo e a IA "lê" o conteúdo instantaneamente, ficando pronta para responder perguntas, criar resumos e explicar conceitos complexos.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        É amplamente utilizado por estudantes, pesquisadores e profissionais que precisam processar, entender e sintetizar grandes volumes de informação de forma rápida e eficiente.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Faça o upload do PDF</h3>
                                <p className="text-zinc-700">Arraste e solte seu arquivo PDF na plataforma ou cole a URL de um documento online.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Análise automática</h3>
                                <p className="text-zinc-700">A IA processa o documento em segundos e gera um breve resumo inicial, sugerindo perguntas que você pode fazer.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Converse com o documento</h3>
                                <p className="text-zinc-700">Digite perguntas como "Qual a conclusão principal?" ou "Resuma o capítulo 3" e receba respostas instantâneas.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Verifique as fontes</h3>
                                <p className="text-zinc-700">As respostas incluem citações clicáveis que levam você diretamente à página do PDF onde a informação foi encontrada.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Resumir artigos acadêmicos",
                            "Estudar para provas e concursos",
                            "Analisar contratos jurídicos",
                            "Extrair dados de relatórios financeiros",
                            "Entender manuais técnicos",
                            "Traduzir documentos estrangeiros",
                            "Criar questionários de estudo",
                            "Revisar literatura científica",
                            "Escrever essays e redações",
                            "Preparar apresentações baseadas em relatórios",
                            "Consultar normas e regulamentos",
                            "Sintetizar livros e ebooks",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Resumo instantâneo</h3>
                            <p className="text-zinc-700">Receba um resumo conciso de qualquer documento assim que ele é carregado, destacando os pontos-chave automaticamente.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Citações e Referências</h3>
                            <p className="text-zinc-700">Cada resposta da IA vem acompanhada da página exata de onde a informação foi extraída, garantindo confiabilidade.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Suporte Multilíngue</h3>
                            <p className="text-zinc-700">O ChatPDF aceita PDFs em qualquer idioma e pode responder em qualquer idioma. Você pode subir um texto em inglês e pedir um resumo em português.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Chat com múltiplos arquivos</h3>
                            <p className="text-zinc-700">Crie pastas para organizar seus arquivos e converse com vários PDFs simultaneamente em uma única conversa (recurso avançado).</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Suporte a diversos formatos</h3>
                            <p className="text-zinc-700">Além de PDF, suporta arquivos Word (.doc, .docx), PowerPoint (.ppt, .pptx) e arquivos de texto (.txt).</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Economiza horas de leitura ao ir direto ao ponto",
                            "Interface extremamente simples e intuitiva",
                            "Não requer cadastro para testar (uso imediato)",
                            "Citações clicáveis aumentam a confiança na resposta",
                            "Funciona em qualquer dispositivo (mobile, tablet, desktop)",
                            "Plano gratuito generoso (2 PDFs/dia até 120 páginas)",
                            "Capacidade de traduzir e explicar termos complexos",
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
                            "O plano gratuito tem limite de páginas por PDF (geralmente 120)",
                            "Não interpreta imagens ou gráficos dentro do PDF com perfeição",
                            "Depende da qualidade do texto do PDF (PDFs digitalizados como imagem podem falhar sem OCR)",
                            "A IA pode ocasionalmente alucinar informações se o textos for ambíguo",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o ChatPDF?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Estudantes universitários e pesquisadores</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Advogados e profissionais jurídicos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Analistas financeiros e de negócios</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Leitores ávidos que querem resumos rápidos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Qualquer pessoa lidando com burocracia</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Análise profunda de plantas de engenharia (imagens)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Livros inteiros de 1000 páginas no plano grátis</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Documentos manuscritos ilegíveis</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Comece a conversar com seus PDFs</h2>
                    <p className="text-lg mb-6 text-zinc-300">Experimente o ChatPDF agora mesmo, sem cadastro e gratuitamente.</p>
                    <a
                        href="https://www.chatpdf.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar ChatPDF Grátis →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O ChatPDF democratizou o acesso à informação contida em documentos longos e complexos. Ao transformar a leitura passiva em uma conversa ativa, ele economiza tempo e melhora a compreensão de textos difíceis.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Seja para estudos, trabalho ou curiosidade pessoal, ter um assistente de IA que lê e explica seus documentos é uma vantagem competitiva enorme nos dias de hoje.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
