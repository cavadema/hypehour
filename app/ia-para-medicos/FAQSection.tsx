import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "Como a IA está sendo usada na medicina e saúde?",
        "a": "A IA apoia diagnóstico por imagem (radiologia, dermatologia, oftalmologia), transcrição automática de consultas, análise de exames laboratoriais, triagem de pacientes, sugestão de diagnósticos diferenciais e pesquisa clínica acelerada."
    },
    {
        "q": "IA pode ajudar médicos a fazer diagnósticos mais precisos?",
        "a": "Sim como suporte de decisão. Sistemas de IA para análise de radiografias, tomografias e RM detectam anomalias com acurácia comparável ou superior a especialistas em algumas condições específicas — mas sempre como segunda opinião, não substituto do médico."
    },
    {
        "q": "Quais ferramentas de IA são mais usadas por médicos e profissionais de saúde?",
        "a": "Nabla Copilot e Doximity para transcrição de consultas, DAX Copilot (da Nuance/Microsoft) para documentação clínica automatizada, Aidoc e Rad AI para radiologia, além de ferramentas de análise de prontuário eletrônico com IA."
    },
    {
        "q": "O que é a transcrição de consulta com IA e como funciona para médicos brasileiros?",
        "a": "A transcrição com IA grava a consulta, transcreve em tempo real e gera automaticamente a nota clínica estruturada (anamnese, exame físico, hipóteses diagnósticas, conduta) — liberando o médico de digitar enquanto atende o paciente."
    },
    {
        "q": "IA pode ser usada em telemedicina?",
        "a": "Sim. IA analisa sintomas relatados pelo paciente antes da consulta, sugere triagem de urgência, auxilia o médico com informações do prontuário durante a consulta online e gera documentação automaticamente após o atendimento."
    },
    {
        "q": "Como a IA ajuda no diagnóstico de doenças raras?",
        "a": "Ferramentas como Fdna (Face2Gene) analisam fenótipo e dados clínicos para sugerir síndromes raras. Sistemas de análise genômica com IA identificam variantes patogênicas com mais velocidade e abrangência do que análise manual."
    },
    {
        "q": "IA é segura para uso clínico? Qual a regulamentação no Brasil?",
        "a": "Dispositivos de IA para uso clínico devem ser aprovados pela ANVISA. O CFM publicou resoluções sobre telemedicina e uso de sistemas computadorizados de apoio à decisão. A IA em saúde opera como ferramenta de suporte, com responsabilidade clínica sempre do médico."
    },
    {
        "q": "Como a IA pode reduzir erros de prescrição e interações medicamentosas?",
        "a": "Sistemas integrados ao prontuário eletrônico alertam automaticamente sobre interações medicamentosas, alergias conhecidas, doses inadequadas para o peso e condições específicas do paciente — reduzindo eventos adversos evitáveis."
    },
    {
        "q": "IA pode analisar exames de imagem (raio-x, tomografia) com precisão?",
        "a": "Sim. Sistemas de IA para radiologia como Aidoc, Enlitic e Lunit detectam nódulos pulmonares, fraturas, hemorragias e outras alterações em imagens médicas com alta sensibilidade, funcionando como triagem prioritária para radiologistas."
    },
    {
        "q": "Como a IA ajuda em pesquisa clínica e ensaios clínicos?",
        "a": "IA acelera análise de literatura médica, identificação de pacientes elegíveis para estudos, monitoramento de dados de segurança em tempo real e análise estatística de resultados — comprimindo anos de trabalho em meses."
    },
    {
        "q": "É possível usar ChatGPT ou Claude para consultas médicas?",
        "a": "Como ferramenta de pesquisa e educação médica, sim — com cautela. Para uso clínico real, são necessárias ferramentas específicas validadas, pois modelos gerais podem alucinação e não têm acesso ao prontuário do paciente."
    },
    {
        "q": "Como a IA pode melhorar a gestão de clínicas e hospitais?",
        "a": "Otimização de agendamento de leitos e salas, previsão de demanda, triagem inteligente na recepção, análise de indicadores de qualidade assistencial e automação de processos administrativos como faturamento e autorização de planos de saúde."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Médicos e Saúde</h2>
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
