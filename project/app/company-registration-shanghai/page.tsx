import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Building2, FileText, Calendar, DollarSign } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "ثبت شرکت در شانگهای چین - راهنمای جامع",
  description:
    "راهنمای کامل ثبت شرکت در شانگهای: انواع WFOE، JV و دفتر نمایندگی، مدارک لازم، مراحل ثبت، هزینه‌ها، مالیات و ویزای تجاری چین.",
  path: "/company-registration-shanghai",
  keywords: [
    "ثبت شرکت در چین",
    "ثبت شرکت در شانگهای",
    "WFOE چین",
    "دفتر نمایندگی شانگهای",
    "شرکت سرمایه گذاری مشترک چین",
    "مالیات شرکت در چین",
    "ویزای تجاری چین",
  ],
});

const faqs = [
  {
    question: "WFOE چیست و چه مزایایی دارد؟",
    answer:
      "WFOE (Wholly Foreign-Owned Enterprise) شرکتی است که ۱۰۰٪ با سرمایه خارجی در چین ثبت می‌شود. مزایای اصلی شامل کنترل کامل مدیریت، عدم نیاز به شریک چینی، امکان واردات و صادرات مستقیم و انتقال سود به خارج از چین است. حداقل سرمایه معمولاً ۱۴ تا ۵۰ هزار دلار است.",
  },
  {
    question: "ثبت شرکت در شانگهای چقدر طول می‌کشد؟",
    answer:
      "فرآیند ثبت WFOE در شانگهای معمولاً ۲ تا ۴ ماه طول می‌کشد. این مدت شامل تأیید نام (۵ تا ۱۰ روز)، آماده‌سازی مدارک (۲ تا ۴ هفته)، ثبت در SAIC (۲ تا ۴ هفته)، افتتاح حساب بانکی و ثبت مالیاتی (۱ تا ۲ هفته) است.",
  },
  {
    question: "آیا برای ثبت شرکت در چین حضور فیزیکی لازم است؟",
    answer:
      "برای مراحل اولیه می‌توانید از طریق نماینده حقوقی اقدام کنید، اما برای افتتاح حساب بانکی و امضای برخی مدارک، حضور مدیرعامل یا نماینده رسمی در شانگهای الزامی است. معمولاً یک سفر ۳ تا ۵ روزه کافی است.",
  },
  {
    question: "مالیات شرکت در شانگهای چقدر است؟",
    answer:
      "مالیات شرکت در شانگهای شامل مالیات بر درآمد (۲۵٪)، مالیات بر ارزش افزوده (۶ تا ۱۳٪ بسته به صنعت) و مالیات بر سود dividende (۱۰٪) است. در منطقه آزاد Pudong و Lin'gang، معافیت‌های مالیاتی قابل توجهی برای صنایع هدف ارائه می‌شود.",
  },
  {
    question: "تفاوت WFOE، JV و RO چیست؟",
    answer:
      "WFOE شرکت ۱۰۰٪ خارجی با استقلال کامل است. JV (Joint Venture) شرکت مشترک با شریک چینی است که برای صنایع خاص الزامی است. RO (Representative Office) دفتر نمایندگی است که نمی‌تواند فعالیت تجاری مستقیم یا فاکتور صادر کند، فقط فعالیت‌های تحقیقاتی و ارتباطی دارد.",
  },
  {
    question: "حداقل سرمایه برای ثبت WFOE چقدر است؟",
    answer:
      "حداقل سرمایه ثابت قانونی وجود ندارد، اما در عمل بانک‌ها و مراجع ثبت معمولاً حداقل ۱۴ تا ۵۰ هزار دلار سرمایه ثبت نیاز دارند. بسته به نوع فعالیت ممکن است سرمایه بیشتری لازم باشد. سرمایه باید ظرف ۳۰ روز به حساب شرکت واریز شود.",
  },
];

const companyTypes = [
  {
    icon: Building2,
    name: "WFOE",
    fullName: "Wholly Foreign-Owned Enterprise",
    desc: "شرکت ۱۰۰٪ خارجی با کنترل کامل",
    capital: "۱۴ تا ۵۰ هزار دلار",
    time: "۲ تا ۴ ماه",
    best: "بیشتر کسب‌وکارها",
  },
  {
    icon: Building2,
    name: "JV",
    fullName: "Joint Venture (EJV/CJV)",
    desc: "شرکت مشترک با شریک چینی",
    capital: "بسته به توافق",
    time: "۳ تا ۵ ماه",
    best: "صنایع محدودشده",
  },
  {
    icon: FileText,
    name: "RO",
    fullName: "Representative Office",
    desc: "دفتر نمایندگی بدون فعالیت تجاری مستقیم",
    capital: "نیاز ندارد",
    time: "۱ تا ۲ ماه",
    best: "تحقیقات بازار و ارتباطات",
  },
];

