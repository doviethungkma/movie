interface IMenu {
  id: number;
  name: string;
  icon: string;
}

export const menu: Array<IMenu> = [
  {
    id: 1,
    name: "Dashboard",
    icon: "bx bxs-dashboard",
  },
  {
    id: 2,
    name: "Movies",
    icon: "bx bxs-movie-play",
  },
  {
    id: 3,
    name: "Users",
    icon: "bx bxs-user",
  },
  {
    id: 4,
    name: "Comments",
    icon: "bx bxs-comment-detail",
  },
  {
    id: 5,
    name: "Reviews",
    icon: "bx bxs-star",
  },
];
