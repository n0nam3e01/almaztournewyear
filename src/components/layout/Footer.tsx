import { company } from "@/data/company";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import styles from "./Footer.module.css";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <BrandLogo />
            <p>
              Путешествия, в которые влюбляются.
              <br />
              Из Астаны с 2018 года.
            </p>
            <a
              href={company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.social}
            >
              Instagram <Icon name="diagonal" />
            </a>
          </div>
          <div>
            <h3>ЗАГЛЯДЫВАЙТЕ В ГОСТИ</h3>
            <a
              href={company.map}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.address}
            >
              {company.address}
              <Icon name="diagonal" />
            </a>
            <p>{company.hours}</p>
            <a href={company.officePhoneHref}>{company.officePhone}</a>
          </div>
          <div>
            <h3>НАЧНЁМ С РАЗГОВОРА</h3>
            <WhatsAppLink className={styles.phone}>
              {company.phone}
              <Icon name="whatsapp" />
            </WhatsAppLink>
            <p>WhatsApp Almaz Tour</p>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© 2026 Almaz Tour. Влюбляем в путешествия.</p>
          <a href={company.website} target="_blank" rel="noopener noreferrer">
            Основной сайт Almaz Tour <Icon name="diagonal" />
          </a>
          <span>CHRISTMAS EDITION / 2026</span>
        </div>
      </div>
    </footer>
  );
}
