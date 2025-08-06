import Image from "next/image";
import Link from "next/link";
import SkillTag from "./SkillTag";
import { useInView } from "react-intersection-observer";

type Props = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

export default function ProjectCard({ title, description, url, tags }: Props) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`group relative max-w-6xl mx-auto transition-all duration-700 ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 rounded-3xl blur-xl group-hover:from-blue-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>

      <div className="relative bg-gradient-to-br from-gray-900/40 to-gray-800/20 backdrop-blur-sm border border-gray-700/30 rounded-3xl p-6 md:p-8 group-hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
        {/* Content wrapper */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="relative lg:w-1/2 group/image">
            <Link
              href={url}
              aria-label={`View ${title} project`}
              className="block relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-600/30 group-hover/image:border-blue-400/50 transition-all duration-500">
                <Image
                  src={`/project-images/${title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}.png`}
                  width={600}
                  height={300}
                  alt={`${title} project screenshot`}
                  className="w-full h-auto rounded-2xl group-hover/image:scale-105 transition-transform duration-500"
                />
                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent rounded-2xl"></div>

                {/* Hover overlay with link icon */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover/image:bg-blue-500/10 transition-all duration-500 rounded-2xl flex items-center justify-center">
                  <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-external-link-icon lucide-external-link"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative border */}
              <div className="absolute -bottom-1 -right-1 w-full h-full border-2 border-blue-400/40 rounded-2xl -z-10 group-hover/image:border-blue-400/60 group-hover/image:-bottom-2 group-hover/image:-right-2 transition-all duration-500"></div>
            </Link>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 space-y-6">
            {/* Project indicator */}
            <div className="inline-flex items-center gap-3 text-blue-400 font-semibold text-sm uppercase tracking-wider">
              <div className="w-6 h-px bg-gradient-to-r from-blue-500 to-blue-300"></div>
              <span>Featured Project</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight group-hover:from-blue-200 group-hover:to-white transition-all duration-500">
              {title}
            </h3>

            {/* Description */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/40 backdrop-blur-sm border border-gray-700/30 rounded-2xl p-6 group-hover:border-gray-600/50 transition-all duration-500">
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {description}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <SkillTag key={tag} skill={tag} />
                ))}
              </div>
            </div>

            {/* Link */}
            <div className="pt-2">
              <Link
                href={url}
                target="_blank"
                className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300 group/link"
              >
                <span className="border-b border-transparent group-hover/link:border-blue-300 transition-colors duration-300">
                  View Project
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
