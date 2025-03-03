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
    <span className="flex shadow-navbar-shadow gap-1 items-center px-3 py-[6px] bg-secondary font-bold text-white rounded-xl md:text-lg hover:cursor-default hover:scale-[1.025] transition-transform duration-300">
      <Image
        src={imgSrc}
        alt={skill}
        width={24}
        height={24}
        className="inline-block mr-2 filter drop-shadow-md contrast-150"
        onError={() => setImgSrc("/tools-icons/default-icon.png")}
      />
      <div className="text-base">{skill}</div>
    </span>
  );
}
