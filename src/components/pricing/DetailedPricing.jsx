import React, { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$59",
    button: "Free Trial",
    outlined: false,
  },
  {
    name: "Starter",
    price: "$399",
    button: "Free Trial",
    outlined: false,
  },
  {
    name: "Business",
    price: "$999",
    button: "Free Trial",
    outlined: false,
  },
  {
    name: "Enterprise",
    price: "Price Upon Request",
    button: "Ask Sales",
    outlined: true,
  },
];

const sections = [
  {
    title: "Apps",
    rows: [
      ["Web App", [true, false, true, true]],
      ["Android Mob/Tab", [true, true, true, true]],
      ["iOS Mob/iPad", [false, true, true, true]],
      ["Android TV/STB App", [false, false, true, true]],
      ["Apple TV App", [false, false, false, true]],
      ["Amazon Fire TV App", [false, false, false, true]],
      ["LG TV App", [false, false, false, true]],
      ["Roku App", [false, false, false, true]],
      ["Published in your dev account", [false, false, true, true]],
    ],
  },

  {
    title: "CMS (Content Management System)",
    rows: [
      ["Live TV", ["-", "-", "-", true]],
      ["Movies", [true, true, true, true]],
      ["Series", [false, false, true, true]],
      ["Live Events", [false, true, true, true]],
      ["Music Videos", [false, true, true, true]],
      ["Audio / Songs", [false, true, true, true]],
      ["Audiobook", [false, true, true, true]],
      ["Podcast", [false, true, true, true]],
      ["Radio", [false, true, true, true]],
      ["Radio Shows", [false, true, true, true]],
      ["Live to VOD", [false, true, true, true]],
      ["Metadata Management", [false, true, true, true]],
      ["Categorization and Tagging", [false, true, true, true]],
      ["Bulk Import/Export Contents", [false, true, true, true]],
      ["Bulk Upload Assets", [false, true, true, true]],
      ["EPG Management", [false, true, true, true]],
    ],
  },

  {
    title: "MONITIZATION",
    rows: [
      ["Multiple Payment Gateways", ["-", "-", "-", true]],
      ["Subscription (SVOD)", [false, false, true, true]],
      ["Pay-Per-View (PPV) and TVOD", [false, false, true, true]],
      ["Ad Monetization (AVOD)", [false, false, true, true]],
      [
        "CSAI (Pre-Roll, Mid-Roll, and Post-Roll Ads)",
        [false, false, true, true],
      ],
      ["Image Ads", ["-", "-", true, true]],
      ["Video Ads", [false, false, true, true]],
      ["Audio Ads", ["-", "-", true, true]],
      ["Coupons & Promotions", ["-", "-", true, true]],
    ],
  },
];

const renderValue = (value) => {
  if (value === true) {
    return (
      <div className="mx-auto flex h-5 w-5 items-center justify-center rounded-full bg-[#2563EB]">
        <Check className="h-3 w-3 text-white" strokeWidth={3} />
      </div>
    );
  }

  if (value === "-") {
    return <Minus className="mx-auto h-4 w-4 text-[#71717A]" />;
  }

  return null;
};

export default function DetailedPricing() {
  const [billing, setBilling] = useState("yearly");

  return (
    <section className="bg-[#F7F8FC] py-6 font-inter">
      <div className="mx-auto max-w-[1280px] px-5 md:px-6">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-[32px] font-bold text-[#0B1C30]">
              Feature Table
            </h2>

            <p className="mt-3 text-[16px] text-[#6B7280]">
              Choose the perfect plan for your business needs
            </p>
          </div>

          {/* Toggle */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] font-semibold text-[#2563EB]">
              Save 20% on yearly plan!
            </span>

            <button
              onClick={() =>
                setBilling(billing === "yearly" ? "monthly" : "yearly")
              }
              className="flex items-center rounded-full border border-[#E4E4E7] bg-white p-[3px]"
            >
              <span
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                  billing === "yearly"
                    ? "bg-[#2563EB] text-white"
                    : "text-[#71717A]"
                }`}
              >
                Yearly
              </span>

              <span
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                  billing === "monthly"
                    ? "bg-[#2563EB] text-white"
                    : "text-[#71717A]"
                }`}
              >
                Monthly
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        {/* Pricing Cards */}
        <div className="mt-12 flex flex-wrap justify-end items-start gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="w-full md:w-[220px] rounded-[14px] border border-[#D9DCE3] bg-white p-5"
            >
              {/* Title */}
              <h3 className="text-[20px] font-semibold text-[#0B1C30]">
                {plan.name}
              </h3>

              {/* Price */}
              {plan.price.startsWith("$") ? (
                <div className="mt-3 flex items-end gap-1">
                  <span className="text-[38px] font-extrabold leading-none text-[#0B1C30]">
                    {plan.price}
                  </span>

                  <span className="mb-1 text-[11px] text-[#6B7280]">
                    /month
                  </span>
                </div>
              ) : (
                <p className="mt-4 text-[13px] font-semibold text-[#0B1C30]">
                  {plan.price}
                </p>
              )}

              {/* Button */}
              <button
                className={`mt-5 h-[44px] w-full rounded-[8px] text-[13px] font-semibold transition ${
                  plan.outlined
                    ? "border border-[#2563EB] text-[#2563EB]"
                    : "bg-[#2563EB] text-white hover:opacity-90"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="mt-14 overflow-x-auto rounded-[20px] border border-[#E4E4E7] bg-white">
          <div className="min-w-[1000px]">
            {sections.map((section) => (
              <div key={section.title}>
                {/* Section Header */}
                <div className="flex items-center bg-[#E8EEF9] px-6 py-4 text-[17px] font-bold text-[#0B1C30]">
                  <span className="mr-2">-</span>
                  {section.title}
                </div>

                {/* Rows */}
                {section.rows.map((row) => (
                  <div
                    key={row[0]}
                    className="grid grid-cols-[2fr_repeat(4,1fr)] items-center border-b border-[#E4E4E7] px-6 py-5"
                  >
                    <div className="text-[14px] font-medium text-[#18181B]">
                      {row[0]}
                    </div>

                    {row[1].map((value, index) => (
                      <div key={index} className="flex justify-center">
                        {renderValue(value)}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}

            {/* Extra Sections */}
            {[
              "Customization",
              "Built-In Emailing System",
              "Reporting",
              "Security",
              "Developer Tools",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center border-b border-[#E4E4E7] bg-[#E8EEF9] px-6 py-4 text-[17px] font-bold text-[#0B1C30]"
              >
                <Plus className="mr-2 h-4 w-4" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
