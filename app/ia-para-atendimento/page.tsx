import { PhoneIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";

export const metadata = {
  title: "Atendimento com Inteligencia Artificial",
  description: "Ferramentas com IA para melhorar atendimento ao cliente, automatizar respostas e aumentar satisfação.",
  alternates: { canonical: "https://www.hypehour.com.br/ia-para-atendimento" },
};

const ferramentas = [
  { nome: "Robbu", url: "https://robbu.global/", descricao: "Plataforma de automação de atendimento com IA para otimizar suporte ao cliente." },
  { nome: "Helploom", url: "https://helploom.com/", descricao: "Plataforma de atendimento com IA para automação e gestão integrada." },
  { nome: "Gladly", url: "https://www.gladly.ai/hp1/", descricao: "Transforma o atendimento ao cliente em suporte inteligente, automatizado e personalizado em todos os canais." },
  { nome: "Darwin", url: "https://www.getdarwin.ai/pt", descricao: "Criar funcionários-IA que respondem clientes em canais como WhatsApp, Instagram e ligações, qualificam leads, atualizam CRMs." },
  { nome: "CallRail Voice Assist", url: "https://www.callrail.com/voice-assist", descricao: "Assistente de voz com IA para melhorar chamadas de atendimento com respostas inteligentes." },
  { nome: "Contentsquare", url: "https://contentsquare.com/", descricao: "Plataforma de experiência digital com IA para otimizar jornada de atendimento." },
  { nome: "Poly.ai", url: "https://poly.ai/", descricao: "Assistente de voz com IA para atendimento ao cliente por telefone e canais digitais." },
  { nome: "Keplar Voice", url: "https://www.keplar.io/voice", descricao: "Agente de voz com IA para atendimento em chamadas." },
  { nome: "Intercom", url: "https://www.intercom.com/", descricao: "Plataforma de atendimento ao cliente com IA para chatbots e suporte automatizado." },
  { nome: "NeoAgent", url: "https://neoagent.co/", descricao: "Assistência ao cliente com IA 24/7 para WhatsApp, web e telefone." },
];

export default function IAParaAtendimento() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <PhoneIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para atendimento</h1>
      </div>
      <ExpandableContent />
      <div className="grid gap-6 sm:grid-cols-2">
        {ferramentas.map((f) => (
          <a key={f.nome} href={f.url} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100">
            <h2 className="font-semibold text-lg mb-1">{f.nome}</h2>
            <div className="text-gray-500 text-sm">{f.descricao}</div>
          </a>
        ))}
      </div>
    </main>
  );
}
