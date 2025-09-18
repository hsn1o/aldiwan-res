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
      Array<
        | {
            id: string
            name: string
            desc: string
            price: string
            imageUrl?: string
            badges?: string[]
          }
        | {
            id: string
            name: string
            desc: string
            imageUrl?: string
            badges?: string[]
            types: Array<{ name: string; price: string }>
          }
      >
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
      imageUrl: "/3.png",
      highlights: [
  "أطباق يمنية أصيلة",
  "مكونات طازجة ومختارة",
  "أجواء تراثية عصرية",
  "خدمة 24 ساعة ووجبات طوال اليوم"
]

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
          price: "3000 ريال",
          imageUrl: "/mandi-lamb.jpeg",
        },
        {
          name: "مندي دجاج",
          shortDesc: "دجاج مشوي مع الأرز المبهر بالتوابل اليمنية",
          price: "2400 ريال",
          imageUrl: "/mandi-chicken.jpeg",
        },
        {
          name: "فحسة يمنية",
          shortDesc: "طبق تقليدي من اللحم والخضار مع الحلبة",
          price: "3000 ريال",
          imageUrl: "/fahsa.jpeg",
        },
      ],
      menuPageHref: "/menu",
    },
    contact: {
  address:
    "إب، جولة العدين – طريق صنعاء تعز – جوار فندق وأجنحة تاج اليمن\nمقابل لخلف الصامت للصرافة",
  phone: "783333011 - 739333011 - 04/451933",
  whatsapp: "783333011",
  hours: "خدمة 24 ساعة ووجبات طوال اليوم",
  email: "",
  social: [ { name: "إنستغرام", href: "https://instagram.com/hsn1o", }, { name: "تويتر", href: "https://twitter.com/hsn1o", }, { name: "فيسبوك", href: "https://facebook.com/hsn1o", }, ],
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d230.01603304054782!2d44.161156989929026!3d13.968631686943201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2s!4v1757704512666!5m2!1sen!2s",
}

},
menu: {
  categories: [
    { id: "mains",          name: "أطباق رئيسية" },
    { id: "appetizers",     name: "مقبلات" },
    { id: "meat",           name: "اللحوم" },
    { id: "chicken",        name: "الدجاج" },
    { id: "broast",         name: "البروست" },
    { id: "grills",         name: "مشويات" },
    { id: "popular-foods",  name: "اكلات شعبية" },
    { id: "mushkilat-rice", name: "مشكلات و ارز" },
    { id: "mahroqat",       name: "المحروقات" },
    { id: "bakery",         name: "المخبازة" },
    { id: "drinks",         name: "مشروبات" },
    { id: "desserts",       name: "الحلويات" },
    { id: "shawarma",       name: "شورما" },
    { id: "adds-on",        name: "إضافات" }
  ],
  products: {
    mains: [
      { id: "mixed-grill-aldiwan", name: "مشكل مشاوي الديوان", desc: "", price: "5000 ريال", imageUrl: "" }
    ],

    appetizers: [
      { id: "bread-bag",  name: "كيس خبز", desc: "", price: "100 ريال", imageUrl: "" },
      { id: "hummus",     name: "حمص",     desc: "", price: "500 ريال", imageUrl: "" },
      { id: "mutabbal",   name: "متبل",    desc: "", price: "500 ريال", imageUrl: "" },
      { id: "baba-ghanoush", name: "بابا غنوج", desc: "", price: "500 ريال", imageUrl: "" },

      { id: "salad-olive-halabi", name: "سلطة زيتون حلبي", desc: "", price: "700 ريال", imageUrl: "" },
      { id: "salad-oriental",     name: "سلطة شرقية",       desc: "", price: "700 ريال", imageUrl: "" },
      { id: "salad-fattoush",     name: "سلطة فتوش",        desc: "", price: "700 ريال", imageUrl: "" },
      { id: "salad-tabbouleh",    name: "سلطة تبولة",       desc: "", price: "700 ريال", imageUrl: "" },

      { id: "salad-cucumber-yogurt", name: "سلطة خيار وزبادي", desc: "", price: "500 ريال", imageUrl: "" },
      { id: "salad-mayonnaise",      name: "سلطة مايونيز",     desc: "", price: "500 ريال", imageUrl: "" },
      { id: "salad-russian",         name: "سلطة روسية",       desc: "", price: "500 ريال", imageUrl: "" },
      { id: "salad-fruit",           name: "سلطة فواكه",       desc: "", price: "1500 ريال", imageUrl: "" },

      { id: "shaqout", name: "شقوت", desc: "", price: "500 ريال", imageUrl: "" },

      {
        id: "yogurt",
        name: "زبادي",
        desc: "",
        imageUrl: "",
        types: [
          { name: "صغير", price: "200 ريال" },
          { name: "كبير", price: "300 ريال" }
        ]
      },

      { id: "salad-diwan-large",   name: "سلطة الديوان كبير",   desc: "", price: "2000 ريال", imageUrl: "" },
      { id: "salad-diwan-special", name: "سلطة الديوان اسبيشل", desc: "", price: "1500 ريال", imageUrl: "" }
    ],

    meat: [
      {
        id: "mandi-lamb",
        name: "لحم مندي",
        desc: "",
        imageUrl: "",
        types: [
          { name: "نفر",       price: "3000 ريال" },
          { name: "ربع ذبيحة", price: "6000 ريال" },
          { name: "نصف ذبيحة", price: "12000 ريال" },
          { name: "ذبيحة كاملة", price: "24000 ريال" }
        ]
      }
    ],

    chicken: [
      {
        id: "rotisserie-chicken",
        name: "دجاج شواية",
        desc: "",
        imageUrl: "",
        types: [
          { name: "ربع", price: "500 ريال" },
          { name: "نصف", price: "1000 ريال" },
          { name: "حبة", price: "2000 ريال" }
        ]
      },
      {
        id: "charcoal-chicken",
        name: "دجاج فحم",
        desc: "",
        imageUrl: "",
        types: [
          { name: "ربع", price: "500 ريال" },
          { name: "نصف", price: "1000 ريال" },
          { name: "حبة", price: "2000 ريال" }
        ]
      },
      {
        id: "turkish-chicken",
        name: "دجاج تركي",
        desc: "",
        imageUrl: "",
        types: [
          { name: "نصف", price: "1100 ريال" },
          { name: "حبة", price: "2200 ريال" }
        ]
      },
      { id: "chicken-breast-charcoal", name: "صدر دجاج فحم", desc: "", price: "2000 ريال", imageUrl: "" },
      {
        id: "madghout-chicken",
        name: "دجاج مضغوط",
        desc: "",
        imageUrl: "",
        types: [
          { name: "ربع", price: "1000 ريال" },
          { name: "نصف", price: "1500 ريال" },
          { name: "حبة", price: "3000 ريال" }
        ]
      },
      {
        id: "zurbian-chicken",
        name: "دجاج زربيان مع الرز",
        desc: "",
        imageUrl: "",
        types: [
          { name: "ربع", price: "1000 ريال" },
          { name: "نصف", price: "1500 ريال" }
        ]
      },
      { id: "mandi-chicken-whole", name: "حبة دجاج مندي", desc: "", price: "2400 ريال", imageUrl: "" }
    ],

    broast: [
      {
        id: "broast-chicken",
        name: "برست دجاج",
        desc: "",
        imageUrl: "",
        types: [
          { name: "ربع", price: "1000 ريال" },
          { name: "نصف", price: "2000 ريال" },
          { name: "حبة", price: "4000 ريال" }
        ]
      },
      { id: "fries-portion", name: "نفر تشيبس", desc: "", price: "500 ريال", imageUrl: "" },
      { id: "garlic",        name: "ثوم",       desc: "", price: "200 ريال", imageUrl: "" },
      { id: "sauce",         name: "صوص",       desc: "", price: "300 ريال", imageUrl: "" }
    ],

    grills: [
      { id: "mixed-grill-aldiwan", name: "مشكل مشاوي الديوان", desc: "", price: "5000 ريال", imageUrl: "" },
      { id: "mixed-meat",          name: "مشكل لحم",           desc: "", price: "4000 ريال", imageUrl: "" },
      { id: "mixed-chicken",       name: "مشكل دجاج",          desc: "", price: "2000 ريال", imageUrl: "" },

      { id: "turkish-chicken-skewers", name: "أوصال دجاج فحم تركي", desc: "", price: "1000 ريال", imageUrl: "" },
      { id: "meat-kebab",              name: "كباب لحم",            desc: "", price: "1500 ريال", imageUrl: "" },
      { id: "chicken-kebab",           name: "كباب دجاج",           desc: "", price: "1500 ريال", imageUrl: "" },
      { id: "beef-cubes",              name: "أوصال لحم",           desc: "", price: "2000 ريال", imageUrl: "" },
      { id: "lamb-chops",              name: "ريش لحم",             desc: "", price: "2500 ريال", imageUrl: "" },
      { id: "tawooq-fillet",           name: "فليه دجاج طاووق",     desc: "", price: "3000 ريال", imageUrl: "" }
    ],

    "popular-foods": [
      {
        id: "salta",
        name: "سلتة",
        desc: "",
        imageUrl: "",
        types: [
          { name: "نصف نفر", price: "1000 ريال" },
          { name: "نفر",     price: "1500 ريال" }
        ]
      },
      {
        id: "fahsa",
        name: "فحسة",
        desc: "",
        imageUrl: "",
        types: [
          { name: "نصف نفر", price: "1500 ريال" },
          { name: "نفر",     price: "3000 ريال" }
        ]
      },
      { id: "hilbah",             name: "حلبة",          desc: "", price: "250 ريال",  imageUrl: "" },
      { id: "fahsa-lamb-portion", name: "نفر فحسة غنمي", desc: "", price: "4000 ريال", imageUrl: "" }
    ],

    "mushkilat-rice": [
      { id: "madghout-rice", name: "نفر رز مضغوط", desc: "", price: "500 ريال", imageUrl: "" },
      { id: "zurbian-rice",  name: "نفر رز زربيان", desc: "", price: "500 ريال", imageUrl: "" },
      { id: "hadrami-rice",  name: "رز حضرمي",     desc: "", price: "500 ريال", imageUrl: "" },

      {
        id: "rice-basharo",
        name: "رز بشارو",
        desc: "",
        imageUrl: "",
        types: [
          { name: "نص نفر", price: "300 ريال" },
          { name: "نفر",    price: "500 ريال" }
        ]
      },

      { id: "mixed-oven-portion",   name: "نفر مشكل فرن",  desc: "", price: "500 ريال", imageUrl: "" },
      { id: "mixed-normal-portion", name: "نفر مشكل عادي", desc: "", price: "500 ريال", imageUrl: "" },
      {
        id: "mahshi-portion",
        name: "نفر محشي",
        desc: "",
        imageUrl: "",
        types: [{ name: "عادي", price: "600 ريال" }]
      },
      { id: "molokhia-portion", name: "نفر ملوخية", desc: "", price: "400 ريال", imageUrl: "" },
      { id: "macarona",        name: "مكرونة",     desc: "", price: "400 ريال", imageUrl: "" },
      { id: "shaereya",        name: "شعيرية",     desc: "", price: "400 ريال", imageUrl: "" }
    ],

    mahroqat: [
      {
        id: "beef-madghar-portion",
        name: "لحم مضغار (حصص)",
        desc: "",
        imageUrl: "",
        types: [
          { name: "نص نفر", price: "1000 ريال" },
          { name: "نفر",    price: "2000 ريال" }
        ]
      },
      {
        id: "beef-madghar-weight",
        name: "لحم مضغار (بالكيلو)",
        desc: "",
        imageUrl: "",
        types: [
          { name: "نص كيلو", price: "5000 ريال" },
          { name: "كيلو",    price: "10000 ريال" }
        ]
      },

      { id: "sheep-liver-whole",   name: "حبه كبدة غنمي",    desc: "", price: "4500 ريال", imageUrl: "" },
      { id: "sheep-liver-portion", name: "نفر حبه كبدة غنمي", desc: "", price: "2000 ريال", imageUrl: "" },
      { id: "veal-liver-portion",  name: "نفر كبدة عجل",     desc: "", price: "2000 ريال", imageUrl: "" },
      { id: "mix-portion",         name: "نفر مكس",          desc: "", price: "1000 ريال", imageUrl: "" },

      {
        id: "fasolia",
        name: "فاصوليا",
        desc: "",
        imageUrl: "",
        types: [
          { name: "ناشف",           price: "400 ريال" },
          { name: "ناشف مع البيض",  price: "700 ريال" },
          { name: "رطب",            price: "500 ريال" },
          { name: "رطب مع البيض",   price: "700 ريال" }
        ]
      },

      {
        id: "eggs",
        name: "بيض",
        desc: "",
        imageUrl: "",
        types: [{ name: "نفر سادة", price: "500 ريال" }]
      },

      {
        id: "foul",
        name: "فول",
        desc: "",
        imageUrl: "",
        types: [
          { name: "سادة",     price: "500 ريال" },
          { name: "مع البيض", price: "800 ريال" }
        ]
      },

      {
        id: "fasolia-can",
        name: "علبة فاصوليا",
        desc: "",
        imageUrl: "",
        types: [
          { name: "سادة",     price: "1000 ريال" },
          { name: "مع البيض", price: "1500 ريال" }
        ]
      },
      {
        id: "foul-can",
        name: "علبة فول",
        desc: "",
        imageUrl: "",
        types: [
          { name: "سادة",     price: "800 ريال" },
          { name: "مع البيض", price: "1000 ريال" }
        ]
      },
      {
        id: "peas-can",
        name: "علبة بازاليا",
        desc: "",
        imageUrl: "",
        types: [
          { name: "سادة",      price: "800 ريال" },
          { name: "مع البيض",  price: "1000 ريال" },
          { name: "مع التونة", price: "1500 ريال" }
        ]
      },

      { id: "tuna-portion",   name: "نفر تونة",         desc: "", price: "1000 ريال", imageUrl: "" },
      { id: "akda-chicken",   name: "نفر عقدة دجاج",    desc: "", price: "1000 ريال", imageUrl: "" },
      { id: "akda-beef",      name: "نفر عقدة لحم",     desc: "", price: "4000 ريال", imageUrl: "" },

      { id: "tomato",         name: "طماجة",            desc: "", price: "1 ريال",    imageUrl: "" },
      { id: "tuna-can-large", name: "علبه تونه كبير",   desc: "", price: "800 ريال",  imageUrl: "" },
      { id: "tuna-can-small", name: "علبه تونه صغير",   desc: "", price: "500 ريال",  imageUrl: "" }
    ],

    bakery: [
      { id: "bread-double", name: "دبل",  desc: "", price: "500 ريال", imageUrl: "" },
      { id: "bread-single", name: "سنجل", desc: "", price: "300 ريال", imageUrl: "" },

      {
        id: "ratab-portion",
        name: "رطب",
        desc: "",
        imageUrl: "",
        types: [{ name: "نفر", price: "600 ريال" }]
      },

      { id: "kres-portion",    name: "نفر كرس",    desc: "", price: "500 ريال",  imageUrl: "" },
      { id: "malooh-triangle", name: "ملوح مثلث",  desc: "", price: "1000 ريال", imageUrl: "" },
      { id: "mathlout-egg",    name: "مثلوت مع البيض", desc: "", price: "1200 ريال", imageUrl: "" }
    ],

    drinks: [
      { id: "tea-red",         name: "شاي احمر",        desc: "", price: "50 ريال",  imageUrl: "" },
      { id: "tea-milk",        name: "شاي حليب",        desc: "", price: "100 ريال", imageUrl: "" },
      { id: "tea-milk-carton", name: "شاي حليب كرتوني", desc: "", price: "150 ريال", imageUrl: "" },
      { id: "coffee-beans",    name: "بن",              desc: "", price: "100 ريال", imageUrl: "" },
      { id: "coca-cola",       name: "كوكولا",          desc: "", price: "250 ريال", imageUrl: "" },
      { id: "water-bottle",    name: "حبه ماء",         desc: "", price: "100 ريال", imageUrl: "" },

      { id: "juice-avocado",         name: "عصير افكادو",               desc: "", price: "1000 ريال", imageUrl: "" },
      { id: "juice-pineapple",       name: "عصير اناناس",               desc: "", price: "1000 ريال", imageUrl: "" },
      { id: "juice-guava",           name: "عصير جوافة",                desc: "", price: "400 ريال",  imageUrl: "" },
      { id: "juice-strawberry",      name: "عصير فراولة",               desc: "", price: "500 ريال",  imageUrl: "" },
      { id: "juice-banana-milk",     name: "عصير موز بالحليب",          desc: "", price: "500 ريال",  imageUrl: "" },
      { id: "juice-apple",           name: "عصير تفاح",                 desc: "", price: "500 ريال",  imageUrl: "" },
      { id: "juice-orange",          name: "عصير برتقال",               desc: "", price: "400 ريال",  imageUrl: "" },
      { id: "juice-lemon",           name: "عصير ليمون",                desc: "", price: "400 ريال",  imageUrl: "" },
      { id: "juice-avocado-nuts",    name: "عصير افكادو ومكسرات",       desc: "", price: "1500 ريال", imageUrl: "" },
      { id: "juice-avocado-mango",   name: "عصير افكادو مع المنجا",     desc: "", price: "1200 ريال", imageUrl: "" },
      { id: "juice-carrot-cup",      name: "عصير جزر كيس",              desc: "", price: "700 ريال",  imageUrl: "" },
      { id: "juice-grape",           name: "عصير عنب",                  desc: "", price: "300 ريال",  imageUrl: "" },
      { id: "juice-pomegranate",     name: "عصير رمان",                 desc: "", price: "400 ريال",  imageUrl: "" },
      { id: "juice-pom-grape",       name: "عصير رمان وعنب",            desc: "", price: "500 ريال",  imageUrl: "" },
      { id: "juice-strawberry-grape",name: "عصير فراولة وعنب",          desc: "", price: "500 ريال",  imageUrl: "" },
      { id: "juice-concentrate",     name: "عصير مركز",                 desc: "", price: "500 ريال",  imageUrl: "" },
      { id: "juice-mango-natural",   name: "عصير منجا طبيعي",           desc: "", price: "400 ريال",  imageUrl: "" },
      { id: "juice-laylat-khamis",   name: "عصير ليلة خميس",            desc: "", price: "1000 ريال", imageUrl: "" },
      { id: "juice-french",          name: "عصير فرنسي",                desc: "", price: "500 ريال",  imageUrl: "" },
      { id: "juice-royal",           name: "عصير ملكي",                 desc: "", price: "1000 ريال", imageUrl: "" },
      { id: "juice-tropical-royal",  name: "عصير استوائي ملكي",         desc: "", price: "700 ريال",  imageUrl: "" },
      { id: "juice-kaju-walnut",     name: "عصير كاجو ولوز",            desc: "", price: "1000 ريال", imageUrl: "" },
      { id: "juice-orange-cup",      name: "عصير برتقال كيس",           desc: "", price: "1500 ريال", imageUrl: "" },
      { id: "juice-avocado-cream-honey", name: "عصير افكادو بالقشطة والعسل", desc: "", price: "1200 ريال", imageUrl: "" },

      {
        id: "juice-tropical-diwan",
        name: "عصير استوائي الديوان",
        desc: "",
        imageUrl: "",
        types: [
          { name: "صغير", price: "1200 ريال" },
          { name: "كبير", price: "1500 ريال" }
        ]
      },

      { id: "juice-energy", name: "عصير مقوي الصناعة", desc: "", price: "1200 ريال", imageUrl: "" },

      { id: "juice-ice-choco",   name: "عصير ايس شوكو",     desc: "", price: "1000 ريال", imageUrl: "" },
      { id: "juice-awar-alqalb", name: "عصير عوار القلب",   desc: "", price: "1000 ريال", imageUrl: "" },
      { id: "smoothie-strawberry", name: "عصير سموذي فراولة", desc: "", price: "800 ريال", imageUrl: "" },
      { id: "smoothie-mango",      name: "عصير سموذي منجا",   desc: "", price: "800 ريال", imageUrl: "" },

      { id: "healthy-lemon",        name: "صحة ليمون",                    desc: "", price: "400 ريال",  imageUrl: "" },
      { id: "healthy-orange",       name: "صحة برتقال",                   desc: "", price: "800 ريال",  imageUrl: "" },
      { id: "healthy-banana",       name: "صحة موز طبيعي",                desc: "", price: "800 ريال",  imageUrl: "" },
      { id: "healthy-mango-milk",   name: "صحة منجا بالحليب",             desc: "", price: "800 ريال",  imageUrl: "" },
      { id: "healthy-fruit-mix",    name: "صحة فواكه",                    desc: "", price: "800 ريال",  imageUrl: "" },
      { id: "healthy-strawberry",   name: "صحة فراولة",                   desc: "", price: "800 ريال",  imageUrl: "" },
      { id: "healthy-grape",        name: "صحة عنب",                      desc: "", price: "800 ريال",  imageUrl: "" },
      { id: "healthy-pomegranate",  name: "صحة رمان",                     desc: "", price: "800 ريال",  imageUrl: "" },
      { id: "healthy-apple",        name: "صحة تفاح",                     desc: "", price: "800 ريال",  imageUrl: "" },
      { id: "healthy-banana-milk",  name: "صحة موز بالحليب",              desc: "", price: "600 ريال",  imageUrl: "" },
      { id: "healthy-avocado-cin-honey", name: "صحة افكادو مع القرفة والعسل", desc: "", price: "2400 ريال", imageUrl: "" },
      { id: "healthy-raisin",       name: "صحة زبيب",                     desc: "", price: "1400 ريال",  imageUrl: "" }
    ],

    desserts: [
      { id: "kunafa-cream",     name: "كنافة بالقشطة",   desc: "", price: "700 ريال",  imageUrl: "" },
      { id: "kunafa-nutella",   name: "كنافة بالنوتيلا", desc: "", price: "1200 ريال", imageUrl: "" },
      { id: "kunafa-pistachio", name: "كنافة بالفستق",   desc: "", price: "1200 ريال", imageUrl: "" },
      { id: "kunafa-brownies",  name: "كنافة براونش",    desc: "", price: "1200 ريال", imageUrl: "" },
      { id: "kunafa-special",   name: "كنافة سبيشل",     desc: "", price: "1500 ريال", imageUrl: "" },

      { id: "areekah",          name: "عريكة",             desc: "", price: "1500 ريال", imageUrl: "" },
      { id: "fatta-ghee",       name: "فتة دهن",           desc: "", price: "1500 ريال", imageUrl: "" },
      { id: "fatta-cream-honey",name: "فتة بالقشطة والعسل", desc: "", price: "1200 ريال", imageUrl: "" },

      {
        id: "fatta-dates",
        name: "فتة تمر",
        desc: "",
        imageUrl: "",
        types: [
          { name: "طبق", price: "600 ريال" },
          { name: "كيس", price: "700 ريال" }
        ]
      },

      { id: "fatta-banana", name: "فتة بالموز", desc: "", price: "1200 ريال", imageUrl: "" },
      { id: "masoub",       name: "معصوب",      desc: "", price: "1500 ريال", imageUrl: "" },

      {
        id: "malooh",
        name: "ملوح",
        desc: "",
        imageUrl: "",
        types: [
          { name: "سنجل", price: "300 ريال" },
          { name: "دبل",  price: "500 ريال" }
        ]
      }
    ],

    shawarma: [
      {
        id: "shawarma-diwan",
        name: "شاورما الديوان (حصص)",
        desc: "",
        imageUrl: "",
        types: [
          { name: "نص نفر", price: "1300 ريال" },
          { name: "نفر",    price: "2500 ريال" }
        ]
      },
      {
        id: "shawarma-sandwich",
        name: "سندوتش شاورما",
        desc: "",
        imageUrl: "",
        types: [
          { name: "خبز عادي", price: "400 ريال" },
          { name: "عربي",     price: "500 ريال" },
          { name: "بان",      price: "500 ريال" },
          { name: "اسبيشل",   price: "1000 ريال" }
        ]
      },
      { id: "shawarma-half-portion", name: "نص نفر شاورما", desc: "", price: "1000 ريال", imageUrl: "" }
    ],

    "adds-on": [
      { id: "sahawiq-mix-diwan",      name: "سحاوق مجموع الديوان", desc: "", price: "2000 ريال", imageUrl: "" },
      { id: "sahawiq-red",            name: "سحاوق احمر عادي",      desc: "", price: "300 ريال",  imageUrl: "" },
      { id: "sahawiq-cheese",         name: "سحاوق جبن",            desc: "", price: "500 ريال",  imageUrl: "" },
      { id: "sahawiq-hareesha",       name: "سحاوق هريشة",          desc: "", price: "700 ريال",  imageUrl: "" },
      { id: "sahawiq-khamsah-cheese", name: "سحاوق خمسة جبن",       desc: "", price: "700 ريال",  imageUrl: "" },
      { id: "sahawiq-khamsah",        name: "سحاوق خمسه عادي",      desc: "", price: "400 ريال",  imageUrl: "" },
      { id: "sahawiq-cheese-double",  name: "سحاوق جبن دبل",        desc: "", price: "700 ريال",  imageUrl: "" },
      { id: "sahawiq-aransi",         name: "سحاوق عرنسي",          desc: "", price: "1000 ريال", imageUrl: "" },
      { id: "garlic",                 name: "ثوم",                   desc: "", price: "200 ريال",  imageUrl: "" },
      { id: "sauce",                  name: "صوص",                   desc: "", price: "300 ريال",  imageUrl: "" }
    ]
  }


}}
