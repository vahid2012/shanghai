import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { EXTERNAL_LINKS } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import SchemaMarkup from "@/components/SchemaMarkup";
import { Ship, Plane, Train, Anchor } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "حمل‌ونقل و لجستیک از چین به ایران",
  description:
    "راهنمای جامع حمل‌ونقل از شانگهای به ایران: حمل دریایی، هوایی و ریلی، FCL و LCL، بنادر اصلی، هزینه‌ها و زمان ترانزیت و ترخیص گمرکی.",
  path: "/shipping-logistics",
  keywords: [
    "حمل ونقل از چین",
    "حمل دریایی شانگهای",
    "حمل هوایی چین",
    "FCL LCL",
    "ترخیص گمرک چین",
    "لجستیک شانگهای",
    "بندرعباس",
  ],
});

const faqs = [
  {
    question: "حمل دریایی از شانگهای به بندرعباس چقدر طول می‌کشد؟",
    answer:
      "حمل دریایی FCL از بندر شانگهای به بندرعباس معمولاً ۱۸ تا ۲۴ روز طول می‌کشد. برای LCL به دلیل تجمیع محموله‌ها، ۲۵ تا ۳۵ روز زمان لازم است. این مدت شامل بارگیری، ترانزیت دریایی و تخلیه است و فرآیند ترخیص گمرکی ۳ تا ۷ روز اضافه می‌شود.",
  },
  {
    question: "تفاوت FCL و LCL چیست؟",
    answer:
      "FCL (Full Container Load) یعنی یک کانتینر کامل متعلق به یک محموله است و سریع‌تر و امن‌تر است. LCL (Less than Container Load) یعنی چندین محموله کوچک در یک کانتینر مشترک قرار می‌گیرند، اقتصادی‌تر برای حجم کم اما با زمان طولانی‌تر و ریسک جابجایی بیشتر.",
  },
  {
    question: "حمل هوایی از شانگهای چقدر هزینه دارد؟",
    answer:
      "حمل هوایی از فرودگاه Pudong شانگهای به فرودگاه امام خمینی تهران معمولاً ۴ تا ۸ دلار per کیلوگرم است (بسته به وزن و حجم). برای کالاهای سبک و گران‌قیمت یا فوری، حمل هوایی اقتصادی است. زمان ترانزیت ۳ تا ۷ روز.",
  },
  {
    question: "کدام اینکوترمز برای حمل از چین مناسب‌تر است؟",
    answer:
      "FOB برای واردکنندگانی که کنترل هزینه‌های حمل را می‌خواهند مناسب است (خریدار از تحویل روی عرشه به بعد مسئول است). CIF شامل هزینه، بیمه و کرایه کشتی تا بندر مقصد است و برای واردکنندگان تازه‌کار مناسب‌تر است. DDP شامل تمام هزینه‌ها تا تحویل درب انبار است اما گران‌تر.",
  },
  {
    question: "بیمه حمل کالا چقدر هزینه دارد؟",
    answer:
      "بیمه حمل دریایی معمولاً ۰.۱ تا ۰.۵ درصد ارزش کالا است. برای کالاهای شکننده یا گران‌قیمت، نرخ بالاتر است. توصیه می‌کنید حتماً بیمه All Risks تهیه کنید که پوشش آسیب، سرقت و از دست رفتن کالا را شامل می‌شود.",
  },
  {
    question: "بهترین بندر ورود به ایران کدام است؟",
    answer:
      "بندرعباس برای حمل دریایی از چین اصلی‌ترین گزینه است. گمرک امام خمینی برای حمل هوایی و گمرک بازرگان برای ترانزیت زمینی از ترکیه استفاده می‌شود. انتخاب بندر به نوع کالا، گمرکات مجاز و نزدیکی به مقصد نهایی بستگی دارد.",
  },
];

const shippingMethods = [
  { icon: Ship, name: "حمل دریایی", time: "۱۸-۲۴ روز", cost: "اقتصادی", best: "حجم زیاد" },
  { icon: Plane, name: "حمل هوایی", time: "۳-۷ روز", cost: "گران", best: "فوری و سبک" },
  { icon: Train, name: "حمل ریلی", time: "۱۴-۱۸ روز", cost: "متوسط", best: "متعادل" },
];

