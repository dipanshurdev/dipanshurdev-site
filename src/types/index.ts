import type { ReactNode } from "react";

export type ThemeType = "light" | "dark";

export type SkillsType = {
  icon: ReactNode;
  label: string;
};

export type SkillCategoryType = {
  title: string;
  skills: Array<SkillsType>;
  isInView: boolean;
  direction: string;
};

export type SkillsBadgeType = {
  key: string;
  icon: ReactNode;
  label: string;
  delay: number;
  isInView: boolean;
  direction: string;
  index: number;
};

export type SocialButtonType = {
  icon: ReactNode;
  label: string;
  href: string;
  delay: number;
  isInView: boolean;
};

export type Command = {
  command: string;
  response: React.ReactNode;
  delay: number;
};
