"use client";
import type { ComponentProps, PointerEvent } from "react";

/** Reference liquid-glass button. Pointer effects never trigger React renders. */
export function GlassLink(props: ComponentProps<"a">) {
  function move(event: PointerEvent<HTMLAnchorElement>) {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left,
      y = event.clientY - rect.top;
    element.style.setProperty("--x", `${x}px`);
    element.style.setProperty("--y", `${y}px`);
    element.style.transform = `perspective(600px) rotateX(${(0.5 - y / rect.height) * 20}deg) rotateY(${(x / rect.width - 0.5) * 20}deg) scale(1.03)`;
  }
  return (
    <a
      {...props}
      onPointerMove={move}
      onPointerLeave={(event) => {
        event.currentTarget.style.transform = "";
      }}
    />
  );
}
