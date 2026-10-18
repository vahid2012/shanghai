import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, Ship, Building2, PackageSearch, Newspaper, ShieldCheck, Users, Globe } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = generatePageMetadata({
  title: "شانگهای سیتی | مرجع تخصصی تجارت با چین و شانگهای",
  description:
    "واردات از شانگهای، ثبت شرکت در چین، حمل‌ونقل دریایی و مشاوره تجاری تخصصی. بیش از ۱۰ سال تجربه تجارت با چین. همین حالا تماس بگیرید.",
  path: "/",
  keywords: [
    "تجارت با چین",
    "واردات از شانگهای",
    "ثبت شرکت در چین",
    "حمل ونقل از چین",
    "واردات کالا از شانگهای",
    "مشاوره تجاری چین",
    "شانگهای سیتی",
  ],
});

const trustSignals = [
  { icon: ShieldCheck, title: "بیش از ۱۰ سال تجربه", desc: "تجارت مستقیم با تأمین‌کنندگان شانگهای" },
  { icon: Globe, title: "ارتباط مستقیم با چین", desc: "حضور فعال در بازار شانگهای و نمایشگاه‌ها" },
  { icon: Users, title: "پشتیبانی کامل", desc: "از یافتن تأمین‌کننده تا تحویل کالا در ایران" },
];

const testimonials = [
  {
    name: "محمد رضایی",
    role: "واردکننده قطعات الکترونیکی",
    text: "با کمک شانگهای سیتی توانستیم مستقیم از تأمین‌کنندگان شانگهای خرید کنیم و هزینه‌هایمان ۳۰٪ کاهش یافت. کنترل کیفیت و حمل‌ونقل کاملاً حرفه‌ای بود.",
  },
  {
    name: "فاطمه احمدی",
    role: "مدیرعامل شرکت نساجی پارس",
    text: "ثبت شرکت WFOE در شانگهای با راهنمایی تیم شانگهای سیتی در کمترین زمان انجام شد. فرآیند مالیاتی و حقوقی کاملاً شفاف توضیح داده شد.",
  },
  {
    name: "علی محمدزاده",
    role: "بازرگان پوشاک",
    text: "حمل‌ونقل دریایی LCL از شانگهای به بندرعباس در ۲۲ روز تحویل داده شد. فرآیند ترخیص گمرکی بدون هیچ مشکلی انجام شد. واقعاً قابل اعتماد هستند.",
  },
];

const homeFaqs = [
  {
    question: "واردات از شانگهای چقدر طول می‌کشد؟",
    answer:
      "زمان واردات بستگی به روش حمل دارد. حمل دریایی FCL از شانگهای به بندرعباس معمولاً ۱۸ تا ۲۴ روز، حمل هوایی ۳ تا ۷ روز و حمل ریلی ۱۴ تا ۱۸ روز طول می‌کشد. فرآیند ترخیص گمرکی در ایران ۳ تا ۷ روز کاری اضافه می‌شود.",
  },
  {
    question: "حداقل سرمایه برای واردات از چین چقدر است؟",
    answer:
      "حداقل سرمایه ثابت ندارد و بستگی به نوع کالا و حجم سفارش دارد. اما برای شروع معقول، حدود ۱۰ تا ۲۰ هزار دلار سرمایه پیشنهاد می‌شود. هزینه‌های گمرکی، حمل، بیمه و کارمز ترخیص باید در محاسبه لحاظ شوند.",
  },
  {
    question: "چگونه تأمین‌کننده معتبر در شانگهای پیدا کنیم؟",
    answer:
      "بهترین روش استفاده از نمایشگاه‌های معتبر مانند نمایشگاه کانتون و CIIE، پلتفرم‌های تأییدشده مانند Alibaba Gold Supplier و بررسی حضوری کارخانه است. ما در تمام این مراحل همراه شما هستیم و تأمین‌کنندگان را از نظر اعتبار و کیفیت بررسی می‌کنیم.",
  },
  {
    question: "آیا برای تجارت با چین به ویزا نیاز دارم؟",
    answer:
      "بله، برای سفر تجاری به چین به ویزای تجاری (M Visa) نیاز دارید. مدارک لازم شامل دعوت‌نامه از شرکت چینی، گواهی تجاری و بیمه مسافرتی است. ما در دریافت دعوت‌نامه و فرآیند ویزا شما را راهنمایی می‌کنیم.",
  },
  {
    question: "چه روش‌های پرداخت به تأمین‌کننده چینی امن است؟",
    answer:
      "پرداخت TT (انتقال بانکی) رایج‌ترین روش است که معمولاً ۳۰٪ پیش‌پرداخت و ۷۰٪ پس از بارگیری پرداخت می‌شود. اعتبارسنجی (LC) برای سفارش‌های بزرگ امن‌تر است. توصیه می‌کنیم قبل از پرداخت نهایی، کنترل کیفیت انجام شود.",
  },
];

