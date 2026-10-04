import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSection } from "../components/SkillsSection";

export const Home = () => (
  <>
    <Navbar />
    <main id="main-content" tabIndex="-1">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);
