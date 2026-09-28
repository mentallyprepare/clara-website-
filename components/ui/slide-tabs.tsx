"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteTabs } from "@/lib/site-nav";

type CursorPosition = { left: number; width: number; opacity: number };

export const SlideTabs = () => {
  const pathname = usePathname();
  const currentPathname = pathname ?? "/";
  const [position, setPosition] = useState<CursorPosition>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const tabsRef = useRef<Array<HTMLLIElement | null>>([]);

  const activeIndex = siteTabs.findIndex((tab) =>
    currentPathname === tab.href || currentPathname.startsWith(tab.href + "/"),
  );

  const moveCursorTo = (index: number) => {
    const tab = tabsRef.current[index];
    if (!tab) {
      setPosition((p) => ({ ...p, opacity: 0 }));
      return;
    }
    setPosition({
      left: tab.offsetLeft,
      width: tab.getBoundingClientRect().width,
      opacity: 1,
    });
  };

  // Rest the cursor under the tab matching the current route (or hide it on home).
  useEffect(() => {
    moveCursorTo(activeIndex);
    const onResize = () => moveCursorTo(activeIndex);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex]);

  return (
    <ul
      onMouseLeave={() => moveCursorTo(activeIndex)}
      className="relative flex w-fit items-center rounded-full border border-[#1b1b3c]/60 bg-white/80 p-0.5 backdrop-blur-sm"
    >
      {siteTabs.map((tab, i) => (
        <li
          key={tab.href}
          ref={(el) => {
            tabsRef.current[i] = el;
          }}
          onMouseEnter={() => moveCursorTo(i)}
          className="relative z-10 block"
        >
          <Link
            href={tab.href}
            className="block cursor-pointer whitespace-nowrap px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-[#1b1b3c] md:px-3 md:py-1.5 md:text-xs"
          >
            {tab.label}
          </Link>
        </li>
      ))}
      <Cursor position={position} />
    </ul>
  );
};

const Cursor = ({ position }: { position: CursorPosition }) => (
  <li
    aria-hidden="true"
    style={{
      left: position.left,
      width: position.width,
      opacity: position.opacity,
    }}
    className="absolute z-0 h-6 rounded-full bg-[#e7e4fb] transition-all duration-300 ease-out md:h-7"
  />
);

export default SlideTabs;
