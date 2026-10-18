import { generatePageMetadata } from "@/lib/metadata";
import { SITE_CONFIG, EXTERNAL_LINKS } from "@/lib/constants";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SchemaMarkup from "@/components/SchemaMarkup";
import ContactForm from "@/components/ContactForm";
import { MessageCircle, Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "تماس با شانگهای سیتی",
  description:
    "با شانگهای سیتی تماس بگیرید: واتساپ، تلفن و ایمیل. مشاوره رایگان واردات از شانگهای، ثبت شرکت و حمل‌ونقل از چین.",
  path: "/contact",
  keywords: [
    "تماس شانگهای سیتی",
    "مشاوره واردات چین",
    "واتساپ تجارت چین",
    "تماس بازرگانی شانگهای",
    "مشاوره تجاری",
  ],
});

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup
        breadcrumbs={[
          { name: "خانه", href: "/" },
          { name: "تماس با ما", href: "/contact" },
        ]}
        localBusiness
      />

      <section className="bg-navy-800 py-12 md:py-16">
        <div className="container-pro">
          <Breadcrumbs
            items={[
              { name: "خانه", href: "/" },
              { name: "تماس با ما", href: "/contact" },
            ]}
          />
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-4">
            تماس با شانگهای سیتی
          </h1>
          <p className="text-white/70 text-lg max-w-3xl leading-relaxed">
            برای مشاوره رایگان واردات از شانگهای، ثبت شرکت در چین و حمل‌ونقل با
            ما در تماس باشید. تیم ما آماده پاسخگویی به سوالات شماست.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-pro">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-6">
                اطلاعات تماس
              </h2>
              <div className="space-y-5">
                <a
                  href={SITE_CONFIG.whatsappHref}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#25D366] rounded-xl">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800">واتساپ</p>
                    <p className="text-gray-600 text-sm" dir="ltr">
                      {SITE_CONFIG.whatsapp}
                    </p>
                  </div>
                </a>

                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-center gap-4 p-4 bg-gold-50 rounded-xl hover:bg-gold-100 transition-colors group"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gold-500 rounded-xl">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800">تلفن</p>
                    <p className="text-gray-600 text-sm" dir="ltr">
                      {SITE_CONFIG.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-800 rounded-xl">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800">ایمیل</p>
                    <p className="text-gray-600 text-sm" dir="ltr">
                      {SITE_CONFIG.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-800 rounded-xl">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800">آدرس</p>
                    <p className="text-gray-600 text-sm">{SITE_CONFIG.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-800 rounded-xl">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800">ساعات کاری</p>
                    <p className="text-gray-600 text-sm">
                      {SITE_CONFIG.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-navy-50 rounded-xl">
                <p className="text-sm text-gray-700 leading-relaxed">
                  برای سفرهای تجاری به چین و اقامت در شانگهای، می‌توانید از{" "}
                  <a
                    href={EXTERNAL_LINKS.akaytravel.url}
                    target="_blank"
                    rel="noopener"
                    className="text-navy-800 font-semibold underline hover:text-gold-600 transition-colors"
                  >
                    {EXTERNAL_LINKS.akaytravel.anchor}
                  </a>{" "}
                  استفاده کنید.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-800 mb-6">
                فرم تماس
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="سوال دارید؟ مستقیم واتساپ کنید"
        description="سریع‌ترین راه دریافت پاسخ، ارسال پیام در واتساپ است. تیم ما آماده خدمت‌رسانی است."
      />
    </>
  );
}
