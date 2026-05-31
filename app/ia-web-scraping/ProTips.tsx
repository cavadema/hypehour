const tips = [
  { numero: "01", titulo: "Verifique os termos de uso antes de fazer scraping de qualquer site", descricao: "Muitos sites proíbem scraping nos termos de uso. Sempre verifique o arquivo robots.txt e os termos de serviço antes de automatizar a coleta de dados para evitar bloqueios e problemas legais." },
  { numero: "02", titulo: "Use delays entre requisições para não sobrecarregar os servidores", descricao: "Scraping agressivo pode ser interpretado como ataque DDoS e resultar em bloqueio de IP. Adicione pausas de 1 a 3 segundos entre requisições e respeite os limites de rate do site." },
  { numero: "03", titulo: "Prefira APIs públicas oficiais quando disponíveis", descricao: "Se o site oferece uma API pública com os dados que você precisa, use-a. APIs são mais estáveis que scraping — mudanças no HTML do site quebram scrapers, APIs têm versionamento." },
  { numero: "04", titulo: "Valide e limpe os dados extraídos antes de usar", descricao: "Dados de scraping chegam sujos: espaços extras, caracteres especiais, campos vazios e formatos inconsistentes. Sempre processe os dados extraídos antes de carregá-los em banco de dados ou analisá-los." },
  { numero: "05", titulo: "Monitore os scrapers em produção para detectar quebras", descricao: "Sites atualizam o layout regularmente, quebrando seletores CSS e XPath. Implemente alertas quando a taxa de dados extraídos cair significativamente para identificar quebras antes de comprometer os dados." },
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
