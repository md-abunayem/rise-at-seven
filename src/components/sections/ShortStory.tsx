import { ArrowUpRight } from "lucide-react";

const ShortStory = () => {
  return (
    <div className="flex w-full px-6 py-10 gap-6 my-16 flex-col md:flex-row">
      {/* Mobile: heading + image first, Desktop: right part */}
      <div className="flex flex-col items-start gap-2 w-full md:hidden">
        <p className="text-5xl font-semibold leading-tight">Driving Demand</p>
        <div className="flex items-center gap-2">
          <p className="text-5xl font-semibold leading-tight">& Discovery</p>
          <img
            src="https://media.gettyimages.com/id/1350647942/photo/man-on-protest-holding-empty-poster.jpg?s=612x612&w=gi&k=20&c=6TeWj3kVQIwbGjN6lRYG-gQeZD5LLj_0AXPf3YFyxTM="
            alt="image"
            className="h-16 w-16 rounded-2xl object-cover"
          />
        </div>
      </div>

      {/* Mobile: description */}
      <div className="flex flex-col font-bold w-full text-xl md:hidden">
        <p>A global team of search-first content marketers</p>
        <p>engineering semantic relevancy & category</p>
        <p>signals for both the internet and people</p>
      </div>

      {/* Mobile: buttons */}
      <div className="flex flex-col gap-3 w-full md:hidden">
        <button className="group bg-white text-black px-6 py-4 rounded-2xl shadow-sm hover:bg-gray-100 transition flex items-center justify-center gap-2 font-semibold text-lg w-full">
          <span className="relative overflow-hidden h-5 leading-5 inline-block">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              Our Story
            </span>
            <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              Our Story
            </span>
          </span>
          <ArrowUpRight className="h-4 w-4" />
        </button>

        <button className="group text-black px-6 py-4 rounded-2xl transition flex items-center justify-center gap-2 font-semibold text-lg w-full">
          <span className="relative overflow-hidden h-5 leading-5 inline-block">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              Our Services
            </span>
            <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              Our Services
            </span>
          </span>
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      {/* Desktop layout (hidden on mobile) */}
      {/* Left: description */}
      <div className="hidden md:flex flex-col font-bold w-[55%] text-2xl pl-4 justify-center">
        <p>A global team of search-first content marketers</p>
        <p>engineering semantic relevancy & category</p>
        <p>signals for both the internet and people</p>
      </div>

      {/* Right: heading + buttons */}
      <div className="hidden md:flex w-[45%] flex-col items-start justify-center gap-4">
        <div className="flex flex-col items-start gap-2 justify-center">
          <p className="text-7xl font-semibold">Driving Demands &</p>
          <div className="flex items-center gap-2">
            <p className="text-7xl font-semibold">Discovery</p>
            <img
              src="https://media.gettyimages.com/id/1350647942/photo/man-on-protest-holding-empty-poster.jpg?s=612x612&w=gi&k=20&c=6TeWj3kVQIwbGjN6lRYG-gQeZD5LLj_0AXPf3YFyxTM="
              alt="image"
              className="h-20 w-20 rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="flex gap-4 font-semibold text-lg">
          <button className="group bg-white/15 text-black px-4 py-2 rounded-2xl shadow-lg hover:bg-gray-100 transition flex items-center gap-2 overflow-hidden relative h-12">
            <span className="relative overflow-hidden h-5 leading-5">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Our Story
              </span>
              <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Our Story
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </button>

          <button className="group text-black px-4 py-2 rounded-2xl transition flex items-center gap-2 overflow-hidden relative h-12">
            <span className="relative overflow-hidden h-5 leading-5 inline-block">
              <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Our Services
              </span>
              <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
                Our Services
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortStory;