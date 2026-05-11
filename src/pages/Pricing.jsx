import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTA from "../components/sections/CTA";

import PricingHero from "../components/pricing/PricingHero";
import DetailedPricing from "../components/pricing/DetailedPricing";


export default function Pricing() {
  return (
    <div className="bg-white overflow-hidden">
      <Navbar />

      <main>
        <PricingHero />
        <DetailedPricing />
      </main>

      <CTA />
      <Footer />
    </div>
  );
}