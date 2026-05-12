import { useState } from "react";
import { ArrowUpRight } from "lucide-react";


import { services } from "../../data/data";

const leftServices = services.slice(0, 3);
const rightServices = services.slice(3, 6);

// ── ServiceRow ─────────────────────────────────────────────────────────────────
interface ServiceRowProps {
  title: string;
  image: string;
  isLast?: boolean;
}

function ServiceRow({ title, image, isLast = false }: ServiceRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col">
      <div
        className={`
          relative overflow-hidden cursor-pointer
          transition-all duration-300 ease-out
          ${hovered ? "rounded-[999px] -mx-4 sm:-mx-5 md:-mx-6" : "rounded-none mx-0"}
        `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        /* Touch support for mobile */
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
      >
        {/* Background image with overlay */}
        <div
          className={`
            absolute inset-0 z-0
            transition-opacity duration-300 ease-out
            ${hovered ? "opacity-100" : "opacity-0"}
          `}
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Row content */}
        <div className="relative z-10 flex items-center py-3 sm:py-4 md:py-5 px-3 sm:px-4 md:px-6">
          <ArrowUpRight
            className={`
              shrink-0 transition-all duration-300 ease-out
              ${hovered
                ? "opacity-100 text-white w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 md:mr-3 translate-x-0"
                : "opacity-0 w-0 h-5 sm:h-6 md:h-8 mr-0 -translate-x-4"
              }
            `}
          />
          <p
            className={`
              flex-1 font-semibold tracking-tighter
              transition-colors duration-300 ease-out
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              leading-tight
              ${hovered ? "text-white" : "text-black"}
            `}
            style={{ wordBreak: "break-word" }}
          >
            {title}
          </p>
        </div>
      </div>

      {/* Divider */}
      {!isLast && (
        <hr
          className={`
            border-t border-neutral-300
            transition-opacity duration-300
            ${hovered ? "opacity-0" : "opacity-100"}
          `}
        />
      )}
    </div>
  );
}

// ── CoreServices ───────────────────────────────────────────────────────────────
export default function CoreServices() {
  return (
    <div className="flex w-full max-w-full flex-col gap-6 md:gap-8 overflow-x-hidden px-4 sm:px-6 md:px-10 lg:px-12 py-8 md:py-10 my-8 md:my-16">

      {/* ── Heading row ── */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        {/* Title group */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-none">
            Our
          </span>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2m54i7Vr5K4LKu2-Sa0MAGL4-IHEPN7PFA&s"
            alt="Conversation"
            className="
              h-10 w-10
              sm:h-14 sm:w-14
              md:h-16 md:w-16
              lg:h-20 lg:w-20
              rounded-xl sm:rounded-2xl object-cover shrink-0
            "
          />
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold leading-none">
            Services
          </span>
        </div>

        {/* CTA button */}
        <button className="
          group flex items-center gap-1.5 sm:gap-2
          rounded-xl sm:rounded-2xl
          border border-neutral-300 bg-white
          px-3 py-1.5 sm:px-4 sm:py-2
          text-xs sm:text-sm md:text-base
          font-semibold shadow-sm
          transition-colors duration-200 hover:bg-neutral-100
          shrink-0
        ">
          <span className="relative h-5 sm:h-6 overflow-hidden">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap">
              View All Services
            </span>
            <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full whitespace-nowrap">
              View All Services
            </span>
          </span>
          <ArrowUpRight className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
        </button>
      </div>

      {/* Top divider */}
      <hr className="border-t border-neutral-400" />

      {/* ── Services grid ── */}
      {/*
        Mobile  (<lg): single column — all 6 services stacked vertically
        Desktop (≥lg): two columns side by side
      */}
      <div className="flex flex-col gap-0 lg:flex-row lg:gap-12 xl:gap-16">

        {/* Left column */}
        <div className="flex-1 overflow-visible">
          {leftServices.map((s, i) => (
            <ServiceRow
              key={s.title}
              title={s.title}
              image={s.image}
              isLast={i === leftServices.length - 1}
            />
          ))}
          {/* On mobile, add a divider between the two halves */}
          <hr className="block lg:hidden border-t border-neutral-400 mt-0" />
        </div>

        {/* Right column */}
        <div className="flex-1 overflow-visible">
          {rightServices.map((s, i) => (
            <ServiceRow
              key={s.title}
              title={s.title}
              image={s.image}
              isLast={i === rightServices.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}