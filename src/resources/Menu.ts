export interface Menu {
  link: string;
  label: string;
  icon: string;
}

export const topMenu: Menu[] = [
  {
    link: "/board/1",
    label: "공지사항",
    icon: "notifications",
  },
  {
    link: "/board/2",
    label: "세계관",
    icon: "map",
  },
  {
    link: "/board/3",
    label: "F&Q",
    icon: "live_help",
  },
];
