import type { CSSProperties } from "react";
import styles from "./Snowfall.module.css";

/** Deterministic, decorative CSS snowfall; no animation loop or hydration randomness. */
export function Snowfall() {
  return (
    <div aria-hidden="true" className={styles.snow}>
      {Array.from({ length: 24 }, (_, i) => (
        <span
          key={i}
          className={styles.flake}
          style={
            {
              "--x": `${(i * 47 + 11) % 100}%`,
              "--size": `${2 + (i % 3)}px`,
              "--duration": `${17 + (i % 8)}s`,
              "--delay": `${-i * 2.7}s`,
              "--drift": `${(i % 2 ? 1 : -1) * (16 + (i % 5) * 8)}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
