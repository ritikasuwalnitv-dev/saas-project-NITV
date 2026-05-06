import {
  Tv,
  Radio,
  Cloud,
  GraduationCap,
  Briefcase,
  Megaphone,
  Building2,
  Rss,
  Shield,
} from "lucide-react";

const needs = [
  { icon: Tv, title: "I want to stream videos and live broadcasts" },
  { icon: Radio, title: "I want to launch my own OTT platform" },
  { icon: Cloud, title: "I want to deliver IPTV services to my subscribers" },
  { icon: GraduationCap, title: "I want to run 24/7 linear TV channels" },
  { icon: Briefcase, title: "I want to sell and monetize my video / audio content" },
  { icon: Megaphone, title: "I want to host a high-quality online event" },
  { icon: Building2, title: "I want to use videos for internal training and education" },
  { icon: Rss, title: "I want to stream content across mobile, TV, and web" },
  { icon: Shield, title: "I want to manage and distribute media files securely" },
];

export default function SearchByNeeds() {
  return (
    <section className="py-24 bg-[#969696]/10">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-[620px] text-center">
          <p className=" text-[#9096a0] font-inter font-semibold lg:text-[14px] text-[12px]">
            FIND YOUR PERFECT STREAMING SOLUTION{" "}
          </p>
          <h2 className="font-inter text-[28px] sm:text-[34px] md:text-[48px] font-extrabold leading-tight text-[#0B1C30]">
            Search by Needs
          </h2>

          <p className="mx-auto mt-2  mb-10 sm:mt-3 max-w-[500px] font-inter text-sm sm:text-base leading-6 sm:leading-7 text-[#17171799]">
            Tell us what you need — we'll show you exactly how NITV fits.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {needs.map(({ icon: Icon, title }, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-6 
      bg-gradient-to-br from-blue-600 to-blue-500 text-white
      border border-white/10
      transition-all duration-300 ease-out
      hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(37,99,235,0.35)]
      cursor-pointer"
            >
              {/* subtle glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 
      bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2),transparent_50%)]"
              />

              {/* icon */}
              <div
                className="relative w-12 h-12 flex items-center justify-center rounded-xl 
      bg-white/10 mb-5 transition-transform duration-300 group-hover:scale-110"
              >
                <Icon className="h-6 w-6" />
              </div>

              {/* title */}
              <h3 className="relative font-semibold text-[15px] leading-snug">
                {title}
              </h3>

              {/* link */}
              <span className="relative mt-5 inline-flex items-center gap-1 text-xs font-semibold opacity-80 group-hover:opacity-100">
                Learn More
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
