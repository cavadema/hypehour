import { TableCellsIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ExpandableContent from "./ExpandableContent";
import FAQSection from "./FAQSection";

const ferramentas = [
  {
    nome: "Lido",
    url: "https://www.lido.app/",
    descricao: "Extraia dados de PDFs e documentos automaticamente para planilhas estruturadas e fluxos de automação.",
  },
  { nome: "Pane", url: "https://paneapp.com/", descricao: "Simplifica o trabalho com planilhas e dados usando agentes de IA de última geração." },
  { nome: "Quadratic", url: "https://www.quadratichq.com/", descricao: "Torna o trabalho com planilhas simples, com resultados impressionantes. Adicione dados, faça perguntas, transforme, analise, visualize e compartilhe." },
  { nome: "Shortcut", url: "https://www.tryshortcut.ai/", descricao: "Automatiza tarefas de Excel/Sheets com IA, gerando fórmulas e análises." },
  { nome: "Sheets Organizer", url: "https://www.sheetsorganizer.com/", descricao: "Automatize planilhas e dashboards com IA para relatórios e análises." },
  { nome: "GPT Excel", url: "https://gptexcel.uk/", descricao: "Use IA para criar fórmulas, funções e macros automaticamente no Excel." },
  { nome: "Ajelix", url: "https://ajelix.com/", descricao: "Plataforma de IA para gerar fórmulas, explicar código e automação de planilhas." },
  { nome: "Sheet AI", url: "https://www.sheetai.app/pt", descricao: "Plugin de IA para Google Sheets que automatiza tarefas e análises de dados." },
  { nome: "Coefficient", url: "https://coefficient.io/ai", descricao: "Conecta suas planilhas com dados em tempo real usando IA." },
  { nome: "Excelmatic", url: "/ferramentas/excelmatic", descricao: "Gerador de fórmulas e automação para Excel com inteligência artificial." },
  { nome: "Zoho Sheet", url: "https://www.zoho.com/pt-br/sheet/", descricao: "Planilha colaborativa com IA para análise de dados e relatórios." },
  { nome: "Sheet Magic", url: "https://sheetmagic.ai/", descricao: "Assistente de IA para Google Sheets com automação e geração de fórmulas." },
  { nome: "FormulasHQ", url: "https://formulashq.com/", descricao: "Plataforma para criar e compartilhar fórmulas de Excel com IA." },
  { nome: "Softr Formula Generator", url: "https://www.softr.io/tool-formula-generator-google-sheets", descricao: "Gerador de fórmulas para Google Sheets com IA integrada." },
];

export const metadata = {
  title: "IA para Criar Planilhas | Ferramentas de IA para Excel e Google Sheets",
  description: "Descubra as melhores ferramentas de IA para criar, automatizar e analisar planilhas no Excel e Google Sheets.",
  alternates: {
    canonical: "https://www.hypehour.com.br/ia-para-planilhas",
  },
};

export default function IaParaPlanilhas() {
  return (
    <main className="max-w-6xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <TableCellsIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Planilhas</h1>
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
                "name": "O que é IA para planilhas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "IA para planilhas são ferramentas que usam inteligência artificial para criar, editar e analisar planilhas automaticamente."
                }
              },
              {
                "@type": "Question",
                "name": "Para que serve uma IA que faz planilha?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ela serve para gerar planilhas prontas a partir de comandos em texto, economizando tempo e reduzindo erros."
                }
              },
              {
                "@type": "Question",
                "name": "É possível criar planilha com IA sem saber Excel?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Basta descrever o que você precisa e a IA cria a estrutura da planilha automaticamente."
                }
              },
              {
                "@type": "Question",
                "name": "IA para criar planilhas funciona no Excel e Google Sheets?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Muitas ferramentas de IA para planilhas são compatíveis com Excel e Google Sheets."
                }
              },
              {
                "@type": "Question",
                "name": "Existe IA para criar planilhas grátis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Algumas IAs oferecem planos gratuitos ou versões com uso limitado."
                }
              },
              {
                "@type": "Question",
                "name": "Criar planilha com IA é seguro?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, desde que você evite inserir dados sensíveis em ferramentas não confiáveis."
                }
              },
              {
                "@type": "Question",
                "name": "IA para planilhas ajuda em análise de dados?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. A IA pode criar fórmulas, gráficos e análises automaticamente."
                }
              },
              {
                "@type": "Question",
                "name": "IA que faz planilha cria fórmulas automaticamente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. A IA gera fórmulas com base no objetivo informado pelo usuário."
                }
              },
              {
                "@type": "Question",
                "name": "IA para criar planilhas substitui analistas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não. Ela acelera tarefas, mas não substitui a análise humana."
                }
              },
              {
                "@type": "Question",
                "name": "IA para planilhas é indicada para empresas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. É muito usada em finanças, vendas, marketing e operações."
                }
              },
              {
                "@type": "Question",
                "name": "Criar planilha com IA reduz erros manuais?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Automatizar fórmulas e estruturas reduz falhas comuns."
                }
              },
              {
                "@type": "Question",
                "name": "IA para planilhas pode criar dashboards?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Algumas ferramentas geram gráficos e dashboards automaticamente."
                }
              },
              {
                "@type": "Question",
                "name": "IA que faz planilha funciona em português?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Muitas ferramentas já entendem comandos em português."
                }
              },
              {
                "@type": "Question",
                "name": "IA para criar planilhas é útil para estudantes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ajuda em trabalhos acadêmicos, controle financeiro e organização."
                }
              },
              {
                "@type": "Question",
                "name": "Vale a pena usar IA para criar planilhas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ela aumenta a produtividade e facilita o uso de planilhas."
                }
              },
              {
                "@type": "Question",
                "name": "Qual a melhor IA para criar planilhas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Depende do objetivo, mas ferramentas modernas já oferecem criação automática de planilhas."
                }
              },
              {
                "@type": "Question",
                "name": "IA consegue criar planilha financeira automaticamente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Basta informar o tipo de controle financeiro desejado."
                }
              },
              {
                "@type": "Question",
                "name": "Dá para criar planilha no Google Sheets com IA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Muitas IAs integram diretamente com o Google Sheets."
                }
              },
              {
                "@type": "Question",
                "name": "IA para planilhas cria fórmulas complexas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ela pode criar fórmulas avançadas e condicionais."
                }
              },
              {
                "@type": "Question",
                "name": "Criar planilha com IA é realmente gratuito?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Algumas ferramentas oferecem uso gratuito com limitações."
                }
              },
              {
                "@type": "Question",
                "name": "IA para criar planilhas funciona offline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não. Normalmente é necessário ter conexão com a internet."
                }
              },
              {
                "@type": "Question",
                "name": "IA que faz planilha entende dados em texto?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ela converte texto em colunas, fórmulas e estruturas de planilha."
                }
              },
              {
                "@type": "Question",
                "name": "IA pode corrigir erros em planilhas existentes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. A IA analisa planilhas e sugere correções."
                }
              },
              {
                "@type": "Question",
                "name": "IA para planilhas ajuda em controle de gastos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. É um dos usos mais comuns desse tipo de ferramenta."
                }
              },
              {
                "@type": "Question",
                "name": "Criar planilha com IA economiza quanto tempo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Em muitos casos, economiza horas de trabalho manual."
                }
              },
              {
                "@type": "Question",
                "name": "IA para planilhas é melhor que templates prontos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. A IA cria planilhas personalizadas sob demanda."
                }
              },
              {
                "@type": "Question",
                "name": "IA consegue explicar fórmulas de planilhas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Muitas ferramentas explicam o funcionamento das fórmulas."
                }
              },
              {
                "@type": "Question",
                "name": "IA para criar planilhas funciona para equipes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Especialmente quando integrada a ferramentas colaborativas."
                }
              },
              {
                "@type": "Question",
                "name": "IA que faz planilha pode gerar gráficos automaticamente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Gráficos são criados automaticamente com base nos dados."
                }
              },
              {
                "@type": "Question",
                "name": "IA para planilhas vale a pena para pequenas empresas?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ajuda a organizar dados sem necessidade de especialistas."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
