"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "../ProjectCard";

export default function ProjectsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 2; // Show 2 projects per page

  const projects = [
    {
      title: "GLOW | TempTracker",
      description:
        "Developed a full-stack web application for community-driven \
        environmental temperature monitoring featuring CSV data upload, \
        interactive map visualization with Leaflet.js, and a badge system \
        rewarding user engagement. Implemented secure authentication, \
        role-based access control, and profile management using \
        React/TypeScript, Node.js/Express, and Supabase. Utilized Agile \
        methodologies with weekly sprints, successfully processing 10,000+ \
        temperature data points from diverse geographic locations",
      url: "http://4.236.162.53:3000/",
      tags: [
        "Next.js",
        "React",
        "Supabase",
        "Express.js",
        "TypeScript",
        "PostgreSQL",
        "Jira",
      ],
    },
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
      url: "https://github.com/moibra05/photo-manipulator",
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

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section
      id="projects"
      className={`py-16 md:py-24 transition-opacity duration-[1.5s] ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      ref={ref}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
          <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-blue-300"></div>
          <span>Portfolio</span>
          <div className="w-8 h-px bg-gradient-to-r from-blue-300 to-blue-500"></div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
          What I&apos;ve Built
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A collection of projects that showcase my journey in software
          development
        </p>
      </div>

      {/* Projects Grid */}
      <div className="space-y-12 md:space-y-16 mb-12">
        {currentProjects.map((project, index) => (
          <div
            key={project.title}
            className={`transition-all duration-500 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              url={project.url}
              tags={project.tags}
            />
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center space-x-4">
          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className={`group flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              currentPage === 1
                ? "text-gray-500 cursor-not-allowed"
                : "text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30"
            }`}
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                currentPage !== 1 ? "group-hover:-translate-x-1" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => goToPage(pageNumber)}
                  className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                    currentPage === pageNumber
                      ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25 scale-110"
                      : "text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 border border-gray-700/50 hover:border-blue-500/30"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className={`group flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
              currentPage === totalPages
                ? "text-gray-500 cursor-not-allowed"
                : "text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 border border-transparent hover:border-blue-500/30"
            }`}
          >
            <span>Next</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                currentPage !== totalPages ? "group-hover:translate-x-1" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Page Indicator */}
      {totalPages > 1 && (
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            Showing {indexOfFirstProject + 1}-
            {Math.min(indexOfLastProject, projects.length)} of {projects.length}{" "}
            projects
          </p>
        </div>
      )}
    </section>
  );
}
