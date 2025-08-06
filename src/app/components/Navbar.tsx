"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Hamburger from "hamburger-react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isNavbarTransitioning, setIsNavbarTransitioning] =
    useState<boolean>(false);
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

  useEffect(() => {
    setTimeout(() => setIsNavbarTransitioning(true), 10);
  }, []);

  const navLinks = ["Home", "About", "Projects", "Contact"];

  const desktopResumeLink = (
    <Link
      href="/mohamed_ibrahim_resume.pdf"
      target="_blank"
      className="group relative px-4 py-2 text-white font-semibold border-2 border-blue-500/60 rounded-xl bg-blue-500/10 backdrop-blur-sm hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
    >
      <span className="relative z-10">Resume</span>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </Link>
  );

  const mobileResumeLink = (
    <Link
      href="/mohamed_ibrahim_resume.pdf"
      target="_blank"
      className="text-white font-bold mt-8 text-xl overflow-hidden group"
    >
      <div
        className={`${
          isMenuTransitioning ? "translate-y-0" : "translate-y-28"
        } font-bold transition-transform ease-in-out px-6 py-3 border-2 border-blue-500/60 rounded-xl bg-blue-500/10 backdrop-blur-sm group-hover:border-blue-400 group-hover:bg-blue-500/20`}
        style={{
          transitionDuration: `${(navLinks.length + 2) * 200}ms`,
        }}
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
              href={`#${link.toLowerCase()}`}
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
    <div className="flex gap-8 items-center">
      {navLinks.map((link) => (
        <div key={link} className="group relative">
          <ScrollLink
            key={link}
            smooth={true}
            duration={400}
            offset={-150}
            to={link.toLowerCase()}
            href={`#${link.toLowerCase()}`}
            className="relative font-semibold text-white transition-all duration-300 cursor-pointer rounded-lg hover:backdrop-blur-sm hover:scale-105 uppercase"
          >
            <span className="relative z-10 group-hover:text-blue-200 transition-colors duration-300">
              {link}
            </span>
          </ScrollLink>
          {/* Animated Underline */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></div>
        </div>
      ))}
      {desktopResumeLink}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-lg border-b border-white/10 p-4 pl-0 flex justify-between items-center text-white z-50 transition-all duration-[2s] ease-in-out shadow-lg shadow-black/25 ${
        isNavbarTransitioning ? "translate-y-0" : "-translate-y-96"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
      <Image
        src="/logo-no-background.png"
        alt="Logo"
        width={70}
        height={70}
        className="z-50 relative hover:scale-105 transition-transform duration-300"
      />
      {isMobile ? mobileMenu : desktopMenu}
    </nav>
  );
}
