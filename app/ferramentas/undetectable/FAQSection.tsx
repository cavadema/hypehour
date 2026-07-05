import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Undetectable AI?", answer: "Undetectable AI é uma plataforma que detecta se um texto foi gerado por IA e também oferece uma ferramenta para tornar textos de IA mais naturais e humanizados." },
    { question: "Para que serve o Undetectable AI?", answer: "Serve para verificar se textos foram criados por ChatGPT, Claude, Gemini e outros, além de reescrever esses textos para que passem pelos detectores como se fossem escritos por humanos." },
    { question: "O Undetectable AI é gratuito?", answer: "Oferece uma versão gratuita limitada. Recursos completos de humanização e análise de volume requerem plano pago." },
    { question: "O Undetectable AI funciona em português?", answer: "Sim, suporta português entre outros idiomas, tanto na detecção quanto na humanização de textos." },
    { question: "Quais detectores o Undetectable AI usa?", answer: "Agrega múltiplos detectores simultaneamente, incluindo GPTZero, Originality.ai, Copyleaks, Turnitin e outros, exibindo todos os resultados em uma tela." },
    { question: "O Undetectable AI burla o Turnitin?", answer: "A plataforma afirma que seus textos humanizados passam por detectores, mas os resultados variam. Use com responsabilidade e verifique as políticas da instituição." },
    { question: "O texto humanizado pelo Undetectable AI mantém o sentido original?", answer: "Na maioria dos casos sim, mas é sempre recomendado revisar o resultado pois a IA pode alterar nuances ou introduzir pequenos erros." },
    { question: "O Undetectable AI é ético de usar?", answer: "Depende do contexto. Para fins pessoais e comerciais é amplamente aceito. Para fins acadêmicos, verifique as políticas da sua instituição sobre uso de IA." },
    { question: "O Undetectable AI detecta textos do ChatGPT?", answer: "Sim. Está treinado para detectar padrões de texto gerado por ChatGPT, Claude, Gemini, Llama e outros modelos populares." },
    { question: "O Undetectable AI funciona com textos longos?", answer: "Sim, mas o plano gratuito tem limite de caracteres. Planos pagos permitem processar textos mais longos." },
    { question: "O Undetectable AI é mais detector ou humanizador?", answer: "É as duas coisas, mas é mais conhecido pela funcionalidade de humanização. O detector em si já está disponível em diversas outras ferramentas gratuitamente." },
    { question: "A humanização do Undetectable AI prejudica o SEO?", answer: "Não necessariamente. Os textos humanizados continuam legíveis e coerentes, mas é bom revisar antes de publicar para garantir qualidade." },
    { question: "O Undetectable AI armazena meus textos?", answer: "Verifique a política de privacidade antes de inserir textos confidenciais ou sensíveis na plataforma." },
    { question: "O Undetectable AI funciona para artigos acadêmicos?", answer: "Tecnicamente sim, mas o uso ético em contexto acadêmico é responsabilidade do usuário e deve estar em conformidade com as regras da instituição." },
    { question: "Qual é a precisão do Undetectable AI na detecção?", answer: "A empresa afirma 99%+ de precisão, mas como qualquer detector de IA, pode ter falsos positivos e falsos negativos." },
    { question: "O Undetectable AI funciona para redes sociais?", answer: "Sim. É muito usado para humanizar legendas, posts e copy de marketing gerado por IA antes de publicar." },
    { question: "Posso usar o Undetectable AI para e-mails corporativos?", answer: "Sim. Humanizar e-mails gerados por IA para que soem mais naturais e pessoais é um caso de uso comum." },
    { question: "O Undetectable AI tem API?", answer: "Sim, oferece API para desenvolvedores que queiram integrar detecção ou humanização em seus próprios produtos." },
    { question: "O Undetectable AI é melhor que o GPTZero?", answer: "São ferramentas diferentes. GPTZero foca na detecção; Undetectable AI oferece tanto detecção quanto humanização em uma só plataforma." },
    { question: "Quanto tempo leva para humanizar um texto?", answer: "Geralmente segundos para textos curtos. Textos longos podem levar até alguns minutos dependendo do servidor." },
    { question: "O Undetectable AI altera muito o texto original?", answer: "Depende do nível de humanização escolhido. Configurações mais agressivas alteram mais o texto; configurações mais leves fazem mudanças sutis." },
    { question: "O Undetectable AI funciona para conteúdo de blog?", answer: "Sim. É amplamente usado por criadores de conteúdo para publicar textos de IA sem acionar alertas de detecção." },
    { question: "O Undetectable AI detecta deepfakes de texto?", answer: "O foco é em texto gerado por LLMs. Para deepfakes de mídia (imagem, vídeo, áudio) existem ferramentas específicas." },
    { question: "Vale a pena pagar pelo Undetectable AI?", answer: "Para quem usa IA para produzir conteúdo regularmente e precisa garantir que passe por detectores, o plano pago tende a se pagar rápido." },
    { question: "O Undetectable AI funciona no celular?", answer: "Sim. A plataforma web funciona em navegadores mobile, embora a experiência seja melhor no desktop." },
    { question: "O Undetectable AI preserva palavras-chave de SEO?", answer: "Geralmente sim, mas sempre revise o texto humanizado para confirmar que palavras-chave estratégicas foram mantidas." },
    { question: "Existe alternativa gratuita ao Undetectable AI?", answer: "GPTZero, ZeroGPT e Copyleaks oferecem detecção gratuita. Para humanização gratuita, as opções são mais limitadas." },
    { question: "O Undetectable AI funciona com textos em inglês?", answer: "Inglês é o idioma mais suportado e onde os resultados costumam ser melhores." },
    { question: "O Undetectable AI tem extensão para Chrome?", answer: "Verifique no site oficial, pois a disponibilidade de extensões pode mudar com o tempo." },
    { question: "O Undetectable AI é confiável?", answer: "É uma das plataformas mais conhecidas do segmento, com boa reputação entre criadores de conteúdo, mas como qualquer ferramenta de IA, os resultados não são 100% garantidos." },
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Undetectable AI</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
                {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />)}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />
        </div>
    );
}
