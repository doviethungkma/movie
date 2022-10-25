interface IMenu {
  id: number;
  name: string;
  path: string;
  icon: string;
}

export const menu: Array<IMenu> = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    icon: "bx bxs-dashboard",
  },
  {
    id: 2,
    name: "Movies",
    path: "/movie",
    icon: "bx bxs-movie-play",
  },
  {
    id: 3,
    name: "Users",
    path: "/user",
    icon: "bx bxs-user",
  },
  {
    id: 4,
    name: "Comments",
    path: "/comment",
    icon: "bx bxs-comment-detail",
  },
  {
    id: 5,
    name: "Reviews",
    path: "/review",
    icon: "bx bxs-star",
  },
];
