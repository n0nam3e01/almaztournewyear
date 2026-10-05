import Image from "next/image";
import Link from "next/link";
import styles from "./BrandLogo.module.css";
export function BrandLogo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Almaz Tour — на главную"
      className={`${styles.logo} ${light ? styles.light : ""}`}
    >
      <Image
        src="/images/brand/almaz-tour-logo.png"
        alt="Almaz Tour · Влюбляем в путешествия"
        width={3232}
        height={1233}
        sizes="190px"
      />
    </Link>
  );
}
