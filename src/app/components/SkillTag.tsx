type Prop = {
  skill: string;
};

export default function SkillTag({ skill }: Prop) {
  return (
    <span className="px-3 py-1 bg-secondary font-bold text-white rounded-xl text-base md:text-lg hover:cursor-default hover:scale-105 transition-transform duration-300">
      {skill}
    </span>
  );
}
