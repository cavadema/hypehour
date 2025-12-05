import Link from "next/link";

export const metadata = {
  title: "Sobre Nós - HypeHour",
  description: "descubra as melhores ferramentas de IA em um site só. Encontre IA generativa, IA para marketing, professores, conteúdo, gerar imagens e muito mais.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/sobre-nos',
  },
};

export default function SobreNos() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <nav className="mb-6">
        <Link href="/" className="text-black hover:underline">&larr; Voltar para a home</Link>
      </nav>

      <h1 className="text-3xl font-bold mb-8">Melhores ferramentas de IA em um site só</h1>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Sobre a HypeHour</h2>
      <p className="text-zinc-700 mb-6">
        A <strong>HypeHour</strong> reúne em um só lugar as melhores ferramentas de <strong>IA</strong> para <strong>gerar imagens</strong>, <strong>criar conteúdo</strong>, <strong>automatizar tarefas</strong> e impulsionar projetos em qualquer área.
      </p>

      <section className="prose prose-blue max-w-none text-gray-700">
        <p className="mb-4">
          A <strong>HypeHour</strong> é uma plataforma criada para quem busca as melhores ferramentas de <strong>IA</strong> em um só site, facilitando a descoberta de soluções para <strong>criação</strong>, <strong>automação</strong> e <strong>produtividade</strong>. Nosso objetivo é ajudar usuários, profissionais e empresas a encontrar rapidamente <strong>ferramentas de IA generativa</strong>, <strong>ferramentas de IA para marketing</strong>, <strong>ferramentas de IA para educação</strong>, <strong>ferramentas de IA para conteúdo</strong> e muito mais.
        </p>

        <p className="mb-4">
          Aqui você encontra desde ferramentas para <strong>gerar imagens por IA</strong> até soluções completas para gerar <strong>foto IA</strong>, criar artes, otimizar textos, analisar dados e melhorar fluxos de trabalho. Para quem precisa validar conteúdo, também listamos opções de <strong>ferramentas de detecção de IA</strong>, essenciais para garantir autenticidade e confiança.
        </p>

        <p className="mb-4">
          Na HypeHour, você pode explorar:
        </p>

        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Ferramentas de IA generativa</strong> para imagens, textos, vídeos e áudio;</li>
          <li><strong>Ferramentas de IA para professores</strong>, com suporte para aulas, avaliações e atividades;</li>
          <li><strong>Ferramentas de IA para marketing</strong>, ideais para campanhas, anúncios, social media e automação;</li>
          <li><strong>Melhores ferramentas de IA para conteúdo</strong>, perfeitas para criadores, influenciadores e negócios digitais;</li>
          <li><strong>IAs para desenvolvimento, análise, produtividade e design</strong>;</li>
        </ul>

        <p className="mb-4">
          Nosso compromisso é oferecer um diretório completo e atualizado com as tecnologias mais relevantes do mercado. A <strong>HypeHour</strong> existe para melhorar sua forma de trabalhar, criar e inovar por meio da inteligência artificial.
        </p>

        <p>
          Se você busca um portal confiável para comparar soluções, encontrar novas plataformas e descobrir tudo o que a <strong>IA</strong> pode fazer por você, a <strong>HypeHour</strong> é o lugar certo.
        </p>
      </section>
    </main>
  );
}
