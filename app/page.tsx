import Image from "next/image";
import HeroSection from "./containers/home-page/hero_section"
import AboutSection from "./containers/info-section/AboutSection"
import ProjectsSection from "./containers/info-section/ProjectsSection"
import NavSection from "./components/NavSection"
import ScrollDownIndicator from "./components/ScrollDown";

export default function Home() {
  return (
    <main className="flex min-h-screen  flex-col items-center px-20 overflow-hidden ">
      <NavSection/>
      <HeroSection/>
      <ScrollDownIndicator/>
      <AboutSection/>
      <ProjectsSection/>
      
    </main>
  );
}
