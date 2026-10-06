"use client";
import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { useSpringTilt } from "@/lib/useSpringTilt";

/** Same map tilt, beacons and enlarged view as the reference; native dialog traps focus. */
export function MapCard({ children }: { children: ReactNode }) {
  const surface = useSpringTilt();
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const previousOverflow = useRef("");
  function open() {
    if (!dialog.current || dialog.current.open) return;
    opener.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current.showModal();
  }
  function close() {
    dialog.current?.close();
  }
  return (
    <>
      <div
        ref={surface}
        className="threeui-map-card"
        id="interactiveRouteMap"
        onClick={open}
      >
        {children}
        <button
          type="button"
          className="map-open"
          aria-label="Открыть карту маршрута"
          onClick={open}
        />
      </div>
      <dialog
        ref={dialog}
        className="map-dialog"
        aria-label="Карта рождественского маршрута"
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onClose={() => {
          document.body.style.overflow = previousOverflow.current;
          opener.current?.focus({ preventScroll: true });
        }}
      >
        <button
          type="button"
          autoFocus
          className="map-dialog-close"
          aria-label="Закрыть карту"
          onClick={close}
        >
          ×
        </button>
        <Image
          src="/images/tour/christmas-route-map.webp"
          width={1408}
          height={768}
          alt="Рождественский маршрут: Базель, Кольмар, Париж, Амстердам и аэропорт Схипхол"
        />
      </dialog>
    </>
  );
}
