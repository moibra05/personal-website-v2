import ProjectCard from "../ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Planetze",
      description:
        "Developed an Android app that helps users track and reduce their \
        carbon footprint, featuring daily emissions monitoring, goal tracking, \
        and sustainability resources. Implemented Firebase authentication with \
        email verification for secure user access. Utilized Agile \
        methodologies with Scrum and Jira, improving sprint efficiency and \
        project delivery.",
      url: "https://github.com/asadbmirza/Planetze-Mobile-Application",
      tags: ["Java", "Firebase", "Android Studio", "JUnit", "Jira"],
    },
    {
      title: "Career Path AI",
      description:
        "An AI-driven platform built for Hack the Valley 9, \
      designed to provide personalized career guidance based on factors like \
      location, skills, education, and professional interests. Inspired by the \
      challenges many people face when advancing their careers, particularly \
      in underrepresented communities, the tool offers a tailored 5-step \
      career plan that helps users identify key skills to develop and relevant \
      resources to pursue.",
      url: "https://github.com/asadbmirza/CareerPathAI",
      tags: ["React", "Node.js", "Express.js", "PostgreSQL"],
    },
    {
      title: "Soaring",
      description:
        "A reimangined version of the flash game, Flight, designed by Krin \
        Juangbhanich, developed using the Pygame module. Featuring smooth \
        gameplay, multiple environments, and a progression system, this remake \
        offers a refined experience while staying true to the original game’s \
        charm.",
      url: "https://github.com/moibra05/Soaring",
      tags: ["Python", "Pygame"],
    },
    {
      title: "Photo Manipulation Tool",
      description:
        "A custom-built progrm designed to apply various image effects, \
        developed to handle tasks like flipping images, grayscale, pixelation, \
        Gaussian blur, and color quantization. The tool allows users to easily \
        transform and manipulate images with these effects, offering a \
        practical and efficient way to modify photos.",
      url: "https://github.com/moibra05/Soaring",
      tags: ["Python", "Pillow"],
    },
    {
      title: "Tetris",
      description:
        "A functional version of the classic Tetris game, developed using MIPS\
         assembly language. This project involves the creation of core game \
         mechanics, such as piece movement, rotation, collision detection, and \
         line clearing, all implemented at a low level.",
      url: "https://github.com/moibra05/assembly-tetris",
      tags: ["MIPS Assembly"],
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
      <div className="flex flex-col gap-8">
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
