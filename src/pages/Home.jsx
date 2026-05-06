import MainLayout from "../layouts/MainLayout";
import Hero from "../components/sections/Hero";
import Industries from "../components/sections/Industries";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Industries />
    </MainLayout>
  );
}