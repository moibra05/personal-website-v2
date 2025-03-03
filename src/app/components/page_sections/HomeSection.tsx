import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

export default function HomeSection() {
  return (
    <div
      id="home"
      className="flex flex-col w-full h-screen justify-center"
    >
      <div className="p-4 w-fit mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <FontAwesomeIcon icon={faLocationArrow} className="w-4 text-red-800" />
          <h3 className="text-base sm:text-lg">Toronto, ON</h3>
        </div>
        <h1 className="flex flex-col leading-snug">
          <span className="text-xl sm:text-2xl">Hello,</span> I&apos;m Mohamed
        </h1>
        <h2 className="text-base sm:text-xl">
          Software Engineer | Web Developer | Problem Solver
        </h2>
        <div className="flex justify-center gap-4 mt-4">
          <Link
            className="text-white border-[3px] rounded-full p-1 group hover:cursor-pointer hover:border-secondary transition-colors duration-300"
            href="https://github.com/moibra05"
            aria-label="GitHub"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="w-4 h-4 sm:w-6 sm:h-6 fa-fw text-white group-hover:text-secondary transition-colors duration-300"
            />
          </Link>
          <Link
            className="text-white border-[3px] rounded-full p-1 group hover:cursor-pointer hover:border-secondary transition-colors duration-300"
            href="https://www.linkedin.com/in/moibra2005/"
            aria-label="LinkedIn"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-4 h-4 sm:w-6 sm:h-6 fa-fw text-white group-hover:text-secondary transition-colors duration-300"
            />
          </Link>
          <Link
            className="text-white border-[3px] rounded-full p-1 group hover:cursor-pointer hover:border-secondary transition-colors duration-300"
            href="mailto:mohamedhassen.ibrahim@mail.utoronto.ca"
            aria-label="Email"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-4 h-4 sm:w-6 sm:h-6 fa-fw text-white group-hover:text-secondary transition-colors duration-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
