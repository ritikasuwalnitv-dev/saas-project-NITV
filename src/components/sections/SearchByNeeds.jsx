import { ArrowRight } from "lucide-react";

import StreamIcon from "../../assets/ScaleByNeeds/1st.svg";
import OttIcon from "../../assets/ScaleByNeeds/2nd.svg";
import IptvIcon from "../../assets/ScaleByNeeds/3rd.svg";
import TvIcon from "../../assets/ScaleByNeeds/4th.svg";
import MonetizeIcon from "../../assets/ScaleByNeeds/5th.svg";
import EventIcon from "../../assets/ScaleByNeeds/6th.svg";
import TrainingIcon from "../../assets/ScaleByNeeds/7th.svg";
import MultiDeviceIcon from "../../assets/ScaleByNeeds/8th.svg";
import SecureIcon from "../../assets/ScaleByNeeds/9th.svg";

import StreamHoverIcon from "../../assets/ScaleByNeeds/h1.svg";
import OttHoverIcon from "../../assets/ScaleByNeeds/h2.svg";
import IptvHoverIcon from "../../assets/ScaleByNeeds/h3.svg";
import TvHoverIcon from "../../assets/ScaleByNeeds/h4.svg";
import MonetizeHoverIcon from "../../assets/ScaleByNeeds/h5.svg";
import EventHoverIcon from "../../assets/ScaleByNeeds/h6.svg";
import TrainingHoverIcon from "../../assets/ScaleByNeeds/h7.svg";
import MultiDeviceHoverIcon from "../../assets/ScaleByNeeds/h8.svg";
import SecureHoverIcon from "../../assets/ScaleByNeeds/h9.svg";

const needs = [
  {
    icon: StreamIcon,
    hoverIcon: StreamHoverIcon,
    title: "I want to stream videos and live broadcasts",
  },
  {
    icon: OttIcon,
    hoverIcon: OttHoverIcon,
    title: "I want to launch my own OTT platform",
  },
  {
    icon: IptvIcon,
    hoverIcon: IptvHoverIcon,
    title: "I want to deliver IPTV services to my subscribers",
  },
  {
    icon: TvIcon,
    hoverIcon: TvHoverIcon,
    title: "I want to run 24/7 linear TV channels",
  },
  {
    icon: MonetizeIcon,
    hoverIcon: MonetizeHoverIcon,
    title: "I want to sell and monetize my video / audio content",
  },
  {
    icon: EventIcon,
    hoverIcon: EventHoverIcon,
    title: "I want to host a high-quality online event",
  },
  {
    icon: TrainingIcon,
    hoverIcon: TrainingHoverIcon,
    title: "I want to use videos for internal training and education",
  },
  {
    icon: MultiDeviceIcon,
    hoverIcon: MultiDeviceHoverIcon,
    title: "I want to stream content across mobile, TV, and web",
  },
  {
    icon: SecureIcon,
    hoverIcon: SecureHoverIcon,
    title: "I want to manage and distribute media files securely",
  },
];

export default function SearchByNeeds() {
  return (
    <section className="bg-[#f5f5f5] px-6 md:py-24 py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* heading */}
        <div className="text-center">
          <p className="text-[#9096a0] font-inter font-semibold lg:text-[14px] text-[12px]">
            FIND YOUR PERFECT STREAMING SOLUTION
          </p>

          <h2 className="font-inter text-[28px] sm:text-[34px] md:text-[48px] font-extrabold leading-tight text-[#0B1C30] mt-2">
            Search by Needs
          </h2>

          <p className="mt-2 text-[#7B7B7B] text-[16px]">
            Tell us what you need — we'll show you exactly how NITV fits.
          </p>
        </div>

        {/* cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 justify-items-center gap-x-4 gap-y-20">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_55%)]" />
          {needs.map(({ icon, hoverIcon, title }, index) => (
            <div
              key={index}
              className="
  relative rounded-[9px] w-full max-w-[390px] h-[246px]
  flex flex-col items-center justify-center text-center
  px-4 transition-all duration-300 cursor-pointer group
  bg-[#2053C5] text-white
  hover:bg-white hover:text-[#2053C5]
"
            >
              {/* floating circle */}
              <div
                className="
    absolute -top-[60px] left-1/2 -translate-x-1/2
    w-[120px] h-[120px] rounded-full
    border-[8px] border-[#f4f4f4]
    flex items-center justify-center
    shadow-md
    transition-all duration-500 ease-out
    bg-white group-hover:bg-[#2053C5]
  "
              >
                <div className="relative w-[56px] h-[56px]">
                  {/* Normal black icon */}
                  <img
                    src={icon}
                    alt=""
                    className="
        absolute inset-0
        w-full h-full
        transition-opacity duration-300
        group-hover:opacity-0
      "
                  />

                  {/* White hover icon */}
                  <img
                    src={hoverIcon}
                    alt=""
                    className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </div>

              {/* title */}
              <h3
                className=" max-w-[310px] text-[20px] leading-[30px] font-semibold transition-all duration-300 group-hover:tracking-[0.2px]"
              >
                {title}
              </h3>

              {/* learn more */}
              <button
                className="
  absolute bottom-6 right-6
  inline-flex items-center gap-1
  text-[16px] font-medium
  transition-all duration-300
  text-white group-hover:text-[#2053C5]
"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-2" />
              </button>
            </div>
          ))}
        </div>
        <div className="mt-8  flex justify-center">
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
}
