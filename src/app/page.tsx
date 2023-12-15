import CalendlyBooking from "@/components/CalendlyBooking";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RecentWork from "@/components/RecentWork";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <RecentWork />
      <Testimonials />
      <Faqs />
      <CalendlyBooking />
      <Footer />
    </>
  );
}
