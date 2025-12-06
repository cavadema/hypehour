import { CodeBracketIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import FAQSection from "./FAQSection";

export const metadata = {
  title: "Ferramentas de Inteligência Artificial para vibe coding - Hypehour",
  description: "Ferramentas e IAs para acelerar seu fluxo de desenvolvimento: editores, assistentes e automações.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/ia-para-vibe-coding',
  },
};

const ferramentas = [
  { nome: "Lovable", url: "https://lovable.dev/", descricao: "IA para programação, resumos e automações." },
  { nome: "Bolt.new", url: "https://bolt.new/", descricao: "Ferramenta para acelerar desenvolvimento e automações." },
  { nome: "v0", url: "https://v0.dev/", descricao: "Plataforma para criação rápida de interfaces e automações." },
  { nome: "Replit", url: "https://replit.com", descricao: "IDE online com recursos colaborativos e assistentes de código." },
  { nome: "Base44", url: "https://base44.com", descricao: "Ferramenta/infra de IA para criar apps completos." },
  { nome: "Trae", url: "https://trae.ai", descricao: "IDE adaptativo com IA da ByteDance." },
  { nome: "Cursor", url: "https://www.cursor.com", descricao: "IDE com assistente de código e recursos AI." },
  { nome: "Tempo", url: "https://tempo.new", descricao: "Ferramenta focada em produtividade para devs React." },
  { nome: "Create", url: "https://www.create.xyz", descricao: "Ferramenta de geração de apps via prompt." },
  { nome: "Google AI Studio", url: "https://aistudio.google.com/", descricao: "Plataforma de ferramentas AI do Google (Studio)." },
  { nome: "Cody", url: "https://www.sourcegraph.com/cody", descricao: "Assistente de código da Sourcegraph." },
  { nome: "Google Gemini Code Assist", url: "https://ai.google.dev/", descricao: "Assistente de codificação inteligente do Google com modelos Gemini." },
  { nome: "Warp AI", url: "https://www.warp.dev/", descricao: "Terminal moderno reimaginado com IA integrada." },
  { nome: "Aider", url: "https://aider.chat/", descricao: "Programação em par com IA diretamente no seu terminal." },
  { nome: "Continue.dev", url: "https://www.continue.dev/", descricao: "Extensão open-source para IDE com piloto automático de código." },
  { nome: "FastShot", url: "https://fastshot.ai/", descricao: "Crie apps móveis nativos 100x mais rápido sem código, apenas com prompts de IA." },
  { nome: "Skip", url: "https://www.goskip.dev/", descricao: "O Lovable brasileiro. Transforme ideias em aplicações web completas com IA." },
  { nome: "Deco", url: "https://www.decocms.com/", descricao: "Plataforma MCP-native para criar apps AI full-stack com governança integrada." },
];

