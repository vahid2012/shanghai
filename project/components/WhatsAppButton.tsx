"use client";

import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE_CONFIG.whatsappHref}
      target="_blank"
      rel="noopener"
      aria-label="تماس از طریق واتساپ"
      className="fixed bottom-6 left-6 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-navy-800 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        مشاوره رایگان واتساپ
      </span>
    </a>
  );
}
