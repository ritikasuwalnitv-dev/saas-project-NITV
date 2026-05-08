import React from "react";

const steps = [
  {
    n: 1,
    title: " Requirement Analysis",
    desc: "Tell us about your business, content, & goals. Our team will map out the perfect streaming solution tailored to your needs.",
  },
  {
    n: 2,
    title: "Customize Your Platform",
    desc: "Brand it your way — apps, UI, features, monetization, and integrations configured exactly how you want it.",
  },
  {
    n: 3,
    title: "Launch & Monetize",
    desc: "Go live with confidence. Start streaming, grow your audience, and monetize your content from day one.",
  },
];

const Steps = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 gap-12 flex flex-col">
        {/* Heading */}
        <div className="mx-auto max-w-[620px] text-center">
          <h2 className="font-inter text-[28px] sm:text-[34px] md:text-[48px] font-extrabold leading-tight text-[#0B1C30]">
            Go Live in Three Steps
          </h2>

          <p className="mx-auto mt-2 sm:mt-3  font-inter text-sm sm:text-base leading-6 sm:leading-7 text-[#171717]/60">
            From concept to a fully launched streaming platform — faster than
            you think.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-10 mt-6">
          {/* SVG Lines (desktop only) */}
          <svg
            className="hidden md:block absolute top-4 left-[16%] right-[16%] w-[68%] h-24 pointer-events-none"
            viewBox="0 0 800 100"
            preserveAspectRatio="none"
            fill="none"
          >
            <defs>
              <marker
                className="text-brand"
                id="stepArrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" fill="currentColor" />
              </marker>
            </defs>

            <path
              d="M30 50 C140 -20, 240 -20, 350 50"
              className="text-brand/40"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              markerEnd="url(#stepArrow)"
            />
            <path
              d="M450 50 C560 120, 660 120, 770 50"
              className="text-brand/40"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              markerEnd="url(#stepArrow)"
            />
          </svg>

          {/* Step Cards */}
          {steps.map((s) => (
            <div key={s.n} className="relative text-center font-baloo">
              {/* Circle Number */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-blue-500 bg-blue-50 mx-auto">
                <span className="text-4xl font-bold text-blue-500">{s.n}</span>
              </div>

              {/* Title */}
              <h3 className="md:mt-12 font-inter font-bold text-[#171717] text-[19px]">
                {s.title}
              </h3>

              {/* Description */}
              <p className="mt-3 font-inter font-medium text-[14px] text-[#171717]/80 max-w-[280px] mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
