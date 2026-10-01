import { BatteryFull, Signal, Wifi } from "lucide-react";
import type { ReactNode } from "react";

export default function IphoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto flex h-[30rem] w-[17rem] max-w-full flex-col rounded-[2.6rem] border border-[#1b1b3c] bg-[#1b1b3c] p-[7px] shadow-[0_28px_60px_rgba(27,27,60,0.22)]">
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-[2.15rem] bg-[#fcfcfd]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-2 z-10 h-[1.1rem] w-[4.75rem] -translate-x-1/2 rounded-full bg-[#1b1b3c]"
        />
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center justify-between px-6 pb-2 pt-3 text-[11px] font-semibold text-[#1b1b3c]"
        >
          <span>10:18</span>
          <span className="flex items-center gap-1">
            <Signal size={12} strokeWidth={2.25} />
            <Wifi size={12} strokeWidth={2.25} />
            <BatteryFull size={14} strokeWidth={2} />
          </span>
        </div>
        <div className="scrollbar-none min-h-0 flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
