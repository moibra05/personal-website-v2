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
          endDate="August 2026"
          description="During my internship at Mozilla, I worked on Nimbus and
           Experimenter, Mozilla's experimentation platform, with a focus on
           improving how teams create, manage, and analyze experiments and
           rollouts. I built a versioned targeting-context pipeline that pulled
           definitions from Firefox Desktop, Android, and iOS source
           repositories so configurations could be validated against the fields
           supported by each platform. I also rebuilt the Experiment Results
           page with Django and HTMX, introduced daily, weekly, and overall
           metric views, and improved the surrounding navigation and backend
           data flow. Another major part of my work was separating rollouts
           from the existing experiment flow by creating a standalone rollout
           experience and implementing a dedicated state machine for managing
           transitions between Draft, Preview, Live, Paused, and Complete. I
           also contributed to the Rust Nimbus SDK by fixing inconsistent
           enrollment-event telemetry across mobile and desktop platforms."
          tags={["Python", "Django", "JavaScript", "HTMX", "Rust", "Docker"]}
        />
        <ExperienceCard
          title="Software Developer"
          company="Marsatek"
          companyUrl="https://www.marsatek.com/"
          startDate="February 2025"
          endDate="March 2025"
          description="At Marsatek, I worked on a berth-planning system using
          Java, Spring Boot, React, and PostgreSQL. My work focused on building
          backend services, REST APIs, and CSV and Excel import workflows with
          validation, dynamic repository lookup, and reflection-based dat
          mapping. I also contributed to testing and improving how operational
          scheduling data moved between the frontend, backend, and database."
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
