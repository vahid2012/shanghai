type BreadcrumbSchemaItem = {
  name: string;
  href: string;
};

type SchemaMarkupProps = {
  breadcrumbs?: BreadcrumbSchemaItem[];
  faq?: { question: string; answer: string }[];
  article?: {
    headline: string;
    datePublished: string;
    dateModified: string;
    author: string;
    url: string;
  };
  organization?: boolean;
  localBusiness?: boolean;
};

function buildJsonLd(props: SchemaMarkupProps) {
  const schemas: Record<string, unknown>[] = [];
  const baseUrl = "https://shanghaicity.ir";

  if (props.organization) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "شانگهای سیتی",
      alternateName: "Shanghai City",
      url: baseUrl,
      logo: `${baseUrl}/og-image.jpg`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+984433465524",
        contactType: "customer service",
        availableLanguage: ["Persian", "Chinese", "English"],
      },
      sameAs: [baseUrl],
    });
  }

  if (props.localBusiness) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "شانگهای سیتی",
      image: `${baseUrl}/og-image.jpg`,
      url: baseUrl,
      telephone: "+984433465524",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IR",
        addressLocality: "تبریز",
      },
      openingHours: "Sa-Th 09:00-18:00",
    });
  }

  if (props.breadcrumbs && props.breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: props.breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: `${baseUrl}${item.href}`,
      })),
    });
  }

  if (props.faq && props.faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: props.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  if (props.article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: props.article.headline,
      datePublished: props.article.datePublished,
      dateModified: props.article.dateModified,
      author: {
        "@type": "Organization",
        name: props.article.author,
      },
      publisher: {
        "@type": "Organization",
        name: "شانگهای سیتی",
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/og-image.jpg`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": props.article.url,
      },
    });
  }

  return schemas;
}

export default function SchemaMarkup(props: SchemaMarkupProps) {
  const schemas = buildJsonLd(props);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
