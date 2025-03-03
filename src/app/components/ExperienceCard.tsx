import SkillTag from "./SkillTag";
import Link from "next/link";

type Props = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  tags?: string[];
};

export default function ExperienceCard({
  title,
  company,
  startDate,
  endDate,
  description,
  tags,
}: Props) {
  return (
    <div className="flex flex-col w-full md:grid grid-cols-[2fr_3fr] md:gap-8 p-8 shadow-contact-form-shadow rounded-2xl">
      <p className="font-light text-base uppercase mb-2 md:text-center sm:text-lg">
        {startDate} - {endDate}
      </p>
      <div className="">
        <p className="text-xl sm:text-2xl">{title}</p>
        <Link
          href="https://www.civiconnect.ca/"
          target="_blank"
          className="text-xl italic sm:text-xl hover:text-secondary transition-colors duration-150"
        >
          {company}
        </Link>
        <p className="text-base sm:text-xl mt-2">{description}</p>
        <div className="flex flex-wrap gap-4 mt-4">
          {tags?.map((tag) => (
            <SkillTag key={tag} skill={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}