const serviceIcons: Record<string, React.ComponentType<{ size?: number | string; className?: string }>> = {
  import: PackageSearch,
  company: Building2,
  shipping: Ship,
  news: Newspaper,
};

export default function HomePage() {
  return (
    <>
      <SchemaMarkup organization localBusiness faq={homeFaqs} />

      {/* Hero */}
      <section className="relative bg-navy-800 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/417289/pexels-photo-417289.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=" skyline شانگهای"
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-navy-900/90 via-navy-800/80 to-navy-700/70" />
        </div>
        <div className="relative container-pro py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              مرجع تخصصی تجارت با شانگهای چین
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              واردات کالا، ثبت شرکت، حمل‌ونقل و مشاوره تجاری با شانگهای. ما با
              بیش از یک دهه تجربه و ارتباط مستقیم با تأمین‌کنندگان چینی، مسیر
              تجارت شما با چین را هموار می‌کنیم.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE_CONFIG.whatsappHref}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-3.5 rounded-lg font-medium transition-all hover:shadow-xl"
              >
                <MessageCircle size={20} />
                مشاوره رایگان واتساپ
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3.5 rounded-lg font-medium transition-all hover:shadow-xl"
              >
                <Phone size={20} />
                <span dir="ltr">{SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-14 md:py-20">
        <div className="container-pro">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustSignals.map((signal, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-navy-50 rounded-2xl mb-4">
                  <signal.icon size={32} className="text-navy-800" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2">
                  {signal.title}
                </h3>
                <p className="text-gray-600">{signal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-pro">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-navy-800 mb-4">
              خدمات تخصصی شانگهای سیتی
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              از یافتن تأمین‌کننده تا تحویل کالا، تمام مراحل تجارت با چین را
              پوشش می‌دهیم
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => {
              const Icon = serviceIcons[service.icon] || PackageSearch;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-gold-300 hover:shadow-xl transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-navy-800 group-hover:bg-gold-500 rounded-xl mb-4 transition-colors">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-800 mb-2 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-pro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/20752572/pexels-photo-20752572.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="مشاوره تجاری با چین"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-4">
                چرا شانگهای سیتی؟
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                شانگهای سیتی با تمرکز ویژه بر شهر شانگهای به عنوان قطب اقتصادی
                چین، پلی مطمئن میان بازرگانان ایرانی و بازار چین ایجاد کرده است.
                تیم ما متشکل از متخصصان حوزه واردات، حقوق تجاری بین‌الملل و
                لجستیک، با حضور مستمر در شانگهای و آشنایی کامل با فرهنگ تجاری
                چین، تجارت شما را از ریسک‌های رایج مصون می‌دارد.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "بررسی حضوری کارخانه‌ها و تأمین‌کنندگان در شانگهای",
                  "کنترل کیفیت پیش از بارگیری با بازرسان مجرب",
                  "حمل‌ونقل بهینه با خطوط معتبر COSCO، MSC و CMA CGM",
                  "ترخیص گمرکی سریع و بدون دردسر در بندرعباس و سایر گمرکات",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <ShieldCheck size={20} className="text-gold-500 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-navy-800 font-semibold hover:text-gold-600 transition-colors"
              >
                بیشتر درباره ما بدانید ←
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy-800 py-16 md:py-24">
        <div className="container-pro">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            نظر مشتریان ما
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-navy-700/50 backdrop-blur rounded-2xl p-6 border border-navy-600"
              >
                <p className="text-white/80 leading-relaxed mb-6 text-sm">
                  «{t.text}»
                </p>
                <div>
                  <p className="text-gold-500 font-semibold">{t.name}</p>
                  <p className="text-white/50 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container-pro max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-800 text-center mb-10">
            سوالات متداول درباره واردات از شانگهای
          </h2>
          <FAQAccordion items={homeFaqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
