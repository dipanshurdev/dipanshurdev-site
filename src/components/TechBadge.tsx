import React from "react";

const TechBadge = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-blue-600 dark:text-purple-300">
      <div className="text-4xl">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default TechBadge;
