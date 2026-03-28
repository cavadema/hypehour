import React from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "Como a Granola AI funciona sem um robô na chamada?",
            answer: "Ela utiliza o acesso direto ao áudio do sistema e à tela do computador para transcrever a reunião e capturar pontos-chave. Com isso, não há um 'bots' entrando na sala ou anunciando a gravação, mantendo a reunião natural."
        },
        {
            question: "A Granola AI transcreve em Português?",
            answer: "Sim, a Granola suporta transcrição e resumos em diversos idiomas, inclusive o Português (Brasil). Ela detecta o idioma falado automaticamente e gera a ata com alta fidelidade."
        },
        {
            question: "Minhas reuniões são privadas?",
            answer: "Sim, a Granola foca na privacidade 'local-first'. Os dados não são usados para treinar modelos globais sem permissão e não ficam disponíveis em servidores de terceiros de forma descuidada."
        },
        {
            question: "Posso usar a Granola AI em reuniões presenciais?",
            answer: "Através do aplicativo móvel, você consegue usar a Granola para reuniões presenciais, palestras e brainstorms, gerando a mesma qualidade de atas das reuniões online."
        },
        {
            question: "Quais são as principais integrações da Granola?",
            answer: "Ela se integra nativamente ao Notion, Slack, HubSpot, Salesforce e Attio, permitindo que as notas da reunião sejam enviadas automaticamente para o seu CRM ou workflow de equipe."
        }
    ];

    return (
        <section className="mt-16 border-t border-zinc-200 pt-12">
            <h2 className="text-3xl font-bold text-black mb-8">Perguntas Frequentes (FAQ)</h2>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-zinc-200">
                        <h3 className="text-lg font-semibold text-black mb-2">{faq.question}</h3>
                        <p className="text-zinc-600 leading-relaxed">{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
