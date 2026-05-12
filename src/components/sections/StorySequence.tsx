import { useEffect, useRef, useState, useCallback } from "react";
import { cards } from "../../data/data";

const clamp = (v: number, min = 0, max = 1) => Math.max(min, Math.min(max, v));
const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

// ── Vertical stack resting offsets ───────────────────────────────────────────
const STACK_SCALE = [1, 0.97, 0.94];
const STACK_ROT = [-10, 0, 10];
const DEPART_ROT = [-55, -45, -35];
const DEPART_SCALE = 0.82;

// ── Departure scroll windows ─────────────────────────────────────────────────
const DEPARTURE_WINDOW = [
  { start: 0.0, end: 0.4 },
  { start: 0.3, end: 0.68 },
  { start: 0.58, end: 1.0 },
];

function useCardSize() {
  const getSize = useCallback(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    const maxW = Math.min(vw - 32, 600); // 16px padding each side
    const maxH = Math.min(vh * 0.82, 600); // at most 82% of viewport height
    const size = Math.min(maxW, maxH);

    return size;
  }, []);

  const [cardSize, setCardSize] = useState(() =>
    typeof window !== "undefined" ? getSize() : 600,
  );

  useEffect(() => {
    const onResize = () => setCardSize(getSize());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [getSize]);

  return cardSize;
}

export default function StorySequence() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const [progress, setProgress] = useState(0);

  const cardSize = useCardSize();
  const scale = cardSize / 600;

  const stackY = [0, 36 * scale, 72 * scale];
  const departY = -520 * scale;

  useEffect(() => {
    const updateTarget = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const scrollable = rect.height - vh;
      const scrolled = -rect.top;
      targetRef.current = clamp(scrolled / scrollable);
    };

    const animate = () => {
      updateTarget();
      progressRef.current += (targetRef.current - progressRef.current) * 0.08;
      setProgress(progressRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
    };
  }, []);

  const getCardStyle = (index: number): React.CSSProperties => {
    const win = DEPARTURE_WINDOW[index];

    const local = easeInOut(
      clamp((progress - win.start) / (win.end - win.start)),
    );

    const restY = stackY[index];
    const restScale = STACK_SCALE[index];
    const restRotate = STACK_ROT[index];
    const departRotate = DEPART_ROT[index];

    const y = restY + departY * local;
    const rotate = restRotate + (departRotate - restRotate) * local;
    const cardScale = restScale + (DEPART_SCALE - restScale) * local;
    const zIndex = [30, 20, 10][index];

    return {
      transform: `
        translate3d(0px, ${y}px, 0)
        rotate(${rotate}deg)
        scale(${cardScale})
      `,
      zIndex,
      willChange: "transform",
      opacity: 1 - local * 0.08,
      boxShadow: `
        0 ${6 + (1 - local) * 40}px
        ${20 + (1 - local) * 40}px
        rgba(0,0,0,${0.06 + (1 - local) * 0.16})
      `,
    };
  };

  // Responsive typography & spacing derived from the scale factor
  const imgW = Math.round(260 * scale);
  const imgH = Math.round(200 * scale);
  const titleSize = Math.max(20, Math.round(48 * scale)); // min 20px
  const bodySize = Math.max(12, Math.round(16 * scale)); // min 12px
  const bodyLineH = Math.max(18, Math.round(28 * scale));
  const paddingX = Math.round(40 * scale);
  const paddingTop = Math.round(32 * scale);
  const imgMt = Math.round(16 * scale);
  const textPt = Math.round(24 * scale);
  const bodyMt = Math.round(16 * scale);

  return (
    <div
      ref={sectionRef}
      className="relative bg-white my-20"
      style={{ height: "240vh" }}
    >
      {/* ── Sticky frame: perfectly centred ── */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="relative" style={{ width: cardSize, height: cardSize }}>
          {[...cards].reverse().map((card, ri) => {
            const index = cards.length - 1 - ri;
            return (
              <div
                key={index}
                style={{
                  ...getCardStyle(index),
                  width: cardSize,
                  height: cardSize,
                  position: "absolute",
                  left: 0,
                  top: 0,
                }}
                className={`rounded-3xl ${card.bg} transform-gpu overflow-hidden`}
              >
                {/* Label */}
                <div
                  className={`text-center font-semibold tracking-widest uppercase ${card.subColor}`}
                  style={{
                    paddingLeft: paddingX,
                    paddingRight: paddingX,
                    paddingTop: paddingTop,
                    fontSize: Math.max(9, Math.round(12 * scale)),
                  }}
                />

                {/* Photo */}
                <div
                  className="mx-auto overflow-hidden rounded-2xl"
                  style={{ width: imgW, height: imgH, marginTop: imgMt }}
                >
                  <img
                    src={`${card.image}?auto=compress&cs=tinysrgb&w=800`}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    draggable={false}
                  />
                </div>

                {/* Text */}
                <div
                  style={{
                    paddingLeft: paddingX,
                    paddingRight: paddingX,
                    paddingTop: textPt,
                    textAlign: "center",
                  }}
                >
                  <h2
                    className={`font-bold tracking-tight leading-tight ${card.textColor}`}
                    style={{ fontSize: titleSize }}
                  >
                    {card.title}
                  </h2>
                  <p
                    className={`${card.subColor} whitespace-pre-line`}
                    style={{
                      marginTop: bodyMt,
                      fontSize: bodySize,
                      lineHeight: `${bodyLineH}px`,
                    }}
                  >
                    {card.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
