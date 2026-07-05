import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    { question: "O que é o Otter AI?", answer: "Otter AI é uma plataforma de inteligência artificial que transcreve reuniões em tempo real, gera resumos automáticos e identifica itens de ação para equipes." },
    { question: "Para que serve o Otter AI?", answer: "Serve para transcrever automaticamente reuniões no Zoom, Google Meet e Teams, gerar atas com pontos-chave e distribuir resumos para participantes." },
    { question: "O Otter AI é gratuito?", answer: "Sim, possui plano gratuito com 300 minutos de transcrição por mês. Planos pagos oferecem mais minutos, recursos de equipe e integrações avançadas." },
    { question: "O Otter AI funciona em português?", answer: "O Otter AI funciona melhor em inglês. O suporte ao português é limitado; para reuniões em português recomenda-se testar antes de usar em produção." },
    { question: "O Otter AI se integra com Zoom?", answer: "Sim. O Otter AI tem integração nativa com Zoom, Google Meet e Microsoft Teams, podendo entrar automaticamente como participante para transcrever." },
    { question: "O Otter AI gera atas automaticamente?", answer: "Sim. Após a reunião, gera um resumo com os principais pontos discutidos e itens de ação identificados pela IA." },
    { question: "O Otter AI precisa de instalação?", answer: "Não para web. Existe também app para iOS e Android para gravação de reuniões presenciais." },
    { question: "O Otter AI identifica quem está falando?", answer: "Sim. Possui reconhecimento de falantes (speaker identification) que associa trechos da transcrição a cada participante." },
    { question: "Posso pesquisar dentro das transcrições do Otter AI?", answer: "Sim. O Otter AI permite busca de palavras-chave em todas as transcrições salvas, funcionando como uma base de conhecimento de reuniões." },
    { question: "O Otter AI grava áudio além de transcrever?", answer: "Sim. Ele salva o áudio junto com a transcrição, permitindo ouvir trechos específicos da reunião." },
    { question: "Posso compartilhar transcrições do Otter AI?", answer: "Sim. As transcrições podem ser compartilhadas via link ou exportadas em texto, PDF e outros formatos." },
    { question: "O Otter AI funciona em reuniões presenciais?", answer: "Sim. O app móvel pode gravar e transcrever conversas presenciais usando o microfone do celular." },
    { question: "O Otter AI se integra com Slack?", answer: "Sim. Pode enviar resumos de reuniões automaticamente para canais do Slack configurados." },
    { question: "O Otter AI se integra com Salesforce?", answer: "Sim. Nos planos empresariais, sincroniza notas de reuniões diretamente com o Salesforce CRM." },
    { question: "Quanto tempo leva para a transcrição ficar pronta?", answer: "Transcrições em tempo real aparecem instantaneamente. Para arquivos carregados, geralmente fica pronto em minutos." },
    { question: "O Otter AI é preciso na transcrição?", answer: "Alta precisão para inglês em ambientes silenciosos. A qualidade cai com sotaques fortes, ruídos de fundo ou múltiplos falantes simultâneos." },
    { question: "Posso editar a transcrição do Otter AI?", answer: "Sim. As transcrições são editáveis, permitindo corrigir erros antes de compartilhar com a equipe." },
    { question: "O Otter AI substitui uma secretária?", answer: "Para a função de registrar reuniões e distribuir atas, sim. Para tarefas administrativas mais amplas, não." },
    { question: "O Otter AI é seguro para reuniões confidenciais?", answer: "O Otter AI possui criptografia e opções de controle de acesso. Para dados muito sensíveis, verifique a política de privacidade e os termos de serviço." },
    { question: "O Otter AI tem limite de duração de reunião?", answer: "O plano gratuito limita a 40 minutos por sessão e 300 minutos mensais. Planos pagos têm limites maiores." },
    { question: "Posso usar o Otter AI para entrevistas?", answer: "Sim. É muito usado para transcrever entrevistas de jornalismo, pesquisa e seleção de candidatos." },
    { question: "O Otter AI detecta itens de ação automaticamente?", answer: "Sim. A IA identifica frases que indicam tarefas ou responsabilidades e as destaca no resumo." },
    { question: "O Otter AI tem versão para equipes?", answer: "Sim. Os planos Business e Enterprise permitem workspaces compartilhados com acesso a transcrições de toda a equipe." },
    { question: "Vale a pena pagar pelo Otter AI?", answer: "Para equipes que fazem muitas reuniões em inglês, sim. O ROI em tempo economizado com atas manuais costuma compensar o custo." },
    { question: "O Otter AI exporta para Google Docs?", answer: "Sim. As transcrições podem ser exportadas em formatos compatíveis com o Google Docs e outros editores de texto." },
    { question: "O Otter AI funciona offline?", answer: "Não. Requer conexão com internet para transcrever em tempo real. Gravações offline são processadas ao se reconectar." },
    { question: "O Otter AI tem app para iPhone?", answer: "Sim. Está disponível na App Store para iOS e na Google Play Store para Android." },
    { question: "Quantos participantes o Otter AI consegue identificar?", answer: "O Otter AI pode identificar vários falantes em uma reunião, mas a precisão varia com o número de participantes e sobreposição de vozes." },
    { question: "O Otter AI funciona para podcasts?", answer: "Sim. É possível carregar arquivos de áudio de podcasts para obter transcrições completas." },
    { question: "O Otter AI é indicado para médicos e advogados?", answer: "Para uso profissional com dados sensíveis, verifique a conformidade com LGPD, HIPAA ou regulamentações aplicáveis antes de adotar." },
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
            <h2 className="text-2xl font-bold mb-6 text-black">Perguntas Frequentes sobre Otter AI</h2>
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden px-6">
                {faqs.map((faq, index) => <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />)}
            </div>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }) }} />
        </div>
    );
}
