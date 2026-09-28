"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteTabs } from "@/lib/site-nav";

export function MobileNav({ isHomepage = false }: { isHomepage?: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav__toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {open ? (
        <>
          <button
            type="button"
            className="mobile-nav__scrim"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <div className="mobile-nav__panel" role="menu">
            {siteTabs.map((tab) => {
              const isActive =
                pathname === tab.href || pathname.startsWith(tab.href + "/");
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  role="menuitem"
                  className={isActive ? "is-active" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {tab.label}
                </Link>
              );
            })}
            <Link
              href={isHomepage ? "#invitation" : "/#invitation"}
              className="mobile-nav__cta"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              Talk to Clara
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
}
