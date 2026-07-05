import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Base44?", answer: "Base44 é uma plataforma de vibe coding com inteligência artificial que permite criar aplicações web completas — incluindo frontend, backend, banco de dados e autenticação — apenas descrevendo o que você quer em linguagem natural, sem precisar configurar infraestrutura." },
    { question: "Para que serve o Base44?", answer: "O Base44 serve para criar aplicações web funcionais rapidamente: dashboards, ferramentas internas, SaaS simples, protótipos e MVPs completos. A IA gera toda a estrutura do app, incluindo banco de dados e lógica de negócio." },
    { question: "O Base44 é gratuito?", answer: "O Base44 oferece plano gratuito para começar a criar aplicações. Planos pagos liberam mais projetos, recursos avançados e opções de deploy personalizado." },
    { question: "O Base44 cria o backend também?", answer: "Sim. O Base44 gera não apenas o frontend, mas também a lógica de backend, banco de dados e autenticação de usuários — entregando uma aplicação completa e funcional, não apenas uma interface visual." },
    { question: "Preciso saber programar para usar o Base44?", answer: "Não. O Base44 é feito para quem quer criar aplicações sem precisar escrever código. Você descreve o que quer e a IA gera tudo automaticamente." },
    { question: "O Base44 é diferente do Lovable ou Bolt.new?", answer: "O Base44 se destaca por gerar aplicações com stack completo — incluindo banco de dados real e autenticação — com menos configuração manual do que concorrentes. Cada ferramenta tem suas forças; o Base44 foca em apps completos e funcionais." },
    { question: "O Base44 faz deploy automático?", answer: "Sim. As aplicações criadas no Base44 ficam hospedadas na plataforma e podem ser acessadas por um link, sem necessidade de configurar servidores ou serviços de hospedagem externos." },
    { question: "O Base44 suporta autenticação de usuários?", answer: "Sim. O Base44 gera automaticamente sistemas de autenticação com login e cadastro para as aplicações criadas, sem necessidade de configuração manual." },
    { question: "Posso editar o código gerado pelo Base44?", answer: "Sim. O Base44 permite visualizar e editar o código gerado pela IA, o que é útil para customizações que vão além do que a IA pode fazer automaticamente." },
    { question: "O Base44 é bom para criar MVPs?", answer: "Sim. É uma das ferramentas mais usadas para criar MVPs rapidamente — em horas em vez de semanas — permitindo validar ideias antes de investir em desenvolvimento completo." },
    { question: "O Base44 funciona em português?", answer: "Sim. O Base44 aceita prompts em português para criar as aplicações, embora a interface principal esteja em inglês." },
    { question: "Quais tipos de apps posso criar no Base44?", answer: "Dashboards, ferramentas internas, CRMs simples, sistemas de gestão, portais de clientes, ferramentas de produtividade e qualquer tipo de aplicação web com banco de dados e usuários." },
    { question: "O Base44 é seguro para dados?", answer: "O Base44 segue práticas padrão de segurança para aplicações web. Para aplicações com dados sensíveis, avalie as políticas de privacidade e os termos de uso antes de usar." },
    { question: "O Base44 é bom para startups?", answer: "Sim. Startups usam o Base44 para criar protótipos e MVPs funcionais sem equipe de desenvolvimento, acelerando a validação de produto." },
    { question: "Como começar a usar o Base44?", answer: "Acesse base44.com, crie uma conta, descreva a aplicação que você quer criar e aguarde a IA gerar o app completo, pronto para usar." },
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre Base44</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden px-6">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                ))}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />
        </div>
    );
}
