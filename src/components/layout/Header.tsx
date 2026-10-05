"use client";
import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import styles from "./Header.module.css";
const links = [
  { href: "#route", title: "Маршрут" },
  { href: "#program", title: "Программа" },
  { href: "#guide", title: "Сопровождение" },
  { href: "#pricing", title: "Стоимость" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const clickOutside = (event: MouseEvent) => {
      if (event.target instanceof Element && !event.target.closest("header"))
        setOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("click", clickOutside);
    };
  }, [open]);
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <BrandLogo />
        <span className={styles.divider} />
        <span className={styles.edition}>
          Авторские путешествия
          <br />
          <b>CHRISTMAS EDITION / 2026</b>
        </span>
        <nav aria-label="Основная навигация" className={styles.desktop}>
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.title}
            </a>
          ))}
        </nav>
        <WhatsAppLink className={`button button-dark ${styles.contact}`}>
          Связаться <Icon name="diagonal" />
        </WhatsAppLink>
        <button
          ref={toggleRef}
          className={styles.toggle}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        aria-label="Мобильная навигация"
        className={styles.mobile}
        hidden={!open}
      >
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={() => setOpen(false)}>
            {link.title}
            <Icon name="arrow" />
          </a>
        ))}
        <WhatsAppLink className="button button-primary">
          Написать в WhatsApp <Icon name="whatsapp" />
        </WhatsAppLink>
      </nav>
    </header>
  );
}
