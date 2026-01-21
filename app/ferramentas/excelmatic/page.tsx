import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Excelmatic AI - Gerador de Fórmulas e Automação | Review Completo",
    description: "Conheça o Excelmatic AI: a ferramenta de inteligência artificial que cria fórmulas de Excel, scripts VBA e analisa dados via chat. Veja como funciona e preços.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/excelmatic",
    },
};

export default function ExcelmaticPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/excelmatic#breadcrumb",
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
                        "name": "IA para Planilhas",
                        "item": "https://www.hypehour.com.br/ia-para-planilhas"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Excelmatic",
                        "item": "https://www.hypehour.com.br/ferramentas/excelmatic"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/excelmatic#software",
                "name": "Excelmatic AI",
                "description": "Excelmatic AI é um assistente de inteligência artificial poderoso para Excel e Google Sheets, capaz de gerar fórmulas, scripts VBA e realizar análises de dados complexas através de comandos simples.",
                "applicationCategory": "UtilitiesApplication",
                "operatingSystem": "Web",
                "url": "https://excelmatic.ai/",
                "creator": {
                    "@type": "Organization",
                    "name": "Excelmatic"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD",
                    "category": "Freemium"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.hypehour.com.br/ferramentas/excelmatic#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "O que é o Excelmatic AI?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O Excelmatic AI é uma ferramenta baseada em inteligência artificial que transforma comandos em linguagem natural em fórmulas complexas, scripts VBA e análises de dados para Excel e Google Sheets."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Excelmatic AI é gratuito?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A plataforma oferece um plano gratuito limitado (cerca de 10 mensagens por mês). Existem planos pagos como o Essential e o Professional para usuários que precisam de maior volume e recursos avançados."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Ele gera fórmulas para o Google Sheets também?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, o Excelmatic suporta tanto o Microsoft Excel quanto o Google Sheets, adaptando as fórmulas e scripts conforme a plataforma escolhida."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Como o Excelmatic cria fórmulas a partir de texto?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Você descreve o que deseja realizar (ex: 'calcule a média da coluna B se o valor na coluna A for maior que 100') e a IA traduz isso instantaneamente na sintaxe correta da planilha."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Excelmatic consegue criar macros e scripts VBA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, uma das funcionalidades mais potentes é a geração de scripts VBA para Excel e Google Apps Script para Google Sheets, permitindo automações complexas sem precisar saber programar."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Posso converter uma foto de tabela em Excel?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, a ferramenta possui um recurso de 'Imagem para Excel' que utiliza OCR (Reconhecimento Óptico de Caracteres) para transformar fotos ou capturas de tela em tabelas editáveis."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Excelmatic ajuda a limpar dados?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, ele oferece recursos de limpeza automática, como remoção de duplicatas, preenchimento de valores ausentes e padronização de formatos através de comandos simples."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "É seguro enviar meus arquivos para o Excelmatic?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A empresa afirma utilizar criptografia de ponta a ponta e estar em conformidade com o GDPR, garantindo que os dados não sejam armazenados permanentemente ou compartilhados com terceiros."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Excelmatic funciona em português?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, você pode enviar comandos em português e a ferramenta entenderá a lógica para gerar as fórmulas corretas, embora a interface possa ter partes em inglês."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Como o Excelmatic ajuda na visualização de dados?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A IA pode sugerir e gerar automaticamente diversos tipos de gráficos (barras, pizza, dispersão, etc.) e dashboards interativos com base nos dados que você fornece."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Preciso ser um especialista em Excel para usar?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Não, o objetivo principal da ferramenta é democratizar o uso avançado de planilhas, permitindo que iniciantes realizem tarefas complexas apenas descrevendo-as."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Excelmatic detecta erros em fórmulas existentes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, você pode colar uma fórmula que não está funcionando e a IA ajudará a depurar, explicando o erro e sugerindo a correção adequada."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Dá para converter PDF para Excel com ele?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, ele possui um conversor de PDF para Excel que ajuda a extrair tabelas de relatórios estáticos em formato PDF para planilhas dinâmicas."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Excelmatic oferece templates prontos?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, a plataforma disponibiliza centenas de modelos prontos para diversas áreas como finanças, vendas, RH e marketing."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Como o Excelmatic integra com outras ferramentas?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A ferramenta pode ser integrada via plugins ou APIs com o ecossistema Microsoft 365, Slack e Microsoft Teams para facilitar o fluxo de trabalho em equipe."
                        }
                    }
                ]
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
                    <Link href="/ia-para-planilhas" className="hover:text-black transition">IA para Planilhas</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Excelmatic</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        X
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Excelmatic AI</h1>
                        <p className="text-lg text-zinc-700">Potencialize suas planilhas com inteligência artificial.</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O **Excelmatic AI** é uma revolução para quem lida com dados diariamente, seja você um analista financeiro veterano ou um estudante organizando sua primeira planilha. Ele atua como um 'copiloto' de dados que entende suas necessidades e as traduz para a linguagem técnica das planilhas em segundos.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        A plataforma vai muito além da simples geração de fórmulas. Ela integra visão computacional para converter imagens em tabelas, ferramentas de limpeza de dados para remover ruídos e um motor de análise que gera insights e visualizações automáticas, tornando o Excel dez vezes mais produtivo.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Excelmatic AI?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Excelmatic é um assistente de IA focado em planilhas que utiliza processamento de linguagem natural (NLP) para automatizar tarefas repetitivas e complexas. Ele serve como uma ponte entre o que você tem em mente e o que o software (Excel ou Google Sheets) exige como comando técnico.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como o Excelmatic ajuda com fórmulas?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Em vez de decorar funções complexas como Procv, Somase ou fórmulas matriciais, você apenas descreve o objetivo. A IA analisa o contexto da sua tabela (nomes de colunas e tipos de dados) e entrega a fórmula pronta para ser copiada e colada.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Excelmatic AI é gratuito?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim, ele possui um modelo freemium. Você pode começar a usar sem custos para tarefas básicas e um número limitado de consultas mensais. Para usuários avançados que precisam de processamento ilimitado e ferramentas de BI, existem planos de assinatura flexíveis.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Ele funciona no Excel e no Google Sheets?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim! O Excelmatic é versátil e gera tanto fórmulas nativas para Excel quanto para Google Sheets, além de suportar a criação de macros em VBA e Google Apps Script para automações de alto nível.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">É seguro enviar dados para a plataforma?</h2>
                    <p className="text-zinc-700 leading-relaxed">
                        A segurança é uma prioridade. A ferramenta utiliza criptografia e segue normas de proteção de dados, garantindo que suas planilhas sejam processadas para gerar resultados, mas não compartilhadas ou vendidas.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Descreva sua Necessidade</h3>
                                <p className="text-zinc-700">Digite no chat o que você quer fazer na planilha de forma simples, como se estivesse pedindo a um assistente humano.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Geração Instantânea</h3>
                                <p className="text-zinc-700">A IA processa o comando e entrega a fórmula, a macro VBA ou o insight de dados que você solicitou em poucos segundos.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Explicação Didática</h3>
                                <p className="text-zinc-700">Além da fórmula, o Excelmatic explica por que ela foi construída daquela forma, ajudando você a aprender no processo.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Aplicação e Refinamento</h3>
                                <p className="text-zinc-700">Copie o resultado para sua planilha. Se os dados mudarem, você pode pedir ajustes rápidos no mesmo chat.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Gerar fórmulas complexas",
                            "Criar macros VBA",
                            "Automatizar Google Sheets",
                            "Limpar bases de dados",
                            "Converter imagem em Excel",
                            "Analisar tendências de vendas",
                            "Explicar fórmulas prontas",
                            "Depurar erros de planilha",
                            "Criar dashboards visuais",
                            "Converter PDF em Planilha",
                            "Normalizar formatos de data",
                            "Remover duplicatas",
                            "Prever valores com IA",
                            "Extrair insights de BI",
                            "Gerar scripts de automação",
                            "Validar consistência de dados",
                            "Criar tabelas dinâmicas",
                            "Poupe tempo em tarefas manuais",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Formula & Script Generator</h3>
                            <p className="text-zinc-700">O coração da ferramenta. Converte texto em fórmulas do Excel, Google Sheets, VBA e Apps Script de forma imediata.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Image/PDF to Excel</h3>
                            <p className="text-zinc-700">Tecnologia avançada de OCR que extrai dados tabulares de fotos, prints e documentos PDF diretamente para células editáveis.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Data Visualization Assistant</h3>
                            <p className="text-zinc-700">Cria gráficos (barras, pizza, linhas, etc.) automaticamente a partir do seu conjunto de dados, facilitando a apresentação de BI.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Automated Data Cleaning</h3>
                            <p className="text-zinc-700">Ferramentas inteligentes para tratar dados 'sujos', corrigindo inconsistências, formats e valores nulos via comandos de voz ou texto.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Erro Detector & Explainer</h3>
                            <p className="text-zinc-700">Analisa fórmulas existentes que estão retornando erros (#REF, #N/A, etc.) e sugere o reparo imediato com uma explicação clara.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Economia massiva de tempo em tarefas técnicas repetitivas",
                            "Elimina a necessidade de memorizar centenas de funções do Excel",
                            "Ideal para aprender: explica a lógica por trás de cada fórmula gerada",
                            "Suporte multimodal (imagem, PDF e texto) em um único ambiente",
                            "Ajuda no tratamento de grandes volumes de dados sem erros manuais",
                            "Planos flexíveis que atendem desde usuários solo a grandes empresas",
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
                            "Fórmulas extremamente aninhadas ainda pedem revisão humana cautelosa",
                            "A versão gratuita possui um limite baixo de mensagens mensais",
                            "Processamento de imagens muito complexas pode requerer ajustes manuais finais",
                            "Requer uma conta conectada à internet para funcionar (ferramenta baseada em nuvem)",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Excelmatic AI?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Analistas de Negócios e Financeiros</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Estudantes e acadêmicos em pesquisa</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Profissionais de Marketing e Vendas</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Pequenos empreendedores organizando finanças</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Analistas de Dados juniores querendo aprender</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700 font-bold">✕</span>
                                    <span className="text-zinc-700">Usuários que não querem usar ferramentas em nuvem</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700 font-bold">✕</span>
                                    <span className="text-zinc-700">Cenários onde não há qualquer acesso à internet</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700 font-bold">✕</span>
                                    <span className="text-zinc-700">Análise de dados sensíveis sob restrição física total</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Domine o Excel com o poder da Inteligência Artificial</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece a usar o Excelmatic AI hoje e transforme dados brutos em inteligência estratégica.</p>
                    <a
                        href="https://excelmatic.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar Excelmatic AI →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Excelmatic AI se posiciona como um dos assistentes mais completos da categoria de planilhas. Seu diferencial de unir geração de código (VBA/Apps Script) com ferramentas de conversão de imagem e PDF o torna uma central de produtividade indispensável no ambiente corporativo e acadêmico.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        É a escolha ideal para quem quer focar na tomada de decisão baseada em dados, deixando a parte mecânica e a sintaxe complexa para a inteligência artificial resolver.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
