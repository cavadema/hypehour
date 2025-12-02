import { ShieldCheckIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
    title: "Política de Privacidade - Hypehour",
    description: "Leia a Política de Privacidade do Hypehour. Saiba como coletamos, usamos e protegemos suas informações.",
    alternates: {
        canonical: "https://www.hypehour.com.br/privacidade",
    },
};

export default function PoliticaDePrivacidade() {
    return (
        <main className="max-w-4xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>

            <div className="flex items-center gap-3 mb-8">
                <ShieldCheckIcon className="w-10 h-10 text-blue-500" />
                <h1 className="text-3xl font-bold">Política de Privacidade</h1>
            </div>

            <div className="prose prose-blue max-w-none text-gray-700">
                <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

                <p>
                    A sua privacidade é importante para nós. É política do Hypehour respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site <Link href="/">Hypehour</Link>, e outros sites que possuímos e operamos.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">1. Informações que coletamos</h2>
                <p>
                    Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
                </p>
                <p>
                    Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">2. Compartilhamento de dados</h2>
                <p>
                    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">3. Links para sites externos</h2>
                <p>
                    O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">4. Cookies</h2>
                <p>
                    Como é prática comum em quase todos os sites profissionais, este site usa cookies, que são pequenos arquivos baixados no seu computador, para melhorar sua experiência.
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li><strong>Cookies necessários:</strong> São essenciais para o funcionamento do site.</li>
                    <li><strong>Cookies de análise:</strong> Utilizamos o Google Analytics para entender como os visitantes interagem com o site.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">5. Compromisso do Usuário</h2>
                <p>
                    O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Hypehour oferece no site e com caráter enunciativo, mas não limitativo:
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;</li>
                    <li>B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
                    <li>C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do Hypehour, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">6. Mais informações</h2>
                <p>
                    Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
                </p>
            </div>
        </main>
    );
}
