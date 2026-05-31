import Link from "next/link";

export const metadata = {
  title: "Contato — Hypehour",
  description: "Entre em contato com a equipe da Hypehour por e-mail ou WhatsApp.",
  alternates: {
    canonical: "https://www.hypehour.com.br/contato",
  },
  openGraph: {
    title: "Contato — Hypehour",
    description: "Entre em contato com a equipe da Hypehour por e-mail ou WhatsApp.",
    url: "https://www.hypehour.com.br/contato",
    siteName: "Hypehour",
    images: [{ url: "https://www.hypehour.com.br/logo.png" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contato — Hypehour",
    description: "Entre em contato com a equipe da Hypehour por e-mail ou WhatsApp.",
    images: ["https://www.hypehour.com.br/logo.png"],
    creator: "@hypehourbr",
  },
};

export default function Contato() {
  return (
    <main className="max-w-3xl mx-auto py-12 px-4">
      <nav className="mb-6">
        <Link href="/" className="text-black hover:underline">&larr; Voltar para a home</Link>
      </nav>

      <h1 className="text-3xl font-bold mb-4">Contato</h1>
      <p className="text-zinc-600 mb-10">
        Tem alguma dúvida, sugestão ou quer indicar uma ferramenta de IA? Fale com a gente.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <a
          href="mailto:cavadema@gmail.com"
          className="flex items-center gap-4 bg-white border border-zinc-200 rounded-xl p-5 hover:shadow-md transition"
        >
          <div className="flex-shrink-0 w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-zinc-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0-9.75 6.75L2.25 6.75" />
            </svg>
          </div>
          <div>
            <div className="text-xs text-zinc-400 mb-0.5">E-mail</div>
            <div className="font-medium text-zinc-900 text-sm">cavadema@gmail.com</div>
          </div>
        </a>

        <a
          href="https://wa.me/5514996320098"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 bg-white border border-zinc-200 rounded-xl p-5 hover:shadow-md transition"
        >
          <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.554 4.099 1.523 5.824L0 24l6.341-1.499A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.808 9.808 0 01-5.001-1.371l-.359-.214-3.764.889.936-3.65-.234-.374A9.786 9.786 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
            </svg>
          </div>
          <div>
            <div className="text-xs text-zinc-400 mb-0.5">WhatsApp</div>
            <div className="font-medium text-zinc-900 text-sm">(14) 99632-0098</div>
          </div>
        </a>
      </div>
    </main>
  );
}
