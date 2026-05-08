import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    tagline: "BEGIN YOUR JOURNEY",
    price: "$59",
    setup: "$50 One-time Setup fee",
    featuresTitle: "Everything in Starter, Plus",
    features: [
      "Web App & Android app",
      "Unlimited content & users",
      "Up to 1K concurrent users",
      "Advanced CMS",
      "ABR streaming",
      "Playlists, categories & nested content",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Standard",
    tagline: "START WITH CONFIDENCE",
    price: "$399",
    setup: "$100 One-time Setup fee",
    featuresTitle: "Everything in Standard, Plus",
    features: [
      "Up to 10K concurrent users",
      "iOS App",
      "Interactivity (Comment, Rating)",
      "Advanced security (watermarking, geo-blocking, domain restrictions)",
      "3 admin accounts included",
    ],
    cta: "Select Plan",
    featured: true,
  },
  {
    name: "Professional",
    tagline: "GROW YOUR AUDIENCE",
    price: "$999",
    setup: "$500 One-time Setup fee",
    featuresTitle: "Everything in Professional, Plus",
    features: [
      "Up to 50K concurrent users",
      "Smart TV/STB Apps",
      "Staging Environment",
      "Interactivity (Live Chat)",
      "AI Recommendation System*",
      "Coupons & Vouchers",
    ],
    cta: "Upgrade Now",
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
    ],
    cta: "Ask Sales",
    featured: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section  id="pricing" className="py-12 px-6 bg-[#969696]/10">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mx-auto max-w-[670px] text-center">
          <h2 className="font-inter text-[28px] sm:text-[34px] md:text-[48px] font-extrabold leading-tight text-[#0B1C30]">
            Simple, Transparent Pricing
          </h2>

          <p className="mx-auto mt-2 sm:mt-3  max-w-[460px] font-inter text-sm sm:text-base leading-6 sm:leading-7 text-[#17171799]">
            Choose the plan that fits your scale — Cloud or On-Premise, Monthly
            or Annual
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-3 my-12 mb-16">
          <span
            className={`text-sm font-semibold ${billing === "monthly" ? "text-gray-900" : "text-gray-400"}`}
          >
            Monthly
          </span>

          <button
            onClick={() =>
              setBilling(billing === "monthly" ? "annual" : "monthly")
            }
            className="relative w-12 h-6  rounded-full bg-blue-600 transition"
          >
            <span
              className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow-md transition-transform ${
                billing === "annual" ? "translate-x-6" : ""
              }`}
            />
          </button>

          <span
            className={`text-sm font-medium flex items-center gap-2 ${billing === "annual" ? "text-gray-900" : "text-gray-400"}`}
          >
            Annual
            <span className="text-[10px] font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-7 border transition-all flex flex-col ${
                p.featured
                  ? "bg-white border-blue-600 shadow-xl scale-[1.04]"
                  : "bg-white border-gray-200 hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}

              {/* Title */}
              <h3 className="font-semibold text-[24px] text-gray-900">
                {p.name}
              </h3>
              <p className="text-[12px] font-medium tracking-wider text-gray-600 mt-1">
                {p.tagline}
              </p>

              {/* Price */}
              <div className="mt-5">
                <span className="md:text-5xl  text-3xl font-inter font-bold text-gray-900">
                  {p.price}
                </span>
                {p.price !== "Custom" && (
                  <span className="text-gray-700 text-sm">/mo</span>
                )}
              </div>

              {/* Setup */}
              {p.setup && (
                <p className="text-xs text-gray-700 mt-2">{p.setup}</p>
              )}

              <button className="text-[13px] text-brand font-bold mt-1 text-left hover:underline">
                + Infra fees
              </button>

              <div className="border-t border-gray-300 my-5" />

              {/* Features */}
              <p className="text-[16px] font-bold text-gray-900 mb-4">
                {p.featuresTitle}
              </p>

              <ul className="space-y-3 flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-[12px] font-inter text-gray-700"
                  >
                    <Check className="h-4 w-4 text-brand mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-7 w-full py-3 rounded-lg text-sm font-semibold transition ${
                  p.featured
                    ? "bg-blue-600 text-white hover:bg-brand"
                    : "bg-[#DCE9FF] text-gray-900 text-[16px] hover:bg-gray-200"
                }`}
              >
                {p.cta}
              </button>
            </div>
            
          ))}
          
          
        </div>
        
        
      </div>
      
    </section>
    
  );
}
