import MainLayout from "../layouts/MainLayout";
import Hero from "../components/sections/Hero";
import Industries from "../components/sections/Industries";
import ScaleSection from "../components/sections/ScaleSection";
import UIShowcase from "../components/sections/UIShowcase";
import Steps from "../components/sections/Steps";
import Pricing from "../components/sections/HomePricing";
import Stats from "../components/sections/Stats";
import CTA from "../components/sections/CTA";
import Partners from "../components/sections/Partners";
import Available from "../components/sections/Available";
import Testimonials from "../components/sections/Testimonials";
import SearchByNeeds from "../components/sections/SearchByNeeds";
export default function Home() {
  return (
    <>
      <MainLayout>
        <Hero />
        <Industries />
        <ScaleSection />
        <UIShowcase />
        <SearchByNeeds/>
        <Steps />

        <Pricing />
        <Partners />
        <Testimonials />
        <Stats />
        <CTA />

        <Available />
      </MainLayout>
    </>
  );
}
