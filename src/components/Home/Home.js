import Category from "../../pages/category";
import Header from "../header";
import Footer from "@/components/footer";
import Banner from "./banner";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gray-100">
      <Header />

      <section className="relative w-full h-64 sm:h-96 mt-10">
        <Banner />
      </section>

      <section className="relative w-full h-64 sm:h-96 mt-10">
        <HeroSection />
      </section>

      <section className="mt-8">
        <Category />
      </section>

      <section className="mt-8">
        <Footer />
      </section>
    </div>
  );
}
