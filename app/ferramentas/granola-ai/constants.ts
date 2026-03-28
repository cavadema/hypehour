export const toolMetadata = {
  name: "Granola AI",
  description: "O bloco de notas com IA que potencializa suas anotações em reuniões sem robôs intrusivos.",
  url: "https://www.granola.sh/", // URL oficial da Granola (também atendida em granola.so)
  category: "IA para fazer ata de reunião",
  categoryUrl: "/ia-para-fazer-ata-reuniao",
};

export const features = [
  {
    title: "Zero Robôs (No-Bot)",
    description: "Diferente de outros assistentes, a Granola não entra na sua chamada como um participante. Ela roda localmente no seu Mac ou Windows, capturando o áudio do sistema de forma discreta."
  },
  {
    title: "Potencialize suas Notas",
    description: "Você continua anotando o que é importante para você. Após a reunião, a Granola usa a transcrição completa para preencher lacunas, organizar tópicos e garantir que nada foi esquecido."
  },
  {
    title: "Privacidade e Segurança",
    description: "Suas reuniões não são gravadas na nuvem por padrão. A Granola prioriza o processamento local e oferece controles rígidos sobre como seus dados são usados."
  },
  {
    title: "IA Generativa Personalizada (Recipes)",
    description: "Crie modelos customizados para diferentes tipos de reuniões (vendas, feedback, brainstorm) e receba atas estruturadas exatamente como você precisa."
  }
];

export const advantages = [
  "Interface limpa e focada na escrita, sem distrações.",
  "Integração direta com Zoom, Google Meet, Teams, Slack e Notion.",
  "Busca global por IA que permite consultar o histórico de todas as suas reuniões passadas.",
  "Suporta transcrição precisa em múltiplos idiomas, incluindo Português.",
  "Funciona para reuniões presenciais através do aplicativo móvel.",
  "Plano gratuito generoso para usuários individuais."
];

export const considerations = [
  "Necessita de instalação de software no computador (não é apenas via web).",
  "O processamento avançado de IA pode exigir assinatura nos planos de equipe.",
  "Foco maior em anotações textuais do que em gravação de vídeo de longa duração."
];

export const pricing = [
  {
    plan: "Free",
    price: "$0",
    features: ["Anotações ilimitadas", "Integrações básicas", "Busca em reuniões recentes"]
  },
  {
    plan: "Pro",
    price: "$14",
    features: ["Histórico ilimitado", "Modelos de IA avançados", "Integrações premium (Hubspot, Salesforce)", "API de exportação"]
  }
];
