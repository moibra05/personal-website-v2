"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMenuTransitioning, setIsMenuTransitioning] =
    useState<boolean>(false);

  const MOBILE_WIDTH = 768;

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth <= MOBILE_WIDTH) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adds delay to hamburger menu section animation so that it's actually visible
  useEffect(() => {
    if (isMenuOpen) {
      setTimeout(() => setIsMenuTransitioning(true), 10);
    } else {
      setIsMenuTransitioning(false);
    }
  }, [isMenuOpen]);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  const desktopResumeLink = (
    <Link
      href="/mohamed_ibrahim_resume.pdf"
      target="_blank"
      className="text-white uppercase font-bold hover:text-secondary hover:border-secondary transition-colors duration-200 border-2 px-2 py-1 text-xs"
    >
      Resume
    </Link>
  );

  const mobileResumeLink = (
    <Link
      href="/mohamed_ibrahim_resume.pdf"
      target="_blank"
      className="text-white font-bold mt-10 text-2xl overflow-hidden"
    >
      <div
        className={`${
          isMenuTransitioning ? "translate-y-0" : "translate-y-28"
        } font-bold transition-transform ease-in-out border-2 px-2 py-1`}
        style={{
          transitionDuration: `${(navLinks.length + 2) * 200}ms`,
        }} // Set duration dynamically
      >
        Resume
      </div>
    </Link>
  );

  const mobileMenu = (
    <div>
      <div className="absolute top-0 right-0 p-4 z-50">
        <Hamburger
          rounded
          label="Show menu"
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
        />
      </div>
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-primary text-white1 flex flex-col items-center justify-center">
          {navLinks.map((link, index) => (
            <ScrollLink
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              offset={-100}
              duration={400}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl py-2 overflow-hidden"
            >
              <div
                className={`${
                  isMenuTransitioning ? "translate-y-0" : "translate-y-28"
                } font-bold transition-transform ease-in-out`}
                style={{
                  transitionDuration: `${(navLinks.length - index) * 200}ms`,
                }} // Set duration dynamically
              >
                {link}
              </div>
            </ScrollLink>
          ))}
          {mobileResumeLink}
        </div>
      )}
    </div>
  );

  const desktopMenu = (
    <div className="flex gap-12 items-center">
      {navLinks.map((link) => (
        <div key={link} className="group relative">
          <ScrollLink
            key={link}
            smooth={true}
            duration={400}
            offset={-150}
            to={link.toLowerCase()}
            className="py-2 uppercase font-bold group-hover:text-secondary transition-colors duration-200"
          >
            {link}
          </ScrollLink>
          {/* Animated Underline */}
          <div className="h-[2px] w-full bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></div>
        </div>
      ))}
      {desktopResumeLink}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary p-4 pl-0 flex justify-between items-center shadow-navbar-shadow text-white1 z-50">
      <Image
        src="/logo-no-background.png"
        alt="Logo"
        width={70}
        height={70}
        className="z-50"
      />
      {isMobile ? mobileMenu : desktopMenu}
    </nav>
  );
}
