interface Tool {
  nome: string;
  url: string;
}

interface Props {
  title: string;
  description: string;
  canonicalUrl: string;
  ferramentas: Tool[];
}

const BASE_URL = "https://www.hypehour.com.br";

export default function CategoryPageSchema({ title, description, canonicalUrl, ferramentas }: Props) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["CollectionPage", "WebPage"],
        "@id": canonicalUrl,
        "name": title,
        "description": description,
        "url": canonicalUrl,
        "isPartOf": { "@id": BASE_URL },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
            { "@type": "ListItem", "position": 2, "name": title, "item": canonicalUrl },
          ],
        },
      },
      {
        "@type": "ItemList",
        "name": title,
        "description": description,
        "numberOfItems": ferramentas.length,
        "itemListElement": ferramentas.map((f, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": f.nome,
          "url": f.url.startsWith('/') ? `${BASE_URL}${f.url}` : f.url,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
