export const topMenu: Menu[] = [
  {
    link: "/about",
    label: "소개",
    icon: "diamond",
  },
  {
    link: "/functions",
    label: "기능",
    icon: "settings",
  },
  {
    link: "/gallary",
    label: "갤러리",
    icon: "palette",
  },
];

export interface Menu {
  link: string;
  label: string;
  icon: string;
}
