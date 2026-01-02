import { AcademicCapIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";
import ExpandableContent from "./ExpandableContent";

const cursos = [
  { nome: "Escola Virtual Gov.br", url: "https://www.escolavirtual.gov.br/curso/861", descricao: "Curso gratuito de IA oferecido pelo Governo Federal." },
  { nome: "Inteligência Artificial e o Novo Contexto da Cultura Digital", url: "https://www.ev.org.br/cursos/inteligencia-artificial-e-o-novo-contexto-da-cultura-digital", descricao: "Curso sobre IA e cultura digital oferecido pela Fundação Getúlio Vargas." },
  { nome: "Inteligência Artificial na Alura", url: "https://www.alura.com.br/cursos-online-inteligencia-artificial", descricao: "Aprenda IA com cursos práticos e estruturados da Alura." },
  { nome: "Inteligência artificial gratuito da IBM", url: "https://skillsbuild.org/pt-br/students/course-catalog/artificial-intelligence", descricao: "Curso gratuito da IBM para aprender conceitos de IA." },
  { nome: "Centro Paula Souza", url: "https://www.cps.sp.gov.br/cps-lanca-curso-livre-online-gratuito-sobre-inteligencia-artificial/", descricao: "Curso livre online gratuito sobre inteligência artificial." },
  { nome: "Oracle + Alura", url: "https://app.aluracursos.com/form-one/registro/br-geral/brazil/cerrado", descricao: "Parceria Oracle e Alura para cursos de tecnologia e IA." },
  { nome: "IA para todos - StartSe e IBM", url: "https://lp.startse.com/ia-para-todos/", descricao: "Curso introdutório de IA para todos os públicos." },
  { nome: "Machine Learning, IA Generativa da FIAP", url: "https://www.fiap.com.br/graduacao/tecnologo/inteligencia-artificial/", descricao: "Graduação tecnológica em IA pela FIAP." },
  { nome: "Insper e AWS", url: "https://ee.insper.edu.br/cursos/tecnologia-data-science/inteligencia-artificial-e-seus-impactos-nos-negocios-e-na-sociedade/", descricao: "Curso sobre IA e seus impactos nos negócios e sociedade." },
  { nome: "Fundamentos para uma Carreira em IA Generativa por Microsoft e LinkedIn", url: "https://br.linkedin.com/learning/paths/fundamentos-para-uma-carreira-em-ia-generativa-por-microsoft-e-linkedin", descricao: "Fundamentos de IA generativa para carreira profissional." },
  { nome: "Visão geral do Copilot no Power Apps", url: "https://learn.microsoft.com/pt-br/power-apps/maker/canvas-apps/ai-overview", descricao: "Aprenda a usar Copilot no Power Apps." },
  { nome: "Transformar sua empresa com IA - Microsoft", url: "https://learn.microsoft.com/pt-br/training/paths/transform-your-business-with-microsoft-ai/", descricao: "Treinamento Microsoft para transformação empresarial com IA." },
  { nome: "Criar modelos de machine learning - Microsoft", url: "https://learn.microsoft.com/pt-br/training/paths/create-machine-learn-models/", descricao: "Aprenda a criar modelos de machine learning." },
  { nome: "Essential AI skills for everyone do Google", url: "https://grow.google/ai/", descricao: "Habilidades essenciais de IA para todos do Google." },
  { nome: "Prepara IA", url: "https://prepara.com.br/", descricao: "Plataforma de cursos e preparação em IA." },
  { nome: "MBA em IA e Dados para Negócios", url: "https://web.inteli.edu.br/mba-inteli", descricao: "MBA focado em IA e dados para negócios." },
  { nome: "Diversos cursos Google", url: "https://grow.google/intl/pt/courses-and-tools/", descricao: "Diversos cursos e ferramentas do Google." },
  { nome: "DataCamp", url: "https://www.datacamp.com/pt/category/artificial-intelligence", descricao: "Plataforma com cursos práticos de IA e ciência de dados." },
  { nome: "IA na Prática do Sebrae", url: "https://sebrae.com.br/sites/PortalSebrae/cursosonline/ia-na-pratica-para-pequenos-negocios,bbdd9278376b4910VgnVCM1000001b00320aRCRD", descricao: "Curso do Sebrae sobre IA na prática para pequenos negócios." },
  { nome: "Transforme seu negócio com Inteligência Artificial - EBAC", url: "https://ebaconline.com.br/inteligencia-artificial-para-negocios", descricao: "Curso EBAC sobre transformação de negócios com IA." },
  { nome: "OpenAI Academy", url: "https://openai.com/pt-BR/academy/", descricao: "Academia da OpenAI com cursos e recursos sobre IA." },
  { nome: "Google Skills", url: "https://www.skills.google/?locale=pt_BR", descricao: "Plataforma do Google com treinamentos, certificações e selos de habilidade em IA e Cloud." },
];

export const metadata = {
  title: "Cursos de IA gratuitos e pagos",
  description: "Descubra os melhores cursos de Inteligência Artificial gratuitos e pagos para impulsionar sua carreira e aprender IA do zero ao avançado.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/cursos-de-ia',
  },
};

export default function CursosDeIA() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <AcademicCapIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">Cursos de IAs</h1>
      </div>
      <ExpandableContent />
      <div className="grid gap-6 sm:grid-cols-2">
        {cursos.map((curso) => (
          <a
            key={curso.nome}
            href={curso.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100"
          >
            <h2 className="font-semibold text-lg mb-1">{curso.nome}</h2>
            <div className="text-gray-500 text-sm">{curso.descricao}</div>
          </a>
        ))}
      </div>
      <FAQSection />
    </main>
  );
}
