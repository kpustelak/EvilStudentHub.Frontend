"use client";

import { useEffect } from "react";

export function DotSphere() {
  useEffect(() => {
    const existing = document.querySelector('script[data-dot-sphere]');
    if (existing) {
      existing.dispatchEvent(new Event("load"));
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = "/dot-sphere.js";
    script.dataset.dotSphere = "true";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="dot-sphere" data-dot-sphere>
      <canvas className="dot-sphere__canvas" />
    </div>
  );
}
