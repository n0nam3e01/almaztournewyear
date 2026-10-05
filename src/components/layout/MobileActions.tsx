import { ContactButton } from "@/components/ui/ContactButton";
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
        <ContactButton compact>Хочу в тур</ContactButton>
      </div>
      <WhatsAppLink
        className={styles.float}
        label="Написать в WhatsApp Almaz Tour"
      >
        <span className={styles.whatsapp}>
          <Icon name="whatsapp" />
        </span>
        <span>
          Обсудим поездку?<small>Написать в WhatsApp</small>
        </span>
        <Icon name="diagonal" />
      </WhatsAppLink>
    </aside>
  );
}
