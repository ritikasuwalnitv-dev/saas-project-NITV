import React from "react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="company"  className="py-16 md:py-15 bg-[#969696]/10">
        
      <div className="mx-auto max-w-[1024px] max-h-[457px] px-4 md:px-6">
        <div className="relative overflow-hidden md:rounded-[48px] rounded-xl px-6 py-12 md:pt-16 md:py-16 text-center bg-gradient-to-r from-brand to-[#3450ef] text-white shadow-[0_20px_50px_rgba(37,99,235,0.25)]">
          {/* subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />

          {/* Content */}
          <div className="relative max-w-[750px] mx-auto">
            {/* Heading */}
            <h2 className="font-inter font-black text-[26px] sm:text-[36px] md:text-[54px] leading-none">
              Start Your Streaming Platform Today
            </h2>

            {/* Description */}
            <p className="mt-8 max-w-[800px] mx-auto font-inter text-[14px] sm:text-[18px] md:text-[22px] text-white/90 leading-7">
              Join 100+ ISPs, MSOs, Telcos, Broadcasters, Media Distributors,
              Content Creators, Enterprises and more who trust NITV for their
              streaming infrastructure.
            </p>

            {/* Button */}
            <button className="mt-12 inline-flex items-center gap-2 rounded-[12px] bg-white md:px-[48px] md:py-[20px]  px-[32px] py-[12px] font-inter font-black md:text-[20px] text-[12px] text-[#0F8CE9] transition hover:bg-white/90">
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
