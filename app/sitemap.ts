import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.hypehour.com.br";

const EXCLUDED_DIRS = new Set(["components", "ferramentas", "api"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");
  const today = new Date().toISOString().split("T")[0];

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
    { url: BASE_URL, lastModified: today, changeFrequency: "weekly", priority: 1 },
    ...categoryDirs.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: today,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...toolDirs.map((slug) => ({
      url: `${BASE_URL}/ferramentas/${slug}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
