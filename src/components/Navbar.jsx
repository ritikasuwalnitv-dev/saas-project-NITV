import React from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full bg-navbar gap-[8px] py-[8px]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 md:gap-10 lg:gap-20">
        {/* Logo */}
        <h1 className="text-xl font-baloo font-bold text-[30px]">
          <span className=" text-white font-baloo">NITV</span>
          <span className="text-brand">PLUS</span>
        </h1>

        {/* Nav links */}
        <nav className="hidden md:flex font-inter font-semibold text-[15px] text-white gap-4 lg:gap-10">
          <a href="#" className="hover:text-brand transition">
            Why NITV+
          </a>
          <a href="#" className="hover:text-brand transition">
            Use Cases
          </a>
          <a href="#" className="hover:text-brand transition">
            Pricing
          </a>
          <a href="#" className="hover:text-brand transition">
            Resources
          </a>
          <a href="#" className="hover:text-brand transition">
            Company
          </a>
        </nav>

        {/* Right side CTA */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5">
          <button className="bg-brand  font-inter font-semibold text-[14px] text-white  px-4 py-2 lg:px-5 lg:py-2.5 rounded-[12px] shadow-[inset_0_0.5px_0_rgba(255,255,255,0.32),inset_0_-1.5px_0_rgba(255,255,255,0.32)]">
            REQUEST A DEMO
          </button>
          <span className="font-inter font-semibold text-[14px] text-white text-sm">
            EN
          </span>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden text-white hover:text-brand transition">
          <Menu size={28} />
        </div>
      </div>
    </header>
  );
}
