import { itinerary } from "@/data/itinerary";
import { tour } from "@/data/tour";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import styles from "./Program.module.css";
export function Program() {
  return (
    <section id="program" className="section">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <SectionHeading eyebrow="Программа по дням">
            Девять дней,
            <br />
            которые останутся
            <br />
            <em>с вами.</em>
            <span className={styles.subtitle}>{tour.dates}</span>
          </SectionHeading>
          <p className={styles.description}>
            Каждый день уже продуман: дорога, прогулки и время на собственные
            открытия. Откройте день, чтобы узнать подробности.
          </p>
          <a href={tour.presentation} download className="text-link">
            Скачать презентацию <Icon name="download" />
          </a>
          <p className={styles.disclaimer}>
            Расписание поездов и перелётов уточняется при бронировании. Порядок
            прогулок может меняться с учётом погоды.
          </p>
        </div>
        <div className={styles.days}>
          {itinerary.map((day, index) => (
            <details
              name="tour-program"
              className={styles.day}
              key={day.day}
              open={index === 0}
            >
              <summary>
                <span className={styles.dayNumber}>{day.day}</span>
                <div className={styles.dayTitle}>
                  <p>
                    {day.date}
                    <span>{day.location}</span>
                  </p>
                  <h3>{day.title}</h3>
                </div>
                <span className={styles.expand}>
                  <Icon name="plus" />
                </span>
              </summary>
              <div className={styles.content}>
                {day.items.map((item) => (
                  <div key={item.time} className={styles.item}>
                    <span>{item.time}</span>
                    <p>{item.text}</p>
                  </div>
                ))}
                <p className={styles.night}>
                  <Icon name="bed" />
                  {day.night}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
