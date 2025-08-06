"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section
      id="about"
      className={`py-16 md:py-24 transition-opacity duration-[1.5s] overflow-hidden ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      ref={ref}
    >
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
        {/* Image Section */}
        <div className="relative w-full max-w-sm mx-auto lg:max-w-md group">
          <div className="relative">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 group-hover:border-blue-500/50 transition-all duration-500">
              <Image
                src={"/me.png"}
                width={300}
                height={400}
                alt="Mohamed Ibrahim - Software Developer"
                className="w-full rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent rounded-2xl"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-blue-400/60 rounded-2xl -z-10 group-hover:border-blue-400 group-hover:-bottom-3 group-hover:-right-3 transition-all duration-500"></div>

            {/* Floating accent */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm group-hover:bg-blue-500/40 transition-colors duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-400/30 rounded-full blur-sm group-hover:bg-blue-400/50 transition-colors duration-500"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3 text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
              <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-blue-300"></div>
              <span>Get to know me</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
              A Little About Me
            </h2>
          </div>

          {/* Bio content */}
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <div className="relative">
              <p className="text-lg md:text-xl leading-relaxed">
                Hi, I&apos;m{" "}
                <span className="text-blue-400 font-semibold">
                  Mohamed Ibrahim
                </span>
                . I&apos;m a Computer Science student at the{" "}
                <span className="text-blue-300">University of Toronto</span>,
                focusing on{" "}
                <span className="text-blue-300">Software Engineering</span>.
                I&apos;m passionate about building clean, reliable software and
                solving meaningful problems through technology. I enjoy working
                across the stack and constantly look for ways to improve both
                how I write code and how users experience it.
              </p>
            </div>

            <p className="text-base md:text-lg leading-relaxed">
              I&apos;ve completed internships at{" "}
              <span className="text-blue-300">Marsatek</span> and{" "}
              <span className="text-blue-300">Civiconnect</span>, where I worked
              on full-stack web applications using tools like{" "}
              <span className="text-blue-300">React</span>,{" "}
              <span className="text-blue-300">Spring Boot</span>, and{" "}
              <span className="text-blue-300">Supabase</span>. I&apos;ve also
              built several personal and team-based projects, including{" "}
              <span className="text-blue-300">Temp Tracker</span>, an
              environmental data tracking app, and{" "}
              <span className="text-blue-300">Career Path AI</span>, a career
              recommendation tool developed at Hack the Valley.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              I&apos;ll be joining{" "}
              <span className="text-blue-300 font-semibold">Mozilla</span> for
              an eight-month internship, where I&apos;m excited to contribute to
              large-scale projects and grow alongside experienced engineers.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              Outside of tech, I&apos;m into running and lifting, both of which
              keep me focused and disciplined. I&apos;m always looking to
              challenge myself, and my goal is to build software that&apos;s not
              just functional, but{" "}
              <span className="text-blue-300 font-semibold">impactful</span>.
            </p>
          </div>

          {/* Call to action */}
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 text-blue-400 font-medium group/cta cursor-default">
              <span className="border-b border-transparent group-hover/cta:border-blue-400 transition-colors duration-300">
                Feel free to explore my projects and connect with me!
              </span>
              <svg
                className="w-5 h-5 transform group-hover/cta:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
