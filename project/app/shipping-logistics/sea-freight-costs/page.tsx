import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata = generatePageMetadata({
  title: "هزینه‌های حمل دریایی از شانگهای به ایران",
  description:
    "راهنمای جامع هزینه‌های حمل دریایی FCL و LCL از شانگهای به بندرعباس: نرخ کانتینر، عوارض، بیمه، کارمز ترخیص و عوامل مؤثر بر قیمت.",
  path: "/shipping-logistics/sea-freight-costs",
  keywords: [
    "هزینه حمل دریایی چین",
    "قیمت کانتینر شانگهای",
    "FCL هزینه",
    "LCL هزینه",
    "حمل دریایی بندرعباس",
    "کرایه کشتی چین",
  ],
});

const faqs = [
  {
    question: "هزینه کانتینر ۲۰ فوت از شانگهای چقدر است؟",
    answer:
      "هزینه FCL 20 فوت از شانگهای به بندرعباس در حالت عادی ۸۰۰ تا ۱٬۵۰۰ دلار متغیر است. این نرخ بستگی به فصل، خط کشتیرانی، نوسانات ارزی و تقاضای بازار دارد. در فصل اوج (سپتامبر تا ژانویه) نرخها معمولاً ۲۰ تا ۴۰٪ بالاتر است.",
  },
  {
    question: "چه عواملی بر هزینه حمل دریایی تأثیر می‌گذارند؟",
    answer:
      "عوامل اصلی: فصل (پیک و Off-Peak)، نوسانات نرخ ارز، نوسانات بازار جهانی کشتیرانی، نوع کالا (خطرناک، برودتی)، حجم محموله، خط کشتیرانی انتخابی، سوخت‌بونی (BAF) و عوارض گمرکی مقصد.",
  },
  {
    question: "LCL چه زمانی توجیه‌پذیر است؟",
    answer:
      "LCL برای حجم زیر ۱۵ CBM توجیه‌پذیر است. بالاتر از ۱۵ CBM، FCL معمولاً ارزان‌تر تمام می‌شود. LCL هزینه per CBM بالاتر دارد اما برای تست بازار و سفارش‌های کوچک بسیار مناسب است.",
  },
  {
    question: "هزینه‌های پنهان حمل دریایی چیست؟",
    answer:
      "هزینه‌های پنهان شامل: THC (Terminal Handling Charge) در مبدأ و مقصد، کارمز انبارداری، عوارض گمرکی، هزینه بیل لادن، کارمز ترخیص‌کار، هزینه مهر و تایید مدارک، و بیمه. همیشه از شرکت حمل بخواهید هزینه‌های All-In را مشخص کند.",
  },
];

