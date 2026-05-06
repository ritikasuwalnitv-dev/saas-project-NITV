import React from "react";
import { ArrowRight } from "lucide-react";
import img1 from "../../assets/industries/image1.png";
import img2 from "../../assets/industries/image2.png";
import img3 from "../../assets/industries/image3.png";
import img4 from "../../assets/industries/image4.png";
import img5 from "../../assets/industries/image5.png";
import img6 from "../../assets/industries/image6.png";
import img7 from "../../assets/industries/image7.png";
import img8 from "../../assets/industries/image8.png";
import img9 from "../../assets/industries/image9.png";

const industries = [
  {
    title: "Solutions for the ISP & MSO",
    image: img1,
  },
  {
    title: "Solutions for Telecom Services",
    image: img2,
  },
  {
    title: "Solutions for Content Distributors",
    image: img3,
  },
  {
    title: "Solutions for Broadcasters (TV & Radio stations)",
    image: img4,
  },
  {
    title: "Solutions for Media Houses",
    image: img5,
  },
  {
    title: "Solutions for Sport & Entertainment",
    image: img6,
  },
  {
    title: "Solutions for Publications",
    image: img7,
  },
  {
    title: "Solutions for Enterprise & Corporate",
    image: img8,
  },
  {
    title: "Solutions for Government & Public Sector",
    image: img9,
  },
];

const Industries = () => {
  return (
    <section
      className="w-full bg-[#f8f8f8] py-16 md:py-16"
      data-node-id="1:4243"
    >
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-6 flex flex-col gap-6">
        {/* Heading */}
        <div className="mx-auto max-w-[620px] text-center">
          <h2 className="font-inter text-[28px] sm:text-[34px] md:text-[48px] font-extrabold leading-tight text-[#282828]">
            Built for Every Industry
          </h2>

          <p className="mx-auto mt-2 sm:mt-3 max-w-[460px] font-inter text-sm sm:text-base leading-6 sm:leading-7 text-[#17171799]">
            Powering streaming platforms across the world&apos;s most demanding
            industries
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 sm:mt-20 grid grid-cols-1 gap-y-12 sm:gap-y-20 sm:grid-cols-2 sm:gap-x-4 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.title}
              className="relative min-h-[160px] sm:h-[194px]  border border-black/5 bg-white px-4 sm:px-6 py-6 sm:py-0 shadow-[40px_0px_70px_rgba(121,121,121,0.05),-40px_100px_70px_rgba(121,121,121,0.05)]"
            >
              {/* Image */}
              <div
                className="absolute left-1/2 top-0 
          w-[80px] h-[80px] sm:w-[120px] sm:h-[120px]
          -translate-x-1/2 -translate-y-1/2 
          overflow-hidden rounded-full border-6 sm:border-8 border-[#f2f2f2] bg-white"
              >
                <img
                  src={industry.image}
                  alt={industry.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Text */}
              <div className="flex h-full items-center justify-center text-center pt-8 sm:pt-6">
                <p className="font-inter text-[16px] sm:text-[18px] font-bold leading-6 sm:leading-7 text-[#2053c5] max-w-[220px] sm:max-w-[240px] mx-auto">
                  {industry.title}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-6 sm:mt-0 flex justify-center">
          <a
            href="#"
            className="flex items-center gap-2 font-inter font-bold text-[#2053c5] text-sm sm:text-base transition-opacity duration-300 hover:opacity-90"
          >
            View More
            <ArrowRight size={18} className="sm:w-5 sm:h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
