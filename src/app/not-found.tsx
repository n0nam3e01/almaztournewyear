import Link from "next/link";
export default function NotFound() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <p className="text-brand-amber mb-4">404 · Немного сбились с маршрута</p>
      <h1 className="font-serif text-4xl text-white mb-6">
        Этой страницы пока нет.
      </h1>
      <p className="text-brand-moonLight/80 mb-8">
        Наше путешествие начинается на главной странице.
      </p>
      <Link href="/" className="threeui-btn threeui-btn-gold">
        <span className="threeui-btn-content">Вернуться к путешествию</span>
      </Link>
    </main>
  );
}
