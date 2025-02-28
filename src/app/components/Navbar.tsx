"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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

  const navLinks = [
    { name: "Home", href: "" },
    { name: "About", href: "" },
    { name: "Projects", href: "" },
    { name: "Contact", href: "" },
  ];

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
        <div className="absolute top-0 left-0 w-full h-full bg-primaryBlue text-white1 flex flex-col items-center justify-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-2xl py-2 overflow-hidden"
            >
              <div
                className={`${
                  isMenuTransitioning ? "translate-y-0" : "translate-y-28"
                } font-bold transition-transform ease-in-out`}
                style={{
                  transitionDuration: `${
                    (navLinks.length - index) * 200
                  }ms`,
                }} // Set duration dynamically
              >
                {link.name}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  const desktopMenu = (
    <div className="flex gap-16">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="py-2 uppercase font-bold"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="bg-primaryBlue p-4 pl-0 flex justify-between items-center shadow-lg text-white1">
      <Image src="/logo-no-background.png" alt="Logo" width={70} height={70} />
      {isMobile ? mobileMenu : desktopMenu}
    </nav>
  );
}
