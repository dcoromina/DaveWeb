import Image from "next/image";
import HeroSection from "./containers/home-page/hero_section";
import AboutSection from "./containers/info-section/AboutSection";
import ProjectsSection from "./containers/info-section/ProjectsSection";
import CareerSection from "./containers/info-section/CareerSection";
import NavSection from "./components/NavSection";
import Footer from "./components/Footer";
import ScrollDownIndicator from "./components/ScrollDown";
import LangComp from "./components/LangComp";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center px-10 sm:px-20 md:px-20 lg:px-20  overflow-x-hidden">
        <HeroSection />

        <ScrollDownIndicator />

        <AboutSection />

        <Footer />
      </div>
    </main>
  );
}
