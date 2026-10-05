"use client";
import { useEffect, useRef } from "react";

/** A small, interruptible spring. The moving surface stays independent of React renders. */
export function useSpringTilt(enabled = true) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      previous = 0;
    let x = 0,
      y = 0,
      vx = 0,
      vy = 0,
      tx = 0,
      ty = 0;
    let bounds: DOMRect | null = null;
    const render = () => {
      el.style.setProperty("--rotate-x", `${x}deg`);
      el.style.setProperty("--rotate-y", `${y}deg`);
    };
    const tick = (time: number) => {
      const dt = previous ? Math.min((time - previous) / 1000, 0.024) : 1 / 60;
      previous = time;
      vx += ((tx - x) * 175 - vx * 26) * dt;
      vy += ((ty - y) * 175 - vy * 26) * dt;
      x += vx * dt;
      y += vy * dt;
      render();
      if (
        Math.abs(tx - x) + Math.abs(ty - y) + Math.abs(vx) + Math.abs(vy) >
        0.015
      )
        frame = requestAnimationFrame(tick);
      else {
        frame = 0;
        previous = 0;
        x = tx;
        y = ty;
        render();
      }
    };
    const run = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const enter = () => {
      bounds = el.getBoundingClientRect();
    };
    const move = (event: PointerEvent) => {
      if (
        !enabled ||
        motion.matches ||
        event.pointerType !== "mouse" ||
        !bounds
      )
        return;
      const px = (event.clientX - bounds.left) / bounds.width;
      const py = (event.clientY - bounds.top) / bounds.height;
      tx = (0.5 - py) * 8;
      ty = (px - 0.5) * 8;
      el.style.setProperty("--glare-x", `${px * 100}%`);
      el.style.setProperty("--glare-y", `${py * 100}%`);
      run();
    };
    const leave = () => {
      tx = ty = 0;
      run();
    };
    const reset = () => {
      if (motion.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        previous = x = y = vx = vy = tx = ty = 0;
        render();
      }
    };
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    motion.addEventListener("change", reset);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
      motion.removeEventListener("change", reset);
      el.style.setProperty("--rotate-x", "0deg");
      el.style.setProperty("--rotate-y", "0deg");
    };
  }, [enabled]);
  return ref;
}
