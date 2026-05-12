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
    <footer className="m-3 max-w-full rounded-2xl bg-black text-white overflow-hidden">
      {/* Top section */}
      <div className="mx-auto max-w-screen-2xl px-6 pt-12 pb-4 md:px-12 lg:px-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-0">

          {/* Newsletter + Socials — full width on mobile, left block on desktop */}
          <div className="flex flex-col gap-8 lg:w-[38%] lg:pr-16">
            <div className="flex flex-col gap-5">
              <p className="text-2xl font-bold leading-snug md:text-3xl">
                Stay updated with Rise news
              </p>
              {/* Email input */}
              <div className="flex items-center justify-between rounded-full bg-[#1f1f1f] px-5 py-3.5">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-1 bg-transparent text-sm text-neutral-400 placeholder-neutral-500 outline-none md:text-base placeholder:font-semibold"
                />
                <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5eead4] text-black transition-transform duration-200 hover:scale-110">
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

          {/* Nav columns — right block */}
          <div className="flex flex-col gap-8 lg:flex-row lg:flex-1">

            {/* Mobile: col1 + col2 side by side | Desktop: separate columns with dividers */}
            <div className="flex flex-row gap-0 lg:contents">

              {/* Col 1 */}
              <div className="flex flex-col gap-4 flex-1 border-l border-neutral-800 pl-5 lg:flex-1 lg:border-l lg:border-neutral-800 lg:pl-12">
                {footerLinks.col1.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-bold text-white transition-opacity duration-200 hover:opacity-50 md:text-2xl"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Col 2 */}
              <div className="flex flex-col gap-4 flex-1 border-l border-neutral-800 pl-5 lg:flex-1 lg:border-l lg:border-neutral-800 lg:pl-12">
                {footerLinks.col2.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-bold text-white transition-opacity duration-200 hover:opacity-50 md:text-2xl"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3 — full width row on mobile, column on desktop */}
            <div className="flex flex-col gap-4 border-l border-neutral-800 pl-5 lg:flex-1 lg:border-l lg:border-neutral-800 lg:pl-12">
              {footerLinks.col3.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-lg font-bold text-white transition-opacity duration-200 hover:opacity-50 md:text-2xl"
                >
                  {link.label}
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Big brand name */}
      <div className="mt-6 px-0 max-w-full flex items-center justify-center overflow-hidden">
        <p
          className="select-none whitespace-nowrap font-semibold leading-none text-white"
          style={{
            fontSize: "clamp(3.5rem, 16vw, 16rem)",
            letterSpacing: "-0.01em",
          }}
        >
          Rise at Seven
          <span className="align-super text-[0.3em]">®</span>
        </p>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-screen-2xl px-6 pt-4 pb-8 md:px-12 lg:px-16">
        <div className="flex flex-col gap-2 text-xs text-neutral-400 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>© 2025 Rise at Seven Ltd. All rights reserved</span>
            <span className="text-neutral-700">•</span>
            <span>Company Number 11955187</span>
            <span className="text-neutral-700">•</span>
            <span>VAT Registered GB 322402945</span>
            <span className="text-neutral-700">•</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms &amp; conditions
            </a>
            <span className="text-neutral-700">•</span>
          </div>
          <span className="hover:text-white transition-colors duration-200 cursor-pointer">
            Website MadeByShape
          </span>
        </div>
      </div>
    </footer>
  );
}