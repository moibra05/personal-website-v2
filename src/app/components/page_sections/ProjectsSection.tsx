import ProjectCard from "../ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Project 1",
      description:
        "An AI-driven platform built for Hack the Valley 9, \
      designed to provide personalized career guidance based on factors like \
      location, skills, education, and professional interests. Inspired by the \
      challenges many people face when advancing their careers, particularly \
      in underrepresented communities, the tool offers a tailored 5-step \
      career plan that helps users identify key skills to develop and relevant \
      resources to pursue.",
      url: "https://www.google.com",
      tags: ["React", "Next.js"],
    },
    {
      title: "Project 2",
      description:
        "An AI-driven platform built for Hack the Valley 9, \
      designed to provide personalized career guidance based on factors like \
      location, skills, education, and professional interests. Inspired by the \
      challenges many people face when advancing their careers, particularly \
      in underrepresented communities, the tool offers a tailored 5-step \
      career plan that helps users identify key skills to develop and relevant \
      resources to pursue.",
      url: "https://www.google.com",
      tags: ["React", "Next.js"],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full min-h-[50vh] flex flex-col justify-center"
    >
      <div className="md:grid md:grid-cols-[2fr_3fr] gap-8">
        <h2 className="mb-4 col-start-2 md:uppercase">Projects</h2>
      </div>
      <div className="">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            url={project.url}
            tags={project.tags}
          />
        ))}
      </div>
    </section>
  );
}
