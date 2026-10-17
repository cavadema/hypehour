import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

const ferramentas = [
    {
        nome: "Genstore",
        url: "https://www.genstore.ai/",
        descricao: "Construtor de lojas virtuais com IA que monta a estrutura da loja a partir de um único prompt, com pagamentos integrados, multimoeda e dropshipping.",
    },
    {
        nome: "Spangle",
        url: "/ferramentas/spangle",
        descricao: "Plataforma de inteligência para varejo que ajuda marcas a serem encontradas na descoberta de produtos por IA, com ferramentas de descoberta, aquisição paga e descoberta no próprio site.",
    },
    {
        nome: "Toca",
        url: "https://www.toca.com.vc/",
        descricao: "Plataforma brasileira de agentes de IA para ecommerce, varejo e indústria que cruza dados de loja, marketplaces, anúncios e ERP e entrega análises, alertas e ações com aprovação humana.",
    },
    {
        nome: "Native Commerce",
        url: "https://www.nativecommerce.ai/",
        descricao: "Construtor de lojas online com IA: você descreve o negócio e recebe uma loja editável, com pedidos, estoque, pagamentos, entrega e analytics.",
    },
    {
        nome: "Spreedly",
        url: "https://www.spreedly.com/",
        descricao: "Plataforma de orquestração de pagamentos que conecta lojistas a gateways, processadores e provedores antifraude por uma única integração, com cofre de tokens e roteamento.",
    },
    {
        nome: "Prax",
        url: "https://www.prax.ai/",
        descricao: "Plataforma brasileira de analytics para ecommerce que centraliza vendas, marketing, estoque e clientes, com insights de IA, segmentação RFM e CRM no WhatsApp.",
    },
    {
        nome: "Salesforce Commerce AI",
        url: "https://www.salesforce.com/br/commerce/ai/",
        descricao: "Recursos de IA da Salesforce para comércio: compras guiadas com Agentforce, recomendações de produtos, merchandising, promoções inteligentes e descrições de produto geradas com IA.",
    },
    {
        nome: "Estoca",
        url: "https://estoca.com.br/",
        descricao: "Operação brasileira de logística e fulfillment para ecommerce, com tecnologia própria de WMS, OMS e TMS, integração com marketplaces e rastreio por WhatsApp.",
    },
    {
        nome: "Luigi's Box",
        url: "https://www.luigisbox.com.br/",
        descricao: "Suíte de busca e descoberta de produtos com IA para ecommerce: busca, recomendações, listagem, assistente de compras e agente conversacional.",
    },
    {
        nome: "Selia",
        url: "https://www.selia.com.br/",
        descricao: "Operação de ecommerce terceirizada de ponta a ponta: desenvolvimento da loja, marketplaces, marketing, fulfillment, atendimento e serviços fiscais.",
    },
    {
        nome: "Eupresa IA",
        url: "https://eupresa.ia.br/",
        descricao: "Hub em português para pequenos negócios e MEIs com 14 agentes de IA, guias e comparativos de ferramentas para tarefas como follow-up de leads, atendimento e conteúdo.",
    },
    {
        nome: "Nuvem Chat",
        url: "https://www.nuvemshop.com.br/solucoes/nuvem-chat",
        descricao: "Assistente de IA nativo da Nuvemshop que atende 24h no WhatsApp e Instagram, responde dúvidas, recomenda produtos e leva o cliente ao checkout, com cobrança por conversa.",
    },
];

export const metadata = {
    title: "Ferramentas de Inteligência Artificial para Ecommerce",
    description: "Descubra as melhores ferramentas de IA para ecommerce: criação de lojas, busca e recomendação de produtos, atendimento, analytics, pagamentos e logística.",
    alternates: {
        canonical: "https://www.hypehour.com.br/ia-para-ecommerce",
    },
    openGraph: {
        title: "Ferramentas de Inteligência Artificial para Ecommerce",
        description: "Descubra as melhores ferramentas de IA para ecommerce: criação de lojas, busca e recomendação de produtos, atendimento, analytics, pagamentos e logística.",
        url: "https://www.hypehour.com.br/ia-para-ecommerce",
        siteName: 'Hypehour',
        images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Ferramentas de Inteligência Artificial para Ecommerce",
        description: "Descubra as melhores ferramentas de IA para ecommerce: criação de lojas, busca e recomendação de produtos, atendimento, analytics, pagamentos e logística.",
        images: ['https://www.hypehour.com.br/logo.png'],
        creator: '@hypehourbr',
    },
};

export default function IaParaEcommerce() {
    return (
        <main className="max-w-6xl mx-auto py-10 px-4">
            <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
                <span>/</span>
                <span className="text-black font-medium">IA para Ecommerce</span>
            </nav>
            <div className="flex items-center gap-3 mb-8">
                <ShoppingCartIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">IA para Ecommerce</h1>
            </div>

            <ExpandableContent />
            <h2 className="text-2xl font-bold mb-6 text-black">Melhores ferramentas de IA para Ecommerce</h2>
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
                title="Ferramentas de Inteligência Artificial para Ecommerce"
                description="Descubra as melhores ferramentas de IA para ecommerce: criação de lojas, busca e recomendação de produtos, atendimento, analytics, pagamentos e logística."
                canonicalUrl="https://www.hypehour.com.br/ia-para-ecommerce"
                ferramentas={ferramentas}
            />
        </main>
    );
}
