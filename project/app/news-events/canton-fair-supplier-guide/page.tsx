import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { EXTERNAL_LINKS } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Calendar, Clock, MapPin } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "راهنمای یافتن تأمین‌کننده در نمایشگاه کانتون",
  description:
    "راهنمای عملی بازدید از نمایشگاه کانتون: آماده‌سازی قبل از سفر، استراتژی گشتی، مذاکره با تأمین‌کنندگان و جلوگیری از اشتباهات رایج.",
  path: "/news-events/canton-fair-supplier-guide",
  type: "article",
  keywords: [
    "نمایشگاه کانتون",
    "Canton Fair",
    "تأمین‌کننده چین",
    "نمایشگاه گوانگژو",
    "یافتن تامین‌کننده",
    "بازدید نمایشگاه چین",
  ],
  publishedTime: "2026-10-26",
  modifiedTime: "2026-10-26",
});

export default function CantonFairSupplierGuide() {
  return (
    <>
      <SchemaMarkup
        breadcrumbs={[
          { name: "خانه", href: "/" },
          { name: "اخبار و رویدادها", href: "/news-events" },
          { name: "راهنمای کانتون", href: "/news-events/canton-fair-supplier-guide" },
        ]}
        article={{
          headline: "چگونه در نمایشگاه کانتون بهترین تأمین‌کننده را پیدا کنیم",
          datePublished: "2026-10-26",
          dateModified: "2026-10-26",
          author: "شانگهای سیتی",
          url: "https://shanghaicity.ir/news-events/canton-fair-supplier-guide",
        }}
      />

      <section className="bg-navy-800 py-12 md:py-16">
        <div className="container-pro">
          <Breadcrumbs
            items={[
              { name: "خانه", href: "/" },
              { name: "اخبار و رویدادها", href: "/news-events" },
              { name: "راهنمای کانتون", href: "/news-events/canton-fair-supplier-guide" },
            ]}
          />
          <div className="flex items-center gap-4 text-white/50 text-sm mt-6 mb-3">
            <span className="flex items-center gap-1">
              <Calendar size={16} /> ۱۴۰۵/۰۸/۱۰
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} /> ۷ دقیقه مطالعه
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            چگونه در نمایشگاه کانتون بهترین تأمین‌کننده را پیدا کنیم
          </h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
            نمایشگاه کانتون (Canton Fair) بزرگ‌ترین نمایشگاه تجاری چین است که هر
            سال بهار و پاییز در گوانگژو برگزار می‌شود. در این راهنما، استراتژی
            عملی برای یافتن بهترین تأمین‌کنندگان در این نمایشگاه را ارائه
            می‌دهیم.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-pro max-w-4xl">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://images.pexels.com/photos/38041486/pexels-photo-38041486.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="نمایشگاه کانتون گوانگژو"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="prose-fa">
            <h2>نمایشگاه کانتون چیست؟</h2>
            <p>
              نمایشگاه واردات و صادرات چین (Canton Fair) یا نمایشگاه گوانگژو،
              بزرگ‌ترین نمایشگاه تجاری چین است که از سال ۱۹۵۷ برگزار می‌شود. این
              نمایشگاه در سه فاز در مرکز نمایشگاهی Pazhou گوانگژو برگزار می‌شود
              و میزبان بیش از ۲۵٬۰۰۰ غرفه و ۲۰۰٬۰۰۰ بازدیدکننده از سراسر جهان
              است. فاز اول (الکترونیک و ماشین‌آلات)، فاز دوم (کالاهای مصرفی و
              تزئینی) و فاز سوم (منسوجات و پوشاک و کالاهای اوقات فراغت).
            </p>
            <p>
              برای آشنایی با نمایشگاه‌های شانگهای نیز می‌توانید{" "}
              <Link href="/news-events/ciie-2026">
                راهنمای بازدید CIIE 2026
              </Link>{" "}
              را مطالعه کنید.
            </p>

            <h2>آماده‌سازی قبل از سفر</h2>
            <p>موفقیت در کانتون از قبل از سفر شروع می‌شود:</p>
            <ol>
              <li>تعیین هدف: چه کالایی می‌خواهید وارد کنید؟ بودجه چقدر است؟</li>
              <li>بررسی لیست غرفه‌دانان در سایت رسمی Canton Fair</li>
              <li>انتخاب فاز مناسب بر اساس نوع کالا</li>
              <li>رزرو هتل نزدیک نمایشگاه (حداقل ۲ ماه قبل)</li>
              <li>دریافت ویزای تجاری چین (M Visa) - برای خدمات ویزا از{" "}
                <a
                  href={EXTERNAL_LINKS.tourviza.url}
                  target="_blank"
                  rel="noopener"
                >
                  {EXTERNAL_LINKS.tourviza.anchor}
                </a>{" "}
                استفاده کنید</li>
              <li>تهیه کارت ویزیت دو زبانه</li>
              <li>دانلود اپلیکیشن Canton Fair برای نقشه و برنامه</li>
            </ol>

            <h2>استراتژی گشتی در نمایشگاه</h2>
            <p>
              نمایشگاه بسیار بزرگ است (بیش از ۱.۱۸ میلیون متر مربع) و بدون
              استراتژی، زمان و انرژی خود را هدر می‌دهید:
            </p>
            <ul>
              <li><strong>روز اول:</strong> بازدید کلی از بخش هدف، جمع‌آوری کاتالوگ</li>
              <li><strong>روز دوم:</strong> بازدید عمیق از غرفه‌های منتخب روز اول</li>
              <li><strong>روز سوم:</strong> مذاکره قیمت و شرایط با ۵ تا ۱۰ تأمین‌کننده منتخب</li>
              <li><strong>روز چهارم:</strong> بازدید از غرفه‌های بخش‌های مرتبط</li>
            </ul>

            <h2>معیارهای انتخاب تأمین‌کننده</h2>
            <p>هنگام ارزیابی غرفه‌ها به این نکات توجه کنید:</p>
            <ul>
              <li>آیا محصول با کیفیت مطلوب نمایش داده می‌شود؟</li>
              <li>آیا غرفه بزرگ و حرفه‌ای است (نشان سرمایه شرکت)؟</li>
              <li>آیا персонаل به سوالات فنی پاسخ دقیق می‌دهد؟</li>
              <li>آیا کاتالوگ کامل و حرفه‌ای دارند؟</li>
              <li>آیا MOQ و قیمت نمایشگاهی منطقی است؟</li>
              <li>آیا گواهی‌های کیفیت (CE، FCC، ISO) دارند؟</li>
              <li>آیا امکان ارسال نمونه دارند؟</li>
            </ul>

            <h2>نکات مذاکره در کانتون</h2>
            <ol>
              <li>قیمت نمایشگاهی نهایی نیست؛ برای سفارش بزرگ تخفیف بگیرید</li>
              <li>MOQ را مذاکره کنید - در نمایشگاه معمولاً قابل کاهش است</li>
              <li>زمان تولید (Lead Time) را دقیق بپرسید</li>
              <li>شرایط پرداخت را شفاف کنید (TT یا LC)</li>
              <li>اینکوترمز (FOB یا CIF) را مشخص کنید</li>
              <li>بسته‌بندی و برچسب‌گذاری را برای بازار ایران توضیح دهید</li>
              <li>تاریخ تحویل نهایی را مکتوب کنید</li>
            </ol>

            <h2>اشتباهات رایج در کانتون</h2>
            <ul>
              <li>تصمیم شتاب‌زده در روز اول و امضای قرارداد بدون بررسی</li>
              <li>فقط بر اساس قیمت انتخاب کردن (کیفیت مهم‌تر است)</li>
              <li>عدم درخواست نمونه قبل از سفارش اصلی</li>
              <li>اعتماد به وعده‌های شفاهی بدون قرارداد مکتوب</li>
              <li>عدد ثبت اطلاعات تماس غرفه‌دانان</li>
              <li>عدم بازرسی کارخانه پس از نمایشگاه</li>
            </ul>

            <h2>پس از نمایشگاه: پیگیری و بازرسی</h2>
            <p>
              پس از بازگشت، با تأمین‌کنندگان منتخب ایمیل پیگیری بفرستید و نمونه
              درخواست کنید. قبل از سفارش اصلی حتماً بازرسی کارخانه انجام دهید
              (به{" "}
              <Link href="/import-from-shanghai/finding-suppliers">
                راهنمای یافتن تأمین‌کننده
              </Link>{" "}
              مراجعه کنید). کنترل کیفیت پیش از بارگیری را فراموش نکنید ({" "}
              <Link href="/import-from-shanghai/quality-control-guide">
                راهنمای کنترل کیفیت
              </Link>{" "}
              را ببینید).
            </p>

            <h2>حمل‌ونقل پس از کانتون</h2>
            <p>
              گوانگژو در جنوب چین است و بندر Shenzhen نزدیک‌ترین بندر بزرگ است.
              حمل دریایی از Shenzhen به بندرعباس ۲۰ تا ۲۶ روز طول می‌کشد. برای
              راهنمای کامل به{" "}
              <Link href="/shipping-logistics">
                راهنمای حمل‌ونقل و لجستیک
              </Link>{" "}
              مراجعه کنید. اگر مسیر ترکیه را ترجیح می‌دهید، از{" "}
              <a
                href={EXTERNAL_LINKS.istanbulService.url}
                target="_blank"
                rel="noopener"
              >
                {EXTERNAL_LINKS.istanbulService.anchor}
              </a>{" "}
              استفاده کنید.
            </p>

            <h2>توصیه نهایی</h2>
            <p>
              نمایشگاه کانتون فرصت بی‌نظیری برای یافتن تأمین‌کننده است اما بدون
              آماده‌سازی و استراتژی، نتیجه مطلوب نخواهد بود. با برنامه‌ریزی
              دقیق، مذاکره حرفه‌ای و پیگیری صحیح، می‌توانید شریک تجاری مطمئنی
              برای واردات از چین پیدا کنید.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="برای بازvisit کانتون آماده شوید"
        description="ما در ویزا، برنامه‌ریزی سفر، مذاکره و بازرسی تأمین‌کنندگان در نمایشگاه کانتون شما را همراهی می‌کنیم."
      />
    </>
  );
}
