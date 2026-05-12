import { useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

const TEXT = "Ready to Rise at Seven?";

const LAND_DURATION = 0.10;
const STAGGER = 0.024;

interface ArcCharProps {
  char: string;
  landStart: number;
  landEnd: number;
  smoothProgress: MotionValue<number>;
}

function ArcChar({ char, landStart, landEnd, smoothProgress }: ArcCharProps) {
  const localP = useTransform(
    smoothProgress,
    [landStart, landEnd],
    [0, 1],
    { clamp: true }
  );

  const y = useTransform(localP, [0, 1], [-240, 0]);

  const rotate = useTransform(localP, [0, 1], [34, 0]);

  const scale = useTransform(localP, [0, 1], [0.68, 1]);

  const opacity = useTransform(localP, [0, 0.22], [0, 1]);

  return (
    <motion.span
      style={{
        y,
        rotate,
        scale,
        opacity,
        display: "inline-block",
        transformOrigin: "bottom center",
      }}
      className="will-change-transform"
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export default function ReadyToRiseWaveSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.0005,
  });

  const chars = useMemo(() => TEXT.split(""), []);

  const x = useTransform(smoothProgress, [0, 1], ["100vw", "-100vw"]);

  const sectionOpacity = useTransform(scrollYProgress, [0.88, 1], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <div className="absolute inset-0 flex items-center justify-start overflow-visible">
          <motion.h2
            style={{
              x,
              opacity: sectionOpacity,
              fontSize: "clamp(3.2rem, 11vw, 12rem)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              fontWeight: 700,
            }}
            className="
              select-none whitespace-nowrap
              text-[#0d0d0d] will-change-transform
            "
          >
            {chars.map((char, i) => {
              const landStart = i * STAGGER;
              const landEnd   = landStart + LAND_DURATION;

              return (
                <ArcChar
                  key={i}
                  char={char}
                  landStart={landStart}
                  landEnd={landEnd}
                  smoothProgress={smoothProgress}
                />
              );
            })}
          </motion.h2>
        </div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}