import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full bg-navbar gap-[8px] py-[8px]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 md:gap-10 lg:gap-20">
        {/* Logo */}
        <h1 className="font-baloo font-bold text-[24px] sm:text-[30px]">
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
          <Button>REQUEST A DEMO</Button>
          <span className="font-inter font-semibold text-[14px] text-white text-sm">
            EN
          </span>
        </div>

        {/* Mobile menu */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔥 Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden bg-navbar px-4 pb-4 space-y-4 transition-all duration-300 ${isOpen ? "max-h-[500px]" : "max-h-0 overflow-hidden"}`}
        >
          {/* Nav Links */}
          <nav className="flex flex-col items-center text-center gap-4 text-white font-medium">
            <a href="#">Why NITV+</a>
            <a href="#">Use Cases</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
            <a href="#">Company</a>
          </nav>

          {/* Divider */}
          <div className="border-t border-white/20"></div>

          {/* CTA + Language */}
          <div className="flex flex-col gap-3">
            <Button>REQUEST A DEMO</Button>

            <span className="text-white text-sm">Language: EN</span>
          </div>
        </div>
      )}
    </header>
  );
}
