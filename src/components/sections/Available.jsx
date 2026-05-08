import React from "react";

import partner1 from "../../assets/availables/1.svg";
import partner2 from "../../assets/availables/2.svg";
import partner3 from "../../assets/availables/3.svg";
import partner4 from "../../assets/availables/4.svg";
import partner5 from "../../assets/availables/5.svg";
import partner6 from "../../assets/availables/6.svg";
import partner7 from "../../assets/availables/7.svg";
import partner8 from "../../assets/availables/8.svg";
import partner9 from "../../assets/availables/9.svg";

const partners = [
   { src: partner1, alt: "Crowdstrike" },
     { src: partner2, alt: "Airbus" },
      { src: partner3, alt: "Hays" },
      { src: partner4, alt: "Medwing" },
        { src: partner5, alt: "Envato" },
         { src: partner6, alt: "Liquid Web" },
         { src: partner7, alt: "Audiocodes" },
 
  { src: partner8, alt: "Sennheiser"},
  { src: partner9, alt: "Autotrader" },
  
 
 
  

 
  
];
export default function Available() {
  return (
    <section className="py-10 px-6 border border-1 bg-secondary">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-[32px] font-bold text-[#0B1C30]">
        Available on
      </h2>
    </div>

    <div
      className="
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
        lg:flex lg:flex-nowrap
        items-center justify-center
        gap-y-8 gap-x-10 md:gap-x-14 px-6
      "
    >
      {partners.map((p, i) => (
        <div
          key={i}
          className="
            flex justify-center items-center
          "
        >
          <img
            src={p.src}
            alt={p.alt}
            className="
              w-auto object-contain
              h-[28px] sm:h-[34px] md:h-[42px] lg:h-auto
              transition-transform duration-300 hover:scale-105
            "
          />
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
