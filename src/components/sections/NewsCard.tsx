import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { RiTimerLine } from "react-icons/ri";

interface NewsCardProps {
  profile: string;
  url: string;
  author: string;
  time: string;
  title: string;
}

const NewsCard = ({ profile, url, author, time, title }: NewsCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div>
      <div
        className="relative overflow-hidden rounded-2xl cursor-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={url}
          alt={title}
          className={`h-[70vh] w-full object-cover transition-all duration-500 ease-out ${
            isHovering ? "blur-xl" : "blur-0"
          }`}
        />

        {/* soft warm overlay like your screenshot */}
        <div
          className={`pointer-events-none absolute inset-0 bg-[#8a5c3d]/20 transition-opacity duration-500 ease-out ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* cursor bubble */}
        {isHovering && (
          <div
            className="pointer-events-none absolute z-20 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#B2F6E3] shadow-lg"
            style={{
              left: cursorPos.x,
              top: cursorPos.y,
            }}
          >
            <ArrowUpRight className="h-10 w-10 text-black" />
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex gap-2 text-lg font-semibold text-neutral-500">
          <div className="flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 shadow-sm">
            <img
              src={profile}
              alt={author}
              className="h-6 w-6 rounded-full object-cover"
            />
            <p className="text-lg font-medium">{author}</p>
          </div>

          <div className="mt-1 flex items-center rounded-2xl border border-neutral-200 px-3 py-1 text-sm text-neutral-400 shadow-sm">
            <RiTimerLine className="mr-2 inline-block h-5 w-5" />
            <p className="text-lg">{time}</p>
          </div>
        </div>

        <h3 className="mt-2 text-3xl font-bold tracking-tight">{title}</h3>
      </div>
    </div>
  );
};

export default NewsCard;