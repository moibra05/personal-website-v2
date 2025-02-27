"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
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

  const hamburgerMenu = (
    <div>
      <p>mobile</p>
    </div>
  );

  const desktopMenu = (
    <div>
      <p>desktop</p>
    </div>
  );

  return (
    <nav className="bg-primaryBlue p-4 pl-0 flex justify-between items-center shadow-lg text-white1">
      <Image src="/logo-no-background.png" alt="Logo" width={70} height={70} />
      {isMobile ? hamburgerMenu : desktopMenu}
    </nav>
  );
}
