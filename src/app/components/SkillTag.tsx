import Image from "next/image";

type Prop = {
  skill: string;
};

export default function SkillTag({ skill }: Prop) {
  return (
    <span className="flex items-center px-3 py-1 bg-secondary font-bold text-white rounded-xl text-base md:text-lg hover:cursor-default hover:scale-105 transition-transform duration-300">
      <Image
        src={`/tools-icons/${skill
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "-")}.png`}
        alt={skill}
        width={24}
        height={24}
        className="inline-block mr-2 hue-rotate-180 filter invert brightness-200"
      />

      {skill}
    </span>
  );
}
