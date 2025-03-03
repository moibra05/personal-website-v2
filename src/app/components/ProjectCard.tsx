import Image from "next/image";
import Link from "next/link";
import SkillTag from "./SkillTag";

type Props = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

export default function ProjectCard({ title, description, url, tags }: Props) {
  return (
    <div className="flex flex-col-reverse items-center md:flex-row md:even:flex-row-reverse md:w-11/12 max-w-[1000px] mx-auto gap-4 md:gap-8 relative group min-h-fit">
      <Link
        href={url}
        aria-label={`Link to ${title}`}
        className="flex-shrink-0"
      >
        <Image
          src={`/project-images/${title
            .toLowerCase()
            .replace(/\s+/g, "-")}.png`}
          width={475}
          height={200}
          alt={title}
          className="rounded-md border-gray-700 border-2 hover:scale-[1.01] transition-transform duration-300 ease-in-out"
        />
      </Link>
      <div className="flex flex-col gap-4 md:-ml-[12%] md:group-even:ml-0 md:group-even:-mr-[12%]">
        <h3 className="text-xl md:text-2xl font-bold md:text-right group-even:text-left">
          {title}
        </h3>
        <div className="bg-primary opacity-95 rounded-md p-4 md:p-6 md:pl-16 md:group-even:pl-8 md:group-even:pr-16 shadow-contact-form-shadow">
          <p className="text-white font-bold text-base text-justify">
            {description}
          </p>
        </div>
        <div className="flex gap-2 md:gap-4 z-10 flex-wrap md:group-odd:flex-row-reverse">
          {tags.map((tag) => (
            <SkillTag key={tag} skill={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
