"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-navy-800/95 backdrop-blur-md shadow-lg"
            : "bg-navy-800"
        }`}
      >
        <div className="container-pro">
          <div className="flex items-center justify-between h-16 md:h-18">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className="text-xl md:text-2xl font-bold text-white">
                شانگهای{" "}
                <span className="text-gold-500">سیتی</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive(link.href) ? "nav-link-active" : ""}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <Phone size={16} />
                <span dir="ltr">{SITE_CONFIG.phone}</span>
              </a>
            </div>

            <button
              className="md:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="منو"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden bg-navy-800 border-t border-navy-700 animate-fade-in">
            <div className="container-pro py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium py-2 ${
                    isActive(link.href)
                      ? "text-gold-500"
                      : "text-white/80 hover:text-gold-500"
                  } transition-colors`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={SITE_CONFIG.phoneHref}
                className="flex items-center gap-2 bg-gold-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium mt-2"
              >
                <Phone size={16} />
                <span dir="ltr">{SITE_CONFIG.phone}</span>
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
