import Slider from "./components/ui/home/Slider";
import Header from "./components/ui/Header";
import Hero from "./components/ui/home/Hero";
import PromotionalVideo from "./components/ui/home/PromotionalVideo";
import { Gallery } from "./components/ui/home/Gallery";
import Footer from "./components/ui/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Hero />
      <PromotionalVideo />
      <Slider />
      <Gallery />
      <Footer />
    </div>
  );
}
