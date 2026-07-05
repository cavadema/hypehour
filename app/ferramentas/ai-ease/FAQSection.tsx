import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o AI Ease?", answer: "AI Ease é uma plataforma de IA que gera headshots profissionais de estúdio a partir de selfies comuns, sem necessidade de fotógrafo ou sessão de fotos." },
    { question: "Para que serve o AI Ease?", answer: "Serve para criar fotos profissionais para LinkedIn, currículo, sites corporativos e perfis de redes sociais, usando inteligência artificial para transformar selfies em headshots de qualidade de estúdio." },
    { question: "O AI Ease é gratuito?", answer: "Possui opções pagas por pacote. Verifique o site para conferir se há teste gratuito ou créditos iniciais disponíveis." },
    { question: "Quantas fotos preciso enviar para o AI Ease?", answer: "Geralmente solicita entre 10 e 20 selfies com variações de ângulo, expressão e iluminação para treinar o modelo e gerar os headshots." },
    { question: "Quanto tempo o AI Ease leva para gerar os headshots?", answer: "O processo de geração costuma levar algumas horas após o envio das fotos, dependendo da demanda do servidor." },
    { question: "O AI Ease gera headshots realistas?", answer: "Sim. Os headshots gerados têm aparência profissional e realista, comparáveis a fotos de estúdio quando as selfies de entrada têm boa qualidade." },
    { question: "Posso escolher o fundo e a roupa nos headshots do AI Ease?", answer: "Sim. A plataforma permite selecionar diferentes fundos (claro, escuro, cor sólida) e estilos de vestimenta para os headshots gerados." },
    { question: "O AI Ease funciona para qualquer tipo de rosto?", answer: "Sim. A IA é treinada para funcionar com diferentes características faciais, tons de pele e gêneros." },
    { question: "Os headshots do AI Ease são bons para LinkedIn?", answer: "Sim. É um dos principais casos de uso: criar uma foto de perfil profissional de qualidade sem investir em fotógrafo." },
    { question: "O AI Ease preserva minha aparência natural?", answer: "A IA mantém suas feições reconhecíveis, mas pode fazer ajustes de iluminação e qualidade. Resultados variam conforme a qualidade das selfies enviadas." },
    { question: "O AI Ease funciona bem com óculos?", answer: "Funciona, mas óculos podem representar um desafio para modelos de IA. Recomenda-se enviar fotos com e sem óculos para melhores resultados." },
    { question: "O AI Ease é seguro para minhas fotos?", answer: "Verifique a política de privacidade antes de enviar suas imagens. Entenda como elas são armazenadas e se são usadas para treinar modelos futuros." },
    { question: "Quantos headshots o AI Ease entrega?", answer: "Depende do pacote contratado. Geralmente entrega dezenas de variações com diferentes fundos, roupas e expressões." },
    { question: "Os headshots do AI Ease têm marca d'água?", answer: "Pacotes pagos geralmente entregam imagens sem marca d'água. Verifique os termos do plano escolhido." },
    { question: "Posso usar os headshots do AI Ease comercialmente?", answer: "Verifique os termos de licença do AI Ease. A maioria dos serviços de headshot com IA permite uso pessoal e profissional." },
    { question: "O AI Ease funciona para fotos de grupo ou equipes?", answer: "O foco é em headshots individuais. Para fotos de equipe, cada pessoa precisaria enviar suas selfies separadamente." },
    { question: "O AI Ease funciona no celular?", answer: "Sim. É possível acessar via navegador mobile, embora para melhor experiência de upload de fotos o desktop seja recomendado." },
    { question: "Em quais formatos recebo os headshots do AI Ease?", answer: "Geralmente em JPG ou PNG de alta resolução, adequados para uso digital e impressão." },
    { question: "O AI Ease substitui um fotógrafo profissional?", answer: "Para headshots corporativos casuais, sim. Para campanhas publicitárias ou projetos que exigem criatividade e direção artística, um fotógrafo ainda é recomendado." },
    { question: "Posso pedir reprocessamento se não gostar dos resultados?", answer: "Verifique a política de satisfação do AI Ease. Alguns serviços oferecem revisões ou créditos caso os resultados não sejam satisfatórios." },
    { question: "O AI Ease funciona para fotos de crianças?", answer: "A maioria dos serviços de headshot com IA é voltada para adultos. Verifique os termos de uso antes de enviar fotos de menores." },
    { question: "O AI Ease é melhor que outros geradores de headshot?", answer: "Cada ferramenta tem suas particularidades. O AI Ease é reconhecido pela qualidade realista dos headshots e variedade de estilos disponíveis." },
    { question: "O AI Ease altera meu rosto significativamente?", answer: "O objetivo é melhorar qualidade e iluminação mantendo sua aparência reconhecível. Não é uma ferramenta de alteração facial profunda." },
    { question: "Vale a pena pagar pelo AI Ease?", answer: "Comparado ao custo de uma sessão fotográfica profissional, os pacotes do AI Ease costumam ser muito mais acessíveis para quem precisa de headshots de qualidade." },
    { question: "O AI Ease funciona para atores e modelos?", answer: "Para uso casual e redes sociais sim, mas atores e modelos profissionais geralmente precisam de book fotográfico feito por fotógrafo especializado." },
    { question: "O AI Ease gera headshots em diferentes estilos?", answer: "Sim. Oferece estilos que vão de corporate formal a casual criativo, adaptando o visual ao contexto de uso." },
    { question: "O AI Ease tem suporte ao cliente?", answer: "Verifique o site para informações sobre canais de suporte disponíveis, como chat, e-mail ou base de conhecimento." },
    { question: "Posso usar selfies de baixa qualidade no AI Ease?", answer: "Selfies nítidas com boa iluminação geram resultados muito superiores. Fotos borradas ou escuras tendem a produzir headshots de menor qualidade." },
    { question: "O AI Ease processa fotos instantaneamente?", answer: "Não. O processamento envolve treinamento de modelo personalizado com suas fotos, o que leva algumas horas." },
    { question: "O AI Ease gera apenas headshots ou outros tipos de foto?", answer: "O foco principal é headshots profissionais, mas algumas ferramentas similares também oferecem fotos de corpo inteiro ou em ambientes específicos." },
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre AI Ease</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
                {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />)}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />
        </div>
    );
}
