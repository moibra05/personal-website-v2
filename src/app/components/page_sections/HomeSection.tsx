import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

export default function HomeSection() {
  return (
    <div
      id="home"
      className="flex flex-col w-fit h-screen justify-center mx-auto"
    >
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        className="absolute w-screen left-0 top-0 z-40"
      >
        <g fill="#2C68FF">
          <path
            d="M500 80.7C358 68 0 4 0 4V0h1000v84.7c-216 23.3-358 8.6-500-4Z"
            opacity=".3"
          ></path>
          <path
            d="M500 65.7C358 53 0 4 0 4V0h1000v62.7c-216 23.3-358 15.6-500 3Z"
            opacity=".5"
          ></path>
          <path d="M500 50.7C358 38 0 4 0 4V0h1000v40.7C784 64 642 63.3 500 50.7Z"></path>
        </g>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        className="absolute w-screen left-0 -bottom-0 z-40 max-h-["
      >
        <g fill="#2C68FF" transform="rotate(180 500 50)">
          <path
            d="M500 80.7C358 68 0 4 0 4V0h1000v84.7c-216 23.3-358 8.6-500-4Z"
            opacity=".3"
          ></path>
          <path
            d="M500 65.7C358 53 0 4 0 4V0h1000v62.7c-216 23.3-358 15.6-500 3Z"
            opacity=".5"
          ></path>
          <path d="M500 50.7C358 38 0 4 0 4V0h1000v40.7C784 64 642 63.3 500 50.7Z"></path>
        </g>
      </svg> */}
      <div className="p-4">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faLocationArrow} className="w-4 text-red-800" />
          <h3>Toronto, ON</h3>
        </div>
        <h1 className="flex flex-col leading-snug">
          <span className="text-xl sm:text-2xl">Hello,</span> I&apos;m Mohamed
        </h1>
        <h2 className="text-base sm:text-xl">
          Software Engineer | Web Developer | Problem Solver
        </h2>
        <div className="flex justify-center gap-4 mt-2">
          <Link
            className="text-white border-[3px] rounded-full p-1 group hover:cursor-pointer hover:border-secondary transition-colors duration-300"
            href="https://github.com/moibra05"
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
