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
      <div className="flex min-h-screen  flex-col items-center md:px-20 lg:px-20 px-5  snap-y  h-screen overflow-x-hidden">
        <div className="snap-normal snap-center shrink-0">
          <HeroSection />
        </div>
        <LangComp></LangComp>
        <div className="snap-normal snap-center shrink-0">
          <AboutSection />
        </div>
        <div className="snap-normal snap-center shrink-0">
          <ProjectsSection />
        </div>
        <div className="snap-normal snap-center shrink-0">
          <CareerSection />
        </div>
        <div className="snap-normal snap-start shrink-0 w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
