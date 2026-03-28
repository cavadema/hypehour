import Link from "next/link";
import { DocumentTextIcon, CheckIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import FAQSection from "./FAQSection";
import SimilarTools from "./SimilarTools";
import { toolMetadata, features, advantages, considerations, pricing } from "./constants";

export const metadata = {
    title: `${toolMetadata.name} - O Bloco de Notas com IA para Reuniões | Review`,
    description: `Descubra a ${toolMetadata.name}: o assistente de IA que transcreve e resume suas reuniões sem robôs, potencializando suas próprias anotações.`,
    alternates: {
        canonical: `https://www.hypehour.com.br/ferramentas/granola-ai`,
    },
};

export default function GranolaAiPage() {
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "@id": `https://www.hypehour.com.br/ferramentas/granola-ai#breadcrumb`,
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.hypehour.com.br/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": toolMetadata.category,
                        "item": `https://www.hypehour.com.br${toolMetadata.categoryUrl}`
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": toolMetadata.name,
                        "item": `https://www.hypehour.com.br/ferramentas/granola-ai`
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": `https://www.hypehour.com.br/ferramentas/granola-ai#software`,
                "name": toolMetadata.name,
                "description": toolMetadata.description,
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Mac, Windows, iOS",
                "url": toolMetadata.url,
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                }
            }
        ]
    };

    return (
        <main className="min-h-screen bg-[#f7f8fa]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-zinc-500 text-sm mb-8">
                    <Link href="/" className="hover:text-black transition">Home</Link>
                    <span>/</span>
                    <Link href={toolMetadata.categoryUrl} className="hover:text-black transition font-medium">{toolMetadata.category}</Link>
                    <span>/</span>
                    <span className="text-black font-semibold">{toolMetadata.name}</span>
                </nav>

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
                    <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg overflow-hidden">
                        <DocumentTextIcon className="w-12 h-12" />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-2">{toolMetadata.name}</h1>
                        <p className="text-xl text-zinc-600 max-w-2xl leading-relaxed">{toolMetadata.description}</p>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-12">
                        {/* Intro */}
                        <section className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">O que é a Granola AI?</h2>
                            <p className="text-zinc-700 leading-relaxed mb-4">
                                A <strong>Granola AI</strong> descreve-se como "o bloco de notas de IA para pessoas em reuniões". Ao contrário de quase todos os outros assistentes de reunião (como Otter ou Fireflies), ela não envia um robô para entrar na sua chamada. 
                            </p>
                            <p className="text-zinc-700 leading-relaxed">
                                Em vez disso, ela roda localmente no seu computador e ouve o que está sendo dito, permitindo que você continue no controle da reunião. Ela brilha ao combinar a sua inteligência (suas notas manuais) com a inteligência da IA (a transcrição e resumo automático), criando atas que realmente refletem o que era importante.
                            </p>
                        </section>

                        {/* Features */}
                        <section>
                            <h2 className="text-3xl font-bold mb-8">Principais Funcionalidades</h2>
                            <div className="grid gap-6">
                                {features.map((feature, i) => (
                                    <div key={i} className="p-6 bg-white border border-zinc-200 rounded-2xl flex gap-5 items-start">
                                        <div className="flex-shrink-0 w-10 h-10 bg-zinc-100 rounded-lg flex items-center justify-center text-black font-bold">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-xl mb-1">{feature.title}</h3>
                                            <p className="text-zinc-600 leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Advantages & Disadvantages */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <section className="bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <CheckIcon className="w-6 h-6 text-green-600" /> Vantagens
                                </h2>
                                <ul className="space-y-4">
                                    {advantages.map((adv, i) => (
                                        <li key={i} className="text-zinc-700 flex gap-3 leading-tight">
                                            <span className="text-green-600 font-bold">•</span>
                                            {adv}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            <section className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <ExclamationTriangleIcon className="w-6 h-6 text-orange-500" /> Considerações
                                </h2>
                                <ul className="space-y-4">
                                    {considerations.map((cons, i) => (
                                        <li key={i} className="text-zinc-700 flex gap-3 leading-tight">
                                            <span className="text-orange-500 font-bold">•</span>
                                            {cons}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        {/* Pricing */}
                        <div className="bg-black rounded-2xl p-8 text-white shadow-2xl">
                            <h3 className="text-2xl font-bold mb-6">Preços</h3>
                            <div className="space-y-6">
                                {pricing.map((p, i) => (
                                    <div key={i} className="border-b border-zinc-800 pb-6 last:border-0 last:pb-0">
                                        <div className="flex justify-between items-end mb-3">
                                            <span className="text-zinc-400 text-sm font-semibold uppercase">{p.plan}</span>
                                            <span className="text-2xl font-bold">{p.price}<span className="text-xs text-zinc-400">/mês</span></span>
                                        </div>
                                        <ul className="space-y-2 text-sm text-zinc-300">
                                            {p.features.map((f, j) => (
                                                <li key={j} className="flex gap-2">
                                                    <span className="text-white">✔</span> {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <a
                                href={toolMetadata.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full mt-8 py-4 bg-white text-black text-center font-bold rounded-xl hover:bg-zinc-200 transition"
                            >
                                Começar Gratuitamente →
                            </a>
                        </div>

                        {/* Info Card */}
                        <div className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm text-sm">
                            <h4 className="font-bold mb-4">Informações Gerais</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">Desenvolvedor:</span>
                                    <span className="font-medium">Granola AI, Inc.</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">Plataformas:</span>
                                    <span className="font-medium">Mac, Windows, iOS</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">Uso Principal:</span>
                                    <span className="font-medium">Atas e Notas de Reunião</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Similar Tools */}
                <SimilarTools />

                {/* FAQ */}
                <FAQSection />

                {/* Conclusion */}
                <section className="mt-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4 italic">"Ideal para quem quer o poder da IA sem a 'chatice' de um robô na sala."</h2>
                    <p className="text-zinc-600 leading-relaxed">
                        A Granola AI prova que a melhor tecnologia é aquela que assiste sem interferir. É a ferramenta perfeita para quem lidera reuniões e precisa estar 100% presente, mas não quer perder horas estruturando notas depois.
                    </p>
                </section>
            </div>
        </main>
    );
}
