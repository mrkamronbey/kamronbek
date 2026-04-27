export interface Project {
  slug: string;
  iconKey: string;
  accent: string;
  bgAccent: string;
  year: string;
  title: string;
  desc: string;
  longDesc: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    iconKey: "ShoppingCart", accent: "#5b8def", bgAccent: "rgba(91,141,239,0.12)",
    year: "2025", title: "E-Commerce Platform",
    desc: "Full-featured onlayn do'kon — mahsulot filtrlash, savatcha, to'lov integratsiyasi.",
    longDesc: "React va TypeScript asosida qurilgan to'liq funksional elektron tijorat platformasi. Mahsulotlarni kategoriya va filtr orqali qidirish, savatcha boshqaruvi, Stripe orqali to'lov, foydalanuvchi autentifikatsiyasi va admin panel mavjud.",
    tags: ["React", "TypeScript", "Redux", "Stripe", "Node.js"],
    githubUrl: "https://github.com/mrkamronbek",
    features: [
      "Mahsulot filtrlash va qidirish",
      "Savatcha va wishlist",
      "Stripe to'lov integratsiyasi",
      "Foydalanuvchi autentifikatsiyasi",
      "Admin boshqaruv paneli",
    ],
  },
  {
    slug: "ui-component-library",
    iconKey: "Layers", accent: "#a78bfa", bgAccent: "rgba(167,139,250,0.12)",
    year: "2025", title: "UI Component Library",
    desc: "Qayta foydalanish mumkin bo'lgan komponentlar kutubxonasi — 40+ komponent, dark mode.",
    longDesc: "React va TypeScript asosida yozilgan, 40+ qayta ishlatiluvchi komponentdan iborat kutubxona. Storybook bilan hujjatlashtirilgan, dark/light mode qo'llab-quvvatlaydi, accessibility standartlariga mos keladi.",
    tags: ["React", "TypeScript", "Storybook", "CSS", "Rollup"],
    githubUrl: "https://github.com/mrkamronbek",
    features: [
      "40+ tayyor komponent",
      "Dark va light mode",
      "Storybook hujjatlari",
      "TypeScript type definitions",
      "WCAG accessibility",
    ],
  },
  {
    slug: "analytics-dashboard",
    iconKey: "BarChart2", accent: "#34d399", bgAccent: "rgba(52,211,153,0.12)",
    year: "2024", title: "Analytics Dashboard",
    desc: "Real-time ma'lumotlar vizualizatsiyasi, interaktiv grafiklar va filtrlar.",
    longDesc: "Next.js va Chart.js yordamida qurilgan real-time analytics dashboard. Turli xil grafik turlari, sanaga qarab filtrlash, CSV eksport va tez-tez yangilanuvchi ma'lumotlar ko'rsatishni ta'minlaydi.",
    tags: ["Next.js", "Chart.js", "REST API", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/mrkamronbek",
    features: [
      "Real-time ma'lumot yangilash",
      "10+ grafik turi",
      "Sana va kategoriya filtri",
      "CSV / PDF eksport",
      "Responsive dizayn",
    ],
  },
  {
    slug: "mobile-first-blog",
    iconKey: "BookOpen", accent: "#f472b6", bgAccent: "rgba(244,114,182,0.12)",
    year: "2024", title: "Mobile-First Blog",
    desc: "SEO optimallashtirilgan blog platforma — markdown support, kategoriyalar.",
    longDesc: "Next.js App Router va MDX asosida qurilgan SEO-optimallashtirilgan blog platformasi. Markdown va MDX kontent yozish, kategoriyalar, qidiruv, va Google Analytics integratsiyasi mavjud.",
    tags: ["Next.js", "MDX", "Tailwind", "SEO", "TypeScript"],
    githubUrl: "https://github.com/mrkamronbek",
    features: [
      "MDX kontent formati",
      "SEO meta teglari",
      "Kategoriyalar va teglar",
      "Qidiruv funksiyasi",
      "Google Analytics",
    ],
  },
  {
    slug: "auth-system",
    iconKey: "ShieldCheck", accent: "#fb923c", bgAccent: "rgba(251,146,60,0.12)",
    year: "2024", title: "Auth System",
    desc: "JWT, OAuth2, role-based access control bilan to'liq autentifikatsiya tizimi.",
    longDesc: "Node.js va Express asosida qurilgan kuchli autentifikatsiya tizimi. JWT va refresh token mexanizmi, Google/GitHub OAuth2, rol asosida kirish nazorati, va email tasdiqlash funksiyalari mavjud.",
    tags: ["Node.js", "JWT", "OAuth2", "PostgreSQL", "Express"],
    githubUrl: "https://github.com/mrkamronbek",
    features: [
      "JWT + Refresh token",
      "Google va GitHub OAuth2",
      "Role-based access control",
      "Email tasdiqlash",
      "Rate limiting",
    ],
  },
  {
    slug: "landing-page-builder",
    iconKey: "Layout", accent: "#f59e0b", bgAccent: "rgba(245,158,11,0.12)",
    year: "2023", title: "Landing Page Builder",
    desc: "Drag-and-drop landing page yaratish vositasi — eksport va publish imkoniyati.",
    longDesc: "React DnD Kit yordamida yaratilgan drag-and-drop landing page builder. 20+ tayyor blok, real-time preview, HTML/CSS eksport va Firebase Hosting orqali publish qilish imkoniyati mavjud.",
    tags: ["React", "DnD Kit", "Firebase", "TypeScript", "CSS"],
    githubUrl: "https://github.com/mrkamronbek",
    features: [
      "20+ tayyor blok",
      "Drag-and-drop interfeys",
      "Real-time preview",
      "HTML/CSS eksport",
      "Firebase Hosting publish",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
