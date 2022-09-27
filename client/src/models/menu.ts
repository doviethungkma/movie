const homeIcon = require("../assets/icons/home.svg").default;
const hboIcon = require("../assets/icons/logo-hbo.svg").default;
const streamIcon = require("../assets/icons/logo-livestream.svg").default;

interface IMenu {
  id: number;
  name: string;
  icon: string;
}

export const menu: Array<IMenu> = [
  { id: 1, name: "Trang chủ", icon: homeIcon },
  { id: 2, name: "HBO", icon: hboIcon },
  { id: 3, name: "Trực tiếp", icon: streamIcon },
];
