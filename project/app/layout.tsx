import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: "شانگهای سیتی | مرجع تخصصی تجارت با چین و شانگهای",
    template: "%s | شانگهای سیتی",
  },
  description: SITE_CONFIG.description,
  
  // ✅ تگ وریفای گوگل به روش صحیح Next.js در اینجا قرار گرفت
  verification: {
    google: "WBTAWZ3y7jDSShKpJnbTNywvBU0GwHGQbhlg2secKYA",
  },
  
  keywords: [
    "تجارت با چین",
    "واردات از شانگهای",
    "ثبت شرکت در چین",
    "حمل ونقل از چین",
    "واردات کالا از چین",
    "شانگهای سیتی",
    "تجارت شانگهای",
  ],
  authors: [{ name: SITE_CONFIG.nameEn }],
  creator: SITE_CONFIG.nameEn,
  publisher: SITE_CONFIG.nameEn,
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    title: "شانگهای سیتی | مرجع تخصصی تجارت با چین و شانگهای",
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "شانگهای سیتی - تجارت با چین",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شانگهای سیتی | مرجع تخصصی تجارت با چین و شانگهای",
    description: SITE_CONFIG.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1F44",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className={`${vazirmatn.variable} font-vazir antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
