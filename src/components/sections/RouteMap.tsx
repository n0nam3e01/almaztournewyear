"use client";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent, CSSProperties } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import styles from "./RouteMap.module.css";

export function RouteMap() {
  const [zoom, setZoom] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const surface = useRef<HTMLDivElement>(null);
  const dragStart = useRef<{
    id: number;
    x: number;
    y: number;
    baseX: number;
    baseY: number;
  } | null>(null);
  const reducedMotion = useRef(false);
  const bounds = useRef<DOMRect | null>(null);
  const frame = useRef<number | null>(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = media.matches;
    const update = () => {
      reducedMotion.current = media.matches;
      if (media.matches && surface.current)
        surface.current.style.transform = "none";
    };
    media.addEventListener("change", update);
    return () => {
      media.removeEventListener("change", update);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);
  function changeZoom(next: number) {
    setZoom(Math.min(2.5, Math.max(1, next)));
    setOffset({ x: 0, y: 0 });
    if (surface.current) surface.current.style.transform = "none";
  }
  function move(event: PointerEvent<HTMLDivElement>) {
    const drag = dragStart.current;
    if (drag && event.pointerId === drag.id && bounds.current) {
      const limitX = (bounds.current.width * (zoom - 1)) / 2;
      const limitY = (bounds.current.height * (zoom - 1)) / 2;
      setOffset({
        x: Math.max(
          -limitX,
          Math.min(limitX, drag.baseX + event.clientX - drag.x),
        ),
        y: Math.max(
          -limitY,
          Math.min(limitY, drag.baseY + event.clientY - drag.y),
        ),
      });
      return;
    }
    if (
      zoom !== 1 ||
      event.pointerType !== "mouse" ||
      reducedMotion.current ||
      !bounds.current
    )
      return;
    const rect = bounds.current;
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 1.6;
    const y = -((event.clientY - rect.top) / rect.height - 0.5) * 1.6;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (surface.current)
        surface.current.style.transform = `perspective(1600px) rotateX(${y}deg) rotateY(${x}deg)`;
    });
  }
  function start(event: PointerEvent<HTMLDivElement>) {
    if (zoom === 1) return;
    event.preventDefault();
    bounds.current = event.currentTarget.getBoundingClientRect();
    dragStart.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      baseX: offset.x,
      baseY: offset.y,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  }
  function stop(event: PointerEvent<HTMLDivElement>) {
    if (dragStart.current?.id !== event.pointerId) return;
    dragStart.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  }
  return (
    <div className={styles.map}>
      <div className={styles.mapHeader}>
        <span>
          <Icon name="pin" />
          ВАШ РОЖДЕСТВЕНСКИЙ МАРШРУТ
        </span>
        <span>БАЗЕЛЬ → КОЛЬМАР → ПАРИЖ → АМСТЕРДАМ</span>
      </div>
      <div
        className={`${styles.viewport} ${zoom > 1 ? styles.zoomed : ""}`}
        ref={surface}
        onPointerEnter={(event) => {
          bounds.current = event.currentTarget.getBoundingClientRect();
        }}
        onPointerMove={move}
        onPointerLeave={() => {
          if (!dragging && surface.current)
            surface.current.style.transform = "none";
        }}
        onPointerDown={start}
        onPointerUp={stop}
        onPointerCancel={stop}
        style={{ touchAction: zoom > 1 ? "none" : "pan-y" } as CSSProperties}
      >
        <div
          className={`${styles.image} ${dragging ? styles.dragging : ""}`}
          style={{
            transform: `translate3d(${offset.x}px,${offset.y}px,0) scale(${zoom})`,
          }}
        >
          <Image
            src="/images/tour/christmas-route-map.webp"
            alt="Нарисованная карта рождественского маршрута: Базель, Кольмар, Париж, Амстердам и вылет из Схипхола"
            unoptimized
            width={1408}
            height={768}
            sizes="(max-width: 780px) 100vw, 88vw"
            draggable={false}
          />
        </div>
      </div>
      <div className={styles.toolbar}>
        <p>Скоростные поезда, рождественские города и время для себя.</p>
        <div className={styles.controls}>
          <span aria-live="polite">{Math.round(zoom * 100)}%</span>
          <button
            type="button"
            onClick={() => changeZoom(zoom - 0.5)}
            disabled={zoom === 1}
            aria-label="Уменьшить карту"
          >
            <span>−</span>
          </button>
          <button
            type="button"
            onClick={() => changeZoom(zoom + 0.5)}
            disabled={zoom === 2.5}
            aria-label="Увеличить карту"
          >
            <Icon name="plus" />
          </button>
          <button
            type="button"
            onClick={() => changeZoom(1)}
            className={styles.reset}
          >
            Вся карта
          </button>
        </div>
      </div>
      <p className={styles.hint}>
        {zoom > 1
          ? "Перетаскивайте карту, чтобы рассмотреть маршрут."
          : "Приблизьте карту кнопкой +, чтобы рассмотреть детали."}
      </p>
    </div>
  );
}
