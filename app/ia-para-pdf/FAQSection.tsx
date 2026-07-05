import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que são ferramentas de IA para PDF?",
        "a": "São aplicativos que usam inteligência artificial para analisar, resumir, extrair informações e responder perguntas sobre documentos PDF — permitindo interagir com contratos, relatórios, artigos e livros por meio de chat em linguagem natural."
    },
    {
        "q": "Qual a melhor ferramenta de IA para analisar PDFs?",
        "a": "ChatPDF, NotebookLM (Google), Claude com upload de documentos e LightPDF são as mais usadas. NotebookLM se destaca por fontes múltiplas e audio overview. Claude suporta PDFs muito longos com sua janela de contexto de 200k tokens."
    },
    {
        "q": "É possível fazer perguntas sobre um contrato em PDF usando IA?",
        "a": "Sim. Ferramentas como ChatPDF, DocuAsk e Claude permitem fazer upload de contratos e perguntar 'quais são as penalidades por rescisão?', 'qual o prazo de vigência?' ou 'existe cláusula de exclusividade?' — recebendo respostas precisas com citação do trecho."
    },
    {
        "q": "IA para PDF funciona com documentos em português?",
        "a": "Sim. As principais ferramentas (ChatPDF, Claude, ChatGPT) processam PDFs em português com alta qualidade, entendendo jargões jurídicos, técnicos e científicos em língua portuguesa."
    },
    {
        "q": "Como usar o Google NotebookLM para estudar com PDFs?",
        "a": "Faça upload de PDFs, artigos, slides e notas no NotebookLM. A ferramenta cria um assistente especializado nesses materiais, permite fazer perguntas, gera guias de estudo e até cria podcasts de audio overview dos conteúdos enviados."
    },
    {
        "q": "IA consegue resumir relatórios e documentos longos com precisão?",
        "a": "Sim. Ferramentas como Claude e ChatGPT com Code Interpreter resumem PDFs de centenas de páginas mantendo os pontos-chave, identificando dados críticos e gerando sumários executivos em formato especificado pelo usuário."
    },
    {
        "q": "É possível usar IA para comparar dois PDFs e identificar diferenças?",
        "a": "Sim. Com Claude ou ChatGPT, faça upload dos dois documentos e peça para comparar as versões de um contrato, identificar cláusulas novas ou alteradas, ou destacar diferenças entre dois relatórios técnicos."
    },
    {
        "q": "IA pode extrair dados de tabelas dentro de PDFs?",
        "a": "Sim, com bom desempenho. Claude e ferramentas especializadas como LlamaParse e Unstructured extraem dados de tabelas em PDF, convertendo para formato estruturado (JSON, CSV) para análise posterior — mesmo em documentos com layout complexo."
    },
    {
        "q": "Meus documentos ficam seguros ao usar ferramentas de IA para PDF?",
        "a": "Depende da ferramenta. Para documentos confidenciais (contratos, dados financeiros, laudos médicos), prefira ferramentas com criptografia de dados, política de não retenção de uploads e opções enterprise com contratos de privacidade."
    },
    {
        "q": "Quanto custa usar ferramentas de IA para análise de PDF?",
        "a": "ChatPDF tem plano gratuito com 3 PDFs/dia. Claude.ai permite upload de arquivos no plano gratuito com limitações. ChatGPT Plus (R$100/mês) suporta PDFs ilimitados. NotebookLM é gratuito com conta Google."
    },
    {
        "q": "IA pode criar citations e referências a partir de um PDF acadêmico?",
        "a": "Sim. Ferramentas como SciSpace (anteriormente Typeset) e Elicit especializam em artigos científicos — gerando citações em formato ABNT, APA ou Vancouver e resumindo metodologia, resultados e limitações de estudos."
    },
    {
        "q": "Como usar IA para estudar livros inteiros em formato PDF?",
        "a": "Faça upload do livro no NotebookLM ou Claude e crie um plano de estudos: peça resumo por capítulo, questões de revisão para cada seção, mapas mentais dos conceitos principais e analogias para os temas mais difíceis."
    }
];

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    return (
        <details className="border-b border-gray-200 last:border-0 group" open={index < 5}>
            <summary className="flex w-full items-center justify-between py-4 text-left cursor-pointer list-none focus:outline-none">
                <span className="font-medium text-gray-900">{question}</span>
                <ChevronDownIcon
                    className="h-5 w-5 text-gray-500 transition-transform duration-200 group-open:rotate-180"
                />
            </summary>
            <p className="text-gray-600 leading-relaxed mb-4">{answer}</p>
        </details>
    );
}


export default function FAQSection() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="mt-12 mb-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Analisar PDFs</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.q}
                        answer={faq.a}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
