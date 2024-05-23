import Image from "next/image";
import HeroSection from "./containers/home-page/hero_section";
import AboutSection from "./containers/info-section/AboutSection";
import ContactSection from "./containers/info-section/ContactSection";
import ProjectsSection from "./containers/info-section/ProjectsSection";
import CareerSection from "./containers/info-section/CareerSection";
import NavSection from "./components/NavSection/NavSection";
import Footer from "./components/Footer";
import ScrollDownIndicator from "./components/ScrollDown";
import LangComp from "./components/LangComp";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main>
        <NavSection />
        <div className="flex flex-col items-center px-4 sm:px-20 md:px-20 lg:px-20  overflow-x-hidden">
          <HeroSection />

          <ScrollDownIndicator />

          <AboutSection />
          <CareerSection />
          <ContactSection />

          <Footer />
        </div>
      </main>
    </NextUIProvider>
  );
}
