import MainLayout from "../layouts/MainLayout";
import Hero from "../components/sections/Hero";
import Industries from "../components/sections/Industries";
import ScaleSection from "../components/sections/ScaleSection";
import Test from "../components/sections/Test";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Industries />
      <ScaleSection />
      <Test />
    </MainLayout>
  );
}
