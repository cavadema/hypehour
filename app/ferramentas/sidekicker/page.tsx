import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Sidekicker AI - Detector de IA e Humanizador | Review Completo",
    description: "Descubra o Sidekicker AI: o detector de IA que também humaniza textos e verifica plágio. Veja como funciona, preços e se vale a pena.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/sidekicker",
    },
};

export default function SidekickerPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/sidekicker#breadcrumb",
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
                        "name": "Detecção de IA",
                        "item": "https://www.hypehour.com.br/ferramenta-de-deteccao-de-ia"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Sidekicker",
                        "item": "https://www.hypehour.com.br/ferramentas/sidekicker"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/sidekicker#software",
                "name": "Sidekicker AI",
                "description": "Sidekicker AI é uma ferramenta 'tudo-em-um' que oferece detecção de IA, humanização de texto e verificação de plágio em uma interface moderna.",
                "applicationCategory": "UtilitiesApplication",
                "operatingSystem": "Web",
                "url": "https://sidekicker.ai/",
                "creator": {
                    "@type": "Organization",
                    "name": "Sidekicker"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "1.95",
                    "priceCurrency": "USD",
                    "category": "Paid"
                }
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.hypehour.com.br/ferramentas/sidekicker#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "O que é o Sidekicker AI?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O Sidekicker AI é uma plataforma 'tudo-em-um' para criação e autenticação de conteúdo. Ela oferece ferramentas integradas de detecção de IA, humanização de texto e verificação de plágio."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Sidekicker AI é gratuito?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O Sidekicker oferece um período de teste de 7 dias por um valor simbólico (geralmente US$ 1,95). Após esse período, ele se torna uma assinatura paga. Não há uma versão 100% gratuita permanente."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Como funciona a detecção de IA no Sidekicker?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A ferramenta utiliza algoritmos de machine learning treinados em vastos conjuntos de dados para identificar padrões linguísticos, tom e estrutura típicos de modelos de IA como ChatGPT e Claude."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Sidekicker AI humaniza textos?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, ele possui uma funcionalidade chamada 'Humanizer', que reescreve textos gerados por IA para que soem mais naturais e humanos, tentando evitar a detecção por outros softwares."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O humanizador do Sidekicker realmente funciona?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Embora ajude a melhorar a fluidez do texto, testes indicam que ele nem sempre consegue burlar detectores mais rigorosos. Recomenda-se sempre uma revisão manual final."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Sidekicker AI detecta plágio?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, ele inclui um verificador de plágio que compara o conteúdo com bilhões de fontes online para garantir a originalidade e evitar cópias indevidas."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Qual a precisão do detector de IA do Sidekicker?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A precisão é alta para detectar modelos comuns, mas, como todo detector, pode apresentar falsos positivos em textos muito técnicos ou padronizados."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Sidekicker AI suporta português?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, a ferramenta é capaz de analisar e processar textos em português, embora tenha sido otimizada primariamente para o inglês."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Como funciona o período de teste do Sidekicker?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Você paga um valor inicial baixo para testar por 7 dias. Importante: se não cancelar antes do fim do prazo, a renovação para o plano mensal completo ocorre automaticamente."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Sidekicker AI pode dar falsos positivos?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim. Textos escritos por humanos que seguem estruturas muito rígidas ou acadêmicas podem ser ocasionalmente marcados como IA. Use o score como guia, não como prova absoluta."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quais são os modos de escrita disponíveis?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A plataforma oferece modos como Criativo, Profissional, Acadêmico e Casual, permitindo ajustar o tom do texto humanizado conforme a necessidade."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Sidekicker AI é seguro?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O Sidekicker afirma utilizar protocolos de segurança modernos para proteger os dados enviados, mas evite inserir informações sensíveis ou confidenciais na ferramenta."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Posso cancelar minha assinatura a qualquer momento?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, o cancelamento pode ser feito através do painel de usuário, mas deve ser realizado antes da próxima data de ciclo de faturamento para evitar novas cobranças."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Sidekicker AI detecta conteúdos do GPT-4?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, seus modelos são atualizados para identificar conteúdos gerados pelas versões mais recentes da OpenAI, incluindo o GPT-4 e GPT-4o."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Qual a diferença entre o Sidekicker e o GPTZero?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O GPTZero é focado quase exclusivamente em detecção educacional, enquanto o Sidekicker é uma ferramenta mais voltada para produtores de conteúdo, unindo detecção e 'humanização' no mesmo lugar."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Como usar o detector de plágio do Sidekicker?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Basta colar o texto na seção correspondente; a ferramenta gerará um relatório detalhado mostrando porcentagens de similaridade e fontes encontradas na web."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Sidekicker AI serve para estudantes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, muitos estudantes utilizam a ferramenta para garantir que seus trabalhos não apresentem plágio e para verificar a naturalidade de suas escritas."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Existe uma extensão para Chrome?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Atualmente, o Sidekicker opera principalmente como uma plataforma web, mas frequentemente lançam novas integrações e extensões de navegador."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Sidekicker AI ajuda no SEO?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ao ajudar a criar textos mais naturais e originais, ele indiretamente contribui para o SEO, já que motores de busca como o Google priorizam conteúdo de alta qualidade."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Como entrar em contato com o suporte do Sidekicker?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O suporte é realizado geralmente via e-mail ou sistema de tickets dentro da plataforma para assinantes de planos pagos."
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
                    <Link href="/ferramenta-de-deteccao-de-ia" className="hover:text-black transition">Detecção de IA</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Sidekicker</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        S
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Sidekicker AI</h1>
                        <p className="text-lg text-zinc-700">O editor 'tudo-em-um' para conteúdos autênticos.</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O **Sidekicker AI** surge como uma solução robusta no ecossistema de produtores de conteúdo, oferecendo muito mais do que apenas um simples detector de inteligência artificial. Ele se posiciona como um assistente completo que ajuda a autenticar, validar e refinar textos para garantir que soem 100% humanos.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        A plataforma se destaca pela integração perfeita de três ferramentas críticas: um detector de IA de alta precisão, um humanizador de texto que ajusta tom e fluidez, e um verificador de plágio que escaneia a web em busca de similaridades, tudo dentro de uma interface moderna e intuitiva.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Sidekicker?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sidekicker é uma plataforma web projetada para criadores, profissionais de marketing e estudantes que precisam garantir a originalidade e a qualidade humana de seus textos. É a ferramenta ideal para quem utiliza IA mas deseja manter o tom autêntico e evitar problemas com algoritmos de detecção.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como o Sidekicker detecta e humaniza textos?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Ele utiliza modelos avançados de NLP (Processamento de Linguagem Natural) para analisar a 'perplexidade' e a 'variância' do texto — marcas registradas da IA. Ao humanizar, ele reestrutura frases e ajusta o vocabulário para imitar o estilo de escrita humano, mantendo o sentido original.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Sidekicker AI é gratuito?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Diferente de outras ferramentas, o Sidekicker opera sob um modelo de teste pago. Você pode acessar todos os recursos por 7 dias pagando um valor simbólico, o que dá direito a testar todas as funcionalidades antes de decidir pela assinatura mensal.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Sidekicker funciona em português?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim! Embora sua base tecnológica seja otimizada para o inglês, ele apresenta ótimos resultados na detecção e humanização de conteúdos em português, tornando-se uma ferramenta versátil para o mercado brasileiro.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Sidekicker detecta plágio real?</h2>
                    <p className="text-zinc-700 leading-relaxed">
                        Sim, a ferramenta não se limita a padrões de IA; ela escaneia bilhões de páginas web e bancos de dados acadêmicos para encontrar qualquer similaridade suspeita, gerando um relatório de originalidade completo.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Insira seu conteúdo</h3>
                                <p className="text-zinc-700">Cole seu texto diretamente no painel ou descreva o tópico para que a IA gere uma base inicial conforme seu modo de escrita preferido.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Análise Tripla</h3>
                                <p className="text-zinc-700">A ferramenta processa o texto simultaneamente em busca de padrões de IA, plágio e oportunidades de melhoria de tom.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Humanização Assistida</h3>
                                <p className="text-zinc-700">Se o score de IA for alto, você pode usar o 'Humanizer' para reescrever trechos específicos, ajustando frases para soarem mais naturais.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Exportação e Validação</h3>
                                <p className="text-zinc-700">Receba seu texto refinado com um score de confiança e garantia de originalidade, pronto para publicação ou entrega escolar.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Detectar textos do ChatGPT",
                            "Humanizar conteúdos de IA",
                            "Verificar plágio online",
                            "Ajustar tom para acadêmico",
                            "Melhorar fluidez de redações",
                            "Validar posts para blogs",
                            "Criar anúncios autênticos",
                            "Revisar e-mails profissionais",
                            "Checar originalidade de teses",
                            "Evitar penalidades de SEO",
                            "Ajustar escrita criativa",
                            "Garantir tom casual em posts",
                            "Auditar newsletters",
                            "Verificar cartas de apresentação",
                            "Refinar roteiros de vídeo",
                            "Validar artigos científicos",
                            "Checar trabalhos de freelancers",
                            "Melhorar clareza de relatórios",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Detector de IA Multi-Modelo</h3>
                            <p className="text-zinc-700">Identifica com precisão textos vindos do GPT-4, Claude, Gemini e outros modelos generativos populares.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">AI Humanizer Integrado</h3>
                            <p className="text-zinc-700">Transforma textos frios e robóticos em prosa envolvente e humana, ajustando a estrutura das sentenças.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Plagiarism Checker de Alta Performance</h3>
                            <p className="text-zinc-700">Escaneamento profundo em tempo real para encontrar correspondências de texto em toda a internet.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Modos de Escrita Customizáveis</h3>
                            <p className="text-zinc-700">Não é apenas sobre 'humanizar', é sobre estilo. Escolha entre tons acadêmicos, criativos ou comerciais.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Relatório de Probabilidade de IA</h3>
                            <p className="text-zinc-700">Receba um score visual que indica exatamente quão 'artificial' seu texto parece para outros algoritmos.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Tudo em um lugar: detecção, humanização e plágio sem mudar de site",
                            "Interface limpa, moderna e muito rápida de operar",
                            "Período de teste generoso para explorar todas as funções pagas",
                            "Ajuda criadores a manter o ranking de SEO evitando 'spam' de IA",
                            "Vários modos de tom para se adequar a qualquer público-alvo",
                            "Funciona bem para o português e outros idiomas globais",
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
                            "Nenhum humanizador é 100% infalível contra novos detectores",
                            "Modelo de assinatura pode ser caro para usuários esporádicos",
                            "A verificação detalhada de plágio pode demorar em textos muito longos",
                            "Falso positivos ainda são uma realidade no campo da detecção de IA",
                            "Assinatura automática após o período de teste requer atenção extra",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Sidekicker?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Bloggers e Copywriters de SEO</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Estudantes verificando originalidade</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Agências de Marketing e Conteúdo</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Acadêmicos e Pesquisadores</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Freelancers de escrita</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Quem prefere ferramentas totalmente grátis</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Usuários que não querem lidar com modelos de assinatura</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700">✕</span>
                                    <span className="text-zinc-700">Projetos que exigem offline total</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Dê um toque humano às suas criações de IA</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece seu teste no Sidekicker AI hoje e garanta conteúdos originais e indetectáveis.</p>
                    <a
                        href="https://sidekicker.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar Sidekicker AI →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Sidekicker AI é uma das ferramentas mais equilibradas para quem vive no limite entre a automação por IA e a necessidade de autenticidade humana. Ao combinar detecção, humanização e plágio no mesmo motor, ele economiza tempo e garante uma qualidade superior de entrega.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Embora seu modelo de assinatura exija um compromisso financeiro, o valor agregado para profissionais que dependem de conteúdo original e bem ranqueado é inegável. É, sem dúvida, um dos 'braços direitos' preferidos do criador de conteúdo moderno.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
