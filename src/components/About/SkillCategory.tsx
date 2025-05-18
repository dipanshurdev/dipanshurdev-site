import { SkillBadge } from "./index";

export default function SkillCategory({
  title,
  skills,
  isInView,
  direction,
}: any) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-dark dark:text-light">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill: any, index: any) => (
          <SkillBadge
            key={skill.label}
            icon={skill.icon}
            label={skill.label}
            delay={0.1 * index}
            isInView={isInView}
            direction={direction}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

// export default SkillCategory;
