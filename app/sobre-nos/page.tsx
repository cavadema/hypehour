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
        <Link href="/" className="text-blue-600 hover:underline">&larr; Voltar para a home</Link>
      </nav>

      <h1 className="text-3xl font-bold mb-4">Melhores ferramentas de IA em um site só</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">Sobre a HypeHour</h2>
      <p className="text-zinc-700 mb-4">A HypeHour reúne em um só lugar as melhores ferramentas de IA para gerar imagem, criar conteúdo, automatizar tarefas e impulsionar projetos em qualquer área.</p>

      <section className="prose max-w-none">
        <h3>📝 Sobre Nós – Versão SEO Máxima (HypeHour)</h3>
        <p>
          A HypeHour é uma plataforma criada para quem busca as melhores ferramentas de IA em um site só, facilitando a descoberta de soluções para criação, automação e produtividade. Nosso objetivo é ajudar usuários, profissionais e empresas a encontrar rapidamente ferramentas de IA generativa, ferramentas de IA para marketing, ferramentas de IA para educação, ferramentas de IA para conteúdo e muito mais.
        </p>

        <p>
          Aqui você encontra desde ferramenta de gerar imagem de IA até soluções completas para gerar foto IA, criar artes, otimizar textos, analisar dados e melhorar fluxos de trabalho. Para quem precisa validar conteúdo, também listamos opções de ferramenta de detecção de IA, essenciais para garantir autenticidade e confiança.
        </p>

        <p>
          Na HypeHour, você pode explorar:
        </p>
        <ul>
          <li>ferramentas de IA generativa para imagens, textos, vídeos e áudio;</li>
          <li>ferramentas de IA para professores, com suporte para aulas, avaliações e atividades;</li>
          <li>ferramentas de IA para marketing, ideais para campanhas, anúncios, social media e automação;</li>
          <li>melhores ferramentas de IA para conteúdo, perfeitas para criadores, influenciadores e negócios digitais;</li>
          <li>IAs para desenvolvimento, análise, produtividade e design.</li>
        </ul>

        <p>
          Nosso compromisso é oferecer um diretório completo e atualizado com as tecnologias mais relevantes do mercado. A HypeHour existe para melhorar sua forma de trabalhar, criar e inovar por meio da inteligência artificial.
        </p>

        <p>
          Se você busca um portal confiável para comparar soluções, encontrar novas plataformas e descobrir tudo o que a IA pode fazer por você, a HypeHour é o lugar certo.
        </p>
      </section>
    </main>
  );
}