export default function ShippingLogistics() {
  return (
    <>
      <SchemaMarkup
        breadcrumbs={[
          { name: "خانه", href: "/" },
          { name: "حمل‌ونقل و لجستیک", href: "/shipping-logistics" },
        ]}
        faq={faqs}
      />

      <section className="relative bg-navy-800 py-12 md:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/262353/pexels-photo-262353.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="حمل دریایی از چین"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative container-pro">
          <Breadcrumbs
            items={[
              { name: "خانه", href: "/" },
              { name: "حمل‌ونقل و لجستیک", href: "/shipping-logistics" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
            حمل‌ونقل و لجستیک از چین به ایران
          </h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
            انتخاب روش حمل‌ونقل مناسب، هزینه و زمان واردات شما را بهینه می‌کند.
            در این راهنما، حمل دریایی، هوایی و ریلی از شانگهای، تفاوت FCL و LCL،
            بنادر اصلی، هزینه‌ها و فرآیند ترخیص گمرکی را به‌طور کامل بررسی
            می‌کنیم.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="container-pro">
          <h2 className="text-2xl font-bold text-navy-800 text-center mb-10">
            روش‌های حمل‌ونقل از شانگهای
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {shippingMethods.map((method, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-gold-300 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-navy-800 rounded-2xl mb-4">
                  <method.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2">{method.name}</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p><strong>زمان:</strong> {method.time}</p>
                  <p><strong>هزینه:</strong> {method.cost}</p>
                  <p><strong>مناسب:</strong> {method.best}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-pro max-w-4xl prose-fa">
          <h2>حمل دریایی: اقتصادی‌ترین گزینه</h2>
          <p>
            حمل دریایی با اختلاف، اقتصادی‌ترین روش برای واردات از شانگهای است.
            بندر Yangshan و Waigaoqiao شانگهای با خطوط کشتیرانی COSCO، MSC، CMA
            CGM، Maersk و Evergreen، سرویس‌های منظم به خاورمیانه ارائه می‌دهند.
            برای راهنمای تخصصی هزینه‌ها به{" "}
            <Link href="/shipping-logistics/sea-freight-costs">
              راهنمای هزینه‌های حمل دریایی
            </Link>{" "}
            مراجعه کنید.
          </p>

          <h3>FCL (کانتینر کامل)</h3>
          <p>
            در FCL، یک کانتینر کامل متعلق به محموله شماست. دو سایز رایج: ۲۰ فوت
            (حدود ۲۸ CBM) و ۴۰ فوت (حدود ۵۸ CBM). مزایا: سرعت بیشتر، امنیت بالاتر،
            عدم جابجایی کالا و هزینه کمتر per CBM برای حجم زیاد.
          </p>

          <h3>LCL (گروهی)</h3>
          <p>
            در LCL، چندین محموله کوچک در یک کانتینر مشترک قرار می‌گیرند. مناسب
            برای حجم زیر ۱۵ CBM. هزینه بیشتری per CBM دارد و زمان ۵ تا ۱۰ روز
            طولانی‌تر است به دلیل تجمیع و جداسازی.
          </p>

          <table>
            <thead>
              <tr>
                <th>معیار</th>
                <th>FCL</th>
                <th>LCL</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>حداقل حجم</td><td>۱ کانتینر</td><td>۱ CBM</td></tr>
              <tr><td>هزینه per CBM</td><td>پایین‌تر</td><td>بالاتر</td></tr>
              <tr><td>زمان</td><td>۱۸-۲۴ روز</td><td>۲۵-۳۵ روز</td></tr>
              <tr><td>امنیت</td><td>بالاتر</td><td>متوسط</td></tr>
              <tr><td>ریسک آسیب</td><td>پایین</td><td>بالاتر</td></tr>
            </tbody>
          </table>

          <h2>حمل هوایی: سریع‌ترین گزینه</h2>
          <p>
            فرودگاه بین‌المللی Pudong شانگهای (PVG) یکی از بزرگ‌ترین هاب‌های هوایی
            آسیا است. حمل هوایی برای کالاهای فوری، سبک (زیر ۱۰۰ کیلوگرم) و
            گران‌قیمت مناسب است. خطوط هوایی Cathay Cargo، Emirates SkyCargo و
            Iran Air سرویس‌های منظم دارند. هزینه ۴ تا ۸ دلار per کیلوگرم.
          </p>

          <h2>حمل ریلی: گزینه میانی</h2>
          <p>
            کریدور ریلی چین-آسیای میانه-ایران یک گزینه متعادل بین هزینه و زمان است.
            از شانگهای با قطار به تهران و بازرگان ۱۴ تا ۱۸ روز طول می‌کشد. هزینه
            بین حمل دریایی و هوایی است. برای کالاهای با حجم متوسط و فوریت متوسط
            مناسب است.
          </p>

          <h2>بنادر اصلی چین برای صادرات به ایران</h2>
          <ul>
            <li><strong>بندر شانگهای (Yangshan + Waigaoqiao):</strong> بزرگ‌ترین بندر کانتینری جهان، اصلی‌ترین مبدأ</li>
            <li><strong>بندر Ningbo-Zhoushan:</strong> نزدیک شانگهای، حجم بالای کانتینری، هزینه مشابه</li>
            <li><strong>بندر Shenzhen (Yantian/Shekou):</strong> جنوب چین، مناسب برای تأمین‌کنندگان گوانگدونگ</li>
          </ul>

          <h2>زمان‌های ترانزیت از شانگهای به ایران</h2>
          <table>
            <thead>
              <tr>
                <th>روش حمل</th>
                <th>مقصد</th>
                <th>زمان ترانزیت</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>دریایی FCL</td><td>بندرعباس</td><td>۱۸-۲۴ روز</td></tr>
              <tr><td>دریایی LCL</td><td>بندرعباس</td><td>۲۵-۳۵ روز</td></tr>
              <tr><td>هوایی</td><td>فرودگاه امام</td><td>۳-۷ روز</td></tr>
              <tr><td>ریلی</td><td>تهران/بازرگان</td><td>۱۴-۱۸ روز</td></tr>
              <tr><td>ترانزیت از ترکیه</td><td>گمرک بازرگان</td><td>۲۰-۲۸ روز</td></tr>
            </tbody>
          </table>

          <h2>مسیرهای ترانزیت و کریدورهای جایگزین</h2>
          <p>
            علاوه بر مسیر مستقیم دریایی، می‌توانید از مسیرهای ترانزیت استفاده
            کنید. یکی از گزینه‌های پرکاربرد،{" "}
            <a
              href={EXTERNAL_LINKS.istanbulService.url}
              target="_blank"
              rel="noopener"
            >
              {EXTERNAL_LINKS.istanbulService.anchor}
            </a>{" "}
            است که کالا از طریق ترکیه به گمرک بازرگان وارد ایران می‌شود. این
            مسیر برای کالاهایی که در اروپا یا ترکیه فرآوری می‌شوند مناسب است.
          </p>

          <h2>هزینه‌های حمل (برآورد تقریبی)</h2>
          <table>
            <thead>
              <tr>
                <th>روش</th>
                <th>هزینه تقریبی</th>
                <th>نکات</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>FCL 20 فوت</td><td>۸۰۰-۱٬۵۰۰ دلار</td><td>شانگهای → بندرعباس</td></tr>
              <tr><td>FCL 40 فوت</td><td>۱٬۲۰۰-۲٬۲۰۰ دلار</td><td>شانگهای → بندرعباس</td></tr>
              <tr><td>LCL</td><td>۴۰-۸۰ دلار per CBM</td><td>حداقل ۱ CBM</td></tr>
              <tr><td>هوایی</td><td>۴-۸ دلار per kg</td><td>حداقل ۴۵ kg</td></tr>
              <tr><td>ریلی</td><td>۱٬۰۰۰-۲٬۵۰۰ دلار per container</td><td>شانگهای → تهران</td></tr>
            </tbody>
          </table>

          <h2>ترخیص گمرکی</h2>
          <p>
            پس از رسیدن کالا به گمرک ایران، فرآیند ترخیص آغاز می‌شود. برای
            راهنمای تخصصی به{" "}
            <Link href="/shipping-logistics/customs-clearance">
              راهنمای ترخیص گمرکی از چین
            </Link>{" "}
            مراجعه کنید. مدارک اصلی: فکتور تجاری، بارنامه، لیست بسته‌بندی،
            گواهی مبدأ، ثبت سفارش و اظهارنامه گمرکی.
          </p>

          <h2>بیمه حمل کالا</h2>
          <p>
            بیمه حمل برای محافظت از سرمایه شما ضروری است. انواع پوشش:
          </p>
          <ul>
            <li><strong>Free from Particular Average (FPA):</strong> پوشش پایه، فقط خسارات کلی</li>
            <li><strong>With Average (WA):</strong> پوشش متوسط، شامل خسارات جزئی</li>
            <li><strong>All Risks:</strong> پوشش کامل، شامل آسیب، سرقت و از دست رفتن</li>
          </ul>
          <p>
            هزینه بیمه All Risks معمولاً ۰.۲ تا ۰.۵ درصد ارزش کالا است. حتماً در
            قرارداد با تأمین‌کننده یا شرکت حمل، بیمه را تهیه کنید.
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
        title="حمل‌ونقل بهینه و مقرون‌به‌صرفه"
        description="ما با خطوط کشتیرانی معتبر و تجربه لجستیک، حمل کالای شما از شانگهای را با کمترین هزینه و سریع‌ترین زمان انجام می‌دهیم."
      />
    </>
  );
}
