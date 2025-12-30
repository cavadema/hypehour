import { CogIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ferramentas = [
  { nome: "Atlassian Rovo", url: "https://www.atlassian.com/software/rovo/features", descricao: "Automação e busca inteligente com IA para equipes Atlassian." },
  { nome: "Thesys N8N", url: "https://www.thesys.dev/n8n", descricao: "Plataforma de automação de workflows com IA e integração de ferramentas." },
  { nome: "Kadabra", url: "https://www.getkadabra.com/", descricao: "Automação de processos com IA para simplificar tarefas empresariais." },
  { nome: "Make", url: "https://www.make.com", descricao: "Plataforma de automação visual para conectar apps e automatizar workflows." },
  { nome: "n8n", url: "https://n8n.io/", descricao: "Automação de workflows open-source com nós personalizáveis e IA." },
  { nome: "Digibee", url: "https://www.digibee.com/", descricao: "Plataforma de integração e automação empresarial com IA." },
  { nome: "Drift (Salesloft)", url: "https://www.salesloft.com/platform/drift", descricao: "Automação de conversas e engajamento com IA para vendas." },
  { nome: "Seventh Sense", url: "https://www.theseventhsense.com/", descricao: "Otimização de campanhas de email com IA preditiva." },
  { nome: "Zeev", url: "https://zeev.it/", descricao: "Plataforma de BPM e automação de processos com IA para empresas." },
  { nome: "Pipefy AI", url: "https://www.pipefy.com/pt-br/ai/", descricao: "Automação de processos e workflows com inteligência artificial integrada." },
  { nome: "Gen-OS", url: "https://www.gen-os.ai/", descricao: "Sistema operacional com IA para automação e orquestração de tarefas." },
  { nome: "Zapier Tables", url: "https://zapier.com/tables", descricao: "Bancos de dados automatizados com integração nativa ao Zapier." },
  { nome: "Relay", url: "https://www.relay.app/", descricao: "Automação de workflows com IA e colaboração em equipe." },
  { nome: "Bardeen", url: "https://www.bardeen.ai/", descricao: "Automação de tarefas repetitivas no navegador com IA." },
  { nome: "Lindy", url: "https://www.lindy.ai/", descricao: "Assistente de IA para automatizar tarefas pessoais e profissionais." },
  { nome: "Gumloop", url: "https://www.gumloop.com/", descricao: "Plataforma de automação de workflows com IA e integrações." },
  { nome: "VectorShift", url: "https://vectorshift.ai/", descricao: "Criação de pipelines de IA e automação sem código." },
  { nome: "Apache Airflow", url: "https://airflow.apache.org/", descricao: "Plataforma open-source para orquestrar workflows complexos programaticamente." },
  { nome: "Flyte", url: "https://flyte.org/", descricao: "Orquestração de workflows de ML e dados em escala com IA." },
  { nome: "ClickUp Brain", url: "https://clickup.com/brain", descricao: "IA integrada ao ClickUp para automatizar tarefas e gerenciar projetos." },
];

export const metadata = {
  title: "Automação com Inteligência Artificial",
  description: "Ferramentas de IA para automatizar processos, workflows e tarefas repetitivas em sua empresa.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/automacao-ia',
  },
};

export default function AutomacaoIAPage() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>

      <div className="flex items-center gap-3 mb-8">
        <CogIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Automação</h1>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((ferramenta, index) => (
          <a
            key={index}
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
