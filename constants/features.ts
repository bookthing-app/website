import {
  BookCopy,
  BookUser,
  LayoutList,
  MapPinned,
  PieChart,
  Users2,
  QrCode,
  Clock,
  BellDot,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  color: string;
  background?: string;
  label: string;
  description: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export const features: Record<string, Feature> = {
  analytics: {
    icon: PieChart,
    color: "bg-accent-green",
    background: "#a0ccbc",
    label: "Аналітика",
    description:
      "Детальна статистика бронювань, послуг та клієнтів. Аналізуйте обіг, знаходьте найпопулярніші послуги та лояльних клієнтів.",
    image: {
      src: "/feature-analytics.png",
      alt: "Аналітика",
      width: 1295,
      height: 1185,
    },
  },
  bookings: {
    icon: BookCopy,
    color: "bg-accent-pink",
    background: "#ffd3d3",
    label: "Бронювання",
    description:
      "Зручний календар бронювань. Переглядайте свій розклад та розклад ваших працівників у деталях не втрачаючи зручності користування.",
    image: {
      src: "/feature-bookings.png",
      alt: "Бронювання",
      width: 972,
      height: 1231,
    },
  },
  users: {
    icon: Users2,
    color: "bg-accent-blue",
    background: "#96cfeb",
    label: "Користувачі",
    description:
      "Повний список ваших клієнтів в одному місці. Переглядайте, шукайте та додавайте нових клієнтів в зручному інтерфейсі.",
    image: {
      src: "/feature-users.png",
      alt: "Користувачі",
      width: 1289,
      height: 818,
    },
  },
  employees: {
    icon: BookUser,
    color: "bg-accent-purple",
    background: "#d3d3ff",
    label: "Працівники",
    description:
      "Знайте все про ваших працівників. Переглядайте їх розклади, клієнтів та історію записів, все це на одному екрані.",
    image: {
      src: "/feature-employees.png",
      alt: "Працівники",
      width: 853,
      height: 943,
    },
  },
  services: {
    icon: LayoutList,
    color: "bg-accent-orange",
    background: "#ffeb96",
    label: "Послуги",
    description:
      "Керування вашими послугами ще не було таким простим. Додавайте нові, переглядайте та редагуйте існуючі послуги в одному місці.",
    image: {
      src: "/feature-services.png",
      alt: "Послуги",
      width: 1191,
      height: 821,
    },
  },
  locations: {
    icon: MapPinned,
    color: "bg-accent-teal",
    background: "#d3ffeb",
    label: "Філії",
    description:
      "Розширюйте свою мережу за допомогою філій. Додавайте нові філії, редагуйте існуючі та вказуйте всю інформацію, що необхідна для ваших клієнтів.",
    image: {
      src: "/feature-locations.png",
      alt: "Філії",
      width: 755,
      height: 888,
    },
  },
  // images: {
  //   icon: ImageIcon,
  //   color: "bg-accent-yellow",
  //   label: "Зображення",
  //   description:
  //     "Занурюйте клієнтів в атмосферу ваших пропозицій. Завантажуйте свої найяскравіщі зображення та показуйте їх вашим клієнтам на екранах філій та послуг.",
  //   image: {
  //     src: "/feature-images.png",
  //     alt: "Зображення",
  //   },
  // },
  "personal-cards": {
    icon: QrCode,
    color: "bg-accent-purple",
    background: "#d3d3ff",
    label: "Персональні картки",
    description:
      "Спростіть процес взаємодії з клієнтами. Персональні картки дозволяють швидко знайти клієнта та переглянути всю інформацію про нього, та його бронювання.",
    image: {
      src: "/feature-personal-cards.png",
      alt: "Персональні картки",
      width: 1183,
      height: 693,
    },
  },
  timetables: {
    icon: Clock,
    color: "bg-accent-yellow",
    background: "#ffeb96",
    label: "Робочий розклад",
    description:
      "Організуйте свій робочий день. Вказуйте робочі години, перерви та встановлюйте вихідні незалежно від дня тижня.",
    image: {
      src: "/feature-operating-times.png",
      alt: "Робочий розклад",
      width: 1014,
      height: 813,
    },
  },
  reminders: {
    icon: BellDot,
    color: "bg-accent-red",
    background: "#ffd3d3",
    label: "Нагадування",
    description:
      "Автоматизуйте процес нагадувань. Вказуйте коли та як часто надсилати нагадування вашим клієнтам, щоб вони ніколи не забували про свої бронювання.",
    image: {
      src: "/feature-reminders.png",
      alt: "Нагадування",
      width: 387,
      height: 884,
    },
  },
  times: {
    icon: CalendarClock,
    color: "bg-accent-orange",
    background: "#ffb54d",
    label: "Час",
    description:
      "Налаштовуйте кожен аспект свого робочого часу. Встановлюйте буферний час, час скасування та переносу бронювання, а також інтервал між доступними віконцями.",
    image: {
      src: "/feature-times.png",
      alt: "Час",
      width: 576,
      height: 934,
    },
  },
};
