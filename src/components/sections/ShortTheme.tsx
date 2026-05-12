
// ── Data ──────────────────────────────────────────────────────────────────────
interface TextItem {
  type: "text";
  content: string;
}

interface ImageItem {
  type: "image";
  src: string;
  alt: string;
}

type MarqueeItem = TextItem | ImageItem;

const items: MarqueeItem[] = [
  { type: "text", content: "Consumers are Not Algorithms" },
  {
    type: "image",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo2m54i7Vr5K4LKu2-Sa0MAGL4-IHEPN7PFA&s",
    alt: "img1",
  },
  { type: "text", content: "Chasing Consumers" },
  {
    type: "image",
    src: "https://images.pexels.com/photos/7081100/pexels-photo-7081100.jpeg",
    alt: "img2",
  },
];

// ── Track (one copy) ──────────────────────────────────────────────────────────
function MarqueeTrack() {
  return (
    <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 pr-4 sm:pr-6 md:pr-8 lg:pr-10">
      {items.map((item, i) =>
        item.type === "text" ? (
          <span
            key={i}
            className="
              whitespace-nowrap font-semibold tracking-tight leading-none
              text-4xl
              sm:text-5xl
              md:text-7xl
              lg:text-8xl
              xl:text-[9rem]
              2xl:text-[11rem]
            "
          >
            {item.content}
          </span>
        ) : (
          <img
            key={i}
            src={(item as ImageItem).src}
            alt={(item as ImageItem).alt}
            className="
              shrink-0 rounded-xl object-cover
              h-10 w-10
              sm:h-12 sm:w-12
              md:h-16 md:w-16
              lg:h-20 lg:w-20
              xl:h-24 xl:w-24
              2xl:h-28 2xl:w-28
            "
          />
        )
      )}
    </div>
  );
}

// ── MarqueeText ───────────────────────────────────────────────────────────────
export default function MarqueeText() {
  return (
    <div className="my-6 sm:my-8 md:my-10 w-full overflow-hidden bg-white py-4 sm:py-5 md:py-6">
      <div className="marquee-track flex w-max items-center">
        {/* Two identical copies so the loop is seamless */}
        <MarqueeTrack />
        <MarqueeTrack />
      </div>

      <style>{`
        .marquee-track {
          animation: marquee-left 40s linear infinite;
        }

        /* Slow down slightly on small screens so text remains readable */
        @media (max-width: 639px) {
          .marquee-track { animation-duration: 25s; }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .marquee-track { animation-duration: 35s; }
        }
        @media (min-width: 1024px) {
          .marquee-track { animation-duration: 55s; }
        }

        @keyframes marquee-left {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        /* Respect reduced-motion preference */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation-play-state: paused; }
        }
      `}</style>
    </div>
  );
}