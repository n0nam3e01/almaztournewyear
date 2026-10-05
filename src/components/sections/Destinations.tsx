import { destinations } from "@/data/destinations";
import { SlidePhoto } from "@/components/ui/SlidePhoto";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import styles from "./Destinations.module.css";
export function Destinations() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.top}>
          <SectionHeading eyebrow="Четыре города. Множество историй.">
            Ваша коллекция
            <br />
            <em>декабрьских впечатлений.</em>
          </SectionHeading>
          <span className={styles.note}>
            От первых рождественских ярмарок
            <br />
            до прощального ужина в Амстердаме
          </span>
        </div>
        <div className={styles.grid}>
          {destinations.map((place) => (
            <article className={styles.card} key={place.id}>
              <div className={styles.photo}>
                <SlidePhoto
                  name={place.image}
                  alt={`${place.name} в рождественских огнях`}
                />
                <span className={styles.number}>{place.number}</span>
                <span className={styles.photoDate}>{place.date}</span>
              </div>
              <div className={styles.caption}>
                <p className={styles.country}>{place.country}</p>
                <h3>{place.name}</h3>
                <p className={styles.label}>{place.label}</p>
                <p className={styles.description}>{place.text}</p>
                <div className={styles.tags}>
                  {place.highlights.map((highlight) => (
                    <span key={highlight}>
                      <Icon name="check" />
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
