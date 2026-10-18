import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { EXTERNAL_LINKS } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Calendar, Clock } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "تغییرات جدید تعرفه‌های واردات از چین در سال ۲۰۲۶",
  description:
    "بررسی کامل تغییرات تعرفه گمرکی واردات از چین در سال ۲۰۲۶: کدام کالاها ارزان‌تر شدند، کدام گران‌تر و راهنمای تطبیق با قوانین جدید.",
  path: "/news-events/tariff-changes-2026",
  type: "article",
  keywords: [
    "تعرفه واردات ۲۰۲۶",
    "حقوق ورود چین",
    "تغییرات گمرکی",
    "عوارض واردات",
    "تعرفه گمرکی ایران",
    "واردات کالا ۲۰۲۶",
  ],
  publishedTime: "2026-10-31",
  modifiedTime: "2026-10-31",
});

export default function TariffChanges2026() {
  return (
    <>
      <SchemaMarkup
        breadcrumbs={[
          { name: "خانه", href: "/" },
          { name: "اخبار و رویدادها", href: "/news-events" },
          { name: "تغییرات تعرفه ۲۰۲۶", href: "/news-events/tariff-changes-2026" },
        ]}
        article={{
          headline: "تغییرات جدید تعرفه‌های واردات از چین در سال ۲۰۲۶",
          datePublished: "2026-10-31",
          dateModified: "2026-10-31",
          author: "شانگهای سیتی",
          url: "https://shanghaicity.ir/news-events/tariff-changes-2026",
        }}
      />

      <section className="bg-navy-800 py-12 md:py-16">
        <div className="container-pro">
          <Breadcrumbs
            items={[
              { name: "خانه", href: "/" },
              { name: "اخبار و رویدادها", href: "/news-events" },
              { name: "تغییرات تعرفه ۲۰۲۶", href: "/news-events/tariff-changes-2026" },
            ]}
          />
          <div className="flex items-center gap-4 text-white/50 text-sm mt-6 mb-3">
            <span className="flex items-center gap-1">
              <Calendar size={16} /> ۱۴۰۵/۰۸/۱۵
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} /> ۶ دقیقه مطالعه
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            تغییرات جدید تعرفه‌های واردات از چین در سال ۲۰۲۶
          </h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
            سال ۲۰۲۶ با تغییرات مهم در تعرفه‌های گمرکی واردات از چین همراه است.
            در این مقاله، تغییرات کلیدی، تأثیر بر واردکنندگان و استراتژی‌های
            تطبیق را به‌طور کامل بررسی می‌کنیم.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-pro max-w-4xl">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image
              src="https://images.pexels.com/photos/6169133/pexels-photo-6169133.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="تغییرات تعرفه گمرکی"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="prose-fa">
            <h2>خلاصه تغییرات کلیدی</h2>
            <p>
              در سال ۲۰۲۶، گمرک ایران تغییرات متعددی در تعرفه‌های وارداتی اعمال
              کرده است. این تغییرات شامل کاهش حقوق ورود برای کالاهای سرمایه‌ای و
              تولیدی، افزایش عوارض برای کالاهای لوکس و تغییر در فرآیند ثبت سفارش
              است. برای واردکنندگان از شانگهای، درک این تغییرات برای محاسبه دقیق
              هزینه و قیمت‌گذاری حیاتی است.
            </p>

            <h2>کاهش تعرفه برای کالاهای سرمایه‌ای</h2>
            <p>
              دولت ایران با هدف حمایت از تولید داخلی، حقوق ورود برای ماشین‌آلات
              صنعتی و تجهیزات تولیدی که در داخل کشور تولید نمی‌شوند را کاهش داده
              است:
            </p>
            <table>
              <thead>
                <tr>
                  <th>نوع کالا</th>
                  <th>تعرفه قبلی</th>
                  <th>تعرفه جدید ۲۰۲۶</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>ماشین‌آلات CNC</td><td>۱۵٪</td><td>۱۰٪</td></tr>
                <tr><td>تجهیزات بسته‌بندی</td><td>۲۰٪</td><td>۱۵٪</td></tr>
                <tr><td>خطوط تولید نساجی</td><td>۱۸٪</td><td>۱۲٪</td></tr>
                <tr><td>تجهیزات پزشکی پیشرفته</td><td>۱۰٪</td><td>۵٪</td></tr>
                <tr><td>ربات‌های صنعتی</td><td>۱۵٪</td><td>۸٪</td></tr>
              </tbody>
            </table>

            <h2>افزایش تعرفه برای کالاهای مصرفی لوکس</h2>
            <p>
              در مقابل، حقوق ورود برای کالاهای مصرفی لوکس و غیرضروری افزایش یافته
              است:
            </p>
            <table>
              <thead>
                <tr>
                  <th>نوع کالا</th>
                  <th>تعرفه قبلی</th>
                  <th>تعرفه جدید ۲۰۲۶</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>گوشی‌های هوشمند لوکس</td><td>۲۵٪</td><td>۳۵٪</td></tr>
                <tr><td>ساعت‌های هوشمند</td><td>۲۰٪</td><td>۳۰٪</td></tr>
                <tr><td>لوازم آرایشی لوکس</td><td>۳۰٪</td><td>۴۰٪</td></tr>
                <tr><td>اسباب‌بازی‌های الکترونیکی</td><td>۳۵٪</td><td>۴۵٪</td></tr>
              </tbody>
            </table>

            <h2>تغییرات فرآیند ثبت سفارش</h2>
            <p>
              در سال ۲۰۲۶، فرآیند ثبت سفارش در سامانه جامع تجات نیز تغییر کرده
              است. از مهم‌ترین تغییرات:
            </p>
            <ul>
              <li>کاهش زمان تأیید ثبت سفارش از ۱۰ به ۵ روز کاری برای کالاهای تأییدشده</li>
              <li>افزایش نظارت بر ارزش‌گذاری کالا (Anti-Dumping)</li>
              <li>الزام به ارائه گواهی بازرسی پیش از بارگیری برای کالاهای حساس</li>
              <li>ساده‌سازی ثبت سفارش برای کالاهای زیر ۱۰ هزار دلار</li>
              <li>الزام به استاندارد برای ۱۲ دسته کالای جدید</li>
            </ul>

            <h2>راهنمای تطبیق با تغییرات</h2>
            <p>برای واردکنندگان از شانگهای، توصیه‌های عملی:</p>
            <ol>
              <li>قبل از ثبت سفارش، کد تعرفه و حقوق ورود جدید را استعلام کنید</li>
              <li>برای کالاهای سرمایه‌ای، از کاهش تعرفه بهره ببرید و سرمایه‌گذاری کنید</li>
              <li>برای کالاهای لوکس، قیمت‌گذاری مجدد انجام دهید</li>
              <li>گواهی بازرسی پیش از بارگیری را جدی بگیرید ({" "}
                <Link href="/import-from-shanghai/quality-control-guide">
                  راهنمای کنترل کیفیت
                </Link>{" "}
                را ببینید)</li>
              <li>فرآیند ترخیص را با{" "}
                <Link href="/shipping-logistics/customs-clearance">
                  راهنمای ترخیص گمرکی
                </Link>{" "}
                هماهنگ کنید</li>
            </ol>

            <h2>تأثیر بر هزینه نهایی واردات</h2>
            <p>
              برای درک تأثیر تغییرات، مثال عملی: واردات دستگاه CNC با ارزش CIF
              ۲۰٬۰۰۰ دلار:
            </p>
            <ul>
              <li><strong>تعرفه قبلی (۱۵٪):</strong> حقوق ورود = ۳٬۰۰۰ دلار + VAT = ۲٬۰۷۷ دلار → مجموع = ۵٬۰۷۷ دلار</li>
              <li><strong>تعرفه جدید (۱۰٪):</strong> حقوق ورود = ۲٬۰۰۰ دلار + VAT = ۱٬۹۹۸ دلار → مجموع = ۳٬۹۹۸ دلار</li>
              <li><strong>صرفه‌جویی:</strong> ۱٬۰۷۹ دلار (۲۱٪ کاهش هزینه گمرکی)</li>
            </ul>

            <h2>فرصت‌های جدید و چالش‌ها</h2>
            <p>
              این تغییرات فرصت‌هایی برای واردکنندگان ماشین‌آلات و تجهیزات تولیدی
              فراهم می‌کند. در مقابل، واردکنندگان کالاهای مصرفی لوکس با افزایش
              هزینه مواجه هستند. برای تطبیق، می‌توانید به واردات کالاهای تولیدی
              و سرمایه‌ای تغییر مسیر دهید یا از{" "}
              <a
                href={EXTERNAL_LINKS.yerevantours.url}
                target="_blank"
                rel="noopener"
              >
                {EXTERNAL_LINKS.yerevantours.anchor}
              </a>{" "}
              برای گزینه‌های تجاری منطقه‌ای استفاده کنید.
            </p>

            <h2>توصیه نهایی</h2>
            <p>
              با توجه به تغییرات مستمر تعرفه‌ها، توصیه می‌کنیم قبل از هر سفارش،
              با مشاور تجاری هماهنگ باشید. برای درک کامل فرآیند واردات به{" "}
              <Link href="/import-from-shanghai">
                راهنمای کامل واردات از شانگهای
              </Link>{" "}
              مراجعه کنید و برای محاسبه دقیق هزینه‌های حمل به{" "}
              <Link href="/shipping-logistics/sea-freight-costs">
                راهنمای هزینه‌های حمل دریایی
              </Link>{" "}
              بروید.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="با تغییرات تعرفه هماهنگ بمانید"
        description="ما تغییرات تعرفه و قوانین گمرکی را به‌روز رصد می‌کنیم و شما را برای تصمیم درست راهنمایی می‌کنیم."
      />
    </>
  );
}
