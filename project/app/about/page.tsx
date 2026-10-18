import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { EXTERNAL_LINKS } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Target, Eye, Heart, Award } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "درباره شانگهای سیتی - تجارت با چین",
  description:
    "شانگهای سیتی با بیش از ۱۰ سال تجربه در تجارت با چین و شانگهای، خدمات واردات، ثبت شرکت و حمل‌ونقل را تخصصی ارائه می‌دهد.",
  path: "/about",
  keywords: [
    "درباره شانگهای سیتی",
    "تجارت با چین",
    "شرکت واردات چین",
    "متخصصان شانگهای",
    "مشاور تجاری چین",
  ],
});

const values = [
  {
    icon: Target,
    title: "مأموریت ما",
    desc: "ایجاد پلی مطمئن میان بازرگانان ایرانی و بازار چین با تمرکز ویژه بر شانگهای",
  },
  {
    icon: Eye,
    title: "چشم‌انداز",
    desc: "تبدیل شدن به مرجع برتر تجارت با چین در ایران و منطقه",
  },
  {
    icon: Heart,
    title: "ارزش‌ها",
    desc: "صداقت، تخصص، پشتیبانی کامل و رضایت مشتری در اولویت ماست",
  },
  {
    icon: Award,
    title: "تخصص",
    desc: "تیم متخصص با تجربه میدانی در بازار چین و شانگهای",
  },
];

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup
        breadcrumbs={[
          { name: "خانه", href: "/" },
          { name: "درباره ما", href: "/about" },
        ]}
      />

      <section className="bg-navy-800 py-12 md:py-16">
        <div className="container-pro">
          <Breadcrumbs
            items={[
              { name: "خانه", href: "/" },
              { name: "درباره ما", href: "/about" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
            درباره شانگهای سیتی
          </h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
            شانگهای سیتی با بیش از یک دهه تجربه در تجارت با چین، مرجع تخصصی
            واردات، ثبت شرکت و حمل‌ونقل از شانگهای به ایران است.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-pro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/36733331/pexels-photo-36733331.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="تیم شانگهای سیتی"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="prose-fa">
              <h2>داستان ما</h2>
              <p>
                شانگهای سیتی در سال ۱۳۹۴ توسط گروهی از بازرگانان ایرانی که سال‌ها
                در شهر شانگهای فعال بودند، تأسیس شد. ما تجربه تلخ و شیرین تجارت
                با چین را از نزدیک لمس کرده بودیم و می‌دانستیم که بسیاری از
                هم‌وطنان ما به دلیل عدم آشنایی با بازار چین، دچار ضرر می‌شوند.
              </p>
              <p>
                تصمیم گرفتیم تجربه و شبکه ارتباطی خود در شانگهای را در اختیار
                بازرگانان ایرانی قرار دهیم تا مسیر تجارت با چین را هموار کنیم.
                امروز، با بیش از ۱۰ سال تجربه مستمر و حضور فعال در نمایشگاه‌های
                چین، به یکی از مراجع معتبر تجارت با شانگهای در ایران تبدیل
                شده‌ایم.
              </p>
              <p>
                تمرکز ویژه ما بر شهر شانگهای به عنوان قطب اقتصادی چین، مزیت رقابتی
                ماست. ما تأمین‌کنندگان، بازارها و قوانین شانگهای را از نزدیک
                می‌شناسیم و این شناخت را به خدمت مشتریان خود درمی‌آوریم.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:border-gold-300 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-navy-800 rounded-xl mb-4">
                  <value.icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="prose-fa max-w-4xl">
            <h2>تخصص و خدمات</h2>
            <p>
              ما در شانگهای سیتی چهار خدمت اصلی ارائه می‌دهیم که هر یک به‌صورت
              تخصصی و توسط متخصصان مجرب انجام می‌شود:
            </p>
            <ul>
              <li>
                <Link href="/import-from-shanghai">واردات از شانگهای</Link>:
                راهنمای کامل از یافتن تأمین‌کننده تا تحویل کالا
              </li>
              <li>
                <Link href="/company-registration-shanghai">ثبت شرکت در شانگهای</Link>:
                ثبت WFOE، JV و دفتر نمایندگی
              </li>
              <li>
                <Link href="/shipping-logistics">حمل‌ونقل و لجستیک</Link>: حمل
                دریایی، هوایی و ریلی با خطوط معتبر
              </li>
              <li>
                <Link href="/news-events">اخبار و رویدادها</Link>: رصد نمایشگاه‌ها
                و فرصت‌های تجاری
              </li>
            </ul>

            <h2>شبکه همکاران</h2>
            <p>
              ما برای ارائه خدمت کامل، با شبکه‌ای از شرکت‌های معتبر همکاری
              می‌کنیم. برای{" "}
              <a
                href={EXTERNAL_LINKS.erbilcity.url}
                target="_blank"
                rel="noopener"
              >
                {EXTERNAL_LINKS.erbilcity.anchor}
              </a>{" "}
              نیز با همکاران منطقه‌ای در ارتباط هستیم تا فرصت‌های تجارت منطقه‌ای
              را نیز پوشش دهیم.
            </p>

            <h2>چرا به ما اعتماد کنید؟</h2>
            <ul>
              <li>بیش از ۱۰ سال تجربه مستمر در تجارت با چین</li>
              <li>حضور مستمر در شانگهای و آشنایی با فرهنگ تجاری چین</li>
              <li>تیم متخصص حقوقی، لجستیک و کنترل کیفیت</li>
              <li>شبکه تأمین‌کنندگان تأییدشده در شانگهای</li>
              <li>پشتیبانی کامل از مرحله مشاوره تا تحویل کالا</li>
              <li>شفافیت در هزینه‌ها و شرایط</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="با ما شروع کنید"
        description="برای مشاوره رایگان و آشنایی با خدمات ما، همین حالا تماس بگیرید."
      />
    </>
  );
}
