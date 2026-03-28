import React from 'react';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const SimilarTools = () => {
    const tools = [
        {
            name: "Tactiq",
            description: "Gerador de atas com IA para Zoom, Google Meet e Teams via extensão de navegador.",
            url: "/ferramentas/tactiq",
            icon: "T"
        },
        {
            name: "Fathom",
            description: "Registrador de reuniões gratuito que transcreve e resume chamadas automaticamente.",
            url: "https://www.fathom.ai/",
            icon: "F"
        },
        {
            name: "Otter.ai",
            description: "Assistente de transcrição em tempo real focado em produtividade de equipe.",
            url: "https://otter.ai/",
            icon: "O"
        },
        {
            name: "Fireflies.ai",
            description: "Transcrição e pesquisa inteligente em todas as suas conversas de voz.",
            url: "https://fireflies.ai/",
            icon: "F"
        }
    ];

    return (
        <section className="mt-16 bg-white rounded-xl p-8 border border-zinc-200">
            <h2 className="text-3xl font-bold text-black mb-8">Ferramentas Similares</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                    <div key={index} className="group p-4 rounded-lg border border-zinc-100 hover:border-black transition-all">
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center font-bold text-zinc-900 group-hover:bg-black group-hover:text-white transition-colors">
                                    {tool.icon}
                                </div>
                                <h3 className="font-bold text-lg text-black">{tool.name}</h3>
                            </div>
                            <Link href={tool.url} target={tool.url.startsWith('https') ? "_blank" : "_self"}>
                                <ArrowTopRightOnSquareIcon className="w-5 h-5 text-zinc-400 hover:text-black transition-colors" />
                            </Link>
                        </div>
                        <p className="text-sm text-zinc-600 leading-relaxed">{tool.description}</p>
                        <Link 
                            href={tool.url}
                            target={tool.url.startsWith('https') ? "_blank" : "_self"}
                            className="inline-block mt-4 text-xs font-semibold text-black hover:underline"
                        >
                            Ver mais →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SimilarTools;
