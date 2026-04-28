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
      role: "Frontend Engineer & Mobile Developer",
      period: "Fevral 2025 — Hozir",
      location: "Toshkent · Full-time",
      desc: "Logistika kompaniyasi uchun haydovchilar, dispetcherlar, buxgalterlar va menejerlar kunlik foydalanadigan web va mobil ilovalar ekotizimida ishlayman.",
      highlights: [
        "Haydovchi–Dispetcher platformasi: maxsus markerlar, jonli joylashuv va dinamik marshrut chizish bilan interaktiv xaritalar",
        "Yoqilg'i menejment tizimi: yoqilg'i sarfini kuzatish, stansiyalarni tavsiya qilish va real vaqtda monitoring",
        "Parking & Fleet tizimi: truck parkovkasini vizualizatsiya, mavjudlikni kuzatish va dispetcher uchun boshqaruv paneli",
        "Sotish & Nasiya tizimi: ko'p bosqichli buyurtma yaratish, qarzdorlikni kuzatish va fayl yuklash",
      ],
      skills: ["React", "React Native", "TypeScript", "Redux", "REST API", "Maps"],
      current: true,
    },
    {
      company: "Software System Pro",
      role: "Frontend | Mobile Developer",
      period: "Avgust 2023 — Dekabr 2025",
      location: "Toshkent · Full-time",
      desc: "Sog'liqni saqlash, farmatsevtika (CRM), logistika va e-commerce sohalaridagi murakkab tizimlar, landing sahifalar va korporativ saytlar yaratdim.",
      highlights: [
        "Future Farma Group CRM tizimi — mijozlar ma'lumotlarini boshqarish uchun intuitiv interfeys",
        "React.js va Next.js asosida SSR joriy etish — SEO va tezlikni yaxshilash",
        "TypeScript orqali kod ishonchliligini oshirish",
        "React Native bilan cross-platform mobil ilovalar yaratish",
      ],
      skills: ["React", "Next.js", "TypeScript", "React Native", "Redux", "SSR"],
    },
    {
      company: "Abutech",
      role: "Frontend Developer",
      period: "May 2024 — Avgust 2024",
      location: "Toshkent · Full-time",
      desc: "Ta'lim platformasi Edfix (edfix.uz) loyihasida ishlash — xususiy maktablar va o'quv markazlari uchun onlayn o'qish platformasi.",
      highlights: [
        "Edfix Student App: kurslar, topshiriqlar, natijalar va sertifikatlar uchun portal",
        "Zustand, React Query, Zod — zamonaviy state va ma'lumot boshqaruvi",
        "Tartibli va kengaytiriladigan loyiha fayl strukturasini yaratish",
      ],
      skills: ["React", "Zustand", "React Query", "Zod", "TypeScript"],
    },
    {
      company: "Supersite uz",
      role: "Frontend Developer",
      period: "Oktyabr 2022 — Iyul 2023",
      location: "Toshkent · Full-time",
      desc: "Tizim integratsiyasi, biznes jarayonlarini avtomatlashtirish va IT konsalting kompaniyasida turli loyihalar ustida ishlash.",
      highlights: [
        "Mehmonxona menejment platformasi — band qilish, mehmon xizmatlari va boshqaruv",
        "Korporativ saytlar va e-commerce platformalar",
        "SNS — O'zbekistondagi 100+ kompaniyani baholash interaktiv platformasi",
      ],
      skills: ["React", "Redux Toolkit", "Ant Design", "Axios", "REST API"],
    },
    {
      company: "O'zbekiston Respublikasi Innovatsion Rivojlanish Vazirligi",
      role: "Frontend Developer",
      period: "May 2022 — Oktyabr 2022",
      location: "Toshkent · Stajyor → Ishchi",
      desc: "Bir oylik stajirovkadan so'ng haqiqiy loyihalarda ishtirok etish imkoniyatiga ega bo'ldim. Farmatsevtika kompaniyasi Almir Statistic uchun CRM platformasida ishlash.",
      highlights: [
        "Almir.uz CRM: foydalanuvchi interfeysi, profil boshqaruvi va parol yangilash funksiyasi",
        "Chart.js bilan statistik ma'lumotlarni vizualizatsiya qilish",
        "React, Redux, Charts.js va REST API bilan ishlash ko'nikmalarini oshirish",
      ],
      skills: ["React", "Redux", "Chart.js", "REST API"],
    },
  ],

  en: [
    {
      company: "Windermer Pro LLC",
      role: "Frontend Engineer & Mobile Developer",
      period: "February 2025 — Present",
      location: "Tashkent · Full-time",
      desc: "Working on a full ecosystem of web and mobile apps used daily by drivers, dispatchers, accountants, and managers at a logistics company.",
      highlights: [
        "Driver–Dispatcher Platform: interactive maps with custom markers, live locations, and dynamic route drawing",
        "Fuel Management System: track fuel consumption, suggest stations, and real-time monitoring tools",
        "Parking & Fleet System: parking layout visualization, availability tracking, dispatcher dashboard",
        "Sales & Installment Tools: multi-step order creation, debt tracking, file uploads",
      ],
      skills: ["React", "React Native", "TypeScript", "Redux", "REST API", "Maps"],
      current: true,
    },
    {
      company: "Software System Pro",
      role: "Frontend | Mobile Developer",
      period: "August 2023 — December 2025",
      location: "Tashkent · Full-time",
      desc: "Built complex systems, landing pages, and corporate websites for healthcare, pharmaceuticals (CRM), logistics, and e-commerce industries.",
      highlights: [
        "Future Farma Group CRM — intuitive interface for managing customer data",
        "Implemented SSR with React.js and Next.js — improved SEO and performance",
        "Enhanced code reliability through TypeScript",
        "Built cross-platform mobile applications using React Native",
      ],
      skills: ["React", "Next.js", "TypeScript", "React Native", "Redux", "SSR"],
    },
    {
      company: "Abutech",
      role: "Frontend Developer",
      period: "May 2024 — August 2024",
      location: "Tashkent · Full-time",
      desc: "Worked on Edfix (edfix.uz), an online learning platform for private schools and training centers.",
      highlights: [
        "Edfix Student App: portal for courses, assignments, performance tracking, and certificates",
        "Used Zustand, React Query, Zod for modern state and data management",
        "Created a clean and scalable project file structure",
      ],
      skills: ["React", "Zustand", "React Query", "Zod", "TypeScript"],
    },
    {
      company: "Supersite uz",
      role: "Frontend Developer",
      period: "October 2022 — July 2023",
      location: "Tashkent · Full-time",
      desc: "Worked on various projects at a system integration, automation, and IT consulting company.",
      highlights: [
        "Hotel Management Platform — booking, guest services, and administration",
        "Corporate websites and e-commerce platforms",
        "SNS — interactive rating platform for 100+ companies in Uzbekistan",
      ],
      skills: ["React", "Redux Toolkit", "Ant Design", "Axios", "REST API"],
    },
    {
      company: "Ministry of Innovative Development of Uzbekistan",
      role: "Frontend Developer",
      period: "May 2022 — October 2022",
      location: "Tashkent · Intern → Developer",
      desc: "After a one-month internship, contributed to real projects including a CRM platform for pharmaceutical company Almir Statistic.",
      highlights: [
        "Almir.uz CRM: user interface design, profile management, and password update",
        "Dynamic data visualization with Chart.js",
        "Improved skills in React, Redux, Charts.js, and REST APIs",
      ],
      skills: ["React", "Redux", "Chart.js", "REST API"],
    },
  ],

  ru: [
    {
      company: "Windermer Pro LLC",
      role: "Frontend Engineer & Mobile Developer",
      period: "Февраль 2025 — настоящее время",
      location: "Ташкент · Full-time",
      desc: "Работаю над экосистемой веб и мобильных приложений для логистической компании, которыми ежедневно пользуются водители, диспетчеры, бухгалтеры и менеджеры.",
      highlights: [
        "Платформа водитель–диспетчер: интерактивные карты с маркерами, live-локациями и динамическими маршрутами",
        "Система управления топливом: отслеживание расхода, предложение станций, мониторинг в реальном времени",
        "Система парковки и флота: визуализация парковки, отслеживание доступности, панель диспетчера",
        "Инструменты продаж и рассрочки (Насия): многоступенчатые заказы, отслеживание долгов, загрузка файлов",
      ],
      skills: ["React", "React Native", "TypeScript", "Redux", "REST API", "Maps"],
      current: true,
    },
    {
      company: "Software System Pro",
      role: "Frontend | Mobile Developer",
      period: "Август 2023 — Декабрь 2025",
      location: "Ташкент · Full-time",
      desc: "Создавал сложные системы, лендинги и корпоративные сайты для здравоохранения, фармацевтики (CRM), логистики и e-commerce.",
      highlights: [
        "CRM Future Farma Group — интуитивный интерфейс для управления клиентскими данными",
        "Внедрение SSR с React.js и Next.js — улучшение SEO и производительности",
        "Повышение надёжности кода через TypeScript",
        "Создание кросс-платформенных мобильных приложений на React Native",
      ],
      skills: ["React", "Next.js", "TypeScript", "React Native", "Redux", "SSR"],
    },
    {
      company: "Abutech",
      role: "Frontend Developer",
      period: "Май 2024 — Август 2024",
      location: "Ташкент · Full-time",
      desc: "Работал над образовательной платформой Edfix (edfix.uz) для частных школ и учебных центров.",
      highlights: [
        "Edfix Student App: портал для курсов, заданий, успеваемости и сертификатов",
        "Zustand, React Query, Zod — современное управление состоянием и данными",
        "Создание чистой и масштабируемой структуры проекта",
      ],
      skills: ["React", "Zustand", "React Query", "Zod", "TypeScript"],
    },
    {
      company: "Supersite uz",
      role: "Frontend Developer",
      period: "Октябрь 2022 — Июль 2023",
      location: "Ташкент · Full-time",
      desc: "Работал над различными проектами в компании системной интеграции, автоматизации и IT-консалтинга.",
      highlights: [
        "Платформа управления отелем — бронирование, сервисы для гостей и администрирование",
        "Корпоративные сайты и e-commerce платформы",
        "SNS — интерактивная платформа рейтинга 100+ компаний Узбекистана",
      ],
      skills: ["React", "Redux Toolkit", "Ant Design", "Axios", "REST API"],
    },
    {
      company: "Министерство инновационного развития Республики Узбекистан",
      role: "Frontend Developer",
      period: "Май 2022 — Октябрь 2022",
      location: "Ташкент · Стажёр → Разработчик",
      desc: "После месячной стажировки участвовал в реальных проектах, включая CRM-платформу для фармацевтической компании Almir Statistic.",
      highlights: [
        "CRM Almir.uz: дизайн интерфейса, управление профилем и обновление пароля",
        "Динамическая визуализация данных с Chart.js",
        "Улучшение навыков работы с React, Redux, Charts.js и REST API",
      ],
      skills: ["React", "Redux", "Chart.js", "REST API"],
    },
  ],
};
