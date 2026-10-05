import { tour } from "@/data/tour";
import { formatAmount } from "@/lib/format";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import styles from "./Pricing.module.css";
export function Pricing() {
  return (
    <section id="pricing" className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading eyebrow="Понятный бюджет" centered>
          Всё о стоимости.
          <br />
          <em>До того, как вы соберёте чемодан.</em>
        </SectionHeading>
        <div className={styles.layout}>
          <article className={styles.included}>
            <div className={styles.top}>
              <p>ВАШЕ РОЖДЕСТВЕНСКОЕ ПУТЕШЕСТВИЕ</p>
              <span>
                {tour.days} ДНЕЙ / {tour.nights} НОЧЕЙ
              </span>
            </div>
            <div className={styles.price}>
              <strong>
                {formatAmount(tour.price)} <small>€</small>
              </strong>
              <div>
                <s>{formatAmount(tour.regularPrice)} €</s>
                <span>Для первых {tour.offerParticipants} участников</span>
              </div>
            </div>
            <p className={styles.perPerson}>
              За человека · наличие спеццены уточняется при записи
            </p>
            <div className={styles.separator} />
            <h3>В стоимость включено</h3>
            <ul>
              {tour.included.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <WhatsAppLink
              className={`button button-primary ${styles.book}`}
              message={`Здравствуйте, Алия! Хочу узнать, доступна ли цена ${formatAmount(tour.price)} € на рождественский тур ${tour.shortDates}, и забронировать место.`}
            >
              Узнать о местах в группе <Icon name="diagonal" />
            </WhatsAppLink>
            <p className={styles.underButton}>
              <Icon name="shield" />
              Условия и договор согласуем перед оплатой
            </p>
          </article>
          <div className={styles.extras}>
            <p className={styles.extrasLabel}>ПЛАНИРУЕМ БЮДЖЕТ ЗАРАНЕЕ</p>
            <h3>Оплачивается отдельно</h3>
            <p className={styles.extraDescription}>
              Здесь собрали сопутствующие расходы,
              <br />
              чтобы вы могли рассчитать всю поездку.
            </p>
            {tour.extras.map((item) => (
              <article className={styles.extra} key={item.title}>
                <Icon name={item.icon} />
                <div>
                  <h4>
                    {item.title}
                    <span>{item.price}</span>
                  </h4>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
            <div className={styles.budgetNote}>
              <Icon name="plus" />
              <div>
                <span>Ориентир полного бюджета</span>
                <strong>
                  ≈{" "}
                  {formatAmount(
                    tour.price +
                      tour.additionalBudget.flight +
                      tour.additionalBudget.visa +
                      tour.additionalBudget.meals,
                  )}{" "}
                  € <small>/ человек</small>
                </strong>
                <p>
                  Тур по спеццене + перелёт + виза + питание.
                  <br />
                  Личные покупки и возможные доплаты за размещение сюда не
                  входят.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
