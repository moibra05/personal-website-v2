import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

export default function HomeSection() {
  return (
    <div
      id="home"
      className="relative flex flex-col w-full min-h-screen justify-center overflow-hidden cursor-default select-none"
    >
      <div className="relative z-10 w-fit mx-auto px-6">
        {/* Location indicator */}
        <div className="flex items-center gap-3 text-blue-400 font-semibold text-sm uppercase tracking-wider mb-6 group">
          <FontAwesomeIcon
            icon={faLocationArrow}
            className="w-4 h-4 text-red-400 group-hover:text-red-300 transition-colors duration-300"
          />
          <span className="">
            Toronto, ON
          </span>
        </div>

        {/* Main heading */}
        <div className="space-y-4 mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light mb-2">
              Hello, I&apos;m
            </div>
            <div className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Mohamed
            </div>
          </h1>

          <h2 className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium leading-relaxed">
            <span className="text-blue-300 font-semibold">
              Software Engineer
            </span>
            <span className="text-gray-500 mx-3">|</span>
            <span className="text-blue-300 font-semibold">Web Developer</span>
            <span className="text-gray-500 mx-3">|</span>
            <span className="text-blue-300 font-semibold">Problem Solver</span>
          </h2>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          {[
            {
              icon: faGithub,
              href: "https://github.com/moibra05",
              label: "GitHub",
            },
            {
              icon: faLinkedin,
              href: "https://www.linkedin.com/in/moibra2005/",
              label: "LinkedIn",
            },
            {
              icon: faEnvelope,
              href: "mailto:mohamedhassen.ibrahim@mail.utoronto.ca",
              label: "Email",
            },
          ].map((social) => (
            <Link
              key={social.label}
              className={`group relative p-3 text-gray-300 border-2 border-gray-600/50 rounded-xl bg-gray-900/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:text-blue-400 hover:border-blue-400`}
              href={social.href}
              aria-label={social.label}
              target="_blank"
            >
              <FontAwesomeIcon
                icon={social.icon}
                className="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
