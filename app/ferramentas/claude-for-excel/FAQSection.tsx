const faqs = [
  { q: "O que é o Claude for Excel?", a: "Claude for Excel é o add-in oficial da Anthropic que integra o Claude AI diretamente no Microsoft Excel para análise de dados e geração de fórmulas." },
  { q: "O Claude for Excel é diferente de usar o Claude.ai?", a: "Sim. O Claude for Excel tem contexto das células selecionadas na planilha, permitindo que o modelo trabalhe diretamente com seus dados." },
  { q: "Como instalo o Claude for Excel?", a: "O add-in pode ser instalado pela Microsoft AppSource ou pelo site oficial da Anthropic em claude.com/claude-for-excel." },
  { q: "O Claude for Excel requer uma assinatura separada?", a: "O uso do Claude no Excel está vinculado à sua conta Anthropic. Verifique os planos disponíveis no site para detalhes de cobrança." },
  { q: "O Claude for Excel funciona no Excel para Mac?", a: "Add-ins do Excel funcionam no Excel para Windows e Mac via Microsoft 365. Verifique os requisitos específicos no site." },
  { q: "O Claude for Excel funciona no Excel Online (navegador)?", a: "Add-ins do Microsoft Office geralmente funcionam no Excel Online também. Verifique a compatibilidade específica no site." },
  { q: "Posso pedir fórmulas complexas em português?", a: "Sim. Descreva o cálculo em português e o Claude escreve a fórmula Excel correta, incluindo funções aninhadas." },
  { q: "O Claude pode explicar fórmulas que eu não entendo?", a: "Sim. Selecione a célula com a fórmula e peça ao Claude para explicar passo a passo o que cada parte faz." },
  { q: "O Claude pode gerar macros VBA?", a: "Sim. Descreva a automação desejada e o Claude gera o código VBA correspondente, pronto para colar no editor." },
  { q: "O Claude consegue ver toda a planilha de uma vez?", a: "O Claude acessa o contexto das células selecionadas ou descrições que você fornecer. Planilhas muito grandes podem ter limitações." },
  { q: "Meus dados ficam seguros com o Claude for Excel?", a: "Os dados selecionados são enviados para os servidores da Anthropic. Não use com dados altamente confidenciais sem verificar a política." },
  { q: "O Claude for Excel pode criar tabelas dinâmicas?", a: "O Claude pode orientar a criação e sugerir estruturas de tabelas dinâmicas adequadas para o seu conjunto de dados." },
  { q: "O Claude pode analisar dados e identificar tendências?", a: "Sim. Compartilhe os dados e peça ao Claude para identificar padrões, outliers e tendências relevantes." },
  { q: "O Claude consegue fazer análise estatística no Excel?", a: "Sim. Geração de fórmulas para média, desvio padrão, correlação, regressão e outros cálculos estatísticos é bem suportada." },
  { q: "O Claude pode ajudar a limpar dados sujos?", a: "Sim. O Claude pode sugerir fórmulas e passos para identificar e corrigir dados duplicados, formatações inconsistentes e erros." },
  { q: "O Claude consegue criar gráficos automaticamente?", a: "O Claude pode orientar a criação de gráficos, mas a geração direta de objetos gráficos depende das capacidades do add-in." },
  { q: "O Claude for Excel funciona com o Google Sheets?", a: "Não. O Claude for Excel é específico para o Microsoft Excel. Para o Google Sheets, use o Claude via claude.ai ou API." },
  { q: "O Claude pode me ajudar a formatar planilhas?", a: "Sim. Formatação condicional, estilos e estrutura de layout podem ser orientados com fórmulas e instruções do Claude." },
  { q: "O Claude consegue concatenar e transformar texto no Excel?", a: "Sim. Fórmulas de texto como CONCAT, PROCV, SUBSTITUIR, ESQUERDA, DIREITA e combinações complexas são facilmente geradas." },
  { q: "Posso usar o Claude for Excel para análise financeira?", a: "Sim. VPL, TIR, análise de fluxo de caixa, cenários e outras análises financeiras são casos de uso frequentes." },
  { q: "O Claude pode ajudar a automatizar relatórios recorrentes?", a: "Sim. Com fórmulas dinâmicas e VBA, o Claude pode ajudar a construir modelos que se atualizam automaticamente." },
  { q: "O Claude consegue trabalhar com Power Query?", a: "O Claude pode orientar no uso do Power Query com código M e transformações de dados. Verifique o nível de suporte no add-in." },
  { q: "O Claude pode ajudar a fazer PROCV e PROCX?", a: "Sim. PROCV, PROCX e combinações com ÍNDICE/CORRESP são exemplos clássicos facilmente gerados pelo Claude." },
  { q: "Preciso de uma conta Microsoft 365 para usar?", a: "Sim. O Excel com suporte a add-ins requer uma assinatura Microsoft 365 ativa." },
  { q: "O Claude for Excel é adequado para iniciantes no Excel?", a: "Sim. É especialmente valioso para quem quer realizar análises avançadas sem dominar fórmulas complexas." },
  { q: "O Claude pode ajudar a criar dashboards no Excel?", a: "Sim. O Claude pode orientar a estrutura, fórmulas e formatação para construir dashboards executivos no Excel." },
  { q: "O Claude consegue trabalhar com arrays dinâmicos do Excel?", a: "Sim. Funções como FILTRAR, CLASSIFICAR, ÚNICO e outras funções de array dinâmico são bem suportadas pelo Claude." },
  { q: "O Claude pode ajudar a importar dados externos para o Excel?", a: "Sim. Consultas de dados externos, conexões com APIs e importação de arquivos podem ser orientadas pelo Claude." },
  { q: "Qual versão do Excel é necessária?", a: "Verifique os requisitos mínimos no site da Anthropic, mas geralmente Excel 2016 ou superior com Microsoft 365 é recomendado." },
  { q: "Como começo a usar o Claude for Excel?", a: "Instale o add-in pelo AppSource ou pelo site da Anthropic, abra o Excel, acesse o painel do Claude e conecte sua conta Anthropic." },
];

export default function FAQSection() {
  const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <h2 className="text-2xl font-bold text-black mb-6">Perguntas Frequentes sobre o Claude for Excel</h2>
      <div className="grid gap-3">
        {faqs.map((f, i) => (
          <details key={i} className="border border-zinc-200 rounded-lg bg-white overflow-hidden group" open={i < 5}>
            <summary className="w-full text-left px-5 py-4 font-medium text-black flex justify-between items-center hover:bg-zinc-50 transition cursor-pointer list-none">
              <span>{f.q}</span><span className="text-zinc-400 ml-4 flex-shrink-0"><span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span></span>
            </summary>
            <div className="px-5 pb-4 text-zinc-700 text-sm leading-relaxed">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
