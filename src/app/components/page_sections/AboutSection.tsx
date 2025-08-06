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
      <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16 items-center">
        <div className="relative w-4/5 md:w-full mx-auto max-w-sm">
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src={"/me.png"}
              width={200}
              height={400}
              alt="image of me"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-1 -right-1 w-full h-full border-2 border-blue-400 rounded-lg -z-10"></div>
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            A Little About Me
          </h2>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              Hi, I&apos;m Mohamed Ibrahim, a second-year Computer Science
              student @ UTSC passionate about software development and
              problem-solving. I&apos;m driven by the challenge of creating
              innovative solutions and pushing the boundaries of technology. My
              work spans areas like game development, low-level programming, and
              web development, and I&apos;m always eager to learn new skills and
              tackle complex projects.
            </p>
            <p>
              In addition to my technical pursuits, I&apos;m an avid runner and
              enjoy going to the gym, which helps me stay focused and
              disciplined. My long-term goal is to contribute to groundbreaking
              innovations in the tech industry and be part of projects that have
              a lasting impact.
            </p>
            <p>
              Feel free to explore my projects and connect with me through the
              contact form!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
