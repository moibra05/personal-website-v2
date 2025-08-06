"use client";

import { useInView } from "react-intersection-observer";
import ExperienceCard from "../ExperienceCard";

export default function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      id="experience"
      className={`py-16 md:py-24 transition-opacity duration-[1.5s] ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      ref={ref}
    >
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">
          My Professional Journey
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Here&apos;s a look at my professional experiences and the impact
          I&apos;ve made
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        <ExperienceCard
          title="Full Stack Software Engineer"
          company="Mozilla"
          companyUrl="https://www.mozilla.org/"
          startDate="September 2025"
          endDate="April 2026"
          description="Upcoming..."
        />
        <ExperienceCard
          title="Software Developer"
          company="Marsatek"
          companyUrl="https://www.marsatek.com/"
          startDate="February 2025"
          endDate="March 2025"
          description="Engineered an AI-powered berth planning system using 
            Java, Spring Boot, and PostgreSQL, reducing vessel wait times by 
            15%. Built and deployed secure RESTful APIs to improve data 
            exchange efficiency, and collaborated on a full-stack solution with 
            React, TypeScript, and TailwindCSS, ensuring seamless integration 
            and clean version control."
          tags={["Java", "Spring Boot", "PostgreSQL", "React", "Docker"]}
        />
        <ExperienceCard
          title="Web Development Associate"
          company="Civiconnect"
          startDate="January 2025"
          endDate="March 2025"
          companyUrl="https://www.civiconnect.ca/"
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
