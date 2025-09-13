import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ContactInfo {
  address: string
  phone: string
  whatsapp: string
  hours: string
  email?: string
  social: Array<{
    name: string
    href: string
  }>
  mapEmbedUrl?: string
}

interface ContactSectionProps extends ContactInfo {}

export function ContactSection({ address, phone, whatsapp, hours, email, social, mapEmbedUrl }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-restaurant-primary mb-4 text-balance">اتصل بنا</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            نحن هنا لخدمتكم، تواصلوا معنا لحجز طاولة أو لأي استفسار
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-restaurant-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-restaurant-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-restaurant-primary mb-2">العنوان</h3>
                    <p className="text-gray-600 leading-relaxed">{address}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-restaurant-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-restaurant-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-restaurant-primary mb-2">الهاتف</h3>
                    <p className="text-gray-600 mb-2" dir="ltr">
                      {phone}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white bg-transparent"
                      asChild
                    >
                      <a href={`tel:${phone}`}>اتصل الآن</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-restaurant-primary/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-restaurant-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-restaurant-primary mb-2">واتساب</h3>
                    <p className="text-gray-600 mb-2" dir="ltr">
                      {whatsapp}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
                      asChild
                    >
                      <a
                        href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        راسلنا على واتساب
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-restaurant-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-restaurant-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-restaurant-primary mb-2">ساعات العمل</h3>
                    <p className="text-gray-600">{hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {mapEmbedUrl && (
            <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
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

        {social.length > 0 && (
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-restaurant-primary mb-6">تابعونا على</h3>
            <div className="flex justify-center gap-4">
              {social.map((platform, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-restaurant-primary text-restaurant-primary hover:bg-restaurant-primary hover:text-white bg-transparent"
                  asChild
                >
                  <a href={platform.href} target="_blank" rel="noopener noreferrer">
                    {platform.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
