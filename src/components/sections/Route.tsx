import { Icon } from "@/components/ui/Icon";
import { routeStops } from "@/data/tour";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Route.module.css";
import { RouteMap } from "./RouteMap";
export function Route() {
  return (
    <section id="route" className={`section ${styles.route}`}>
      <div className="container">
        <div className={styles.top}>
          <SectionHeading eyebrow="Одно путешествие. Три страны.">
            Европа, которую хочется
            <br />
            <em>почувствовать.</em>
          </SectionHeading>
          <p className={styles.intro}>
            От швейцарских ярмарок до каналов Амстердама.
            <br />
            Между городами — скоростные поезда.
            <br />
            Между впечатлениями — время для себя.
          </p>
        </div>
        <ol className={styles.stops}>
          {routeStops.map((stop, i) => (
            <li key={stop.city}>
              <div className={styles.marker}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <p>
                  <Icon name="train" />
                  {stop.transfer}
                </p>
              </div>
              <p className={styles.country}>
                <span className={`${styles.flag} ${styles[stop.code]}`}>
                  {stop.code}
                </span>
                {stop.country}
              </p>
              <h3>{stop.city}</h3>
              <p className={styles.date}>
                {stop.date}
                <span>{stop.nights}</span>
              </p>
            </li>
          ))}
        </ol>
        <RouteMap />
      </div>
    </section>
  );
}
