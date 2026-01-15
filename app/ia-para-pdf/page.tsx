import { DocumentTextIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import FAQSection from "./FAQSection";

const ferramentas = [
  { nome: "Doctly", url: "https://doctly.ai/", descricao: "IA para ler, resumir e organizar PDFs com extração de dados segura." },
  { nome: "Docparser", url: "https://docparser.com/", descricao: "Extrai dados estruturados de PDFs e automatiza fluxos de documentos." },
  { nome: "ChatPDF", url: "/ferramentas/chatpdf", descricao: "Converse com seus PDFs em português para resumos e respostas rápidas." },
  { nome: "Smallpdf IA", url: "https://smallpdf.com/pt/ia-pdf", descricao: "Suite de IA para resumir, converter e editar PDFs online." },
  { nome: "UPDF AI", url: "https://ai.updf.com/br/features/summary/", descricao: "Leitura assistida, resumo e anotações com IA integrada." },
  { nome: "Jotform PDF IA", url: "https://www.jotform.com/pt/ai/pdf-summarizer/", descricao: "Resuma PDFs e gere insights diretamente de formulários e anexos." },
  { nome: "Decopy PDF", url: "https://decopy.ai/pt/pdf-summarizer/", descricao: "Gera resumos e pontos-chave de documentos longos." },
  { nome: "HiPDF AI Reader", url: "https://www.hipdf.com/pt/ai-read-pdf", descricao: "Leitura, resumo e conversão de PDFs com IA em português." },
  { nome: "Speechify PDF", url: "https://speechify.com/pt-br/onboarding/nc/general/use-case/", descricao: "Transforma PDFs em áudio e cria resumos automáticos." },
  { nome: "TextCortex PDF", url: "https://textcortex.com/pt/pdf-ai-alternative", descricao: "Resuma, traduza e reescreva PDFs com IA multilíngue." },
  { nome: "Soda PDF AI", url: "https://www.sodapdf.com/pt/chatpdf-ai/", descricao: "Chat com PDFs para perguntas, traduções e resumos rápidos." },
  { nome: "LightPDF", url: "/ferramentas/lightpdf", descricao: "Ferramentas de IA para ler, resumir e converter PDFs online." },
  { nome: "Monica PDF", url: "https://monica.im/pt_PT/webapp/doc-chat", descricao: "Chat IA para tirar dúvidas sobre documentos e gerar resumos." },
  { nome: "Wondershare PDF", url: "https://pdf.wondershare.com.br/app/home", descricao: "Suite completa de PDFs com IA para editar, resumir e organizar." },
  { nome: "DeepL PDF", url: "https://www.deepl.com/pt-BR/features/document-translation/pdf", descricao: "Tradução de PDFs com preservação de formatação e alta qualidade." },
  { nome: "Smartcat PDF", url: "https://pt.smartcat.com/translate-document/", descricao: "Tradução colaborativa de PDFs com IA e glossários." },
];

export const metadata = {
  title: "IA para PDS: resumir, ler, criar e traduzir",
  description: "Ferramentas de IA para PDFs: resuma, leia, traduza e extraia dados com automação completa.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ia-para-pdf",
  },
};

export default function IaParaPDF() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <DocumentTextIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para PDFs</h1>
      </div>
      <ExpandableContent />
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

      <FAQSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "O que é IA para PDFs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "IA para PDFs são ferramentas que usam inteligência artificial para ler, resumir, traduzir, criar e analisar arquivos em PDF automaticamente."
                }
              },
              {
                "@type": "Question",
                "name": "Para que serve uma IA para PDF?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ela serve para facilitar tarefas como leitura, resumo, extração de informações e edição de PDFs."
                }
              },
              {
                "@type": "Question",
                "name": "O que é uma IA que resume PDF?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "É uma ferramenta que analisa o conteúdo do PDF e gera um resumo automático dos principais pontos."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDFs funciona com arquivos grandes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Muitas ferramentas conseguem processar PDFs longos, como livros e relatórios."
                }
              },
              {
                "@type": "Question",
                "name": "Existe leitor de PDF com IA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Um leitor de PDF IA permite fazer perguntas sobre o documento e obter respostas instantâneas."
                }
              },
              {
                "@type": "Question",
                "name": "IA para traduzir PDF mantém a formatação?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Na maioria dos casos, sim. A IA traduz o texto preservando a estrutura do arquivo."
                }
              },
              {
                "@type": "Question",
                "name": "IA para criação de PDF funciona como editor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Algumas ferramentas criam PDFs do zero ou a partir de texto e outros arquivos."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDFs é gratuita?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Existem opções gratuitas, geralmente com limites de uso."
                }
              },
              {
                "@type": "Question",
                "name": "Usar IA para PDFs é seguro?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, desde que você evite enviar documentos sensíveis para ferramentas não confiáveis."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDFs funciona em português?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Muitas ferramentas já oferecem suporte ao português."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDF ajuda estudantes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. É muito usada para resumir artigos, livros e materiais acadêmicos."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDFs é útil para empresas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ajuda em contratos, relatórios, propostas e documentos internos."
                }
              },
              {
                "@type": "Question",
                "name": "IA que resume PDF substitui a leitura completa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não totalmente, mas ajuda a entender rapidamente os pontos principais."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDFs pode extrair dados automaticamente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ela identifica textos, tabelas e informações relevantes."
                }
              },
              {
                "@type": "Question",
                "name": "Vale a pena usar IA para PDFs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Economiza tempo e facilita o trabalho com documentos."
                }
              },
              {
                "@type": "Question",
                "name": "Qual a melhor IA para resumir PDF?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Depende do tipo de documento, mas ferramentas modernas já oferecem resumos precisos."
                }
              },
              {
                "@type": "Question",
                "name": "Dá para conversar com um PDF usando IA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Alguns leitores de PDF IA permitem fazer perguntas ao documento."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDF funciona com PDFs escaneados?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, desde que tenha OCR integrado."
                }
              },
              {
                "@type": "Question",
                "name": "IA consegue traduzir PDF automaticamente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. A IA identifica o idioma e traduz o conteúdo."
                }
              },
              {
                "@type": "Question",
                "name": "IA para traduzir PDF é gratuita?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Algumas ferramentas oferecem tradução gratuita com limitações."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDFs funciona offline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Geralmente não. A maioria depende de conexão com a internet."
                }
              },
              {
                "@type": "Question",
                "name": "IA pode resumir PDF em poucos segundos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. O resumo costuma ser gerado rapidamente."
                }
              },
              {
                "@type": "Question",
                "name": "Leitor de PDF IA substitui o Adobe Reader?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não. Ele complementa, oferecendo recursos inteligentes."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDFs funciona em dispositivos móveis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Muitas ferramentas são acessíveis via navegador no celular."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDFs ajuda em contratos jurídicos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. É muito usada para leitura e análise de contratos."
                }
              },
              {
                "@type": "Question",
                "name": "IA para criação de PDF pode gerar relatórios automaticamente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Basta informar os dados ou o texto desejado."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDF entende tabelas e gráficos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Muitas ferramentas analisam tabelas e dados estruturados."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDFs pode corrigir erros no texto?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ela pode sugerir correções e melhorias."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDFs funciona para equipes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Especialmente quando integrada a ferramentas colaborativas."
                }
              },
              {
                "@type": "Question",
                "name": "IA para PDFs vale a pena para profissionais?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. É útil para advogados, estudantes, analistas e gestores."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
