import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS_FULL, SERVICES } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="container-pro py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-3">
              شانگهای <span className="text-gold-500">سیتی</span>
            </h3>
            <p className="text-sm leading-relaxed">
              مرجع تخصصی تجارت با چین و مخصوصاً شانگهای. واردات کالا، ثبت
              شرکت، حمل‌ونقل و مشاوره تجاری با بیش از یک دهه تجربه.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              صفحات اصلی
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS_FULL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">خدمات</h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="hover:text-gold-500 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              تماس با ما
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE_CONFIG.whatsappHref}
                  className="flex items-center gap-2 hover:text-gold-500 transition-colors"
                >
                  <MessageCircle size={16} className="text-gold-500" />
                  <span dir="ltr">واتساپ: {SITE_CONFIG.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-center gap-2 hover:text-gold-500 transition-colors"
                >
                  <Phone size={16} className="text-gold-500" />
                  <span dir="ltr">تلفن: {SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold-500" />
                <span dir="ltr">{SITE_CONFIG.email}</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-gold-500" />
                <span>{SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-gold-500" />
                <span>{SITE_CONFIG.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            © {year} شانگهای سیتی. تمام حقوق محفوظ است.
          </p>
          <p className="text-white/50">
            تجارت با چین، تخصص در شانگهای
          </p>
        </div>
      </div>
    </footer>
  );
}
