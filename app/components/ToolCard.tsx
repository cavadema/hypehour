import Link from "next/link";

interface ToolCardProps {
  nome: string;
  url: string;
  descricao: string;
}

const cardClass = "block bg-white rounded-xl shadow hover:shadow-lg transition p-5 border border-gray-100";

export default function ToolCard({ nome, url, descricao }: ToolCardProps) {
  const isInternal = url.startsWith('/');

  const inner = (
    <>
      <h2 className="font-semibold text-lg mb-1">{nome}</h2>
      <div className="text-gray-500 text-sm">{descricao}</div>
    </>
  );

  if (isInternal) {
    return <Link href={url} className={cardClass}>{inner}</Link>;
  }

  return (
    <a href={url} target="_blank" rel="nofollow noopener noreferrer" className={cardClass}>
      {inner}
    </a>
  );
}
