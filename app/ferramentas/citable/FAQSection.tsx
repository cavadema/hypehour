const faqs = [
  { q: "O que é o Citable?", a: "Citable é uma plataforma de marketing de visibilidade em IA que ajuda marcas a serem citadas por ChatGPT, Claude, Perplexity e outros assistentes." },
  { q: "O que é GEO (Generative Engine Optimization)?", a: "GEO é a otimização de conteúdos para aparecer nas respostas de modelos de linguagem, assim como o SEO otimiza para buscadores tradicionais." },
  { q: "Por que ser citado por IAs importa para o marketing?", a: "Cada vez mais pessoas fazem pesquisas em assistentes de IA em vez do Google. Ser mencionado nessas respostas gera descoberta de marca." },
  { q: "Como o Citable mede minha visibilidade em IAs?", a: "O Citable testa automaticamente como ChatGPT, Claude e Perplexity respondem perguntas do seu nicho e verifica se sua marca aparece." },
  { q: "O Citable funciona para qualquer nicho?", a: "Sim. Qualquer marca com conteúdo publicado pode ser monitorada e otimizada para visibilidade em assistentes de IA." },
  { q: "Como o Citable ajuda meu conteúdo a ser citado?", a: "A plataforma fornece recomendações sobre estrutura, formato e profundidade de conteúdo que aumentam a probabilidade de citação pelos modelos." },
  { q: "O Citable funciona para empresas B2B?", a: "Especialmente bem. O mercado B2B é um dos que mais pesquisa em IAs antes de tomar decisões de compra." },
  { q: "Quanto tempo leva para ver resultados com o Citable?", a: "GEO é uma estratégia de médio prazo. Os modelos de IA são atualizados periodicamente, e os resultados aparecem ao longo de semanas ou meses." },
  { q: "O Citable monitora todos os assistentes de IA?", a: "O Citable monitora os principais assistentes. Consulte o site para a lista completa de modelos rastreados." },
  { q: "O Citable tem plano gratuito?", a: "Consulte getcitable.com para informações atualizadas sobre planos disponíveis e o que está incluso em cada tier." },
  { q: "O Citable substitui o SEO tradicional?", a: "Não. O Citable complementa o SEO, adicionando um novo canal de visibilidade. Ambas as estratégias coexistem e se reforçam." },
  { q: "O Citable monitora concorrentes também?", a: "Sim. A análise competitiva mostra com que frequência concorrentes são citados nas mesmas perguntas relevantes para o seu negócio." },
  { q: "Como o Citable decide quais perguntas monitorar?", a: "A plataforma identifica perguntas relevantes para o seu nicho e marca, e você pode personalizar a lista conforme sua estratégia." },
  { q: "O Citable pode ajudar pequenas empresas?", a: "Sim. Para nichos específicos, pequenas empresas com conteúdo de qualidade podem superar grandes marcas na visibilidade em IA." },
  { q: "O que devo fazer para aumentar as citações em IA?", a: "O Citable orienta: crie conteúdo autoritativo e factual, use dados e fontes confiáveis, estruture bem os textos e responda perguntas específicas." },
  { q: "O Citable ajuda com a estratégia de conteúdo?", a: "Sim. Identificando quais perguntas geram citações da concorrência mas não da sua marca, o Citable orienta onde criar conteúdo novo." },
  { q: "O Citable pode ser integrado ao meu CMS?", a: "Verifique as integrações disponíveis no site. Algumas plataformas oferecem conexão com WordPress, HubSpot e outras ferramentas." },
  { q: "O Citable funciona para e-commerce?", a: "Sim. Marcas de e-commerce que aparecem nas recomendações de produtos dos assistentes de IA capturam tráfego qualificado." },
  { q: "Como sei se meus textos estão otimizados para GEO?", a: "O Citable avalia seus conteúdos e indica quais ajustes aumentariam a probabilidade de citação pelos modelos de IA." },
  { q: "O Citable tem relatórios periódicos?", a: "Sim. A plataforma gera relatórios de share of voice em IA com comparativos de evolução ao longo do tempo." },
  { q: "O Citable ajuda com Wikipedia e outras fontes que IAs usam?", a: "O Citable orienta sobre a importância de presença em fontes autoritativas que os modelos de IA utilizam como referência." },
  { q: "O Citable monitora apenas modelos pagos ou também os gratuitos?", a: "Consulte o site para a lista de modelos monitorados. A cobertura pode variar conforme o plano." },
  { q: "O Citable tem suporte em português?", a: "Verifique o site para informações sobre suporte ao idioma na interface e nos relatórios da plataforma." },
  { q: "O que diferencia o Citable de outras ferramentas de SEO?", a: "O Citable foca exclusivamente em visibilidade em assistentes de IA generativa, um canal que ferramentas de SEO tradicionais não cobrem." },
  { q: "O Citable funciona para startups?", a: "Sim. Startups que constroem autoridade de nicho desde cedo têm mais facilidade de aparecer nas respostas dos assistentes." },
  { q: "O Citable pode monitorar menções de produtos específicos?", a: "Sim. Além da marca, é possível monitorar menções de produtos ou serviços específicos nos assistentes." },
  { q: "O Citable tem API para integração com outras ferramentas?", a: "Verifique a documentação do Citable para informações sobre disponibilidade de API para integrações avançadas." },
  { q: "Como os modelos de IA escolhem quais fontes citar?", a: "Modelos citam fontes que aparecem em seus dados de treinamento, fontes autoritativas, bem estruturadas e frequentemente referenciadas." },
  { q: "O Citable funciona para conteúdo em vídeo?", a: "Principalmente para conteúdo textual. Transcrições e artigos baseados em vídeos podem ser otimizados para citação." },
  { q: "Como começo a usar o Citable?", a: "Acesse getcitable.com, crie uma conta, informe sua marca e nicho, e execute a primeira auditoria de visibilidade em IA." },
];

export default function FAQSection() {
  const schemaData = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <h2 className="text-2xl font-bold text-black mb-6">Perguntas Frequentes sobre o Citable</h2>
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
