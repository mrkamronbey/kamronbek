export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  tags: string[];
  emoji: string;
  readTime: string;
  content: { heading?: string; body: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "react-server-components",
    category: "React",
    date: "15 Aprel, 2026",
    title: "React Server Components — amaliy qo'llanma",
    excerpt: "RSC qanday ishlaydi va loyihalaringizda qanday qo'llash mumkinligi haqida to'liq ko'rsatma.",
    tags: ["React", "Performance"],
    emoji: "📝",
    readTime: "5 daqiqa",
    content: [
      { body: "React Server Components (RSC) — React 18 bilan taqdim etilgan yangi arxitektura. U komponentlarni server tomonida render qilishga imkon beradi, bu esa JavaScript bundle hajmini kamaytiradi va sahifa yuklash tezligini oshiradi." },
      { heading: "RSC nima?", body: "Server Components — bu faqat server tomonida ishlaydigan React komponentlari. Ular brauzерga JavaScript sifatida yetib bormaydi, faqat tayyor HTML ko'rinishida keladi. Bu ayniqsa ma'lumotlar bazasiga murojaat qiluvchi yoki katta kutubxonalar ishlatiladigan komponentlar uchun juda foydali." },
      { heading: "Client vs Server Components", body: "Standart React komponentlari (\"use client\") brauzerda ishlaydi va interaktivlikni ta'minlaydi. Server Components esa server tomonida ishlaydi — ular useState, useEffect kabi hooklarni ishlatol olmaydi, lekin to'g'ridan-to'g'ri ma'lumotlar bazasiga murojaat qila oladi." },
      { heading: "Qachon ishlatish kerak?", body: "Statik kontent, ma'lumotlar bazasidan ma'lumot olish, katta kutubxonalar (markdown parser, chart kutubxonalari) uchun Server Components ideal. Forma, modal, animatsiya kabi interaktiv qismlar uchun esa Client Components kerak." },
      { heading: "Next.js da RSC", body: "Next.js App Router'da barcha komponentlar default sifatida Server Component hisoblanadi. Interaktivlik kerak bo'lsa, fayl boshiga 'use client' direktiva qo'shiladi. Bu arxitektura loyihaning performance'ini sezilarli yaxshilaydi." },
    ],
  },
  {
    slug: "typescript-frontend-architecture",
    category: "TypeScript",
    date: "2 Mart, 2026",
    title: "TypeScript bilan kuchli frontend arxitektura",
    excerpt: "Katta loyihalarda type safety va code maintainability qanday ta'minlanadi.",
    tags: ["TypeScript", "Architecture"],
    emoji: "🔧",
    readTime: "7 daqiqa",
    content: [
      { body: "TypeScript — JavaScript'ning tip xavfsizligini ta'minlovchi superset'i. Katta frontend loyihalarida TypeScript ishlatish kodni boshqarishni ancha osonlashtiradi va xatolarni oldindan aniqlaydi." },
      { heading: "Feature-module arxitektura", body: "Loyihani feature modullarga ajratish — zamonaviy frontend arxitekturasining asosi. Har bir feature o'z komponentlari, hook'lari, turlari va utilitalari bilan mustaqil modul sifatida yashaydi. Bu kodni topish va o'zgartirishni osonlashtiradi." },
      { heading: "Type definition strategiyalari", body: "Interface va Type alias'larni to'g'ri ishlatish muhim. Umumiy turlarni shared/types papkasida saqlash, feature-specific turlarni esa o'z modulida joylashtirish — bu pattern katta jamoalarda ishlashda juda samarali." },
      { heading: "Strict mode va linting", body: "TypeScript'ning strict modeni yoqish va ESLint bilan birga ishlatish xatolarni oldindan topishga yordam beradi. tsconfig.json'da strictNullChecks, noImplicitAny kabi qoidalarni yoqib qo'yish muhim." },
    ],
  },
  {
    slug: "css-grid-flexbox",
    category: "CSS",
    date: "18 Fevral, 2026",
    title: "CSS Grid va Flexbox: real loyihalarda",
    excerpt: "Qachon Grid, qachon Flexbox ishlatish kerak — amaliy misollar bilan.",
    tags: ["CSS", "Layout"],
    emoji: "🎨",
    readTime: "4 daqiqa",
    content: [
      { body: "CSS Grid va Flexbox — zamonaviy veb-dizayndagi ikki asosiy layout tizimi. Ularning farqini va qaysi vaziyatda qaysi birini ishlatishni bilish har bir frontend dasturchisi uchun zarur." },
      { heading: "Flexbox — bir o'qli tartib", body: "Flexbox asosan bir yo'nalishda (gorizontal yoki vertikal) elementlarni joylashtirish uchun mo'ljallangan. Navigatsiya bar, button guruhlari, card ichidagi elementlar — bular uchun Flexbox ideal tanlov." },
      { heading: "CSS Grid — ikki o'qli tartib", body: "Grid tizimi ikki o'q bo'ylab (qator va ustun) elementlarni boshqarish imkonini beradi. Sahifaning asosiy layout'i, karta to'plamlari, gallery — Grid bu vazifalarni ancha oson hal qiladi." },
      { heading: "Qaysi birini tanlash kerak?", body: "Oddiy qoida: agar elementlar bir qatorga yoki bir ustunга joylashtirilyapti — Flexbox. Agar ikki o'qda ham boshqarish kerak bo'lsa — Grid. Ko'p hollarda ikkisini birga ishlatish eng yaxshi natija beradi." },
    ],
  },
  {
    slug: "nextjs-performance-tips",
    category: "Performance",
    date: "10 Yanvar, 2026",
    title: "Next.js da performance optimallashtirish",
    excerpt: "Image optimization, lazy loading, bundle size kamaytirish — barcha usullar bir joyda.",
    tags: ["Next.js", "Performance"],
    emoji: "⚡",
    readTime: "6 daqiqa",
    content: [
      { body: "Next.js loyihasini tezlashtirish uchun bir nechta asosiy usullar mavjud. Ularni to'g'ri qo'llash sahifaning Core Web Vitals ko'rsatkichlarini sezilarli yaxshilaydi." },
      { heading: "Image optimallashtirish", body: "Next.js'ning Image komponenti rasmlarni avtomatik optimallаshtiradi: WebP formatiga o'tkazadi, lazy loading qo'shadi va responsive rasmlar yaratadi. next/image'ni doim oddiy <img> o'rniga ishlating." },
      { heading: "Bundle size kamaytirish", body: "dynamic import() bilan katta komponentlarni lazy load qilish bundle hajmini kamaytiradi. Bundle analyzer orqali qaysi kutubxonalar ko'p joy egallaganligi ko'rish mumkin." },
      { heading: "Server Components va caching", body: "App Router'dagi Server Components va fetch() ning built-in caching mexanizmi sahifani tezlashtiradi. revalidate parametrini to'g'ri sozlash server load'ni kamaytiradi." },
    ],
  },
  {
    slug: "react-hooks-patterns",
    category: "React",
    date: "25 Dekabr, 2025",
    title: "Custom hooks: eng yaxshi patterns",
    excerpt: "useLocalStorage, useFetch, useDebounce — real loyihalarda ishlatiladigan custom hooklar.",
    tags: ["React", "Hooks"],
    emoji: "🪝",
    readTime: "8 daqiqa",
    content: [
      { body: "Custom hooks — React'da logikani qayta ishlatishning eng qulay usuli. Ular komponentlardan murakkab mantiqni ajratib, kod bazasini tozaroq va test qilish osonroq qiladi." },
      { heading: "useLocalStorage", body: "localStorage bilan ishlashni encapsulate qiladigan bu hook qiymatni localStorage'da saqlaydi va davlat o'zgarganda yangilaydi. SSR bilan ishlaganda typeof window tekshiruvi zarur." },
      { heading: "useFetch", body: "API'lardan ma'lumot olish uchun universal hook. Loading, error va data holatlarini boshqaradi, AbortController orqali unmount vaqtida so'rovni bekor qiladi." },
      { heading: "useDebounce", body: "Foydalanuvchi kiritayotgan qiymatni delay bilan yangilaydigan hook — qidiruv inputlari uchun ideal. Bu server'ga ortiqcha so'rov yuborilishining oldini oladi." },
    ],
  },
  {
    slug: "tailwind-best-practices",
    category: "CSS",
    date: "5 Dekabr, 2025",
    title: "Tailwind CSS best practices",
    excerpt: "Katta loyihalarda Tailwind'ni tartibli ishlatish — komponentlar, qoidalar va maslahatlar.",
    tags: ["CSS", "Tailwind"],
    emoji: "💨",
    readTime: "5 daqiqa",
    content: [
      { body: "Tailwind CSS kichik loyihalarda juda qulay, lekin katta jamoalarda ishlaganda bir nechta yaxshi qoidalarni bilish muhim. Aks holda className'lar nazoratdan chiqib ketishi mumkin." },
      { heading: "Komponentlashtrish", body: "Bir xil class'lar to'plamini qayta-qayta yozish o'rniga, React komponentlari yarating. Button, Card, Badge — bulар alohida komponent sifatida ajratilsa, kelajakda o'zgartirishlar osonlashadi." },
      { heading: "Design tokens", body: "tailwind.config.ts'da loyiha uchun maxsus ranglar, fontlar va o'lchamlarni aniqlang. Arbitrary qiymatlar ([14px], [#5b8def]) o'rniga semantic tokenlar ishlating — bu consistency'ni ta'minlaydi." },
      { heading: "clsx va cva", body: "Shartli class'lar uchun clsx yoki cva kutubxonalarini ishlating. Bu uzoq ternary operatorlar o'rniga toza va o'qimli kod yozishga yordam beradi." },
    ],
  },
];

export const CATEGORIES = ["Barchasi", "React", "TypeScript", "CSS", "Performance"];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
