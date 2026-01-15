
import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "LightPDF - Editor e Conversor de PDF com IA | Review",
    description: "Conheça o LightPDF: ferramenta completa de IA para editar, converter, resumir e interagir com PDFs. Veja funcionalidades, preço e se vale a pena.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/lightpdf",
    },
};

export default function LightPDFPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/lightpdf#breadcrumb",
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
                        "name": "LightPDF",
                        "item": "https://www.hypehour.com.br/ferramentas/lightpdf"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/lightpdf#software",
                "name": "LightPDF",
                "description": "LightPDF é uma ferramenta all-in-one baseada em nuvem que usa IA para editar, converter, assinar, OCR e conversar com documentos PDF.",
                "applicationCategory": "ProductivityApplication",
                "operatingSystem": "Web, Windows, iOS, Android",
                "url": "https://lightpdf.com/pt/",
                "creator": {
                    "@type": "Organization",
                    "name": "Wangxu Technology"
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
                    <span className="text-black font-medium">LightPDF</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        L
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">LightPDF</h1>
                        <p className="text-lg text-zinc-700">Editor e conversor de PDF completo com inteligência artificial</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O LightPDF é uma poderosa suíte de ferramentas para PDF baseada em nuvem que integra inteligência artificial para facilitar o trabalho com documentos. Diferente de conversores simples, ele oferece uma experiência completa: edição, conversão, assinatura digital, OCR e um assistente de IA para leitura e resumo de arquivos.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        Seja você um estudante precisando resumir artigos ou um profissional que precisa editar contratos e converter arquivos digitalizados, o LightPDF oferece soluções rápidas e acessíveis diretamente no navegador ou em seus aplicativos dedicados.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o LightPDF?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        LightPDF é uma plataforma "tudo em um" para gestão de documentos PDF. Ele combina as funções tradicionais de edição e conversão de PDFs com recursos modernos de IA generativa. Isso permite não apenas manipular o formato do arquivo, mas também interagir com o conteúdo: fazer perguntas, pedir resumos e extrair dados automaticamente.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Disponível como serviço online (Web), software para PC e aplicativo móvel, ele garante que você possa trabalhar com seus documentos em qualquer lugar, com sincronização na nuvem.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Acesse a ferramenta</h3>
                                <p className="text-zinc-700">Entre no site ou abra o aplicativo e escolha a função desejada (Chat com PDF, Conversão, OCR, Edição, etc.).</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Carregue seu arquivo</h3>
                                <p className="text-zinc-700">Faça o upload do seu documento PDF, Word, Excel ou imagem. O processamento é rápido e seguro.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">A IA entra em ação</h3>
                                <p className="text-zinc-700">Para chat, a IA analisa o texto; para OCR, ela extrai caracteres; para conversão, ela preserva a formatação original.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Edite ou Baixe</h3>
                                <p className="text-zinc-700">Edite o conteúdo conforme necessário, interaja com o assistente e baixe o resultado final otimizado.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Interagir com documentos via IA (Chat)",
                            "Converter PDF para Word/Excel/PPT editável",
                            "Editar texto e imagens dentro de PDFs",
                            "Realizar OCR em documentos digitalizados",
                            "Assinar documentos digitalmente",
                            "Comprimir PDFs para envio por e-mail",
                            "Juntar ou dividir arquivos PDF",
                            "Proteger PDFs com senha",
                            "Adicionar marcas d'água",
                            "Preencher formulários interativos",
                            "Converter imagens para PDF e vice-versa",
                            "Organizar páginas de documentos",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Assistente de Leitura AI</h3>
                            <p className="text-zinc-700">Converse com seus PDFs. Peça resumos, explicações de termos complexos e extração de pontos-chave instantaneamente.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">OCR com IA</h3>
                            <p className="text-zinc-700">Transforme documentos digitalizados e imagens em textos editáveis e pesquisáveis com alta precisão de reconhecimento.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Conversão de Alta Fidelidade</h3>
                            <p className="text-zinc-700">Converta PDFs para Word, Excel, PPT e outros formatos mantendo o layout, fontes e formatação originais.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Edição completa na nuvem</h3>
                            <p className="text-zinc-700">Modifique textos, imagens e links diretamente no navegador, sem precisar instalar softwares pesados.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Sincronização Multiplataforma</h3>
                            <p className="text-zinc-700">Comece a editar no PC e termine no celular. Seus documentos ficam salvos e acessíveis na nuvem do LightPDF.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Solução all-in-one: edição, conversão e IA no mesmo lugar",
                            "Interface limpa e fácil de usar, totalmente em português",
                            "Não requer instalação (versão Web completa)",
                            "Processamento rápido na nuvem",
                            "Recurso de IA gratuito para testar",
                            "OCR de alta qualidade que suporta múltiplos idiomas",
                            "Funciona em Windows, Mac, iOS e Android",
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
                            "Alguns recursos avançados exigem conta VIP (paga)",
                            "Limite de tamanho de arquivo na versão gratuita",
                            "Depende de conexão com internet (na versão Web)",
                            "O Chat com IA pode ter limites de perguntas no plano grátis",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o LightPDF?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Estudantes lidando com muitos textos acadêmicos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Escritórios que digitalizam muitos documentos (OCR)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Pessoas que precisam editar PDFs rapidamente sem Adobe Pro</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Quem trabalha com documentos em múltiplos dispositivos</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black">→</span>
                                    <span className="text-zinc-700">Tradutores e revisores</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem precisa de edição vetorial avançada (como Illustrator)</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Edição offline robusta sem instalar o app de desktop</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Empresas com restrições severas de upload para nuvem pública (verificar enterprise)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Simplifique sua rotina com PDFs</h2>
                    <p className="text-lg mb-6 text-zinc-300">Experimente o LightPDF gratuitamente e veja como a IA pode acelerar seu trabalho.</p>
                    <a
                        href="https://lightpdf.com/pt/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Usar LightPDF Agora →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O LightPDF se destaca por ser uma solução completa e acessível. Enquanto outras ferramentas focam apenas no chat com IA ou apenas na conversão, o LightPDF entrega todo o pacote com qualidade.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Seja para converter aquele documento teimoso, extrair texto de uma foto ou estudar um artigo complexo com ajuda da IA, ele é uma adição valiosa ao kit de ferramentas de qualquer profissional digital.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
