export interface Menu {
  label: string;
  icon?: string;
  children?: MenuItem[];
}

export interface MenuItem {
  label: string;
  link: string;
  icon: string;
}

const mainMenu: Menu[] = [
  {
    label: "공지사항",
    icon: "notifications",
    children: [
      {
        link: "/board/1",
        label: "공지사항",
        icon: "notifications",
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
    label: "세계관",
    icon: "map",
    children: [
      {
        link: "/board/1",
        label: "공지사항",
        icon: "notifications",
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
    label: "F&Q",
    icon: "live_help",
  },
];

const userMenu: Menu[] = [
  {
    label: "마이 페이지",
    icon: "window",
    children: [
      {
        label: "계정 관리",
        link: "/user/account",
        icon: "account_box",
      },
      {
        label: "캐릭터 관리",
        link: "/user/character",
        icon: "sentiment_satisfied",
      },
    ],
  },
];

export function getMenu(link: string) {
  switch (link) {
    case "user":
      return userMenu;

    default:
      return mainMenu;
  }
}
