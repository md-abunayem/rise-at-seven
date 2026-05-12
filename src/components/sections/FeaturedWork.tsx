import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { featureWorkData } from "../../data/data";
import FeatureCard from "./FeatureCard";
import { ArrowUpRight } from "lucide-react";

const FeaturedWork = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  // On mobile the two panels are stacked so we give each a smaller travel range
  const textY = useTransform(smoothProgress, [0, 1], ["0%", "-70%"]);
  const imageY = useTransform(smoothProgress, [0, 1], ["0%", "-90%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[600vh] sm:min-h-[700vh] lg:min-h-[800vh] bg-white"
    >
      <div className="sticky top-0 h-screen p-2 sm:p-4 lg:p-10">
        <div className="flex h-full flex-col lg:flex-row overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-black/95">
          <div
            className="flex flex-col w-full lg:w-[52%] lg:h-full
                          h-[42%] sm:h-[45%]
                          p-4 sm:p-6 lg:p-12 lg:py-35 shrink-0"
          >
            <p className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-tighter text-white">
              Featured Work
            </p>

            <div className="mt-4 sm:mt-6 lg:mt-14 flex-1 min-h-0 overflow-hidden">
              <motion.div
                style={{ y: textY }}
                className="space-y-1 sm:space-y-2 will-change-transform"
              >
                {featureWorkData.texts.map((text: string, index: number) => (
                  <p
                    key={index}
                    className="
                      text-2xl sm:text-4xl md:text-5xl lg:text-8xl xl:text-7xl
                      leading-[0.92] tracking-tighter text-white font-semibold
                    "
                  >
                    {text}
                  </p>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── RIGHT — image cards ── */}
          <div
            className="w-full lg:w-[48%] lg:h-full
                       h-[58%] sm:h-[55%]
                       p-3 sm:p-5 lg:p-8 min-h-0"
          >
            <div className="h-full overflow-hidden relative">
              <motion.div
                style={{ y: imageY }}
                className="flex flex-col gap-3 sm:gap-4 lg:gap-6 will-change-transform"
              >
                {featureWorkData.images.map((image: string, index: number) => (
                  <FeatureCard
                    key={index}
                    image={image}
                    buttonText={featureWorkData.buttonText?.[index]}
                    hoverText={featureWorkData.hoverText?.[index]}
                    hoverBg={featureWorkData.hoverBg?.[index]}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full max-w-full flex justify-center">
          <button className="bg-neutral-300 flex items-center justify-center gap-2 border-neutral-500 shadow-blue-300 px-8 py-2 mt-8 text-lg font-semibold rounded-full">
            Explore Our Work
            <ArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
