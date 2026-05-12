// src/components/sections/Agencies.tsx
import React from "react";
import { SiRedbull, SiEmirates } from "react-icons/si";
import { FaCcVisa, FaXbox } from "react-icons/fa6";
import { FaGoogle, FaAmazon } from "react-icons/fa";

const agencyIconMap: Record<string, React.ElementType> = {
  RedBull: SiRedbull,
  Emirates: SiEmirates,
  Xbox: FaXbox,
  Google: FaGoogle,
  Amazon: FaAmazon,
  Visa: FaCcVisa,
};

const entries = Object.entries(agencyIconMap);

export default function Agencies() {
  const loopItems = [...entries, ...entries];

  return (
    <div className="my-10 w-full overflow-hidden bg-white py-4 sm:my-14 sm:py-6">
      <div className="flex items-center gap-4 sm:gap-8">
        <p className="shrink-0 whitespace-nowrap px-4 text-[10px] font-semibold tracking-[0.18em] text-black sm:px-6 sm:text-sm sm:tracking-[0.2em]">
          The agency behind
        </p>

        <div className="relative flex-1 overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 from-white to-transparent sm:w-16 lg:w-20" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 from-white to-transparent sm:w-16 lg:w-20" />

          <div className="ticker-track flex items-center gap-10 whitespace-nowrap sm:gap-16 lg:gap-50">
            {loopItems.map(([name, Icon], index) => (
              <div
                key={`${name}-${index}`}
                className="flex shrink-0 items-center gap-2 sm:gap-3"
              >
                <Icon className="h-8 w-8 text-neutral-700 sm:h-10 sm:w-10 lg:h-12 lg:w-12" />
                <span className="text-[10px] font-medium uppercase tracking-wider text-neutral-500 sm:text-xs">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .ticker-track {
            animation: scrollLeft 20s linear infinite;
          }

          @keyframes scrollLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  );
}