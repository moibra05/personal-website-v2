import HomeSection from "./components/page_sections/HomeSection";
import AboutSection from "./components/page_sections/AboutSection";
import ProjectsSection from "./components/page_sections/ProjectsSection";
import ContactSection from "./components/page_sections/ContactSection";
import ExperienceSection from "./components/page_sections/ExperienceSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <main className="w-full max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 overflow-x-hidden">
        <div className="space-y-20 md:space-y-32 pb-20">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
    </>
  );
}
