import ExperienceCard from "../ExperienceCard";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full min-h-screen flex flex-col justify-center"
    >
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
  );
}