export default function SeaFreightCosts() {
  return (
    <>
      <SchemaMarkup
        breadcrumbs={[
          { name: "خانه", href: "/" },
          { name: "حمل‌ونقل و لجستیک", href: "/shipping-logistics" },
          { name: "هزینه‌های حمل دریایی", href: "/shipping-logistics/sea-freight-costs" },
        ]}
        faq={faqs}
      />

      <section className="bg-navy-800 py-12 md:py-16">
        <div className="container-pro">
          <Breadcrumbs
            items={[
              { name: "خانه", href: "/" },
              { name: "حمل‌ونقل و لجستیک", href: "/shipping-logistics" },
              { name: "هزینه‌های حمل دریایی", href: "/shipping-logistics/sea-freight-costs" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
            هزینه‌های حمل دریایی از شانگهای به ایران
          </h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
            درک ساختار هزینه‌های حمل دریایی برای کنترل بودجه واردات ضروری است.
            در این راهنما، نرخ‌های فعلی کانتینر، عوارض پنهان، بیمه و عوامل مؤثر
            بر قیمت را به‌طور شفاف بررسی می‌کنیم. برای دیدن تصویر کلی به{" "}
            <Link href="/shipping-logistics">
              راهنمای حمل‌ونقل و لجستیک
            </Link>{" "}
            مراجعه کنید.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-pro max-w-4xl prose-fa">
          <h2>نرخ‌های پایه حمل دریایی (شانگهای → بندرعباس)</h2>
          <table>
            <thead>
              <tr>
                <th>نوع خدمت</th>
                <th>نرخ تقریبی (دلار)</th>
                <th>واحد</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>FCL 20 فوت</td><td>۸۰۰ - ۱٬۵۰۰</td><td>per container</td></tr>
              <tr><td>FCL 40 فوت</td><td>۱٬۲۰۰ - ۲٬۲۰۰</td><td>per container</td></tr>
              <tr><td>FCL 40HQ</td><td>۱٬۳۰۰ - ۲٬۴۰۰</td><td>per container</td></tr>
              <tr><td>LCL</td><td>۴۰ - ۸۰</td><td>per CBM</td></tr>
              <tr><td>حداقل LCL</td><td>۱ CBM</td><td>-</td></tr>
            </tbody>
          </table>
          <p>
            نکته: این نرخ‌ها در حالت عادی است. در فصل اوج (پیش از نوروز و کریسمس)
            نرخها ۲۰ تا ۴۰ درصد افزایش می‌یابد. نوسانات ارزی و وضعیت بازار جهانی
            کشتیرانی نیز تأثیر مستقیم دارد.
          </p>

          <h2>تجزیه کامل هزینه‌های حمل دریایی</h2>
          <p>هزینه‌های حمل دریایی شامل چند بخش است:</p>
          <table>
            <thead>
              <tr>
                <th>بخش هزینه</th>
                <th>مبلغ تقریبی (دلار)</th>
                <th>توضیح</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>کرایه کشتی (Ocean Freight)</td><td>۸۰۰ - ۱٬۵۰۰</td><td>نرخ پایه FCL 20ft</td></tr>
              <tr><td>THC مبدأ</td><td>۱۰۰ - ۱۸۰</td><td>هزینه جابجایی در ترمینال شانگهای</td></tr>
              <tr><td>THC مقصد</td><td>۱۵۰ - ۲۵۰</td><td>هزینه جابجایی در بندرعباس</td></tr>
              <tr><td>بیل لادن (B/L Fee)</td><td>۳۰ - ۵۰</td><td>صدور بارنامه</td></tr>
              <tr><td>BAF (سوخت‌بونی)</td><td>۵۰ - ۲۰۰</td><td>نوسان قیمت سوخت</td></tr>
              <tr><td>بیمه حمل</td><td>۰.۲-۰.۵٪ ارزش</td><td>All Risks coverage</td></tr>
              <tr><td>کارمز ترخیص</td><td>۱۰۰ - ۳۰۰</td><td>ترخیص‌کار گمرک</td></tr>
              <tr><td>انبارداری</td><td>۱۰-۲۰ per روز</td><td>در صورت تأخیر در ترخیص</td></tr>
              <tr><td>مجموع تقریبی (بدون بیمه)</td><td>۱٬۲۳۰ - ۲٬۴۸۰</td><td>برای FCL 20ft</td></tr>
            </tbody>
          </table>

          <h2>عوامل مؤثر بر نرخ حمل دریایی</h2>
          <ul>
            <li><strong>فصل:</strong> سپتامبر تا ژانویه فصل اوج (نرخ بالاتر)، فوریه تا ژوئن Off-Peak (نرخ پایین‌تر)</li>
            <li><strong>نوع کالا:</strong> کالای خطرناک (IMO Class) ۵۰-۱۰۰٪ گران‌تر، برودتی (Reefer) ۲-۳ برابر</li>
            <li><strong>خط کشتیرانی:</strong> COSCO معمولاً ارزان‌تر، Maersk گران‌تر اما با服务质量 بهتر</li>
            <li><strong>زمان رزرو:</strong> رزرو ۳-۴ هفته قبل از بارگیری معمولاً ارزان‌تر</li>
            <li><strong>حجم:</strong> قرارداد سالانه با حجم بالا تخفیف ۱۰-۲۰٪ می‌آورد</li>
            <li><strong>نوسانات ارزی:</strong> تغییر نرخ دلار به یوان و ریال تأثیر مستقیم</li>
          </ul>

          <h2>FCL یا LCL: کدام اقتصادی‌تر؟</h2>
          <p>
            قانون کلی: اگر حجم محموله بیش از ۱۵ CBM باشد، FCL اقتصادی‌تر است. زیر
            ۱۵ CBM، LCL بهتر است. مثال: اگر ۱۰ CBM کالا دارید، هزینه LCL حدود
            ۴۰۰-۸۰۰ دلار است اما FCL ۲۰ فوت حداقل ۸۰۰-۱٬۵۰۰ دلار هزینه دارد. اما
            اگر ۲۰ CBM دارید، FCL با ۱٬۰۰۰ دلار ارزان‌تر از LCL با ۱٬۲۰۰ دلار است.
          </p>

          <h2>نکات کاهش هزینه حمل دریایی</h2>
          <ol>
            <li>رزرو زودهنگام (۳-۴ هفته قبل) برای دریافت نرخ بهتر</li>
            <li>مذاکره با چند خط کشتیرانی و مقایسه نرخ All-In</li>
            <li>استفاده از فورواردر ایرانی معتبر برای نرخ تلفیقی</li>
            <li>تجمیع محموله‌های کوچک به FCL در صورت امکان</li>
            <li>انتخاب Incoterm مناسب (FOB برای کنترل هزینه حمل)</li>
            <li>اجتناب از انبارداری با ترخیص سریع (۳ روز رایگان)</li>
            <li>قرارداد سالانه با حجم تضمینی برای تخفیف</li>
          </ol>

          <h2>سوالات متداول</h2>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-pro max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        title="هزینه حمل خود را بهینه کنید"
        description="ما با شبکه گسترده خطوط کشتیرانی، بهترین نرخ حمل دریایی از شانگهای را برای شما تضمین می‌کنیم."
      />
    </>
  );
}
