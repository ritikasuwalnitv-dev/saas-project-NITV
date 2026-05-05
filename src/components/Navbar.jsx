import React from "react";
export default function Navbar() {
  return (
    <header className="bg-navbar gap-[8px] py-[8px]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-[170px]">
        {/* Logo */}
        <h1 className="text-xl font-baloo font-bold text-[30px]">
          <span className=" text-white font-baloo">NITV</span>
          <span className="text-brand">PLUS</span>
        </h1>

        {/* Nav links */}
        <nav className="hidden md:flex font-inter font-semibold text-[15px] text-white gap-[40px]">
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
        <div className="hidden md:flex items-center gap-[20px]">
          
          <button className="bg-brand  font-inter font-semibold text-[14px] text-white px-[20px] py-[10px] rounded-[12px] shadow-[inset_0_0.5px_0_rgba(255,255,255,0.32),inset_0_-1.5px_0_rgba(255,255,255,0.32)]">
  REQUEST A DEMO
</button>
          <span className="font-inter font-semibold text-[14px] text-white text-sm">EN</span>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden text-white text-2xl">☰</div>
      </div>
    </header>
  );
}
