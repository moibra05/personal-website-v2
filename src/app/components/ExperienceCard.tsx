import SkillTag from "./SkillTag";
import Link from "next/link";

type Props = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  tags?: string[];
  companyUrl?: string;
};

export default function ExperienceCard({
  title,
  company,
  startDate,
  endDate,
  description,
  tags,
  companyUrl = "#",
}: Props) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 max-w-5xl mx-auto">
      <div className="flex flex-col md:grid md:grid-cols-[250px_1fr] gap-6">
        {/* Date section */}
        <div className="flex flex-col">
          <div className="inline-flex items-center gap-2 text-blue-400 font-semibold uppercase tracking-wide mb-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>
              {startDate} - {endDate}
            </span>
          </div>
          <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent md:hidden"></div>
        </div>

        {/* Content section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {title}
            </h3>
            <Link
              href={companyUrl}
              target="_blank"
              className="inline-flex items-center text-lg md:text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200 group/link"
            >
              <span className="border-b border-transparent group-hover/link:border-blue-300 transition-colors duration-200">
                {company}
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
                className="w-4 h-4 ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
            </Link>
          </div>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <SkillTag key={tag} skill={tag} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
