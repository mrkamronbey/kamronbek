import {
  Fuel, Truck, LayoutDashboard, Store,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/i18n/routing";

export interface Project {
  slug: string;
  iconKey: string;
  accent: string;
  bgAccent: string;
  year: string;
  tags: string[];
  internal?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  title: string;
  desc: string;
  longDesc: string;
  features: string[];
}

/* iconKey → lucide icon (single source of truth; access with `projectIcons[key] ?? Layout`) */
export const projectIcons: Record<string, LucideIcon> = {
  Fuel, Truck, LayoutDashboard, Store,
};

/* ── Language-independent fields ── */
interface ProjectBase {
  slug: string;
  iconKey: string;
  accent: string;
  bgAccent: string;
  year: string;
  tags: string[];
  internal?: boolean;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

const BASE: ProjectBase[] = [
  {
    slug: "half-tank",
    iconKey: "Fuel", accent: "#34d399", bgAccent: "rgba(52,211,153,0.12)",
    year: "2025", tags: ["React Native", "TypeScript", "Maps", "REST API"],
    image: "half-tank.png", internal: true,
  },
  {
    slug: "cosmos-driver",
    iconKey: "Truck", accent: "#5b8def", bgAccent: "rgba(91,141,239,0.12)",
    year: "2025", tags: ["React Native", "TypeScript", "Maps", "REST API"],
    image: "cosmos-driver.png", internal: true,
  },
  {
    slug: "cosmos-tms",
    iconKey: "LayoutDashboard", accent: "#a78bfa", bgAccent: "rgba(167,139,250,0.12)",
    year: "2025", tags: ["React", "TypeScript", "Redux Toolkit", "REST API"],
    image: "cosmos-tms.png", internal: true,
  },
  {
    slug: "al-baraka",
    iconKey: "Store", accent: "#f59e0b", bgAccent: "rgba(245,158,11,0.12)",
    year: "2025", tags: ["React", "TypeScript", "Chart.js", "React Query", "Axios"],
    image: "al-baraka.png", internal: true,
  },
];

/* ── Localized content ── */
type Content = Pick<Project, "title" | "desc" | "longDesc" | "features">;

const CONTENT: Record<Locale, Record<string, Content>> = {
  uz: {
    "half-tank": {
      title: "Half Tank — yoqilg'i ilovasi",
      desc: "Haydovchilar uchun yo'nalish bo'ylab eng yaqin va arzon yoqilg'i shaxobchalarini topish va sarfni nazorat qilish mobil ilovasi.",
      longDesc: "Windermer Pro uchun React Native asosida yaratilgan mobil ilova. Haydovchilar yuk tashish yo'nalishi bo'ylab eng yaqin va arzon yoqilg'i quyish shaxobchalarini topadi, narxlarni solishtiradi, qilingan to'lovlar tarixini ko'radi va yoqilg'i sarfini nazorat qilib hisobini yuritadi.",
      features: [
        "Yo'nalish bo'ylab eng yaqin shaxobchalarni topish",
        "Stansiyalar narxini solishtirish",
        "To'lovlar tarixi",
        "Yoqilg'i sarfini nazorat va hisob-kitob",
        "React Native mobil ilova (iOS + Android)",
      ],
    },
    "cosmos-driver": {
      title: "Cosmos Driver — haydovchi ilovasi",
      desc: "Haydovchilar uchun yuklar holatini kuzatish, xaritada manzillarni ko'rish va hujjatlar bilan ishlash mobil ilovasi.",
      longDesc: "React Native asosidagi haydovchilar uchun mobil ilova. Haydovchilar o'zlariga berilgan yuklar holatini va tarixini ko'radi, yetkazilgan vaqtni belgilaydi, xaritada yuklar manzilini ko'radi, hujjatlarni ko'radi/o'chiradi/yuklaydi. Lokatsiya Cosmos TMS'da dispetcherlar tomonidan real vaqtda kuzatiladi.",
      features: [
        "Yuklar holati va tarixi",
        "Yetkazilgan vaqtni belgilash",
        "Xaritada yuklar manzili",
        "Hujjatlarni ko'rish, o'chirish va yuklash",
        "Lokatsiya — dispetcherlar real vaqtda kuzatadi",
      ],
    },
    "cosmos-tms": {
      title: "Cosmos TMS — logistika tizimi",
      desc: "Logistika jarayonlarini (yuk, haydovchi, transport, KPI, hisobot) boshqaruvchi veb tizim.",
      longDesc: "Logistika jarayonlarini — yuk, haydovchi, transport, KPI, hisobotlar va boshqalarni — boshqarish veb tizimi. Mavjud loyiha ustida ishlab, kodni refaktor qildim: katta komponentlarni kichik va qayta ishlatiladigan bo'laklarga ajratdim, takrorlanuvchi logikani custom hook'larga chiqardim, keraksiz qayta render'larni kamaytirib tezlikni oshirdim va UIni qaytadan ishlab qulayroq qildim.",
      features: [
        "Yuk, haydovchi va transport boshqaruvi",
        "KPI va hisobotlar",
        "Kod refaktoringi va custom hook'lar",
        "Keraksiz render'larni kamaytirib tezlikni oshirish",
        "Qayta ishlangan, qulay UI",
      ],
    },
    "al-baraka": {
      title: "Al-baraka — savdo boshqaruvi",
      desc: "Ko'p filialli do'kon biznesini boshqarish admin paneli: sotuv, ombor, qarz va real vaqtli analitika.",
      longDesc: "Ko'p filialli do'kon/outlet biznesini boshqarish uchun admin panel. Sotuv qo'shish, tovarlar va ombor (qoldiq) nazorati, qaytarishlar, mijozlar va ularning qarzini kuzatish, filiallar, xodimlar va rollarni boshqarish. Real vaqtli analitika paneli daromad, xarajat va sof foydani ko'rsatadi; to'lov turlari (Click, naqd, terminal) va filiallar kesimida diagrammali hisobotlar beradi. Chek chiqarish uchun printer integratsiyasi ham mavjud.",
      features: [
        "Sotuv, ombor (qoldiq) va qaytarishlar",
        "Mijozlar va ularning qarzini kuzatish",
        "Filiallar, xodimlar va rollar boshqaruvi",
        "Real vaqtli analitika (daromad/xarajat/sof foyda)",
        "To'lov turlari, diagrammalar va printer integratsiyasi",
      ],
    },
  },

  en: {
    "half-tank": {
      title: "Half Tank — Fuel App",
      desc: "A mobile app for drivers to find the nearest, cheapest fuel stations along their route and track consumption.",
      longDesc: "A React Native mobile app built for Windermer Pro. Drivers find the nearest and cheapest fuel stations along their cargo route, compare prices, view their payment history, and track and record fuel consumption.",
      features: [
        "Find the nearest stations along the route",
        "Compare station prices",
        "Payment history",
        "Fuel consumption tracking and accounting",
        "React Native mobile app (iOS + Android)",
      ],
    },
    "cosmos-driver": {
      title: "Cosmos Driver — Driver App",
      desc: "A mobile app for drivers to track cargo status, view locations on the map and manage documents.",
      longDesc: "A React Native mobile app for drivers. Drivers track the status and history of their assigned cargo, mark delivery times, view cargo locations on the map, and view/delete/upload documents. Their location is monitored by dispatchers in real time within Cosmos TMS.",
      features: [
        "Cargo status and history",
        "Mark delivery times",
        "Cargo locations on the map",
        "View, delete and upload documents",
        "Location — monitored by dispatchers in real time",
      ],
    },
    "cosmos-tms": {
      title: "Cosmos TMS — Logistics System",
      desc: "A web system that manages logistics processes — cargo, drivers, transport, KPIs and reports.",
      longDesc: "A web system for managing logistics processes — cargo, drivers, transport, KPIs, reports and more. Working on the existing project, I refactored the code: split large components into small, reusable pieces, extracted repeated logic into custom hooks, reduced unnecessary re-renders to improve speed, and redesigned the UI to be more convenient.",
      features: [
        "Cargo, driver and transport management",
        "KPIs and reports",
        "Code refactoring and custom hooks",
        "Reduced unnecessary re-renders for speed",
        "Redesigned, convenient UI",
      ],
    },
    "al-baraka": {
      title: "Al-baraka — Sales Management",
      desc: "An admin panel for managing a multi-branch retail business: sales, inventory, debt and real-time analytics.",
      longDesc: "An admin panel for managing a multi-branch store/outlet business. Adding sales, tracking goods and inventory (stock), returns, customers and their debt, and managing branches, employees and roles. A real-time analytics dashboard shows revenue, expenses and net profit, with chart reports broken down by payment type (Click, cash, terminal) and branch. Printer integration for receipts is also included.",
      features: [
        "Sales, inventory (stock) and returns",
        "Track customers and their debt",
        "Manage branches, employees and roles",
        "Real-time analytics (revenue/expense/net profit)",
        "Payment types, charts and printer integration",
      ],
    },
  },

  ru: {
    "half-tank": {
      title: "Half Tank — приложение для топлива",
      desc: "Мобильное приложение для водителей: поиск ближайших и дешёвых заправок по маршруту и контроль расхода.",
      longDesc: "Мобильное приложение на React Native для Windermer Pro. Водители находят ближайшие и самые дешёвые заправки по маршруту перевозки, сравнивают цены, просматривают историю платежей и контролируют расход топлива с учётом.",
      features: [
        "Поиск ближайших заправок по маршруту",
        "Сравнение цен на станциях",
        "История платежей",
        "Контроль и учёт расхода топлива",
        "Мобильное приложение на React Native (iOS + Android)",
      ],
    },
    "cosmos-driver": {
      title: "Cosmos Driver — приложение для водителя",
      desc: "Мобильное приложение для водителей: отслеживание статуса грузов, локации на карте и работа с документами.",
      longDesc: "Мобильное приложение на React Native для водителей. Водители отслеживают статус и историю назначенных грузов, отмечают время доставки, видят локации грузов на карте и просматривают/удаляют/загружают документы. Их локация отслеживается диспетчерами в реальном времени в Cosmos TMS.",
      features: [
        "Статус и история грузов",
        "Отметка времени доставки",
        "Локации грузов на карте",
        "Просмотр, удаление и загрузка документов",
        "Локация — отслеживается диспетчерами в реальном времени",
      ],
    },
    "cosmos-tms": {
      title: "Cosmos TMS — логистическая система",
      desc: "Веб-система управления логистическими процессами — грузы, водители, транспорт, KPI и отчёты.",
      longDesc: "Веб-система для управления логистическими процессами — грузы, водители, транспорт, KPI, отчёты и другое. Работая над существующим проектом, отрефакторил код: разбил большие компоненты на маленькие переиспользуемые части, вынес повторяющуюся логику в custom hooks, сократил лишние ререндеры для скорости и переработал UI, сделав его удобнее.",
      features: [
        "Управление грузами, водителями и транспортом",
        "KPI и отчёты",
        "Рефакторинг кода и custom hooks",
        "Сокращение лишних ререндеров для скорости",
        "Переработанный, удобный UI",
      ],
    },
    "al-baraka": {
      title: "Al-baraka — управление продажами",
      desc: "Админ-панель для управления сетевым розничным бизнесом: продажи, склад, долги и аналитика в реальном времени.",
      longDesc: "Админ-панель для управления многофилиальным бизнесом магазинов/аутлетов. Добавление продаж, контроль товаров и склада (остатков), возвраты, отслеживание клиентов и их задолженности, управление филиалами, сотрудниками и ролями. Панель аналитики в реальном времени показывает доход, расходы и чистую прибыль, с отчётами-диаграммами в разрезе типов оплаты (Click, наличные, терминал) и филиалов. Также есть интеграция с принтером для чеков.",
      features: [
        "Продажи, склад (остатки) и возвраты",
        "Отслеживание клиентов и их задолженности",
        "Управление филиалами, сотрудниками и ролями",
        "Аналитика в реальном времени (доход/расход/чистая прибыль)",
        "Типы оплаты, диаграммы и интеграция с принтером",
      ],
    },
  },
};

export const projectSlugs = BASE.map((b) => b.slug);

export function getProjects(locale: Locale): Project[] {
  return BASE.map((b) => ({ ...b, ...(CONTENT[locale]?.[b.slug] ?? CONTENT.uz[b.slug]) }));
}

export function getProjectBySlug(slug: string, locale: Locale): Project | undefined {
  const base = BASE.find((b) => b.slug === slug);
  if (!base) return undefined;
  return { ...base, ...(CONTENT[locale]?.[slug] ?? CONTENT.uz[slug]) };
}
