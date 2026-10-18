import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

type GenerateMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
  publishedTime?: string;
  modifiedTime?: string;
};

export function generatePageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  image,
  publishedTime,
  modifiedTime,
}: GenerateMetadataOptions): Metadata {
  const url = `${SITE_CONFIG.domain}${path}`;
  const ogImage = image || `${SITE_CONFIG.domain}/og-image.jpg`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "fa_IR",
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateKeywords(base: string[], additional: string[]): string[] {
  return [...base, ...additional];
}

export const BASE_KEYWORDS = [
  "تجارت با چین",
  "واردات از شانگهای",
  "شانگهای سیتی",
];
