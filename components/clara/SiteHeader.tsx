"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SlideTabs } from "@/components/ui/slide-tabs";
import { MobileNav } from "./MobileNav";

export function SiteHeader({ isHomepage = false }: { isHomepage?: boolean }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      if (y < 80) setVisible(true);
      else if (y > lastY + 6) setVisible(false);
      else if (y < lastY - 6) setVisible(true);
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    const onMouse = (e: MouseEvent) => {
      if (e.clientY < 90) setVisible(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <header
      className={`site-header${visible ? "" : " site-header--hidden"}`}
      data-visible={visible}
    >
      <div className="site-header__pill">
        <Link className="site-brand" href="/" aria-label="Clara by Claritel home">
          <img
            src="/On_light.svg"
            alt="Clara by Claritel"
            className="site-brand__img"
          />
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <div className="site-nav__desktop">
            <SlideTabs />
            <Link
              className="nav-cta nav-cta--secondary"
              href={isHomepage ? "#invitation" : "/#invitation"}
            >
              Book Demo
            </Link>
            <Link
              className="nav-cta"
              href={isHomepage ? "#invitation" : "/#invitation"}
            >
              Talk to Clara
            </Link>
          </div>
          <MobileNav isHomepage={isHomepage} />
        </nav>
      </div>
    </header>
  );
}
