import React from "react";
import { MessageSquare } from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";

const footerColumns = [
  {
    title: "Product",
    links: [
      "Features",
      "Pricing",
      "Client Apps",
      "Admin Dashboard",
      "Security & DRM",
    ],
  },
  {
    title: "Solutions",
    links: [
      "ISP & Broadband",
      "Telcos & MSOs",
      "Media & Broadcast",
      "ISP & Broadband",
      "Telcos & MSOs",
      "Media & Broadcast",
    ],
  },
  {
    title: "Resources",
    links: [
      "Documentation",
      "API Reference",
      "Blog",
      "Case Studies",
      "Support Center",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Career",
      "Partners",
      "Contact Us",
      "Privacy Policy",
      "Terms of Services",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#161C28] text-white">
      {/* CONTENT CONTAINER */}
      <div className="mx-auto px-6 w-full max-w-[1200px]  md:px-6 pt-10 pb-0">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1.9fr] lg:gap-16">
          {/* LEFT */}
          <div className="max-w-[280px] ">
            <div className="text-[34px] font-baloo font-extrabold  text-white">
              NITV<span className="text-[#3f79ff]">PLUS</span>
            </div>

            <p className="mt-3 max-w-[280px] font-inter text-[15px] leading-[26px] text-[#A6A6A6]">
              Next-Gen Streaming Platform. Cloud or On-Premise. Built for scale,
              engineered for precision.
            </p>

            {/* SOCIAL */}
            <div className="mt-6 flex items-center gap-3">
              {/* Twitter (X) */}{" "}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/30 text-white/70 transition-colors hover:border-white/50 hover:text-white"
                aria-label="Twitter"
              >
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  className="w-[20px] h-[20px]"
                  fill="currentColor"
                >
                  {" "}
                  <path d="M18.244 2H21.5l-7.19 8.21L22.5 22h-6.5l-5.08-6.59L4.5 22H1.244l7.7-8.8L1.5 2h6.65l4.58 6.06L18.244 2z" />{" "}
                </svg>{" "}
              </a>{" "}
              {/* YouTube */}{" "}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/30 text-white/70 transition-colors hover:border-white/50 hover:text-white"
                aria-label="YouTube"
              >
                {" "}
                <svg
                  viewBox="0 0 24 24"
                  className="w-[20px] h-[20px]"
                  fill="currentColor"
                >
                  {" "}
                  <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.8-1.6-.8-2-.9C17.9 2.7 12 2.7 12 2.7s-5.9 0-8.7.3c-.4.1-1.2.1-2 .9C.7 4.6.5 6.2.5 6.2S0 8 .5 9.8v4.4C0 16 .5 17.8.5 17.8s.2 1.6.8 2.3c.8.8 1.9.8 2.4.9 1.8.2 7.3.3 8.3.3s5.9 0 8.7-.3c.4-.1 1.2-.1 2-.9.6-.7.8-2.3.8-2.3s.5-1.8.5-3.6V9.8c-.5-1.8-.5-3.6-.5-3.6zM9.6 15.5V8.5l6.4 3.5-6.4 3.5z" />{" "}
                </svg>{" "}
              </a>{" "}
              {/* LinkedIn (unchanged) */}{" "}
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/30 text-white/70 transition-colors hover:border-white/50 hover:text-white"
                aria-label="LinkedIn"
              >
                {" "}
                <FaLinkedinIn size={20} />{" "}
              </a>{" "}
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="font-inter text-[18px] font-medium text-white">
                  {column.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {column.links.map((link, index) => (
                    <li key={`${link}-${index}`}>
                      <a
                        href="#"
                        className="font-inter text-[15px] leading-5 text-[#A6A6A6] transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

     

      <div className="w-full h-[2px] bg-gray-800 mt-10 relative">
{/* DESKTOP CHAT */}
<div className="hidden md:block fixed bottom-6 right-6 z-50">
  <div className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-5 py-3 rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.4)]">
    
    <MessageSquare className="w-5 h-5" />

    <span className="text-sm font-medium">
      Support Chat
    </span>

    <span className="bg-red-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
      1
    </span>

    <div className="bg-blue-300/40 w-7 h-7 flex items-center justify-center rounded-full">
      ✕
    </div>
  </div>
</div>

{/* MOBILE CHAT */}
<div className="md:hidden fixed bottom-16 right-8 z-50">
  <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 shadow-[0_10px_30px_rgba(37,99,235,0.4)]">
    
    <MessageSquare className="w-6 h-6 text-white" />

    {/* Red badge */}
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-6 h-6 flex items-center justify-center rounded-full">
      1
    </span>

  </div>
</div>
</div>

      {/* COPYRIGHT (CENTERED TO 1200px) */}
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6 py-4 flex items-center justify-between gap-4">
        {/* LEFT */}
        <p className="font-inter text-[14px] text-gray-400">
          © 2026 NITVPlus. Copyright and rights reserved
        </p>

        
      </div>

     
    </footer>
  );
};

export default Footer;
