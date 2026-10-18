import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Calendar, ArrowLeft } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "اخبار و رویدادهای تجاری چین و شانگهای",
  description:
    "آخرین اخبار نمایشگاه‌های چین، تغییرات تعرفه‌های واردات و فرصت‌های تجاری با شانگهای. راهنمای بازدید از CIIE، کانتون و تحلیل بازار.",
  path: "/news-events",
  keywords: [
    "اخبار تجارت چین",
    "نمایشگاه شانگهای",
    "CIIE 2026",
    "نمایشگاه کانتون",
    "تعرفه واردات چین",
    "اخبار واردات",
  ],
});

const articles = [
  {
    slug: "ciie-2026",
    title: "نمایشگاه بین‌المللی واردات چین (CIIE) 2026: راهنمای جامع بازدید",
    excerpt:
      "نمایشگاه CIIE 2026 در نوامبر در شانگهای برگزار می‌شود. راهنمای کامل ثبت‌نام، ویزا، بازدید و بیشترین بهره از بزرگ‌ترین نمایشگاه وارداتی چین.",
    date: "۱۴۰۵/۰۸/۲۰",
    dateISO: "2026-11-05",
    image:
      "https://images.pexels.com/photos/35138560/pexels-photo-35138560.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "۸ دقیقه",
  },
  {
    slug: "tariff-changes-2026",
    title: "تغییرات جدید تعرفه‌های واردات از چین در سال ۲۰۲۶",
    excerpt:
      "بررسی کامل تغییرات تعرفه گمرکی واردات از چین در سال ۲۰۲۶: کدام کالاها ارزان‌تر شدند، کدام گران‌تر و چه تأثیری بر واردکنندگان دارد.",
    date: "۱۴۰۵/۰۸/۱۵",
    dateISO: "2026-10-31",
    image:
      "https://images.pexels.com/photos/6169133/pexels-photo-6169133.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "۶ دقیقه",
  },
  {
    slug: "canton-fair-supplier-guide",
    title: "چگونه در نمایشگاه کانتون بهترین تأمین‌کننده را پیدا کنیم",
    excerpt:
      "راهنمای عملی بازدید از نمایشگاه کانتون: آماده‌سازی قبل از سفر، استراتژی گشتی، مذاکره با تأمین‌کنندگان و جلوگیری از اشتباهات رایج.",
    date: "۱۴۰۵/۰۸/۱۰",
    dateISO: "2026-10-26",
    image:
      "https://images.pexels.com/photos/38041486/pexels-photo-38041486.jpeg?auto=compress&cs=tinysrgb&w=800",
    readTime: "۷ دقیقه",
  },
];

export default function NewsEvents() {
  return (
    <>
      <SchemaMarkup
        breadcrumbs={[
          { name: "خانه", href: "/" },
          { name: "اخبار و رویدادها", href: "/news-events" },
        ]}
      />

      <section className="bg-navy-800 py-12 md:py-16">
        <div className="container-pro">
          <Breadcrumbs
            items={[
              { name: "خانه", href: "/" },
              { name: "اخبار و رویدادها", href: "/news-events" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
            اخبار و رویدادهای تجاری چین و شانگهای
          </h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
            آخرین اخبار نمایشگاه‌های چین، تغییرات تعرفه‌های واردات، فرصت‌های
            تجاری و تحلیل‌های بازار شانگهای. با ما همیشه یک قدم جلوتر باشید.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-pro">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/news-events/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {article.date}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-gold-600 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-gold-600 font-medium">
                    ادامه مطلب
                    <ArrowLeft size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="از آخرین فرصت‌های تجاری جا نمانید"
        description="ما اخبار و تحلیل‌های بازار چین را برای شما رصد می‌کنیم. برای مشاوره تخصصی با ما در تماس باشید."
      />
    </>
  );
}
