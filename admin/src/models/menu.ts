import { ROLE } from "./../utils/constant";
interface IMenu {
  id: number;
  name: string;
  path: string;
  icon: string;
  acceptableRole?: string[];
}

export const menu: Array<IMenu> = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    icon: "bx bxs-dashboard",
    acceptableRole: [ROLE.ADMIN, ROLE.MOD],
  },
  {
    id: 2,
    name: "Movies",
    path: "/movie",
    icon: "bx bxs-movie-play",
    acceptableRole: [ROLE.ADMIN, ROLE.MOD],
  },
  {
    id: 3,
    name: "Users",
    path: "/user",
    icon: "bx bxs-user",
    acceptableRole: [ROLE.ADMIN],
  },
  {
    id: 4,
    name: "Package",
    path: "/package",
    icon: "bx bxs-package",
    acceptableRole: [ROLE.ADMIN],
  },
  {
    id: 5,
    name: "Comments",
    path: "/comment",
    icon: "bx bxs-comment-detail",
    acceptableRole: [ROLE.ADMIN, ROLE.MOD],
  },
  {
    id: 6,
    name: "Reviews",
    path: "/review",
    icon: "bx bxs-star",
    acceptableRole: [ROLE.ADMIN, ROLE.MOD],
  },
];
