import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
    title: "Conker AI - Gerador de Quizzes e Avaliações | Review Completo",
    description: "Conheça o Conker AI: a ferramenta que ajuda professores a criar quizzes e avaliações instantâneas com IA. Veja como funciona, preços e funcionalidades.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ferramentas/conker",
    },
};

export default function ConkerPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.hypehour.com.br/ferramentas/conker#breadcrumb",
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
                        "name": "IA para Professores",
                        "item": "https://www.hypehour.com.br/ia-para-professores"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Conker AI",
                        "item": "https://www.hypehour.com.br/ferramentas/conker"
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://www.hypehour.com.br/ferramentas/conker#software",
                "name": "Conker AI",
                "description": "Conker AI é uma plataforma intuitiva que utiliza inteligência artificial para ajudar professores a criar quizzes, avaliações e atividades alinhadas a padrões curriculares rapidamente.",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Web",
                "url": "https://www.conker.ai/",
                "creator": {
                    "@type": "Organization",
                    "name": "Conker"
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
                "@id": "https://www.hypehour.com.br/ferramentas/conker#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "O que é o Conker AI?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O Conker AI é uma ferramenta inovadora baseada em inteligência artificial que permite aos professores criar quizzes, avaliações e materiais didáticos de forma instantânea e personalizada."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Conker AI é gratuito?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, o Conker oferece um plano gratuito que permite criar e exportar quizzes. Existem planos premium para usuários que precisam de recursos avançados e maior volume de geração."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Como o Conker gera os quizzes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Você pode gerar quizzes inserindo um tópico específico, colando um texto de referência ou selecionando padrões educacionais (como K-12). A IA processa essas informações e cria perguntas variadas em segundos."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quais tipos de perguntas o Conker suporta?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A plataforma suporta mais de 10 tipos de questões, incluindo múltipla escolha, verdadeiro ou falso, preenchimento de lacunas, correspondência e respostas curtas."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Conker está alinhado a padrões curriculares?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, o Conker possui milhares de avaliações já alinhadas a padrões internacionais e americanos (como NGSS e TEKS), facilitando o trabalho de professores que seguem currículos estruturados."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Posso exportar os quizzes para onde?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Os quizzes podem ser exportados diretamente para o Google Forms, impressos em PDF ou compartilhados via link direto com os alunos."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Conker integra com o Google Classroom?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, ele possui integração direta com o Google Classroom e também com o Canvas LMS, permitindo atribuir tarefas facilmente."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Os alunos precisam de conta para fazer os quizzes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Não. Os professores precisam de uma conta (Google) para criar, mas os alunos podem acessar e responder aos quizzes apenas através do link compartilhado."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Conker funciona em português?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, a ferramenta suporta múltiplos idiomas, incluindo o português, permitindo a criação de materiais didáticos para o contexto brasileiro."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quanto tempo leva para criar um quiz completo?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Com o Conker, um quiz bem estruturado de 10 questões pode ser gerado e revisado em menos de 5 minutos."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Posso editar as perguntas geradas pela IA?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Com certeza. O professor tem controle total para editar, excluir ou adicionar novas perguntas após a geração automática da IA."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "O Conker possui recursos de acessibilidade?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Sim, ele inclui uma funcionalidade de 'leitura em voz alta' integrada em todos os quizzes para apoiar alunos com diferentes necessidades de aprendizagem."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "A IA do Conker é precisa?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "A IA é altamente capaz, mas como qualquer ferramenta generativa, recomenda-se que o professor revise as questões e respostas para garantir a precisão pedagógica total."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Quais disciplinas o Conker atende?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ele funciona para praticamente todas as disciplinas do ensino fundamental e médio, como Matemática, Ciências, História, Português e Línguas Estrangeiras."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Como os professores podem validar as respostas geradas?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "O Conker oferece uma ferramenta de validação que permite pesquisar no Google diretamente pela interface para confirmar se os dados gerados pela IA estão corretos."
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
                    <Link href="/ia-para-professores" className="hover:text-black transition">IA para Professores</Link>
                    <span className="text-zinc-400">/</span>
                    <span className="text-black font-medium">Conker AI</span>
                </nav>

                {/* Header com logo e nome */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow">
                        C
                    </div>
                    <div>
                        <h1 className="text-4xl font-bold text-black mb-2">Conker AI</h1>
                        <p className="text-lg text-zinc-700">O gerador de quizzes inteligente para educadores.</p>
                    </div>
                </div>

                {/* Introdução */}
                <div className="bg-white rounded-xl p-8 mb-10 border border-zinc-200 shadow">
                    <p className="text-lg text-zinc-700 leading-relaxed mb-4">
                        O **Conker AI** é um aliado poderoso para professores que desejam otimizar o tempo gasto na criação de avaliações. Desenvolvido para simplificar o cotidiano escolar, ele utiliza a inteligência artificial para transformar tópicos simples ou textos complexos em quizzes prontos para uso em sala de aula.
                    </p>
                    <p className="text-lg text-zinc-700 leading-relaxed">
                        A plataforma se diferencia pela facilidade de exportação para ferramentas populares como Google Forms e Canvas, além de oferecer milhares de avaliações pré-configuradas que seguem padrões curriculares globais, garantindo que o conteúdo gerado seja sempre relevante e pedagógico.
                    </p>
                </div>

                {/* O que é */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-4">O que é o Conker AI?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Conker AI é uma ferramenta de produtividade pedagógica que automatiza a criação de questões de prova e exercícios. Ideal para professores do Ensino Fundamental, Médio e Superior, ela ajuda a diversificar as perguntas e a focar no que realmente importa: o acompanhamento do aprendizado dos alunos.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Como o Conker gera avaliações?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        A plataforma utiliza algoritmos de processamento de linguagem para ler um tema ou documento fornecido pelo professor e extrair os conceitos principais. A partir daí, ela sugere questões de múltipla escolha, verdadeiro ou falso, e outros formatos, tudo de forma automática.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">O Conker AI é gratuito?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Sim, existe um plano gratuito funcional que permite aos professores experimentarem a rapidez da ferramenta. Para recursos de exportação em massa e maior controle administrativo, estão disponíveis planos premium competitivos.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">Conker funciona em português?</h2>
                    <p className="text-zinc-700 leading-relaxed mb-8">
                        Com certeza. A ferramenta aceita comandos e gera conteúdo em português com excelente qualidade, facilitando a vida dos professores brasileiros que buscam inovação sem barreiras linguísticas.
                    </p>

                    <h2 className="text-3xl font-bold text-black mb-4">É fácil compartilhar com os alunos?</h2>
                    <p className="text-zinc-700 leading-relaxed">
                        Sim, essa é uma das grandes virtudes do Conker. Você pode enviar um link direto, usar o QR Code, exportar para o Google Forms ou até mesmo imprimir em papel para alunos que não possuem acesso digital no momento.
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
                                <h3 className="text-xl font-semibold text-black mb-2">Escolha seu ponto de partida</h3>
                                <p className="text-zinc-700">Digite um tópico, cole um texto ou selecione um padrão curricular específico para orientar a IA.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Configure o formato</h3>
                                <p className="text-zinc-700">Defina o número de questões, o nível de dificuldade e o tipo de pergunta que deseja incluir no quiz.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 p-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Revise e Valide</h3>
                                <p className="text-zinc-700">A IA gera os rascunhos instantaneamente. Revise os enunciados e as respostas, fazendo ajustes se necessário.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-black font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-black mb-2">Lançamento direto</h3>
                                <p className="text-zinc-700">Exporte para o Google Classroom, gere um link direto para os alunos ou imprima a versão física da avaliação.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Para que serve */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Para que serve</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {[
                            "Criar quizzes em segundos",
                            "Gerar avaliações formativas",
                            "Criar exercícios de fixação",
                            "Alinhar temas à BNCC",
                            "Adaptar textos em questões",
                            "Automatizar testes de múltipla escolha",
                            "Gerar desafios para alunos",
                            "Criar lições de casa",
                            "Avaliar leitura de textos",
                            "Gerar flashcards digitais",
                            "Montar simulados rápidos",
                            "Revisar temas de prova",
                            "Integrar com Google Classroom",
                            "Gerar PDFs para impressão",
                            "Criar quizzes interativos",
                            "Avaliar progresso da turma",
                            "Diversificar tipos de questões",
                            "Ganhar tempo no planejamento",
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
                            <h3 className="text-xl font-semibold text-black mb-3">Gerador de Questões Inteligente</h3>
                            <p className="text-zinc-700">Cria perguntas de diversos tipos a partir de qualquer contexto inserido, garantindo variedade pedagógica.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Biblioteca de Padrões Educacionais</h3>
                            <p className="text-zinc-700">Acesso a milhares de questões já calibradas para diferentes níveis de ensino e padrões curriculares internacionais.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Exportação Omni-Canal</h3>
                            <p className="text-zinc-700">Conectividade direta com Google Forms, Canvas, PDF e links web, adaptando-se a qualquer ambiente de ensino.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Leitura Assistida (Acessibilidade)</h3>
                            <p className="text-zinc-700">Sintetizador de voz integrado que permite que alunos com dificuldades de leitura ouçam as questões.</p>
                        </div>
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Validação via Google</h3>
                            <p className="text-zinc-700">Verifique a veracidade das informações geradas pela IA sem sair da plataforma, garantindo precisão total.</p>
                        </div>
                    </div>
                </section>

                {/* Vantagens */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-black mb-6">Vantagens</h2>
                    <div className="grid gap-4">
                        {[
                            "Extrema rapidez na criação de materiais didáticos",
                            "Interface minimalista e sem poluição visual",
                            "Suporte robusto para acessibilidade com leitura de áudio",
                            "Exportação facilitada para a suíte de educação do Google",
                            "Ideal para avaliações constantes e rápidas (formais ou informais)",
                            "Alinhamento com padrões curriculares mundiais",
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
                            "A IA pode precisar de pequenos ajustes finos no vocabulário",
                            "Dependência de conexão à internet para gerar novos quizzes",
                            "A versão gratuita possui limites de exportação",
                            "Pode ser simples demais para professores que buscam LMS complexos",
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
                    <h2 className="text-3xl font-bold text-black mb-6">Para quem é o Conker AI?</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border border-zinc-200 rounded-xl shadow-sm">
                            <h3 className="text-xl font-semibold text-black mb-3">Ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Professores da rede básica e ensino médio</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Educadores que utilizam Google Classroom</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Escolas que buscam digitalização rápida</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Tutores e professores particulares</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-black font-bold">→</span>
                                    <span className="text-zinc-700">Criadores de cursos online e EAD</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-zinc-50 border border-zinc-300 rounded-xl">
                            <h3 className="text-xl font-semibold text-black mb-3">Não é ideal para:</h3>
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span className="text-zinc-700 font-bold">✕</span>
                                    <span className="text-zinc-700">Instituições que pedem gestão de notas complexa</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700 font-bold">✕</span>
                                    <span className="text-zinc-700">Casos que requerem ferramentas offline</span>
                                </li>
                                <li className="flex gap-2">
                                    <span className="text-zinc-700 font-bold">✕</span>
                                    <span className="text-zinc-700">Criação de materiais puramente visuais</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-black rounded-xl p-10 text-white text-center mb-12 shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Revolucione suas avaliações hoje</h2>
                    <p className="text-lg mb-6 text-zinc-300">Comece a criar quizzes inteligentes com o Conker AI e ganhe horas de volta na sua semana.</p>
                    <a
                        href="https://www.conker.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold rounded-lg hover:shadow-xl transition"
                    >
                        Acessar Conker AI →
                    </a>
                </section>

                {/* Conclusão */}
                <section className="border-t border-zinc-200 pt-8">
                    <h2 className="text-2xl font-bold text-black mb-4">Conclusão</h2>
                    <p className="text-zinc-700 leading-relaxed mb-4">
                        O Conker AI não é apenas um gerador de perguntas; é uma ferramenta de alívio para a carga de trabalho do professor moderno. Ao automatizar a parte mecânica da elaboração de avaliações, ele permite que o educador se concentre na estratégia de ensino e no feedback individualizado.
                    </p>
                    <p className="text-zinc-700 leading-relaxed">
                        Sua facilidade de uso, aliada à integração com o ecossistema Google, o torna uma das escolhas mais sensatas para quem está começando a integrar a inteligência artificial na rotina pedagógica.
                    </p>
                </section>

                {/* FAQ */}
                <FAQSection />
            </div>
        </main>
    );
}
