import React from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Test() {
  return (
    <section className="w-full bg-transparent py-12">
      <div className="mx-auto w-full max-w-[1244px] px-4 md:px-6">
       
          <article className="w-[271px] h-[350px] bg-white rounded-[8px] border border-black/5 p-6 shadow-[0_12px_32px_rgba(67,96,160,0.06)] flex flex-col">
            {/* Icon container */}
            <div className="flex-shrink-0">
              <div className="h-[48px] w-[48px] flex items-center justify-center rounded-[6px] bg-[#4f7cf0] text-white">
                <MessageCircle size={24} />
              </div>
            </div>

            {/* Content container: title, description, CTA */}
            <div className="flex flex-col flex-grow mt-4">
              <h3 className="font-inter text-[16px] font-bold leading-[1.25] text-[#161616]">
                White-label Apps Across Every Screen
              </h3>

              <p className="mt-3 text-[13px] leading-5 text-[#6d7486]">
                Launch fully branded apps on Web, Android, iOS, Apple TV, Roku,
                Fire TV, WebOS, Tizen, Android TV & STB.
              </p>

              <a
                href="#"
                className="mt-auto inline-flex items-center gap-2 pt-4 font-inter text-[12px] font-bold text-[#4f7cf0] transition-opacity duration-200 hover:opacity-80"
              >
                Learn More
                <ArrowRight size={14} />
              </a>
            </div>
          </article>
        
      </div>
    </section>
  );
}
