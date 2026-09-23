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
      className="relative flex w-fit items-center rounded-full border border-[#1b1b3c] bg-white p-1"
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
            className="block cursor-pointer whitespace-nowrap px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-[#1b1b3c] md:px-4 md:py-2 md:text-sm"
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
    className="absolute z-0 h-7 rounded-full bg-[#e7e4fb] transition-all duration-300 ease-out md:h-9"
  />
);

export default SlideTabs;
