import { BuildingStorefrontIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ferramentas = [
  {
    nome: "Elephan",
    url: "https://www.elephan.ai/",
    descricao: "Automação de vendas inteligente para acelerar o pipeline e converter mais leads."
  },
  {
    nome: "Card.biz",
    url: "https://card.biz/",
    descricao: "Plataforma de cartão de visita digital gratuita para captura de leads e integração nativa com CRM."
  },
  {
    nome: "Concierge AI",
    url: "https://concierge.ai/",
    descricao: "Motor de respostas de IA para sites B2B SaaS que engaja visitantes, responde perguntas e converte leads."
  },
  {
    nome: "Skarbe",
    url: "https://skarbe.com/",
    descricao: "Assistente de vendas IA para não-vendedores que captura interações e sugere próximos passos.",
  },
  {
    nome: "Finalscout",
    url: "https://finalscout.com/",
    descricao: "Ferramenta de IA para prospecção e automação de vendas com análise de leads e outreach inteligente.",
  },
  {
    nome: "Outreach",
    url: "https://www.outreach.io/",
    descricao: "Plataforma de engajamento de vendas com IA para automação de outreach, sequências e análise de performance.",
  },
  {
    nome: "Drift",
    url: "https://www.salesloft.com/platform/drift",
    descricao: "Automação de conversas e engajamento com IA para vendas e marketing conversacional.",
  },
  {
    nome: "Grooven AI",
    url: "https://grooven.ai/",
    descricao: "Agentes conversacionais multicanais que vendem como humanos e escalam operações B2C no WhatsApp com automação inteligente.",
  },
  {
    nome: "Taplio",
    url: "https://taplio.com/",
    descricao: "Plataforma completa para crescimento no LinkedIn com agendamento, análise de performance e geração de conteúdo com IA.",
  },
  {
    nome: "Keplar Voice",
    url: "https://www.keplar.io/voice",
    descricao: "Conduz milhares de conversas naturais com clientes usando IA, entregando insights profundos de pesquisa de mercado em escala.",
  },
  {
    nome: "Dealism",
    url: "https://dealism.ai/pt/",
    descricao: "Agente de vendas IA que automatiza WhatsApp e Instagram DMs com personalidade humanizada, aprendendo com suas conversas.",
  },
  {
    nome: "Apollo.io",
    url: "https://www.apollo.io/pt",
    descricao: "Plataforma de vendas IA com 210M+ contatos B2B, automação de outreach, enriquecimento de dados e inteligência de conversação.",
  },
  {
    nome: "Salesforce AI",
    url: "https://www.salesforce.com/br/sales/ai/",
    descricao: "CRM líder com Agentforce para geração de leads, gestão de pipeline, coaching em vendas e resumos incorporados por IA.",
  },
  {
    nome: "Talkdesk",
    url: "https://www.talkdesk.com/pt-br/",
    descricao: "Contact center em nuvem com automação de experiência do cliente (CXA) e agentes de IA para atendimento e vendas.",
  },
  {
    nome: "Robbu",
    url: "https://robbu.global/home/",
    descricao: "Plataforma omnichannel brasileira com chatbots humanizados para WhatsApp, Instagram e voz, integrando vendas, atendimento e marketing.",
  },
  {
    nome: "Lavender",
    url: "https://www.lavender.ai/",
    descricao: "Email Coach com IA que pontua mensagens de vendas, sugere personalizações e otimiza taxa de resposta em tempo real.",
  },
  {
    nome: "Twain AI",
    url: "https://www.twain.ai/",
    descricao: "Pesquisa profunda automatizada para outreach personalizado em escala, gerando mensagens únicas baseadas em dados verificados do lead.",
  },
  {
    nome: "SmartWriter",
    url: "https://www.smartwriter.ai/",
    descricao: "Gera emails frios personalizados em escala usando atividade online dos prospects, com frameworks de copywriting comprovados.",
  },
  {
    nome: "Reach AI",
    url: "https://getreach.ai/",
    descricao: "Plataforma de engajamento de vendas com personalização de outreach baseada em IA e automação de follow-ups.",
  },
  {
    nome: "Regie.ai",
    url: "https://www.regie.ai/",
    descricao: "Plataforma de sales engagement com agentes IA para prospecção, enriquecimento, sequências multicanal e AI dialer integrado.",
  },
  {
    nome: "Seamless.AI",
    url: "https://seamless.ai/",
    descricao: "Motor de busca em tempo real com 1.3B+ contatos B2B verificados, prospecção instantânea e enriquecimento automático de CRM.",
  },
  {
    nome: "Crystal",
    url: "https://www.crystalknows.com/",
    descricao: "Predição de personalidade e insights comportamentais para prospects e clientes, aumentando resposta e conversão em vendas B2B.",
  },
  {
    nome: "Gong",
    url: "https://www.gong.io/",
    descricao: "Sistema operacional de receita com IA que captura interações, analisa conversas de vendas e otimiza forecasts e desempenho.",
  },
];

export const metadata = {
  title: "Inteligência Artificial para vendas",
  description: "Descubra as melhores ferramentas de IA para vendas: prospecção, qualificação de leads, outreach e automação de vendas.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ia-para-vendas",
  },
};

export default function IaParaVendas() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <BuildingStorefrontIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Vendas</h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((ferramenta) => (
          <a
            key={ferramenta.nome}
            href={ferramenta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >
            <h2 className="font-semibold text-lg mb-1">{ferramenta.nome}</h2>
            <div className="text-gray-500 text-sm">{ferramenta.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
