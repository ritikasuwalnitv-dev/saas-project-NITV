import { Check } from "lucide-react";
import { useState } from "react";

import firetv from "../../assets/PricingAvailableApps/firetv.png";
import apple from "../../assets/PricingAvailableApps//apple.png";
import androidtv from "../../assets/PricingAvailableApps//androidtv.png";
import vidaa from "../../assets/PricingAvailableApps//vidaa.png";
import roku from "../../assets/PricingAvailableApps//roku.png";
import astro from "../../assets/PricingAvailableApps//astro.png";

const plans = [
  {
    name: "Starter",
    tagline: "BEGIN YOUR JOURNEY",
    price: "$59",
    setup: "$50 One-Time Setup Fee",
    featuresTitle: "Everything in Starter, Plus",
    features: [
      "Web App & Android app",
      "Unlimited content & users",
      "Up to 1K concurrent users",
      "Advanced CMS",
      "ABR streaming",
      "Playlists, categories & nested content",
      "Bulk Upload, FTP & S3 Sync",
      "Analytics overview",
      "PPV (TVOD) and Subscriptions (SVOD)",
      "Ad monetization (AVOD)",
      "Advanced audio-video player",
      "Player customization and branding",
      "Stream Protection (AES Encryption)",
      "DRM Protection*",
      "Built-in NITV OnPrem CDN",
      "Built-in Amazon CDN",
      "Select one from existing UI Template",
      "1 admin account included",
      "Basic Support",
    ],
    additionalApps: {
      price: "Rs10,000/$299/app/month",
      apps: [firetv, apple, androidtv, vidaa],
    },
    cta: "Free Trial",
    featured: false,
  },

  {
    name: "Standard",
    tagline: "START WITH CONFIDENCE",
    price: "$399",
    setup: "$100 One-Time Setup Fee",
    featuresTitle: "Everything in Standard, Plus",
    features: [
      "Up to 10K concurrent users",
      "iOS App",
      "Interactivity (Comment, Rating)",
      "Advanced security",
      "3 admin accounts included",
    ],
    additionalApps: {
      price: "Rs 20,000/$399/app/month",
      apps: [firetv, apple, androidtv, roku, astro],
    },
    cta: "Free Trial",
    featured: true,
  },

  {
    name: "Professional",
    tagline: "GROW YOUR AUDIENCE",
    price: "$999",
    setup: "$500 One-Time Setup Fee",
    featuresTitle: "Everything in Professional, Plus",
    features: [
      "Up to 50K concurrent users",
      "Smart TV/STB Apps",
      "Staging Environment",
      "Interactivity (Live Chat)",
      "AI Recommendation System*",
      "Coupons & Vouchers",
      "Multi-Currency",
      "BYOD (Bring Your Own Design)",
      "Custom Analytics Reports",
      "Content Partner Portal",
      "Unlimited admin accounts",
      "Feature customizations*",
      "APIs and Webhooks",
      "Priority Support (add-on)",
    ],
    additionalApps: {
      price: "Rs 30,000/$499/app/month",
      apps: [firetv, apple, androidtv, vidaa],
    },
    cta: "Free Trial",
    featured: false,
  },

  {
    name: "Ultimate",
    tagline: "ESTABLISH YOUR BRAND",
    price: "Custom",
    setup: "",
    featuresTitle: "Everything in Ultimate, Plus",
    features: [
      "50K+ concurrent users",
      "Custom CDN, Storage & Infra Setup",
      "Multi-CDN Support",
      "User Generated Content (UGC)",
      "Disaster Recovery",
      "Custom Firewall",
      "Audit logs",
      "Expert Design, Product, Engineering Consulting",
      "VAPT, ADA, SOC II reports",
      "GDPR/HIPAA/DPA compliance support",
      "Custom pricing discounts",
      "Custom integrations",
      "Forensic Watermarking (add-on)",
      "VIP Support (add-on)",
    ],
    additionalApps: {
      price: "Custom Pricing",
      apps: [firetv, apple, androidtv, vidaa],
    },
    cta: "Free Trial",
    featured: false,
  },
];

