"use client";

import {
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
  Link as LinkIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  hours: string;
  email?: string;
  social: Array<{ name: string; href: string }>;
  mapEmbedUrl?: string;
}
interface ContactSectionProps extends ContactInfo {}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-restaurant-primary/10 flex items-center justify-center">
      {children}
    </div>
  );
}

function sanitizePhone(n: string) {
  return n.replace(/[^0-9]/g, "");
}

function getSocialIcon(name: string) {
  const n = name.trim().toLowerCase();
  if (n.includes("instagram") || n.includes("إنستغرام")) return Instagram;
  if (n.includes("twitter") || n.includes("تويتر") || n.includes("x"))
    return Twitter;
  if (n.includes("facebook") || n.includes("فيسبوك")) return Facebook;
  return LinkIcon;
}

export function ContactSection({
  address,
  phone,
  whatsapp,
  hours,
  email,
  social,
  mapEmbedUrl,
}: ContactSectionProps) {
  const wa = sanitizePhone(whatsapp || "");
  const tel = sanitizePhone(phone || "");

  return (
    <section id="contact" dir="rtl" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-primary mb-3">
            اتصل بنا
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نحن هنا لخدمتكم، تواصلوا معنا لحجز طاولة أو لأي استفسار
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info cards */}
          <div className="space-y-6">
            <Card className="rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <IconBadge>
                    <MapPin className="w-6 h-6 text-restaurant-primary" />
                  </IconBadge>
                  <div>
                    <h3 className="font-semibold text-restaurant-primary mb-1.5">
                      العنوان
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <IconBadge>
                    <Phone className="w-6 h-6 text-restaurant-primary" />
                  </IconBadge>
                  <div>
                    <h3 className="font-semibold text-restaurant-primary mb-1.5">
                      الهاتف
                    </h3>
                    <p className="text-gray-700 mb-3" dir="ltr">
                      {phone}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-xl border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white"
                    >
                      <a href={`tel:${tel}`} aria-label="اتصل الآن">
                        اتصل الآن
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <IconBadge>
                    <MessageCircle className="w-6 h-6 text-restaurant-primary" />
                  </IconBadge>
                  <div>
                    <h3 className="font-semibold text-restaurant-primary mb-1.5">
                      واتساب
                    </h3>
                    <p className="text-gray-700 mb-3" dir="ltr">
                      {whatsapp}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-xl border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                    >
                      <a
                        href={`https://wa.me/${wa}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="راسلنا على واتساب"
                      >
                        راسلنا على واتساب
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* {email && (
              <Card className="rounded-2xl shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <IconBadge>
                      <Mail className="w-6 h-6 text-restaurant-primary" />
                    </IconBadge>
                    <div>
                      <h3 className="font-semibold text-restaurant-primary mb-1.5">البريد الإلكتروني</h3>
                      <a
                        href={`mailto:${email}`}
                        className="text-restaurant-primary hover:underline break-all"
                        dir="ltr"
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )} */}

            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <IconBadge>
                    <Clock className="w-6 h-6 text-restaurant-primary" />
                  </IconBadge>
                  <div>
                    <h3 className="font-semibold text-restaurant-primary mb-1.5">
                      ساعات العمل
                    </h3>
                    <p className="text-gray-700">{hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social icons */}
            {social?.length > 0 && (
              <div className="pt-2 text-center">
                <h3 className="text-base font-semibold text-restaurant-primary mb-3">
                  تابعونا على
                </h3>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {social.map((platform, i) => {
                    const Icon = getSocialIcon(platform.name);
                    return (
                      <a
                        key={i}
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={platform.name}
                        aria-label={platform.name}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-restaurant-primary/30 text-restaurant-primary hover:bg-restaurant-primary hover:text-white transition-colors shadow-sm"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Map */}
          {mapEmbedUrl && (
            <div className="h-[500px] rounded-2xl overflow-hidden shadow-md lg:sticky lg:top-24">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع مطعم الديوان"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
