import { useState } from "react";
import {
  HeroBackgroundImage as backgroundImage,
  HeroBrands,
} from "../../data/data";
import Navbar from "../layout/NavBar";

export default function Hero({OpenMenu, setOpenMenu}:{OpenMenu:boolean, setOpenMenu: React.Dispatch<React.SetStateAction<boolean>> }) {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <div className="px-1 sm:px-2 md:px-3 bg-gray-100">
      <section
        className="relative overflow-hidden rounded-3xl shadow-2xl 
        h-[97vh] w-full text-white 
        flex flex-col justify-between items-center"
        style={{
          backgroundImage: `url(${backgroundImage.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* //Navbar */}
        <Navbar activeItem={activeItem} setActiveItem={setActiveItem} openMenu={OpenMenu} setOpenMenu={setOpenMenu}/>

        {/* Content */}
        <div
          className={`
    relative z-10 flex flex-col items-center justify-center text-center
    pt-10 sm:pt-16 md:pt-20
    transition-all duration-300
    ${activeItem ? "blur-sm scale-[0.99] opacity-80" : "blur-0 opacity-100"}
  `}
        >
          {/* Top badge text */}
          <div className="flex flex-col items-center justify-center text-xs sm:text-sm md:text-base">
            <p className="uppercase font-bold">#1 Most recommended</p>
            <p className="uppercase font-bold">content marketing agency</p>
          </div>

          {/* Brands */}
          <div className="flex flex-wrap items-center justify-center mt-6 gap-3 sm:gap-4 md:gap-6">
            {HeroBrands.map((brand, index) => (
              <img
                key={index}
                src={brand.url}
                alt="Brand Logo"
                className="h-6 sm:h-7 md:h-8 w-auto"
              />
            ))}
          </div>

          {/* Main text */}
          <div className="mt-4 sm:mt-4 md:mt-6 flex flex-col items-center justify-center text-center">
            {/* We Create */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight">
              We Create
            </h1>

            {/* Category Leaders row */}
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 mt-2 sm:mt-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
                Category
              </h1>

              <img
                src="https://images.pexels.com/photos/17423277/pexels-photo-17423277.jpeg"
                alt="Red Bull Image"
                className="h-14 w-14 sm:h-20 sm:w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 rounded-2xl object-cover"
              />

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold">
                Leaders
              </h1>
            </div>

            {/* Sub text */}
            <div className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold mt-4 sm:mt-6 px-2">
              on every searchable platform
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center sm:items-end text-xs sm:text-sm md:text-base w-[95vw] font-bold gap-4 pb-6 sm:pb-10 text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <p>Organic media planners creating, distributing & optimising</p>
            <p>search-first content for SEO, Social, PR, AI and LLM search</p>
          </div>

          <div className="flex flex-col items-center sm:items-end">
            <p>4 Global Offices serving</p>
            <p>UK, USA (New York) & EU</p>
          </div>
        </div>
      </section>
    </div>
  );
}
