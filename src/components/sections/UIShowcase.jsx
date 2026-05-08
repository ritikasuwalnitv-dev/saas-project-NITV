import React from "react";
import Dashboard from "../../assets/UIShowcase/Dashboard.png";
import Apps from "../../assets/UIShowcase/Apps.png";
import { CircleCheck } from "lucide-react";

const UIShowcase = () => {
  return (
    <section className="w-full bg-[#ffffff] py-10 ">
     <div className="mx-auto max-w-[1200px] px-5 md:px-6 flex flex-col gap-10 lg:gap-2">
       
       {/* ROW 1 */}
<div className="flex flex-col lg:flex-row items-center lg:gap-4">
  
  {/* MOBILE TITLE */}
  <div className="block lg:hidden w-full text-center mb-6">
    <p className="text-[#9096a0] font-inter font-semibold text-[12px]">
      POWERFUL ADMIN DASHBOARD
    </p>

<h2
  className="mt-3 font-inter  
  text-[28px] 
  font-bold text-[#282828] leading-tight"
>
  Full Control at Your <br /> Fingertips
</h2>
  </div>

  {/* IMAGE */}
  <div className="pt-2 lg:pt-10">
    <img
      src={Dashboard}
      alt="Dashboard"
      className="block rounded-[24px] object-cover w-full"
    />
  </div>

  {/* TEXT */}
  <div className="w-full lg:w-[590px] mt-0 lg:mt-0 text-center lg:text-left">

    {/* DESKTOP TITLE */}
    <div className="hidden lg:block">
      <p className="text-[#9096a0] font-inter font-semibold px-6 lg:text-[14px] text-[12px]">
        POWERFUL ADMIN DASHBOARD
      </p>
<h2 className="mt-3 px-6 font-inter text-[36px] font-bold text-[#282828] leading-tight">
  Full Control at Your <br /> Fingertips
</h2>
       
  
    </div>

    <p className="font-inter md:mt-4 px-6 mt-0 text-[15px] md:text-[18px] text-gray-600 leading-7">
      Manage your entire streaming platform from one intelligent
      dashboard - users, content, channels, monetization, analytics, and
      more. Built for operators who demand precision and control.
    </p>
 
           <ul
  className="
    mt-6
    px-6 
    space-y-3
    text-[14px]
    text-gray-600
    font-inter

    w-fit
    mx-auto lg:mx-0
  "
>
              <li className="flex items-center justify-start gap-2">
                <CircleCheck className="w-5 h-5 fill-brand text-white" />
                Content & Channel Management
              </li>
              <li className="flex items-center justify-start gap-2">
                <CircleCheck className="w-5 h-5 fill-brand text-white" />
                User & Subscription Management
              </li>
              <li className="flex items-center justify-start gap-2">
                <CircleCheck className="w-5 h-5 fill-brand text-white" />
                Revenue & Monetization Controls
              </li>
              <li className="flex items-center justify-start gap-2">
                <CircleCheck className="w-5 h-5 fill-brand text-white" />
                Real-time Analytics & Reporting
              </li>
            </ul>
    
  </div>
</div>
        {/* Second row */}
        {/* Second row */}
<div className="flex flex-col lg:flex-row-reverse items-center gap-4 lg:gap-4">

  {/* MOBILE TITLE */}
  <div className="block lg:hidden w-full text-center mb-3">
    <p className="text-[#9096a0] font-inter font-semibold text-[12px]">
      CONTENT & CHANNEL MANAGEMENT
    </p>

    <h2 className="mt-3 font-inter text-[28px] font-bold text-[#282828] leading-tight">
      Beautiful Apps. <br />
      Every Screen. Every Device.
    </h2>
  </div>

  {/* IMAGE */}
  <div className="pt-2 lg:pt-10">
    <img
      src={Apps}
      alt="Apps"
      className="block rounded-[24px] object-cover w-full"
    />
  </div>

  {/* TEXT */}
  <div className="w-full lg:w-[50%] lg:pl-10 text-center lg:text-left mt-2 lg:mt-0">

    {/* DESKTOP TITLE */}
    <div className="hidden lg:block">
      <p className="text-[#9096a0] font-inter font-semibold lg:text-[14px] text-[12px]">
        CONTENT & CHANNEL MANAGEMENT
      </p>

      <h2 className="mt-3 font-inter text-[28px] md:text-[36px] font-bold text-[#282828] leading-tight">
        Beautiful Apps. <br />
        Every Screen. Every Device.
      </h2>
    </div>

    <p className="px-6 mt-0  md:px-0 md:mt-4 text-[16px] font-inter text-gray-600 leading-7 mb-4 lg:mb-10">
  Deliver a world-class viewing experience across all devices — from
  mobile to big screen. Fully branded, fully yours.
</p>
  </div>
</div>
      </div>
    </section>
  );
};

export default UIShowcase;