export default function IaParaVibeCoding() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
        <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
      </Link>
      <div className="flex items-center gap-3 mb-8">
        <CodeBracketIcon className="w-10 h-10 text-gray-900" />
        <h1 className="text-3xl font-bold">IA para Vibe Coding</h1>
      </div>
      <p className="mb-8 text-gray-600">Ferramentas que ajudam no fluxo de desenvolvimento, automações e geração de código.</p>
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
                "name": "O que é vibe coding com IA?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vibe coding é a prática de programar acompanhado de uma IA que auxilia em tempo real, sugerindo código, corrigindo erros, otimizando funções e acelerando o fluxo criativo do desenvolvedor."
                }
              },
              {
                "@type": "Question",
                "name": "Qual é a melhor IA para vibe coding hoje?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As principais IAs usadas em vibe coding são Cursor, GitHub Copilot, Codeium, Windsurf, Cline, Aider e Warp AI, variando conforme linguagem, velocidade e profundidade de análise."
                }
              },
              {
                "@type": "Question",
                "name": "IA pode realmente melhorar a produtividade na programação?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ferramentas de IA reduzem tempo de debug, geram código completo e automatizam tarefas repetitivas, aumentando a produtividade em até cinco vezes dependendo do fluxo de trabalho."
                }
              },
              {
                "@type": "Question",
                "name": "Qual a melhor IA para criar códigos do zero?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As melhores IAs para gerar código do zero são Cursor, Cline, Copilot e Windsurf, pois entendem projetos completos e escrevem arquivos inteiros com coerência."
                }
              },
              {
                "@type": "Question",
                "name": "IA para programar é indicada para iniciantes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. IAs ajudam iniciantes a aprender sintaxe, explicar erros, sugerir melhorias e ensinar boas práticas de forma orientada e personalizada."
                }
              },
              {
                "@type": "Question",
                "name": "IA substitui um programador?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Não. A IA acelera a escrita de código, mas não substitui o raciocínio, arquitetura, análise e decisões técnicas dependentes de um profissional humano."
                }
              },
              {
                "@type": "Question",
                "name": "Quais IAs são compatíveis com múltiplas linguagens de programação?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cursor, Copilot, Codeium e Windsurf suportam dezenas de linguagens como Python, JavaScript, C#, Java, Go e SQL."
                }
              },
              {
                "@type": "Question",
                "name": "Qual IA é melhor para projetos grandes e complexos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cursor e Windsurf são líderes nesse cenário, pois analisam repositórios completos, entendem dependências e geram novas features dentro da estrutura existente."
                }
              },
              {
                "@type": "Question",
                "name": "IA pode ajudar no debug de código?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. As melhores IAs identificam erros, simulam cenários e sugerem correções corretas, reduzindo o tempo gasto em depuração."
                }
              },
              {
                "@type": "Question",
                "name": "IA para programação funciona offline?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A maioria funciona online, mas algumas ferramentas começam a oferecer modelos locais via GPU, permitindo uso offline parcial."
                }
              },
              {
                "@type": "Question",
                "name": "Como escolher a melhor IA para vibe coding?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Considere sua linguagem de programação, o tamanho dos projetos, velocidade de resposta, recursos de automação, custo e integração com IDEs."
                }
              },
              {
                "@type": "Question",
                "name": "Qual IA para programar é mais barata ou gratuita?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Codeium, Aider e Cline oferecem planos gratuitos robustos e são ótimas opções para quem busca custo baixo ou zero."
                }
              },
              {
                "@type": "Question",
                "name": "IA pode criar interfaces e front-end automaticamente?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. IAs como Cursor e Copilot geram componentes React, HTML, Tailwind e páginas completas com responsividade."
                }
              },
              {
                "@type": "Question",
                "name": "IA consegue ler e entender meu repositório inteiro?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ferramentas como Cursor e Windsurf analisam a árvore de arquivos e escrevem novas funções sem quebrar o projeto."
                }
              },
              {
                "@type": "Question",
                "name": "IA para vibe coding é segura para projetos privados?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, desde que você use ferramentas com políticas de privacidade adequadas, modelos locais ou planos enterprise com isolamento de dados."
                }
              },
              {
                "@type": "Question",
                "name": "O que uma IA para programar faz?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Uma IA para programar sugere código, corrige erros, explica funções e automatiza tarefas de desenvolvimento."
                }
              },
              {
                "@type": "Question",
                "name": "IA para vibe coding ajuda no aprendizado?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ela explica conceitos, sugere soluções e mostra caminhos mais eficientes para resolver problemas."
                }
              },
              {
                "@type": "Question",
                "name": "Qual IA gera código mais rápido?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cursor e Codeium são conhecidas pela velocidade na geração de código e criação de arquivos completos."
                }
              },
              {
                "@type": "Question",
                "name": "IA pode escrever uma aplicação inteira?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim, dependendo da complexidade. A IA pode criar arquivos, rotas, módulos e funções completas."
                }
              },
              {
                "@type": "Question",
                "name": "Qual IA é melhor para quem usa JavaScript?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cursor e Copilot são as mais precisas em JavaScript, TypeScript, React e Node.js."
                }
              },
              {
                "@type": "Question",
                "name": "Existe IA para programar de graça?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Codeium, Aider e Cline oferecem recursos gratuitos avançados para programação."
                }
              },
              {
                "@type": "Question",
                "name": "IA ajuda a organizar código bagunçado?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ela refatora o código, limpa funções e melhora a estrutura geral do projeto."
                }
              },
              {
                "@type": "Question",
                "name": "IA de vibe coding funciona para backend?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ela cria APIs, integra bancos de dados, gera rotas e produz testes automáticos."
                }
              },
              {
                "@type": "Question",
                "name": "Qual IA entende melhor o contexto do repositório?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "O Cursor é uma das IAs com melhor compreensão de repositórios completos e arquivos interligados."
                }
              },
              {
                "@type": "Question",
                "name": "IA pode escrever testes automatizados?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ela gera testes unitários, mocks e cenários completos para o projeto."
                }
              },
              {
                "@type": "Question",
                "name": "Dá para usar IA para programar direto no navegador?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Codeium Web, Replit e Windsurf oferecem interfaces web para programar com IA."
                }
              },
              {
                "@type": "Question",
                "name": "IA consegue converter código de uma linguagem para outra?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ela traduz funções e módulos entre linguagens como Python, Java, Go e C#."
                }
              },
              {
                "@type": "Question",
                "name": "Qual IA é melhor para quem gosta de vibe coding visual?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Windsurf e Cursor são populares entre quem prefere fluxos mais visuais e fluidos."
                }
              },
              {
                "@type": "Question",
                "name": "IA consegue explicar código linha por linha?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ela detalha cada linha, a lógica usada e possíveis melhorias."
                }
              },
              {
                "@type": "Question",
                "name": "IA ajuda a documentar projetos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sim. Ela gera documentação automática, comentários e arquivos README completos."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}
