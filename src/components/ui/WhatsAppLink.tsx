import type { ReactNode } from "react";
import { whatsappUrl } from "@/data/company";
export function WhatsAppLink({
  children,
  message,
  className = "button button-primary",
  label,
}: {
  children: ReactNode;
  message?: string;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={label}
    >
      {children}
    </a>
  );
}
