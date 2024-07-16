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
      <main>
        <div className="flex flex-col items-center px-4 sm:px-20 md:px-20 lg:px-20 overflow-hidden">
          <NavSection />
          <HeroSection />
          <AboutSection />
          <ExpApp />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </NextUIProvider>
  );
}
