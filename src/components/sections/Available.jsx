import React from "react";

import partner1 from "../../assets/availables/1.png";
import partner2 from "../../assets/availables/2.png";
import partner3 from "../../assets/availables/3.png";
import partner4 from "../../assets/availables/4.png";
import partner5 from "../../assets/availables/5.png";
import partner6 from "../../assets/availables/6.png";
import partner7 from "../../assets/availables/7.png";
import partner8 from "../../assets/availables/8.png";

const partners = [
     { src: partner2, alt: "Airbus" },
      { src: partner3, alt: "Hays" },
      { src: partner4, alt: "Medwing" },
        { src: partner5, alt: "Envato" },
         { src: partner6, alt: "Liquid Web" },
         { src: partner7, alt: "Audiocodes" },
 
  { src: partner8, alt: "Sennheiser"},
   { src: partner1, alt: "Crowdstrike" },
 
 
  

 
  
];
export default function Available() {
  return (
    <section className="py-10 border border-1 bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[32px] font-bold text-[#0B1C30]">
            Available on
          </h2>
        </div>

       <div className="flex items-center justify-center gap-8 flex-wrap md:flex-nowrap">
  {partners.map((p, i) => (
    <div
      key={i}
      className="flex justify-center items-center h-[20px]"
    >
      <img
        src={p.src}
        alt={p.alt}
        className="h-full w-auto object-contain"
      />
    </div>
  ))}
</div>
      </div>
    </section>
  );
}
