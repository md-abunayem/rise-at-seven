import { PiSirenFill } from "react-icons/pi";

export default function AnnouncementBar({openMenu}:{openMenu: boolean}) {
  return (
    <div className={`overflow-hidden border-b border-neutral-200 bg-[#B2F6E3] my-2 rounded-2xl mx-3 ${openMenu ? 'hidden' : 'block'}`}>
      <div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap py-3  font-bold text-black text-center flex gap-2 items-center justify-center w-full">
        <PiSirenFill className="text-red-600"/>
        The Category Leaderboard — Live Now
      </div>
    </div>
  );
}