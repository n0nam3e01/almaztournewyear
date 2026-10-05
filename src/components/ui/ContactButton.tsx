import { WhatsAppLink } from "./WhatsAppLink";
import { Icon } from "./Icon";
import styles from "./ContactButton.module.css";
export function ContactButton({
  compact = false,
  children = "Связаться",
}: {
  compact?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <WhatsAppLink
      className={`${styles.button} ${compact ? styles.compact : ""}`}
    >
      <span className={styles.chat}>
        <Icon name="whatsapp" />
      </span>
      <span className={styles.text}>{children}</span>
      <span className={styles.arrow}>
        <Icon name="diagonal" />
      </span>
    </WhatsAppLink>
  );
}
