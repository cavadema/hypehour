interface Tool {
  nome: string;
  url: string;
}

interface Props {
  title: string;
  description: string;
  canonicalUrl: string;
  ferramentas: Tool[];
  breadcrumbName?: string;
}

const BASE_URL = "https://www.hypehour.com.br";

export default function CategoryPageSchema({ title, description, canonicalUrl, ferramentas, breadcrumbName }: Props) {
  const name = breadcrumbName ?? title;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        "name": "Hypehour",
        "url": BASE_URL,
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "name": "Hypehour",
        "url": BASE_URL,
        "publisher": { "@id": `${BASE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
          { "@type": "ListItem", "position": 2, "name": name, "item": canonicalUrl },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": `${canonicalUrl}/#collectionpage`,
        "name": title,
        "description": description,
        "url": canonicalUrl,
        "isPartOf": { "@id": `${BASE_URL}/#website` },
        "breadcrumb": { "@id": `${canonicalUrl}/#breadcrumb` },
        "mainEntity": {
          "@type": "ItemList",
          "@id": `${canonicalUrl}/#itemlist`,
          "itemListOrder": "http://schema.org/ItemListOrderAscending",
          "numberOfItems": ferramentas.length,
          "itemListElement": ferramentas.map((f, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": f.nome,
            "url": f.url.startsWith("/") ? `${BASE_URL}${f.url}` : f.url,
          })),
        },
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
