"use client";

import { useState } from "react";
import Image from "next/image";

type Prop = {
  skill: string;
};

export default function SkillTag({ skill }: Prop) {
  const [imgSrc, setImgSrc] = useState(
    `/tools-icons/${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}.png`
  );

  return (
    <span className="flex items-center px-3 py-1 bg-secondary font-bold text-white rounded-xl text-base md:text-lg hover:cursor-default hover:scale-105 transition-transform duration-300">
      <Image
        src={imgSrc}
        alt={skill}
        width={24}
        height={24}
        className="inline-block mr-2 hue-rotate-180 filter invert brightness-200"
        onError={() => setImgSrc("/tools-icons/default-icon.png")}
      />

      {skill}
    </span>
  );
}
