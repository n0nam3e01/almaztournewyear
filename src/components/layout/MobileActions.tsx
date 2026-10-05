import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Icon } from "@/components/ui/Icon";
import { tour } from "@/data/tour";
import { formatAmount } from "@/lib/format";
import styles from "./MobileActions.module.css";
export function MobileActions() {
  return (
    <aside className={styles.actions} aria-label="Быстрая связь с Almaz Tour">
      <div className={styles.mobile}>
        <span>
          <strong>{formatAmount(tour.price)} €</strong>
          <small>{tour.shortDates}</small>
        </span>
        <WhatsAppLink className="button button-primary">
          Хочу в тур <Icon name="whatsapp" />
        </WhatsAppLink>
      </div>
      <WhatsAppLink
        className={styles.float}
        label="Написать в WhatsApp Almaz Tour"
      >
        <Icon name="whatsapp" />
        <span>Обсудим поездку?</span>
      </WhatsAppLink>
    </aside>
  );
}
