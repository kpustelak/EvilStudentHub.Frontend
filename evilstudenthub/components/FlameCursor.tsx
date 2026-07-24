"use client";

import { useEffect } from "react";

export function FlameCursor() {
  useEffect(() => {
    const panelSelector = ".login-visual-panel";

    let timerId: ReturnType<typeof setInterval> | null = null;
    let running = false;
    let targetX = 0;
    let targetY = 0;
    let dotX = 0;
    let dotY = 0;
    let flameX = 0;
    let flameY = 0;

    const clamp = (n: number, min: number, max: number) =>
      Math.max(min, Math.min(max, n));

    const stop = () => {
      running = false;
      if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
      }
      document.getElementById("cursor-dot")?.classList.remove("is-active");
      document.getElementById("cursor-flame")?.classList.remove("is-active");
    };

    const tick = () => {
      if (!running) return;

      dotX += (targetX - dotX) * 0.45;
      dotY += (targetY - dotY) * 0.45;
      flameX += (targetX - flameX) * 0.14;
      flameY += (targetY - flameY) * 0.14;

      const dot = document.getElementById("cursor-dot");
      const flame = document.getElementById("cursor-flame");

      if (dot) {
        dot.style.left = `${dotX}px`;
        dot.style.top = `${dotY}px`;
      }

      if (flame) {
        const tilt = clamp((flameX - dotX) * -0.25, -18, 18);
        flame.style.left = `${flameX}px`;
        flame.style.top = `${flameY}px`;
        flame.style.transform = `translate(-35%, -75%) rotate(${tilt}deg)`;
      }
    };

    const startAt = (x: number, y: number) => {
      targetX = x;
      targetY = y;
      dotX = x;
      dotY = y;
      flameX = x;
      flameY = y;

      document.getElementById("cursor-dot")?.classList.add("is-active");
      document.getElementById("cursor-flame")?.classList.add("is-active");

      if (running) return;
      running = true;
      timerId = setInterval(tick, 16);
    };

    const panel = document.querySelector(panelSelector);
    if (!panel || !(panel instanceof HTMLElement)) return;
    if (panel.dataset.cursorWired === "true") return;
    panel.dataset.cursorWired = "true";

    const onEnter = (e: Event) => {
      const me = e as MouseEvent;
      startAt(me.clientX, me.clientY);
    };
    const onMove = (e: Event) => {
      const me = e as MouseEvent;
      targetX = me.clientX;
      targetY = me.clientY;
    };

    panel.addEventListener("mouseenter", onEnter);
    panel.addEventListener("mousemove", onMove, { passive: true });
    panel.addEventListener("mouseleave", stop);

    return () => {
      stop();
      panel.removeEventListener("mouseenter", onEnter);
      panel.removeEventListener("mousemove", onMove);
      panel.removeEventListener("mouseleave", stop);
      delete panel.dataset.cursorWired;
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" aria-hidden="true" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id="cursor-flame"
        src="/cursor-flame.png"
        alt=""
        aria-hidden="true"
      />
    </>
  );
}
