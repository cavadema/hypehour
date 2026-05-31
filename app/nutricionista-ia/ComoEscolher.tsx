export default function ComoEscolher() {
  return (
    <div className="mb-10 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Como escolher a ferramenta certa</h2>
      <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Você precisa de gestão de consultório?</h3>
          <p>Se o foco é organizar agenda, prontuário e comunicação com pacientes, o <strong>IPPO</strong> é a opção mais completa, reunindo tudo em uma única plataforma voltada à nutrição clínica.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Quer gerar planos alimentares mais rápido?</h3>
          <p>O <strong>DietSystem</strong> é referência em montagem de planos com banco TACO atualizado, cálculo automático de macros e geração de relatórios para o paciente. Ideal para quem atende alto volume.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Busca IA generativa para sugestões personalizadas?</h3>
          <p>O <strong>Nutria by GreenTable</strong> e o <strong>Dietitian.com.br</strong> são focados em inteligência artificial para apoio na personalização dos planos, com sugestões automáticas baseadas no perfil do paciente.</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Atende online ou em múltiplos locais?</h3>
          <p>Priorize ferramentas 100% web, que permitam acessar os dados do paciente de qualquer dispositivo e enviar planos e documentos digitalmente sem fricção.</p>
        </div>
      </div>
    </div>
  );
}
