import Image from "next/image";
import { cityPhotos } from "@/data/photos";
export function Photo({ city }: { city: keyof typeof cityPhotos }) {
  const photo = cityPhotos[city];
  return (
    <Image
      src={photo.src}
      width={photo.width}
      height={photo.height}
      alt={
        {
          basel: "Рождественская ёлка во дворе ратуши Базеля",
          colmar: "Рождественская ярмарка в Кольмаре",
          paris: "Рождественская ёлка под куполом Galeries Lafayette в Париже",
          versailles: "Дворец Версаль под снегом",
          amsterdam: "Огни фестиваля света на каналах Амстердама",
        }[city]
      }
      className="city-photo"
      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 750px"
    />
  );
}
export function HeroBackdrop() {
  return (
    <div className="hero-backdrop" aria-hidden="true">
      <Image
        src="/images/tour/christmas-hero.webp"
        alt=""
        fill
        sizes="100vw"
        priority
      />
    </div>
  );
}
export function PhotoCredits() {
  return (
    <details className="photo-credit mt-6">
      <summary>Авторы фотографий</summary>
      <ul className="mt-3 space-y-1">
        {Object.entries(cityPhotos).map(([city, photo]) => (
          <li key={city}>
            <a href={photo.source} target="_blank" rel="noopener noreferrer">
              {photo.author}
            </a>{" "}
            ·{" "}
            <a
              href={photo.licenseUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {photo.license}
            </a>{" "}
            · уменьшение и WebP; кадрирование при отображении.
          </li>
        ))}
      </ul>
    </details>
  );
}
