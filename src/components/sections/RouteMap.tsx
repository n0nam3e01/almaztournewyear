"use client";
import { useEffect, useRef, useState } from "react";
import type { PointerEvent, CSSProperties } from "react";
import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { useSpringTilt } from "@/lib/useSpringTilt";
import { mapCities } from "@/data/map";
import styles from "./RouteMap.module.css";

export function RouteMap() {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [largeZoom, setLargeZoom] = useState(1);
  const [visible, setVisible] = useState(false);
  const surface = useSpringTilt(zoom === 1);
  const viewport = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const openButton = useRef<HTMLButtonElement>(null);
  const drag = useRef<{
    id: number;
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    width: number;
    height: number;
    moved: boolean;
  } | null>(null);

  useEffect(() => {
    const el = surface.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [surface]);

  useEffect(() => {
    if (!expanded || !dialog.current) return;
    const el = dialog.current;
    const trigger = openButton.current;
    el.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
      if (el.open) el.close();
      trigger?.focus({ preventScroll: true });
    };
  }, [expanded]);

  function changeZoom(next: number) {
    setZoom(Math.max(1, Math.min(2.5, next)));
    setOffset({ x: 0, y: 0 });
    setSelected(null);
  }
  function selectCity(index: number) {
    const city = mapCities[index];
    const rect = viewport.current?.getBoundingClientRect();
    if (!rect) return;
    const next = 1.6;
    const clamp = (value: number, dimension: number) =>
      Math.max(
        (-dimension * (next - 1)) / 2,
        Math.min((dimension * (next - 1)) / 2, value),
      );
    setZoom(next);
    setSelected(index);
    setOffset({
      x: clamp((0.5 - city.x / 100) * rect.width * next, rect.width),
      y: clamp((0.5 - city.y / 100) * rect.height * next, rect.height),
    });
  }
  function start(event: PointerEvent<HTMLDivElement>) {
    if (
      zoom === 1 ||
      drag.current ||
      (event.target instanceof Element && event.target.closest("button"))
    )
      return;
    const rect = event.currentTarget.getBoundingClientRect();
    drag.current = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      baseX: offset.x,
      baseY: offset.y,
      width: rect.width,
      height: rect.height,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
  }
  function move(event: PointerEvent<HTMLDivElement>) {
    const current = drag.current;
    if (!current || current.id !== event.pointerId) return;
    const dx = event.clientX - current.x,
      dy = event.clientY - current.y;
    if (Math.abs(dx) + Math.abs(dy) > 6) current.moved = true;
    const clamp = (value: number, dimension: number) =>
      Math.max(
        (-dimension * (zoom - 1)) / 2,
        Math.min((dimension * (zoom - 1)) / 2, value),
      );
    setOffset({
      x: clamp(current.baseX + dx, current.width),
      y: clamp(current.baseY + dy, current.height),
    });
  }
  function stop(event: PointerEvent<HTMLDivElement>) {
    if (drag.current?.id !== event.pointerId) return;
    drag.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
  }
  const city = selected === null ? null : mapCities[selected];
  return (
    <div className={styles.map}>
      <div className={styles.mapHeader}>
        <div>
          <span className={styles.miniTree}>
            <Icon name="gift" />
          </span>
          <span>
            <small>ПРИКОСНИТЕСЬ К ПУТЕШЕСТВИЮ</small>
            <strong>Ваша рождественская карта</strong>
          </span>
        </div>
        <span className={styles.badge}>
          <Icon name="train" />3 страны · 9 дней
        </span>
      </div>
      <div className={styles.depth}>
        <div
          ref={surface}
          className={styles.surface}
          data-visible={visible || undefined}
        >
          <div
            ref={viewport}
            className={`${styles.viewport} ${zoom > 1 ? styles.zoomed : ""}`}
            onClick={(event) => {
              if (
                zoom === 1 &&
                !(
                  event.target instanceof Element &&
                  event.target.closest("button")
                )
              ) {
                setLargeZoom(1);
                setExpanded(true);
              }
            }}
            onPointerDown={start}
            onPointerMove={move}
            onPointerUp={stop}
            onPointerCancel={stop}
            style={{ touchAction: zoom > 1 ? "none" : "pan-y" }}
          >
            <div
              className={`${styles.image} ${dragging ? styles.dragging : ""}`}
              style={{
                transform: `translate3d(${offset.x}px,${offset.y}px,0) scale(${zoom})`,
              }}
            >
              <Image
                src="/images/tour/christmas-route-map.webp"
                alt="Рождественский маршрут: Базель, Кольмар, Париж, Амстердам и Схипхол"
                unoptimized
                width={1408}
                height={768}
                sizes="(max-width: 780px) 100vw, 88vw"
                draggable={false}
              />
              {mapCities.map((point, index) => (
                <button
                  type="button"
                  key={point.name}
                  className={`${styles.beacon} ${selected === index ? styles.selected : ""}`}
                  style={
                    {
                      left: `${point.x}%`,
                      top: `${point.y}%`,
                      "--delay": `${index * 0.2}s`,
                    } as CSSProperties
                  }
                  aria-label={`Показать ${point.name} на карте`}
                  aria-pressed={selected === index}
                  onClick={() => selectCity(index)}
                >
                  <span className={styles.wave} />
                  <span className={styles.core} />
                  <span className={styles.tooltip}>
                    {point.name} · {point.date}
                  </span>
                </button>
              ))}
            </div>
            <span className={styles.glare} aria-hidden="true" />
          </div>
          <button
            ref={openButton}
            type="button"
            className={styles.expand}
            onClick={() => {
              setLargeZoom(1);
              setExpanded(true);
            }}
          >
            <Icon name="plus" />
            Открыть карту
          </button>
          <span className={styles.depthLabel}>3D · Живой маршрут</span>
        </div>
      </div>
      <div className={styles.toolbar}>
        <div className={styles.cityTabs} aria-label="Города маршрута">
          {mapCities.slice(0, 4).map((point, index) => (
            <button
              type="button"
              key={point.name}
              aria-pressed={selected === index}
              onClick={() => selectCity(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {point.name}
            </button>
          ))}
        </div>
        <div className={styles.controls}>
          <span aria-live="polite">{Math.round(zoom * 100)}%</span>
          <button
            type="button"
            aria-label="Уменьшить карту"
            disabled={zoom === 1}
            onClick={() => changeZoom(zoom - 0.3)}
          >
            −
          </button>
          <button
            type="button"
            aria-label="Увеличить карту"
            disabled={zoom === 2.5}
            onClick={() => changeZoom(zoom + 0.3)}
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
      <p className={styles.hint} aria-live="polite">
        {city ? (
          <>
            <strong>
              {city.name} · {city.date}
            </strong>{" "}
            {city.note}
          </>
        ) : zoom > 1 ? (
          "Перетаскивайте карту, чтобы рассмотреть детали."
        ) : (
          "Выберите город или откройте карту целиком. Наведите курсор, чтобы почувствовать её глубину."
        )}
      </p>
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-labelledby="map-dialog-title"
        onClose={() => setExpanded(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setExpanded(false);
        }}
      >
        <div className={styles.dialogHeader}>
          <div>
            <small>ALMAZ TOUR · CHRISTMAS EDITION</small>
            <h2 id="map-dialog-title">Рождественская Европа</h2>
          </div>
          <button
            type="button"
            aria-label="Закрыть карту"
            onClick={() => setExpanded(false)}
          >
            <Icon name="close" />
          </button>
        </div>
        <div className={styles.dialogScroll}>
          <Image
            src="/images/tour/christmas-route-map.webp"
            alt="Карта рождественского путешествия в полном размере"
            width={1408}
            height={768}
            unoptimized
            style={{
              width: `${largeZoom * 100}%`,
              maxWidth: "none",
              height: "auto",
            }}
          />
        </div>
        <div className={styles.dialogFooter}>
          <span>Базель → Кольмар → Париж → Амстердам</span>
          <div className={styles.controls}>
            <button
              type="button"
              aria-label="Уменьшить большую карту"
              disabled={largeZoom === 1}
              onClick={() => setLargeZoom(Math.max(1, largeZoom - 0.5))}
            >
              −
            </button>
            <button
              type="button"
              aria-label="Увеличить большую карту"
              disabled={largeZoom === 2.5}
              onClick={() => setLargeZoom(Math.min(2.5, largeZoom + 0.5))}
            >
              <Icon name="plus" />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
