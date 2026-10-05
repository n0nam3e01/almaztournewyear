import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { tour } from "@/data/tour";
import { company } from "@/data/company";
import { formatAmount } from "@/lib/format";
const body = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});
const display = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
export const metadata: Metadata = {
  title: `${tour.name} с Алией · ${tour.dates} | ${company.name}`,
  description: `Авторский тур ${company.name}: Базель, Кольмар, Париж, Версаль и Амстердам. ${tour.days} дней, ${tour.nights} ночей, поезда TGV и Eurostar, сопровождение Алии. От ${formatAmount(tour.price)} €.`,
  icons: { icon: "/images/brand/almaz-tour-icon.png" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Almaz Tour",
    title: "Рождественская Европа с Алией",
    description: `${tour.dates} · ${tour.countries} · ${tour.days} дней в мини-группе.`,
  },
};
export const viewport: Viewport = { themeColor: "#122b2b" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className={`${body.variable} ${display.variable}`}
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
