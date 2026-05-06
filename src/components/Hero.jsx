import React from 'react'
import heroBg from "../assets/Hero-Image.png"


export default function Hero() {
  return (
      <section
      className="w-full aspect-[1920/756] min-h-[400px] md:min-h-[500px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4 md:px-8">

        {/* Top Badge */}
        <p className="font-inter font-bold text-[10px] md:text-xs tracking-widest text-gray-300 mb-4 border border-white/20 px-3 py-1 rounded-full">
          NEXT-GEN STREAMING PLATFORM
        </p>

        {/* Heading */}
        <h1 className="text-white font-semibold leading-tight max-w-4xl
          text-[22px] sm:text-[28px] md:text-[36px] lg:text-[44px]">

          Launch Your Own{" "}
          <span className="text-brand">
            Streaming & Media Platform
          </span>{" "}
          in Days — Linear TV,<br/>Video, Audio & More
        </h1>

        {/* Subtext */}
        <p className="text-gray-300 mt-4 max-w-2xl
          text-[12px] sm:text-[14px] md:text-[16px]">
          White-label streaming platform with web, apps, monetization, and analytics — all in one SaaS.
          Cloud or On-Premise, your choice. Engineered for stratospheric precision and global scale.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">

          <button className="bg-brand text-white font-semibold text-sm px-5 py-2.5 rounded-lg">
            Request a Demo
          </button>

          <button className="bg-white/20 text-white font-semibold text-sm px-5 py-2.5 rounded-lg backdrop-blur">
            View Pricing
          </button>

        </div>
      </div>
    </section>

  )
}

