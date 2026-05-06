import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScroll = () => {
      const currentScrollY = window.scrollY;

      // hide/show
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      // add shadow/bg when scrolled
      setScrolled(currentScrollY > 10);

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScroll);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
    setShowNav(false);
  };

  return (
    <>
      {/* Spacer */}
      <div className="h-[80px]" />

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${showNav ? "translate-y-0" : "-translate-y-full"}
        ${
          scrolled
            ? "bg-navbar/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            : "bg-navbar"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <h1  className="font-baloo font-bold text-[26px] tracking-tight">
            <span className="text-white">NITV</span>
            <span className="text-brand">PLUS</span>
          </h1>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-white font-medium text-[15px]">
            {[
              { label: "Why NITV+", id: "why-nitv" },
              { label: "Use Cases", id: "use-cases" },
              { label: "Pricing", id: "pricing" },
              { label: "Resources", id: "resources" },
              { label: "Company", id: "company" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={handleNavClick}
                className="relative group transition"
              >
                {item.label}

                {/* underline animation */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-brand transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button>REQUEST A DEMO</Button>
            <span className="text-white/80 text-sm cursor-pointer hover:text-white">
              EN
            </span>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 py-1.5"
          }`}
        >
          <div className="bg-navbar/95 backdrop-blur-md px-4 pb-5 pt-2 space-y-4">
            <nav className="flex flex-col items-center gap-4 text-white font-medium">
              {[
                "why-nitv",
                "use-cases",
                "pricing",
                "resources",
                "company",
              ].map((id) => (
                <a key={id} href={`#${id}`} onClick={handleNavClick}>
                  {id.replace("-", " ").toUpperCase()}
                </a>
              ))}
            </nav>

            <div className="border-t border-white/10"></div>

            <div className="flex flex-col gap-3">
              <Button>REQUEST A DEMO</Button>
              <span className="text-white/80 text-sm text-center">
                Language: EN
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}