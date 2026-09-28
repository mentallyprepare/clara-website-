"use client";

import { useState } from "react";

const clients = [
  {
    name: "Panasonic",
    sector: "Consumer care",
    src: "https://viko.panasonic.com/Uploads/Cms/logo_siyah.png",
    accent: "#235b9f",
  },
  {
    name: "Rupeek",
    sector: "Financial services",
    src: "https://assets.rupeek.com/website/images/atl-refresh/logo-new.svg",
    accent: "#e3a420",
  },
  {
    name: "Zolve",
    sector: "Global banking",
    src: "https://www.zolveimages.zolve.com/website/images/zolve_logo.svg",
    accent: "#5b56d7",
  },
  {
    name: "Quick Heal",
    sector: "Cybersecurity",
    src: "https://www.quickheal.co.in/static/version1789060853/frontend/quickheal/in/en_US/images/logo.svg",
    accent: "#3a64a8",
  },
  {
    name: "Atlantic",
    sector: "Logistics",
    src: "https://atlanticcourier.net/static/imgs/atlantic-logo.svg",
    accent: "#e46833",
  },
  {
    name: "Flowstack",
    sector: "B2B software",
    accent: "#4b9787",
  },
] as const;

const pixels = Array.from({ length: 18 });

export function PixelLogoGrid() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="pixel-logo-grid" onMouseLeave={() => setActive(null)}>
      <div className="pixel-logo-grid__intro">
        <p className="eyebrow">Already at work</p>
        <h2>Built around real customer operations.</h2>
        <p>Across finance, technology, logistics and service.</p>
        <span><i /> Move across the grid</span>
      </div>

      <div className="pixel-logo-grid__clients" role="list" aria-label="Teams working with Claritel">
        {clients.map((client, index) => {
          const isActive = active === client.name;
          return (
            <div
              className={`pixel-logo-card${isActive ? " is-active" : ""}`}
              key={client.name}
              onBlur={() => setActive(null)}
              onFocus={() => setActive(client.name)}
              onMouseEnter={() => setActive(client.name)}
              onTouchStart={() => setActive(client.name)}
              role="listitem"
              style={{ "--logo-accent": client.accent } as React.CSSProperties}
              tabIndex={0}
            >
              <div className="pixel-logo-card__pixels" aria-hidden="true">
                {pixels.map((_, pixelIndex) => (
                  <i key={pixelIndex} style={{ "--pixel-delay": `${((pixelIndex * 5 + index * 3) % 17) * 18}ms` } as React.CSSProperties} />
                ))}
              </div>
              <div className="pixel-logo-card__mark">
                {"src" in client ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img alt={client.name} decoding="async" loading="lazy" src={client.src} />
                ) : (
                  <span className="pixel-logo-card__wordmark"><b aria-hidden="true">F</b>Flowstack</span>
                )}
              </div>
              <div className="pixel-logo-card__meta"><span>{String(index + 1).padStart(2, "0")}</span><span>{client.sector}</span></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

