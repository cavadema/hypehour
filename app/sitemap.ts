import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.hypehour.com.br";

const EXCLUDED_DIRS = new Set(["components", "ferramentas", "api"]);

// Datas reais de última alteração (último commit que tocou a pasta da página),
// geradas por scripts/generate-lastmod.mjs e commitadas em data/lastmod.json.
const LASTMOD: Record<string, string> = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "data", "lastmod.json"), "utf8")
);

function lastModFor(route: string): string | undefined {
  return LASTMOD[route];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");

  const categoryDirs = fs
    .readdirSync(appDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !EXCLUDED_DIRS.has(d.name))
    .filter((d) => fs.existsSync(path.join(appDir, d.name, "page.tsx")))
    .map((d) => d.name);

  const toolsDir = path.join(appDir, "ferramentas");
  const toolDirs = fs
    .readdirSync(toolsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .filter((d) => fs.existsSync(path.join(toolsDir, d.name, "page.tsx")))
    .map((d) => d.name);

  return [
    {
      url: BASE_URL,
      lastModified: lastModFor("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categoryDirs.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: lastModFor(`/${slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...toolDirs.map((slug) => ({
      url: `${BASE_URL}/ferramentas/${slug}`,
      lastModified: lastModFor(`/ferramentas/${slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
