import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>

      <main className="p-4">
        <h1 className="text-2xl">Homepage</h1>
      </main>

      <Footer />
    </>
  )
}