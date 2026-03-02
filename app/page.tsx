import HeroSection from "./containers/info-section/hero_section";
import AboutSection from "./containers/info-section/AboutSection";
import ContactSection from "./containers/info-section/ContactSection";
import ProjectsSection from "./containers/info-section/ProjectsSection";
import CareerSection from "./containers/info-section/CareerSection";

import ExpApp from "./components/experiencemenu";
import NavSection from "./components/NavSection/nav2";
import Footer from "./components/Footer";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="relative">
        <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
          <NavSection />
          <HeroSection />
          <div className="w-full  space-y-0">
            <AboutSection />
            <ExpApp />
            <ProjectsSection />
            {/* <CareerSection /> */}
            <ContactSection />
          </div>
          {/*  <Footer /> */}
        </div>
      </main>
    </NextUIProvider>
  );
}
