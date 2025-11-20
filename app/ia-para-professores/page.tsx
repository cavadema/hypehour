import { AcademicCapIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ferramentas = [
  {
    nome: "Conker.AI",
    url: "https://www.conker.ai/",
    descricao: "Gera quizzes alinhados a padrões curriculares com poucos cliques.",
  },
  {
    nome: "Diffit.me",
    url: "https://app.diffit.me/",
    descricao: "Adaptador de leituras e planos de aula conforme o nível dos alunos.",
  },
  {
    nome: "Socratic",
    url: "https://socrat.ai/",
    descricao: "Plataforma completa para criar turmas, tarefas e monitorar progresso.",
  },
  {
    nome: "TutorIA.me",
    url: "https://tutorai.me/",
    descricao: "Assistente para desenhar atividades personalizadas e revisar conteúdos.",
  },
  {
    nome: "AudioPen",
    url: "https://audiopen.ai/",
    descricao: "Transforma notas de voz em textos organizados para planejamento rápido.",
  },
  {
    nome: "Canva Magic Write",
    url: "https://www.canva.com/pt_br/gerador-de-textos/",
    descricao: "Gerador de textos dentro do Canva para roteiros e materiais didáticos.",
  },
  {
    nome: "Curipod",
    url: "https://curipod.com/lang/pt-BR",
    descricao: "Cria apresentações interativas e planos de aula colaborativos.",
  },
  {
    nome: "Eduaide.AI",
    url: "https://www.eduaide.ai/",
    descricao: "Workspace com prompts prontos para elaborar materiais pedagógicos.",
  },
  {
    nome: "Google AI for Educators",
    url: "https://grow.google/ai-for-educators/",
    descricao: "Hub de treinamentos e ferramentas de IA da Google para educadores.",
  },
  {
    nome: "Magic School",
    url: "https://www.magicschool.ai/",
    descricao: "Coleção de geradores de atividades e rubricas com IA.",
  },
  {
    nome: "Education Copilot",
    url: "https://educationcopilot.com/",
    descricao: "Assistente para criar planos de aula, rubricas e avaliações.",
  },
  {
    nome: "Teachy",
    url: "https://www.teachy.com.br/",
    descricao: "Ferramenta brasileira para montar planos de aula completos.",
  },
];

export const metadata = {
  title: "Ferramentas de IA para professores",
  description: "Seleção de IAs que ajudam educadores a planejar aulas, gerar quizzes e acompanhar estudantes.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ia-para-professores",
  },
};

export default function IaParaProfessores() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <AcademicCapIcon className="w-10 h-10 text-blue-500" />
        <h1 className="text-3xl font-bold">IA para Professores</h1>
      </div>
      <p className="mb-8 text-gray-600">
        Descubra ferramentas de inteligência artificial pensadas para educadores que precisam economizar tempo no
        planejamento e aumentar o engajamento em sala.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((ferramenta) => (
          <a
            key={ferramenta.nome}
            href={ferramenta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >
            <div className="font-semibold text-lg mb-1">{ferramenta.nome}</div>
            <div className="text-gray-500 text-sm">{ferramenta.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}


