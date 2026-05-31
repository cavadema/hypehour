import Link from "next/link";

export const metadata = {
  title: "Sobre Nós — Hypehour",
  description: "Conheça a história por trás da Hypehour, o que nos motivou a criar um diretório de ferramentas de IA em português e como selecionamos cada ferramenta listada.",
  alternates: {
    canonical: 'https://www.hypehour.com.br/sobre-nos',
  },
  openGraph: {
    title: "Sobre Nós — Hypehour",
    description: "Conheça a história por trás da Hypehour, o que nos motivou a criar um diretório de ferramentas de IA em português e como selecionamos cada ferramenta listada.",
    url: "https://www.hypehour.com.br/sobre-nos",
    siteName: 'Hypehour',
    images: [{ url: 'https://www.hypehour.com.br/logo.png' }],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sobre Nós — Hypehour",
    description: "Conheça a história por trás da Hypehour e como selecionamos as ferramentas de IA listadas.",
    images: ['https://www.hypehour.com.br/logo.png'],
    creator: '@hypehourbr',
  },
};

export default function SobreNos() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <nav className="mb-6">
        <Link href="/" className="text-black hover:underline">&larr; Voltar para a home</Link>
      </nav>

      <h1 className="text-3xl font-bold mb-3">Sobre a Hypehour</h1>
      <p className="text-zinc-500 text-sm mb-10">Atualizado em maio de 2026</p>

      <section className="space-y-6 text-zinc-700 leading-relaxed">

        <p>
          A Hypehour nasceu de uma frustração simples: em 2024, quando a quantidade de ferramentas de IA explodia, não havia um lugar em português que organizasse esse universo de forma clara, honesta e útil para quem não é especialista em tecnologia.
        </p>

        <p>
          A maioria dos diretórios existentes estava em inglês, focava em ferramentas para o mercado americano e raramente explicava <em>quando</em> usar cada opção — apenas listava. Faltava contexto, comparação e orientação prática para profissionais brasileiros que queriam adotar IA no trabalho mas não sabiam por onde começar.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-2">O que fazemos</h2>

        <p>
          A Hypehour é um diretório editorial de ferramentas de inteligência artificial. Pesquisamos, testamos e organizamos ferramentas de IA por caso de uso — de marketing e design até medicina, direito e educação — para que você encontre exatamente o que precisa sem precisar vasculhar dezenas de sites.
        </p>

        <p>
          Cada categoria no site vai além da lista: trazemos uma tabela comparativa das principais opções, um guia de qual ferramenta faz mais sentido para cada perfil de usuário, e dicas práticas para extrair o melhor resultado. Nosso objetivo é que você saia da página sabendo o que usar e como começar — não apenas que a ferramenta existe.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-2">Como selecionamos as ferramentas</h2>

        <p>
          Não cobramos para listar ferramentas na Hypehour. Nossa curadoria é independente e segue critérios editoriais próprios:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Funcionalidade real:</strong> a ferramenta entrega o que promete? Testamos ou verificamos avaliações de usuários reais antes de incluir.</li>
          <li><strong>Relevância para o mercado brasileiro:</strong> priorizamos ferramentas com interface em português ou com casos de uso aplicáveis à realidade do Brasil.</li>
          <li><strong>Diversidade de preços:</strong> para cada categoria, incluímos opções gratuitas, freemium e pagas, para que qualquer profissional encontre algo acessível.</li>
          <li><strong>Atualização contínua:</strong> o mercado de IA muda rápido. Revisamos as categorias regularmente para incluir novas ferramentas e remover as que saíram do ar ou perderam relevância.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-2">Para quem é a Hypehour</h2>

        <p>
          A Hypehour foi construída pensando em três perfis principais:
        </p>

        <p>
          <strong>Profissionais que querem adotar IA no trabalho</strong> mas não têm tempo para testar dezenas de ferramentas por conta própria. Se você é de marketing, RH, jurídico, saúde ou qualquer outra área, aqui você encontra o que está sendo usado na sua profissão, com contexto sobre por que funciona.
        </p>

        <p>
          <strong>Empreendedores e pequenos negócios</strong> que precisam fazer mais com menos. O site tem atenção especial a ferramentas gratuitas e de custo acessível, porque nem todo negócio tem orçamento para as soluções enterprise.
        </p>

        <p>
          <strong>Entusiastas e early adopters</strong> que gostam de acompanhar o que há de novo em IA. Atualizamos o diretório constantemente com ferramentas recém-lançadas e tendências emergentes.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-2">Transparência e contato</h2>

        <p>
          Se você encontrou uma ferramenta desatualizada, quer sugerir uma nova, ou tem alguma dúvida sobre o site, entre em <Link href="/contato" className="underline hover:text-black">contato com a gente</Link>. Lemos todas as mensagens e valorizamos o feedback de quem usa a Hypehour no dia a dia.
        </p>

        <p>
          O site também está presente no <a href="https://x.com/hypehourbr" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">X (@hypehourbr)</a> e no <a href="https://www.linkedin.com/company/hypehour/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">LinkedIn</a>, onde compartilhamos novidades sobre ferramentas e tendências de IA com mais frequência.
        </p>

      </section>
    </main>
  );
}
