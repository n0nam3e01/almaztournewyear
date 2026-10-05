import Image from "next/image";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Icon } from "@/components/ui/Icon";
import { tour } from "@/data/tour";
import { formatAmount } from "@/lib/format";
import styles from "./Booking.module.css";
export function Booking() {
  return (
    <section id="booking" className={styles.section}>
      <Image
        src="/images/tour/christmas-hero.webp"
        alt="Рождественские огни европейской ярмарки"
        fill
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.shade} />
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>
          {tour.dates.toLocaleUpperCase("ru-RU")} · ALMAZ TOUR
        </p>
        <h2>
          В этом декабре
          <br />
          подарите себе <em>Европу.</em>
        </h2>
        <p className={styles.description}>
          Начните с одного сообщения.
          <br />
          Мы расскажем о маршруте, поможем с визой и ответим на ваши вопросы.
        </p>
        <div className={styles.actions}>
          <WhatsAppLink message="Здравствуйте, Алия! Хочу присоединиться к рождественскому туру в Европу 12–20 декабря. Расскажите об условиях бронирования.">
            Обсудить путешествие <Icon name="whatsapp" />
          </WhatsAppLink>
          <a
            href={tour.presentation}
            download
            className={`button ${styles.download}`}
          >
            Презентация тура <Icon name="download" />
          </a>
        </div>
        <p className={styles.note}>
          {tour.countries}{" "}
          <span>От {formatAmount(tour.price)} € / человек</span>
        </p>
      </div>
    </section>
  );
}
