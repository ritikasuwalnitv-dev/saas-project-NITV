import React from "react";

const stats = [
  { v: "100+", l: "Platforms Launched" },
  { v: "20+", l: "Countries" },
  { v: "99.9%", l: "Uptime SLA" },
  { v: "24/7", l: "Expert Support" },
];

export default function Pricing() {
  return (
    <section className="py-12 px-6 md:py-16 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        
        <div className="grid grid-cols-2 md:grid-cols-4 text-center font-medium">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`
                px-4 py-4
                ${i !== stats.length - 1 ? "md:border-r md:border-[#171717]/20" : ""}
              `}
            >
              {/* Value */}
              <div className="text-[28px] sm:text-[34px] md:text-60px] font-bold font-baloo text-brand">
                {s.v}
              </div>

              {/* Label */}
              <div className=" text-[12px] sm:text-[13px] md:text-[20px] text-[#171717]/80">
                {s.l}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}