import Slider from "./components/ui/home/Slider";
import Hero from "./components/ui/home/Hero";
import PromotionalVideo from "./components/ui/home/PromotionalVideo";
import { Gallery } from "./components/ui/home/Gallery";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Hero />
      <PromotionalVideo />
      <Slider />
      <Gallery />
    </div>
  );
}
