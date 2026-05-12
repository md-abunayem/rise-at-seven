import { ArrowUpRight } from "lucide-react";
import NewsCard from "./NewsCard";
import { newsItems } from "../../data/data";

const NewsSection = () => {
  return (
    <div className="max-w-full px-6 py-16 lg:px-8">
      <div className="mt-20 mb-8 flex items-baseline justify-between">
        <div className="flex items-baseline gap-3 text-6xl font-semibold md:text-7xl lg:text-8xl">
          <p>What's</p>
          <img
            src="https://images.pexels.com/photos/29708253/pexels-photo-29708253.jpeg"
            alt="news"
            className="h-16 w-16 rounded-2xl object-cover md:h-20 md:w-20"
          />
          <p>New</p>
        </div>

        <button className="group flex items-center gap-2 rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold shadow-sm transition-colors duration-200 hover:bg-neutral-100 md:text-base">
          <span className="relative h-6 overflow-hidden">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              Explore More Thoughts
            </span>
            <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-full">
              Explore More Thoughts
            </span>
          </span>
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>

      <hr className="border-t border-neutral-400" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {newsItems.map((item, index) => (
          <NewsCard
            key={index}
            profile={item.profile}
            url={item.url}
            author={item.author}
            time={item.time}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;