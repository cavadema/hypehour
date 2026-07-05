import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Descript?", answer: "Descript é um editor de vídeo e podcast com inteligência artificial que permite editar o conteúdo de áudio e vídeo diretamente pelo texto transcrito — apagar uma palavra no texto apaga o trecho correspondente no vídeo." },
    { question: "Para que serve o Descript?", answer: "O Descript serve para editar vídeos e podcasts de forma mais rápida, remover silêncios e vícios de linguagem automaticamente, gerar B-roll com IA, criar clipes para redes sociais e produzir conteúdo audiovisual sem precisar dominar softwares complexos de edição." },
    { question: "O Descript é gratuito?", answer: "O Descript oferece plano gratuito com funcionalidades básicas e limite de transcrição mensal. Planos pagos liberam mais horas de transcrição, exportação em alta qualidade, voz sintética avançada e recursos premium de IA." },
    { question: "O Descript funciona em português?", answer: "O Descript suporta transcrição e edição em português. A interface está em inglês, mas o motor de reconhecimento de fala reconhece o português com boa precisão para edição pelo texto." },
    { question: "O que é edição por texto no Descript?", answer: "É a funcionalidade central do Descript: o software transcreve o áudio ou vídeo automaticamente e você edita o texto gerado. Ao apagar palavras, pausas ou trechos no texto, o corte é aplicado automaticamente no arquivo de mídia." },
    { question: "O Descript remove silêncios automaticamente?", answer: "Sim. O Descript tem uma função de remoção automática de silêncios e pausas longas com um clique, muito usada em podcasts e gravações de reuniões para agilizar a edição." },
    { question: "O Descript remove vícios de linguagem?", answer: "Sim. O Descript identifica e remove automaticamente vícios de linguagem como 'hum', 'ahn', 'tipo' e outros, limpando a gravação sem necessidade de edição manual." },
    { question: "O que é o Overdub do Descript?", answer: "O Overdub é o recurso de voz sintética do Descript que recria sua voz com IA. Você pode corrigir palavras erradas ou adicionar trechos novos sem precisar regravar — a IA gera o áudio na sua voz." },
    { question: "O Descript gera B-roll com IA?", answer: "Sim. O Descript pode sugerir e inserir automaticamente imagens e clipes de B-roll relevantes ao conteúdo falado, agilizando a produção de vídeos com cobertura visual." },
    { question: "O Descript é bom para podcasts?", answer: "Sim. É uma das ferramentas mais populares para produção de podcasts, com transcrição automática, remoção de silêncios, edição por texto e exportação em formatos de áudio prontos para publicação." },
    { question: "O Descript é bom para YouTube?", answer: "Sim. Criadores de conteúdo para YouTube usam o Descript para editar vídeos com mais agilidade, criar clipes para shorts e redes sociais e gerar legendas automaticamente." },
    { question: "O Descript gera legendas automaticamente?", answer: "Sim. O Descript transcreve o conteúdo e gera legendas automáticas que podem ser customizadas em estilo e posição, e exportadas junto com o vídeo ou como arquivo separado." },
    { question: "O Descript substitui o Premiere ou DaVinci?", answer: "Para edições simples a intermediárias baseadas em fala, o Descript é muito mais rápido e prático. Para projetos com efeitos visuais complexos, múltiplas câmeras e pós-produção avançada, editores como Premiere e DaVinci ainda são mais adequados." },
    { question: "O Descript funciona no Mac e Windows?", answer: "Sim. O Descript possui aplicativos nativos para macOS e Windows, além de versão web acessível pelo navegador." },
    { question: "Como começar a usar o Descript?", answer: "Acesse descript.com, crie uma conta gratuita, faça upload de um arquivo de vídeo ou áudio, aguarde a transcrição automática e comece a editar pelo texto gerado." },
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Descript</h2>
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
