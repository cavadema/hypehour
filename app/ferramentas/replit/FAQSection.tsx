import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Replit?", answer: "Replit é uma IDE colaborativa baseada em nuvem com inteligência artificial integrada que permite escrever, executar e deployar código diretamente no navegador, sem precisar instalar nada no computador." },
    { question: "Para que serve o Replit?", answer: "O Replit serve para criar, executar e publicar projetos de programação no navegador. Suporta dezenas de linguagens, colaboração em tempo real, hospedagem de aplicações e possui IA integrada para auxiliar na codificação." },
    { question: "O Replit é gratuito?", answer: "O Replit oferece plano gratuito com acesso às funcionalidades básicas. Planos pagos (Core e Teams) liberam mais poder de processamento, projetos privados, recursos de IA avançados e deploy sem limitações." },
    { question: "O Replit tem IA integrada?", answer: "Sim. O Replit possui o Replit AI (anteriormente Ghostwriter), um assistente de codificação com IA que autocompleta código, explica erros, gera funções e ajuda no desenvolvimento." },
    { question: "O Replit suporta quais linguagens?", answer: "O Replit suporta mais de 50 linguagens de programação, incluindo Python, JavaScript, TypeScript, Java, C++, Go, Rust, Ruby, PHP, HTML/CSS e muitas outras." },
    { question: "Preciso instalar algo para usar o Replit?", answer: "Não. O Replit funciona completamente no navegador — sem instalação de IDE, compiladores ou dependências. Basta acessar replit.com e começar a programar." },
    { question: "O Replit permite colaboração em tempo real?", answer: "Sim. O Replit tem multiplayer nativo — várias pessoas podem editar o mesmo projeto simultaneamente, como um Google Docs para código." },
    { question: "O Replit é bom para aprender programação?", answer: "Sim. É muito usado em educação por eliminar a barreira de configuração do ambiente. Iniciantes podem começar a programar em segundos, sem precisar instalar nada." },
    { question: "O Replit faz deploy de aplicações?", answer: "Sim. O Replit permite hospedar e publicar aplicações web, APIs e bots diretamente na plataforma, com URL pública acessível imediatamente após o deploy." },
    { question: "O Replit é bom para vibe coding?", answer: "Sim. Com o Replit AI integrado, você pode descrever o que quer construir e a IA gera o código, depura erros e sugere melhorias — ideal para criar projetos rapidamente sem sair do navegador." },
    { question: "O Replit funciona em português?", answer: "A interface está em inglês, mas o Replit AI entende e responde em português, o que facilita o uso para falantes de língua portuguesa." },
    { question: "O Replit é bom para projetos Python?", answer: "Sim. Python é uma das linguagens mais usadas no Replit, com suporte completo a bibliotecas, ambiente virtual e execução interativa." },
    { question: "O Replit tem templates prontos?", answer: "Sim. O Replit possui uma biblioteca extensa de templates para diferentes tipos de projeto — web apps, bots, APIs, scripts e mais — que podem ser clonados e editados." },
    { question: "O Replit é seguro para código privado?", answer: "No plano gratuito, os projetos são públicos por padrão. Para código privado, é necessário o plano pago, que oferece repositórios privados." },
    { question: "Como começar a usar o Replit?", answer: "Acesse replit.com, crie uma conta gratuita, escolha um template ou crie um novo projeto, selecione a linguagem desejada e comece a programar diretamente no navegador." },
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Replit</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                ))}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
        </div>
    );
}
