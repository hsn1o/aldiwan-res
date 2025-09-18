"use client";

import Link from "next/link";
import { Facebook, Instagram, Phone, MapPin, Clock, Mail } from "lucide-react";

interface FooterProps {
  restaurantName: string;
  tagline: string;
}

export function Footer({ restaurantName, tagline }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className=" text-white" dir="rtl">
      <div className="bg-[var(--restaurant-primary)] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-right">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                {restaurantName}
              </h3>
              <p className="mt-2 text-[var(--restaurant-secondary)]">
                {tagline}
              </p>

              {/* Socials pinned to the right in RTL */}
              <div className="flex justify-start gap-3 mt-5">
                <a
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 inline-flex items-center justify-center transition"
                  href="#"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 inline-flex items-center justify-center transition"
                  href="#"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 inline-flex items-center justify-center transition"
                  href="tel:+967000000000"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold mb-3">روابط سريعة</h4>
              <ul className="space-y-2 text-white/90">
                <li>
                  <Link className="hover:opacity-90 transition-colors" href="/">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:opacity-90 transition-colors"
                    href="/menu"
                  >
                    قائمة الطعام
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:opacity-90 transition-colors"
                    href="#about"
                  >
                    عن المطعم
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:opacity-90 transition-colors"
                    href="#contact"
                  >
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact (icon on the right of text) */}
            <div dir="rtl" className="text-right">
              <h4 className="font-semibold mb-3">معلومات التواصل</h4>
              <ul className="space-y-3 text-white/90">
                {/* العنوان */}
                <li className="flex flex-row-reverse items-center gap-2 justify-end">
                  <span className="max-w-[42ch]">
                    إب، جولة العدين – طريق صنعاء تعز – جوار فندق وأجنحة تاج
                    اليمن
                    <span className="block">مقابل لخلف الصامت للصرافة</span>
                  </span>
                  <MapPin className="w-5 h-5 opacity-80" />
                </li>

                {/* الأرقام كقائمة */}
                <li className="flex flex-row-reverse items-center gap-2 justify-end">
                  <a
                    href="tel:+967783333011"
                    className="hover:opacity-90 transition-colors"
                  >
                    <bdi dir="ltr">+967 783 333 011</bdi>
                  </a>
                  <Phone className="w-5 h-5 opacity-80" />
                </li>

                <li className="flex flex-row-reverse items-center gap-2 justify-end">
                  <a
                    href="tel:+967739333011"
                    className="hover:opacity-90 transition-colors"
                  >
                    <bdi dir="ltr">+967 739 333 011</bdi>
                  </a>
                  <Phone className="w-5 h-5 opacity-80" />
                </li>

                <li className="flex flex-row-reverse items-center gap-2 justify-end">
                  <a
                    href="tel:+9674451933"
                    className="hover:opacity-90 transition-colors"
                  >
                    <bdi dir="ltr">+967 4 451 933</bdi>
                  </a>
                  <Phone className="w-5 h-5 opacity-80" />
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar (RTL order) */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/85">
            <p>
              © {year} جميع الحقوق محفوظة لـ {restaurantName}
            </p>
            <span>
              تم التطوير بواسطة{" "}
              <a
                href="https://alogza.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline-offset-4 hover:underline"
              >
                Alogza
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
