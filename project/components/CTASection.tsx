import { MessageCircle, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = "آماده شروع تجارت با شانگهای هستید؟",
  description = "همین حالا با ما تماس بگیرید و از مشاوره رایگان متخصصان ما بهره‌مند شوید. ما در تمام مراحل واردات، ثبت شرکت و حمل‌ونقل در کنار شما هستیم.",
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-l from-navy-800 to-navy-600 py-14 md:py-20">
      <div className="container-pro text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SITE_CONFIG.whatsappHref}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg"
          >
            <MessageCircle size={20} />
            مشاوره واتساپ
          </a>
          <a
            href={SITE_CONFIG.phoneHref}
            className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg"
          >
            <Phone size={20} />
            <span dir="ltr">{SITE_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
