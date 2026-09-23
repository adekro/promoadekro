import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { news } from "@/lib/news";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/chi-siamo`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/prodotti`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contatti`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/novita`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const priorityProducts = ["gestionali-su-misura", "agricola", "horsehouse"];
  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${SITE_URL}/prodotti/${product.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: priorityProducts.includes(product.slug) ? 0.9 : 0.7,
  }));

  const newsRoutes: MetadataRoute.Sitemap = news.map((item) => ({
    url: `${SITE_URL}/novita/${item.slug}`,
    lastModified: new Date(item.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...productRoutes, ...newsRoutes];
}