export default function PricingHero() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="bg-[#F6F7FB] py-20 ">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">
        {/* Header */}
        <div className="mx-auto max-w-[700px] text-center">
          <h1 className="font-inter text-[34px] md:text-[48px] font-extrabold leading-tight text-[#10213A]">
            Simple, Transparent Pricing
          </h1>

          <p className="mt-4 text-[16px] leading-7 text-[#17171799]">
            Choose the plan that fits your scale — Cloud or On-Premise, <br />{" "}
            Monthly or Annual
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mt-12 mb-16 ">
          <span
            className={`text-sm font-semibold ${
              billing === "monthly" ? "text-[#111827]" : "text-gray-400"
            }`}
          >
            Monthly
          </span>

          <button
            onClick={() =>
              setBilling(billing === "monthly" ? "annual" : "monthly")
            }
            className="relative w-[48px] h-[26px] rounded-full bg-[#2F66F6]"
          >
            <span
              className={`absolute top-[3px] left-[3px] h-5 w-5 rounded-full bg-white transition-transform duration-300 ${
                billing === "annual" ? "translate-x-[22px]" : ""
              }`}
            />
          </button>

          <span
            className={`flex items-center gap-2 text-sm font-semibold ${
              billing === "annual" ? "text-[#111827]" : "text-gray-400"
            }`}
          >
            Annual
            <span className="rounded-full bg-blue-100 px-2 py-[2px] text-[10px] font-bold text-[#2F66F6]">
              Save 20%
            </span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 font-inter">
          {plans.map((p) =>
            p.featured ? (
              /* Featured Card */
              <div
                key={p.name}
                className="relative  rounded-[20px] border border-[#2F66F6] bg-white p-7 pt-7 flex flex-col h-full shadow-[0_12px_40px_rgba(47,102,246,0.15)]"
              >
                {/* Popular Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#2F66F6] px-4 py-[6px] text-[10px] font-bold tracking-[1px] text-white">
                  MOST POPULAR
                </div>

                {/* Title */}
                <h3 className="text-[24px]  font-semibold text-[#0B1C30]">
                  {p.name}
                </h3>

                <p className="mt-1 text-[12px]  font-medium tracking-[1px] text-[#45464D]">
                  {p.tagline}
                </p>

                {/* Price */}
                <div className="mt-4   flex items-end">
                  <span className="text-[52px] leading-none font-extrabold text-[#0B1C30]">
                    {p.price}
                  </span>

                  {p.price !== "Custom" && (
                    <span className="mb-2 ml-1 text-sm text-[#45464D]">
                      /mo
                    </span>
                  )}
                </div>

                {/* Setup */}
                {p.setup && (
                  <p className="mt-3 text-[12px] text-[#45464D]">
                    <span className="font-bold">{p.setup.split(" ")[0]}</span>{" "}
                    {p.setup.split(" ").slice(1).join(" ")}
                  </p>
                )}

                {/* Infra */}
                <button className="mt-1 text-left text-[13px] font-bold text-[#2F66F6] hover:underline">
                  + Infra fees
                </button>

                <div className="my-4 border-t border-[#C6C6CD]" />

                {/* Features Title */}
                <p className="mb-5 text-[17px] font-bold text-[#0B1C30]">
                  {p.featuresTitle}
                </p>

                {/* Features */}
                <ul
                  className={`space-y-4 ${
                    p.featured ? "min-h-[520px]" : "min-h-[520px]"
                  }`}
                >
                  {p.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[14px] leading-5 text-[#18181B]"
                    >
                      <Check className="mt-[px] h-4 w-4 shrink-0 text-[#1D4ED8]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom */}
                <div className="mt-auto pt-8">
                  {/* CTA */}
                  <button className="w-full h-[52px] rounded-[8px] bg-[#2563EB] text-[16px] font-semibold text-white transition hover:opacity-90">
                    {p.cta}
                  </button>

                  {/* Additional Apps */}
                  <div className="mt-8">
                    <h4 className="text-[15px] font-bold text-[#18181B]">
                      Additional Apps Available:
                    </h4>

                    <p className="mt-1 text-[14px] text-[#18181B]">
                      {p.additionalApps.price}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.additionalApps.apps.map((app, idx) => (
                        <img
                          key={idx}
                          src={app}
                          alt="platform"
                          className="h-9 rounded-md object-contain"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Normal Cards */
              /* Normal Cards */
              <div
                key={p.name}
                className="rounded-[20px] border border-[#D9DCE3] bg-white p-7 flex flex-col"
              >
                {/* Title */}
                <h3 className="text-[24px] font-semibold text-[#0B1C30]">
                  {p.name}
                </h3>

                <p className="mt-1 text-[12px] font-medium tracking-[1px] text-[#45464D]">
                  {p.tagline}
                </p>

                {/* Price */}
                <div className="mt-4 flex items-end">
                  <span className="text-[52px] leading-none font-extrabold text-[#0B1C30]">
                    {p.price}
                  </span>

                  {p.price !== "Custom" && (
                    <span className="mb-2 ml-1 text-sm text-[#45464D]">
                      /mo
                    </span>
                  )}
                </div>

                {/* Setup */}
                {p.setup && (
                  <p className="mt-3 text-[12px] text-[#45464D]">
                    <span className="font-bold">{p.setup.split(" ")[0]}</span>{" "}
                    {p.setup.split(" ").slice(1).join(" ")}
                  </p>
                )}

                {/* Infra */}
                <button className="mt-1 text-left text-[13px] font-bold text-[#2F66F6] hover:underline">
                  + Infra fees
                </button>

                <div className="my-4 border-t border-[#C6C6CD]" />

                {/* Features Title */}
                <p className="mb-5 text-[17px] font-bold text-[#0B1C30]">
                  {p.featuresTitle}
                </p>

                {/* Features */}
                <ul className="space-y-4 min-h-[520px]">
                  {p.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-[13px] leading-5 text-[#18181B]"
                    >
                      <Check className="h-4 w-4 shrink-0 text-[#1D4ED8]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom */}
                <div className="mt-auto pt-8">
                  {/* CTA */}
                  <button className="w-full h-[52px] rounded-[8px] bg-[#2563EB] text-[16px] font-semibold text-white transition hover:opacity-90">
                    {p.cta}
                  </button>

                  {/* Additional Apps */}
                  <div className="mt-8">
                    <h4 className="text-[15px] font-bold text-[#18181B]">
                      Additional Apps Available:
                    </h4>

                    <p className="mt-1 text-[14px] text-[#18181B]">
                      {p.additionalApps.price}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.additionalApps.apps.map((app, idx) => (
                        <img
                          key={idx}
                          src={app}
                          alt="platform"
                          className="h-9 rounded-md object-contain"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
