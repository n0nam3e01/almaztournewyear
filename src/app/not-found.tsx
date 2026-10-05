import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
export default function NotFound() {
  return (
    <main className="container section">
      <BrandLogo />
      <p className="eyebrow" style={{ marginTop: 70 }}>
        404 · Немного сбились с маршрута
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 54,
          fontWeight: 400,
          lineHeight: 1.1,
        }}
      >
        Этой страницы пока нет.
      </h1>
      <p>Наше путешествие начинается на главной странице.</p>
      <Link href="/" className="button button-dark">
        Вернуться к путешествию
      </Link>
    </main>
  );
}
