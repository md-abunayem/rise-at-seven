import { useState, useCallback, useRef, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { GoGraph } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

interface FeatureCardProps {
  image: string;
  buttonText?: string;
  hoverText?: string;
  hoverBg?: string;
}

const FeatureCard = ({
  image,
  buttonText,
  hoverText,
  hoverBg = "#C8602A",
}: FeatureCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Detect touch device — disable custom cursor & hover on touch screens
  useEffect(() => {
    setIsTouchDevice(
      window.matchMedia("(hover: none) and (pointer: coarse)").matches
    );
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (isTouchDevice) return;
      const rect = e.currentTarget.getBoundingClientRect();
      setCursor({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    [isTouchDevice]
  );

  const handleMouseEnter = useCallback(() => {
    if (!isTouchDevice) setHovered(true);
  }, [isTouchDevice]);

  const handleMouseLeave = useCallback(() => {
    if (!isTouchDevice) setHovered(false);
  }, [isTouchDevice]);

  return (
    <div
      ref={cardRef}
      className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden"
      style={{ cursor: isTouchDevice ? "auto" : "none" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="relative aspect-4/3 w-full">

        {/* Photo */}
        <img
          src={image}
          alt="Featured Work"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />

        {/* Hover colour + text overlay — desktop only */}
        <AnimatePresence>
          {hovered && hoverText && (
            <motion.div
              className="absolute inset-0 flex items-start p-5 sm:p-6 lg:p-8"
              style={{ backgroundColor: hoverBg }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
            >
              <p className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-semibold leading-[1.15] tracking-tight text-black max-w-[90%]">
                {hoverText}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button — always visible, above overlay */}
        {buttonText && (
          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20">
            <button className="inline-flex items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl bg-neutral-500 border-neutral-500 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-md whitespace-nowrap">
              <IoIosSearch size={14} className="sm:hidden" />
              <IoIosSearch size={16} className="hidden sm:block" />
              <span>{buttonText}</span>
              <GoGraph size={14} className="sm:hidden" />
              <GoGraph size={16} className="hidden sm:block" />
            </button>
          </div>
        )}
      </div>

      {/* Custom circular cursor — desktop / mouse only */}
      <AnimatePresence>
        {hovered && !isTouchDevice && (
          <motion.div
            className="pointer-events-none absolute z-30 flex items-center justify-center rounded-full bg-[#b5f0e0] text-black"
            style={{
              width: 88,
              height: 88,
              top: cursor.y,
              left: cursor.x,
              translateX: "-50%",
              translateY: "-50%",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 22, mass: 0.5 }}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeatureCard;