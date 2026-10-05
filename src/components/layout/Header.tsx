import { BrandLogo } from "@/components/ui/BrandLogo";
import { GlassNav } from "./GlassNav";
import { ContactButton } from "@/components/ui/ContactButton";
import styles from "./Header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <BrandLogo />
        <div className={styles.edition}>
          <span className={styles.sparkle}>✦</span>
          <span>
            Рождественская Европа<small>ALMAZ TOUR · 2026</small>
          </span>
        </div>
        <GlassNav />
        <ContactButton compact />
      </div>
    </header>
  );
}
