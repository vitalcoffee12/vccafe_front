export interface Menu {
  label: string;
  link?: string;
  icon?: string;
  children?: Menu[];
}

export const sideMenu: Menu[] = [
  {
    link: "/board/1",
    label: "공지사항",
    icon: "notifications",
    children: [
      {
        link: "/board/1",
        label: "공지사항",
        icon: "notifications",
        children: [
          { link: "/board/1", label: "공지사항", icon: "notifications" },
          { link: "/board/1", label: "공지사항", icon: "notifications" },
          { link: "/board/1", label: "공지사항", icon: "notifications" },
          { link: "/board/1", label: "공지사항", icon: "notifications" },
          { link: "/board/1", label: "공지사항", icon: "notifications" },
          { link: "/board/1", label: "공지사항", icon: "notifications" },
          { link: "/board/1", label: "공지사항", icon: "notifications" },
        ],
      },
      { link: "/board/1", label: "공지사항", icon: "notifications" },
      { link: "/board/1", label: "공지사항", icon: "notifications" },
      { link: "/board/1", label: "공지사항", icon: "notifications" },
      { link: "/board/1", label: "공지사항", icon: "notifications" },
      { link: "/board/1", label: "공지사항", icon: "notifications" },
      { link: "/board/1", label: "공지사항", icon: "notifications" },
    ],
  },
  {
    link: "/board/2",
    label: "세계관",
    icon: "map",
    children: [
      {
        link: "/board/1",
        label: "공지사항",
        icon: "notifications",
        children: [
          { link: "/board/1", label: "공지사항", icon: "notifications" },
          { link: "/board/1", label: "공지사항", icon: "notifications" },
          { link: "/board/1", label: "공지사항", icon: "notifications" },
          { link: "/board/1", label: "공지사항", icon: "notifications" },
          { link: "/board/1", label: "공지사항", icon: "notifications" },
          { link: "/board/1", label: "공지사항", icon: "notifications" },
          { link: "/board/1", label: "공지사항", icon: "notifications" },
        ],
      },
      { link: "/board/1", label: "공지사항", icon: "notifications" },
      { link: "/board/1", label: "공지사항", icon: "notifications" },
      { link: "/board/1", label: "공지사항", icon: "notifications" },
      { link: "/board/1", label: "공지사항", icon: "notifications" },
      { link: "/board/1", label: "공지사항", icon: "notifications" },
      { link: "/board/1", label: "공지사항", icon: "notifications" },
    ],
  },
  {
    link: "/board/3",
    label: "F&Q",
    icon: "live_help",
  },
];
