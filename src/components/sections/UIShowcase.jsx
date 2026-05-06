import React from "react";
import Dashboard from "../../assets/UIShowcase/Dashboard.png";
import Apps from "../../assets/UIShowcase/Apps.png";
import { CircleCheck } from "lucide-react";

const UIShowcase = () => {
  return (
    <section className="w-full bg-white ">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 flex flex-col gap-20 lg:gap-2">
        {/* ROW 1 */}
        <div className="flex flex-col lg:flex-row items-center lg:gap-8  sm:gap-0  ">
          {/* IMAGE */}
          <div className="pt-6 lg:pt-10">
            <img
              src={Dashboard}
              alt="Dashboard"
              className="block rounded-[24px] object-cover w-full"
            />
          </div>

          {/* TEXT */}
          <div className="w-full lg:w-[590px] items-start lg:items-start text-center lg:text-left mt-6 lg:mt-0">
            <p className=" text-[#9096a0] font-inter font-semibold lg:text-[14px] text-[12px]">
              POWERFUL ADMIN DASHBOARD
            </p>

            <h2
              className="mt-3 font-inter 
text-[24px] sm:text-[28px] md:text-[35px] lg:text-[36px] 
font-bold text-[#282828] leading-tight"
            >
              Full Control at Your <br /> Fingertips
            </h2>

            <p className="font-inter mt-4 lg:text-[15 px]  md:text-[18px] text-[15px] text-gray-600 leading-7">
              Manage your entire streaming platform from one intelligent
              dashboard - users, content, channels, monetization, analytics, and
              more. Built for operators who demand precision and control.
            </p>

            {/* LIST */}
            <ul className="mt-6 space-y-3 text-[14px] text-gray-600 font-inter">
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <CircleCheck className="w-5 h-5 fill-brand text-white" />
                Content & Channel Management
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <CircleCheck className="w-5 h-5 fill-brand text-white" />
                User & Subscription Management
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <CircleCheck className="w-5 h-5 fill-brand text-white" />
                Revenue & Monetization Controls
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <CircleCheck className="w-5 h-5 fill-brand text-white" />
                Real-time Analytics & Reporting
              </li>
            </ul>
          </div>
        </div>
        {/* Second row */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-0 lg:gap-8 ">
          {/* IMAGE (smaller) */}
          <div className="w-full lg:w-[50%]">
            <img
              src={Apps}
              alt="Apps"
              className="block rounded-[24px] object-cover w-full"
            />
          </div>

          {/* TEXT (bigger) */}

          <div className="w-full lg:w-[50%] lg:pl-10 pl:0 items-start lg:items-start text-center lg:text-left">
            <p className="text-[#9096a0] font-inter font-semibold lg:text-[14px] text-[12px]">
              CONTENT & CHANNEL MANAGEMENT
            </p>

            <h2 className="mt-3 font-inter text-[28px] md:text-[36px] font-bold text-[#282828] leading-tight">
              Beautiful Apps. <br />
              Every Screen. Every Device.
            </h2>

            <p className="mt-4 text-[16px] font-inter text-gray-600 leading-7 mb-10">
              Deliver a world-class viewing experience across all devices — from{" "}
              <br />
              mobile to big screen. Fully branded, fully yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIShowcase;
