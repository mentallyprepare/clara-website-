"use client";

import { useCallback, useRef } from "react";
import {
  Receipt,
  CalendarClock,
  Package,
  MapPin,
  RotateCcw,
  FileCheck2,
  CalendarCheck,
  ShieldCheck,
  UserRoundCheck,
  CreditCard,
  CircleUserRound,
  Truck,
  CircleX,
  MessageSquareWarning,
  CircleArrowUp,
  type LucideIcon,
} from "lucide-react";

type Tag = { icon: LucideIcon; label: string };

const ROWS: Tag[][] = [
  [
    { icon: Receipt, label: "Refunds" },
    { icon: CalendarClock, label: "Rescheduling" },
    { icon: Package, label: "Order changes" },
    { icon: MapPin, label: "Address updates" },
    { icon: RotateCcw, label: "Renewals" },
  ],
  [
    { icon: FileCheck2, label: "KYC intake" },
    { icon: CalendarCheck, label: "Appointment booking" },
    { icon: ShieldCheck, label: "Policy questions" },
    { icon: UserRoundCheck, label: "Lead qualification" },
    { icon: CreditCard, label: "Payment reminders" },
  ],
  [
    { icon: CircleUserRound, label: "Account questions" },
    { icon: Truck, label: "Delivery status" },
    { icon: CircleX, label: "Cancellations" },
    { icon: MessageSquareWarning, label: "Complaints" },
    { icon: CircleArrowUp, label: "Upgrades" },
  ],
];

function Pill({ icon: Icon, label }: Tag) {
  return (
    <span className="lens-pill">
      <Icon size={14} strokeWidth={1.9} aria-hidden="true" />
      {label}
    </span>
  );
}

function Rows({ variant }: { variant: "base" | "reveal" }) {
  return (
    <div className={`lens-rows lens-rows--${variant}`} aria-hidden="true">
      {ROWS.map((row, i) => (
        <div className="lens-row" data-dir={i % 2 === 0 ? "l" : "r"} key={i}>
          {[...row, ...row, ...row].map((t, idx) => (
            <Pill key={`${t.label}-${idx}`} {...t} />
          ))}
        </div>
      ))}
    </div>
  );
}

export function ConversationLens() {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--lx", `${e.clientX - r.left}px`);
    el.style.setProperty("--ly", `${e.clientY - r.top}px`);
    el.dataset.hover = "true";
  }, []);

  const onLeave = useCallback(() => {
    if (ref.current) ref.current.dataset.hover = "false";
  }, []);

  return (
    <div
      className="lens-card"
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      aria-label="A sample of the conversations Clara handles"
      role="img"
    >
      <div className="lens-stage">
        <Rows variant="base" />
        <Rows variant="reveal" />
        <span className="lens-glass" aria-hidden="true">
          <span className="lens-glass__ring" />
          <span className="lens-glass__handle" />
        </span>
        <span className="lens-fade lens-fade--l" aria-hidden="true" />
        <span className="lens-fade lens-fade--r" aria-hidden="true" />
      </div>
      <p className="lens-caption">
        Clara clears the routine ones. Your team keeps the exceptions.
      </p>
    </div>
  );
}
