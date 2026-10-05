import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { tour } from "@/data/tour";
import { formatAmount } from "@/lib/format";
import styles from "./Hero.module.css";
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Image
        src="/images/tour/christmas-hero.webp"
        alt="Рождественская ярмарка, огни и собор европейского города"
        fill
        preload
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.shade} />
      <div className={`container ${styles.content}`}>
        <div className={styles.kicker}>
          <span className={styles.dot} />
          АВТОРСКИЙ ТУР С АЛИЕЙ
          <span className={styles.kickerLine} />
          {tour.dates.toLocaleUpperCase("ru-RU")}
        </div>
        <h1 id="hero-title">
          У каждого есть
          <br />
          своё <em>Рождество.</em>
          <br />
          Ваше — в Европе.
        </h1>
        <p className={styles.description}>
          Три страны. Девять дней. Ярмарки, огни и маленькие
          <br className={styles.desktopBreak} /> открытия, ради которых хочется
          замедлиться.
        </p>
        <p className={styles.countries}>{tour.countries}</p>
        <div className={styles.actions}>
          <WhatsAppLink>
            Хочу в это путешествие <Icon name="diagonal" />
          </WhatsAppLink>
          <a href="#program" className={styles.programLink}>
            Посмотреть программу <Icon name="arrow" />
          </a>
        </div>
        <div className={styles.bottom}>
          <div className={styles.facts}>
            <span>
              <Icon name="calendar" />
              {tour.days} дней / {tour.nights} ночей
            </span>
            <span>
              <Icon name="people" />
              Мини-группа
            </span>
            <span>
              <Icon name="train" />
              TGV и Eurostar
            </span>
          </div>
          <div className={styles.price}>
            <span>Первые {tour.offerParticipants} участника</span>
            <strong>
              {formatAmount(tour.price)} <small>€</small>
            </strong>
            <s>{formatAmount(tour.regularPrice)} €</s>
          </div>
        </div>
      </div>
      <a
        href="#route"
        className={styles.scroll}
        aria-label="Перейти к маршруту"
      >
        <span>ИСТОРИЯ НАЧИНАЕТСЯ</span>
        <Icon name="arrow" />
      </a>
      <div className={styles.photoLabel}>
        ДЕКАБРЬ В ЕВРОПЕ
        <br />
        <span>Когда города становятся сказкой</span>
      </div>
    </section>
  );
}
