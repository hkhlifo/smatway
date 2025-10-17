import Hero from "./components/Hero";
import AboutSummary from "./components/AboutSummary";
import ServicesHighlight from "./components/ServicesHighlight";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main className="bg-white text-[#2B2B2B] font-poppins">
      <Hero />
      <AboutSummary />
      <ServicesHighlight />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  );
}