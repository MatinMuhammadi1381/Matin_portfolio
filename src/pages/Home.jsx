import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="main-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme toggler */}
      <ThemeToggle />
      {/*Background efecct */}
      <StarBackground />

      {/*navbar */}
      <Navbar />
      {/*main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/*footer */}

      <Footer />
    </div>
  );
};
