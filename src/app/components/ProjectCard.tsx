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
          src={`/placeholder.png`}
          width={400}
          height={200}
          alt={title}
          className="rounded-md"
        />
      </Link>
      <div className="flex flex-col gap-4 md:-ml-[12%] md:group-even:ml-0 md:group-even:-mr-[12%]">
        <h3 className="text-xl md:text-2xl font-bold md:text-right group-even:text-left">
          {title}
        </h3>
        <div className="bg-textGray opacity-95 rounded-md p-4 md:p-8 md:pl-16 md:group-even:pl-8 md:group-even:pr-16 shadow-2xl">
          <p className="text-primary font-bold text-base text-justify">
            {description}
          </p>
        </div>
        <div className="flex gap-2 md:gap-4">
          {tags.map((tag) => (
            <SkillTag key={tag} skill={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
