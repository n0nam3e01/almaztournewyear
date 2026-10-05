import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import styles from "./Logistics.module.css";
export function Logistics() {
  return (
    <section className="section">
      <div className={`container ${styles.layout}`}>
        <SectionHeading eyebrow="Перед путешествием">
          Виза и перелёт.
          <br />
          <em>Разберёмся вместе.</em>
          <span className={styles.description}>
            Начало маршрута — Базель, 12 декабря.
            <br />
            Завершение — Амстердам, 20 декабря.
          </span>
        </SectionHeading>
        <div className={styles.items}>
          <article>
            <span className={styles.icon}>
              <Icon name="passport" />
            </span>
            <div>
              <p className={styles.tag}>ПОДГОТОВКА ДОКУМЕНТОВ</p>
              <h3>Поможем оформить шенгенскую визу</h3>
              <p>
                Проверим документы, поможем с анкетой и записью на подачу. Лучше
                начать заранее: перед праздниками оформление может занять больше
                времени.
              </p>
              <p className={styles.note}>
                Решение о выдаче визы принимает консульство.
              </p>
            </div>
          </article>
          <article>
            <span className={styles.icon}>
              <Icon name="plane" />
            </span>
            <div>
              <p className={styles.tag}>ВЫЛЕТ ИЗ АСТАНЫ ИЛИ АЛМАТЫ</p>
              <h3>Подберём авиабилеты под маршрут</h3>
              <p>
                Согласуем удобные рейсы с прибытием в Базель и возвращением из
                Амстердама. Вы сможете выбрать город вылета и подходящий класс
                перелёта.
              </p>
              <WhatsAppLink
                className="text-link"
                message="Здравствуйте, Алия! Подскажите по визе и перелёту для рождественского тура 12–20 декабря."
              >
                Обсудить визовые вопросы и рейсы <Icon name="arrow" />
              </WhatsAppLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
