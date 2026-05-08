import React from "react";
import {
  ArrowRight,
  Banknote,
  BarChart3,
  Clapperboard,
  Earth,
  Radio,
  ShieldCheck,
  MonitorPlayIcon,
  WalletCards,
  MonitorSmartphone,
} from "lucide-react";

const features = [
  {
    title: "White-label Apps  Across Every Screen",
    description:
      "Launch fully branded apps on Web, Android, iOS, Apple TV, Roku, Fire TV, WebOS, Tizen, Android TV & STB...",
    icon: MonitorSmartphone,
  },
  {
    title: "OTT & IPTV\nStreaming",
    description:
      "Deliver premium OTT and IPTV experiences to your subscribers — across managed networks...",
    icon: MonitorPlayIcon,
  },
  {
    title: "Live, Linear TV & Radio Streaming",
    description:
      "Stream live events, manage 24/7 linear TV and radio channels with a full Electronic Program Guide — engineer...",
    icon: Radio,
  },
  {
    title: "Video & Audio on Demand",
    description:
      "Deliver a rich library of VOD and AOD content — movies, shows, songs, audiobooks, podcasts, courses, and ...",
    icon: Clapperboard,
  },
  {
    title: "Monetization & Payments",
    description:
      "Monetize with subscriptions (SVOD), pay-per-view (TVOD), advertising (AVOD), and built-in payment gateway...",
    icon: Banknote,
  },
  {
    title: "Advanced Analytics Dashboard",
    description:
      "Get real-time insights into viewership, engagement, revenue, and performance — all from a single powerful...",
    icon: BarChart3,
  },
  {
    title: "Global CDN & Multi-CDN Streaming",
    description:
      "Deliver content at lightning speed worldwide with global CDN support and multi-CDN flexibility for maximum...",
    icon: Earth,
  },
  {
    title: "DRM, Security & Access Control",
    description:
      "Protect your content with enterprise-grade DRM, encryption, geo-blocking, access control, and anti...",
    icon: ShieldCheck,
  },
];

export default function ScaleSection() {
  return (
    <section className="w-full bg-[#F5F5F5] px-6 py-16 md:py-20 lg:py-16">
      <div className="mx-auto w-full max-w-[1244px] px-4 md:px-6">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-inter text-[28px] sm:text-[34px] md:text-[48px] font-extrabold leading-tight text-[#0B1C30]">
            Everything You Need to Scale
          </h2>
          <p className="mx-auto px-6 mt-2 sm:mt-3 max-w-[560px] font-inter text-sm sm:text-base leading-6 sm:leading-7 text-[#17171799]">
            From multi-tenant management to global delivery, we&apos;ve built
            the ultimate toolkit for streaming giants
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:gap-y-8 justify-items-center">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="
  group flex flex-col justify-
 items-start text-left
  w-full sm:w-[300px] lg:w-[271px]
  min-h-[300px] lg:h-[350px]
  rounded-[16px]
  bg-[#2563EB]/10
  px-5 sm:px-6 py-6 sm:py-8
  shadow-[0_12px_32px_rgba(67,96,160,0.08)]
  transition-transform duration-300 hover:-translate-y-1
"
              >
                {/* 1️ ICON BLOCK */}
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-[#4f7cf0] text-white shadow-[0_8px_18px_rgba(79,124,240,0.28)]">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                </div>

                {/* 2️ CONTENT BLOCK */}
               <div className="flex flex-col justify-between h-full mt-[35px] items-center sm:items-start">
                  {/* Top content */}
                  <div className="flex flex-col gap-3">
                    <h3 className="max-w-[260px] font-inter text-[16px] sm:text-[18px] lg:text-[19px] font-bold leading-[1.3] text-[#161616] whitespace-pre-line">
                      {feature.title}
                    </h3>

                    <p className="max-w-[260px] font-inter text-[13px] sm:text-[14px] lg:text-[15px] leading-6 text-[#5f6b85]">
                      {feature.description}
                    </p>
                  </div>

                  {/* CTA at bottom */}
                  <a className="inline-flex items-center gap-2 font-inter text-[14px] sm:text-[15px] lg:text-[16px] font-bold text-brand hover:opacity-70 justify-center sm:justify-start">
                    Learn More
                    <ArrowRight size={18} strokeWidth={2.25} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
