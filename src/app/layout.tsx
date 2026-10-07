import type { Metadata, Viewport } from "next";
import {
  Playfair_Display,
  Montserrat,
  Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { tour } from "@/data/tour";
import { company } from "@/data/company";
import { formatAmount } from "@/lib/format";
const body = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  adjustFontFallback: false,
  display: "swap",
});
const display = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
export const metadata: Metadata = {
  title: `${tour.name} · ${tour.dates} | ${company.name}`,
  description: `Авторский тур ${company.name}: Базель, Кольмар, Париж, Версаль и Амстердам. ${tour.days} дней, ${tour.nights} ночей, поезда TGV и Eurostar, сопровождение на всём маршруте. От ${formatAmount(tour.price)} €.`,
  icons: { icon: "/images/brand/almaz-tour-icon.png" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Almaz Tour",
    title: "Авторский рождественский тур",
    description: `${tour.dates} · ${tour.countries} · ${tour.days} дней в мини-группе.`,
  },
};
export const viewport: Viewport = { themeColor: "#062428" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className={`${body.variable} ${display.variable} ${jakarta.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
