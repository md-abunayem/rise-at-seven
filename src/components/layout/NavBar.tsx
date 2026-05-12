import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems, NavCardInfos } from "../../data/data";
import ServiceNavDetails from "../sections/ServiceNavDetails";
import NavItemCard from "../sections/NavItemCard";

export default function Navbar({activeItem, setActiveItem, openMenu, setOpenMenu}:{activeItem:string | null, setActiveItem: React.Dispatch<React.SetStateAction<string | null>>, openMenu: boolean, setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>}) {

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-screen-2xl px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-3xl font-bold tracking-tight text-white">
            Rise at Seven
          </a>

          {/* Desktop Nav */}
          <div
            className="relative hidden lg:flex lg:flex-col lg:items-center"
            onMouseLeave={() => setActiveItem(null)}
          >
            <nav className="flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onMouseEnter={() => {setActiveItem(item.label)}}
                  className="
                    rounded-2xl px-4 py-2
                    text-lg font-semibold text-white
                    transition-all duration-300
                    hover:bg-white hover:text-black
                  "
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Hover Cards */}
            <div
              className={`
                absolute top-16 transition-all duration-500
                ${
                  activeItem
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none -translate-y-4 opacity-0"
                }
              `}
            >
              {activeItem === "Services +" && <ServiceNavDetails />}
              {
                NavCardInfos.map((cardInfo) => cardInfo.label === activeItem && (
                  <div key={cardInfo.label} className="mt-4">
                    <NavItemCard
                      url={cardInfo.url}
                      label1={cardInfo.label1}
                      label2={cardInfo.label2}
                      label3={cardInfo.label3}
                      label4={cardInfo.label4}
                    />
                  </div>
                ))
              }
            </div>
          </div>

          <a
            href="#contact"
            className="
              hidden rounded-full bg-white px-5 py-3
              text-lg font-bold text-black
              transition-all duration-300
              hover:scale-105
              lg:inline-flex lg:items-center
            "
          >
            Get in touch
            <ArrowUpRight className="ml-1 h-5 w-5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpenMenu((prev) => !prev)}
            className="
              inline-flex items-center justify-center
              rounded-full border border-neutral-200
              p-2 text-white lg:hidden
            "
          >
            {openMenu ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {openMenu && (
          <div className="mt-4 border-t  border-neutral-5000 bg-neutra-200 text-white px-4 text-2xl py-4 lg:hidden h-screen w-screen">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white"
                  onClick={() => setOpenMenu(false)}
                >
                  {item.label}
                  <hr className="text-neutral-300 mr-16"/>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}