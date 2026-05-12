// src/components/layout/Footer.tsx
import { ArrowUpRight } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { LuMusic2 } from "react-icons/lu";
import { footerLinks, socialLinks } from "../../data/data";

const socialIconMap: Record<string, React.ElementType> = {
  Facebook: FaFacebook,
  X: FaTwitter,
  LinkedIn: FaLinkedin,
  YouTube: FaYoutube,
  TikTok: LuMusic2,
  Instagram: FaInstagram,
};

export default function Footer() {
  return (
    <footer className="m-3 max-w-full rounded-2xl h-[90vh] bg-black text-white overflow-hidden">
      {/* Top section */}
      <div className="mx-auto max-w-screen-2xl px-8 pt-16 pb-4 md:px-12 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-0">
          {/* Newsletter + Socials — left block */}
          <div className="flex flex-col gap-10 lg:w-[38%] lg:pr-16">
            <div className="flex flex-col gap-6">
              <p className="text-2xl font-bold leading-snug md:text-3xl">
                Stay updated with Rise news
              </p>
              {/* Email input */}
              <div className="flex items-center justify-between rounded-full bg-[#1f1f1f] px-6 py-4">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 bg-transparent text-base text-neutral-400 placeholder-neutral-500 outline-none placeholder:text-2lg md:placeholder:text-2xl placeholder:font-bold"
                />
                <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#5eead4] text-black transition-transform duration-200 hover:scale-110">
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => {
                const Icon = socialIconMap[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="group flex items-center gap-1 rounded-full bg-white px-3 py-2 text-black transition-all duration-200 hover:bg-neutral-200"
                  >
                    {Icon && <Icon className="h-4 w-4 text-black" />}
                    <ArrowUpRight className="h-3 w-3 text-black" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Nav columns — right block with vertical dividers */}
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-1">
            {/* Col 1 */}
            <div className="flex flex-col gap-5 lg:flex-1 lg:border-l lg:border-neutral-800 lg:pl-12">
              {footerLinks.col1.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xl font-bold text-white transition-opacity duration-200 hover:opacity-50 md:text-2xl"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-5 lg:flex-1 lg:border-l lg:border-neutral-800 lg:pl-12">
              {footerLinks.col2.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xl font-bold text-white transition-opacity duration-200 hover:opacity-50 md:text-2xl"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-5 lg:flex-1 lg:border-l lg:border-neutral-800 lg:pl-12">
              {footerLinks.col3.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xl font-bold text-white transition-opacity duration-200 hover:opacity-50 md:text-2xl"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Big brand name */}
      <div className="mt-8 px-0 max-w-full flex items-center justify-center">
        <p
          className="select-none whitespace-nowrap font-semibold leading-none text-white"
          style={{
            fontSize: "clamp(7rem, 16vw, 16rem)",
            letterSpacing: "-0.01em",
          }}
        >
          Rise at Seven
          <span className="align-super text-[0.3em]">®</span>
        </p>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-screen-2xl px-8 py-6 md:px-12 lg:px-16">
        <div className="flex flex-col gap-3 text-xs text-white md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pb-16">
            <span>© 2025 Rise at Seven Ltd. All rights reserved</span>
            <span className="hidden md:inline text-neutral-700">•</span>
            <span>Company Number 11955187</span>
            <span className="hidden md:inline text-neutral-700">•</span>
            <span>VAT Registered GB 322402945</span>
            <span className="hidden md:inline text-neutral-700">•</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="hidden md:inline text-neutral-700">•</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms & conditions
            </a>
          </div>
          <span className="hover:text-white transition-colors duration-200 cursor-pointer pb-16">
            Website MadeByNayem
          </span>
        </div>
      </div>
    </footer>
  );
}
