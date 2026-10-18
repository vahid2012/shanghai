import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://shanghaicity.ir";
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/import-from-shanghai`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/import-from-shanghai/finding-suppliers`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/import-from-shanghai/quality-control-guide`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/import-from-shanghai/payment-methods`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/company-registration-shanghai`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/shipping-logistics`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/shipping-logistics/sea-freight-costs`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/shipping-logistics/customs-clearance`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/news-events`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/news-events/ciie-2026`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/news-events/tariff-changes-2026`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/news-events/canton-fair-supplier-guide`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];

  return staticPages;
}
