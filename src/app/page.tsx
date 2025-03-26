import Navbar from "@/components/Navbar/page";
import ScrollToTop from "@/components/ScrollToTop/page";
import AboutSection from "@/components/About/page";
import HeroSection from "@/components/HeroSection/page";
import FeaturedProducts from "@/components/FeaturedProducts/page";
import CalltoActionSection from "@/components/CalltoAction/page";
import Footer from "@/components/Footer/page";





export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* About Section */}
      <AboutSection />

      {/* Call to Action */}
      <CalltoActionSection />

      {/* Footer */}
      <Footer />

    </main>
  );
}
