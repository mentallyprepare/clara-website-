import type { ReactNode } from "react";

export default function IphoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[340px] max-w-full rounded-[2.5rem] border border-white/15 bg-[#1b1b3c] p-[7px] shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
      <div className="relative overflow-hidden rounded-[2.05rem] bg-[#fcfcfd]">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-[#1b1b3c]"
        />
        <div
          aria-hidden="true"
          className="flex items-center justify-between px-6 pb-1 pt-2.5 text-[10px] font-medium text-[#1b1b3c]"
        >
          <span>10:18</span>
          <span className="h-1.5 w-4 rounded-sm bg-[#1b1b3c]" />
        </div>
        {children}
      </div>
    </div>
  );
}
