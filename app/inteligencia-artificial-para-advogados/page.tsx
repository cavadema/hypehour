import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import { ScaleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

const ferramentas = [
    {
        nome: "JusIA",
        url: "https://ia.jusbrasil.com.br/",
        descricao: "Assistente jurídico do Jusbrasil para pesquisa de jurisprudência e análise de documentos.",
    },
    {
        nome: "Jusfy",
        url: "https://jusfy.com.br/",
        descricao: "Plataforma de IA para advogados com cálculo de prazos, correção de petições e mais.",
    },
    {
        nome: "MinutAI",
        url: "https://www.minutaia.com.br/",
        descricao: "Geração de minutas contratuais e documentos jurídicos com inteligência artificial.",
    },
    {
        nome: "JuridicoAI",
        url: "https://juridico.ai/",
        descricao: "Assistente virtual para automação de atendimento e triagem de casos jurídicos.",
    },
    {
        nome: "Juit",
        url: "https://juit.com.br/",
        descricao: "Jurimetria e inteligência de dados para escritórios de advocacia e departamentos jurídicos.",
    },
    {
        nome: "LawX",
        url: "https://lawx.ai/",
        descricao: "Soluções de IA para análise preditiva e gestão de processos judiciais.",
    },
    {
        nome: "ChatADV",
        url: "https://chatadv.com.br/",
        descricao: "Chatbot jurídico treinado na legislação brasileira para tirar dúvidas e auxiliar advogados.",
    },
    {
        nome: "Inspira",
        url: "https://www.inspire-se.co/",
        descricao: "Ferramenta de gestão e produtividade para advogados com recursos de IA.",
    },
    {
        nome: "Turivius",
        url: "https://turivius.com/",
        descricao: "Pesquisa jurisprudencial e jurimetria avançada para tomada de decisão estratégica.",
    },
    {
        nome: "CaseText",
        url: "https://casetext.com/",
        descricao: "Tecnologia CoCounsel para revisão de documentos e pesquisa legal com IA (agora parte da Thomson Reuters).",
    },
    {
        nome: "Lawgeex",
        url: "https://www.lawgeex.com/",
        descricao: "Automação de revisão de contratos para garantir conformidade e acelerar fechamentos.",
    },
    {
        nome: "JusPrompt",
        url: "https://www.jusprompt.plus/",
        descricao: "Assistente jurídico com IA para petições e pesquisas legais.",
    },
    {
        nome: "Legal Robot",
        url: "https://legalrobot.com/",
        descricao: "Plataforma com IA para analisar contratos, riscos legais e conformidade.",
    },
];

export const metadata = {
    title: "Inteligência Artificial para Advogados",
    description: "Descubra as melhores ferramentas de IA para advogados: pesquisa jurídica, automação de contratos e jurimetria.",
    alternates: {
        canonical: "https://www.hypehour.com.br/inteligencia-artificial-para-advogados",
    },
  openGraph: {
    title: "Inteligência Artificial para Advogados",
    description: "Descubra as melhores ferramentas de IA para advogados: pesquisa jurídica, automação de contratos e jurimetria.",
    url: "https://www.hypehour.com.br/inteligencia-artificial-para-advogados",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Inteligência Artificial para Advogados",
    description: "Descubra as melhores ferramentas de IA para advogados: pesquisa jurídica, automação de contratos e jurimetria.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function IaParaAdvogados() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para Advogados</span>
      </nav>
            <div className="flex items-center gap-3 mb-8">
                <ScaleIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Advogados</h1>
            </div>

            <ExpandableContent />

            <div className="grid gap-6 sm:grid-cols-2">
                {ferramentas.map((ferramenta) => (
                    <ToolCard key={ferramenta.nome} nome={ferramenta.nome} url={ferramenta.url} descricao={ferramenta.descricao} />
                ))}
            </div>
              <div className="mt-12">
                <ComparativoFerramentas />
              </div>
              <ComoEscolher />
              <ProTips />
              <FAQSection />

      <CategoryPageSchema
        title="Inteligência Artificial para Advogados"
        description="Descubra as melhores ferramentas de IA para advogados: pesquisa jurídica, automação de contratos e jurimetria."
        canonicalUrl="https://www.hypehour.com.br/inteligencia-artificial-para-advogados"
        ferramentas={ferramentas}
      />
    </main>
    );
}
