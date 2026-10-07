/** Tour terms from slides 1, 8, 9, 10. Reference itinerary: HappyTour. */
export const tour = {
  name: "Авторский рождественский тур",
  dates: "12–20 декабря 2026",
  shortDates: "12–20 декабря",
  days: 9,
  nights: 8,
  year: 2026,
  offerParticipants: 3,
  additionalBudget: { flight: 800, visa: 170, meals: 500 },
  groupSize: 10,
  countries: "Швейцария · Франция · Нидерланды",
  price: 2200,
  regularPrice: 2350,
  offer: "Специальная цена для первых 3 участников",
  guide: "Сопровождение на маршруте",
  presentation: "/documents/almaz-tour-christmas.pptx",
  included: [
    "8 ночей в европейских отелях с завтраками",
    "Все переезды на поездах TGV, Eurostar и RER",
    "Входной билет во дворец Версаль и Зеркальную галерею",
    "Экскурсия по Парижу с русскоязычным гидом",
    "Вечерний круиз по Сене в Париже",
    "Круиз по каналам Amsterdam Light Festival с сыром и вином",
    "Прощальный рождественский ужин группы",
    "Сопровождение и помощь с логистикой на всём маршруте",
  ],
  extras: [
    {
      title: "Международный перелёт",
      price: "≈ 800 €",
      description:
        "Поможем выбрать рейсы из Астаны или Алматы под даты маршрута.",
      icon: "plane",
    },
    {
      title: "Шенгенская виза",
      price: "170 €",
      description: "Подготовка документов и сопровождение при оформлении.",
      icon: "passport",
    },
    {
      title: "Обеды и ужины",
      price: "≈ 500 €",
      description:
        "Ориентир на весь период поездки. Завтраки и групповой ужин включены.",
      icon: "utensils",
    },
    {
      title: "Подарки и покупки",
      price: "По желанию",
      description:
        "Личный бюджет на шоколад, вино, сувениры и рождественские подарки.",
      icon: "gift",
    },
  ],
} as const;

export const routeStops = [
  {
    city: "Базель",
    country: "Швейцария",
    date: "12–13 дек",
    nights: "1 ночь",
    code: "CH",
    transfer: "43 мин · поезд",
  },
  {
    city: "Кольмар",
    country: "Франция",
    date: "13–15 дек",
    nights: "2 ночи",
    code: "FR",
    transfer: "2 ч 37 мин · TGV",
  },
  {
    city: "Париж",
    country: "Франция",
    date: "15–18 дек",
    nights: "3 ночи + Версаль",
    code: "FR",
    transfer: "3 ч 27 мин · Eurostar",
  },
  {
    city: "Амстердам",
    country: "Нидерланды",
    date: "18–20 дек",
    nights: "2 ночи",
    code: "NL",
    transfer: "20 дек · домой",
  },
] as const;
