type SkillCategoryProps = {
  title: string;
  skills: string[];
};

function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6 transition hover:border-blue-500">
      <h3 className="text-xl font-semibold mb-5">{title}</h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;