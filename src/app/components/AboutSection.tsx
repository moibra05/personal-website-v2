import Image from "next/image";
import ExperienceCard from "./ExperienceCard";

export default function AboutSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pb-12 gap-12 md:gap-24">
      <section
        id="about"
        className="flex flex-col-reverse gap-8 justify-center md:grid grid-cols-[2fr_3fr] items-center"
      >
        <div className="w-3/4 md:w-10/12 mx-auto border-r-4 border-b-4 pr-3 pb-3 rounded-lg h-fit">
          <Image
            src={"/me.png"}
            width={200}
            height={400}
            alt="image of me"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <h2 className="mb-4 md:uppercase">About Me</h2>
          <div className="flex flex-col gap-4">
            <p>
              Hi, I’m Mohamed Ibrahim, a second-year Computer Science student @
              UTSC passionate about software development and problem-solving.
              I’m driven by the challenge of creating innovative solutions and
              pushing the boundaries of technology. My work spans areas like
              game development, low-level programming, and web development, and
              I’m always eager to learn new skills and tackle complex projects.
            </p>
            <p>
              In addition to my technical pursuits, I’m an avid runner and enjoy
              going to the gym, which helps me stay focused and disciplined. My
              long-term goal is to contribute to groundbreaking innovations in
              the tech industry and be part of projects that have a lasting
              impact.
            </p>
            <p>
              Feel free to explore my projects and connect with me through the
              contact form!
            </p>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="md:grid md:grid-cols-[2fr_3fr] gap-8">
          <h2 className="mb-4 col-start-2 md:uppercase">Experience</h2>
        </div>
        <div className="flex flex-col gap-8">
          <ExperienceCard
            title="Web Development Associate"
            company="Civiconnect"
            startDate="January 2025"
            endDate="March 2025"
            description="Developed and deployed responsive web applications 
            using React, Next.js, Tailwind, and Strapi, optimizing user 
            engagement for small to medium-sized businesses. Conducted 
            website performance assessments, leading to a 25% improvement in 
            key metrics. Additionally, completed over 40 hours of technical 
            and soft skills training, enhancing problem-solving and project 
            efficiency."
            tags={["React", "Next.js", "Tailwind", "Strapi"]}
          />
        </div>
      </section>
    </div>
  );
}
