import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
    {
        "q": "O que são geradores de logo com IA?",
        "a": "São ferramentas que usam inteligência artificial para criar logotipos automaticamente a partir de informações sobre seu negócio — nome da empresa, setor, estilo preferido e cores — gerando opções profissionais em segundos."
    },
    {
        "q": "Qual o melhor gerador de logo com IA em 2026?",
        "a": "Looka, Brandmark, Turbologo e Ideogram são referências para geração de logos com IA. Cada um tem abordagem diferente: Looka foca em kits de marca completos; Ideogram brilha em logos com tipografia artística."
    },
    {
        "q": "Logo criada por IA tem qualidade profissional?",
        "a": "Para uso digital (redes sociais, site, apresentações), a qualidade é excelente. Para aplicações em materiais impressos de alta resolução, verifique se a ferramenta exporta em SVG ou arquivo vetorial — essencial para escalabilidade sem perda de qualidade."
    },
    {
        "q": "Posso usar logo gerada por IA comercialmente?",
        "a": "Depende da ferramenta e do plano. A maioria dos serviços pagos concede direitos comerciais completos sobre os logos gerados. Confirme sempre os termos de uso antes de registrar a marca ou usar em materiais comerciais."
    },
    {
        "q": "É possível registrar no INPI uma logo criada por IA?",
        "a": "Sim, desde que você seja o detentor dos direitos comerciais conforme os termos da plataforma usada. O INPI não distingue logos criadas por humanos ou IA — o que importa é a originalidade e não conflito com marcas existentes."
    },
    {
        "q": "Quanto custa criar uma logo com IA?",
        "a": "Plataformas como Looka cobram de US$20 a US$65 pelo pacote completo com arquivos em alta resolução. Brandmark tem planos a partir de US$25. Ideogram é parcialmente gratuito para geração de conceitos."
    },
    {
        "q": "Logo de IA substitui designer gráfico para identidade visual?",
        "a": "Para logos simples e negócios com orçamento limitado, a IA é uma ótima opção. Para marcas que precisam de identidade visual complexa, manual de marca detalhado ou trabalho altamente personalizado, um designer humano ainda agrega valor insubstituível."
    },
    {
        "q": "Quais formatos de arquivo as ferramentas de logo com IA exportam?",
        "a": "A maioria exporta PNG, JPEG e SVG. Planos premium geralmente incluem PDF vetorial e arquivos para Adobe Illustrator. Para uso em impressão e bordados, o SVG e AI são essenciais — confirme antes de contratar."
    },
    {
        "q": "Como fazer uma logo com IA para minha empresa?",
        "a": "Informe o nome da empresa, descreva o setor de atuação e o público-alvo, escolha estilos e cores preferidos, e a IA gera dezenas de opções. Selecione a melhor, personalize e faça o download. O processo todo leva menos de 15 minutos."
    },
    {
        "q": "Ferramentas de IA conseguem criar logos com texto legível?",
        "a": "Algumas sim. Ideogram e Adobe Firefly são conhecidos por gerar logos com tipografia legível e bem integrada ao símbolo — um ponto fraco histórico da geração de imagens por IA que foi significativamente resolvido."
    },
    {
        "q": "Dá para criar kit de marca completo (logo, cores, fontes) com IA?",
        "a": "Sim. Looka e Brandmark geram além da logo: paleta de cores, combinações de fontes, mockups em diferentes aplicações (cartão de visita, camiseta, site) e até guias básicos de uso da marca."
    },
    {
        "q": "Como editar uma logo gerada por IA?",
        "a": "A maioria das plataformas tem editor online que permite ajustar cores, fontes, proporções e elementos. Para edições mais complexas, exporte o arquivo SVG e abra no Adobe Illustrator ou Inkscape (gratuito)."
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
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Perguntas Frequentes sobre IA para Criar Logo</h2>
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
