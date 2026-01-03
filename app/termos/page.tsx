import { DocumentTextIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
    title: "Termos de Serviço",
    description: "Leia os Termos de Serviço do Hypehour. Entenda as regras e diretrizes para o uso do nosso site e serviços.",
    alternates: {
        canonical: "https://www.hypehour.com.br/termos",
    },
};

export default function TermosDeServico() {
    return (
        <main className="max-w-4xl mx-auto py-10 px-4">
            <Link href="/" className="inline-flex items-center gap-2 text-black hover:underline mb-8">
                <ArrowLeftIcon className="w-5 h-5" /> Voltar para a home
            </Link>

            <div className="flex items-center gap-3 mb-8">
                <DocumentTextIcon className="w-10 h-10 text-gray-900" />
                <h1 className="text-3xl font-bold">Termos de Serviço</h1>
            </div>

            <div className="prose prose-blue max-w-none text-gray-700">
                <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">1. Termos</h2>
                <p>
                    Ao acessar ao site <Link href="/">Hypehour</Link>, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">2. Uso de Licença</h2>
                <p>
                    É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Hypehour , apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
                </p>
                <ul>
                    <li>modificar ou copiar os materiais;</li>
                    <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                    <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Hypehour;</li>
                    <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                    <li>transferir os materiais para outra pessoa ou &apos;espelhe&apos; os materiais em qualquer outro servidor.</li>
                </ul>
                <p>
                    Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Hypehour a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou impresso.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">3. Isenção de responsabilidade</h2>
                <ol>
                    <li>
                        Os materiais no site da Hypehour são fornecidos &apos;como estão&apos;. Hypehour não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                    </li>
                    <li>
                        Além disso, o Hypehour não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
                    </li>
                </ol>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">4. Limitações</h2>
                <p>
                    Em nenhum caso o Hypehour ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Hypehour, mesmo que Hypehour ou um representante autorizado da Hypehour tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">5. Precisão dos materiais</h2>
                <p>
                    Os materiais exibidos no site da Hypehour podem incluir erros técnicos, tipográficos ou fotográficos. Hypehour não garante que qualquer material em seu site seja preciso, completo ou atual. Hypehour pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Hypehour não se compromete a atualizar os materiais.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">6. Links</h2>
                <p>
                    O Hypehour não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Hypehour do site. O uso de qualquer site vinculado é por conta e risco do usuário.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">7. Modificações</h2>
                <p>
                    O Hypehour pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">8. Lei aplicável</h2>
                <p>
                    Estes termos e condições são regidos e interpretados de acordo com as leis do Hypehour e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
                </p>
            </div>
        </main>
    );
}
