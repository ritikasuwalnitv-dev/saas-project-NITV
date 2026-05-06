import { Star } from "lucide-react";
import bgImage from "../../assets/bg-testimonials.png";

const reviews = [
  {
    quote:
      "NITV transformed how we deliver content to our subscribers. The platform is rock-solid, scalable, and the support team is exceptional",
    name: "Head of Digital",
    role: " World On Demand",
  },
  {
    quote:
      "We launched our OTT platform in weeks, not months. NITV made it incredibly simple without compromising on features.",
    name: "CEO",
    role: "Music Nepal",
  },
  {
    quote:
      "NITV gave us the power to stream live darts events to fans worldwide with zero compromise on quality. The platform handles our live traffic seamlessly...",
    name: "Sales",
    role: "Darts Live Team",
  },
];

export default function Testimonials() {
  return (
    <section id="resources"
      className="py-20 bg-no-repeat bg-center "
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-[1200px] text-center mb-12">
          <h2 className="font-inter text-[28px] sm:text-[38px] md:text-[48px] font-extrabold leading-tight text-[#0B1C30]">
            Trusted by Streaming Leaders Worldwide
          </h2>

          <p className="mt-3  max-w-[460px] mx-auto text-sm sm:text-base text-[#17171799]">
            Powering 100+ platforms across 20+ countries
          </p>
        </div>

        {/* Cards (3 visible) */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl px-7 pt-8 pb-2 shadow-sm 
transition-all duration-300 
hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] 
hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-gray-700 text-[16px] font-inter font-medium leading-relaxed">
                "{r.quote}"
              </p>

              {/* Author */}
              <div className="mt-6 pt-4 pb-3 border-t border-gray-200">
                <div className="font-semibold text-gray-900 text-[15px] font-inter">
                  {r.name}
                </div>
                <div className="text-xs font-inter text-[#425466]">{r.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-center items-center mt-10">
          {/* Left */}
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition">
            ←
          </button>

          {/* Right */}
          <button className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