export default function CompanyRegistration() {
  return (
    <>
      <SchemaMarkup
        breadcrumbs={[
          { name: "خانه", href: "/" },
          { name: "ثبت شرکت در شانگهای", href: "/company-registration-shanghai" },
        ]}
        faq={faqs}
      />

      <section className="bg-navy-800 py-12 md:py-16">
        <div className="container-pro">
          <Breadcrumbs
            items={[
              { name: "خانه", href: "/" },
              { name: "ثبت شرکت در شانگهای", href: "/company-registration-shanghai" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
            راهنمای جامع ثبت شرکت در شانگهای
          </h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
            ثبت شرکت در شانگهای، پل ورود به بزرگ‌ترین بازار جهان است. در این
            راهنما، انواع ساختار شرکتی، مدارک لازم، مراحل ثبت، هزینه‌ها،
            مالیات و دریافت ویزای تجاری را به‌صورت کامل و کاربردی بررسی می‌کنیم.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-pro max-w-4xl prose-fa">
          <h2>چرا در شانگهای شرکت ثبت کنیم؟</h2>
          <p>
            شانگهای با تولید ناخالص داخلی معادل ۶۸۰ میلیارد دلار، میزبان بیش از
            ۸۰۰ شرکت Fortune 500 و بزرگ‌ترین بندر کانتینری جهان است. ثبت شرکت در
            شانگهای مزایای متعددی دارد:
          </p>
          <ul>
            <li><strong>دسترسی مستقیم به بازار چین:</strong> امکان فروش و واردات مستقیم بدون واسطه</li>
            <li><strong>منطقه آزاد Pudong:</strong> معافیت‌های مالیاتی و قوانین تسهیل‌شده ارزی</li>
            <li><strong>زیرساخت‌های پیشرفته:</strong> بانکداری بین‌المللی، خدمات حقوقی و لجستیک</li>
            <li><strong>تصمیم‌گیری مستقل:</strong> در WFOE کنترل کامل مدیریت و استراتژی</li>
            <li><strong>اعتبار برند:</strong> آدرس شانگهای ارزش برندی بالایی در بازارهای بین‌المللی دارد</li>
            <li><strong>دریافت ویزای M:</strong> امکان دعوت از شرکای تجاری و دریافت ویزای تجاری</li>
          </ul>

          <h2>انواع ساختار شرکت در شانگهای</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 not-prose">
            {companyTypes.map((type, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:border-gold-300 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-800 rounded-xl mb-3">
                  <type.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-1">{type.name}</h3>
                <p className="text-xs text-gray-500 mb-3">{type.fullName}</p>
                <p className="text-sm text-gray-700 mb-3">{type.desc}</p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p><strong>سرمایه:</strong> {type.capital}</p>
                  <p><strong>زمان ثبت:</strong> {type.time}</p>
                  <p><strong>مناسب:</strong> {type.best}</p>
                </div>
              </div>
            ))}
          </div>

          <h3>WFOE (شرکت ۱۰۰٪ خارجی)</h3>
          <p>
            WFOE محبوب‌ترین ساختار برای سرمایه‌گذاران خارجی است. کنترل کامل،
            امکان واردات و صادرات مستقیم، صدور فاکتور رسمی و انتقال سود به کشور
            مبدأ از مزایای اصلی آن است. حداقل سرمایه معمولاً ۱۴ تا ۵۰ هزار دلار
            است و باید ظرف ۳۰ روز به حساب شرکت واریز شود.
          </p>

          <h3>JV (شرکت سرمایه‌گذاری مشترک)</h3>
          <p>
            در برخی صنایع محدودشده مانند رسانه، مخابرات و برخی خدمات مالی، ثبت
            شرکت با شریک چینی الزامی است. دو نوع EJV (سهامی) و CJV (تعاونی) وجود
            دارد. توافق سهامداران باید با دقت تنظیم شود زیرا اختلاف با شریک
            چینی یکی از چالش‌های اصلی است.
          </p>

          <h3>RO (دفتر نمایندگی)</h3>
          <p>
            دفتر نمایندگی ساده‌ترین و کم‌هزینه‌ترین گزینه است اما محدودیت‌های
            جدی دارد: نمی‌تواند فاکتور صادر کند، قرارداد تجاری امضا کند یا سود
            کسب کند. فقط برای تحقیقات بازار، ارتباط با شرکای چینی و نظارت بر
            تولید مناسب است.
          </p>

          <h2>مدارک لازم برای ثبت WFOE</h2>
          <ul>
            <li>کپی پاسپورت مدیرعامل و سهامداران</li>
            <li>مدارک ثبت شرکت مبدأ (ترجمه و تأیید شده توسط کنسولگری چین)</li>
            <li>گواهی بانکی اعتبار مالی (Bank Reference Letter)</li>
            <li>آدرس اجاره‌شده در شانگهای (قرارداد اجاره تجاری)</li>
            <li>اساسنامه شرکت (Articles of Association)</li>
            <li>نام پیشنهادی شرکت (۳ نام لاتین به چینی و انگلیسی)</li>
            <li>دامنه فعالیت شرکت (Business Scope)</li>
            <li>معرفی مدیر مالی و ناظر حقوقی (Supervisor)</li>
            <li>مدارک گمركی در صورت فعالیت واردات/صادرات</li>
          </ul>

          <h2>مراحل ثبت WFOE در شانگهای</h2>
          <ol>
            <li><strong>تأیید نام شرکت:</strong> ثبت ۳ نام پیشنهادی در SAIC (۵ تا ۱۰ روز)</li>
            <li><strong>آماده‌سازی مدارک:</strong> ترجمه و تأیید مدارک، تنظیم اساسنامه (۲ تا ۴ هفته)</li>
            <li><strong>ثبت در SAIC:</strong> تأیید نهایی و دریافت گواهی ثبت (۲ تا ۴ هفته)</li>
            <li><strong>ساخت مهر شرکت:</strong> مهر رسمی شرکت در شانگهای (۳ تا ۵ روز)</li>
            <li><strong>افتتاح حساب بانکی:</strong> حساب سرمایه و حساب عملیاتی (۱ تا ۲ هفته)</li>
            <li><strong>ثبت مالیاتی:</strong> ثبت در اداره مالیات و دریافت گواهی (۵ تا ۱۰ روز)</li>
            <li><strong>ثبت گمرکی:</strong> برای فعالیت تجاری (۱ تا ۲ هفته)</li>
            <li><strong>ثبت تامین اجتماعی:</strong> برای استخدام کارگر (۵ روز)</li>
          </ol>

          <h2>هزینه‌های ثبت WFOE</h2>
          <table>
            <thead>
              <tr>
                <th>بخش هزینه</th>
                <th>مبلغ تقریبی (دلار)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>مشاور حقوقی و ثبت</td><td>۲٬۵۰۰ - ۵٬۰۰۰</td></tr>
              <tr><td>ترجمه و تأیید مدارک</td><td>۵۰۰ - ۱٬۰۰۰</td></tr>
              <tr><td>اجاره دفتر (سالانه)</td><td>۵٬۰۰۰ - ۲۰٬۰۰۰</td></tr>
              <tr><td>حداقل سرمایه</td><td>۱۴٬۰۰۰ - ۵۰٬۰۰۰</td></tr>
              <tr><td>مهر و امور اداری</td><td>۲۰۰ - ۵۰۰</td></tr>
              <tr><td>ثبت مالیاتی و گمرکی</td><td>۳۰۰ - ۸۰۰</td></tr>
              <tr><td>مجموع تقریبی (بدون اجاره)</td><td>۱۷٬۵۰۰ - ۵۷٬۳۰۰</td></tr>
            </tbody>
          </table>

          <h2>مالیات شرکت در شانگهای</h2>
          <ul>
            <li><strong>مالیات بر درآمد شرکت (CIT):</strong> ۲۵٪ (۲۰٪ در مناطق تشویقی)</li>
            <li><strong>مالیات بر ارزش افزوده (VAT):</strong> ۶ تا ۱۳٪ بسته به صنعت</li>
            <li><strong>مالیات بر سود سهام:</strong> ۱۰٪ برای انتقال به خارج</li>
            <li><strong>مالیات تامین اجتماعی:</strong> حدود ۳۰ تا ۴۰٪ حقوق کارمندان</li>
            <li><strong>معافیت‌های منطقه آزاد:</strong> در Lin'gang و Pudong معافیت ۲ تا ۵ ساله برای صنایع هدف</li>
          </ul>

          <h2>ویزای تجاری چین (M Visa)</h2>
          <p>
            برای سفر تجاری به شانگهای به ویزای تجاری (M Visa) نیاز دارید. پس از
            ثبت شرکت، می‌توانید دعوت‌نامه برای شرکای تجاری صادر کنید. مدارک لازم
            شامل دعوت‌نامه از شرکت چینی، گواهی تجاری، پاسپورت با اعتبار ۶ ماه و
            بیمه مسافرتی است. ویزا معمولاً ۴ تا ۷ روز کاری صادر می‌شود. برای
            اطلاعات بیشتر در مورد خدمات ویزا و سفرهای تجاری می‌توانید به{" "}
            <Link href="/import-from-shanghai">
              راهنمای واردات از شانگهای
            </Link>{" "}
            مراجعه کنید.
          </p>

          <h2>سوالات متداول</h2>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container-pro max-w-3xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection
        title="ثبت شرکت در شانگهای را شروع کنید"
        description="ما با تیم حقوقی در شانگهای، فرآیند ثبت شرکت شما را از صفر تا صد مدیریت می‌کنیم."
      />
    </>
  );
}
