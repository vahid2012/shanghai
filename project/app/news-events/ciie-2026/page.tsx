import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { EXTERNAL_LINKS } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Calendar, Clock, MapPin } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "نمایشگاه CIIE 2026 شانگهای: راهنمای جامع بازدید",
  description:
    "راهنمای کامل بازدید از نمایشگاه بین‌المللی واردات چین CIIE 2026 در شانگهای: ثبت‌نام، ویزا، آماده‌سازی، استراتژی بازدید و نکات کاربردی.",
  path: "/news-events/ciie-2026",
  type: "article",
  keywords: [
    "CIIE 2026",
    "نمایشگاه شانگهای",
    "نمایشگاه واردات چین",
    "China International Import Expo",
    "بازدید نمایشگاه چین",
    "نمایشگاه NECC",
  ],
  publishedTime: "2026-11-05",
  modifiedTime: "2026-11-05",
});

export default function CIIE2026() {
  return (
    <>
      <SchemaMarkup
        breadcrumbs={[
          { name: "خانه", href: "/" },
          { name: "اخبار و رویدادها", href: "/news-events" },
          { name: "CIIE 2026", href: "/news-events/ciie-2026" },
        ]}
        article={{
          headline: "نمایشگاه بین‌المللی واردات چین (CIIE) 2026: راهنمای جامع بازدید",
          datePublished: "2026-11-05",
          dateModified: "2026-11-05",
          author: "شانگهای سیتی",
          url: "https://shanghaicity.ir/news-events/ciie-2026",
        }}
      />

      <section className="bg-navy-800 py-12 md:py-16">
        <div className="container-pro">
          <Breadcrumbs
            items={[
              { name: "خانه", href: "/" },
              { name: "اخبار و رویدادها", href: "/news-events" },
              { name: "CIIE 2026", href: "/news-events/ciie-2026" },
            ]}
          />
          <div className="flex items-center gap-4 text-white/50 text-sm mt-6 mb-3">
            <span className="flex items-center gap-1">
              <Calendar size={16} /> ۱۴۰۵/۰۸/۲۰
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} /> ۸ دقیقه مطالعه
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            نمایشگاه بین‌المللی واردات چین (CIIE) 2026: راهنمای جامع بازدید
          </h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
            نمایشگاه CIIE بزرگ‌ترین رویداد وارداتی چین است که هر سال در نوامبر
            در مرکز ملی نمایشگاه‌های شانگهای (NECC) برگزار می‌شود. در این راهنما،
            تمام نکات لازم برای بازدید حرفه‌ای و بهره‌برداری از این نمایشگاه را
            پوشش می‌دهیم.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-pro max-w-4xl">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://images.pexels.com/photos/35138560/pexels-photo-35138560.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="نمایشگاه CIIE شانگهای"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="prose-fa">
            <h2>نمایشگاه CIIE چیست؟</h2>
            <p>
              نمایشگاه بین‌المللی واردات چین (China International Import Expo)
              که برای اولین بار در سال ۲۰۱۸ برگزار شد، تنها نمایشگاه سطح ملی چین
              با تمرکز ویژه بر واردات است. این نمایشگاه در مرکز ملی نمایشگاه‌های
              شانگهای (National Exhibition and Convention Center - NECC) با
              مساحت بیش از ۳۶۰ هزار متر مربع برگزار می‌شود و میزبان بیش از ۳٬۰۰۰
              شرکت از ۱۵۰ کشور است.
            </p>
            <p>
              CIIE 2026 از ۵ تا ۱۰ نوامبر برگزار خواهد شد و شامل چهار بخش اصلی
              است: نمایشگاه تجاری کالا و خدمات، نمایشگاه کشورها، انجمن هم‌اندیشی
              اقتصادی بین‌المللی هنگکو و نمایشگاه نوآوری.
            </p>

            <h2>چرا باید از CIIE 2026 بازدید کنید؟</h2>
            <ul>
              <li><strong>دسترسی مستقیم به تأمین‌کنندگان:</strong> بیش از ۳٬۰۰۰ شرکت از صنایع مختلف در یک مکان</li>
              <li><strong>یافتن محصولات جدید:</strong> معرفی محصولات نوین و تکنولوژی‌های جدید</li>
              <li><strong>شبکه‌سازی بین‌المللی:</strong> ارتباط با شرکت‌های ۱۵۰ کشور</li>
              <li><strong>مذاکره مستقیم:</strong> گفتگو حضوری با مدیران شرکت‌های چینی</li>
              <li><strong>آشنایی با روندها:</strong> درک روندهای بازار چین و فرصت‌های واردات</li>
            </ul>

            <h2>ثبت‌نام و دریافت ویزا</h2>
            <p>
              برای بازدید از CIIE باید از قبل ثبت‌نام کنید. ثبت‌نام از طریق سایت
              رسمی نمایشگاه (ciie.org) انجام می‌شود. پس از ثبت‌نام، دعوت‌نامه
              رسمی برای دریافت ویزای تجاری چین (M Visa) صادر می‌شود. برای خدمات
              ویزا و سفر می‌توانید از{" "}
              <a
                href={EXTERNAL_LINKS.tourviza.url}
                target="_blank"
                rel="noopener"
              >
                {EXTERNAL_LINKS.tourviza.anchor}
              </a>{" "}
              استفاده کنید.
            </p>
            <p>
              مدارک لازم برای ویزا: پاسپورت با اعتبار ۶ ماه، دعوت‌نامه CIIE،
              گواهی تجاری، عکس و فرم ویزا. زمان صدور ویزا معمولاً ۴ تا ۷ روز کاری
              است.
            </p>

            <h2>آماده‌سازی قبل از سفر</h2>
            <ol>
              <li>بررسی لیست شرکت‌کنندگان و انتخاب غرفه‌های هدف</li>
              <li>رزرو هتل نزدیک NECC (حداقل ۲ ماه قبل)</li>
              <li>تهیه کارت ویزیت دو زبانه (فارسی-انگلیسی)</li>
              <li>آماده‌سازی لیست سوالات فنی و تجاری برای هر تأمین‌کننده</li>
              <li>دانلود اپلیکیشن رسمی CIIE برای نقشه و برنامه</li>
              <li>تهیه کیف راحت و کفش پیاده‌روی مناسب (۶ روز پیاده‌روی طولانی)</li>
              <li>شارژ کامل تلفن و پاوربانک</li>
            </ol>

            <h2>استراتژی بازدید از نمایشگاه</h2>
            <p>
              NECC بسیار بزرگ است و بازدید از همه غرفه‌ها در یک روز ممکن نیست.
              استراتژی پیشنهادی:
            </p>
            <ul>
              <li><strong>روز اول:</strong> بازدید کلی و آشنایی با بخش‌ها</li>
              <li><strong>روز دوم و سوم:</strong> تمرکز روی غرفه‌های هدف منتخب</li>
              <li><strong>روز چهارم:</strong> مذاکره عمیق با تأمین‌کنندگان منتخب</li>
              <li><strong>روز پنجم:</strong> بازدید از بخش نوآوری و کشورها</li>
            </ul>

            <h2>نکات مذاکره در نمایشگاه</h2>
            <ul>
              <li>قیمت نمایشگاهی معمولاً پایین‌ترین نیست؛ مذاکره برای سفارش بزرگ</li>
              <li>MOQ در نمایشگاه معمولاً قابل کاهش است</li>
              <li>نمونه رایگان بگیرید اما هزینه ارسال را هم بررسی کنید</li>
              <li>کاتالوگ و کارت ویزیت همه تأمین‌کنندگان را جمع کنید</li>
              <li>نکات کلیدی هر مذاکره را در دفتر یادداشت کنید</li>
              <li>قرارداد شفاهی نکنید؛ همه توافقات را مکتوب کنید</li>
            </ul>

            <h2>حمل‌ونقل و اقامت در شانگهای</h2>
            <p>
              فرودگاه Pudong (PVG) نزدیک‌ترین فرودگاه به NECC است. مترو خط ۲ تا
              ایستگاه Hongqiao Road دسترسی دارد. هتل‌های نزدیک NECC در منطقه
              Qingpu معمولاً ۸۰ تا ۲۰۰ دلار در شب هستند. برای رزرو هتل و سفرهای
              تجاری می‌توانید از{" "}
              <a
                href={EXTERNAL_LINKS.tourviza.url}
                target="_blank"
                rel="noopener"
              >
                {EXTERNAL_LINKS.tourviza.anchor}
              </a>{" "}
              کمک بگیرید.
            </p>

            <h2>بخش‌های اصلی CIIE 2026</h2>
            <table>
              <thead>
                <tr>
                  <th>بخش</th>
                  <th>صنایع</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>تجهیزات و ماشین‌آلات</td><td>CNC، روباتیک، خط تولید</td></tr>
                <tr><td>الکترونیک و IT</td><td>قطعات، گوشی، تکنولوژی</td></tr>
                <tr><td> خودرو</td><td>قطعات خودرو، خودرو برقی</td></tr>
                <tr><td>غذا و کشاورزی</td><td>مواد غذایی، فرآوری، بسته‌بندی</td></tr>
                <tr><td>پوشاک و منسوجات</td><td>پارچه، پوشاک، چرم</td></tr>
                <tr><td> خدمات</td><td>تجارت، مالی، لجستیک</td></tr>
              </tbody>
            </table>

            <h2>پس از نمایشگاه: پیگیری</h2>
            <p>
              پس از بازگشت از نمایشگاه، با تأمین‌کنندگان منتخب ایمیل پیگیری
              بفرستید. برای سفارش نمونه اقدام کنید و برای سفارش اصلی به{" "}
              <Link href="/import-from-shanghai/finding-suppliers">
                راهنمای یافتن تأمین‌کننده
              </Link>{" "}
              و{" "}
              <Link href="/import-from-shanghai/quality-control-guide">
                راهنمای کنترل کیفیت
              </Link>{" "}
              مراجعه کنید.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="برای بازvisit CIIE 2026 آماده شوید"
        description="ما در ثبت‌نام، ویزا، برنامه‌ریزی سفر و مذاکره با تأمین‌کنندگان در نمایشگاه CIIE شما را همراهی می‌کنیم."
      />
    </>
  );
}
