import { GlobeAltIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: "Criação de Agentes de IA",
  description: "Ferramentas para criar e orquestrar agentes de IA rapidamente.",
  alternates: {
    canonical: "https://www.hypehour.com.br/criacao-agentes-ia",
  },
};

const ferramentas = [
  { nome: "Relevance AI", url: "https://relevanceai.com/", descricao: "Plataforma low-code para construir e orquestrar forças de trabalho autônomas de agentes de IA." },
  { nome: "LangFlow", url: "https://www.langflow.org/", descricao: "Framework visual low-code para construir aplicações de IA, RAG e sistemas multi-agentes." },
  { nome: "Play AI", url: "https://docs.play.ai/documentation/get-started/overview", descricao: "Agentes de IA conversacionais de alta velocidade e interfaces de voz para empresas." },
  { nome: "Instruct AI", url: "https://instruct.ai/", descricao: "Plataforma no-code para criar agentes de IA autônomos que executam tarefas complexas em diversas aplicações." },
  { nome: "Sparks", url: "https://www.getsparks.ai/", descricao: "Plataforma para criar, implantar e gerenciar agentes autônomos de IA para diversas tarefas." },
  { nome: "Pulze", url: "https://www.pulze.ai/", descricao: "Plataforma de infraestrutura de LLM para roteamento inteligente, otimização de custos e latência para seus agentes." },
  { nome: "Dedalus Labs", url: "https://www.dedaluslabs.ai/", descricao: "Conecte qualquer modelo a qualquer servidor MCP com uma única API. Crie agentes multimodais em minutos." },
  { nome: "Superset", url: "https://superset.sh/", descricao: "Execute dezenas de agentes de coding (Claude Code, etc) em paralelo na sua máquina com isolamento." },
  { nome: "Friendware", url: "https://www.chatbase.co/", descricao: "Crie chatbots de IA personalizados treinados com seus dados (PDFs, site, texto) para suporte e vendas." },
  { nome: "Browser Use", url: "https://browser-use.com/", descricao: "Biblioteca e ecossistema para permitir que agentes de IA controlem o navegador e automatizem a web." },
  { nome: "Notion Personal Agent", url: "https://www.notion.com/pt/help/guides/get-started-with-your-personal-agent-in-notion", descricao: "Agente oficial do Notion para automatizar tarefas complexas e gestão de bancos de dados." },
  { nome: "Ogment", url: "https://www.ogment.ai/", descricao: "Plataforma empresarial para governança e deploy de servidores MCP (Model Context Protocol)." },
  { nome: "LiveKit", url: "https://livekit.io/", descricao: "Infraestrutura de voz e vídeo em tempo real para construir agentes de IA multimodais." },
  { nome: "ClickUp Brain Agents", url: "https://clickup.com/brain/agents", descricao: "Super agentes de IA que trabalham como humanos com habilidades infinitas, memória e colaboração em tempo real." },
  { nome: "Dvina", url: "https://dvina.ai/", descricao: "Plataforma para criar e orquestrar agentes de IA com foco em automação empresarial." },
  { nome: "Fiddler AI", url: "https://www.fiddler.ai/", descricao: "Plataforma de monitoramento e observabilidade para agentes de IA em produção." },
  { nome: "Origon", url: "https://origon.ai/", descricao: "Framework para construir agentes de IA autônomos com capacidades de raciocínio avançadas." },
  { nome: "Kagent", url: "https://kagent.dev/", descricao: "Ferramenta de desenvolvimento para criar agentes de IA com integração de código e testes." },
  { nome: "Graphbit", url: "https://www.graphbit.ai/", descricao: "Framework LLM empresarial open-source construído com Rust para velocidade, segurança e escala." },
  { nome: "Droxy", url: "https://www.droxy.ai/", descricao: "Crie agentes de IA personalizados sem código para automatizar atendimento e interações." },
  { nome: "Google Agent Builder", url: "https://cloud.google.com/products/agent-builder", descricao: "Plataforma do Google Cloud para criar, treinar e implantar agentes de IA com segurança e escalabilidade." },
  { nome: "Shitty Coding Agent", url: "https://shittycodingagent.ai/", descricao: "Agente de IA que gera código para testes e automações, podendo ser orquestrado em fluxos." },
  { nome: "Firecrawl", url: "https://www.firecrawl.dev/", descricao: "Crawler de IA para coletar e estruturar dados da web que podem alimentar agentes." },
  { nome: "Promptloop", url: "https://www.promptloop.com/", descricao: "Ferramenta para criar agentes de IA que processam dados em planilhas com prompts personalizados." },
  { nome: "DataRobot", url: "https://www.datarobot.com/", descricao: "Plataforma empresarial para criar e gerenciar agentes de IA com AutoML e orquestração." },
  { nome: "Zaia", url: "https://zaia.app/", descricao: "Plataforma para criar e implantar agentes de IA automáticos com integrações." },
  { nome: "Incredible", url: "https://www.incredible.one/", descricao: "Plataforma para criar agentes de IA com orquestração de fluxos." },
  { nome: "Tate A Tate", url: "https://www.tate-a-tate.com/", descricao: "Construa agentes conversacionais com recursos avançados." },
  { nome: "Okareo", url: "https://okareo.com/", descricao: "Teste e monitore agentes de IA em produção." },
  { nome: "TangleML", url: "https://tangleml.com/", descricao: "Framework para agentes com controle de ferramentas e memória." },
  { nome: "Merge Agent handler", url: "https://www.merge.dev/products/merge-agent-handler/", descricao: "Plataforma com IA para criar agentes que gerenciam integrações e APIs automaticamente." },
  { nome: "Verdent", url: "https://www.verdent.ai/", descricao: "Plataforma com IA para gerar insights e otimizar processos agrícolas com dados em tempo real." },
  { nome: "Marble", url: "https://marble.ai/", descricao: "Crie agentes conversacionais personalizados que automatizam tarefas e suporte inteligente." },
  { nome: "MyClone", url: "https://www.myclone.is/", descricao: "Crie clones digitais realistas com IA para vídeos, voz e interações personalizadas." },
  { nome: "Serval", url: "https://www.serval.com/", descricao: "Plataforma para gerenciar e proteger dados sensíveis em aplicações empresariais." },
  { nome: "Warp Agents", url: "https://www.warp.dev/agents", descricao: "Crie e gerencie agentes de IA que automatizam tarefas no seu terminal e ferramentas." },
  { nome: "Kadabra", url: "https://www.getkadabra.com/", descricao: "IA que otimiza e automatiza respostas de atendimento ao cliente com insights inteligentes." },
  { nome: "Action State Labs", url: "https://www.actionstatelabs.com/", descricao: "Framework para gerenciar estado e fluxos complexos em aplicações Android." },
  { nome: "Zenflow (Zencoder)", url: "https://zencoder.ai/zenflow", descricao: "Construa agentes e fluxos com IA orquestrando ferramentas e memória." },
  { nome: "Databricks AI Agents", url: "https://www.databricks.com/solutions/ai-agents", descricao: "Solução para construir e operar agentes de IA em dados empresariais." },
  { nome: "Nelly", url: "https://nelly.is/", descricao: "Agentes de IA para workflows e automações em escala." },
  { nome: "Mem0", url: "https://mem0.ai/", descricao: "Memória para agentes de IA; contextos persistentes em apps." },
  { nome: "Valmi", url: "https://www.valmi.io/", descricao: "Billing para agentes de IA: pricing por resultado, simulação de preços e custos unificados em provedores." },
  { nome: "A2UI", url: "https://a2ui.org/", descricao: "Framework para criar interfaces de usuário com agentes de IA." },
  { nome: "CTO.new", url: "https://cto.new/", descricao: "Plataforma para criar e gerenciar agentes de IA para desenvolvimento de software." },
  { nome: "GetProfile", url: "https://www.getprofile.org/", descricao: "Perfil de usuário e memória de longo prazo para seu agente de IA, open source." },
  { nome: "Adobe Agent Orchestrator", url: "https://business.adobe.com/br/products/experience-platform/agent-orchestrator.html", descricao: "Orquestração de agentes de IA da Adobe para experiências personalizadas em escala." },
  { nome: "Factory AI", url: "https://factory.ai/", descricao: "Plataforma para criar, testar e orquestrar agentes de IA com foco em produção." },
  { nome: "Sim AI", url: "https://www.sim.ai/", descricao: "Construa agentes autônomos para tarefas complexas com monitoramento e segurança." },
  { nome: "Conduit AI", url: "https://www.conduit.ai/", descricao: "Infraestrutura para desenvolver e operar agentes de IA com workflows reutilizáveis." },
  { nome: "Doco", url: "https://www.trydoco.com/", descricao: "Assistente/agent para edição e revisão de documentos com IA integrada ao Word." },
];

export default function CriacaoAgentesIA() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <GlobeAltIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Criação de Agentes de IA</h1>
      </div>
      <p className="mb-8 text-gray-600">Ferramentas de IA para criar, testar e operar agentes com rapidez.</p>
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <a
            key={f.nome}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >
            <h2 className="font-semibold text-lg mb-1">{f.nome}</h2>
            <div className="text-gray-500 text-sm">{f.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
