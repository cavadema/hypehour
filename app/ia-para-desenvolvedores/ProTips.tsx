const tips = [
  { numero: "01", titulo: "Revise cada sugestão — a IA pode alucinar APIs inexistentes", descricao: "Ferramentas de completação de código geram código plausível, mas nem sempre correto. Sempre valide a existência de APIs, versões de bibliotecas e lógica antes de aceitar a sugestão." },
  { numero: "02", titulo: "Escreva comentários descritivos para guiar a IA", descricao: "Um comentário como '// Valida CPF com dígitos verificadores segundo o algoritmo da Receita Federal' gera código muito mais preciso que simplesmente começar a digitar uma função." },
  { numero: "03", titulo: "Use a IA para gerar testes, não só código de produção", descricao: "Ferramentas como Copilot e Cursor são excelentes para gerar testes unitários e de integração. Peça testes primeiro e use o código de produção sugerido para passar nesses testes." },
  { numero: "04", titulo: "Nunca coloque segredos no contexto enviado à IA", descricao: "API keys, senhas e tokens de banco de dados no código ou nos comentários que você compartilha com a IA em modo cloud podem ser logados nos servidores do provedor. Use variáveis de ambiente." },
  { numero: "05", titulo: "Combine com linters e type checking para qualidade real", descricao: "IA gera código que compila, mas não necessariamente código idiomático e seguro. ESLint, Prettier, TypeScript strict mode e testes automatizados são complementos essenciais para qualidade real." },
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
