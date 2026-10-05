import Image from "next/image";
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
            alt="Алия — сопровождающая Almaz Tour и эксперт по Европе"
            fill
            sizes="(max-width: 780px) 100vw, 40vw"
            className={styles.portrait}
          />
          <div className={styles.signature}>
            <span>Ваша сопровождающая</span>
            <strong>Алия</strong>
            <Icon name="heart" />
          </div>
          <span className={styles.photoNote}>
            ЛИЧНЫЕ МАРШРУТЫ. ЛЮБИМЫЕ МЕСТА.
          </span>
        </div>
        <div className={styles.text}>
          <SectionHeading eyebrow="Давайте познакомимся">
            «Хочу, чтобы вы
            <br />
            полюбили Европу
            <br />
            <em>так же, как я».</em>
          </SectionHeading>
          <p className={styles.lead}>
            Я Алия. Я собираю этот маршрут из мест, в которые сама возвращаюсь:
            маленьких улиц Эльзаса, парижских кафе и вечерних каналов
            Амстердама.
          </p>
          <div className={styles.stats}>
            <div>
              <strong>
                10 <span>лет</span>
              </strong>
              <p>
                организую путешествия
                <br />
                по Европе
              </p>
            </div>
            <div>
              <strong>
                19+ <span>лет</span>
              </strong>
              <p>
                работаю в туризме
                <br />и руковожу поездками
              </p>
            </div>
          </div>
          <p className={styles.description}>
            В этой поездке я рядом с группой на всём маршруте. Помогаю с
            переездами, размещением и вопросами по ходу путешествия. Мне
            хочется, чтобы у вас оставалось больше времени просто наслаждаться
            Европой.
          </p>
          <WhatsAppLink className="button button-dark">
            Познакомиться с Алией <Icon name="diagonal" />
          </WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
