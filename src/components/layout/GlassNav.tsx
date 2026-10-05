"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import styles from "./GlassNav.module.css";

const items = [
  { id: "main", title: "Начало", short: "Начало" },
  { id: "route", title: "Маршрут", short: "Маршрут" },
  { id: "program", title: "Программа", short: "Дни" },
  { id: "guide", title: "Команда", short: "Команда" },
  { id: "pricing", title: "Стоимость", short: "Цена" },
];

export function GlassNav() {
  const [active, setActive] = useState("main");
  const [hovered, setHovered] = useState<string | null>(null);
  const [indicator, setIndicator] = useState({
    left: 5,
    width: 84,
    right: 350,
  });
  const navRef = useRef<HTMLElement>(null);
  const [keyboard, setKeyboard] = useState(false);
  const pending = useRef<string | null>(null);
  const display = hovered ?? active;

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerWidth < 780 ? 180 : 150;
      if (pending.current) {
        const target = document.getElementById(pending.current);
        if (target && Math.abs(target.getBoundingClientRect().top - line) < 45)
          pending.current = null;
        else return;
      }
      let next = "main";
      for (const item of items) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= line + 60)
          next = item.id;
      }
      setActive(next);
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const clearPending = () => {
      pending.current = null;
    };
    update();
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("wheel", clearPending, { passive: true });
    window.addEventListener("touchstart", clearPending, { passive: true });
    window.addEventListener("hashchange", clearPending);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("wheel", clearPending);
      window.removeEventListener("touchstart", clearPending);
      window.removeEventListener("hashchange", clearPending);
    };
  }, []);

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const measure = () => {
      const link = nav.querySelector<HTMLElement>(
        `[data-section="${display}"]`,
      );
      if (!link) return;
      setIndicator({
        left: link.offsetLeft,
        width: link.offsetWidth,
        right: nav.clientWidth - link.offsetLeft - link.offsetWidth,
      });
    };
    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(nav);
    document.fonts.ready.then(measure);
    return () => resize.disconnect();
  }, [display]);

  const variables = {
    "--pill-left": `${indicator.left}px`,
    "--pill-width": `${indicator.width}px`,
    "--pill-right": `${indicator.right}px`,
  } as CSSProperties;
  return (
    <nav
      ref={navRef}
      className={styles.nav}
      aria-label="Основная навигация"
      style={variables}
      data-keyboard={keyboard || undefined}
      onPointerLeave={() => setHovered(null)}
      onPointerDown={() => {
        setKeyboard(false);
      }}
      onKeyDown={() => {
        setKeyboard(true);
      }}
    >
      <span className={styles.pill} aria-hidden="true" />
      <div className={styles.links}>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            data-section={item.id}
            aria-current={active === item.id ? "location" : undefined}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") {
                setKeyboard(false);
                setHovered(item.id);
              }
            }}
            onClick={(event) => {
              setActive(item.id);
              setHovered(null);
              pending.current = item.id;
              if (event.detail === 0) {
                event.preventDefault();
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "instant" });
                history.pushState(null, "", `#${item.id}`);
                pending.current = null;
              }
            }}
          >
            <span className={styles.full}>{item.title}</span>
            <span className={styles.short}>{item.short}</span>
          </a>
        ))}
      </div>
      <div className={`${styles.links} ${styles.highlight}`} aria-hidden="true">
        {items.map((item) => (
          <span key={item.id}>
            <span className={styles.full}>{item.title}</span>
            <span className={styles.short}>{item.short}</span>
          </span>
        ))}
      </div>
    </nav>
  );
}
