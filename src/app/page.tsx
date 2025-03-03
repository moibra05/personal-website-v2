import HomeSection from "./components/page_sections/HomeSection";
import AboutSection from "./components/page_sections/AboutSection";
import ProjectsSection from "./components/page_sections/ProjectsSection";
import ContactSection from "./components/page_sections/ContactSection";

export default function Home() {
  return (
    <>
      <HomeSection />
      <main className="flex flex-col gap-24 max-w-screen-xl mx-auto px-8 pb-20 mt-8 lg:mt-16">
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
