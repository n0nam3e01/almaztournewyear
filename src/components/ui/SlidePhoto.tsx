import Image from "next/image";
import { photoWindows } from "@/data/destinations";
import styles from "./SlidePhoto.module.css";
export function SlidePhoto({
  name,
  alt,
  className = "",
}: {
  name: keyof typeof photoWindows;
  alt: string;
  className?: string;
}) {
  const photo = photoWindows[name];
  return (
    <div
      className={`${styles.window} ${className}`}
      style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
    >
      <Image
        src={`/images/presentation/${photo.file}`}
        alt={alt}
        width={1920}
        height={1080}
        sizes="(max-width: 600px) 1500px, 1900px"
        className={styles.image}
        style={{
          width: `${(1920 / photo.width) * 100}%`,
          left: `${(-photo.x / photo.width) * 100}%`,
          top: 0,
          transform: `translateY(${(-photo.y / 1080) * 100}%)`,
        }}
      />
    </div>
  );
}
