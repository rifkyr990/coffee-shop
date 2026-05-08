export type BadgeKey = "bestseller" | "new" | "popular" | "chefspick" | "signature";

export type MenuItem = {
  id: number;
  name: string;
  description: { id: string; en: string };
  price: number;
  category: "coffee" | "signature" | "food" | "non-coffee";
  image: string;
  popular?: boolean;
  badge?: BadgeKey;
  tags?: ("vegan" | "decaf" | "seasonal" | "gluten-free" | "bestseller")[];
};

export type Testimonial = {
  id: number;
  name: string;
  role: string;
  text: { id: string; en: string };
  rating: number;
  initials: string;
};

export type GalleryImage = {
  id: number;
  src: string;
  alt: { id: string; en: string };
  span?: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Single Origin Espresso",
    description: {
      id: "Espresso single-origin dari Ethiopian Yirgacheffe yang kaya dan kuat dengan cita rasa dark chocolate dan berry liar.",
      en: "Rich, intense shot of single-origin Ethiopian Yirgacheffe with notes of dark chocolate and wild berries.",
    },
    price: 45000,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&q=80",
    popular: true,
    badge: "bestseller",
    tags: ["bestseller"],
  },
  {
    id: 2,
    name: "Signature Latte",
    description: {
      id: "Espresso house-blend kami dengan susu penuh yang dikukus sempurna dan tuangan rosette yang indah.",
      en: "Our house-blend espresso with perfectly steamed whole milk and a beautiful rosette pour.",
    },
    price: 55000,
    category: "signature",
    image:
      "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=400&q=80",
    popular: true,
    tags: ["bestseller"],
  },
  {
    id: 3,
    name: "Caramel Macchiato",
    description: {
      id: "Susu dikukus beraroma vanilla, double shot espresso, dan aliran karamel buatan dapur kami.",
      en: "Vanilla-flavored steamed milk, a double shot of espresso, and a cascade of house-made caramel.",
    },
    price: 58000,
    category: "signature",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
    badge: "popular",
    tags: ["seasonal"],
  },
  {
    id: 4,
    name: "Cold Brew",
    description: {
      id: "Campuran Kolombia yang direndam dingin selama 18 jam, secara alami manis dan lembut tanpa kepahitan.",
      en: "18-hour cold-steeped Colombian blend, naturally sweet and smooth with zero bitterness.",
    },
    price: 52000,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80",
    badge: "new",
    tags: ["seasonal"],
  },
  {
    id: 5,
    name: "Matcha Latte",
    description: {
      id: "Matcha Jepang ceremonial-grade yang dikocok bersama susu oat dikukus dan sedikit madu murni.",
      en: "Ceremonial-grade Japanese matcha whisked with steamed oat milk and a touch of raw honey.",
    },
    price: 56000,
    category: "non-coffee",
    image:
      "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400&q=80",
    popular: true,
    tags: ["vegan"],
  },
  {
    id: 6,
    name: "Vanilla Chai",
    description: {
      id: "Campuran rempah buatan tangan dengan teh hitam, susu dikukus, dan pasta vanilla bean asli.",
      en: "Hand-blended spice mix with black tea, steamed milk, and real vanilla bean paste.",
    },
    price: 53000,
    category: "non-coffee",
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
    tags: ["vegan"],
  },
  {
    id: 7,
    name: "Croissant au Beurre",
    description: {
      id: "Adonan berlapis yang renyah, dipanggang segar setiap pagi dengan mentega AOP Prancis impor.",
      en: "Flaky, laminated dough baked fresh every morning with imported French AOP butter.",
    },
    price: 35000,
    category: "food",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
    popular: true,
    tags: ["vegan"],
  },
  {
    id: 8,
    name: "Avocado Toast",
    description: {
      id: "Roti sourdough dengan tumbukan alpukat, telur poached, serpihan cabai, microgreens, dan parutan lemon.",
      en: "Sourdough toast with smashed avocado, poached egg, chili flakes, microgreens, and lemon zest.",
    },
    price: 68000,
    category: "food",
    image:
      "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&q=80",
    badge: "chefspick",
    tags: ["vegan", "seasonal"],
  },
  {
    id: 9,
    name: "Basque Cheesecake",
    description: {
      id: "Cheesecake ala Basque yang dibakar dengan bagian atas sangat karamel dan bagian tengah yang luar biasa creamy.",
      en: "Burnt Basque-style cheesecake with a deeply caramelized top and an impossibly creamy center.",
    },
    price: 48000,
    category: "food",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
    badge: "signature",
    tags: ["bestseller"],
  },
  {
    id: 10,
    name: "Flat White",
    description: {
      id: "Double ristretto dengan susu micro-foam lembut — pilihan barista untuk para puritan kopi.",
      en: "Double ristretto with velvety micro-foam milk — the barista's choice for coffee purists.",
    },
    price: 50000,
    category: "coffee",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
    tags: ["bestseller"],
  },
  {
    id: 11,
    name: "Affogato",
    description: {
      id: "Seteguk espresso panas yang dituangkan di atas gelato vanilla buatan dapur. Sederhana. Memukau.",
      en: "A shot of hot espresso poured over house-made vanilla gelato. Simple. Transcendent.",
    },
    price: 62000,
    category: "signature",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
    popular: true,
    tags: ["seasonal"],
  },
  {
    id: 12,
    name: "Banana Bread",
    description: {
      id: "Banana bread lembab dengan rempah, kenari, dan lapisan honey-butter, dipanggang di dapur setiap hari.",
      en: "Moist, spiced banana bread with walnuts and a honey-butter glaze, baked in-house daily.",
    },
    price: 38000,
    category: "food",
    image:
      "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&q=80",
    tags: ["vegan", "gluten-free"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Anindita Rasheva",
    role: "Food Blogger",
    text: {
      id: "AromaCo. adalah tempat favorit saya untuk pagi yang tenang. Espresso single-origin mereka adalah yang terbaik yang pernah saya cicipi di kota ini, dan atmosfernya sangat sempurna untuk bekerja atau sekadar bersantai.",
      en: "AromaCo. is my go-to for a quiet morning. Their single-origin espresso is the best I've had in the city, and the atmosphere is just perfect for working or simply unwinding.",
    },
    rating: 5,
    initials: "AR",
  },
  {
    id: 2,
    name: "Rizky Pratama",
    role: "Graphic Designer",
    text: {
      id: "Signature Latte di sini telah merusak semua kopi lain bagi saya. Latte art-nya indah, kopinya kaya dan lembut, dan staf di sini benar-benar mencintai pekerjaan mereka.",
      en: "The Signature Latte here has ruined every other coffee for me. The latte art is gorgeous, the coffee is rich and smooth, and the staff genuinely love what they do.",
    },
    rating: 5,
    initials: "RP",
  },
  {
    id: 3,
    name: "Sarah Ningsih",
    role: "Architect",
    text: {
      id: "Saya menemukan AromaCo. saat perjalanan bisnis dan kini selalu menyempatkan kunjungan ke sini. Basque cheesecake-nya sangat cocok dipadukan dengan cold brew mereka. Wajib dikunjungi.",
      en: "I discovered AromaCo. during a work trip and now plan my visits around it. The Basque cheesecake pairs incredibly with their cold brew. Absolute must-visit.",
    },
    rating: 5,
    initials: "SN",
  },
  {
    id: 4,
    name: "Budi Santoso",
    role: "Startup Founder",
    text: {
      id: "Lebih dari sekadar kedai kopi — tempat ini adalah surga kreativitas. Wi-Fi bagus, minuman lezat, makanan istimewa, dan suasana yang terasa tepat untuk kerja dalam.",
      en: "More than a coffee shop — this place is a creative refuge. Great wifi, excellent drinks, amazing food, and a space that just feels right for deep work.",
    },
    rating: 5,
    initials: "BS",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    alt: { id: "Tuangan kopi artistik", en: "Artistic coffee pour" },
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
    alt: { id: "Biji kopi close-up", en: "Coffee beans close-up" },
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
    alt: { id: "Latte art", en: "Latte art" },
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    alt: { id: "Interior kafe", en: "Café interior" },
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&q=80",
    alt: { id: "Barista bekerja", en: "Barista at work" },
  },
];