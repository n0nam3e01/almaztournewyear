import Image from "next/image";
import { company } from "@/data/company";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Icon } from "@/components/ui/Icon";
import styles from "./Guide.module.css";
export function Guide() {
  return (
    <section id="guide" className={`section ${styles.guide}`}>
      <div className={`container ${styles.layout}`}>
        <div className={styles.photo}>
          <Image
            src="/images/tour/aliya-portrait.webp"
            alt="Алия — сопровождающая Almaz Tour"
            fill
            sizes="(max-width: 780px) 100vw, 40vw"
            className={styles.portrait}
          />
          <div className={styles.signature}>
            <span>Ваша сопровождающая</span>
            <strong>Алия</strong>
            <Icon name="heart" />
          </div>
          <span className={styles.photoNote}>ВЛЮБЛЯЕМ В ПУТЕШЕСТВИЯ.</span>
        </div>
        <div className={styles.text}>
          <SectionHeading eyebrow="Наша команда · Almaz Tour">
            Сами путешествуем.
            <br />
            <em>Делимся опытом.</em>
          </SectionHeading>
          <p className={styles.lead}>{company.about.introduction}</p>
          <div className={styles.stats}>
            <div>
              <strong>
                <span>с </span>
                {company.foundedYear}
              </strong>
              <p>
                Almaz Tour работает
                <br />
                из Астаны
              </p>
            </div>
            <div>
              <strong>Весь мир</strong>
              <p>
                подбираем страну и отель
                <br />
                под ваш бюджет и время отпуска
              </p>
            </div>
          </div>
          <p className={styles.description}>{company.about.description}</p>
          <WhatsAppLink className="button button-dark">
            Познакомиться с Алией <Icon name="diagonal" />
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
