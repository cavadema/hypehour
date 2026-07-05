import FAQSection from "./FAQSection";
import ComparativoFerramentas from "./ComparativoFerramentas";
import ComoEscolher from "./ComoEscolher";
import ProTips from "./ProTips";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import CategoryPageSchema from "@/app/components/CategoryPageSchema";
import ToolCard from "@/app/components/ToolCard";

const ferramentas = [
  {
    nome: "SciSpace",
    url: "/ferramentas/scispace",
    descricao: "Plataforma de IA para leitura, compreensão e pesquisa de artigos científicos — explica conceitos complexos, resume papers e responde dúvidas sobre qualquer estudo acadêmico.",
  },
  {
    nome: "Aristotle",
    url: "https://aristotle.harmonic.fun/",
    descricao: "IA para resolução de problemas matemáticos complexos sem alucinações.",
  },
  {
    nome: "Handshake AI",
    url: "https://joinhandshake.com/ai",
    descricao: "Conecta talentos acadêmicos a laboratórios de IA para melhorar modelos LLM.",
  },
  {
    nome: "Conker.AI",
    url: "/ferramentas/conker",
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
  {
    nome: "Learn Earth",
    url: "https://www.learn.earth/pt-BR",
    descricao: "Plataforma de aprendizado adaptativo IA-primeiro com trilhas personalizadas e prática interativa.",
  },
  {
    nome: "Oboe",
    url: "https://oboe.com/",
    descricao: "IA para criar cursos personalizados e interativos que ajudam você a aprender qualquer tema de forma envolvente e adaptada ao seu estilo.",
  },
  {
    nome: "Mathify",
    url: "https://mathify.dev/",
    descricao: "Ferramenta com IA para resolver, explicar e aprender matemática passo a passo.",
  },
  {
    nome: "Flexge — Exercícios com IA",
    url: "https://lp.flexge.com/exercicios-com-ia",
    descricao: "Gere exercícios e atividades automaticamente a partir de conteúdos.",
  },
];

export const metadata = {
  title: "Ferramentas de Inteligência Artificial para Professores",
  description: "Seleção de IAs que ajudam educadores a planejar aulas, gerar quizzes e acompanhar estudantes.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ia-para-professores",
  },
  openGraph: {
    title: "Ferramentas de Inteligência Artificial para Professores",
    description: "Seleção de IAs que ajudam educadores a planejar aulas, gerar quizzes e acompanhar estudantes.",
    url: "https://www.hypehour.com.br/ia-para-professores",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ferramentas de Inteligência Artificial para Professores",
    description: "Seleção de IAs que ajudam educadores a planejar aulas, gerar quizzes e acompanhar estudantes.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function IaParaProfessores() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-black transition-colors">Home</Link>
        <span>/</span>
        <span className="text-black font-medium">IA para Professores</span>
      </nav>
      <div className="flex items-center gap-3 mb-8">
        <AcademicCapIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Professores</h1>
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
        title="Ferramentas de Inteligência Artificial para Professores"
        description="Seleção de IAs que ajudam educadores a planejar aulas, gerar quizzes e acompanhar estudantes."
        canonicalUrl="https://www.hypehour.com.br/ia-para-professores"
        ferramentas={ferramentas}
      />
    </main>
  );
}


