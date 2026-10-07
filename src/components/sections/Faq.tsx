import { faq } from "@/data/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import styles from "./Faq.module.css";
export function Faq() {
  return (
    <section id="faq" className="section">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <SectionHeading eyebrow="Перед тем, как сказать «еду»">
            Возможно,
            <br />
            вы хотели
            <br />
            <em>спросить.</em>
          </SectionHeading>
          <p>
            Не нашли свой вопрос?
            <br />
            Напишите в Almaz Tour — поможем разобраться.
          </p>
          <WhatsAppLink className="text-link">
            Задать свой вопрос <Icon name="arrow" />
          </WhatsAppLink>
        </div>
        <div className={styles.questions}>
          {faq.map((item) => (
            <details name="tour-faq" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <Icon name="plus" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
