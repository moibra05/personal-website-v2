import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 gap-2 md:grid-cols-3 w-full py-3 px-6 -z-10 opacity-65">
      <div className="text-center md:text-left">Growth through innovation.</div>
      <div className="text-center">&copy; {new Date().getFullYear()} Mohamed Ibrahim. All Rights Reserved.</div>
      <div className="flex justify-center md:justify-end gap-6">
        <Link
          className="text-white group hover:cursor-pointer transition-colors duration-300"
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
          className="text-white group hover:cursor-pointer transition-colors duration-300"
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
          className="text-white group hover:cursor-pointer transition-colors duration-300"
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
    </footer>
  );
}
