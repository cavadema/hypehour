const tips = [
  { numero: "01", titulo: "Use IA para iteração e inspiração, não para entrega final sem revisão", descricao: "IA é excepcional para explorar direções e gerar rascunhos em minutos, mas os resultados finais ainda precisam de curadoria e refinamento humano para atingir a qualidade de entrega profissional." },
  { numero: "02", titulo: "Crie um style guide de prompts para projetos recorrentes", descricao: "Documente os prompts que geraram os melhores resultados para cada cliente ou tipo de projeto. Isso garante consistência nas gerações futuras e economiza tempo de iteração." },
  { numero: "03", titulo: "Verifique direitos autorais antes de usar em projetos comerciais", descricao: "As políticas de uso comercial variam por ferramenta. Adobe Firefly é treinado em conteúdo licenciado e é o mais seguro para uso comercial. Confirme os termos de cada plataforma antes de entregar ao cliente." },
  { numero: "04", titulo: "Combine geração de IA com habilidades tradicionais de design", descricao: "Os melhores resultados vêm de designers que usam IA como ferramenta de produção, não como substituto do pensamento criativo. A curadoria, composição e decisões estéticas ainda são diferenciais humanos." },
  { numero: "05", titulo: "Use IA para superar o bloqueio criativo, não apenas para produção", descricao: "Quando estiver sem ideias, gere dezenas de variações em poucos minutos para estimular o processo criativo. A IA não precisa gerar o resultado final — pode apenas desbloquear novas direções para explorar." },
];

export default function ProTips() {
  return (
    <div className="mt-10 mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Dicas para melhores resultados</h2>
      <div className="space-y-4">
        {tips.map((tip) => (
          <div key={tip.numero} className="flex gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
            <span className="text-2xl font-black text-gray-200 leading-none select-none">{tip.numero}</span>
            <div>
              <div className="font-semibold text-gray-900 mb-1">{tip.titulo}</div>
              <div className="text-sm text-gray-600">{tip.descricao}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
