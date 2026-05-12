import { ArrowUpRight } from "lucide-react";

const ServiceNavDetails = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-[70vw] bg-white justify-between h-auto lg:h-[45vh] rounded-3xl overflow-hidden">
      {/* left */}
      <div className="text-black p-4 sm:p-6 lg:p-4 flex flex-col justify-center w-full lg:w-[67%] px-6 sm:px-8 lg:px-10">
        <div className="text-gray-500 text-base sm:text-lg font-semibold pb-4">
          Core Services
        </div>

        <div className="text-lg sm:text-xl lg:text-2xl font-semibold flex flex-col sm:flex-row justify-between gap-6 w-full">
          <div className="space-y-2">
            <p>Search & Growth Strategy</p>
            <p>Onsite SEO</p>
            <p>Content Experience</p>
            <p>B2B Marketing</p>
          </div>
          <div className="space-y-2">
            <p>Digital PR</p>
            <p>Social Media & Campaign</p>
            <p>Data & Insights</p>
            <p>Social/SEO Search</p>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="w-full lg:w-[33%] p-4 relative">
        <div
          className={`relative w-full h-62.5 sm:h-75 lg:h-full rounded-2xl overflow-hidden`}
        >
          <img
            src="https://images.pexels.com/photos/8349229/pexels-photo-8349229.jpeg"
            alt="image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white py-2 px-4 rounded-2xl transition duration-300 text-sm sm:text-base font-semibold flex items-center gap-2 shadow-lg whitespace-nowrap">
            View all services
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceNavDetails;
