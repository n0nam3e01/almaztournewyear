/** Company details from the original AlmazTour project. */
export const company = {
  name: "Almaz Tour",
  slogan: "Влюбляем в путешествия",
  foundedYear: 2018,
  phone: "+7 775 888 97 32",
  phoneHref: "tel:+77758889732",
  whatsapp: "https://api.whatsapp.com/send?phone=77758889732",
  officePhone: "+7 706 601 79 44",
  officePhoneHref: "tel:+77066017944",
  email: "aliya.trips@gmail.com",
  address: "г. Астана, ул. Достык 4, ТЦ «Festival Avenue»",
  map: "https://2gis.kz/astana/firm/70000001034461305/71.408133%2C51.127951?m=71.408289%2C51.127873%2F20",
  instagram: "https://www.instagram.com/almaztour.kz/",
  website: "https://almaztour.kz",
  hours: "Пн–Пт 10:00–20:00 · Сб–Вс 12:00–16:00",
} as const;

export function whatsappUrl(
  message = "Здравствуйте, Алия! Хочу узнать о рождественском туре по Европе 12–20 декабря.",
) {
  return `${company.whatsapp}&text=${encodeURIComponent(message)}`;
}
