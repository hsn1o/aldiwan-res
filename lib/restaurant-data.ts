export interface RestaurantData {
  restaurant: {
    name: string
    tagline: string
  }
  home: {
    hero: {
      title: string
      subtitle: string
      ctaText: string
      ctaHref: string
      backgroundImageUrl: string
      overlay?: boolean
    }
    about: {
      title: string
      text: string
      imageUrl: string
      highlights: string[]
    }
    carousel: {
      images: Array<{
        src: string
        alt: string
      }>
      autoPlay?: boolean
      intervalMs?: number
    }
    featuredMenu: {
      sectionTitle: string
      items: Array<{
        name: string
        shortDesc: string
        price: string
        imageUrl?: string
      }>
      menuPageHref: string
    }
    contact: {
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
  }
  menu: {
    categories: Array<{
      id: string
      name: string
    }>
    products: Record<
      string,
      Array<{
        id: string
        name: string
        desc: string
        price: string
        imageUrl?: string
        badges?: string[]
      }>
    >
  }
}

export const restaurantData: RestaurantData = {
  restaurant: {
    name: "الديوان",
    tagline: "مطعم يمني أصيل",
  },
  home: {
    hero: {
      title: "مرحباً بكم في مطعم الديوان",
      subtitle: "تجربة طعام يمني أصيل في أجواء عصرية وضيافة تقليدية",
      ctaText: "استكشف قائمة الطعام",
      ctaHref: "/menu",
      backgroundImageUrl: "/1.jpg",
      overlay: true,
    },
    about: {
      title: "عن مطعم الديوان",
      text: "يقدم مطعم الديوان تجربة طعام يمني أصيل مع لمسة عصرية. نحن نفتخر بتقديم أشهى الأطباق اليمنية التقليدية المحضرة بأجود المكونات وأصالة الطعم اليمني العريق. في الديوان، نجمع بين التراث والحداثة لنقدم لكم تجربة طعام لا تُنسى.",
      imageUrl: "/2.png",
      highlights: ["أطباق يمنية أصيلة", "مكونات طازجة ومختارة", "أجواء تراثية عصرية", "ضيافة يمنية تقليدية"],
    },
    carousel: {
images: [
  { src: "/2.png",  alt: "جلسات عائلية مريحة داخل المطعم" },
  { src: "/3.png",  alt: "طبق المندي اليمني التقليدي" },
  { src: "/4.jpg",  alt: "صالة الطعام في مطعم الديوان" },
  { src: "/5.jpg",  alt: "الخبز اليمني والمقبلات التقليدية" },
  { src: "/6.jpg",  alt: "خدمة الشاي اليمني التقليدي" },
  { src: "/7.jpg",  alt: "زربيان عدني باللحم" },
  { src: "/8.jpg",  alt: "سلتة يمنية بالحلبة" },
  { src: "/9.jpg",  alt: "فحسة لحم على الحجر" },
  { src: "/10.jpg", alt: "خبز ملوج تنور يمني" },
  { src: "/11.jpg", alt: "بنت الصحن (السّبايا) الحلوى اليمنية" },
  { src: "/12.jpg", alt: "سحاوق عدني طازج" },
  { src: "/13.jpg", alt: "مشاوي مشكلة على الفحم" },
  { src: "/14.jpg", alt: "مدفون دجاج بالرز" },
  { src: "/15.jpg", alt: "قهوة يمنية عربية" },
  { src: "/16.jpg", alt: "عصائر طبيعية متنوعة" },
]
,
      autoPlay: true,
      intervalMs: 4000,
    },
    featuredMenu: {
      sectionTitle: "أطباقنا المميزة",
      items: [
        {
          name: "مندي لحم",
          shortDesc: "لحم طري مطبوخ على الفحم مع الأرز البسمتي",
          price: "85 ريال",
          imageUrl: "/mandi-lamb.jpeg",
        },
        {
          name: "كبسة دجاج",
          shortDesc: "دجاج مشوي مع الأرز المبهر بالتوابل اليمنية",
          price: "65 ريال",
          imageUrl: "/mandi-chicken.jpeg",
        },
        {
          name: "فحسة يمنية",
          shortDesc: "طبق تقليدي من اللحم والخضار مع الحلبة",
          price: "70 ريال",
          imageUrl: "/fahsa.jpeg",
        },
      ],
      menuPageHref: "/menu",
    },
    contact: {
      address: "اب, طريق صنعاء - تعز",
      phone: "+967773717836",
      whatsapp: "+967773717836",
      hours: "يومياً من 11:00 صباحاً إلى 12:00 منتصف الليل",
      email: "info@aldiwan-restaurant.com",
      social: [
        {
          name: "إنستغرام",
          href: "https://instagram.com/hsn1o",
        },
        {
          name: "تويتر",
          href: "https://twitter.com/hsn1o",
        },
        {
          name: "فيسبوك",
          href: "https://facebook.com/hsn1o",
        },
      ],
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d230.01603304054782!2d44.161156989929026!3d13.968631686943201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1757704512666!5m2!1sen!2s",
    },
  },
  menu: {
    categories: [
      { id: "appetizers", name: "المقبلات" },
      { id: "mains", name: "الأطباق الرئيسية" },
      { id: "desserts", name: "الحلويات" },
      { id: "beverages", name: "المشروبات" },
    ],
    products: {
      appetizers: [
        {
          id: "hummus",
          name: "حمص بالطحينة",
          desc: "حمص كريمي مع الطحينة وزيت الزيتون والصنوبر",
          price: "25 ريال",
          imageUrl: "/hummus.jpeg",
        },
        {
          id: "sambosa",
          name: "سمبوسة لحم",
          desc: "معجنات مقرمشة محشوة باللحم والخضار",
          price: "30 ريال",
          imageUrl: "/sambosa.jpeg",
          badges: ["مقلي طازج"],
        },
        {
          id: "fattoush",
          name: "فتوش يمني",
          desc: "سلطة خضار مشكلة مع الخبز المحمص والسماق",
          price: "22 ريال",
          imageUrl: "/fattoush.jpeg",
        },
      ],
      mains: [
        {
          id: "mandi-lamb",
          name: "مندي لحم غنم",
          desc: "لحم غنم طري مطبوخ على الفحم مع الأرز البسمتي المبهر",
          price: "95 ريال",
          imageUrl: "/mandi-lamb.jpeg",
          badges: ["الأكثر طلباً", "مطبوخ على الفحم"],
        },
        {
          id: "mandi-chicken",
          name: "مندي دجاج",
          desc: "دجاج كامل مشوي على الفحم مع الأرز المبهر",
          price: "75 ريال",
          imageUrl: "/mandi-chicken.jpeg",
        },
        {
          id: "kabsa-meat",
          name: "كبسة لحم",
          desc: "لحم طري مع الأرز المبهر بالهيل والقرفة",
          price: "85 ريال",
          imageUrl: "/kabsa-meat.jpeg",
          badges: ["طبق تقليدي"],
        },
        {
          id: "fahsa",
          name: "فحسة يمنية",
          desc: "طبق تقليدي من اللحم والخضار مع الحلبة والكزبرة",
          price: "70 ريال",
          imageUrl: "/fahsa.jpeg",
        },
        {
          id: "zurbian",
          name: "زربيان",
          desc: " طازج مع الأرز المبهر بالكركم والبهارات",
          price: "80 ريال",
          imageUrl: "/zurbian.jpeg",
          badges: ["سمك طازج"],
        },
        {
          id: "hanith",
          name: "حنيذ لحم",
          desc: "لحم مطبوخ في التنور التقليدي مع التوابل الخاصة",
          price: "90 ريال",
          imageUrl: "/hanith.jpeg",
        },
      ],
      desserts: [
        {
          id: "areka",
          name: "عريكة",
          desc: "خبز بر مفتت ومرصوص مع التمر والزبدة، بالقشطة أو الجبن الشيدر والعسل والحليب المكثف",
          price: "20 ريال",
          imageUrl: "/areka.jpeg",
        },
        {
          id: "basbousa",
          name: "بسبوسة",
          desc: "حلوى السميد بالشربات وجوز الهند",
          price: "18 ريال",
          imageUrl: "/basbousa.jpeg",
        },
      ],
      beverages: [
        {
          id: "yemeni-tea",
          name: "شاي يمني",
          desc: "شاي أحمر مع الهيل والحليب على الطريقة اليمنية",
          price: "12 ريال",
          imageUrl: "/tea.jpeg",
        },
        {
          id: "arabic-coffee",
          name: "قهوة عربية",
          desc: "قهوة عربية أصيلة مع الهيل والزعفران",
          price: "15 ريال",
          imageUrl: "/arabic-coffee.jpeg",
        },
        {
          id: "fresh-juice",
          name: "عصير طازج",
          desc: "عصائر طازجة متنوعة (برتقال، مانجو، جوافة)",
          price: "18 ريال",
          imageUrl: "/fresh-juice.jpeg",
        },
        {
          id: "shai-adani",
          name: "شاي عدني",
          desc: "مشروب تقليدي بالتمر والزبيب مع الثلج",
          price: "16 ريال",
          imageUrl: "/shai-adani.jpeg",
        },
      ],
    },
  },
}
