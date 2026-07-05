import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o SciSpace?", answer: "SciSpace é uma plataforma de IA para pesquisa acadêmica que permite ler, entender e explorar artigos científicos. A ferramenta explica conceitos complexos, resume papers e responde perguntas sobre qualquer estudo." },
    { question: "Para que serve o SciSpace?", answer: "O SciSpace serve para acelerar a leitura de artigos científicos, compreender conceitos técnicos difíceis, resumir papers, encontrar referências relacionadas e fazer pesquisa acadêmica com o apoio de inteligência artificial." },
    { question: "O SciSpace é gratuito?", answer: "O SciSpace oferece plano gratuito com acesso a funcionalidades básicas de leitura e perguntas sobre artigos. O plano pago libera mais consultas, acesso a modelos mais avançados e recursos de pesquisa aprofundada." },
    { question: "O SciSpace funciona em português?", answer: "Sim. O SciSpace aceita perguntas em português e responde no idioma do usuário, mesmo quando o artigo original está em inglês, facilitando muito o acesso à literatura científica internacional." },
    { question: "O SciSpace lê PDFs de artigos científicos?", answer: "Sim. Você pode fazer upload de qualquer PDF de artigo científico e o SciSpace vai analisar o conteúdo, responder suas perguntas e explicar seções específicas do texto." },
    { question: "O SciSpace é bom para professores?", answer: "Sim. Professores usam o SciSpace para se atualizar com literatura científica recente, preparar aulas baseadas em evidências, encontrar referências para seus materiais e compreender artigos de áreas adjacentes." },
    { question: "O SciSpace é bom para estudantes?", answer: "Sim. É uma das ferramentas mais populares entre estudantes de graduação e pós-graduação para compreender artigos científicos, preparar revisões de literatura e entender metodologias de pesquisa." },
    { question: "O SciSpace encontra artigos científicos?", answer: "Sim. O SciSpace possui um banco de dados com mais de 200 milhões de artigos científicos que podem ser pesquisados e explorados diretamente na plataforma." },
    { question: "O SciSpace pode resumir artigos longos?", answer: "Sim. A IA do SciSpace consegue resumir artigos completos, destacar os principais achados, metodologia, resultados e conclusões de forma clara e acessível." },
    { question: "O SciSpace substitui a leitura do artigo original?", answer: "Não totalmente. O SciSpace é uma ferramenta de apoio que acelera a compreensão, mas a leitura crítica do artigo original continua sendo fundamental para pesquisadores e profissionais acadêmicos." },
    { question: "O SciSpace funciona com qualquer área do conhecimento?", answer: "Sim. O SciSpace cobre todas as áreas do conhecimento — ciências exatas, humanas, biológicas, medicina, engenharia, ciências sociais e muito mais." },
    { question: "O SciSpace tem extensão para navegador?", answer: "Sim. O SciSpace possui extensão para Chrome que permite usar a IA diretamente enquanto você lê artigos em outras plataformas como PubMed, Google Scholar e outros." },
    { question: "O SciSpace é melhor que o ChatGPT para pesquisa acadêmica?", answer: "Para pesquisa acadêmica especificamente, o SciSpace tem vantagens: acessa artigos reais com citações verificadas e é treinado para literatura científica, reduzindo o risco de informações inventadas (alucinações)." },
    { question: "O SciSpace é seguro para uso acadêmico?", answer: "Sim. As respostas do SciSpace são baseadas em artigos científicos reais com referências verificáveis, tornando-o mais confiável para uso acadêmico do que ferramentas de IA genéricas." },
    { question: "Como começar a usar o SciSpace?", answer: "Acesse scispace.com, crie uma conta gratuita, pesquise um tema de interesse ou faça upload de um PDF, e comece a fazer perguntas sobre o conteúdo científico diretamente para a IA." },
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    return (
        <details className="border-b border-zinc-200 last:border-0 group" open={index < 5}>
            <summary className="flex w-full items-center justify-between py-4 text-left cursor-pointer list-none focus:outline-none">
                <span className="font-medium text-black pr-8">{question}</span>
                <ChevronDownIcon
                    className="h-5 w-5 text-zinc-700 transition-transform duration-200 group-open:rotate-180"
                />
            </summary>
            <p className="text-zinc-700 leading-relaxed mb-4">{answer}</p>
        </details>
    );
}


export default function FAQSection() {
    return (
        <div className="mt-12 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre SciSpace</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                ))}
            </div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                        }))
                    })
                }}
            />
        </div>
    );
}
