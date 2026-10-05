import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { ContactButton } from "@/components/ui/ContactButton";
import { ChristmasSprig } from "@/components/ui/ChristmasSprig";
import { tour } from "@/data/tour";
import { formatAmount } from "@/lib/format";
import styles from "./Hero.module.css";
export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <ChristmasSprig className={styles.sprig} />
      <div className={styles.layout}>
        <div className={styles.content}>
          <div className={styles.kicker}>
            <span className={styles.season}>
              <Icon name="gift" />
              CHRISTMAS EDITION
            </span>
            <span>{tour.dates}</span>
          </div>
          <p className={styles.author}>
            ALMAZ TOUR · АВТОРСКОЕ ПУТЕШЕСТВИЕ С АЛИЕЙ
          </p>
          <h1 id="hero-title">
            Ваше <em>Рождество.</em>
            <br />В сердце
            <br />
            Европы.
          </h1>
          <p className={styles.description}>
            Ярмарки, огни и города, похожие на открытки.
            <br />
            Девять дней, чтобы замедлиться и почувствовать праздник.
          </p>
          <p className={styles.countries}>{tour.countries}</p>
          <div className={styles.actions}>
            <ContactButton>Хочу в путешествие</ContactButton>
            <a href="#program" className={styles.programLink}>
              Посмотреть программу <Icon name="arrow" />
            </a>
          </div>
          <div className={styles.facts}>
            <span>
              <Icon name="calendar" />
              {tour.days} дней / {tour.nights} ночей
            </span>
            <span>
              <Icon name="people" />
              До {tour.groupSize} человек
            </span>
            <span>
              <Icon name="train" />
              TGV · Eurostar
            </span>
          </div>
        </div>
        <div className={styles.postcard}>
          <div className={styles.photo}>
            <Image
              src="/images/tour/christmas-hero.webp"
              alt="Рождественская ярмарка, собор и девушка среди праздничных огней"
              fill
              preload
              sizes="(max-width: 780px) 100vw, 48vw"
              className={styles.image}
            />
            <span className={styles.photoBadge}>
              <Icon name="star" />
              Маленькие моменты. Большие воспоминания.
            </span>
            <div className={styles.photoRoute}>
              <span>ОДНО ПУТЕШЕСТВИЕ. ТРИ СТРАНЫ.</span>
              <strong>
                Базель · Кольмар
                <br />
                Париж · Амстердам
              </strong>
              <Icon name="plane" />
            </div>
          </div>
          <div className={styles.offer}>
            <div>
              <span>Для первых {tour.offerParticipants} участников</span>
              <strong>
                {formatAmount(tour.price)} <small>€</small>
              </strong>
            </div>
            <s>{formatAmount(tour.regularPrice)} €</s>
            <a href="#pricing" aria-label="Узнать стоимость тура">
              <Icon name="diagonal" />
            </a>
          </div>
        </div>
      </div>
      <a href="#route" className={styles.scroll}>
        <span>НАША РОЖДЕСТВЕНСКАЯ ИСТОРИЯ</span>
        <Icon name="arrow" />
      </a>
    </section>
  );
}
