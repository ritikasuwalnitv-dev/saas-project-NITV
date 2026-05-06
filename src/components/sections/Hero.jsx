import React from "react";
import heroBg from "../../assets/Hero-Image.png";
import Button from "../ui/Button";
import { Circle } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="w-full aspect-[1920/756] min-h-[600px] md:min-h-[500px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-8">
        {/* Main vertical container (32px gap) */}
        <div className="flex flex-col items-center text-center gap-8">
          {/* Text block (24px gap) */}
          <div className="flex flex-col items-center gap-6 max-w-3xl md:max-w-6xl">
            {/* Badge */}
            <p
              className="
               font-inter font-bold
                 text-[10px] sm:text-[11px] md:text-xs
                   tracking-widest
                   text-gray-400
                   bg-navbar/50
                    border border-white/5
                   px-2 py-1 sm:px-3 sm:py-[5px]
                   rounded-full
                     flex items-center gap-1.5 sm:gap-2 "
            >
              <Circle
                size={6}
                className="fill-gray-400 stroke-none sm:w-[7px] sm:h-[7px]"
              />
              NEXT-GEN STREAMING PLATFORM
            </p>

            {/* Heading */}
            <h1
              className="
    text-white font-semibold
    leading-[110%] md:leading-[115%]
    text-[clamp(28px,4vw,61px)]
  "
            >
              {/* Line 1 */}
              <span className="block">
                Launch Your Own{" "}
                <span className="text-brand">Streaming & Media</span>
              </span>

              {/* Line 2 */}
              <span className="block">
                <span className="text-brand">Platform</span> in Days — Linear
                TV,
              </span>

              {/* Line 3 */}
              <span className="block">Video, Audio & More</span>
            </h1>

            {/* Subtext */}
            <p
              className="text-[#B9B9B9] font-inter font-medium max-w-4xl
  text-[12px] sm:text-[14px] md:text-[18px]
  leading-[20px] sm:leading-[24px] md:leading-[25px]"
            >
              White-label streaming platform with web, apps, monetization, and
              analytics - all in one SaaS.
              <span className="block mt-1">
                Cloud or On-Premise, your choice. Engineered for stratospheric
                precision and global scale.
              </span>
            </p>
          </div>

          {/* Buttons block (12px gap) */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button size="lg">Request a Demo</Button>
            <Button size="lg" variant="secondary">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
