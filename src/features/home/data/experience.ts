export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  desc: string;
  highlights: string[];
  skills: string[];
  current?: boolean;
}

export const EXPERIENCE: Record<"uz" | "en" | "ru", ExperienceItem[]> = {
  uz: [
    {
      company: "Windermer Pro LLC",
      role: "Frontend va Mobil dasturchi",
      period: "Fevral 2025 — Hozir",
      location: "Toshkent · Gibrid · To'liq stavka",
      desc: "Logistika kompaniyasining veb va mobil ilovalari ustida ishlayman — tizimdan har kuni 200 dan ortiq xodim (dispetcher, buxgalter, menejer) foydalanadi.",
      highlights: [
        "Half Tank va Cosmos Driver mobil ilovalarini noldan ishlab chiqdim (React Native)",
        "Cosmos TMS logistika tizimini optimallashtirdim — kodni refaktor qildim, tezligini oshirdim, UIni yangiladim va yangi funksiyalar qo'shdim",
        "Hisobot va yuk hujjatlarini avtomatik tayyorlash uchun AI funksiyalarini qo'shdim — qo'lda ma'lumot kiritishni ancha kamaytirdi",
      ],
      skills: ["React", "React Native", "TypeScript", "Redux Toolkit", "REST API", "AI tools"],
      current: true,
    },
    {
      company: "Software System Pro",
      role: "Frontend va Mobil dasturchi",
      period: "Avgust 2023 — Dekabr 2025",
      location: "Masofaviy · Shartnoma asosida",
      desc: "Tibbiyot va farmatsevtika (CRM) sohasidagi mijozlar uchun interfeyslar, korporativ saytlar va landing sahifalar ishlab chiqdim.",
      highlights: [
        "Tibbiyot va farmatsevtika (CRM) sohasidagi mijozlar uchun interfeyslar yaratdim",
        "React va Next.js'da SSR'dan foydalanib, saytlarning SEO va yuklanish tezligini yaxshiladim",
        "Savdo va konversiyani oshirgan korporativ saytlar va landing sahifalar tayyorladim",
      ],
      skills: ["React", "Next.js", "TypeScript", "SSR", "REST API"],
    },
    {
      company: "Abutech",
      role: "Frontend dasturchi",
      period: "May 2024 — Avgust 2024",
      location: "Toshkent · Ofisda · To'liq stavka",
      desc: "Ta'lim platformasi uchun veb-portal ishlab chiqdim — o'quvchilar kurslarni ko'radi, topshiriq topshiradi, natijalarini kuzatadi va sertifikat oladi.",
      highlights: [
        "O'quvchilar uchun kurslar, topshiriqlar, natijalar va sertifikatlar portali",
        "Qulay fayl strukturasi va API'lar orqali ma'lumot almashinuvini sozladim",
        "Holat uchun Zustand, ma'lumot uchun React Query, forma tekshiruvi uchun Zod ishlatdim",
      ],
      skills: ["React", "Zustand", "React Query", "Zod", "TypeScript"],
    },
    {
      company: "Supersite uz",
      role: "Frontend dasturchi",
      period: "Oktyabr 2022 — Iyul 2023",
      location: "Toshkent · Gibrid · Yarim stavka",
      desc: "Mehmonxona boshqaruvi tizimi, mijozlar uchun korporativ saytlar va kichik onlayn do'konlar yaratdim.",
      highlights: [
        "Mehmonxona boshqaruvi tizimi: xona band qilish, mehmon xizmatlari va admin panel",
        "React va Ant Design interfeyslar; holat va ma'lumotni Redux Toolkit va Axios bilan boshqardim",
        "Mijozlar uchun korporativ saytlar va kichik onlayn do'konlar",
      ],
      skills: ["React", "Ant Design", "Redux Toolkit", "Axios", "REST API"],
    },
    {
      company: "O'zbekiston Innovatsion Rivojlanish Vazirligi",
      role: "Frontend dasturchi",
      period: "May 2022 — Oktyabr 2022",
      location: "Toshkent · Gibrid · Yarim stavka",
      desc: "Bir oylik amaliyotdan keyin Almir Statistic farmatsevtika CRM (almir.uz) jamoasiga qo'shildim.",
      highlights: [
        "Almir.uz farmatsevtika CRM interfeysini loyihaladim",
        "Profil va parol boshqaruvi funksiyalarini yaratdim",
        "Chart.js bilan diagrammalar yaratdim va REST API'lar bilan ishladim (React, Redux)",
      ],
      skills: ["React", "Redux", "Chart.js", "REST API"],
    },
  ],

  en: [
    {
      company: "Windermer Pro LLC",
      role: "Frontend & Mobile Developer",
      period: "February 2025 — Present",
      location: "Tashkent · Hybrid · Full-time",
      desc: "Working on a logistics company's web and mobile apps — used daily by 200+ employees (dispatchers, accountants, managers).",
      highlights: [
        "Built the Half Tank and Cosmos Driver mobile apps from scratch (React Native)",
        "Optimized the Cosmos TMS logistics system — refactored the code, improved speed, redesigned the UI and added new features",
        "Added AI features to auto-generate reports and cargo documents — significantly reduced manual data entry",
      ],
      skills: ["React", "React Native", "TypeScript", "Redux Toolkit", "REST API", "AI tools"],
      current: true,
    },
    {
      company: "Software System Pro",
      role: "Frontend & Mobile Developer",
      period: "August 2023 — December 2025",
      location: "Remote · Contract",
      desc: "Built interfaces for healthcare and pharmaceutical (CRM) clients, plus corporate websites and landing pages.",
      highlights: [
        "Built interfaces for healthcare and pharmaceutical (CRM) clients",
        "Used SSR with React and Next.js to improve SEO and load speed",
        "Created corporate websites and landing pages that boosted sales and conversions",
      ],
      skills: ["React", "Next.js", "TypeScript", "SSR", "REST API"],
    },
    {
      company: "Abutech",
      role: "Frontend Developer",
      period: "May 2024 — August 2024",
      location: "Tashkent · On-site · Full-time",
      desc: "Built a web portal for an education platform — students view courses, submit assignments, track results and earn certificates.",
      highlights: [
        "Portal for courses, assignments, results and certificates",
        "Set up a clean file structure and data exchange through APIs",
        "Used Zustand for state, React Query for data, and Zod for form validation",
      ],
      skills: ["React", "Zustand", "React Query", "Zod", "TypeScript"],
    },
    {
      company: "Supersite uz",
      role: "Frontend Developer",
      period: "October 2022 — July 2023",
      location: "Tashkent · Hybrid · Part-time",
      desc: "Built a hotel management system, corporate websites and small online stores for clients.",
      highlights: [
        "Hotel management system: room booking, guest services and admin panel",
        "React and Ant Design interfaces; managed state and data with Redux Toolkit and Axios",
        "Corporate websites and small online stores for clients",
      ],
      skills: ["React", "Ant Design", "Redux Toolkit", "Axios", "REST API"],
    },
    {
      company: "Ministry of Innovative Development of Uzbekistan",
      role: "Frontend Developer",
      period: "May 2022 — October 2022",
      location: "Tashkent · Hybrid · Part-time",
      desc: "After a one-month internship, joined the Almir Statistic pharmaceutical CRM (almir.uz) team.",
      highlights: [
        "Designed the Almir.uz pharmaceutical CRM interface",
        "Built profile and password management features",
        "Created charts with Chart.js and worked with REST APIs (React, Redux)",
      ],
      skills: ["React", "Redux", "Chart.js", "REST API"],
    },
  ],

  ru: [
    {
      company: "Windermer Pro LLC",
      role: "Frontend и мобильный разработчик",
      period: "Февраль 2025 — настоящее время",
      location: "Ташкент · Гибрид · Full-time",
      desc: "Работаю над веб и мобильными приложениями логистической компании — системой ежедневно пользуются 200+ сотрудников (диспетчеры, бухгалтеры, менеджеры).",
      highlights: [
        "Разработал мобильные приложения Half Tank и Cosmos Driver с нуля (React Native)",
        "Оптимизировал логистическую систему Cosmos TMS — отрефакторил код, повысил скорость, обновил UI и добавил новые функции",
        "Добавил AI-функции для автоматической генерации отчётов и грузовых документов — значительно сократил ручной ввод",
      ],
      skills: ["React", "React Native", "TypeScript", "Redux Toolkit", "REST API", "AI tools"],
      current: true,
    },
    {
      company: "Software System Pro",
      role: "Frontend и мобильный разработчик",
      period: "Август 2023 — Декабрь 2025",
      location: "Удалённо · Контракт",
      desc: "Создавал интерфейсы для клиентов из сфер здравоохранения и фармацевтики (CRM), а также корпоративные сайты и лендинги.",
      highlights: [
        "Создавал интерфейсы для клиентов из здравоохранения и фармацевтики (CRM)",
        "Использовал SSR с React и Next.js для улучшения SEO и скорости загрузки",
        "Создавал корпоративные сайты и лендинги, повышавшие продажи и конверсию",
      ],
      skills: ["React", "Next.js", "TypeScript", "SSR", "REST API"],
    },
    {
      company: "Abutech",
      role: "Frontend разработчик",
      period: "Май 2024 — Август 2024",
      location: "Ташкент · Офис · Full-time",
      desc: "Разработал веб-портал для образовательной платформы — студенты смотрят курсы, сдают задания, отслеживают результаты и получают сертификаты.",
      highlights: [
        "Портал для курсов, заданий, результатов и сертификатов",
        "Настроил удобную структуру файлов и обмен данными через API",
        "Использовал Zustand для состояния, React Query для данных и Zod для валидации форм",
      ],
      skills: ["React", "Zustand", "React Query", "Zod", "TypeScript"],
    },
    {
      company: "Supersite uz",
      role: "Frontend разработчик",
      period: "Октябрь 2022 — Июль 2023",
      location: "Ташкент · Гибрид · Part-time",
      desc: "Разработал систему управления отелем, корпоративные сайты и небольшие интернет-магазины для клиентов.",
      highlights: [
        "Система управления отелем: бронирование номеров, сервисы для гостей и админ-панель",
        "Интерфейсы на React и Ant Design; управление состоянием и данными через Redux Toolkit и Axios",
        "Корпоративные сайты и небольшие интернет-магазины для клиентов",
      ],
      skills: ["React", "Ant Design", "Redux Toolkit", "Axios", "REST API"],
    },
    {
      company: "Министерство инновационного развития Узбекистана",
      role: "Frontend разработчик",
      period: "Май 2022 — Октябрь 2022",
      location: "Ташкент · Гибрид · Part-time",
      desc: "После месячной стажировки присоединился к команде фармацевтической CRM Almir Statistic (almir.uz).",
      highlights: [
        "Спроектировал интерфейс фармацевтической CRM Almir.uz",
        "Разработал функции управления профилем и паролем",
        "Создавал диаграммы с Chart.js и работал с REST API (React, Redux)",
      ],
      skills: ["React", "Redux", "Chart.js", "REST API"],
    },
  ],
};
