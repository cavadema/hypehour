import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://www.hypehour.com.br";

const EXCLUDED_DIRS = new Set(["components", "ferramentas", "api"]);

function fileLastModified(filePath: string): string {
  try {
    return fs.statSync(filePath).mtime.toISOString().split("T")[0];
  } catch {
    return new Date().toISOString().split("T")[0];
  }
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

  const homePage = path.join(appDir, "page.tsx");

  return [
    {
      url: BASE_URL,
      lastModified: fileLastModified(homePage),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categoryDirs.map((slug) => ({
      url: `${BASE_URL}/${slug}`,
      lastModified: fileLastModified(path.join(appDir, slug, "page.tsx")),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...toolDirs.map((slug) => ({
      url: `${BASE_URL}/ferramentas/${slug}`,
      lastModified: fileLastModified(path.join(toolsDir, slug, "page.tsx")),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
