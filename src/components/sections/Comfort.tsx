import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Comfort.module.css";
const features = [
  {
    icon: "train",
    number: "01",
    title: "Дорога тоже часть отдыха",
    text: "TGV и Eurostar вместо долгих автобусных переездов. Из центра одного города прямо в центр следующего.",
  },
  {
    icon: "bed",
    number: "02",
    title: "Можно распаковать чемодан",
    text: "Несколько ночей в каждом городе, уютные отели и завтраки. Утро начинается с кофе, а не с переезда.",
  },
  {
    icon: "people",
    number: "03",
    title: "Маленькая группа, свой ритм",
    text: "Камерный формат до 10 участников. Удобно путешествовать вместе и находить время для себя.",
  },
  {
    icon: "heart",
    number: "04",
    title: "Рядом человек, который знает",
    text: "Алия сопровождает группу на всём маршруте: помогает с поездами, размещением и повседневными вопросами.",
  },
];
export function Comfort() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <SectionHeading eyebrow="Продумано до мелочей" centered>
          Вы путешествуете.
          <br />
          <em>Мы заботимся об остальном.</em>
        </SectionHeading>
        <div className={styles.grid}>
          {features.map((item) => (
            <article key={item.number}>
              <div className={styles.icon}>
                <Icon name={item.icon} />
                <span>{item.number}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className={styles.bottom}>
          <Icon name="coffee" />
          <p>
            Больше времени для длинных прогулок, маленьких кафе и неожиданно
            красивых улиц.
          </p>
        </div>
      </div>
    </section>
  );
}
